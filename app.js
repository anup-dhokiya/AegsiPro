'use strict';
// ══════════════════════════════════════════════
// AEGIS PRO v2.0 — COMPLETE DATA ENGINE
// ══════════════════════════════════════════════

// ── ROADMAP DATA ──────────────────────────────
const PHASES = [
  {
    id:'p1',title:'PHASE 1: FOUNDATIONS & AUTOMATION',
    subtitle:'Year 2, Semesters 3 & 4',
    goal:'Master how operating systems and computer networks communicate, and learn to automate with code. Zero cloud console contact yet — build the bedrock first.',
    icon:'🌐',
    modules:[
      {id:'p1m1',title:'Computer Networking Deep Dive',icon:'📡',
       objectives:['Master CIDR blocks, subnets, public vs. private IP spaces, and routing protocols (OSPF, BGP basics).','Understand the OSI 7-layer model and TCP/IP 4-layer stack thoroughly.','Study application-layer protocols in depth: DNS, HTTP/HTTPS, SSH, TLS 1.3, SMTP, FTP, SFTP.','Master TCP vs UDP: handshake, flags, connection states, and packet analysis with Wireshark.','Understand NAT, PAT, VLAN, and network segmentation concepts.','Practice: Capture and analyze real network traffic with Wireshark on your local network.'],
       resources:[
         {type:'Ytvideo',label:'Professor Messer: Network+ N10-009 FREE Course Playlist',url:'https://www.youtube.com/playlist?list=PLG49S3nxzAnl_tQe3kvnmeMid0mjF8Le8'},
         {type:'Ytvideo',label:'NetworkChuck: Free CCNA Course & TCP/IP Deep Dive',url:'https://www.youtube.com/playlist?list=PLIhvC56v63IJVXv0GJcl9vO5Z6znCVb1P'},
         {type:'YTvideo',label:'freeCodeCamp: Computer Networks Full Course (9 Hours)',url:'https://www.youtube.com/watch?v=qiQR5rTSshw'},
         {type:'Ytvideo',label:'Practical Networking: Subnetting Mastery Playlist',url:'https://www.youtube.com/playlist?list=PLIFyRwBY_4bQUE4IB5c4VPRyDoLgOdExE'},
         {type:'text',label:'MDN Web Docs: How the Web Works (HTTP, DNS)',url:'https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics'},
         {type:'text',label:'Wireshark Official Docs & User Guide (Free)',url:'https://www.wireshark.org/docs/wsug_html/'},
         {type:'lab',label:'Cisco Networking Academy — Free Packet Tracer',url:'https://www.netacad.com/cisco-packet-tracer'},
         {type:'text',label:'Cloudflare: How the Internet Works (Free Guide)',url:'https://www.cloudflare.com/learning/network-layer/what-is-the-network-layer/'}
       ]},
      {id:'p1m2',title:'Linux Administration & CLI Mastery',icon:'🐧',
       objectives:['Force yourself to use Ubuntu/Fedora/Debian Server without a GUI for 30 days.','Master file system structures, directory hierarchy (/etc, /var, /proc, /sys).','User permissions: chmod, chown, ACLs, SUID/SGID, sticky bit, umask.','SSH: key pair generation (RSA/ED25519), agent forwarding, config files, port forwarding.','System monitoring: top, htop, netstat, ss, lsof, ps, strace, journalctl.','Shell scripting: bash variables, loops, functions, cron jobs, and pipes.','Package management: apt, yum/dnf, snap, and compiling from source.'],
       resources:[
         {type:'Ytvideo',label:'freeCodeCamp: Linux for Beginners — Full 5-Hour Course',url:'https://www.youtube.com/watch?v=wBp0Rb-ZJak'},
         {type:'Ytvideo',label:'Learn Linux TV: Linux Command Line Essentials',url:'https://www.youtube.com/playlist?list=PLT98CRl2KxKHKd_tH3ssq0HPrThx2hESW'},
         {type:'Ytvideo',label:'NetworkChuck: Linux for Hackers Playlist (FREE)',url:'https://www.youtube.com/playlist?list=PLIhvC56v63IJI2D490qLh_iY8T7s1L1yU'},
         {type:'text',label:'Linux Journey — Free Interactive Linux Learning',url:'https://linuxjourney.com'},
         {type:'text',label:'Linux Survival — Free Browser Terminal Practice',url:'https://linuxsurvival.com'},
         {type:'text',label:'The Linux Command Line by William Shotts (Free Online Book)',url:'https://linuxcommand.org/tlcl.php'},
         {type:'lab',label:'OverTheWire: Bandit — Linux Wargame from Level 0',url:'https://overthewire.org/wargames/bandit/'},
         {type:'lab',label:'TryHackMe: Linux Fundamentals Path (FREE)',url:'https://tryhackme.com/module/linux-fundamentals'},
         {type:'lab',label:'cmdchallenge.com — 50 Linux CLI Challenges (Free)',url:'https://cmdchallenge.com/'}
       ]},
      {id:'p1m3',title:'Python Security Scripting & Automation',icon:'🐍',
       objectives:['Focus on security-relevant Python: avoid generic tutorials.','Master: requests (HTTP API automation), json, subprocess, socket, paramiko (SSH).','Write scripts to: parse security logs, automate API calls, enumerate network hosts.','Understand data structures: Lists, Dicts, Sets — especially for JSON processing.','Build project: AWS IAM credential checker script using Boto3.','Understand virtual environments, pip, and dependency security (pip-audit).'],
       resources:[
         {type:'video',label:'freeCodeCamp: Python for Beginners — 4.5 Hour Course',url:'https://www.youtube.com/watch?v=rfscVS0vtbw'},
         {type:'video',label:'The Cyber Mentor: Python for Beginners Full Course',url:'https://www.youtube.com/watch?v=xJ526aZ_P0g'},
         {type:'video',label:'John Hammond: Security Scripting & CTF Walkthroughs',url:'https://www.youtube.com/watch?v=48yV_QfB68I'},
         {type:'text',label:'Automate the Boring Stuff with Python (Free Online Book)',url:'https://automatetheboringstuff.com'},
         {type:'text',label:'A Byte of Python — Free Beginner Book (PDF)',url:'https://python.swaroopch.com'},
         {type:'text',label:'Real Python: Python Security Tutorials (Free Articles)',url:'https://realpython.com/tutorials/security/'},
         {type:'lab',label:'HackerRank: Python Practice Challenges (Free)',url:'https://www.hackerrank.com/domains/python'},
         {type:'lab',label:'PicoCTF: Beginner-Friendly Security CTF (Free)',url:'https://picoctf.org'},
         {type:'lab',label:'Exercism: Python Track (Free & Open Source)',url:'https://exercism.org/tracks/python'}
       ]},
      {id:'p1m4',title:'CompTIA Security+ SY0-701 Certification',icon:'🏆',
       objectives:['Study the 6 domains: Threats/Attacks, Architecture, Implementation, Operations, Governance, Cryptography.','Memorize CIA triad, AAA (Authentication/Authorization/Accounting), and zero-trust fundamentals.','Understand common attacks: phishing, SQL injection, XSS, MITM, DDoS, ransomware.','Cryptography basics: symmetric vs asymmetric, PKI, TLS certificates, hashing (SHA-256, MD5).','Use Anki flashcards daily — create your own deck from Professor Messer notes.','Sit a practice exam every day for the last 2 weeks before test day.'],
       resources:[
         {type:'video',label:'Professor Messer: Security+ SY0-701 FREE Full Course Index',url:'https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/sy0-701-comptia-security-study-course/'},
         {type:'video',label:'Professor Messer: SY0-701 YouTube Playlist',url:'https://www.youtube.com/playlist?list=PLG4bLrCdtbH6-E2LYy76K9XO82LMt0a1y'},
         {type:'video',label:'David Bombal: Security+ SY0-701 Training Module',url:'https://www.youtube.com/watch?v=s0L9LwP41bI'},
         {type:'text',label:'CompTIA Official Security+ SY0-701 Exam Page',url:'https://www.comptia.org/certifications/security'},
         {type:'text',label:'AnkiWeb: Free Security+ Flashcard Decks',url:'https://ankiweb.net/shared/decks'},
         {type:'lab',label:'ExamCompass: Free Security+ Practice Tests',url:'https://www.examcompass.com/comptia-security-plus-certification-practice-tests'},
         {type:'text',label:'Mike Chapple: Security+ Study Resources',url:'https://www.certmike.com/security/'}
       ]}
    ]
  },
  {
    id:'p2',title:'PHASE 2: CLOUD ARCHITECTURE MASTERY',
    subtitle:'Year 3, Semester 5',
    goal:'You cannot protect what you do not understand. Master AWS architecture, IaC, and containerization before touching security tools.',
    icon:'☁️',
    modules:[
      {id:'p2m1',title:'Core AWS Ecosystem Deep Dive',icon:'⚡',
       objectives:['AWS Account setup with MFA, Organizations, and consolidated billing.','Compute: EC2 (instance types, AMIs, placement groups, auto scaling), Lambda (serverless, layers).','Storage: S3 (storage classes, versioning, lifecycle, cross-region replication), EBS, EFS, Glacier.','Networking: VPC (subnets, route tables, IGW, NAT GW, VPC peering, Transit Gateway, PrivateLink).','Database: RDS (Multi-AZ, read replicas), DynamoDB, ElastiCache basics.','Build Project: Deploy a 3-tier web application (ALB + EC2 + RDS) in a custom VPC.'],
       resources:[
         {type:'video',label:'freeCodeCamp: AWS SAA-C03 Full Course (Andrew Brown)',url:'https://www.youtube.com/watch?v=c3Cn4xYfxJY'},
         {type:'video',label:'Abhishek Veeramalla: AWS Zero to Hero Playlist',url:'https://www.youtube.com/playlist?list=PLdpzxOOAlwvLNOxX0RfndiYSt1Le9azze'},
         {type:'video',label:'ByteByteGo: Reverse Proxy vs API Gateway vs Load Balancer',url:'https://www.youtube.com/watch?v=kYvV4s5XgO4'},
         {type:'text',label:'AWS Skill Builder — 600+ Free Digital Courses',url:'https://explore.skillbuilder.aws/'},
         {type:'text',label:'AWS Official Architecture Center',url:'https://aws.amazon.com/architecture/'},
         {type:'text',label:'AWS Ramp-Up Guides (Free PDF Downloads)',url:'https://aws.amazon.com/training/ramp-up-guides/'},
         {type:'lab',label:'AWS Free Tier — 12 Months Free Cloud Practice',url:'https://aws.amazon.com/free/'},
         {type:'lab',label:'AWS Workshops — 100+ Official Free Labs',url:'https://workshops.aws/'},
         {type:'lab',label:'AWS Builder Labs — Guided Cloud Practice (Free Tier)',url:'https://aws.amazon.com/training/digital/aws-builder-labs/'}
       ]},
      {id:'p2m2',title:'Infrastructure as Code (Terraform + CloudFormation)',icon:'🏗️',
       objectives:['NEVER click around the AWS Console to deploy resources.','Terraform HCL syntax: providers, resources, variables, outputs, locals, data sources.','Terraform state management: local state vs S3 + DynamoDB remote backend.','Modules: create reusable VPC, IAM, and EC2 modules.','CloudFormation: understand template structure (YAML/JSON), stacks, nested stacks.','Project: Deploy a complete secure VPC + EC2 + RDS environment using Terraform modules.'],
       resources:[
         {type:'video',label:'freeCodeCamp: Terraform Full Course for Beginners',url:'https://www.youtube.com/watch?v=SLB_c_ayRMo'},
         {type:'video',label:'TechWorld with Nana: Terraform Explained in 15 mins',url:'https://www.youtube.com/watch?v=l5ob4z6-d5s'},
         {type:'video',label:'Abhishek Veeramalla: Terraform Zero to Hero Playlist',url:'https://www.youtube.com/playlist?list=PLdpzxOOAlwvI0O4PeKVV1-yJoX2AqIWuf'},
         {type:'text',label:'HashiCorp Terraform Official Docs & Tutorials',url:'https://developer.hashicorp.com/terraform/tutorials'},
         {type:'text',label:'Terraform Up & Running Code (GitHub)',url:'https://github.com/brikis98/terraform-up-and-running-code'},
         {type:'lab',label:'HashiCorp Terraform Cloud Free Tier',url:'https://app.terraform.io/'},
         {type:'lab',label:'Terraform Registry — Community Modules',url:'https://registry.terraform.io/'},
         {type:'text',label:'Spacelift: Terraform Best Practices Guide (Free)',url:'https://spacelift.io/blog/terraform-best-practices'}
       ]},
      {id:'p2m3',title:'Containerization — Docker & Kubernetes',icon:'🐳',
       objectives:['Docker fundamentals: images, containers, Dockerfile, multi-stage builds, registries (ECR).','Container security: non-root users, read-only filesystems, image scanning, secrets management.','Docker Compose for local multi-container development environments.','Kubernetes: Pods, Deployments, Services, ConfigMaps, Secrets, Namespaces, RBAC.','Amazon EKS: managed Kubernetes cluster setup, node groups, Fargate profiles.','Project: Containerize and deploy a Python web app on EKS with Helm charts.'],
       resources:[
         {type:'video',label:'TechWorld with Nana: Docker Tutorial for Beginners (Full)',url:'https://www.youtube.com/watch?v=3c-iBn73dDE'},
         {type:'video',label:'freeCodeCamp: Kubernetes Full Course — 6 Hours',url:'https://www.youtube.com/watch?v=d6WC5n9G_sM'},
         {type:'video',label:'Abhishek Veeramalla: Kubernetes Zero to Hero Series',url:'https://www.youtube.com/playlist?list=PLdpzxOOAlwvI144w-4t1915M7fX15c0eQ'},
         {type:'video',label:'KodeKloud: Docker & Kubernetes Free Courses',url:'https://www.youtube.com/playlist?list=PLl4APkPHzsUUOkOv3i62UidrLmSB8DcGC'},
         {type:'text',label:'Docker Official Docs — Get Started',url:'https://docs.docker.com/get-started/'},
         {type:'text',label:'Kubernetes Official Documentation',url:'https://kubernetes.io/docs/home/'},
         {type:'lab',label:'Play with Docker — Free Online Docker Lab',url:'https://labs.play-with-docker.com/'},
         {type:'lab',label:'Play with Kubernetes — Free K8s Cluster',url:'https://labs.play-with-k8s.com/'},
         {type:'text',label:'CKS (Kubernetes Security) Certification Info',url:'https://www.cncf.io/certification/cks/'}
       ]},
      {id:'p2m4',title:'AWS Solutions Architect Associate (SAA-C03)',icon:'🎓',
       objectives:['This is the MUST-HAVE entry credential for any cloud engineering role.','Deeply understand: Well-Architected Framework (5 pillars + Security Pillar).','Exam domains: Resilient Architectures, High-Performing Architectures, Secure Architectures, Cost-Optimized Architectures.','Practice examinations are non-negotiable — use TutorialsDojo (Jon Bonso) practice tests.','Time exam: 130 minutes, 65 questions, 720/1000 minimum passing score.','Budget $300 for exam fee — this is an investment that pays for itself 10x.'],
       resources:[
         {type:'text',label:'TutorialsDojo: SAA-C03 Practice Exams (Best Resource)',url:'https://tutorialsdojo.com/courses/aws-certified-solutions-architect-associate-practice-exams/'},
         {type:'text',label:'AWS Official SAA-C03 Exam Guide PDF',url:'https://d1.awsstatic.com/training-and-certification/docs-sa-assoc/AWS-Certified-Solutions-Architect-Associate_Exam-Guide.pdf'},
         {type:'text',label:'WhizLabs: AWS SAA Practice Questions (Free Tier)',url:'https://www.whizlabs.com/aws-solutions-architect-associate/'},
         {type:'lab',label:'AWS Well-Architected Labs — Official Hands-On Labs',url:'https://www.wellarchitectedlabs.com/'},
         {type:'video',label:'AWS Certified Solutions Architect Associate (SAA-C03) Course',url:'https://www.youtube.com/watch?v=Ia-UEYYR44s'}
       ]}
    ]
  },
  {
    id:'p3',title:'PHASE 3: CLOUD SECURITY SPECIALIZATION',
    subtitle:'Year 3, Semester 6',
    goal:'You understand the cloud architecture — now learn to break it, defend it, and build automated security guardrails. This is where you become a cloud security engineer.',
    icon:'🛡️',
    modules:[
      {id:'p3m1',title:'AWS IAM — Identity & Access Management Mastery',icon:'🔑',
       objectives:['Principle of Least Privilege: every permission must be justified.','IAM Policy types: Identity-based, Resource-based, SCPs, Permission Boundaries, Session Policies.','IAM Roles: Cross-account, service roles (Lambda, EC2), SAML federation, OIDC (GitHub Actions).','IAM Access Analyzer: detect unintended public access to S3, KMS, IAM, Lambda, SQS.','Security Token Service (STS): AssumeRole, GetSessionToken, temporary credentials.','Study IAM privilege escalation paths: the holy grail of cloud pentesting knowledge.','Hands-on: Enumerate IAM policies in CloudGoat and fix the misconfiguration.'],
       resources:[
         {type:'video',label:'freeCodeCamp: AWS IAM Full Tutorial (Policies & Roles)',url:'https://www.youtube.com/watch?v=UqKWHZ36yEM'},
         {type:'video',label:'AWS re:Invent: AWS IAM Best Practices (SEC301)',url:'https://www.youtube.com/watch?v=YQsK4MtsELU'},
         {type:'text',label:'AWS IAM Policy Reference (Official Docs)',url:'https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies.html'},
         {type:'text',label:'Rhino Security: AWS IAM Privilege Escalation Methods',url:'https://rhinosecuritylabs.com/aws/aws-privilege-escalation-methods-mitigation/'},
         {type:'lab',label:'Wiz: The Big IAM Challenge (Free AWS IAM CTF)',url:'https://bigiamchallenge.com/'},
         {type:'lab',label:'CloudGoat: Vulnerable-by-Design AWS Environments',url:'https://github.com/RhinoSecurityLabs/cloudgoat'},
         {type:'lab',label:'AWS Well-Architected Security Labs (Free)',url:'https://wellarchitectedlabs.com/security/'},
         {type:'lab',label:'PwnedLabs: Free Cloud Security Labs',url:'https://pwnedlabs.io/'},
         {type:'lab',label:'IAM Vulnerable (BishopFox): IAM Privesc Practice',url:'https://github.com/BishopFox/iam-vulnerable'}
       ]},
      {id:'p3m2',title:'Threat Detection, Monitoring & Incident Response',icon:'👁️',
       objectives:['AWS GuardDuty: enable, tune findings, suppress false positives, auto-remediation.','AWS CloudTrail: ALL API calls logged — this is your audit log; enable in all regions.','AWS Config: compliance rules, remediation actions, conformance packs (CIS, NIST, PCI).','AWS Security Hub: centralize GuardDuty + Config + Inspector + Macie + IAM Access Analyzer.','Amazon Detective: investigation graphs for security incidents.','SIEM Basics: understand log ingestion, correlation rules, and alert fatigue.','Incident Response: build a Lambda function that auto-remediates publicly exposed S3 buckets.'],
       resources:[
         {type:'video',label:'AWS re:Invent: Threat Detection with GuardDuty & Security Hub (SEC309)',url:'https://www.youtube.com/watch?v=R9122_iG1ME'},
         {type:'video',label:'Cloud Security Podcast: Beginner Guide to AWS Security',url:'https://www.youtube.com/watch?v=1b-XG2eZ3Zc'},
         {type:'lab',label:'AWS Security Workshops (Official Free Labs)',url:'https://workshops.aws/categories/Security'},
         {type:'text',label:'AWS GuardDuty User Guide (Official Docs)',url:'https://docs.aws.amazon.com/guardduty/latest/ug/what-is-guardduty.html'},
         {type:'text',label:'MITRE ATT&CK for Cloud Framework',url:'https://attack.mitre.org/matrices/enterprise/cloud/'},
         {type:'text',label:'Falco: Cloud-Native Runtime Security Docs',url:'https://falco.org/docs/'},
         {type:'lab',label:'CyberDefenders: Free Blue Team Cloud Labs',url:'https://cyberdefenders.org/'},
         {type:'audio',label:'Security Now Podcast (Steve Gibson) — 900+ Episodes',url:'https://www.grc.com/securitynow.htm'},
         {type:'audio',label:'SANS Internet Stormcast — Daily 5-Min Briefing',url:'https://isc.sans.edu/podcast.html'}
       ]},
      {id:'p3m3',title:'Cloud Penetration Testing & Offensive Security',icon:'⚔️',
       objectives:['Understand AWS penetration testing policy BEFORE running any tests.','Reconnaissance: use enumerate-iam, Pacu, ScoutSuite for discovery.','Common cloud attack vectors: SSRF → EC2 metadata, public S3 buckets, exposed credentials in code.','Lambda event injection, container escape, Kubernetes API server misconfigs.','Practice the PAWS (Penetration Testing AWS) methodology systematically.','Complete flaws.cloud AND flaws2.cloud — both attacker and defender perspective.','Write up your CTF solutions: this becomes your portfolio.'],
       resources:[
         {type:'lab',label:'flAWS.cloud — Free AWS Security CTF (6 Levels)',url:'http://flaws.cloud'},
         {type:'lab',label:'flAWS2.cloud — Attacker & Defender Perspective CTF',url:'http://flaws2.cloud'},
         {type:'lab',label:'CloudGoat — Vulnerable-by-Design AWS Environments',url:'https://github.com/RhinoSecurityLabs/cloudgoat'},
         {type:'lab',label:'Wiz: EKS Cluster Games (Free Kubernetes Security CTF)',url:'https://eksclustergames.com/'},
         {type:'lab',label:'Wiz: Big IAM Challenge (Free AWS IAM CTF)',url:'https://bigiamchallenge.com/'},
         {type:'lab',label:'HackTheBox: Cloud Security Labs & Machines',url:'https://www.hackthebox.com/'},
         {type:'lab',label:'TryHackMe: Cloud Security Path (Free Rooms)',url:'https://tryhackme.com/'},
         {type:'lab',label:'PwnedLabs: Cloud Pentesting Labs (Free Tier)',url:'https://pwnedlabs.io/'},
         {type:'text',label:'HackTricks Cloud: AWS/Azure/GCP Pentest Wiki',url:'https://cloud.hacktricks.xyz/'},
         {type:'tool',label:'Pacu: AWS Exploitation Framework',url:'https://github.com/RhinoSecurityLabs/pacu'},
         {type:'tool',label:'Prowler: Open-Source CSPM (AWS/Azure/GCP)',url:'https://github.com/prowler-cloud/prowler'},
         {type:'tool',label:'CloudFox: Cloud Attack Path Discovery Tool',url:'https://github.com/BishopFox/cloudfox'}
       ]},
      {id:'p3m4',title:'DevSecOps — Security in the CI/CD Pipeline',icon:'🔄',
       objectives:['Shift Left Security: security must be enforced at every pull request.','Secret Detection: Gitleaks or truffleHog scanning in pre-commit hooks and CI.','SAST: Bandit (Python), Semgrep (multi-language) integrated into GitHub Actions.','Container Scanning: Trivy scans every Docker image before push to ECR.','IaC Scanning: Checkov or tfsec validates every Terraform change.','DAST: OWASP ZAP for automated web application security testing in staging.','Build a complete DevSecOps pipeline: Code → SAST → DAST → Image Scan → IaC Scan → Deploy.'],
       resources:[
         {type:'video',label:'TechWorld with Nana: DevSecOps Tutorial for Beginners',url:'https://www.youtube.com/watch?v=gLJdrXPn0ns'},
         {type:'video',label:'Abhishek Veeramalla: DevSecOps Zero to Hero Playlist',url:'https://www.youtube.com/playlist?list=PLdpzxOOAlwvIKMhk8WhzN1pYoJ1YU8Csa'},
         {type:'text',label:'OWASP DevSecOps Guideline (Free)',url:'https://owasp.org/www-project-devsecops-guideline/'},
         {type:'tool',label:'Trivy: Container & IaC Vulnerability Scanner (GitHub)',url:'https://github.com/aquasecurity/trivy'},
         {type:'tool',label:'Checkov: Terraform & IaC Security Scanner (GitHub)',url:'https://github.com/bridgecrewio/checkov'},
         {type:'tool',label:'Gitleaks: Secret Detection in Git Repos (GitHub)',url:'https://github.com/gitleaks/gitleaks'},
         {type:'tool',label:'Semgrep: SAST for 30+ Languages (Free Tier)',url:'https://semgrep.dev/'},
         {type:'text',label:'GitHub: Hardening Security for GitHub Actions',url:'https://docs.github.com/en/actions/security-for-github-actions/security-hardening-your-deployments'},
         {type:'lab',label:'PortSwigger Web Security Academy: 100% Free Labs',url:'https://portswigger.net/web-security'}
       ]}
    ]
  },
  {
    id:'p4',title:'PHASE 4: EXPERT TRACK & CAREER LAUNCH',
    subtitle:'Year 4 — Final Year',
    goal:'Transition from student to expert. Earn professional certifications, build a proof-of-work portfolio, and position for a cloud security engineering role at a top company.',
    icon:'🚀',
    modules:[
      {id:'p4m1',title:'Advanced Certifications — Professional Tier',icon:'🌟',
       objectives:['AWS Security Specialty (SCS-C02): The pinnacle AWS security credential. Test date: Month 3 of Y4.','CCSP (ISC² Certified Cloud Security Professional): Vendor-neutral gold standard. Post-graduation target.','Optional Red Team path: eJPT (eLearnSecurity) → PNPT (TCM Security) → OSCP (Offensive Security).','Optional Kubernetes path: CKA (Certified Kubernetes Administrator) → CKS (Certified Kubernetes Security).','Google Professional Cloud Security Engineer — for multi-cloud positioning.','Do NOT collect certifications without hands-on projects. Portfolio = certifications × 10.'],
       resources:[
         {type:'video',label:'freeCodeCamp: AWS Security Specialty SCS-C02 Full Course',url:'https://www.youtube.com/watch?v=gEBawbf8FYM'},
         {type:'text',label:'AWS SCS-C02 Official Exam Guide (PDF)',url:'https://d1.awsstatic.com/training-and-certification/docs-security-spec/AWS-Certified-Security-Specialty_Exam-Guide.pdf'},
         {type:'text',label:'ISC² CCSP Certification Official Page',url:'https://www.isc2.org/certifications/ccsp'},
         {type:'text',label:'TutorialsDojo: AWS Security Specialty Practice Exams',url:'https://tutorialsdojo.com/courses/aws-certified-security-specialty-practice-exams/'},
         {type:'text',label:'Google Professional Cloud Security Engineer Cert',url:'https://cloud.google.com/learn/certification/cloud-security-engineer'},
         {type:'video',label:'TCM Security: Practical Ethical Hacking Full Course',url:'https://www.youtube.com/watch?v=3Kq1MIfTWCE'},
         {type:'text',label:'Cloud Security Alliance: CCSK v5 Free Study Kit',url:'https://cloudsecurityalliance.org/education/ccsk/'}
       ]},
      {id:'p4m2',title:'GitHub Portfolio — Proof of Work',icon:'📁',
       objectives:['Create public repo: "cloud-security-portfolio" — this is your resume.','Project 1: 3-tier AWS infrastructure with Terraform + security hardening (WAF, security groups, KMS).','Project 2: Documented CloudGoat exploit walkthrough with before/after remediation configs.','Project 3: DevSecOps pipeline with GitHub Actions: SAST + DAST + Trivy + Checkov.','Project 4: AWS Security Operations Center simulation with GuardDuty auto-remediation.','Project 5: Write 3 Medium/Substack blog posts about your security projects.','LinkedIn: post project videos, share CTF writeups, connect with cloud security engineers.'],
       resources:[
         {type:'text',label:'GitHub: Cloud Security Portfolio Topic (Inspiration)',url:'https://github.com/topics/cloud-security'},
         {type:'text',label:'Awesome Cloud Security — Curated 500+ Resource List',url:'https://github.com/4ndersonLin/awesome-cloud-security'},
         {type:'text',label:'Awesome CloudSec Labs — Free Hands-On Labs List',url:'https://github.com/iknowjason/Awesome-CloudSec-Labs'},
         {type:'text',label:'CTFtime: Global CTF Competition Calendar',url:'https://ctftime.org/'},
         {type:'text',label:'Medium: Cloud Security Tag (Read & Write Articles)',url:'https://medium.com/tag/cloud-security'},
         {type:'text',label:'fwd:cloudsec Conference Talks (Free on YouTube)',url:'https://www.youtube.com/@fwdcloudsec'}
       ]},
      {id:'p4m3',title:'Final Year Capstone: SOC on AWS',icon:'🔬',
       objectives:['Objective: Build a production-grade Security Operations Center simulation on AWS using Terraform.','Deploy: Multi-account AWS Organization with SCPs and centralized CloudTrail/Config logging.','Implement: GuardDuty → EventBridge → SNS → Lambda auto-remediation pipeline.','Add: WAF + Shield + CloudFront + VPC Flow Logs for full perimeter visibility.','Build: Security Hub dashboard with custom insight queries.','Document: Architecture diagram, threat model (STRIDE), and incident response runbook (Markdown).','Publish: GitHub repo + Architecture blog post on Medium.'],
       resources:[
         {type:'lab',label:'AWS Security Reference Architecture (Official Blueprint)',url:'https://docs.aws.amazon.com/prescriptive-guidance/latest/security-reference-architecture/welcome.html'},
         {type:'text',label:'AWS Well-Architected Security Pillar White Paper',url:'https://docs.aws.amazon.com/wellarchitected/latest/security-pillar/welcome.html'},
         {type:'lab',label:'MITRE ATT&CK for Cloud Threat Modeling',url:'https://attack.mitre.org/matrices/enterprise/cloud/'},
         {type:'text',label:'AWS Security Hub: Managed Insights & Dashboards',url:'https://docs.aws.amazon.com/securityhub/latest/userguide/what-is-securityhub.html'},
         {type:'text',label:'Terraform AWS Modules — Security Group Module',url:'https://registry.terraform.io/modules/terraform-aws-modules/security-group/aws/latest'}
       ]},
      {id:'p4m4',title:'Career & Interview Preparation',icon:'💼',
       objectives:['Target roles: Cloud Security Engineer, DevSecOps Engineer, Security Architect, Cloud SOC Analyst.','Memorize: Shared Responsibility Model variations — it appears in EVERY cloud security interview.','System Design: Be able to whiteboard a secure 3-tier AWS architecture from scratch in 30 minutes.','Scenario questions: "S3 bucket is publicly accessible — walk me through your incident response."','Know: OWASP Top 10 for Cloud, OWASP Top 10 for APIs — interviewers love these.','Network: Join r/netsec, r/cloudsecurity, CloudSec Discord, local AWS User Group meetups.','Salary negotiation: Entry Cloud Security Engineer in India ₹8-15 LPA, USA $85k-120k.'],
       resources:[
         {type:'text',label:'AWS Shared Responsibility Model (Official)',url:'https://aws.amazon.com/compliance/shared-responsibility-model/'},
         {type:'text',label:'Cloud Security Interview Questions (GitHub)',url:'https://github.com/jassics/security-interview-questions'},
         {type:'text',label:'LinkedIn Jobs: Search Cloud Security Engineer Roles',url:'https://www.linkedin.com/jobs/'},
         {type:'audio',label:'Cloud Security Podcast (Spotify & YouTube)',url:'https://www.cloudsecuritypodcast.tv/'},
         {type:'text',label:'Levels.fyi: Security Engineering Salary Data',url:'https://www.levels.fyi/'},
         {type:'text',label:'OWASP Top 10 for Cloud Security Reference',url:'https://owasp.org/www-project-cloud-top-10/'}
       ]}
    ]
  }
];

