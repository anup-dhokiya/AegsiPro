import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-analytics.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0-t4fOkrKe7aa43f9U9qjjdH7cD7DvxY",
  authDomain: "aegsipro-4b227.firebaseapp.com",
  projectId: "aegsipro-4b227",
  storageBucket: "aegsipro-4b227.firebasestorage.app",
  messagingSenderId: "930650138048",
  appId: "1:930650138048:web:cf4ed0db4208a8c72d9425",
  measurementId: "G-ZNHDWJMMH1"
};

// Initialize Firebase services
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);

// Helper to show toasts using Aegis Pro's built-in toast utility
function showToast(msg, type = '') {
  if (typeof window.toast === 'function') {
    window.toast(msg, type);
  } else {
    console.log(`[Firebase Auth Toast] ${type}: ${msg}`);
    const t = document.createElement('div');
    t.className = 'toast ' + type;
    t.textContent = msg;
    document.body.appendChild(t);
    setTimeout(() => t.remove(), 3000);
  }
}

// Helper to escape HTML tags for dynamic UI injection
function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}

// Debounced progress saver to prevent spamming Firestore writes
let saveTimeout = null;
function saveProgressToCloud(uid, state) {
  clearTimeout(saveTimeout);
  saveTimeout = setTimeout(async () => {
    try {
      // Use { merge: true } to preserve user profile info (name, role, security question/answer)
      await setDoc(doc(db, "users", uid), state, { merge: true });
      console.log("[Firebase Auth] Progress synced to Firestore successfully.");
    } catch (e) {
      console.error("[Firebase Auth] Error syncing progress to Firestore:", e);
      showToast("Sync error! Saved locally.", "err");
    }
  }, 1000);
}

// Handle Form Submissions on Auth Pages
document.addEventListener("DOMContentLoaded", () => {
  const isDashboard = !!document.getElementById("app");
  if (isDashboard) return; // Skip form handlers if on dashboard

  // Login form handler
  const loginForm = document.getElementById("login-form");
  if (loginForm) {
    loginForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const email = document.getElementById("email").value.trim().toLowerCase();
      const password = document.getElementById("password").value;
      const btn = loginForm.querySelector("button[type='submit']");

      try {
        if (btn) btn.disabled = true;
        await signInWithEmailAndPassword(auth, email, password);
        showToast("Authenticated! Opening session...", "ok");
        // Redirect is handled automatically by onAuthStateChanged listener below
      } catch (error) {
        console.error("[Firebase Auth] Login error:", error);
        let errorMsg = "Access denied. Check credentials.";
        if (error.code === "auth/invalid-credential" || error.code === "auth/user-not-found" || error.code === "auth/wrong-password") {
          errorMsg = "Invalid email or password.";
        } else if (error.code === "auth/too-many-requests") {
          errorMsg = "Too many failed attempts. Try again later.";
        }
        showToast(errorMsg, "err");
        if (btn) btn.disabled = false;
      }
    });
  }

  // Register form handler
  const registerForm = document.getElementById("register-form");
  if (registerForm) {
    registerForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const name = document.getElementById("reg-name").value.trim();
      const email = document.getElementById("reg-email").value.trim().toLowerCase();
      const role = document.getElementById("reg-role").value;
      const question = document.getElementById("reg-question").value;
      const answer = document.getElementById("reg-answer").value.trim().toLowerCase();
      const password = document.getElementById("reg-password").value;
      const btn = registerForm.querySelector("button[type='submit']");

      try {
        if (btn) btn.disabled = true;
        if (password.length < 6) {
          throw new Error("Password must be at least 6 characters.");
        }

        // 1. Create auth user credentials in Firebase Authentication
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // 2. Initialize user document in Firestore containing profile details and empty progress state
        await setDoc(doc(db, "users", user.uid), {
          name: name,
          role: role,
          question: question,
          answer: answer,
          done: {},
          v: '2.0',
          sound: true,
          theme: 'dark',
          ctfs: {}
        });

        showToast("Access initialized! Welcome.", "ok");
        // Redirect is handled automatically by onAuthStateChanged listener below
      } catch (error) {
        console.error("[Firebase Auth] Register error:", error);
        let errorMsg = error.message || "Registration failed.";
        if (error.code === "auth/email-already-in-use") {
          errorMsg = "This email is already registered.";
        } else if (error.code === "auth/invalid-email") {
          errorMsg = "Please enter a valid email address.";
        }
        showToast(errorMsg, "err");
        if (btn) btn.disabled = false;
      }
    });
  }

  // Password recovery form handler
  const resetForm = document.getElementById("reset-form");
  if (resetForm) {
    resetForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const email = document.getElementById("reset-email").value.trim().toLowerCase();
      const btn = resetForm.querySelector("button[type='submit']");

      try {
        if (btn) btn.disabled = true;
        await sendPasswordResetEmail(auth, email);
        showToast("Transmission success! Check email.", "ok");
        setTimeout(() => {
          window.location.replace("index.html");
        }, 2500);
      } catch (error) {
        console.error("[Firebase Auth] Password recovery error:", error);
        let errorMsg = "Transmission failed.";
        if (error.code === "auth/user-not-found") {
          errorMsg = "No account found with this email.";
        } else if (error.code === "auth/invalid-email") {
          errorMsg = "Invalid email format.";
        }
        showToast(errorMsg, "err");
        if (btn) btn.disabled = false;
      }
    });
  }
});

