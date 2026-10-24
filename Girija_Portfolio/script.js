/**
 * ==========================================================================
 * Girija S - Personal Portfolio Website
 * Project: Girija_Portfolio
 * Technologies: Pure Vanilla JavaScript (ES6+)
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  // --------------------------------------------------------------------------
  // 1. DATA CONFIGURATIONS (Easily Editable)
  // --------------------------------------------------------------------------

  // --------------------------------------------------------------------------
  // 1. DATA CONFIGURATIONS & LOCAL STORAGE PERSISTENCE
  // --------------------------------------------------------------------------

  // Personal & Profile Data
  const PERSONAL_INFO = {
    fullName: "Girija S",
    title: "Computer Science & AI Student",
    degree: "B.Sc. Computer Science with Artificial Intelligence",
    college: "PERI College of Arts and Science",
    studyPeriod: "2025 - 2028",
    status: "Undergraduate Student",
    location: "No:7, Andal Nagar, Ullavur, Kanchipuram district - 631606",
    email: "girijasabari5907@gmail.com",
    githubUrl: "https://github.com/Girija5907",
    linkedinUrl: "https://www.linkedin.com/in/girija-s-a9a02a368"
  };

  // Base Technical & Professional Skills
  const DEFAULT_TECHNICAL_SKILLS = [
    {
      id: "skill-py",
      name: "Python Fundamentals",
      detail: "Core syntax, data structures, conditional logic, functions, and competitive debugging (1st Prize Winner at DEVXPLORES-2K26)."
    },
    {
      id: "skill-java",
      name: "Java Fundamentals",
      detail: "Object-Oriented Programming (OOP) concepts, class hierarchies, method structuring, and robust error handling."
    }
  ];

  const DEFAULT_PROFESSIONAL_SKILLS = [
    {
      id: "skill-team",
      name: "Teamwork & Leadership",
      detail: "Active collaboration, team task distribution, and guiding peer teams during symposium presentations."
    },
    {
      id: "skill-comm",
      name: "Communication & Fast Learning",
      detail: "Articulate verbal explanation of technical topics and swift adaptability to new tools and frameworks."
    },
    {
      id: "skill-canva",
      name: "Canva Visual Design",
      detail: "Infographic and poster creation (Awarded 2nd Prize in Poster Parade at PERI Cognizance 2k25)."
    },
    {
      id: "skill-office",
      name: "Microsoft Office Suite (Word, Excel, PowerPoint)",
      detail: "Technical documentation in Word, data organization in Excel, and engaging slide decks in PowerPoint."
    }
  ];

  // Base Projects
  const DEFAULT_PROJECTS = [
    {
      id: "gifttrack",
      name: "GiftTrack",
      subtitle: "Event & Function Gift Management",
      description: "Tracking gifts of family functions (Only-Frontend). An intuitive web application designed to track, organize, and search gifts received across family weddings, housewarmings, and special celebrations.",
      technologies: {
        frontend: ["React 19", "TypeScript", "Tailwind CSS v4", "Lucide Icons", "Motion", "Vite"],
        architecture: ["LocalStorage Persistence", "WhatsApp & Web Share APIs", "Node.js & Express runtime"]
      },
      githubUrl: "https://github.com/Girija5907/GiftTrack",
      demoUrl: "",
      accentColor: "from-indigo-600 to-blue-500",
      keyHighlights: [
        "Instant gift cataloging with donor contact tags and category filtering",
        "Client-side persistence using browser LocalStorage for offline reliability",
        "Direct integration with WhatsApp and Web Share API for thank-you messages"
      ]
    },
    {
      id: "cinebook",
      name: "CineBook",
      subtitle: "Movie Ticket Reservation Platform",
      description: "Online movie ticket booking application (Only-Frontend). Features an interactive cinema experience with dynamic showtime selection, visual seat grid picker, pricing calculation, and ticket confirmation.",
      technologies: {
        frontend: ["React 19", "TypeScript", "Tailwind CSS v4", "Motion", "Lucide React icons"],
        architecture: ["Vite 8", "esbuild 0.28", "Express", "Vercel Cloud Hosting"]
      },
      githubUrl: "https://github.com/Girija5907/CineBook",
      demoUrl: "",
      accentColor: "from-sky-500 to-indigo-600",
      keyHighlights: [
        "Awarded 2nd Prize in UI/UX Design at INNOVARA'26 Symposium",
        "Interactive theatre seating matrix with real-time seat availability logic",
        "Dynamic cart calculator with popcorn add-ons, convenience fee, and ticket preview"
      ]
    }
  ];

  // Base Authentic Achievements
  const DEFAULT_ACHIEVEMENTS = [
    {
      id: "ach-1",
      prize: "First Prize",
      prizeType: "first",
      title: "First Prize — Debugging Event",
      event: "InterCollegiate Technical Symposium, DEVXPLORES-2K26",
      organization: "Mohamed Sathak College of Arts and Science (Autonomous)",
      date: "March 11, 2026",
      description: "Won First Prize in the DEBUGGING event at DEVXPLORES-2K26, organized by the PG & Research Dept. of Computer Science & PG Dept. of Computer Applications. Successfully diagnosed and fixed syntax and algorithmic logic under strict competitive time limits.",
      certificateUrl: "certificates/devxplores_debugging_first_prize.jpg",
      certificateImage: "certificates/devxplores_debugging_first_prize.jpg"
    },
    {
      id: "ach-2",
      prize: "Second Prize",
      prizeType: "second",
      title: "Second Prize — UI/UX Design",
      event: "National Level Technical Symposium, INNOVARA'26",
      organization: "Prince Shri Balaji Arts and Science College",
      date: "September 19, 2026",
      description: "Secured II Place in the UI/UX DESIGN event for developing CineBook, an intuitive movie ticket reservation interface praised for accessible dark contrast, interactive seating layouts, and smooth UX flows.",
      certificateUrl: "certificates/innovara_uiux_design_second_prize.jpg",
      certificateImage: "certificates/innovara_uiux_design_second_prize.jpg"
    },
    {
      id: "ach-3",
      prize: "Second Prize",
      prizeType: "second",
      title: "Second Prize — Poster Parade Competition",
      event: "Inter-Department Symposium, PERI COGNIZANCE 2K25",
      organization: "PERI College of Arts and Science",
      date: "September 19, 2025",
      description: "Secured 2nd Place in the POSTER PARADE competition during PERI COGNIZANCE 2K25. Created an awareness campaign poster for 'SAY NO TO DRUGS' utilizing Canva visual design principles paired with an articulate oral defense.",
      certificateUrl: "certificates/peri_cognizance_poster_parade_second_prize.jpg",
      certificateImage: "certificates/peri_cognizance_poster_parade_second_prize.jpg"
    }
  ];

  // Base Authentic Certifications
  const DEFAULT_CERTIFICATES = [
    {
      id: "cert-1",
      name: "Google Slides for Beginners",
      issuer: "Cursa E-Learning Platform",
      completionDate: "August 4, 2026",
      duration: "8 hours",
      certificateId: "c294b10b03e423f87d5a938b2020775",
      certificateUrl: "certificates/cursa_google_slides_certificate.jpg",
      certificateImage: "certificates/cursa_google_slides_certificate.jpg",
      onlineVerifyUrl: "https://cursa.app/en/my-certificate/certc294b10b03e423f87d5a938b2020775",
      description: "Official Certificate of Completion for Google Slides for Beginners (8 hours) awarded to Girija S on August 4, 2026. Mastered professional visual presentation architecture, theme custom styling, master slide workflows, and dynamic asset embedding."
    },
    {
      id: "cert-2",
      name: "Typewriting — Junior (English)",
      issuer: "Department of Technical Education (DoTE), Tamil Nadu",
      completionDate: "February 2024",
      level: "Junior (30 WPM)",
      language: "English",
      result: "First Class",
      certificateId: "GTE No. 1540421 · Reg No. 747010",
      certificateUrl: "certificates/typewriting_english_junior.jpg",
      certificateImage: "certificates/typewriting_english_junior.jpg",
      pdfUrl: "certificates/girija_typewriting_certificates.pdf",
      alternateImg: "certificates/typewriting_english_senior.jpg",
      alternateLabel: "Senior Grade (45 WPM)",
      description: "Government Technical Examination (GTE) in English Typewriting at Junior Grade (30 WPM) passed with First Class distinction from the Board of Examinations, Department of Technical Education, Government of Tamil Nadu."
    },
    {
      id: "cert-3",
      name: "Typewriting — Senior (English)",
      issuer: "Department of Technical Education (DoTE), Tamil Nadu",
      completionDate: "August 2024",
      level: "Senior (45 WPM)",
      language: "English",
      result: "First Class",
      certificateId: "GTE No. 1590983 · Reg No. 746400",
      certificateUrl: "certificates/typewriting_english_senior.jpg",
      certificateImage: "certificates/typewriting_english_senior.jpg",
      pdfUrl: "certificates/girija_typewriting_certificates.pdf",
      alternateImg: "certificates/typewriting_english_junior.jpg",
      alternateLabel: "Junior Grade (30 WPM)",
      description: "Advanced Government Technical Examination (GTE) in English Typewriting at Senior Grade (45 WPM) passed with First Class distinction from the Board of Examinations, Department of Technical Education, Government of Tamil Nadu."
    }
  ];

  // Local Storage Helpers
  const getStoredData = (key, fallback = []) => {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : fallback;
    } catch {
      return fallback;
    }
  };

  const setStoredData = (key, data) => {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
  };

  // Aggregated Data Functions
  const getAllTechnicalSkills = () => [
    ...DEFAULT_TECHNICAL_SKILLS,
    ...getStoredData('girija_portfolio_custom_tech_skills', [])
  ];

  const getAllProfessionalSkills = () => [
    ...DEFAULT_PROFESSIONAL_SKILLS,
    ...getStoredData('girija_portfolio_custom_prof_skills', [])
  ];

  const getAllProjects = () => [
    ...DEFAULT_PROJECTS,
    ...getStoredData('girija_portfolio_custom_projects', [])
  ];

  const getAllAchievements = () => [
    ...DEFAULT_ACHIEVEMENTS,
    ...getStoredData('girija_portfolio_custom_achievements', [])
  ];

  const getAllCertificates = () => [
    ...DEFAULT_CERTIFICATES,
    ...getStoredData('girija_portfolio_custom_certs', [])
  ];

  // --------------------------------------------------------------------------
  // 5. RENDER FUNCTIONS
  // --------------------------------------------------------------------------

  // Render Skills
  const renderSkills = () => {
    const techGrid = document.getElementById('technicalSkillsGrid');
    const profGrid = document.getElementById('professionalSkillsGrid');

    if (techGrid) {
      const techSkills = getAllTechnicalSkills();
      techGrid.innerHTML = techSkills.map(skill => `
        <div class="skill-card" style="position: relative;">
          ${skill.isCustom ? `
            <button type="button" class="delete-card-btn" data-delete-type="tech_skill" data-id="${skill.id}" title="Remove custom skill">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
            </button>
          ` : ''}
          <div class="skill-icon-badge">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="m10 20-1.25-2.5-2.5-1.25 2.5-1.25L10 12.5l1.25 2.5 2.5 1.25-2.5 1.25z"></path>
              <path d="M7 6V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3"></path>
              <path d="M3 10h18"></path>
            </svg>
          </div>
          <div class="skill-info">
            <span class="skill-name">
              ${skill.name}
              ${skill.isCustom ? `<span class="custom-entry-tag">Custom</span>` : ''}
            </span>
            <span class="skill-detail">${skill.detail}</span>
          </div>
        </div>
      `).join('');
    }

    if (profGrid) {
      const profSkills = getAllProfessionalSkills();
      profGrid.innerHTML = profSkills.map(skill => `
        <div class="skill-card" style="position: relative;">
          ${skill.isCustom ? `
            <button type="button" class="delete-card-btn" data-delete-type="prof_skill" data-id="${skill.id}" title="Remove custom skill">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
            </button>
          ` : ''}
          <div class="skill-icon-badge">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
            </svg>
          </div>
          <div class="skill-info">
            <span class="skill-name">
              ${skill.name}
              ${skill.isCustom ? `<span class="custom-entry-tag">Custom</span>` : ''}
            </span>
            <span class="skill-detail">${skill.detail}</span>
          </div>
        </div>
      `).join('');
    }
  };

  // Render Projects
  const renderProjects = () => {
    const projectsGrid = document.getElementById('projectsGrid');
    if (!projectsGrid) return;

    const allProjects = getAllProjects();
    projectsGrid.innerHTML = allProjects.map((proj, idx) => `
      <article class="project-card" data-project-id="${proj.id}" style="position: relative;">
        ${proj.isCustom ? `
          <button type="button" class="delete-card-btn" data-delete-type="project" data-id="${proj.id}" title="Remove custom project">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
          </button>
        ` : ''}
        <div class="project-preview">
          <div class="project-preview-mock">
            <div class="mock-window-bar">
              <span class="mock-dot red"></span>
              <span class="mock-dot yellow"></span>
              <span class="mock-dot green"></span>
            </div>
            <div class="mock-body">
              <div class="mock-title">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                  <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                </svg>
                <span>${proj.name} Preview</span>
              </div>
              <div class="mock-line w-80"></div>
              <div class="mock-line w-60"></div>
            </div>
          </div>
        </div>

        <div class="project-content">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
            <span class="project-meta-kicker">Project 0${idx + 1} · Frontend Application</span>
            ${proj.isCustom ? `<span class="custom-entry-tag">Added Project</span>` : ''}
          </div>
          <h3 class="project-title">${proj.name}</h3>
          <p class="project-desc">${proj.description}</p>

          <div class="project-tech-block">
            <span class="tech-group-title">Frontend & UI Technologies</span>
            <div class="tech-tags">
              ${(proj.technologies?.frontend || []).map(t => `<span class="tech-tag">${t}</span>`).join('')}
            </div>

            <span class="tech-group-title">Architecture & Tooling</span>
            <div class="tech-tags">
              ${(proj.technologies?.architecture || []).map(t => `<span class="tech-tag">${t}</span>`).join('')}
            </div>
          </div>

          <div class="project-actions">
            ${proj.githubUrl ? `
              <a href="${proj.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm" aria-label="View ${proj.name} source code on GitHub">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
                GitHub Repository
              </a>
            ` : ''}
            <button type="button" class="btn btn-outline btn-sm view-project-btn" data-proj-id="${proj.id}">
              Details
            </button>
          </div>
        </div>
      </article>
    `).join('');
  };

  // Render Achievements
  const renderAchievements = () => {
    const achievementsGrid = document.getElementById('achievementsGrid');
    if (!achievementsGrid) return;

    const allAchievements = getAllAchievements();
    achievementsGrid.innerHTML = allAchievements.map((ach) => `
      <article class="achievement-card" style="position: relative;">
        ${ach.isCustom ? `
          <button type="button" class="delete-card-btn" data-delete-type="achievement" data-id="${ach.id}" title="Remove custom achievement">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
          </button>
        ` : ''}
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px;">
          <span class="prize-badge ${ach.prizeType || 'first'}">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="8" r="6"></circle>
              <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>
            </svg>
            ${ach.prize}
          </span>
          ${ach.isCustom ? `<span class="custom-entry-tag">Custom</span>` : ''}
        </div>

        <h3 class="achievement-title">${ach.title}</h3>
        <p class="achievement-event">${ach.event}</p>
        <p class="achievement-org">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path>
            <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path>
            <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path>
            <path d="M10 6h4"></path>
            <path d="M10 10h4"></path>
            <path d="M10 14h4"></path>
            <path d="M10 18h4"></path>
          </svg>
          ${ach.organization}
        </p>
        <p class="achievement-date">Date: ${ach.date}</p>
        <p class="achievement-desc">${ach.description}</p>

        <div class="achievement-action">
          <button type="button" class="btn btn-primary btn-sm open-cert-modal" aria-label="Visit and preview certificate for ${ach.title}" data-cert-img="${ach.certificateImage || ach.certificateUrl || ''}" data-cert-title="${ach.title}" data-cert-meta="${ach.organization} · ${ach.event}" data-cert-org="${ach.organization || ''}" data-cert-date="${ach.date || ''}" data-cert-url="${ach.certificateUrl || '#'}" data-pdf-url="${ach.pdfUrl || ''}" data-verify-url="${ach.onlineVerifyUrl || ''}">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
            Visit Certificate
          </button>
        </div>
      </article>
    `).join('');
  };

  // Render Certifications
  const renderCertifications = () => {
    const certsGrid = document.getElementById('certificationsGrid');
    if (!certsGrid) return;

    const allCertificates = getAllCertificates();
    certsGrid.innerHTML = allCertificates.map((cert) => `
      <article class="cert-card" style="position: relative;">
        ${cert.isCustom ? `
          <button type="button" class="delete-card-btn" data-delete-type="certification" data-id="${cert.id}" title="Remove custom certification">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
          </button>
        ` : ''}
        <div class="cert-icon-row">
          <div class="cert-icon-wrapper">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
              <circle cx="12" cy="14" r="3"></circle>
              <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
            </svg>
          </div>
          <div style="display: flex; align-items: center; gap: 8px;">
            ${cert.isCustom ? `<span class="custom-entry-tag">Custom</span>` : ''}
            <span class="cert-status-tag">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              Verified Credential
            </span>
          </div>
        </div>

        <h3 class="cert-name">${cert.name}</h3>
        <p class="cert-issuer">${cert.issuer}</p>

        <div class="cert-meta-list">
          <div class="cert-meta-row">
            <span class="cert-meta-label">Completion Date:</span>
            <span class="cert-meta-val">${cert.completionDate}</span>
          </div>
          ${cert.duration ? `
            <div class="cert-meta-row">
              <span class="cert-meta-label">Course Duration:</span>
              <span class="cert-meta-val">${cert.duration}</span>
            </div>
          ` : ''}
          ${cert.level ? `
            <div class="cert-meta-row">
              <span class="cert-meta-label">Examination Grade:</span>
              <span class="cert-meta-val">${cert.level} (${cert.result || 'First Class'})</span>
            </div>
          ` : ''}
        </div>

        ${cert.certificateId ? `
          <div class="cert-id-block">
            <strong>ID:</strong> ${cert.certificateId}
          </div>
        ` : ''}

        <p class="cert-desc">${cert.description}</p>

        <div class="cert-actions">
          <button type="button" class="btn btn-primary btn-sm open-cert-modal" aria-label="Visit and preview certificate for ${cert.name}" data-cert-img="${cert.certificateImage || cert.certificateUrl || ''}" data-cert-title="${cert.name}" data-cert-meta="${cert.issuer}" data-cert-org="${cert.issuer || ''}" data-cert-date="${cert.completionDate || ''}" data-cert-id="${cert.certificateId || ''}" data-cert-url="${cert.certificateUrl || '#'}" data-pdf-url="${cert.pdfUrl || ''}" data-verify-url="${cert.onlineVerifyUrl || ''}" data-alt-img="${cert.alternateImg || ''}" data-alt-label="${cert.alternateLabel || ''}">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
            Visit Certificate
          </button>
        </div>
      </article>
    `).join('');
  };

  // Initial Renders
  renderSkills();
  renderProjects();
  renderAchievements();
  renderCertifications();

  // --------------------------------------------------------------------------
  // 2. THEME CONTROLLER
  // --------------------------------------------------------------------------
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const savedTheme = localStorage.getItem('girija_portfolio_theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  const currentTheme = savedTheme || (systemPrefersDark ? 'dark' : 'dark');
  document.documentElement.setAttribute('data-theme', currentTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const activeTheme = document.documentElement.getAttribute('data-theme');
      const nextTheme = activeTheme === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', nextTheme);
      localStorage.setItem('girija_portfolio_theme', nextTheme);
    });
  }

  // --------------------------------------------------------------------------
  // 3. MOBILE NAVIGATION
  // --------------------------------------------------------------------------
  const mobileToggleBtn = document.getElementById('mobileNavToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (mobileToggleBtn && navMenu) {
    mobileToggleBtn.addEventListener('click', () => {
      const isOpen = navMenu.classList.contains('open');
      if (isOpen) {
        navMenu.classList.remove('open');
        mobileToggleBtn.setAttribute('aria-expanded', 'false');
      } else {
        navMenu.classList.add('open');
        mobileToggleBtn.setAttribute('aria-expanded', 'true');
      }
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navMenu.classList.contains('open')) {
          navMenu.classList.remove('open');
          mobileToggleBtn.setAttribute('aria-expanded', 'false');
        }
      });
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
        mobileToggleBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // --------------------------------------------------------------------------
  // 4. ACTIVE NAVIGATION LINK ON SCROLL
  // --------------------------------------------------------------------------
  const sectionIds = ['home', 'about', 'skills', 'education', 'projects', 'achievements', 'certifications', 'contact'];
  const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean);

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
  };

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(sec => navObserver.observe(sec));

  // --------------------------------------------------------------------------
  // --------------------------------------------------------------------------
  // 6. ADD NEW ENTRY MODAL SYSTEM (Skills, Projects, Achievements, Certifications)
  // --------------------------------------------------------------------------
  const entryModal = document.getElementById('entryModal');
  const entryModalTitle = document.getElementById('entryModalTitle');
  const entryModalSubtitle = document.getElementById('entryModalSubtitle');
  const entryModalBody = document.getElementById('entryModalBody');
  const entryModalCloseBtn = document.getElementById('entryModalCloseBtn');
  const entryModalCancelBtn = document.getElementById('entryModalCancelBtn');
  const entryModalForm = document.getElementById('entryModalForm');

  let currentAddType = null;
  let uploadedFileBase64 = '';

  const closeEntryModal = () => {
    if (!entryModal) return;
    entryModal.classList.remove('active');
    document.body.style.overflow = '';
    currentAddType = null;
    uploadedFileBase64 = '';
    if (entryModalForm) entryModalForm.reset();
  };

  if (entryModalCloseBtn) entryModalCloseBtn.addEventListener('click', closeEntryModal);
  if (entryModalCancelBtn) entryModalCancelBtn.addEventListener('click', closeEntryModal);
  if (entryModal) {
    entryModal.addEventListener('click', (e) => {
      if (e.target === entryModal) closeEntryModal();
    });
  }

  const openAddModal = (type) => {
    if (!entryModal || !entryModalBody) return;
    currentAddType = type;
    uploadedFileBase64 = '';

    if (type === 'skill') {
      entryModalTitle.textContent = 'Add New Skill';
      entryModalSubtitle.textContent = 'Add a technical language, framework, or professional tool to your profile.';
      entryModalBody.innerHTML = `
        <div class="form-group">
          <label class="form-label" for="skillCategory">Skill Category <span class="req">*</span></label>
          <select id="skillCategory" class="form-select" required>
            <option value="technical">Technical Skills (Programming, Languages & Software)</option>
            <option value="professional">Professional Skills (Tools, Design, Collaboration)</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label" for="skillName">Skill Name <span class="req">*</span></label>
          <input type="text" id="skillName" class="form-input" placeholder="e.g. TypeScript, React 19, Machine Learning" required />
        </div>
        <div class="form-group">
          <label class="form-label" for="skillDetail">Description / Detail <span class="req">*</span></label>
          <textarea id="skillDetail" class="form-textarea" placeholder="Brief summary of your proficiency and practical application..." required></textarea>
        </div>
      `;
    } else if (type === 'project') {
      entryModalTitle.textContent = 'Add New Project';
      entryModalSubtitle.textContent = 'Showcase a new web app, AI model, or frontend software project.';
      entryModalBody.innerHTML = `
        <div class="form-group">
          <label class="form-label" for="projectName">Project Name <span class="req">*</span></label>
          <input type="text" id="projectName" class="form-input" placeholder="e.g. SmartAttend AI" required />
        </div>
        <div class="form-group">
          <label class="form-label" for="projectSubtitle">Subtitle / Tagline</label>
          <input type="text" id="projectSubtitle" class="form-input" placeholder="e.g. AI-Powered Face Recognition Attendance System" />
        </div>
        <div class="form-group">
          <label class="form-label" for="projectDesc">Project Description <span class="req">*</span></label>
          <textarea id="projectDesc" class="form-textarea" placeholder="Detail what the application does, its core capabilities, and purpose..." required></textarea>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label class="form-label" for="projectFrontend">Frontend Technologies</label>
            <input type="text" id="projectFrontend" class="form-input" placeholder="e.g. React 19, TypeScript, Tailwind CSS" />
            <span class="form-help">Comma-separated</span>
          </div>
          <div class="form-group">
            <label class="form-label" for="projectArchitecture">Architecture & Tooling</label>
            <input type="text" id="projectArchitecture" class="form-input" placeholder="e.g. Python, FastAPI, Vite, LocalStorage" />
            <span class="form-help">Comma-separated</span>
          </div>
        </div>
        <div class="form-group">
          <label class="form-label" for="projectGithub">GitHub Repository URL <span class="req">*</span></label>
          <input type="url" id="projectGithub" class="form-input" placeholder="https://github.com/Girija5907/YourProject" required />
        </div>
        <div class="form-group">
          <label class="form-label" for="projectHighlights">Key Highlights (1 per line)</label>
          <textarea id="projectHighlights" class="form-textarea" placeholder="Automated face detection using OpenCV&#10;Real-time attendance export to CSV"></textarea>
        </div>
      `;
    } else if (type === 'achievement') {
      entryModalTitle.textContent = 'Add New Achievement';
      entryModalSubtitle.textContent = 'Record a prize, symposium award, or competition recognition.';
      entryModalBody.innerHTML = `
        <div class="form-row">
          <div class="form-group">
            <label class="form-label" for="achPrize">Prize Distinction <span class="req">*</span></label>
            <input type="text" id="achPrize" class="form-input" placeholder="e.g. First Prize, 2nd Place, Winner" required />
          </div>
          <div class="form-group">
            <label class="form-label" for="achPrizeType">Badge Style</label>
            <select id="achPrizeType" class="form-select">
              <option value="first">First Prize (Gold Accent)</option>
              <option value="second">Second Prize (Blue Accent)</option>
            </select>
          </div>
        </div>
        <div class="form-group">
          <label class="form-label" for="achTitle">Achievement Title <span class="req">*</span></label>
          <input type="text" id="achTitle" class="form-input" placeholder="e.g. First Prize — Web Development Hackathon" required />
        </div>
        <div class="form-group">
          <label class="form-label" for="achEvent">Event / Symposium Name <span class="req">*</span></label>
          <input type="text" id="achEvent" class="form-input" placeholder="e.g. National Level Technical Symposium, DEV-FEST 2027" required />
        </div>
        <div class="form-row">
          <div class="form-group">
            <label class="form-label" for="achOrg">Organizing Institution <span class="req">*</span></label>
            <input type="text" id="achOrg" class="form-input" placeholder="e.g. Anna University" required />
          </div>
          <div class="form-group">
            <label class="form-label" for="achDate">Date of Event <span class="req">*</span></label>
            <input type="text" id="achDate" class="form-input" placeholder="e.g. March 15, 2027" required />
          </div>
        </div>
        <div class="form-group">
          <label class="form-label" for="achDesc">Description <span class="req">*</span></label>
          <textarea id="achDesc" class="form-textarea" placeholder="Describe the competition, challenges solved, and your contribution..." required></textarea>
        </div>
        <div class="form-group">
          <label class="form-label">Upload Certificate (Image / PDF)</label>
          <input type="file" id="achCertFile" class="form-input" accept="image/*,application/pdf" />
          <span class="form-help">Upload an image or document from your computer</span>
        </div>
        <div class="form-group">
          <label class="form-label" for="achCertUrl">Or Enter Certificate URL / Drive Link</label>
          <input type="text" id="achCertUrl" class="form-input" placeholder="certificates/your-certificate.jpg or https://drive.google.com/..." />
        </div>
      `;

      const fileInput = document.getElementById('achCertFile');
      if (fileInput) {
        fileInput.addEventListener('change', (e) => {
          const file = e.target.files?.[0];
          if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
              uploadedFileBase64 = event.target.result;
            };
            reader.readAsDataURL(file);
          }
        });
      }
    } else if (type === 'certification') {
      entryModalTitle.textContent = 'Add New Certification';
      entryModalSubtitle.textContent = 'Add a government qualification, online course, or professional credential.';
      entryModalBody.innerHTML = `
        <div class="form-group">
          <label class="form-label" for="certName">Certificate / Course Name <span class="req">*</span></label>
          <input type="text" id="certName" class="form-input" placeholder="e.g. AWS Certified Cloud Practitioner" required />
        </div>
        <div class="form-group">
          <label class="form-label" for="certIssuer">Issuing Organization / Platform <span class="req">*</span></label>
          <input type="text" id="certIssuer" class="form-input" placeholder="e.g. Amazon Web Services, Coursera, NPTEL" required />
        </div>
        <div class="form-row">
          <div class="form-group">
            <label class="form-label" for="certDate">Completion Date <span class="req">*</span></label>
            <input type="text" id="certDate" class="form-input" placeholder="e.g. October 2026" required />
          </div>
          <div class="form-group">
            <label class="form-label" for="certDuration">Duration or Grade (Optional)</label>
            <input type="text" id="certDuration" class="form-input" placeholder="e.g. 40 hours or First Class" />
          </div>
        </div>
        <div class="form-group">
          <label class="form-label" for="certId">Credential ID / Serial No. (Optional)</label>
          <input type="text" id="certId" class="form-input" placeholder="e.g. CERT-982138 or GTE No. 129381" />
        </div>
        <div class="form-group">
          <label class="form-label" for="certDesc">Description <span class="req">*</span></label>
          <textarea id="certDesc" class="form-textarea" placeholder="Summary of knowledge gained, subjects mastered, or practical skills verified..." required></textarea>
        </div>
        <div class="form-group">
          <label class="form-label">Upload Certificate (Image / PDF)</label>
          <input type="file" id="certDocFile" class="form-input" accept="image/*,application/pdf" />
          <span class="form-help">Upload an image or document from your computer</span>
        </div>
        <div class="form-group">
          <label class="form-label" for="certDocUrl">Or Enter Certificate URL / Drive Link</label>
          <input type="text" id="certDocUrl" class="form-input" placeholder="certificates/your-cert.jpg or https://drive.google.com/..." />
        </div>
        <div class="form-group">
          <label class="form-label" for="certVerifyUrl">Online Verification Link (Optional)</label>
          <input type="url" id="certVerifyUrl" class="form-input" placeholder="https://coursera.org/verify/..." />
        </div>
      `;

      const fileInput = document.getElementById('certDocFile');
      if (fileInput) {
        fileInput.addEventListener('change', (e) => {
          const file = e.target.files?.[0];
          if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
              uploadedFileBase64 = event.target.result;
            };
            reader.readAsDataURL(file);
          }
        });
      }
    }

    entryModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  // Connect Add Entry Buttons
  const addSkillBtn = document.getElementById('openAddSkillBtn');
  const addProjectBtn = document.getElementById('openAddProjectBtn');
  const addAchBtn = document.getElementById('openAddAchievementBtn');
  const addCertBtn = document.getElementById('openAddCertBtn');

  if (addSkillBtn) addSkillBtn.addEventListener('click', () => openAddModal('skill'));
  if (addProjectBtn) addProjectBtn.addEventListener('click', () => openAddModal('project'));
  if (addAchBtn) addAchBtn.addEventListener('click', () => openAddModal('achievement'));
  if (addCertBtn) addCertBtn.addEventListener('click', () => openAddModal('certification'));

  // Form Submission Handler
  if (entryModalForm) {
    entryModalForm.addEventListener('submit', (e) => {
      e.preventDefault();

      if (currentAddType === 'skill') {
        const category = document.getElementById('skillCategory').value;
        const name = document.getElementById('skillName').value.trim();
        const detail = document.getElementById('skillDetail').value.trim();

        if (!name || !detail) return;

        const newSkill = {
          id: `custom-skill-${Date.now()}`,
          name,
          detail,
          isCustom: true
        };

        if (category === 'technical') {
          const list = getStoredData('girija_portfolio_custom_tech_skills', []);
          list.push(newSkill);
          setStoredData('girija_portfolio_custom_tech_skills', list);
        } else {
          const list = getStoredData('girija_portfolio_custom_prof_skills', []);
          list.push(newSkill);
          setStoredData('girija_portfolio_custom_prof_skills', list);
        }

        renderSkills();
        closeEntryModal();
      } else if (currentAddType === 'project') {
        const name = document.getElementById('projectName').value.trim();
        const subtitle = document.getElementById('projectSubtitle').value.trim() || 'Frontend Application';
        const description = document.getElementById('projectDesc').value.trim();
        const frontendRaw = document.getElementById('projectFrontend').value.trim();
        const archRaw = document.getElementById('projectArchitecture').value.trim();
        const githubUrl = document.getElementById('projectGithub').value.trim();
        const highlightsRaw = document.getElementById('projectHighlights').value.trim();

        if (!name || !description || !githubUrl) return;

        const frontend = frontendRaw ? frontendRaw.split(',').map(s => s.trim()).filter(Boolean) : ['JavaScript', 'HTML5', 'CSS3'];
        const architecture = archRaw ? archRaw.split(',').map(s => s.trim()).filter(Boolean) : ['Vite', 'Modern Web Standards'];
        const keyHighlights = highlightsRaw ? highlightsRaw.split('\n').map(s => s.trim()).filter(Boolean) : ['Interactive responsive layout', 'Clean modular architecture'];

        const newProject = {
          id: `custom-proj-${Date.now()}`,
          name,
          subtitle,
          description,
          technologies: { frontend, architecture },
          githubUrl,
          demoUrl: '',
          keyHighlights,
          isCustom: true
        };

        const list = getStoredData('girija_portfolio_custom_projects', []);
        list.push(newProject);
        setStoredData('girija_portfolio_custom_projects', list);

        renderProjects();
        closeEntryModal();
      } else if (currentAddType === 'achievement') {
        const prize = document.getElementById('achPrize').value.trim();
        const prizeType = document.getElementById('achPrizeType').value;
        const title = document.getElementById('achTitle').value.trim();
        const event = document.getElementById('achEvent').value.trim();
        const organization = document.getElementById('achOrg').value.trim();
        const date = document.getElementById('achDate').value.trim();
        const description = document.getElementById('achDesc').value.trim();
        const certUrlInput = document.getElementById('achCertUrl').value.trim();

        const certificateUrl = uploadedFileBase64 || certUrlInput || 'certificates/devxplores_debugging_first_prize.jpg';

        const newAchievement = {
          id: `custom-ach-${Date.now()}`,
          prize,
          prizeType,
          title,
          event,
          organization,
          date,
          description,
          certificateUrl,
          certificateImage: certificateUrl,
          isCustom: true
        };

        const list = getStoredData('girija_portfolio_custom_achievements', []);
        list.push(newAchievement);
        setStoredData('girija_portfolio_custom_achievements', list);

        renderAchievements();
        closeEntryModal();
      } else if (currentAddType === 'certification') {
        const name = document.getElementById('certName').value.trim();
        const issuer = document.getElementById('certIssuer').value.trim();
        const completionDate = document.getElementById('certDate').value.trim();
        const duration = document.getElementById('certDuration').value.trim();
        const certificateId = document.getElementById('certId').value.trim();
        const description = document.getElementById('certDesc').value.trim();
        const certDocUrl = document.getElementById('certDocUrl').value.trim();
        const onlineVerifyUrl = document.getElementById('certVerifyUrl').value.trim();

        const certificateUrl = uploadedFileBase64 || certDocUrl || onlineVerifyUrl || 'certificates/cursa_google_slides_certificate.jpg';

        const newCert = {
          id: `custom-cert-${Date.now()}`,
          name,
          issuer,
          completionDate,
          duration,
          certificateId,
          description,
          certificateUrl,
          certificateImage: certificateUrl,
          onlineVerifyUrl,
          isCustom: true
        };

        const list = getStoredData('girija_portfolio_custom_certs', []);
        list.push(newCert);
        setStoredData('girija_portfolio_custom_certs', list);

        renderCertifications();
        closeEntryModal();
      }
    });
  }

  // Delete Custom Item Handler
  document.addEventListener('click', (e) => {
    const delBtn = e.target.closest('.delete-card-btn');
    if (delBtn) {
      e.stopPropagation();
      const type = delBtn.getAttribute('data-delete-type');
      const id = delBtn.getAttribute('data-id');

      if (!confirm('Remove this custom item from your portfolio?')) return;

      if (type === 'tech_skill') {
        const list = getStoredData('girija_portfolio_custom_tech_skills', []).filter(item => item.id !== id);
        setStoredData('girija_portfolio_custom_tech_skills', list);
        renderSkills();
      } else if (type === 'prof_skill') {
        const list = getStoredData('girija_portfolio_custom_prof_skills', []).filter(item => item.id !== id);
        setStoredData('girija_portfolio_custom_prof_skills', list);
        renderSkills();
      } else if (type === 'project') {
        const list = getStoredData('girija_portfolio_custom_projects', []).filter(item => item.id !== id);
        setStoredData('girija_portfolio_custom_projects', list);
        renderProjects();
      } else if (type === 'achievement') {
        const list = getStoredData('girija_portfolio_custom_achievements', []).filter(item => item.id !== id);
        setStoredData('girija_portfolio_custom_achievements', list);
        renderAchievements();
      } else if (type === 'certification') {
        const list = getStoredData('girija_portfolio_custom_certs', []).filter(item => item.id !== id);
        setStoredData('girija_portfolio_custom_certs', list);
        renderCertifications();
      }
    }
  });

  // --------------------------------------------------------------------------
  // 8. CERTIFICATE LIGHTBOX MODAL
  // --------------------------------------------------------------------------
  const certModalOverlay = document.getElementById('certificateModal');
  const certModalContent = document.getElementById('certModalContent');
  const certModalCloseBtn = document.getElementById('certModalCloseBtn');

  const openCertModal = (arg1, title, meta, certUrl, pdfUrl, verifyUrl, certId, certDate, org, altImg, altLabel) => {
    if (!certModalOverlay || !certModalContent) return;

    let opts = {};
    if (typeof arg1 === 'object' && arg1 !== null) {
      opts = arg1;
    } else {
      opts = { imgSrc: arg1, title, meta, certUrl, pdfUrl, verifyUrl, certId, certDate, org, altImg, altLabel };
    }

    const currentImg = opts.imgSrc || '';
    const currentTitle = opts.title || 'Official Certificate';
    const currentMeta = opts.meta || '';
    const currentOrg = opts.org || opts.meta || '';
    const currentDate = opts.certDate || '';
    const currentId = opts.certId || '';
    const currentCertUrl = opts.certUrl || currentImg;
    const currentPdfUrl = opts.pdfUrl || '';
    const currentVerifyUrl = opts.verifyUrl || '';
    const altImage = opts.altImg || '';
    const altTitle = opts.altLabel || 'Alternate Certificate View';

    let zoomLevel = 1;

    certModalContent.innerHTML = `
      <div class="cert-preview-kicker-row">
        <span class="cert-preview-badge">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          </svg>
          Official Certificate Document Preview
        </span>
      </div>

      <div class="cert-lightbox-header">
        <h3 class="cert-lightbox-title">${currentTitle}</h3>
        <p class="cert-lightbox-meta">
          <span>${currentMeta}</span>
          ${currentDate ? `<span>· Date: ${currentDate}</span>` : ''}
        </p>
      </div>

      <div class="cert-preview-toolbar-row">
        ${altImage ? `
          <div class="cert-page-tabs">
            <button type="button" class="cert-page-tab-btn active" id="certTabCurrent">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path></svg>
              <span>Current Certificate</span>
            </button>
            <button type="button" class="cert-page-tab-btn" id="certTabAlt">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path></svg>
              <span>${altTitle}</span>
            </button>
          </div>
        ` : `
          <span style="font-size: 0.8125rem; color: var(--text-muted); display: inline-flex; align-items: center; gap: 6px;">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path></svg>
            Interactive Document Preview (Click or use +/- to zoom)
          </span>
        `}

        <div class="cert-zoom-controls">
          <button type="button" class="cert-zoom-btn" id="zoomOutBtn" title="Zoom Out (-)" aria-label="Zoom Out">−</button>
          <span class="cert-zoom-label" id="zoomLevelLabel">100%</span>
          <button type="button" class="cert-zoom-btn" id="zoomInBtn" title="Zoom In (+)" aria-label="Zoom In">+</button>
          <button type="button" class="cert-zoom-btn" id="zoomResetBtn" title="Fit to Screen (100%)" aria-label="Reset Zoom">⛶</button>
        </div>
      </div>

      <div class="cert-lightbox-image-box" id="certImageBox">
        <div class="cert-lightbox-img-wrapper" id="certImgWrapper">
          <img src="${currentImg}" alt="${currentTitle}" class="cert-lightbox-img" id="certMainImg" title="Click to toggle zoom magnification" />
        </div>
      </div>

      <div class="cert-lightbox-info-strip">
        ${currentOrg ? `
          <div class="cert-info-item">
            <span class="cert-info-item-label">Issuing Authority / Organization</span>
            <span class="cert-info-item-val">${currentOrg}</span>
          </div>
        ` : ''}
        ${currentDate ? `
          <div class="cert-info-item">
            <span class="cert-info-item-label">Issue Date / Event Date</span>
            <span class="cert-info-item-val">${currentDate}</span>
          </div>
        ` : ''}
        ${currentId ? `
          <div class="cert-info-item">
            <span class="cert-info-item-label">Registration / Credential ID</span>
            <span class="cert-info-item-val">${currentId}</span>
          </div>
        ` : ''}
        <div class="cert-info-item">
          <span class="cert-info-item-label">Verification Status</span>
          <span class="cert-info-item-val" style="color: var(--accent-emerald);">✓ Official &amp; Verified Credential</span>
        </div>
      </div>

      <div class="cert-lightbox-actions">
        ${currentPdfUrl ? `
          <a href="${currentPdfUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm" download>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            Download Official PDF
          </a>
        ` : ''}
        ${currentVerifyUrl ? `
          <a href="${currentVerifyUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
            Verify Online
          </a>
        ` : ''}
        <a href="${currentCertUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm" id="certOpenOriginalBtn">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
          Open High-Res in New Window
        </a>
        <button type="button" class="btn btn-secondary btn-sm close-cert-trigger">
          Close Preview
        </button>
      </div>
    `;

    certModalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Interactive Zoom logic
    const imgWrapper = certModalContent.querySelector('#certImgWrapper');
    const mainImg = certModalContent.querySelector('#certMainImg');
    const zoomLevelLabel = certModalContent.querySelector('#zoomLevelLabel');
    const zoomInBtn = certModalContent.querySelector('#zoomInBtn');
    const zoomOutBtn = certModalContent.querySelector('#zoomOutBtn');
    const zoomResetBtn = certModalContent.querySelector('#zoomResetBtn');
    const openOrigBtn = certModalContent.querySelector('#certOpenOriginalBtn');

    const updateZoom = (level) => {
      zoomLevel = Math.min(Math.max(level, 0.5), 2.5);
      if (imgWrapper) imgWrapper.style.transform = `scale(${zoomLevel})`;
      if (zoomLevelLabel) zoomLevelLabel.textContent = `${Math.round(zoomLevel * 100)}%`;
      if (mainImg) {
        if (zoomLevel > 1.05) {
          mainImg.classList.add('zoomed');
        } else {
          mainImg.classList.remove('zoomed');
        }
      }
    };

    if (zoomInBtn) zoomInBtn.addEventListener('click', () => updateZoom(zoomLevel + 0.25));
    if (zoomOutBtn) zoomOutBtn.addEventListener('click', () => updateZoom(zoomLevel - 0.25));
    if (zoomResetBtn) zoomResetBtn.addEventListener('click', () => updateZoom(1));
    if (mainImg) {
      mainImg.addEventListener('click', () => {
        updateZoom(zoomLevel > 1.1 ? 1 : 1.5);
      });
    }

    // Tab switcher logic for multi-page certificates
    const tabCurrent = certModalContent.querySelector('#certTabCurrent');
    const tabAlt = certModalContent.querySelector('#certTabAlt');
    if (tabCurrent && tabAlt) {
      tabCurrent.addEventListener('click', () => {
        tabCurrent.classList.add('active');
        tabAlt.classList.remove('active');
        if (mainImg) mainImg.src = currentImg;
        if (openOrigBtn) openOrigBtn.href = currentImg;
        updateZoom(1);
      });
      tabAlt.addEventListener('click', () => {
        tabAlt.classList.add('active');
        tabCurrent.classList.remove('active');
        if (mainImg) mainImg.src = altImage;
        if (openOrigBtn) openOrigBtn.href = altImage;
        updateZoom(1);
      });
    }

    const innerClose = certModalContent.querySelector('.close-cert-trigger');
    if (innerClose) {
      innerClose.addEventListener('click', closeCertModal);
    }
  };

  const closeCertModal = () => {
    if (!certModalOverlay) return;
    certModalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (certModalCloseBtn) {
    certModalCloseBtn.addEventListener('click', closeCertModal);
  }

  if (certModalOverlay) {
    certModalOverlay.addEventListener('click', (e) => {
      if (e.target === certModalOverlay) closeCertModal();
    });
  }

  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('.open-cert-modal');
    if (trigger) {
      e.preventDefault();
      const imgSrc = trigger.getAttribute('data-cert-img');
      const title = trigger.getAttribute('data-cert-title');
      const meta = trigger.getAttribute('data-cert-meta');
      const org = trigger.getAttribute('data-cert-org');
      const certDate = trigger.getAttribute('data-cert-date');
      const certId = trigger.getAttribute('data-cert-id');
      const certUrl = trigger.getAttribute('data-cert-url');
      const pdfUrl = trigger.getAttribute('data-pdf-url');
      const verifyUrl = trigger.getAttribute('data-verify-url');
      const altImg = trigger.getAttribute('data-alt-img');
      const altLabel = trigger.getAttribute('data-alt-label');
      openCertModal({ imgSrc, title, meta, org, certDate, certId, certUrl, pdfUrl, verifyUrl, altImg, altLabel });
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && certModalOverlay && certModalOverlay.classList.contains('active')) {
      closeCertModal();
    }
  });

  // --------------------------------------------------------------------------
  // 8. PROJECT DETAILS MODAL
  // --------------------------------------------------------------------------
  const modalOverlay = document.getElementById('projectModal');
  const modalContent = document.getElementById('modalContent');
  const modalCloseBtn = document.getElementById('modalCloseBtn');

  const openProjectModal = (projId) => {
    const project = getAllProjects().find(p => p.id === projId);
    if (!project || !modalContent) return;

    modalContent.innerHTML = `
      <h2 style="font-size: 1.5rem; font-weight: 800; color: var(--text-primary); margin-bottom: 8px;">${project.name}</h2>
      <p style="font-size: 0.875rem; color: var(--accent-blue); font-weight: 600; margin-bottom: 16px;">${project.subtitle}</p>
      
      <p style="font-size: 0.9375rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 20px;">
        ${project.description}
      </p>

      <div style="margin-bottom: 20px;">
        <h4 style="font-size: 0.8125rem; font-weight: 700; text-transform: uppercase; color: var(--accent-violet); margin-bottom: 8px;">Key Implementation Highlights</h4>
        <ul style="list-style: disc; padding-left: 20px; font-size: 0.875rem; color: var(--text-secondary); display: flex; flex-direction: column; gap: 6px;">
          ${project.keyHighlights.map(h => `<li>${h}</li>`).join('')}
        </ul>
      </div>

      <div style="margin-bottom: 24px;">
        <h4 style="font-size: 0.8125rem; font-weight: 700; text-transform: uppercase; color: var(--accent-violet); margin-bottom: 8px;">Stack & Tooling</h4>
        <div style="display: flex; flex-wrap: wrap; gap: 6px;">
          ${[...project.technologies.frontend, ...project.technologies.architecture].map(t => `<span class="tech-tag">${t}</span>`).join('')}
        </div>
      </div>

      <div style="display: flex; gap: 12px; border-top: 1px solid var(--border-subtle); padding-top: 20px;">
        <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
          Visit GitHub Repository
        </a>
        <button type="button" class="btn btn-secondary btn-sm close-modal-trigger">
          Close
        </button>
      </div>
    `;

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';

    const innerClose = modalContent.querySelector('.close-modal-trigger');
    if (innerClose) {
      innerClose.addEventListener('click', closeModal);
    }
  };

  const closeModal = () => {
    if (!modalOverlay) return;
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  };

  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.view-project-btn');
    if (btn) {
      const projId = btn.getAttribute('data-proj-id');
      openProjectModal(projId);
    }
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('active')) {
      closeModal();
    }
  });

  // --------------------------------------------------------------------------
  // 9. BACK TO TOP BUTTON
  // --------------------------------------------------------------------------
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // --------------------------------------------------------------------------
  // 10. DYNAMIC CURRENT YEAR
  // --------------------------------------------------------------------------
  const yearElement = document.getElementById('currentYear');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});