// ── FREE RESOURCES DATA ───────────────────────
const FREE_RESOURCES = [
  // YouTube Channels
  // ── Verified YouTube Channels (using @handle format) ──
  {cat:'youtube',icon:'📺',title:'NetworkChuck',desc:'Networking, Linux, Python, Cloud, Hacking — Most entertaining tech channel. 3M+ subscribers.',url:'https://www.youtube.com/@NetworkChuck',free:true,type:'YouTube Channel'},
  {cat:'youtube',icon:'📺',title:'TCM Security (The Cyber Mentor)',desc:'Practical ethical hacking, OSCP prep, cloud security. Industry gold standard.',url:'https://www.youtube.com/@TCMSecurityAcademy',free:true,type:'YouTube Channel'},
  {cat:'youtube',icon:'📺',title:'John Hammond',desc:'CTF walkthroughs, malware analysis, reverse engineering. Exceptional quality.',url:'https://www.youtube.com/@_JohnHammond',free:true,type:'YouTube Channel'},
  {cat:'youtube',icon:'📺',title:'Professor Messer',desc:'#1 FREE source for CompTIA Security+, Network+, A+. Full courses, no cost.',url:'https://www.youtube.com/@professormesser',free:true,type:'YouTube Channel'},
  {cat:'youtube',icon:'📺',title:'freeCodeCamp.org',desc:'Full-length AWS, Azure, Linux, Python, Kubernetes, Terraform courses — 100% FREE.',url:'https://www.youtube.com/@freecodecamp',free:true,type:'YouTube Channel'},
  {cat:'youtube',icon:'📺',title:'Abhishek Veeramalla',desc:'Best DevOps, DevSecOps, AWS, Kubernetes tutorials. Zero to Hero playlists.',url:'https://www.youtube.com/@AbhishekVeeramalla',free:true,type:'YouTube Channel'},
  {cat:'youtube',icon:'📺',title:'TechWorld with Nana',desc:'Docker, Kubernetes, Terraform, CI/CD, DevSecOps — Clear and comprehensive.',url:'https://www.youtube.com/@techworld_with_nana',free:true,type:'YouTube Channel'},
  {cat:'youtube',icon:'📺',title:'HackerSploit',desc:'Red teaming, ethical hacking, Linux security, Metasploit. Very practical labs.',url:'https://www.youtube.com/@HackerSploit',free:true,type:'YouTube Channel'},
  {cat:'youtube',icon:'📺',title:'Cloud Security Podcast',desc:'Expert interviews with CISOs, cloud security leaders, and practitioners.',url:'https://www.youtube.com/@CloudSecurityPodcast',free:true,type:'YouTube Channel'},
  {cat:'youtube',icon:'📺',title:'AWS Events Channel',desc:'Official AWS re:Invent, re:Inforce talks — deep dives into AWS security features.',url:'https://www.youtube.com/@AWSEventsChannel',free:true,type:'YouTube Channel'},
  {cat:'youtube',icon:'📺',title:'David Bombal',desc:'Networking, Python scripting, ethical hacking, GNS3. Lab-first approach.',url:'https://www.youtube.com/@davidbombal',free:true,type:'YouTube Channel'},
  {cat:'youtube',icon:'📺',title:'Day Cyberwox',desc:'Best dedicated CLOUD SECURITY channel. Real-world AWS/Azure security scenarios.',url:'https://www.youtube.com/@DayCyberwox',free:true,type:'YouTube Channel'},
  {cat:'youtube',icon:'📺',title:'John Savill (NTFAQGuy)',desc:'Deep dive Azure architecture and security tutorials. The best Azure resource on YouTube.',url:'https://www.youtube.com/@NTFAQGuy',free:true,type:'YouTube Channel'},
  {cat:'youtube',icon:'📺',title:'PwnedLabs',desc:'Cloud security attack walkthroughs and defenses — AWS, Azure, GCP focused.',url:'https://www.youtube.com/@pwnedlabs',free:true,type:'YouTube Channel'},
  {cat:'youtube',icon:'📺',title:'KodeKloud',desc:'Kubernetes, Docker, Ansible, Terraform labs with free tier access.',url:'https://www.youtube.com/@KodeKloud',free:true,type:'YouTube Channel'},
  {cat:'youtube',icon:'📺',title:'ByteByteGo',desc:'Visually stunning system design and cloud architecture explainers.',url:'https://www.youtube.com/@ByteByteGo',free:true,type:'YouTube Channel'},
  {cat:'youtube',icon:'📺',title:'IppSec',desc:'HackTheBox machine walkthroughs — advanced penetration testing methodology.',url:'https://www.youtube.com/@ippsec',free:true,type:'YouTube Channel'},
  {cat:'youtube',icon:'📺',title:'Simply Cyber (Gerald Auger)',desc:'GRC, career advice, daily cybersecurity news. Great for career development.',url:'https://www.youtube.com/@SimplyCyber',free:true,type:'YouTube Channel'},

  // Free Labs & Platforms
  // ── Verified Labs & Platforms ──
  {cat:'labs',icon:'🧪',title:'TryHackMe',desc:'Guided, browser-based cybersecurity training with structured learning paths. Best for beginners.',url:'https://tryhackme.com/',free:true,type:'Lab Platform'},
  {cat:'labs',icon:'🧪',title:'HackTheBox',desc:'Realistic challenge-based hacking labs. Cloud security machines available. Free tier.',url:'https://www.hackthebox.com/',free:true,type:'Lab Platform'},
  {cat:'labs',icon:'🧪',title:'flAWS.cloud — Free AWS CTF (6 Levels)',desc:'Classic free AWS security challenge. Teaches S3, IAM, EC2 metadata misconfigurations.',url:'http://flaws.cloud/',free:true,type:'AWS CTF'},
  {cat:'labs',icon:'🧪',title:'flAWS2.cloud — Advanced AWS CTF',desc:'Advanced AWS CTF with attacker and defender paths. Learn GuardDuty forensics.',url:'http://flaws2.cloud/',free:true,type:'AWS CTF'},
  {cat:'labs',icon:'🧪',title:'Wiz: Big IAM Challenge (Free)',desc:'Free AWS IAM CTF by Wiz. 6 challenges covering IAM misconfigurations and privilege escalation.',url:'https://bigiamchallenge.com/',free:true,type:'AWS CTF'},
  {cat:'labs',icon:'🧪',title:'Wiz: EKS Cluster Games (Free)',desc:'Free Kubernetes/EKS security CTF. Learn container escape, RBAC bypass, secret extraction.',url:'https://eksclustergames.com/',free:true,type:'K8s CTF'},
  {cat:'labs',icon:'🧪',title:'PwnedLabs',desc:'Free cloud pentesting labs — AWS, Azure, Kubernetes. New scenarios added regularly.',url:'https://pwnedlabs.io/',free:true,type:'Cloud Lab'},
  {cat:'labs',icon:'🧪',title:'CloudGoat (Rhino Security Labs)',desc:'Vulnerable-by-design AWS deployment via Terraform. 14+ attack scenarios.',url:'https://github.com/RhinoSecurityLabs/cloudgoat',free:true,type:'Vulnerable Lab'},
  {cat:'labs',icon:'🧪',title:'IAM Vulnerable (BishopFox)',desc:'AWS IAM privilege escalation practice lab. 31 intentionally vulnerable IAM configurations.',url:'https://github.com/BishopFox/iam-vulnerable',free:true,type:'Vulnerable Lab'},
  {cat:'labs',icon:'🧪',title:'AzureGoat (INE Labs)',desc:'Vulnerable Azure environment for cloud security practice. OWASP top 10 scenarios.',url:'https://github.com/ine-labs/AzureGoat',free:true,type:'Azure Lab'},
  {cat:'labs',icon:'🧪',title:'GCPGoat (INE Labs)',desc:'Vulnerable GCP environment for Google Cloud security practice.',url:'https://github.com/ine-labs/GCPGoat',free:true,type:'GCP Lab'},
  {cat:'labs',icon:'🧪',title:'AWS Well-Architected Labs',desc:'100+ official AWS hands-on labs covering Security, Reliability, Performance pillars.',url:'https://wellarchitectedlabs.com/security/',free:true,type:'AWS Lab'},
  {cat:'labs',icon:'🧪',title:'CyberDefenders',desc:'Free Blue Team cloud labs — CloudTrail analysis, Entra ID log forensics, SOC scenarios.',url:'https://cyberdefenders.org/',free:true,type:'Blue Team Lab'},
  {cat:'labs',icon:'🧪',title:'PortSwigger Web Security Academy',desc:'100% free web security labs covering SSRF, SQL injection, XSS — all cloud-relevant.',url:'https://portswigger.net/web-security',free:true,type:'Web Security Lab'},
  {cat:'labs',icon:'🧪',title:'PicoCTF (Carnegie Mellon)',desc:'Beginner-friendly annual CTF with archived challenges. Safe environment for students.',url:'https://picoctf.org/',free:true,type:'CTF Platform'},
  {cat:'labs',icon:'🧪',title:'OverTheWire: Bandit',desc:'Linux wargame from Level 0. The classic way to master command-line skills.',url:'https://overthewire.org/wargames/bandit/',free:true,type:'Wargame'},
  {cat:'labs',icon:'🧪',title:'Google Cloud Skills Boost',desc:'Official GCP training with free monthly credits and role-based learning paths.',url:'https://cloudskillsboost.google/',free:true,type:'GCP Lab'},
  {cat:'labs',icon:'🧪',title:'Microsoft Learn: Azure Security Path',desc:'Free Azure security learning paths with sandbox environments.',url:'https://learn.microsoft.com/en-us/azure/security/',free:true,type:'Azure Lab'},
  {cat:'labs',icon:'🧪',title:'AWS Skill Builder: Security Learning Plan',desc:'Structured free AWS security courses from AWS official training.',url:'https://explore.skillbuilder.aws/',free:true,type:'AWS Lab'},

  // Free Books & Text
  // ── Verified Books & Docs ──
  {cat:'books',icon:'📚',title:'The Linux Command Line (William Shotts)',desc:'Complete Linux CLI guide. Free to read online at official website.',url:'https://linuxcommand.org/tlcl.php',free:true,type:'Free Book'},
  {cat:'books',icon:'📚',title:'Automate the Boring Stuff with Python (Al Sweigart)',desc:'Practical Python automation. Full book free online.',url:'https://automatetheboringstuff.com/',free:true,type:'Free Book'},
  {cat:'books',icon:'📚',title:'AWS Well-Architected Framework (Official)',desc:'AWS architecture best practices across 6 pillars including Security.',url:'https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html',free:true,type:'Official Docs'},
  {cat:'books',icon:'📚',title:'OWASP Cheat Sheet Series',desc:'Actionable cheat sheets for cloud security, API security, secrets management, and more.',url:'https://cheatsheetseries.owasp.org/',free:true,type:'Free Reference'},
  {cat:'books',icon:'📚',title:'HackTricks Cloud — Cloud Pentest Wiki',desc:'Most comprehensive free cloud pentesting methodology (AWS/Azure/GCP/K8s).',url:'https://cloud.hacktricks.xyz/',free:true,type:'Free Wiki'},
  {cat:'books',icon:'📚',title:'NIST Cybersecurity Framework 2.0',desc:'Updated 2024 NIST CSF. Free PDF download from official NIST website.',url:'https://www.nist.gov/cyberframework',free:true,type:'Framework PDF'},
  {cat:'books',icon:'📚',title:'NIST SP 800-53 Rev 5: Security & Privacy Controls',desc:'Comprehensive security controls for federal information systems. Free PDF.',url:'https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final',free:true,type:'Framework PDF'},
  {cat:'books',icon:'📚',title:'CIS Benchmarks (AWS/Azure/GCP/K8s)',desc:'Free PDF hardening guides for cloud platforms. Create a free CIS account to download.',url:'https://www.cisecurity.org/cis-benchmarks/',free:true,type:'Free PDF'},
  {cat:'books',icon:'📚',title:'Awesome Cloud Security (4ndersonLin)',desc:'GitHub repo with 500+ curated tools, labs, blogs, and learning resources.',url:'https://github.com/4ndersonLin/awesome-cloud-security',free:true,type:'GitHub Resource'},
  {cat:'books',icon:'📚',title:'Awesome CloudSec Labs (iknowjason)',desc:'Curated list of ALL free cloud security hands-on labs and workshops.',url:'https://github.com/iknowjason/Awesome-CloudSec-Labs',free:true,type:'GitHub Resource'},
  {cat:'books',icon:'📚',title:'CSA Security Guidance v5 (12 Domains)',desc:'Free cloud security architecture guidance from Cloud Security Alliance.',url:'https://cloudsecurityalliance.org/research/guidance/',free:true,type:'Free Docs'},
  {cat:'books',icon:'📚',title:'CSA Top Threats to Cloud Computing 2024',desc:'Annual research report on the top 11 threats in cloud security.',url:'https://cloudsecurityalliance.org/research/topics/top-threats/',free:true,type:'Free Report'},

  // Podcasts & Audio
  // ── Verified Podcasts & Audio ──
  {cat:'audio',icon:'🎧',title:'Cloud Security Podcast',desc:'Weekly interviews with cloud security leaders, CISOs, and practitioners.',url:'https://www.cloudsecuritypodcast.tv/',free:true,type:'Podcast'},
  {cat:'audio',icon:'🎧',title:'Security Now (Steve Gibson)',desc:'Deep technical security dives every week. 900+ episodes of expert analysis.',url:'https://www.grc.com/securitynow.htm',free:true,type:'Podcast'},
  {cat:'audio',icon:'🎧',title:'Darknet Diaries',desc:'True crime stories about hacks, breaches, cybercrime, and espionage.',url:'https://darknetdiaries.com/',free:true,type:'Podcast'},
  {cat:'audio',icon:'🎧',title:'Risky Business',desc:'Weekly IT security news and in-depth expert interviews. Industry favorite.',url:'https://risky.biz/',free:true,type:'Podcast'},
  {cat:'audio',icon:'🎧',title:'Smashing Security',desc:'Weekly cybersecurity news with humor. Great for casual security learning.',url:'https://www.smashingsecurity.com/',free:true,type:'Podcast'},
  {cat:'audio',icon:'🎧',title:'CyberWire Daily',desc:'Daily 15-minute cybersecurity news briefing. Professional and concise.',url:'https://thecyberwire.com/podcasts/daily-podcast',free:true,type:'Podcast'},
  {cat:'audio',icon:'🎧',title:'SANS Internet Stormcast',desc:'Daily 5-minute security threat briefing from SANS Internet Storm Center.',url:'https://isc.sans.edu/podcast.html',free:true,type:'Podcast'},
  {cat:'audio',icon:'🎧',title:'The Azure Security Podcast',desc:'Microsoft Azure security focus — Azure-specific threats, tools, and best practices.',url:'https://azsecuritypodcast.net/',free:true,type:'Podcast'},

  // Free Courses
  // ── Verified Free Courses ──
  {cat:'courses',icon:'🎓',title:'AWS Skill Builder (Free Tier)',desc:'600+ free AWS digital courses including Security Learning Plan and AWS Cloud Practitioner.',url:'https://explore.skillbuilder.aws/',free:true,type:'Free Courses'},
  {cat:'courses',icon:'🎓',title:'IBM SkillsBuild — Cloud & Security',desc:'Free cloud and cybersecurity courses with IBM digital badges. No cost.',url:'https://skillsbuild.org/',free:true,type:'Free Courses'},
  {cat:'courses',icon:'🎓',title:'Great Learning Academy (Free)',desc:'Free cloud security courses with completion certificates.',url:'https://www.mygreatlearning.com/academy',free:true,type:'Free Courses'},
  {cat:'courses',icon:'🎓',title:'Cybrary — Free Security Training',desc:'Free courses for Security+, cloud security, ethical hacking fundamentals.',url:'https://www.cybrary.it/',free:true,type:'Free Courses'},
  {cat:'courses',icon:'🎓',title:'ISC² CC — Free Entry Security Certification',desc:'Free Certified in Cybersecurity course + exam voucher from ISC². Limited availability.',url:'https://www.isc2.org/certifications/cc',free:true,type:'Free Cert'},
  {cat:'courses',icon:'🎓',title:'Google Cybersecurity Certificate (Coursera)',desc:'Google-backed beginner cybersecurity certificate. Apply for financial aid to get free access.',url:'https://www.coursera.org/professional-certificates/google-cybersecurity',free:false,type:'Certificate'},
  {cat:'courses',icon:'🎓',title:'Microsoft Learn: Azure Security (Free)',desc:'Full free Azure security learning paths including AZ-500 and SC-200 prep.',url:'https://learn.microsoft.com/en-us/training/paths/implement-resource-mgmt-security/',free:true,type:'Free Courses'},
  {cat:'courses',icon:'🎓',title:'KodeKloud: Free DevOps & Kubernetes Labs',desc:'Free Docker, Kubernetes, Ansible, Terraform labs. No credit card required.',url:'https://kodekloud.com/',free:true,type:'Free Courses'},
  {cat:'courses',icon:'🎓',title:'CloudSecurityAlliance: CCSK Free Study Kit',desc:'Free Cloud Security Knowledge (CCSK v5) study resources and practice questions.',url:'https://cloudsecurityalliance.org/education/ccsk/',free:true,type:'Free Cert Prep'},

  // Community
  // ── Verified Community ──
  {cat:'community',icon:'💬',title:'r/netsec — Reddit',desc:'Top subreddit for network and cloud security news, research, and job posts.',url:'https://www.reddit.com/r/netsec/',free:true,type:'Community'},
  {cat:'community',icon:'💬',title:'r/cloudsecurity — Reddit',desc:'Cloud security-specific discussions, incidents, news, and career advice.',url:'https://www.reddit.com/r/cloudsecurity/',free:true,type:'Community'},
  {cat:'community',icon:'💬',title:'r/netsecstudents — Reddit',desc:'Study community for beginners. Ask questions, share resources, get career guidance.',url:'https://www.reddit.com/r/netsecstudents/',free:true,type:'Community'},
  {cat:'community',icon:'💬',title:'r/cybersecurity — Reddit',desc:'General cybersecurity subreddit with job boards, career advice, and news.',url:'https://www.reddit.com/r/cybersecurity/',free:true,type:'Community'},
  {cat:'community',icon:'💬',title:'John Hammond Discord',desc:'Active security Discord with CTF help, career guidance, and community challenges.',url:'https://discord.gg/mQQ5NsTbfF',free:true,type:'Discord'},
  {cat:'community',icon:'💬',title:'CNCF Slack — #sig-security',desc:'Cloud Native Computing Foundation Slack. Security Special Interest Group channel.',url:'https://slack.cncf.io/',free:true,type:'Slack'},
  {cat:'community',icon:'💬',title:'DEF CON Cloud Village',desc:'Annual DEF CON cloud security talks — free recordings on YouTube.',url:'https://www.youtube.com/@CloudVillage',free:true,type:'Conference'},
  {cat:'community',icon:'💬',title:'fwd:cloudsec Conference',desc:'Annual cloud security conference talks — free recordings. High quality content.',url:'https://www.youtube.com/@fwdcloudsec',free:true,type:'Conference'},
  {cat:'community',icon:'💬',title:'CloudSecList Newsletter',desc:'Weekly curated cloud-native security newsletter. Free email subscription.',url:'https://cloudseclist.com/',free:true,type:'Newsletter'},
  {cat:'community',icon:'💬',title:'tl;dr sec Newsletter',desc:'Curated AppSec, cloud security, DevSecOps newsletter. High signal-to-noise.',url:'https://tldrsec.com/',free:true,type:'Newsletter'},
];