// Setup Session Guards and Database Sync
onAuthStateChanged(auth, async (user) => {
  const isDashboard = !!document.getElementById("app");

  if (user) {
    console.log(`[Firebase Auth] Session active for: ${user.email}`);

    // If on auth pages, redirect to dashboard
    if (!isDashboard) {
      window.location.replace("dashboard.html");
      return;
    }

    let userProfile = {};

    // 1. Fetch user data and progress from Firestore
    try {
      const docSnap = await getDoc(doc(db, "users", user.uid));
      if (docSnap.exists()) {
        userProfile = docSnap.data();
        console.log("[Firebase Auth] Loaded progress state from Firestore.");

        // Merge Firestore progress state S into local state
        if (window.S) {
          // Merge 'done' completions
          const localDone = window.S.done || {};
          const cloudDone = userProfile.done || {};
          window.S.done = { ...localDone, ...cloudDone };

          // Merge 'ctfs' completions
          const localCtfs = window.S.ctfs || {};
          const cloudCtfs = userProfile.ctfs || {};
          window.S.ctfs = { ...localCtfs, ...cloudCtfs };

          if (userProfile.theme !== undefined) window.S.theme = userProfile.theme;
          if (userProfile.sound !== undefined) window.S.sound = userProfile.sound;

          // Save and apply changes
          if (typeof window.saveS === 'function') window.saveS();
          if (typeof window.applyTheme === 'function') window.applyTheme();
          if (typeof window.applySound === 'function') window.applySound();
          if (typeof window.syncProgress === 'function') window.syncProgress();
          if (typeof window.renderDashboard === 'function') window.renderDashboard();
        }
      } else {
        console.log("[Firebase Auth] No cloud progress found. Initializing profile on Firestore.");
        if (window.S) {
          await setDoc(doc(db, "users", user.uid), window.S, { merge: true });
        }
      }
    } catch (err) {
      console.error("[Firebase Auth] Error fetching cloud state:", err);
      showToast("Cloud sync failed. Operating offline.", "err");
    }

    // 2. Wire up Dashboard Header / Sidebar Actions
    const logoutBtn = document.getElementById("logout-btn");
    if (logoutBtn) {
      logoutBtn.textContent = '🚪 Logout';
      logoutBtn.onclick = async (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (confirm("Are you sure you want to terminate your session?")) {
          try {
            await signOut(auth);
            showToast("Session terminated.", "ok");
            window.location.replace("index.html");
          } catch (e) {
            showToast("Logout failed.", "err");
          }
        }
      };
    }

    const accountBtn = document.getElementById("account-btn");
    if (accountBtn) {
      if (userProfile.name) {
        accountBtn.innerHTML = `👤 ${escapeHtml(userProfile.name)}`;
      }
      
      accountBtn.onclick = (e) => {
        e.preventDefault();

        // Inject custom profile overlay modal on click
        if (document.getElementById('aegis-account-modal')) return;

        const modal = document.createElement('div');
        modal.id = 'aegis-account-modal';
        modal.className = 'account-modal';
        
        modal.innerHTML = `
          <div class="account-modal-card">
            <div class="account-modal-header">
              <h2 class="account-modal-title">🔐 Terminal Credentials</h2>
              <button class="account-modal-close" id="close-account-modal">✕</button>
            </div>
            <div class="account-modal-body">
              <div class="account-detail-row">
                <span class="account-detail-lbl">Full Name</span>
                <span class="account-detail-val">${escapeHtml(userProfile.name || 'Anonymous Specialist')}</span>
              </div>
              <div class="account-detail-row">
                <span class="account-detail-lbl">Designation / Role</span>
                <span class="account-detail-val">${escapeHtml(userProfile.role || 'Security Specialist')}</span>
              </div>
              <div class="account-detail-row">
                <span class="account-detail-lbl">Secure Identity (Email)</span>
                <span class="account-detail-val">${escapeHtml(user.email)}</span>
              </div>
            </div>
            <div class="account-modal-footer">
              <button class="calc-btn account-modal-btn" id="close-account-modal-btn" style="width: 100%;">Acknowledge</button>
            </div>
          </div>
        `;

        document.body.appendChild(modal);

        const closeBtn1 = modal.querySelector('#close-account-modal');
        const closeBtn2 = modal.querySelector('#close-account-modal-btn');
        
        const closeModal = () => modal.remove();
        closeBtn1.onclick = closeModal;
        closeBtn2.onclick = closeModal;
        
        modal.onclick = function(e) {
          if (e.target === modal) closeModal();
        };
      };
    }

    // 3. Listen to progress changes in the UI and save them to Firestore
    window.addEventListener("aegisStateChanged", (e) => {
      saveProgressToCloud(user.uid, e.detail);
    });

  } else {
    console.log("[Firebase Auth] No user session found.");
    // If we're on the dashboard but not logged in, redirect to login page
    if (isDashboard) {
      window.location.replace("index.html");
    }
  }
});
