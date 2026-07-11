// Firebase Authentication & Firestore Script for AEGIS PRO (Compat Mode)

(function() {
  'use strict';

  let isSyncingFromCloud = false;

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
  let app, auth, db;
  try {
    app = firebase.initializeApp(firebaseConfig);
    auth = firebase.auth();
    db = firebase.firestore();
    if (typeof firebase.analytics === 'function') {
      firebase.analytics();
    }
    console.log("[Firebase Auth] SDK compat services initialized successfully.");
  } catch (e) {
    console.error("[Firebase Auth] Error initializing Firebase SDK:", e);
    return;
  }

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

  // Helper to escape HTML tags for safe dynamic UI injection
  function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
  }

  // Debounced progress saver to prevent spamming Firestore writes
  let saveTimeout = null;
  function saveProgressToCloud(uid, state) {
    clearTimeout(saveTimeout);
    saveTimeout = setTimeout(() => {
      db.collection("users").doc(uid).set(state, { merge: true })
        .then(() => {
          console.log("[Firebase Auth] Progress synced to Firestore successfully.");
        })
        .catch((e) => {
          console.error("[Firebase Auth] Error syncing progress to Firestore:", e);
          showToast("Sync error! Saved locally.", "err");
        });
    }, 1000);
  }

  const isDashboard = !!document.getElementById("app");

  // Helper to dynamically calculate and display operational stats in the Modal
  function updateModalStats(modal) {
    if (typeof getAll === 'function' && typeof getDone === 'function' && typeof PHASES !== 'undefined') {
      const overall = getAll() ? Math.round(getDone() / getAll() * 100) : 0;
      const overallLabel = modal.querySelector('#modal-pct-overall');
      const overallFill = modal.querySelector('#modal-fill-overall');
      if (overallLabel) overallLabel.textContent = overall + '%';
      if (overallFill) overallFill.style.width = overall + '%';
      
      const p1Label = modal.querySelector('#modal-pct-p1');
      const p2Label = modal.querySelector('#modal-pct-p2');
      const p3Label = modal.querySelector('#modal-pct-p3');
      const p4Label = modal.querySelector('#modal-pct-p4');
      
      if (p1Label) p1Label.textContent = (typeof phasePct === 'function' ? phasePct(PHASES[0]) : 0) + '%';
      if (p2Label) p2Label.textContent = (typeof phasePct === 'function' ? phasePct(PHASES[1]) : 0) + '%';
      if (p3Label) p3Label.textContent = (typeof phasePct === 'function' ? phasePct(PHASES[2]) : 0) + '%';
      if (p4Label) p4Label.textContent = (typeof phasePct === 'function' ? phasePct(PHASES[3]) : 0) + '%';
      
      const ctfsLabel = modal.querySelector('#modal-ctfs-solved');
      const ctfsCount = (window.S && window.S.ctfs) ? Object.values(window.S.ctfs).filter(Boolean).length : 0;
      if (ctfsLabel) ctfsLabel.textContent = ctfsCount;
    }
  }

  // Setup Session Guards and Database Sync
  auth.onAuthStateChanged((user) => {
    if (user) {
      console.log(`[Firebase Auth] Session active for: ${user.email}`);

      // If on auth pages, redirect to dashboard
      if (!isDashboard) {
        window.location.replace("dashboard.html");
        return;
      }

      let userProfile = {};

      // 1. Fetch user data and progress from Firestore
      db.collection("users").doc(user.uid).get()
        .then((docSnap) => {
          if (docSnap.exists) {
            userProfile = docSnap.data();
            console.log("[Firebase Auth] Loaded progress state from Firestore.");

            // Overwrite local progress with cloud progress to ensure clean load
            if (window.S) {
              isSyncingFromCloud = true;
              window.S.done = userProfile.done || {};
              window.S.ctfs = userProfile.ctfs || {};
              if (userProfile.theme !== undefined) window.S.theme = userProfile.theme;
              if (userProfile.sound !== undefined) window.S.sound = userProfile.sound;

              // Save and apply changes
              if (typeof window.saveS === 'function') window.saveS();
              if (typeof window.applyTheme === 'function') window.applyTheme();
              if (typeof window.applySound === 'function') window.applySound();
              if (typeof window.syncProgress === 'function') window.syncProgress();
              if (typeof window.renderDashboard === 'function') window.renderDashboard();
              
              setTimeout(() => { isSyncingFromCloud = false; }, 500);
            }
          } else {
            console.log("[Firebase Auth] No cloud progress found. Initializing profile on Firestore.");
            if (window.S) {
              db.collection("users").doc(user.uid).set(window.S, { merge: true });
            }
          }
        })
        .catch((err) => {
          console.error("[Firebase Auth] Error fetching cloud state:", err);
          showToast("Cloud sync failed. Operating offline.", "err");
        });

      // 2. Wire up Dashboard Header / Sidebar Actions
      const logoutBtn = document.getElementById("logout-btn");
      if (logoutBtn) {
        logoutBtn.textContent = '🚪 Sign Out';
        logoutBtn.onclick = function(e) {
          e.preventDefault();
          e.stopPropagation();
          if (confirm("Are you sure you want to terminate your session?")) {
            auth.signOut()
              .then(() => {
                showToast("Session terminated.", "ok");
                window.location.replace("index.html");
              })
              .catch(() => {
                showToast("Logout failed.", "err");
              });
          }
        };
      }

      // 3. Wire up Operator Profile Console Action
      const accountBtn = document.getElementById("account-btn");
      if (accountBtn) {
        // Update sidebar button immediately if profile name is loaded
        if (userProfile.name) {
          accountBtn.innerHTML = `👤 ${escapeHtml(userProfile.name)}`;
        }
        
        accountBtn.onclick = function(e) {
          e.preventDefault();

          if (document.getElementById('aegis-account-modal')) return;

          const modal = document.createElement('div');
          modal.id = 'aegis-account-modal';
          modal.className = 'account-modal';
          
          modal.innerHTML = `
            <div class="account-modal-card">
              <div class="account-modal-header">
                <h2 class="account-modal-title">🔐 Operator Console</h2>
                <button class="account-modal-close" id="close-account-modal">✕</button>
              </div>
              
              <div class="modal-tabs">
                <button class="modal-tab-btn active" data-tab="tab-personal">👤 Profile</button>
                <button class="modal-tab-btn" data-tab="tab-stats">📊 Stats</button>
                <button class="modal-tab-btn" data-tab="tab-security">⚡ Actions</button>
              </div>
              
              <div class="account-modal-body">
                <!-- Tab 1: Personal Data -->
                <div id="tab-personal" class="modal-tab-content active">
                  <div class="account-detail-row">
                    <span class="account-detail-lbl">Secure Identity (Email)</span>
                    <span class="account-detail-val" style="opacity: 0.7; background: rgba(255, 255, 255, 0.02);">${escapeHtml(user.email)}</span>
                  </div>
                  <div class="account-detail-row">
                    <label class="account-detail-lbl" for="edit-name">Operator Name</label>
                    <input type="text" id="edit-name" class="gi" value="${escapeHtml(userProfile.name || 'Anonymous Specialist')}" required style="border: 1px solid var(--border);" />
                  </div>
                  <div class="account-detail-row">
                    <label class="account-detail-lbl" for="edit-role">Designation / Role</label>
                    <select id="edit-role" class="gi" style="background: rgba(0, 0, 0, 0.2); border: 1px solid var(--border); color: var(--on-surface); cursor: pointer;">
                      <option value="Cloud Security Engineer">Cloud Security Engineer</option>
                      <option value="DevSecOps Engineer">DevSecOps Engineer</option>
                      <option value="Security Analyst">Security Analyst</option>
                      <option value="Penetration Tester">Penetration Tester</option>
                      <option value="Student / Learner">Student / Learner</option>
                    </select>
                  </div>
                  <div class="account-detail-row">
                    <label class="account-detail-lbl" for="edit-question">Security Question</label>
                    <select id="edit-question" class="gi" style="background: rgba(0, 0, 0, 0.2); border: 1px solid var(--border); color: var(--on-surface); cursor: pointer;">
                      <option value="What was your first hacking handle?">What was your first hacking handle?</option>
                      <option value="What is your favorite encryption algorithm?">What is your favorite encryption algorithm?</option>
                      <option value="What is your first security certification?">What is your first security certification?</option>
                      <option value="What was the name of your first computer?">What was the name of your first computer?</option>
                      <option value="Google Account Login">Google Account Login (Linked)</option>
                    </select>
                  </div>
                  <div class="account-detail-row">
                    <label class="account-detail-lbl" for="edit-answer">Security Answer</label>
                    <input type="text" id="edit-answer" class="gi" value="${escapeHtml(userProfile.answer || '')}" style="border: 1px solid var(--border);" />
                  </div>
                  <button class="calc-btn" id="save-profile-btn" style="margin-top: 10px;">💾 Save Profile Changes</button>
                </div>

                <!-- Tab 2: Operational Stats -->
                <div id="tab-stats" class="modal-tab-content">
                  <div class="stat-progress-section">
                    <div class="stat-progress-row">
                      <span>Overall Completion</span>
                      <strong id="modal-pct-overall">0%</strong>
                    </div>
                    <div class="modal-progress-bar">
                      <div class="modal-progress-fill" id="modal-fill-overall" style="width: 0%;"></div>
                    </div>
                  </div>
                  <div class="stat-grid" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; margin-top: 10px;">
                    <div class="stat-box">
                      <span class="stat-box-lbl">Phase 1</span>
                      <strong class="stat-box-val" id="modal-pct-p1">0%</strong>
                    </div>
                    <div class="stat-box">
                      <span class="stat-box-lbl">Phase 2</span>
                      <strong class="stat-box-val" id="modal-pct-p2">0%</strong>
                    </div>
                    <div class="stat-box">
                      <span class="stat-box-lbl">Phase 3</span>
                      <strong class="stat-box-val" id="modal-pct-p3">0%</strong>
                    </div>
                    <div class="stat-box">
                      <span class="stat-box-lbl">Phase 4</span>
                      <strong class="stat-box-val" id="modal-pct-p4">0%</strong>
                    </div>
                    <div class="stat-box" style="grid-column: span 2;">
                      <span class="stat-box-lbl">🚩 CTF Challenges Solved</span>
                      <strong class="stat-box-val" id="modal-ctfs-solved">0</strong>
                    </div>
                  </div>
                </div>

                <!-- Tab 3: Security & Session Operations -->
                <div id="tab-security" class="modal-tab-content">
                  <div style="display: flex; flex-direction: column; gap: 12px; margin-top: 5px;">
                    <button class="google-btn" id="modal-reset-pw-btn" style="background: rgba(0, 212, 255, 0.05); border-color: rgba(0, 212, 255, 0.2); font-size: 13.5px; height: 44px;">
                      🔑 Send Password Reset Email
                    </button>
                    <button class="google-btn" id="modal-reset-progress-btn" style="background: rgba(255, 71, 87, 0.05); border-color: rgba(255, 71, 87, 0.2); color: #ff4757; font-size: 13.5px; height: 44px;">
                      🧹 Factory Reset All Progress
                    </button>
                    <button class="calc-btn" id="modal-signout-btn" style="background: var(--grad-secondary); box-shadow: 0 4px 15px rgba(255, 71, 87, 0.2); height: 44px; font-size: 13.5px;">
                      🚪 Terminate Session (Sign Out)
                    </button>
                  </div>
                </div>
              </div>
            </div>
          `;

          document.body.appendChild(modal);

          // Preselect dropdown values
          const editRole = modal.querySelector('#edit-role');
          if (editRole && userProfile.role) editRole.value = userProfile.role;
          const editQuestion = modal.querySelector('#edit-question');
          if (editQuestion && userProfile.question) editQuestion.value = userProfile.question;

          // Wire up Tab Switching
          const tabBtns = modal.querySelectorAll('.modal-tab-btn');
          const tabContents = modal.querySelectorAll('.modal-tab-content');
          tabBtns.forEach(btn => {
            btn.onclick = function() {
              tabBtns.forEach(b => b.classList.remove('active'));
              tabContents.forEach(c => c.classList.remove('active'));
              btn.classList.add('active');
              modal.querySelector(`#${btn.dataset.tab}`).classList.add('active');
              if (btn.dataset.tab === 'tab-stats') {
                updateModalStats(modal);
              }
            };
          });

          // Wire up Save Profile Button
          const saveBtn = modal.querySelector('#save-profile-btn');
          if (saveBtn) {
            saveBtn.onclick = function() {
              const newName = modal.querySelector('#edit-name').value.trim();
              const newRole = modal.querySelector('#edit-role').value;
              const newQuestion = modal.querySelector('#edit-question').value;
              const newAnswer = modal.querySelector('#edit-answer').value.trim().toLowerCase();
              
              if (!newName) {
                showToast("Name cannot be empty.", "err");
                return;
              }
              
              saveBtn.disabled = true;
              db.collection("users").doc(user.uid).update({
                name: newName,
                role: newRole,
                question: newQuestion,
                answer: newAnswer
              })
              .then(() => {
                userProfile.name = newName;
                userProfile.role = newRole;
                userProfile.question = newQuestion;
                userProfile.answer = newAnswer;
                
                if (accountBtn) accountBtn.innerHTML = `👤 ${escapeHtml(newName)}`;
                showToast("Profile updated successfully.", "ok");
                saveBtn.disabled = false;
              })
              .catch((e) => {
                console.error("[Firebase Auth] Error updating profile:", e);
                showToast("Failed to update profile.", "err");
                saveBtn.disabled = false;
              });
            };
          }

          // Wire up Password Reset
          const resetPwBtn = modal.querySelector('#modal-reset-pw-btn');
          if (resetPwBtn) {
            resetPwBtn.onclick = function() {
              resetPwBtn.disabled = true;
              auth.sendPasswordResetEmail(user.email)
                .then(() => {
                  showToast("Password reset email sent.", "ok");
                  resetPwBtn.disabled = false;
                })
                .catch((err) => {
                  console.error("[Firebase Auth] Password reset error:", err);
                  showToast("Failed to send reset email.", "err");
                  resetPwBtn.disabled = false;
                });
            };
          }

          // Wire up Factory Reset
          const resetProgressBtn = modal.querySelector('#modal-reset-progress-btn');
          if (resetProgressBtn) {
            resetProgressBtn.onclick = function() {
              if (confirm("⚠️ WARNING: This will permanently delete ALL your local and cloud progress. This action cannot be undone. Proceed?")) {
                resetProgressBtn.disabled = true;
                
                if (typeof S !== 'undefined') {
                  S.done = {};
                  S.ctfs = {};
                  S.theme = 'dark';
                  S.sound = true;
                  if (typeof saveS === 'function') saveS();
                  if (typeof applyTheme === 'function') applyTheme();
                  if (typeof applySound === 'function') applySound();
                  if (typeof syncProgress === 'function') syncProgress();
                  if (typeof PHASES !== 'undefined') {
                    PHASES.forEach((_, i) => {
                      const pg = document.getElementById('page-phase' + (i + 1));
                      if (pg) {
                        pg.innerHTML = '';
                        pg._done = false;
                      }
                    });
                  }
                }
                
                db.collection("users").doc(user.uid).update({
                  done: {},
                  ctfs: {}
                })
                .then(() => {
                  showToast("Local & cloud progress factory reset.", "ok");
                  updateModalStats(modal);
                  resetProgressBtn.disabled = false;
                })
                .catch((e) => {
                  console.error("[Firebase Auth] Error resetting cloud state:", e);
                  showToast("Cloud reset failed, but local progress is reset.", "err");
                  resetProgressBtn.disabled = false;
                });
              }
            };
          }

          // Wire up Logout
          const signoutBtn = modal.querySelector('#modal-signout-btn');
          if (signoutBtn) {
            signoutBtn.onclick = function() {
              if (confirm("Are you sure you want to terminate your session?")) {
                signoutBtn.disabled = true;
                auth.signOut()
                  .then(() => {
                    showToast("Session terminated.", "ok");
                    modal.remove();
                    window.location.replace("index.html");
                  })
                  .catch(() => {
                    showToast("Logout failed.", "err");
                    signoutBtn.disabled = false;
                  });
              }
            };
          }

          const closeBtn = modal.querySelector('#close-account-modal');
          const closeModal = () => modal.remove();
          if (closeBtn) closeBtn.onclick = closeModal;
          modal.onclick = function(e) {
            if (e.target === modal) closeModal();
          };
        };
      }

      // 3. Listen to progress changes in the UI and save them to Firestore
      window.addEventListener("aegisStateChanged", (e) => {
        if (!isSyncingFromCloud) {
          saveProgressToCloud(user.uid, e.detail);
        }
      });

    } else {
      console.log("[Firebase Auth] No user session found.");
      // If we're on the dashboard but not logged in, redirect to login page
      if (isDashboard) {
        window.location.replace("index.html");
      }
    }
  });

  // Attach form event listeners when DOM is ready
  function bindForms() {
    if (isDashboard) return;

    // Google Sign-In handler
    const googleBtn = document.getElementById("google-signin-btn");
    if (googleBtn) {
      googleBtn.addEventListener("click", () => {
        googleBtn.disabled = true;
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider)
          .then((result) => {
            const user = result.user;
            showToast("Authenticated! Opening session...", "ok");
            
            // Check if user already has a document in Firestore
            return db.collection("users").doc(user.uid).get()
              .then((docSnap) => {
                if (!docSnap.exists) {
                  // Initialize a default profile for the user in Firestore, preserving guest progress
                  return db.collection("users").doc(user.uid).set({
                    name: user.displayName || "Anonymous Specialist",
                    role: "Student / Learner",
                    done: (window.S && window.S.done) ? window.S.done : {},
                    v: '2.0',
                    sound: true,
                    theme: 'dark',
                    ctfs: (window.S && window.S.ctfs) ? window.S.ctfs : {}
                  });
                }
              });
          })
          .catch((error) => {
            console.error("[Firebase Auth] Google sign-in error:", error);
            let errorMsg = "Google authentication failed.";
            if (error.code === "auth/popup-blocked") {
              errorMsg = "Popup blocked by browser. Please enable popups.";
            } else if (error.code === "auth/configuration-not-found") {
              errorMsg = "Google Sign-In is not configured in Firebase.";
            } else if (error.code === "auth/unauthorized-domain") {
              errorMsg = "Unauthorized domain. Add this host to Firebase console.";
            }
            showToast(errorMsg, "err");
            googleBtn.disabled = false;
          });
      });
    }

    // Login form handler
    const loginForm = document.getElementById("login-form");
    if (loginForm) {
      loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = document.getElementById("email").value.trim().toLowerCase();
        const password = document.getElementById("password").value;
        const btn = loginForm.querySelector("button[type='submit']");

        if (btn) btn.disabled = true;
        auth.signInWithEmailAndPassword(email, password)
          .then(() => {
            showToast("Authenticated! Opening session...", "ok");
          })
          .catch((error) => {
            console.error("[Firebase Auth] Login error:", error);
            let errorMsg = "Access denied. Check credentials.";
            if (error.code === "auth/invalid-credential" || error.code === "auth/user-not-found" || error.code === "auth/wrong-password") {
              errorMsg = "Invalid email or password.";
            } else if (error.code === "auth/too-many-requests") {
              errorMsg = "Too many failed attempts. Try again later.";
            }
            showToast(errorMsg, "err");
            if (btn) btn.disabled = false;
          });
      });
    }

    // Register form handler
    const registerForm = document.getElementById("register-form");
    if (registerForm) {
      registerForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("reg-name").value.trim();
        const email = document.getElementById("reg-email").value.trim().toLowerCase();
        const role = document.getElementById("reg-role").value;
        const question = document.getElementById("reg-question").value;
        const answer = document.getElementById("reg-answer").value.trim().toLowerCase();
        const password = document.getElementById("reg-password").value;
        const btn = registerForm.querySelector("button[type='submit']");

        if (password.length < 6) {
          showToast("Password must be at least 6 characters.", "err");
          return;
        }

        if (btn) btn.disabled = true;

        auth.createUserWithEmailAndPassword(email, password)
          .then((userCredential) => {
            const user = userCredential.user;
            // Initialize document in Firestore, preserving guest progress
            return db.collection("users").doc(user.uid).set({
              name: name,
              role: role,
              question: question,
              answer: answer,
              done: (window.S && window.S.done) ? window.S.done : {},
              v: '2.0',
              sound: true,
              theme: 'dark',
              ctfs: (window.S && window.S.ctfs) ? window.S.ctfs : {}
            });
          })
          .then(() => {
            showToast("Access initialized! Welcome.", "ok");
          })
          .catch((error) => {
            console.error("[Firebase Auth] Register error:", error);
            let errorMsg = error.message || "Registration failed.";
            if (error.code === "auth/email-already-in-use") {
              errorMsg = "This email is already registered.";
            } else if (error.code === "auth/invalid-email") {
              errorMsg = "Please enter a valid email address.";
            }
            showToast(errorMsg, "err");
            if (btn) btn.disabled = false;
          });
      });
    }

    // Password recovery form handler
    const resetForm = document.getElementById("reset-form");
    if (resetForm) {
      resetForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = document.getElementById("reset-email").value.trim().toLowerCase();
        const btn = resetForm.querySelector("button[type='submit']");

        if (btn) btn.disabled = true;
        auth.sendPasswordResetEmail(email)
          .then(() => {
            showToast("Transmission success! Check email.", "ok");
            setTimeout(() => {
              window.location.replace("index.html");
            }, 2500);
          })
          .catch((error) => {
            console.error("[Firebase Auth] Password recovery error:", error);
            let errorMsg = "Transmission failed.";
            if (error.code === "auth/user-not-found") {
              errorMsg = "No account found with this email.";
            } else if (error.code === "auth/invalid-email") {
              errorMsg = "Invalid email format.";
            }
            showToast(errorMsg, "err");
            if (btn) btn.disabled = false;
          });
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bindForms);
  } else {
    bindForms();
  }
})();