// ── TOOLS DATA ────────────────────────────────
const TOOLS = [
  {icon:'🔍',name:'Trivy',cat:'Vulnerability Scanning',desc:'Comprehensive security scanner for container images, filesystems, and IaC templates. Finds CVEs, misconfigs, and exposed secrets.',tags:['Docker','Kubernetes','IaC','CI/CD'],url:'https://github.com/aquasecurity/trivy'},
  {icon:'🛡️',name:'Prowler',cat:'Cloud Security Posture',desc:'Open-source cloud security assessment tool for AWS, Azure, and GCP. 300+ checks aligned with CIS, NIST, GDPR, HIPAA.',tags:['AWS','Azure','GCP','Compliance'],url:'https://github.com/prowler-cloud/prowler'},
  {icon:'⚔️',name:'Pacu',cat:'Cloud Penetration Testing',desc:'Open-source AWS exploitation framework. Used by security professionals to test IAM privilege escalation, S3, EC2, Lambda vulnerabilities.',tags:['AWS','Pentesting','Red Team'],url:'https://github.com/RhinoSecurityLabs/pacu'},
  {icon:'🔎',name:'ScoutSuite',cat:'Multi-Cloud Auditing',desc:'Multi-cloud security auditing tool (AWS, Azure, GCP, OCI, Alibaba). Generates HTML reports of security findings.',tags:['AWS','Azure','GCP','Audit'],url:'https://github.com/nccgroup/ScoutSuite'},
  {icon:'🔐',name:'Vault (HashiCorp)',cat:'Secrets Management',desc:'Industry standard for managing secrets, tokens, certificates, and encryption keys. Essential for production cloud environments.',tags:['Secrets','PKI','IAM'],url:'https://developer.hashicorp.com/vault'},
  {icon:'🌊',name:'Falco',cat:'Runtime Security',desc:'Cloud-native runtime security tool for Kubernetes and containers. Detects anomalous behavior and policy violations in real-time.',tags:['Kubernetes','Runtime','Detection'],url:'https://falco.org'},
  {icon:'✅',name:'Checkov',cat:'IaC Security',desc:'Static analysis for Terraform, CloudFormation, Kubernetes, Dockerfiles. Catches security misconfigs before deployment.',tags:['Terraform','IaC','DevSecOps'],url:'https://github.com/bridgecrewio/checkov'},
  {icon:'🕵️',name:'Gitleaks',cat:'Secret Detection',desc:'Detect hardcoded credentials, API keys, tokens, and passwords in Git repositories. Use as a pre-commit hook.',tags:['Secrets','Git','CI/CD'],url:'https://github.com/gitleaks/gitleaks'},
  {icon:'🔬',name:'Semgrep',cat:'SAST',desc:'Fast, open-source SAST tool for 30+ languages. Find security bugs before code reaches production.',tags:['SAST','Python','DevSecOps'],url:'https://semgrep.dev'},
  {icon:'🌐',name:'OWASP ZAP',cat:'DAST',desc:'Free, open-source web application security scanner. Finds XSS, SQL injection, and other vulnerabilities via dynamic testing.',tags:['DAST','Web','OWASP'],url:'https://www.zaproxy.org/'},
  {icon:'📊',name:'Wiz',cat:'CNAPP',desc:'Cloud-Native Application Protection Platform. Industry leader for cloud security posture, workload protection, and data security.',tags:['CNAPP','Enterprise','Cloud'],url:'https://www.wiz.io/'},
  {icon:'🧩',name:'Terraform',cat:'Infrastructure as Code',desc:'The industry standard for cloud IaC. Define, plan, and apply infrastructure across 1000+ providers using HCL.',tags:['IaC','AWS','DevOps'],url:'https://developer.hashicorp.com/terraform'},
  {icon:'📡',name:'Wireshark',cat:'Network Analysis',desc:'The world\'s most popular network protocol analyzer. Capture and inspect network packets for security analysis.',tags:['Network','Forensics','Analysis'],url:'https://www.wireshark.org/'},
  {icon:'🔓',name:'Burp Suite Community',cat:'Web Pentesting',desc:'Free web application security testing platform. Intercept, analyze, and modify HTTP/HTTPS requests.',tags:['Web','Pentesting','Proxy'],url:'https://portswigger.net/burp/communitydownload'},
  {icon:'🗺️',name:'Nmap',cat:'Network Scanning',desc:'The legendary network scanner. Discover hosts, open ports, running services, and OS fingerprinting.',tags:['Network','Scanning','Recon'],url:'https://nmap.org/'},
  {icon:'🎯',name:'Metasploit Framework',cat:'Exploitation',desc:'World\'s most widely used penetration testing framework. 2000+ exploits for learning attack techniques.',tags:['Exploitation','Pentesting','Red Team'],url:'https://www.metasploit.com/'},
];

// ── CERTIFICATIONS DATA ───────────────────────
const CERTS = [
  {name:'ISC² Certified in Cybersecurity (CC)',provider:'ISC²',level:'entry',timing:'Before University — Get it FREE',cost:'FREE (Limited)',desc:'Entry-level security certification from ISC². Perfect starting credential. ISC² offered it free to 1M learners.',url:'https://www.isc2.org/certifications/cc',examUrl:'https://www.isc2.org/certifications/cc/cc-certification-exam-outline'},
  {name:'CompTIA Security+ SY0-701',provider:'CompTIA',level:'entry',timing:'End of Phase 1 — Year 2',cost:'~$392 USD',desc:'The most recognized entry-level security certification. Required by U.S. DoD. Covers threats, architecture, implementation, governance, and cryptography.',url:'https://www.comptia.org/certifications/security',examUrl:'https://www.comptia.org/certifications/security#examdetails'},
  {name:'CompTIA Network+ N10-009',provider:'CompTIA',level:'entry',timing:'Before Security+',cost:'~$358 USD',desc:'Essential networking certification. Validates TCP/IP, subnetting, routing, network troubleshooting. Often taken before Security+.',url:'https://www.comptia.org/certifications/network',examUrl:'https://www.comptia.org/certifications/network#examdetails'},
  {name:'AWS Cloud Practitioner CLF-C02',provider:'Amazon Web Services',level:'associate',timing:'Start of Phase 2 — Year 3',cost:'~$100 USD',desc:'Foundational AWS certification. Validates cloud concepts, AWS services, billing, and security basics. Good first cloud cert.',url:'https://aws.amazon.com/certification/certified-cloud-practitioner/',examUrl:'https://aws.amazon.com/certification/certified-cloud-practitioner/'},
  {name:'AWS Solutions Architect Associate (SAA-C03)',provider:'Amazon Web Services',level:'associate',timing:'End of Phase 2 — Year 3',cost:'~$300 USD',desc:'The gold standard cloud architecture credential. 130 mins, 65 questions, 720/1000 passing. Validates secure, resilient, performant AWS architectures.',url:'https://aws.amazon.com/certification/certified-solutions-architect-associate/',examUrl:'https://aws.amazon.com/certification/certified-solutions-architect-associate/'},
  {name:'AWS Developer Associate (DVA-C02)',provider:'Amazon Web Services',level:'associate',timing:'Concurrent Phase 3 (Optional)',cost:'~$300 USD',desc:'Deepens serverless, CI/CD, containerization, and API Gateway knowledge — critical for DevSecOps engineering roles.',url:'https://aws.amazon.com/certification/certified-developer-associate/',examUrl:'https://aws.amazon.com/certification/certified-developer-associate/'},
  {name:'Certified Kubernetes Administrator (CKA)',provider:'CNCF / Linux Foundation',level:'associate',timing:'Phase 3 — Optional',cost:'~$395 USD',desc:'Performance-based Kubernetes administration exam. 2 hours, hands-on in a live cluster. High demand in DevSecOps market.',url:'https://www.cncf.io/certification/cka/',examUrl:'https://training.linuxfoundation.org/certification/certified-kubernetes-administrator-cka/'},
  {name:'Certified Kubernetes Security Specialist (CKS)',provider:'CNCF / Linux Foundation',level:'professional',timing:'After CKA — Phase 4',cost:'~$395 USD',desc:'Advanced Kubernetes security exam. Covers cluster hardening, system hardening, supply chain security, monitoring, and runtime security.',url:'https://www.cncf.io/certification/cks/',examUrl:'https://training.linuxfoundation.org/certification/certified-kubernetes-security-specialist/'},
  {name:'AWS Security Specialty (SCS-C02)',provider:'Amazon Web Services',level:'professional',timing:'Phase 4 — Final Year',cost:'~$300 USD',desc:'The definitive AWS security credential. 3 hours, 65 questions, 750/1000 passing. Covers data protection, infrastructure security, incident response, and governance.',url:'https://aws.amazon.com/certification/certified-security-specialty/',examUrl:'https://aws.amazon.com/certification/certified-security-specialty/'},
  {name:'Google Professional Cloud Security Engineer',provider:'Google Cloud',level:'professional',timing:'Phase 4 — Multi-Cloud Path',cost:'~$200 USD',desc:'Validates ability to design and implement secure GCP infrastructure. Strong demand in organizations using Google Workspace and GCP.',url:'https://cloud.google.com/learn/certification/cloud-security-engineer',examUrl:'https://cloud.google.com/learn/certification/cloud-security-engineer'},
  {name:'CCSP — Certified Cloud Security Professional',provider:'ISC²',level:'professional',timing:'Post-Graduation (2+ years exp.)',cost:'~$599 USD',desc:'The most globally recognized vendor-neutral cloud security certification. Covers cloud data security, application security, legal compliance, and risk management.',url:'https://www.isc2.org/Certifications/CCSP',examUrl:'https://www.isc2.org/certifications/ccsp/ccsp-certification-exam-outline'},
  {name:'OSCP — Offensive Security Certified Professional',provider:'Offensive Security',level:'expert',timing:'Optional — Phase 4 / Post-Grad (Red Team)',cost:'~$1,499 USD',desc:'The highest-prestige hands-on penetration testing certification. 24-hour practical exam, industry gold standard for offensive security roles.',url:'https://www.offsec.com/courses/pen-200/',examUrl:'https://www.offsec.com/courses/pen-200/'},
];

// ── POLICIES DATA ─────────────────────────────
const POLICIES = [
  {icon:'🏛️',name:'NIST CSF 2.0',full:'NIST Cybersecurity Framework 2.0 (2024)',
   body:'Updated in 2024, NIST CSF 2.0 is the most widely adopted cybersecurity framework globally. It adds a new "Govern" function to its 6 core functions: Govern, Identify, Protect, Detect, Respond, Recover.',
   points:['Govern: Establish cybersecurity strategy, roles, policies','Identify: Asset management, risk assessment, supply chain risk','Protect: Access control, data security, awareness training','Detect: Anomalies, continuous monitoring, detection processes','Respond: Incident response planning, communications, analysis','Recover: Recovery planning, improvements, communications'],
   links:[{label:'Official NIST CSF 2.0 PDF',url:'https://www.nist.gov/cyberframework'},{label:'NIST CSF Quick Start Guide',url:'https://www.nist.gov/cyberframework/getting-started'}]},
  {icon:'🌍',name:'ISO/IEC 27001:2022',full:'Information Security Management System Standard',
   body:'ISO 27001 is the international standard for Information Security Management Systems (ISMS). It provides a systematic approach to managing sensitive information and achieving internationally recognized certification.',
   points:['Annex A: 93 controls across 4 themes (Organizational, People, Physical, Technological)','Requires a formal risk assessment and treatment process','Mandatory management commitment and resource allocation','Internal audits and management review cycles required','External auditor certification body (third-party audit) required','Highly valued by enterprise clients and government organizations'],
   links:[{label:'ISO 27001:2022 Overview',url:'https://www.iso.org/standard/27001'},{label:'Free ISO 27001 Checklist',url:'https://www.isms.online/iso-27001/'}]},
  {icon:'🔒',name:'SOC 2 Type II',full:'Service Organization Control 2 — Trust Services Criteria',
   body:'SOC 2 is an auditing standard for cloud service providers and SaaS companies. A SOC 2 Type II report demonstrates sustained security controls over 6-12 months. Required by most enterprise customers.',
   points:['5 Trust Services Criteria: Security, Availability, Confidentiality, Processing Integrity, Privacy','Type I: Point-in-time assessment of control design','Type II: 6-12 month assessment of operational effectiveness','Performed by a licensed CPA firm (not self-certified)','Security is the mandatory TSC — others are optional','Required by most Fortune 500 enterprise contracts'],
   links:[{label:'AICPA SOC 2 Overview',url:'https://www.aicpa-cima.com/resources/landing/system-and-organization-controls-soc-suite-of-services'},{label:'SOC 2 Compliance Guide',url:'https://www.vanta.com/resources/soc-2'}]},
  {icon:'⚙️',name:'CIS Benchmarks',full:'Center for Internet Security Benchmarks & Controls',
   body:'CIS Benchmarks provide consensus-based, step-by-step configuration hardening guides for specific technologies. FREE PDF downloads for AWS, Azure, GCP, Linux, Kubernetes, Docker, and more.',
   points:['AWS CIS Benchmark: IAM, logging, monitoring, networking, storage controls','Kubernetes CIS Benchmark: API server, etcd, control plane, worker node hardening','Two levels: Level 1 (essential, minimal disruption) and Level 2 (deep security)','CIS Controls v8: 18 controls for prioritized cybersecurity actions','Used by Prowler, Scout Suite, and Security Hub for automated compliance checks','Free download at cisecurity.org (requires free account)'],
   links:[{label:'CIS Benchmarks Free Download',url:'https://www.cisecurity.org/cis-benchmarks/'},{label:'CIS AWS Foundations Benchmark',url:'https://www.cisecurity.org/benchmark/amazon_web_services'}]},
  {icon:'🌐',name:'GDPR',full:'General Data Protection Regulation (EU) 2016/679',
   body:'GDPR is the EU\'s comprehensive data protection law. It applies to ANY organization processing personal data of EU/EEA residents, regardless of where the organization is based. Non-compliance fines: up to €20 million or 4% of global annual revenue.',
   points:['7 key principles: Lawfulness, Purpose limitation, Data minimization, Accuracy, Storage limitation, Integrity, Accountability','Data Subject Rights: Right to access, erasure ("right to be forgotten"), portability','Data Protection Officer (DPO): Required for large-scale or sensitive data processing','72-hour breach notification requirement to supervisory authorities','Privacy by Design and Privacy by Default are mandatory','Affects Indian companies with EU customers — highly relevant for SaaS'],
   links:[{label:'GDPR Official Text (EU Law)',url:'https://gdpr-info.eu/'},{label:'GDPR Checklist for Companies',url:'https://gdprchecklist.io/'}]},
  {icon:'🏗️',name:'OWASP Cloud Top 10',full:'OWASP Cloud Security Top 10 (2024)',
   body:'OWASP\'s Cloud Security Top 10 identifies the most critical cloud security risks in 2024. Understanding these is mandatory for cloud security engineering roles.',
   points:['C1: Insecure Cloud, Container, Orchestration Configuration','C2: Injection Flaws (Cloud-specific: SSM, SQS, SNS injection)','C3: Improper Authentication & Authorization','C4: Cloud Storage Misconfiguration (Public S3 buckets, blob storage)','C5: Insufficient Logging and Monitoring','C6: Insecure Interfaces and APIs','C7: Insecure Third-Party Resources (Supply chain attacks)','C8: Insufficient Secrets Management (Hardcoded keys)','C9: Outdated and Vulnerable Components','C10: Insufficient Identity, Credential, Access, and Key Management'],
   links:[{label:'OWASP Cloud Top 10',url:'https://owasp.org/www-project-cloud-top-10/'},{label:'OWASP Cheat Sheet Series',url:'https://cheatsheetseries.owasp.org/'}]},
  {icon:'💊',name:'HIPAA',full:'Health Insurance Portability and Accountability Act (US)',
   body:'HIPAA governs the protection of Protected Health Information (PHI) in the United States. Cloud engineers working in health tech must understand HIPAA compliance requirements for AWS, Azure, and GCP.',
   points:['PHI definition: Any health information that can identify an individual','HIPAA Security Rule: Technical, physical, and administrative safeguards','Encryption requirements: Data in transit (TLS) and at rest (AES-256)','Business Associate Agreement (BAA): Required when a cloud provider handles PHI','AWS, Azure, GCP are all HIPAA-eligible with signed BAA','Breach notification: 60-day notification to HHS and affected individuals'],
   links:[{label:'HIPAA Official Reference',url:'https://www.hhs.gov/hipaa/index.html'},{label:'AWS HIPAA Compliance',url:'https://aws.amazon.com/compliance/hipaa-compliance/'}]},
  {icon:'💳',name:'PCI DSS v4.0',full:'Payment Card Industry Data Security Standard v4.0',
   body:'PCI DSS v4.0 (released 2022, mandatory by March 2025) governs security for any organization that stores, processes, or transmits payment card data. 12 requirements across 6 goals.',
   points:['Requirement 1-2: Network security controls (firewalls, router configs)','Requirement 3-4: Protect stored and transmitted cardholder data','Requirement 5-6: Maintain secure systems and software','Requirement 7-9: Control access to system components and data','Requirement 10-11: Log, monitor, and test security systems','Requirement 12: Support information security with policies and programs'],
   links:[{label:'PCI DSS v4.0 Official Standard',url:'https://www.pcisecuritystandards.org/document_library/'},{label:'AWS PCI DSS Compliance',url:'https://aws.amazon.com/compliance/pci-dss-level-1-faqs/'}]},
];

// ── SALARY DATA ───────────────────────────────
const SALARIES = [
  {role:'Cloud Security Engineer (India)',range:'₹8 – 22 LPA',sub:'Entry to Mid-level, Tier 1-2 cities',items:['AWS + Security+ = ₹10-14 LPA entry','CCSP/AWS Security Specialty = ₹18-25 LPA','Top companies: Accenture, Infosys, TCS, Wipro (BFSI)','Startups: Razorpay, Zepto, Swiggy offer ₹15-22 LPA'],barColor:'#8b5cf6',barPct:65},
  {role:'DevSecOps Engineer (India)',range:'₹10 – 28 LPA',sub:'Mid-level, 2-4 years experience',items:['Terraform + Kubernetes + Security certs = premium','FAANG India offices: ₹25-40 LPA','Strong startup demand (fintech, healthtech)','Remote roles from US companies paying $60-90k'],barColor:'#6366f1',barPct:75},
  {role:'Cloud Security Architect (India)',range:'₹22 – 50+ LPA',sub:'Senior level, 6+ years experience',items:['CCSP + 5 years cloud experience minimum','Often requires MBA or CISSP addition','Consulting firms (Deloitte, PwC) pay premium','Independent consulting ₹5,000-15,000/hour'],barColor:'#3b82f6',barPct:88},
  {role:'Cloud Security Engineer (USA)',range:'$85k – $145k',sub:'Entry to Mid-level, major metro areas',items:['AWS Security Specialty = 15-20% salary bump','NYC/SF pay 25-35% higher than national average','H-1B sponsored roles widely available','Total comp with equity can reach $180-250k at FAANG'],barColor:'#10b981',barPct:70},
  {role:'Cloud Security Architect (USA)',range:'$140k – $220k',sub:'Senior, 6+ years, major companies',items:['CISO pipeline role at Fortune 500','Equity + RSUs significantly increase total comp','Contract/consulting: $150-250/hour','Demand outpacing supply through 2028 (BLS data)'],barColor:'#f59e0b',barPct:90},
  {role:'Penetration Tester / Red Teamer (India)',range:'₹8 – 20 LPA',sub:'OSCP certified, 2-4 years',items:['OSCP certification is the minimum bar','Bug bounty can supplement income significantly','Independent consulting ₹2,000-8,000/hour','Growing demand from BFSI and government sectors'],barColor:'#f43f5e',barPct:55},
];

// ── COMMUNITY DATA ────────────────────────────
const COMMUNITY = [
  {icon:'🔴',label:'r/netsec — Reddit',url:'https://reddit.com/r/netsec'},
  {icon:'🔵',label:'r/cloudsecurity — Reddit',url:'https://reddit.com/r/cloudsecurity'},
  {icon:'💬',label:'CloudSec Discord Server',url:'https://cloudsecdiscord.com/'},
  {icon:'🟦',label:'CNCF Slack — #sig-security',url:'https://slack.cncf.io/'},
  {icon:'🐦',label:'DEF CON Cloud Village',url:'https://www.youtube.com/c/CloudVillage'},
  {icon:'📖',label:'Awesome Cloud Security (GitHub)',url:'https://github.com/4ndersonLin/awesome-cloud-security'},
];

// ── TIPS DATA ─────────────────────────────────
const TIPS = [
  {icon:'🎯',text:'Never skip networking fundamentals. CIDR, subnetting, VPC routing — these appear in every cloud security interview.'},
  {icon:'⌨️',text:'Use Terraform for EVERYTHING from day one. Clicking through AWS Console is a skill that will hurt your career.'},
  {icon:'🃏',text:'Use Anki flashcards daily. Security+ and AWS certifications are won by consistent daily review, not cramming.'},
  {icon:'💻',text:'Complete flaws.cloud today. It\'s free, takes 3 hours, and teaches you more AWS security than most courses.'},
  {icon:'📝',text:'Your GitHub is your real resume. Every lab you complete should be committed with a clear README.'},
  {icon:'🔍',text:'Read CloudTrail logs until they become second nature. Log analysis is the #1 skill in cloud security incidents.'},
  {icon:'🏆',text:'Certification order: Security+ → AWS SAA → AWS Security Specialty → CCSP. This path is proven.'},
  {icon:'🤝',text:'Join CloudSec Discord and r/cloudsecurity. The community gives you access to insider knowledge unavailable in courses.'},
];

// ══════════════════════════════════════════════
// STATE MANAGEMENT
// ══════════════════════════════════════════════
const KEY = 'aegis_v2_state';
let S = {done:{}, v:'2.0', sound:true, theme:'dark', ctfs:{}};

function loadS(){
  try{
    const s=localStorage.getItem(KEY);
    if(s)S=JSON.parse(s);
  }catch(e){}
  if(!S.done) S.done={};
  if(S.sound===undefined) S.sound=true;
  if(S.theme===undefined) S.theme='dark';
  if(!S.ctfs) S.ctfs={};
}
function saveS(){
  try{
    localStorage.setItem(KEY,JSON.stringify(S));
    window.dispatchEvent(new CustomEvent('aegisStateChanged', { detail: S }));
  }catch(e){}
}
function isDone(mid,i){return!!S.done[mid+'-'+i]}
function toggle(mid,i){
  S.done[mid+'-'+i]=!S.done[mid+'-'+i];
  saveS();
  syncProgress();
  if(S.done[mid+'-'+i]){
    playAudioSound('success');
  } else {
    playAudioSound('click');
  }
}
function getAll(){let t=0;PHASES.forEach(p=>p.modules.forEach(m=>{t+=m.objectives.length}));return t}
function getDone(){return Object.values(S.done).filter(Boolean).length}
function phasePct(p){let t=0,d=0;p.modules.forEach(m=>{t+=m.objectives.length;m.objectives.forEach((_,i)=>{if(isDone(m.id,i))d++;});});return t?Math.round(d/t*100):0}
function modPct(m){const d=m.objectives.filter((_,i)=>isDone(m.id,i)).length;return m.objectives.length?Math.round(d/m.objectives.length*100):0}

// ── AUDIO SYNTHESIZER ──
let audioCtx = null;
function playAudioSound(type) {
  if (!S.sound) return;
  try {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    
    const now = audioCtx.currentTime;
    if (type === 'click') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(600, now);
      osc.frequency.exponentialRampToValueAtTime(150, now + 0.06);
      gain.gain.setValueAtTime(0.05, now);
      gain.gain.linearRampToValueAtTime(0, now + 0.06);
      osc.start(now);
      osc.stop(now + 0.06);
    } else if (type === 'success') {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(523.25, now); // C5
      osc.frequency.setValueAtTime(659.25, now + 0.08); // E5
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.setValueAtTime(0.08, now + 0.08);
      gain.gain.linearRampToValueAtTime(0, now + 0.22);
      osc.start(now);
      osc.stop(now + 0.22);
    } else if (type === 'complete') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(261.63, now); // C4
      osc.frequency.setValueAtTime(329.63, now + 0.06); // E4
      osc.frequency.setValueAtTime(392.00, now + 0.12); // G4
      osc.frequency.setValueAtTime(523.25, now + 0.18); // C5
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.setValueAtTime(0.08, now + 0.06);
      gain.gain.setValueAtTime(0.08, now + 0.12);
      gain.gain.setValueAtTime(0.08, now + 0.18);
      gain.gain.linearRampToValueAtTime(0, now + 0.4);
      osc.start(now);
      osc.stop(now + 0.4);
    }
  } catch (e) {
    console.warn("Web Audio API warning:", e);
  }
}

// ── DAILY TIP ENGINE ──
function renderRandomTip() {
  const tl = document.getElementById('tips-list');
  if (!tl) return;
  const rand = Math.floor(Math.random() * TIPS.length);
  const t = TIPS[rand];
  tl.innerHTML = `
    <div class="tip" style="animation: toast-in 0.3s ease;">
      <span class="tip-icon">${t.icon}</span>
      <p>${t.text}</p>
    </div>
  `;
}

// ── CTF TRACKER ──
const CTFS = [
  { id: 'thm', name: 'TryHackMe', badge: 'Labs' },
  { id: 'htb', name: 'HackTheBox', badge: 'Labs' },
  { id: 'flaws', name: 'flAWS.cloud', badge: 'AWS CTF' },
  { id: 'flaws2', name: 'flAWS2.cloud', badge: 'AWS CTF' },
  { id: 'bigiam', name: 'Big IAM Challenge', badge: 'IAM CTF' },
  { id: 'eks', name: 'EKS Cluster Games', badge: 'K8s CTF' }
];

function renderCtfTracker() {
  const el = document.getElementById('ctf-tracker-list');
  if (!el) return;
  el.innerHTML = CTFS.map(c => {
    const done = !!S.ctfs[c.id];
    return `
      <div class="ctf-item">
        <div class="ctf-name-wrap">
          <span class="ctf-badge">${c.badge}</span>
          <span class="ctf-name">${c.name}</span>
        </div>
        <div class="ctf-check ${done ? 'active' : ''}" data-ctfid="${c.id}">
          <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="1.5 6 5 9.5 10.5 3"/></svg>
        </div>
      </div>
    `;
  }).join('');
  
  el.querySelectorAll('.ctf-check').forEach(chk => {
    chk.addEventListener('click', () => {
      const id = chk.dataset.ctfid;
      S.ctfs[id] = !S.ctfs[id];
      saveS();
      chk.classList.toggle('active', !!S.ctfs[id]);
      if (S.ctfs[id]) {
        playAudioSound('success');
        toast(`✓ Completed ${CTFS.find(c => c.id === id).name}!`, 'ok');
      } else {
        playAudioSound('click');
      }
    });
  });
}

// ── CERTIFICATIONS FLOWCHART ──
function renderCertFlowchart() {
  const fc = document.getElementById('roadmap-flowchart');
  if (!fc) return;
  const cols = { entry: [], associate: [], professional: [], expert: [] };
  CERTS.forEach(c => { if (cols[c.level]) cols[c.level].push(c); });
  const levels = ['entry', 'associate', 'professional', 'expert'];
  const labels = { entry: 'Entry Level', associate: 'Associate', professional: 'Professional', expert: 'Expert' };
  fc.innerHTML = levels.map(lvl => `
    <div class="roadmap-column">
      <div class="sec-lbl" style="text-align:center; margin-bottom:8px;">${labels[lvl]}</div>
      ${cols[lvl].map(c => `
        <div class="flow-node" onclick="window.open('${c.url}', '_blank')">
          <div class="flow-node-title">${c.name}</div>
          <div class="flow-node-prov">${c.provider}</div>
          <span class="flow-node-badge l-${c.level}">${c.level}</span>
        </div>
      `).join('')}
    </div>
  `).join('');
}

// ── GLOBAL SEARCH ENGINE ──
function handleSearch(query) {
  query = query.toLowerCase().trim();
  const clearBtn = document.getElementById('search-clear-btn');
  if (!query) {
    if (clearBtn) clearBtn.classList.add('hidden');
    nav('dashboard');
    return;
  }
  if (clearBtn) clearBtn.classList.remove('hidden');
  
  let matches = [];
  PHASES.forEach((p, pIdx) => {
    p.modules.forEach(m => {
      m.objectives.forEach((objText, objIdx) => {
        if (objText.toLowerCase().includes(query)) {
          matches.push({
            type: 'objective',
            title: `Objective in Phase ${pIdx+1} > ${m.title}`,
            text: objText,
            phase: pIdx + 1,
            mid: m.id,
            idx: objIdx
          });
        }
      });
      m.resources.forEach(res => {
        if (res.label.toLowerCase().includes(query) || res.url.toLowerCase().includes(query)) {
          matches.push({
            type: 'resource',
            title: `Resource in Phase ${pIdx+1} > ${m.title}`,
            label: res.label,
            url: res.url,
            resType: res.type
          });
        }
      });
    });
  });
  
  FREE_RESOURCES.forEach(r => {
    if (r.title.toLowerCase().includes(query) || r.desc.toLowerCase().includes(query) || r.type.toLowerCase().includes(query)) {
      matches.push({
        type: 'hub_resource',
        title: `Hub Resource > ${r.type}`,
        label: r.title,
        desc: r.desc,
        url: r.url,
        resType: r.type,
        free: r.free,
        icon: r.icon
      });
    }
  });
  
  TOOLS.forEach(t => {
    if (t.name.toLowerCase().includes(query) || t.desc.toLowerCase().includes(query) || t.cat.toLowerCase().includes(query) || t.tags.some(tag => tag.toLowerCase().includes(query))) {
      matches.push({
        type: 'tool',
        title: `Tool Arsenal > ${t.cat}`,
        name: t.name,
        desc: t.desc,
        url: t.url,
        tags: t.tags,
        icon: t.icon
      });
    }
  });
  
  const grid = document.getElementById('search-results-grid');
  const lbl = document.getElementById('search-results-lbl');
  if (lbl) lbl.textContent = `Showing results for "${query}" (${matches.length} matches found)`;
  
  if (grid) {
    if (matches.length === 0) {
      grid.innerHTML = `<div class="gc" style="grid-column:1/-1; text-align:center; padding:40px; color:var(--on-surface-3);">No matching topics, resources, or tools found. Try another query.</div>`;
    } else {
      grid.innerHTML = matches.map(m => {
        if (m.type === 'objective') {
          const done = isDone(m.mid, m.idx);
          return `
            <div class="gc res-card" onclick="nav('phase${m.phase}')" style="cursor:pointer;">
              <div class="rc-head">
                <div class="rc-icon">✅</div>
                <div class="rc-info">
                  <div class="rc-title">${m.title}</div>
                  <span class="badge ${done?'free-badge':'paid-badge'}" style="${done?'':'background:rgba(244,63,94,0.15);color:#fb7185;border:1px solid rgba(244,63,94,0.2)'}">${done?'Completed':'In Progress'}</span>
                </div>
              </div>
              <p class="rc-desc" style="margin-top:8px;">${m.text}</p>
              <span class="rc-link">Go to Phase ${m.phase} →</span>
            </div>
          `;
        } else if (m.type === 'resource') {
          return `
            <a class="gc res-card" href="${m.url}" target="_blank" rel="noopener" style="text-decoration:none;">
              <div class="rc-head">
                <div class="rc-icon">📚</div>
                <div class="rc-info">
                  <div class="rc-title">${m.title}</div>
                  <span class="rb ${m.resType}">${m.resType}</span>
                </div>
              </div>
              <p class="rc-desc" style="margin-top:8px;">${m.label}</p>
              <span class="rc-link">🔗 Open Link →</span>
            </a>
          `;
        } else if (m.type === 'hub_resource') {
          return `
            <a class="gc res-card" href="${m.url}" target="_blank" rel="noopener" style="text-decoration:none;">
              <div class="rc-head">
                <div class="rc-icon">${m.icon}</div>
                <div class="rc-info">
                  <div class="rc-title">${m.label}</div>
                  <div class="rc-meta">
                    <span class="badge ${m.free?'free-badge':'paid-badge'}">${m.free?'FREE':'Paid'}</span>
                    <span class="rb ${m.resType.toLowerCase().includes('video')||m.resType.toLowerCase().includes('youtube')?'video':m.resType.toLowerCase().includes('lab')||m.resType.toLowerCase().includes('ctf')?'lab':'text'}">${m.resType}</span>
                  </div>
                </div>
              </div>
              <p class="rc-desc">${m.desc}</p>
              <span class="rc-link">🔗 Open Resource →</span>
            </a>
          `;
        } else if (m.type === 'tool') {
          return `
            <a class="gc res-card" href="${m.url}" target="_blank" rel="noopener" style="text-decoration:none;">
              <div class="rc-head">
                <div class="rc-icon">${m.icon}</div>
                <div class="rc-info">
                  <div class="rc-title">${m.name}</div>
                  <div class="rc-meta"><span class="badge free-badge">${m.title}</span></div>
                </div>
              </div>
              <p class="rc-desc">${m.desc}</p>
              <span class="rc-link">🔗 View Tool →</span>
            </a>
          `;
        }
      }).join('');
    }
  }
  nav('search');
}

function init3DParallax() {
  const cards = document.querySelectorAll('.gc, .poi, .flow-node');
  cards.forEach(card => {
    if (card._3dbound) return;
    card._3dbound = true;
    
    let rect = null;
    let rafId = 0;
    let ex = 0, ey = 0; // latest pointer coords while over card

    card.addEventListener('mouseenter', () => {
      // Cache rect ONCE on enter — no reflow inside move handler
      rect = card.getBoundingClientRect();
      // Zero transition on transform — instant response
      card.style.transition = 'box-shadow 0.15s ease, border-color 0.15s ease';
      card.style.boxShadow = '0 16px 45px rgba(0, 212, 255, 0.18)';
      card.style.borderColor = 'rgba(0, 212, 255, 0.45)';
    });

    card.addEventListener('pointermove', (e) => {
      if (!rect) return;
      ex = e.clientX;
      ey = e.clientY;
      // Apply directly — no RAF batching needed, transform is compositor-only
      const x = (ex - rect.left) / rect.width;
      const y = (ey - rect.top) / rect.height;
      const tiltX = (0.5 - y) * 12;
      const tiltY = (x - 0.5) * 12;
      card.style.transform = `perspective(1000px) rotateX(${tiltX.toFixed(2)}deg) rotateY(${tiltY.toFixed(2)}deg) scale3d(1.025,1.025,1.025)`;
      card.style.setProperty('--glare-x', (x * 100) + '%');
      card.style.setProperty('--glare-y', (y * 100) + '%');
    }, { passive: true });

    card.addEventListener('mouseleave', () => {
      rect = null;
      // Smooth return to flat — transition ONLY on leave (not on move)
      card.style.transition = 'transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease';
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)';
      card.style.boxShadow = '';
      card.style.borderColor = '';
      card.style.setProperty('--glare-x', '-100%');
      card.style.setProperty('--glare-y', '-100%');
    });
  });
}

function triggerScanAnimation() {
  const scanner = document.getElementById('scanner-line');
  if (scanner) {
    scanner.classList.remove('scanning');
    void scanner.offsetWidth; // Force layout reflow to restart CSS animation
    scanner.classList.add('scanning');
  }
}

// ── THEME & SOUND VISUALS ──
function applyTheme() {
  const isLight = S.theme === 'light';
  document.body.classList.toggle('light-mode', isLight);
  
  const textEl = document.getElementById('theme-text');
  const iconEl = document.getElementById('theme-icon');
  if (textEl) textEl.textContent = isLight ? 'Light Theme' : 'Dark Theme';
  if (iconEl) {
    if (isLight) {
      iconEl.innerHTML = `<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>`;
    } else {
      iconEl.innerHTML = `<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>`;
    }
  }
}

function applySound() {
  const soundEl = document.getElementById('sound-text');
  const iconEl = document.getElementById('sound-icon');
  if (soundEl) soundEl.textContent = S.sound ? 'SFX: On' : 'SFX: Off';
  if (iconEl) {
    if (S.sound) {
      iconEl.innerHTML = `<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/>`;
    } else {
      iconEl.innerHTML = `<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/>`;
    }
  }
}

// ══════════════════════════════════════════════
// PROGRESS SYNC
// ══════════════════════════════════════════════
function syncProgress(){
  const all=getAll(), done=getDone(), pct=all?Math.round(done/all*100):0;
  const circ=2*Math.PI*27; // r=27
  const ring=document.getElementById('prog-ring');
  if(ring) ring.style.strokeDashoffset=circ-(pct/100)*circ;
  setText('circ-pct',pct+'%');
  setText('s-done',done);
  setText('s-total',all);
  PHASES.forEach((p,i)=>{
    const pp=phasePct(p);
    setText('nb'+(i+1),pp+'%');
    // update mini bars in dashboard
    document.querySelectorAll('[data-pbar="'+(i+1)+'"]').forEach(el=>el.style.width=pp+'%');
    document.querySelectorAll('[data-ppct="'+(i+1)+'"]').forEach(el=>el.textContent=pp+'%');
  });
  // update module bars
  PHASES.forEach(p=>p.modules.forEach(m=>{
    const mp=modPct(m);
    document.querySelectorAll('[data-mbar="'+m.id+'"]').forEach(el=>el.style.width=mp+'%');
    document.querySelectorAll('[data-mpct="'+m.id+'"]').forEach(el=>el.textContent=mp+'%');
  }));
}

// ══════════════════════════════════════════════
// RENDER: PHASE PAGES
// ══════════════════════════════════════════════
function renderPhase(idx){
  const p=PHASES[idx];
  const el=document.getElementById('page-phase'+(idx+1));
  if(!el||el._done)return;
  el._done=true;
  const pp=phasePct(p);
  el.innerHTML=`
    <div class="phase-hdr">
      <div class="ptag">${p.icon} ${p.subtitle}</div>
      <h1 class="pt">${p.title}</h1>
      <div class="phase-goal">${p.goal}</div>
      <div class="phase-progress-bar"><div class="phase-progress-fill" style="width:${pp}%" data-pbar="${idx+1}"></div></div>
    </div>
    ${p.modules.map(m=>renderModule(m)).join('')}
  `;
  // bind events
  el.querySelectorAll('.mc-hdr').forEach(hdr=>{
    hdr.addEventListener('click',()=>{
      const body=hdr.nextElementSibling;
      const chev=hdr.querySelector('.mc-chev');
      body.classList.toggle('open');
      if(chev)chev.classList.toggle('open');
    });
  });
  el.querySelectorAll('.obj').forEach(obj=>{
    obj.addEventListener('click',()=>{
      toggle(obj.dataset.mid, parseInt(obj.dataset.idx));
      const cb=obj.querySelector('.cb');
      const txt=obj.querySelector('.obj-txt');
      const done=isDone(obj.dataset.mid, parseInt(obj.dataset.idx));
      if(cb){cb.classList.toggle('on',done)}
      if(txt){txt.classList.toggle('done',done)}
    });
  });
}

function renderModule(m){
  const mp=modPct(m);
  return `
  <div class="mc">
    <div class="mc-hdr">
      <div class="mc-ico">${m.icon}</div>
      <div class="mc-info">
        <div class="mc-title">${m.title}</div>
        <div class="mc-meta">${m.objectives.length} objectives · ${m.resources.length} resources</div>
      </div>
      <div class="mc-prog">
        <div class="mc-bar"><div class="mc-fill" data-mbar="${m.id}" style="width:${mp}%"></div></div>
        <span class="mc-pct" data-mpct="${m.id}">${mp}%</span>
      </div>
      <svg class="mc-chev" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
    </div>
    <div class="mc-body">
      <div class="sec-lbl">✅ Objectives — Check off as you complete each one</div>
      <div class="objs">
        ${m.objectives.map((o,i)=>{
          const done=isDone(m.id,i);
          return `<div class="obj" data-mid="${m.id}" data-idx="${i}">
            <div class="cb ${done?'on':''}"><svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="1 6 5 10 11 2"/></svg></div>
            <span class="obj-txt ${done?'done':''}">${o}</span>
          </div>`;
        }).join('')}
      </div>
      <div class="sec-lbl">📚 Resources — Click to open in browser</div>
      <div class="rl">
        ${m.resources.map(r=>{
          const url=r.url.replace(/\[.*?\]\((.*?)\)/g,'$1');
          return `<a class="ri" href="${url}" target="_blank" rel="noopener">
            <span class="rb ${r.type}">${r.type}</span>
            <span class="ri-lbl">${r.label}</span>
            <svg class="ri-arr" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
          </a>`;
        }).join('')}
      </div>
    </div>
  </div>`;
}

// ══════════════════════════════════════════════
// RENDER: FREE RESOURCES
// ══════════════════════════════════════════════
let activeFilter='all';

function renderResources(filter){
  const grid=document.getElementById('res-grid');
  if(!grid)return;
  const filtered=filter==='all'?FREE_RESOURCES:FREE_RESOURCES.filter(r=>r.cat===filter);
  grid.innerHTML=filtered.map(r=>`
    <div class="gc res-card">
      <div class="rc-head">
        <div class="rc-icon">${r.icon}</div>
        <div class="rc-info">
          <div class="rc-title">${r.title}</div>
          <div class="rc-meta">
            <span class="badge ${r.free?'free-badge':'paid-badge'}">${r.free?'FREE':'Paid'}</span>
            <span class="rb ${r.type.toLowerCase().includes('video')||r.type.toLowerCase().includes('youtube')?'video':r.type.toLowerCase().includes('lab')||r.type.toLowerCase().includes('ctf')||r.type.toLowerCase().includes('wargame')?'lab':r.type.toLowerCase().includes('podcast')||r.type.toLowerCase().includes('audio')?'audio':r.type.toLowerCase().includes('book')||r.type.toLowerCase().includes('pdf')||r.type.toLowerCase().includes('wiki')||r.type.toLowerCase().includes('docs')?'book':r.type.toLowerCase().includes('course')||r.type.toLowerCase().includes('cert')?'free':'text'}">${r.type}</span>
          </div>
        </div>
      </div>
      <p class="rc-desc">${r.desc}</p>
      <a class="rc-link" href="${r.url}" target="_blank" rel="noopener">🔗 Open Resource →</a>
    </div>
  `).join('');
  init3DParallax();
}

function initResourcesPage(){
  const bar=document.getElementById('res-filter-bar');
  if(!bar||bar._done)return;
  bar._done=true;
  const cats=[{id:'all',label:'All Resources'},{id:'youtube',label:'📺 YouTube'},{id:'labs',label:'🧪 Labs & CTFs'},{id:'books',label:'📚 Books & Docs'},{id:'audio',label:'🎧 Podcasts'},{id:'courses',label:'🎓 Courses'},{id:'community',label:'💬 Community'}];
  bar.innerHTML=cats.map(c=>`<button class="filter-btn${c.id==='all'?' active':''}" data-cat="${c.id}">${c.label}</button>`).join('');
  bar.querySelectorAll('.filter-btn').forEach(btn=>{
    btn.addEventListener('click',()=>{
      bar.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      renderResources(btn.dataset.cat);
    });
  });
  renderResources('all');
}

// ══════════════════════════════════════════════
// RENDER: SUBNET CALCULATOR
// ══════════════════════════════════════════════
function ipToInt(ip){return ip.split('.').reduce((a,o)=>(a<<8)|parseInt(o),0)>>>0}
function intToIp(n){return[(n>>>24)&255,(n>>>16)&255,(n>>>8)&255,n&255].join('.')}
function toBin(ip){return ip.split('.').map(n=>parseInt(n).toString(2).padStart(8,'0')).join('.')}

function calcSubnet(){
  const ip=(document.getElementById('ip-in').value||'').trim();
  const cidr=parseInt(document.getElementById('cidr').value);
  const pattern=/^(\d{1,3}\.){3}\d{1,3}$/;
  if(!pattern.test(ip)||ip.split('.').some(p=>parseInt(p)>255)){toast('Invalid IP address','err');return}
  const ipI=ipToInt(ip);
  const maskI=cidr===0?0:(~0<<(32-cidr))>>>0;
  const netI=(ipI&maskI)>>>0;
  const bcastI=(netI|~maskI)>>>0;
  const first=cidr<31?(netI+1)>>>0:netI;
  const last=cidr<31?(bcastI-1)>>>0:bcastI;
  const total=Math.pow(2,32-cidr);
  const usable=Math.max(0,cidr<31?total-2:total);
  const wild=(~maskI)>>>0;
  const fo=(netI>>>24)&255;
  const cls=fo<128?'Class A':fo<192?'Class B':fo<224?'Class C':'Class D/E';
  const priv=(fo===10)||( fo===172&&((netI>>>16)&255)>=16&&((netI>>>16)&255)<=31)||(fo===192&&((netI>>>16)&255)===168);
  const res=[
    {l:'Network Address',v:intToIp(netI)+'/'+cidr},
    {l:'Subnet Mask',v:intToIp(maskI)},
    {l:'Broadcast Address',v:intToIp(bcastI)},
    {l:'First Usable Host',v:intToIp(first)},
    {l:'Last Usable Host',v:intToIp(last)},
    {l:'Total Hosts',v:total.toLocaleString()},
    {l:'Usable Hosts',v:usable.toLocaleString()},
    {l:'IP Class',v:cls},
    {l:'Address Type',v:priv?'Private':'Public'},
    {l:'Wildcard Mask',v:intToIp(wild)},
    {l:'Binary IP',v:toBin(ip)},
    {l:'Binary Mask',v:toBin(intToIp(maskI))},
  ];
  document.getElementById('sub-res').innerHTML=res.map(r=>`<div class="rsi"><span class="rsi-lbl">${r.l}</span><span class="rsi-val">${r.v}</span></div>`).join('');
  // Binary viz
  const netBits=cidr, hostBits=32-cidr;
  document.getElementById('bin-disp').innerHTML=`
    <div class="bin-row"><span class="bin-lbl">IP:</span><span class="bin-val">${toBin(ip)}</span></div>
    <div class="bin-row"><span class="bin-lbl">Mask:</span><span class="bin-val">${toBin(intToIp(maskI))}</span></div>
    <div class="bin-row"><span class="bin-lbl">Network:</span><span class="bin-val">${toBin(intToIp(netI))}</span></div>
  `;
  document.getElementById('ip-visual').innerHTML=`
    <div class="ivl">Network Boundary — ${netBits} Network bits | ${hostBits} Host bits</div>
    <div class="ip-bar">
      <div class="ip-net" style="width:${(netBits/32)*100}%">Network (${netBits}b)</div>
      <div class="ip-host">Host (${hostBits}b)</div>
    </div>
  `;
  toast('✓ Network calculated','ok');
}

function initSubnetPage(){
  const cidrSlider=document.getElementById('cidr');
  const cidrLbl=document.getElementById('cidr-lbl');
  if(!cidrSlider)return;
  if(cidrSlider._done)return;
  cidrSlider._done=true;
  cidrSlider.addEventListener('input',()=>{if(cidrLbl)cidrLbl.textContent='/'+cidrSlider.value});
  document.getElementById('calc-btn').addEventListener('click',calcSubnet);
  document.getElementById('ip-in').addEventListener('keydown',e=>{if(e.key==='Enter')calcSubnet()});
  document.querySelectorAll('.preset').forEach(btn=>{
    btn.addEventListener('click',()=>{
      document.getElementById('ip-in').value=btn.dataset.ip;
      document.getElementById('cidr').value=btn.dataset.cidr;
      if(cidrLbl)cidrLbl.textContent='/'+btn.dataset.cidr;
      calcSubnet();
    });
  });
  // CIDR reference table
  const tbl=document.getElementById('cidr-table');
  if(tbl){
    const rows=[[24,256,254,'255.255.255.0'],[25,128,126,'255.255.255.128'],[26,64,62,'255.255.255.192'],[27,32,30,'255.255.255.224'],[28,16,14,'255.255.255.240'],[29,8,6,'255.255.255.248'],[30,4,2,'255.255.255.252'],[16,65536,65534,'255.255.0.0'],[8,16777216,16777214,'255.0.0.0']];
    tbl.innerHTML=`<table class="ctbl"><thead><tr><th>CIDR</th><th>Total Hosts</th><th>Usable</th><th>Subnet Mask</th></tr></thead><tbody>${rows.map(r=>`<tr><td class="hl">/${r[0]}</td><td>${r[1].toLocaleString()}</td><td>${r[2].toLocaleString()}</td><td>${r[3]}</td></tr>`).join('')}</tbody></table>`;
  }
  calcSubnet();
}

// ══════════════════════════════════════════════
// RENDER: TOOLS
// ══════════════════════════════════════════════
function renderTools(){
  const g=document.getElementById('tools-grid');
  if(!g||g._done)return;
  g._done=true;
  g.innerHTML=TOOLS.map(t=>`
    <div class="gc tool-card">
      <div class="tc-head"><span class="tc-icon">${t.icon}</span><div><div class="tc-name">${t.name}</div><div class="tc-cat">${t.cat}</div></div></div>
      <p class="tc-desc">${t.desc}</p>
      <div class="tc-tags">${t.tags.map(tg=>`<span class="tc-tag">${tg}</span>`).join('')}</div>
      <a class="tc-link" href="${t.url}" target="_blank" rel="noopener">🔗 View Tool →</a>
    </div>
  `).join('');
}

// ══════════════════════════════════════════════
// RENDER: CERTIFICATIONS
// ══════════════════════════════════════════════
let certFilter='all';
function renderCerts(filter){
  const tl=document.getElementById('certs-timeline');
  if(!tl)return;
  const data=filter==='all'?CERTS:CERTS.filter(c=>c.level===filter);
  tl.innerHTML=data.map((c,i)=>`
    <div class="cert-item" style="animation-delay:${i*0.08}s">
      <div class="gc cert-card">
        <div class="cert-hdr">
          <div><div class="cert-name">${c.name}</div><div class="cert-prov">${c.provider}</div></div>
          <span class="level-badge l-${c.level}">${c.level.toUpperCase()}</span>
        </div>
        <p class="cert-desc">${c.desc}</p>
        <div class="cert-timing">${c.timing} — ${c.cost}</div>
        <div class="cert-footer">
          <a class="cert-link" href="${c.url}" target="_blank" rel="noopener">📋 Cert Info →</a>
          <a class="cert-link" href="${c.examUrl}" target="_blank" rel="noopener">📝 Exam Details →</a>
        </div>
      </div>
    </div>
  `).join('');
  init3DParallax();
}
function initCertsPage(){
  const bar=document.getElementById('cert-filter');
  if(!bar||bar._done)return;
  bar._done=true;
  const levels=[{id:'all',label:'All Certs'},{id:'entry',label:'Entry Level'},{id:'associate',label:'Associate'},{id:'professional',label:'Professional'},{id:'expert',label:'Expert'}];
  bar.innerHTML=levels.map(l=>`<button class="filter-btn${l.id==='all'?' active':''}" data-lvl="${l.id}">${l.label}</button>`).join('');
  bar.querySelectorAll('.filter-btn').forEach(btn=>{
    btn.addEventListener('click',()=>{
      bar.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      renderCerts(btn.dataset.lvl);
    });
  });
  renderCerts('all');
}

// ══════════════════════════════════════════════
// RENDER: POLICIES
// ══════════════════════════════════════════════
function renderPolicies(){
  const g=document.getElementById('policies-grid');
  if(!g||g._done)return;
  g._done=true;
  g.innerHTML=POLICIES.map(p=>`
    <div class="gc policy-card">
      <div class="pc-head"><span class="pc-icon">${p.icon}</span><div><div class="pc-name">${p.name}</div><div class="pc-full">${p.full}</div></div></div>
      <p class="pc-body">${p.body}</p>
      <ul class="pc-points">${p.points.map(pt=>`<li>${pt}</li>`).join('')}</ul>
      <div class="pc-links">${p.links.map(l=>`<a class="pc-link" href="${l.url}" target="_blank" rel="noopener">🔗 ${l.label}</a>`).join('')}</div>
    </div>
  `).join('');
}

// ══════════════════════════════════════════════
// RENDER: SALARY
// ══════════════════════════════════════════════
function renderSalary(){
  const g=document.getElementById('salary-grid');
  if(!g||g._done)return;
  g._done=true;
  g.innerHTML=SALARIES.map(s=>`
    <div class="gc salary-card">
      <div class="sc-role">${s.role}</div>
      <div class="sc-range" style="color:${s.barColor}">${s.range}</div>
      <div class="sc-sub">${s.sub}</div>
      <div class="sc-items">${s.items.map(i=>`<div class="sc-item">${i}</div>`).join('')}</div>
      <div class="sc-bar-wrap">
        <div class="sc-bar-lbl"><span>Market Demand</span><span>${s.barPct}%</span></div>
        <div class="sc-bar"><div class="sc-bar-fill" style="background:${s.barColor};width:${s.barPct}%;box-shadow:0 0 8px ${s.barColor}60" data-w="${s.barPct}"></div></div>
      </div>
    </div>
  `).join('');
}

// ══════════════════════════════════════════════
// RENDER: DASHBOARD
// ══════════════════════════════════════════════
function renderDashboard(){
  // Stats
  const statsEl=document.getElementById('stats-row');
  if(statsEl&&!statsEl._done){
    statsEl._done=true;
    statsEl.innerHTML=`
      <div class="gc stat-card"><div class="si si-violet"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg></div><div class="sv"><span class="sv-num" id="s-done">0</span><span class="sv-lbl">Objectives Done</span></div></div>
      <div class="gc stat-card"><div class="si si-blue"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div><div class="sv"><span class="sv-num" id="s-total">0</span><span class="sv-lbl">Total Objectives</span></div></div>
      <div class="gc stat-card"><div class="si si-emerald"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div><div class="sv"><span class="sv-num">${CERTS.length}</span><span class="sv-lbl">Target Certifications</span></div></div>
      <div class="gc stat-card"><div class="si si-amber"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg></div><div class="sv"><span class="sv-num">${FREE_RESOURCES.filter(r=>r.free).length}+</span><span class="sv-lbl">Free Resources</span></div></div>
    `;
  }
  // Phase overview
  const po=document.getElementById('phase-overview');
  if(po&&!po._done){
    po._done=true;
    po.innerHTML=PHASES.map((p,i)=>{
      const pp=phasePct(p);
      return `<div class="poi" data-page="phase${i+1}">
        <span class="poi-num">${i+1}</span>
        <div class="poi-info">
          <div class="poi-title">${p.title.replace(/^PHASE \d+: /,'')}</div>
          <div class="poi-sub">${p.subtitle} · ${p.modules.length} modules</div>
        </div>
        <div class="poi-bar-wrap">
          <div class="mini-bar"><div class="mini-fill" data-pbar="${i+1}" style="width:${pp}%"></div></div>
          <span class="mini-pct" data-ppct="${i+1}">${pp}%</span>
        </div>
      </div>`;
    }).join('');
    po.querySelectorAll('.poi').forEach(el=>el.addEventListener('click',()=>nav(el.dataset.page)));
  }
  // Tips
  const tl=document.getElementById('tips-list');
  if(tl&&!tl._done){
    tl._done=true;
    renderRandomTip();
  }
  // Community
  const cl=document.getElementById('community-links');
  if(cl&&!cl._done){
    cl._done=true;
    cl.innerHTML=COMMUNITY.map(c=>`<a class="cl" href="${c.url}" target="_blank" rel="noopener"><span class="cl-icon">${c.icon}</span>${c.label}</a>`).join('');
  }
  // CTF Tracker
  const ctfEl=document.getElementById('ctf-tracker-list');
  if(ctfEl&&!ctfEl._done){
    ctfEl._done=true;
    renderCtfTracker();
  }
}

// ══════════════════════════════════════════════
// NAVIGATION
// ══════════════════════════════════════════════
let cur='dashboard';
function nav(page){
  document.querySelectorAll('.page').forEach(p=>{
    p.classList.remove('active');
    p.style.display='none';
    p.classList.remove('skeleton-shimmer');
  });
  const t=document.getElementById('page-'+page);
  if(t){
    t.style.display='block';
    t.classList.add('skeleton-shimmer');
    requestAnimationFrame(()=>t.classList.add('active'));
    triggerScanAnimation();
    setTimeout(() => {
      t.classList.remove('skeleton-shimmer');
    }, 250);
  }
  document.querySelectorAll('.ni').forEach(n=>n.classList.toggle('active',n.dataset.page===page));
  cur=page;
  if(page.startsWith('phase')){renderPhase(parseInt(page.replace('phase',''))-1)}
  else if(page==='resources'){initResourcesPage()}
  else if(page==='subnet'){initSubnetPage()}
  else if(page==='tools'){renderTools()}
  else if(page==='certs'){initCertsPage(); renderCertFlowchart();}
  else if(page==='policies'){renderPolicies()}
  else if(page==='salary'){renderSalary()}
  else if(page==='dashboard'){renderDashboard()}
  document.getElementById('main')?.scrollTo(0,0);
  setTimeout(init3DParallax, 50);
}

// ══════════════════════════════════════════════
// EXPORT / IMPORT
// ══════════════════════════════════════════════
function exportData(){
  const blob=new Blob([JSON.stringify({version:'2.0',exportedAt:new Date().toISOString(),...S},null,2)],{type:'application/json'});
  const a=document.createElement('a');
  a.href=URL.createObjectURL(blob);
  a.download=`aegis-pro-v2-${new Date().toISOString().slice(0,10)}.json`;
  a.click();
  toast('Progress exported!','ok');
}
function importData(file){
  const r=new FileReader();
  r.onload=e=>{
    try{
      const d=JSON.parse(e.target.result);
      if(d.done){
        S.done=d.done;
        if(d.sound !== undefined) S.sound = d.sound;
        if(d.theme !== undefined) S.theme = d.theme;
        if(d.ctfs !== undefined) S.ctfs = d.ctfs;
        saveS();
        applyTheme();
        applySound();
        syncProgress();
        PHASES.forEach((_,i)=>{const pg=document.getElementById('page-phase'+(i+1));if(pg){pg.innerHTML='';pg._done=false}});
        toast('Progress imported!','ok');
      }
    }catch{toast('Invalid file','err')}
  };
  r.readAsText(file);
}

// ══════════════════════════════════════════════
// CLOCK
// ══════════════════════════════════════════════
function updateClock(){
  const el=document.getElementById('clock');
  if(el)el.textContent=new Date().toLocaleTimeString('en-IN',{hour:'2-digit',minute:'2-digit',second:'2-digit'});
}

// ══════════════════════════════════════════════
// BACKGROUND CANVAS — PARTICLE NETWORK
// ══════════════════════════════════════════════
function initAppCanvas(){
  const c=document.getElementById('app-canvas');
  if(!c)return;
  const ctx=c.getContext('2d',{alpha:true,desynchronized:true});
  let W=c.width=innerWidth,H=c.height=innerHeight;
  
  const cols = 22, rows = 22;
  const spacingX = 85, spacingZ = 85;
  const fov = 380;
  const cameraDistance = 900;
  
  let points = [];
  for (let r = 0; r < rows; r++) {
    for (let cl = 0; cl < cols; cl++) {
      const x = (cl - cols / 2) * spacingX;
      const z = (r - rows / 2) * spacingZ;
      points.push({ x, y: 0, z, ox: x, oz: z });
    }
  }
  
  let mouseX = 0, mouseY = 0;
  let targetRotY = 0, targetRotX = 0.35;
  let rotY = 0, rotX = 0.35;
  let time = 0;

  // pointermove fires at OS pointer rate (lower latency than mousemove).
  // passive:true tells browser it won't preventDefault — unblocks input pipeline.
  window.addEventListener('pointermove', (e) => {
    mouseX = (e.clientX / W) * 2 - 1;
    mouseY = (e.clientY / H) * 2 - 1;
    targetRotY = mouseX * 0.45;
    targetRotX = 0.35 - mouseY * 0.35;
  }, { passive: true });

  window.addEventListener('resize', () => {
    W = c.width = innerWidth;
    H = c.height = innerHeight;
  }, { passive: true });

  // ── (project() inlined into draw loop below for speed) ──

  // Pre-allocate projected array — avoids GC pressure every frame
  const projected = new Array(rows * cols);
  let lastTime = 0;

  function draw(timestamp) {
    const delta = Math.min((timestamp - lastTime) / 16.667, 3);
    lastTime = timestamp;
    ctx.clearRect(0, 0, W, H);
    time += 0.012 * delta;

    // Zero-delay: snap directly to target every frame — no lerp, no lag
    rotX = targetRotX;
    rotY = targetRotY;

    // Pre-compute mouse screen coords once outside loops
    const smx = (mouseX + 1) * W * 0.5;
    const smy = (mouseY + 1) * H * 0.5;
    const cosY = Math.cos(rotY), sinY = Math.sin(rotY);
    const cosX = Math.cos(rotX), sinX = Math.sin(rotX);

    // Project all points, reuse array slots
    for (let i = 0, n = rows * cols; i < n; i++) {
      const p = points[i];
      const distFromCenter = Math.sqrt(p.ox * p.ox + p.oz * p.oz);
      const wave = Math.sin(distFromCenter * 0.003 - time * 1.5) * 35;
      const x1 = p.ox * cosY - p.oz * sinY;
      const z1 = p.ox * sinY + p.oz * cosY;
      const y2 = wave * cosX - z1 * sinX;
      const z2 = wave * sinX + z1 * cosX;
      const scale = fov / (z2 + cameraDistance);
      projected[i] = { x: W * 0.5 + x1 * scale, y: H * 0.5 + y2 * scale + 130, scale };
    }

    ctx.lineWidth = 0.6;

    // ── Batch horizontal (cyan) lines in one path per alpha bucket ──
    // Group by rounded alpha to minimise strokeStyle changes
    const cyanPaths = [], purplePaths = [];
    for (let r = 0; r < rows; r++) {
      for (let cl = 0; cl < cols; cl++) {
        const i = r * cols + cl;
        const cur = projected[i];
        if (cur.scale <= 0) continue;
        const baseAlpha = Math.min(1, cur.scale * 0.28) * 0.12;

        if (cl < cols - 1) {
          const right = projected[i + 1];
          if (right.scale > 0) {
            const mx = (cur.x + right.x) * 0.5, my = (cur.y + right.y) * 0.5;
            const dx = mx - smx, dy = my - smy;
            const dist2 = dx * dx + dy * dy;
            const glow = dist2 < 48400 ? (1 - Math.sqrt(dist2) / 220) * 0.25 : 0;
            cyanPaths.push({ x1: cur.x, y1: cur.y, x2: right.x, y2: right.y, a: baseAlpha + glow });
          }
        }
        if (r < rows - 1) {
          const bot = projected[i + cols];
          if (bot.scale > 0) {
            const mx = (cur.x + bot.x) * 0.5, my = (cur.y + bot.y) * 0.5;
            const dx = mx - smx, dy = my - smy;
            const dist2 = dx * dx + dy * dy;
            const glow = dist2 < 48400 ? (1 - Math.sqrt(dist2) / 220) * 0.25 : 0;
            purplePaths.push({ x1: cur.x, y1: cur.y, x2: bot.x, y2: bot.y, a: baseAlpha + glow });
          }
        }
      }
    }

    // Draw cyan lines
    for (let i = 0; i < cyanPaths.length; i++) {
      const seg = cyanPaths[i];
      ctx.strokeStyle = `rgba(0,212,255,${seg.a.toFixed(3)})`;
      ctx.beginPath();
      ctx.moveTo(seg.x1, seg.y1);
      ctx.lineTo(seg.x2, seg.y2);
      ctx.stroke();
    }
    // Draw purple lines
    for (let i = 0; i < purplePaths.length; i++) {
      const seg = purplePaths[i];
      ctx.strokeStyle = `rgba(123,79,255,${seg.a.toFixed(3)})`;
      ctx.beginPath();
      ctx.moveTo(seg.x1, seg.y1);
      ctx.lineTo(seg.x2, seg.y2);
      ctx.stroke();
    }

    // Draw dots (every other point)
    for (let r = 0; r < rows; r+=2) {
      for (let cl = 0; cl < cols; cl+=2) {
        const cur = projected[r * cols + cl];
        if (cur.scale <= 0) continue;
        const a = Math.min(1, cur.scale * 0.28) * 0.25;
        ctx.fillStyle = `rgba(0,212,255,${a.toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(cur.x, cur.y, 1.2, 0, 6.2832);
        ctx.fill();
      }
    }

    requestAnimationFrame(draw);
  }
  requestAnimationFrame(draw);
}

// ══════════════════════════════════════════════
// LAUNCH SCREEN
// ══════════════════════════════════════════════
let launchBgActive = true;
function initBgCanvas(){
  const c=document.getElementById('bg-canvas');
  if(!c)return;
  const ctx=c.getContext('2d',{alpha:true,desynchronized:true});
  let W=c.width=innerWidth,H=c.height=innerHeight,t=0;
  function draw(){
    if (!launchBgActive) return; // Exit loop when app launches to save CPU/GPU cycles
    ctx.clearRect(0,0,W,H);t+=0.004;
    const g=ctx.createRadialGradient(W*.5,H*.5,0,W*.5,H*.5,W*.9);
    g.addColorStop(0,`rgba(${Math.round(15+Math.sin(t)*6)},${Math.round(10+Math.sin(t*.6)*4)},${Math.round(40+Math.sin(t*.4)*12)},1)`);
    g.addColorStop(.6,'rgba(6,6,20,1)');g.addColorStop(1,'rgba(3,3,12,1)');
    ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
    for(let i=0;i<3;i++){
      ctx.beginPath();
      for(let x=0;x<=W;x+=4){
        const y=H*(.75+i*.05)+Math.sin(x*.008+t+i*1.5)*35+Math.cos(x*.015-t*.8+i)*18;
        x===0?ctx.moveTo(x,y):ctx.lineTo(x,y);
      }
      ctx.strokeStyle=`rgba(0,212,255,${0.05-i*.01})`;ctx.lineWidth=1;ctx.stroke();
    }
    requestAnimationFrame(draw);
  }
  draw();
  window.addEventListener('resize',()=>{W=c.width=innerWidth;H=c.height=innerHeight});
}

function makeParticles(){
  const c=document.getElementById('particles');
  if(!c)return;
  for(let i=0;i<80;i++){
    const p=document.createElement('div');
    p.className='particle';
    const colors=['rgba(0,212,255,0.8)','rgba(123,79,255,0.7)','rgba(59,130,246,0.6)','rgba(138,235,255,0.9)'];
    p.style.cssText=`left:${Math.random()*100}%;bottom:${Math.random()*10}%;width:${Math.random()*3+1}px;height:${Math.random()*3+1}px;background:${colors[Math.floor(Math.random()*colors.length)]};animation-duration:${Math.random()*10+5}s;animation-delay:${Math.random()*8}s;box-shadow:0 0 ${Math.random()*6+2}px currentColor`;
    c.appendChild(p);
  }
}

const LOAD_MSGS=['Initializing Security Modules...','Loading Networking Protocols...','Mapping Cloud Architecture...','Calibrating IAM Policies...','Scanning Vulnerability Database...','Indexing 100+ Free Resources...','Loading Certification Roadmap...','Launching Mission Control...'];

function runLaunch(){
  let pct=0,mi=0;
  const bar=document.getElementById('lf'),pctEl=document.getElementById('lp'),st=document.getElementById('ls');
  const iv=setInterval(()=>{
    pct+=Math.random()*10+2;if(pct>100)pct=100;
    if(bar)bar.style.width=pct+'%';
    if(pctEl)pctEl.textContent=Math.round(pct)+'%';
    if(pct>(mi+1)*(100/LOAD_MSGS.length)){mi=Math.min(mi+1,LOAD_MSGS.length-1);if(st)st.textContent=LOAD_MSGS[mi]}
    if(pct>=100){clearInterval(iv);setTimeout(launchApp,700)}
  },100);
}

function launchApp(){
  const ls=document.getElementById('launch-screen'),app=document.getElementById('app');
  ls.classList.add('out');
  launchBgActive = false; // Stop the launch screen canvas animation loop immediately
  setTimeout(()=>{
    ls.style.display='none';
    const particles = document.getElementById('particles');
    if (particles) particles.innerHTML = ''; // Clear floating particles from the DOM to free resources
    app.classList.remove('hidden');
    initAppCanvas();
    initApp();
  },1200);
}

// ══════════════════════════════════════════════
// APP INIT
// ══════════════════════════════════════════════
function initApp(){
  loadS();
  applyTheme();
  applySound();
  renderDashboard();
  syncProgress();
  updateClock();
  setInterval(updateClock,1000);
  
  // Theme Toggle Binding
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      S.theme = S.theme === 'light' ? 'dark' : 'light';
      saveS();
      applyTheme();
      playAudioSound('click');
    });
  }
  
  // Sound Toggle Binding
  const soundToggle = document.getElementById('sound-toggle');
  if (soundToggle) {
    soundToggle.addEventListener('click', () => {
      S.sound = !S.sound;
      saveS();
      applySound();
      playAudioSound('click');
    });
  }
  
  // Search Bar Bindings
  const searchInput = document.getElementById('sb-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', e => handleSearch(e.target.value));
  }
  
  const searchClear = document.getElementById('search-clear-btn');
  if (searchClear) {
    searchClear.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      handleSearch('');
    });
  }
  
  // Tip Refresh Binding
  const tipBtn = document.getElementById('tip-refresh-btn');
  if (tipBtn) {
    tipBtn.addEventListener('click', () => {
      renderRandomTip();
      playAudioSound('click');
    });
  }

  // Nav bindings
  document.querySelectorAll('.ni').forEach(btn=>btn.addEventListener('click',()=>{
    playAudioSound('click');
    nav(btn.dataset.page);
  }));
  // Export/Import (handled safely with optional chaining)
  document.getElementById('export-btn')?.addEventListener('click',exportData);
  document.getElementById('import-btn')?.addEventListener('click',()=>document.getElementById('import-file')?.click());
  document.getElementById('import-file')?.addEventListener('change',e=>{if(e.target.files[0])importData(e.target.files[0]);e.target.value=''});

  // Account & Logout/Reset button bindings for local standalone mode
  const accountBtn = document.getElementById('account-btn');
  if (accountBtn) {
    accountBtn.addEventListener('click', () => {
      toast('Standalone mode: progress saved locally.', 'ok');
    });
  }

  const logoutBtn = document.getElementById('logout-btn');
  if (logoutBtn) {
    logoutBtn.textContent = '🧹 Reset Progress';
    logoutBtn.addEventListener('click', () => {
      if (confirm('Are you sure you want to reset all your progress?')) {
        S = {done:{}, v:'2.0', sound:true, theme:'dark', ctfs:{}};
        saveS();
        applyTheme();
        applySound();
        syncProgress();
        PHASES.forEach((_,i)=>{const pg=document.getElementById('page-phase'+(i+1));if(pg){pg.innerHTML='';pg._done=false}});
        toast('Progress reset.', 'ok');
      }
    });
  }
  // Global 3D Workspace Tilt (Lerp optimized for 60fps)
  const sidebar = document.getElementById('sidebar');
  const main = document.getElementById('main');
  let pX = 0, pY = 0; // raw pointer position (-0.5 to +0.5)
  // Cache viewport size — no reflow in the hot pointer path
  let vW = window.innerWidth, vH = window.innerHeight;
  window.addEventListener('resize', () => { vW = window.innerWidth; vH = window.innerHeight; }, { passive: true });

  // pointermove + passive = absolute minimum input latency
  window.addEventListener('pointermove', (e) => {
    pX = (e.clientX / vW) - 0.5;
    pY = (e.clientY / vH) - 0.5;
  }, { passive: true });

  function updateWorkspaceTilt() {
    // Zero-delay: read raw pointer position and apply instantly — no lerp, no lag
    if (sidebar) {
      sidebar.style.transform =
        `perspective(1200px) rotateX(${(-pY * 4).toFixed(3)}deg) rotateY(${(pX * 6).toFixed(3)}deg) translateZ(0)`;
    }
    if (main) {
      main.style.transform =
        `perspective(1500px) rotateX(${(pY * 3).toFixed(3)}deg) rotateY(${(-pX * 4).toFixed(3)}deg) translateZ(0)`;
    }
    requestAnimationFrame(updateWorkspaceTilt);
  }
  requestAnimationFrame(updateWorkspaceTilt);


  // Animate stats counter
  animCount();
  console.log("AEGIS PRO: Application successfully initialized");
  nav('dashboard');
}

function animCount(){
  const total=getAll(),done=getDone();
  let t=0;
  const iv=setInterval(()=>{
    t=Math.min(t+0.04,1);const e=1-Math.pow(1-t,3);
    setText('s-total',Math.round(total*e));
    setText('s-done',Math.round(done*e));
    if(t>=1)clearInterval(iv);
  },16);
}

// ══════════════════════════════════════════════
// UTILS
// ══════════════════════════════════════════════
function setText(id,v){const el=document.getElementById(id);if(el)el.textContent=v}
function toast(msg,type=''){
  const t=document.createElement('div');
  t.className='toast '+type;t.textContent=msg;
  document.body.appendChild(t);
  setTimeout(()=>t.remove(),3000);
}

// ══════════════════════════════════════════════
// BOOTSTRAP
// ══════════════════════════════════════════════
document.addEventListener('DOMContentLoaded',()=>{
  const isDashboard = !!document.getElementById('app');
  makeParticles();
  initBgCanvas();
  
  if (isDashboard) {
    console.log("AEGIS PRO: DOM fully loaded, starting launch screen");
    runLaunch();
  } else {
    console.log("AEGIS PRO: Auth Page loaded");
    // Firebase auth handles the actual login and redirect logic.
    // The forms just need to be caught by firebase-auth.js.
  }
});
