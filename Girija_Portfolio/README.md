# Girija_Portfolio

> **Professional Personal Portfolio Website for Girija S**  
> B.Sc. Computer Science with Artificial Intelligence | PERI College of Arts and Science

---

## 📌 Project Overview

**Girija_Portfolio** is a modern, responsive, high-performance personal portfolio website built entirely with **HTML5, CSS3, and vanilla JavaScript**. It does not require any frontend framework, build steps, or backend server to run. You can open `index.html` directly in any web browser, run it using VS Code Live Server, or host it on GitHub Pages.

The portfolio is styled with a sleek **Dark Navy theme** complemented by vibrant violet and electric blue accents, and includes an accessible **Light Theme** toggle.

---

## ✨ Features

- **8 Dedicated Website Sections**:
  1. **Home**: Impactful hero section with student introduction, initials avatar (`GS`), and quick CTA buttons (`View My Projects`, `Contact Me`).
  2. **About Me**: Natural undergraduate biography highlighting problem-solving, curiosity for AI, and teamwork values without exaggerated claims.
  3. **Skills**: Clearly segmented **Technical Skills** (Python Fundamentals, Java Fundamentals) and **Professional Skills** (Teamwork, Leadership, Communication, Fast Learning, Canva, Microsoft Office Suite).
  4. **Education**: Formal degree card for B.Sc. Computer Science with Artificial Intelligence at PERI College of Arts and Science (2025–2028).
  5. **Projects**: Distinct project cards for **GiftTrack** and **CineBook**, each equipped with its own specific GitHub repository button, technology stacks, and detailed modal views.
  6. **Achievements**: Separate awards showcase with direct **"Visit Certificate"** buttons for:
     - 1st Prize in Python Debugging (DEVXPLORES-2K26, Mohamed Sathak College of Arts and Science)
     - 2nd Prize in UI/UX Design (INNOVARA'26, Prince Shri Balaji Arts and Science College)
     - 2nd Prize in Poster Parade (PERI Cognizance 2k25, PERI College of Arts and Science)
  7. **Certifications**: Separate credentials showcase with direct **"Visit Certificate"** buttons for:
     - Google Slides (Cursa verified online certification)
     - Typewriting Junior English (First Class, Board of Examinations, Tamil Nadu — ID: 1540421)
     - Typewriting Senior English (First Class, Board of Examinations, Tamil Nadu — ID: 1590983)
  8. **Contact**: Dedicated 4-card layout for direct Email, GitHub, LinkedIn, and residential location.
- **Dark & Light Mode**: Seamless theme switcher persisted in `localStorage`.
- **Responsive Layout**: Designed for desktop screens down to 320px mobile devices with CSS Flexbox & CSS Grid.
- **Mobile Navigation**: Working hamburger drawer menu with auto-close when any link is selected or Escape is pressed.
- **Active Navigation Indicator**: Uses the modern `IntersectionObserver` API to highlight current section during scroll.
- **Smooth Scrolling**: Native CSS smooth scroll with offset padding for sticky header.
- **Zero-Pill Typography Discipline**: Clean unboxed metadata with bullet separators and high-contrast typography.
- **Reduced Motion Support**: Fully respects user system accessibility preferences (`prefers-reduced-motion`).
- **Dynamic Year Generation**: Footer dynamically displays the current year with JavaScript.
- **Back to Top Button**: Floating quick-scroll button that appears smoothly once user scrolls past 400px.

---

## 🛠️ Technologies Used

- **Markup**: Semantic HTML5 (W3C compliant, accessible ARIA attributes)
- **Styling**: Pure CSS3 (CSS Custom Properties / Variables, Grid, Flexbox, media queries)
- **Scripting**: Vanilla JavaScript (ES6+, DOM manipulation, IntersectionObserver, LocalStorage)
- **Typography**: Google Fonts (*Plus Jakarta Sans* & *JetBrains Mono*)
- **Icons**: Clean inline SVG icons (zero heavy external libraries)

---

## 📂 Folder Structure

```text
Girija_Portfolio/
│
├── index.html              # Main HTML entry point containing all 8 sections
├── style.css               # Complete stylesheet with Dark Navy & Light variables
├── script.js               # Vanilla JavaScript for data rendering and theme control
├── README.md               # Detailed documentation and maintenance guide
│
├── assets/
│   └── images/
│       └── README.md       # Guide for placing custom profile and project screenshot photos
│
└── certificates/
    ├── debugging-first-prize.html       # Certificate for 1st Prize Python Debugging
    ├── uiux-second-prize.html           # Certificate for 2nd Prize UI/UX Design (CineBook)
    ├── poster-parade-second-prize.html  # Certificate for 2nd Prize Poster Parade
    ├── typewriting-junior.html          # Certificate for Typewriting Junior First Class
    ├── typewriting-senior.html          # Certificate for Typewriting Senior First Class
    └── README.md                        # Guide for placing certificates
```

---

## 🚀 How to Run the Website Locally

### Option 1: Direct Browser Open (Easiest)
1. Navigate to the `Girija_Portfolio/` folder on your computer.
2. Double-click `index.html` (or right-click &rarr; **Open with** &rarr; Google Chrome / Edge / Firefox / Safari).
3. The website will load immediately with all styling, themes, certificates, and interactions intact!

### Option 2: Using VS Code & Live Server (Recommended for Development)
1. Open **Visual Studio Code**.
2. Click **File** &rarr; **Open Folder...** and select the `Girija_Portfolio` folder.
3. If not already installed, install the **Live Server** extension from the VS Code Extensions tab (`Ctrl+Shift+X`).
4. Right-click `index.html` in the file explorer and select **Open with Live Server**.
5. Your default browser will launch at `http://127.0.0.1:5500/index.html`.

---

## ✏️ How to Customize & Update Content

All data is organized cleanly in `script.js` and `index.html`.

### 1. Replacing Personal Details
Open `script.js` and locate `PERSONAL_INFO` at the top:
```javascript
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
```

---

### 2. Adding or Editing Projects
In `script.js`, edit `PROJECTS_DATA`:
```javascript
const PROJECTS_DATA = [
  {
    id: "gifttrack",
    name: "GiftTrack",
    subtitle: "Event & Function Gift Management",
    description: "Tracking gifts of family functions (Only-Frontend)...",
    technologies: {
      frontend: ["React 19", "TypeScript", "Tailwind CSS v4", "Lucide Icons", "Motion", "Vite"],
      architecture: ["LocalStorage Persistence", "WhatsApp & Web Share APIs", "Node.js & Express runtime"]
    },
    githubUrl: "https://github.com/Girija5907/GiftTrack",
    keyHighlights: [...]
  }
];
```

---

### 3. Adding or Editing Achievements
In `script.js`, edit `ACHIEVEMENTS_DATA`:
```javascript
const ACHIEVEMENTS_DATA = [
  {
    id: "ach-1",
    prize: "First Prize",
    prizeType: "first",
    title: "First Prize — Debugging Event",
    event: "InterCollegiate Symposium, DEVXPLORES-2K26",
    organization: "Mohamed Sathak College of Arts and Science",
    date: "March 11, 2026",
    description: "Successfully identified, analyzed, and debugged complex Python codes...",
    certificateUrl: "certificates/debugging-first-prize.html"
  }
];
```

---

### 4. Adding or Editing Certificates
In `script.js`, edit `CERTIFICATES_DATA`:
```javascript
const CERTIFICATES_DATA = [
  {
    id: "cert-2",
    name: "Typewriting — Junior (English)",
    issuer: "Board of Examinations, Tamil Nadu",
    completionDate: "February 2024",
    level: "Junior",
    language: "English",
    result: "First Class",
    certificateId: "1540421",
    certificateUrl: "certificates/typewriting-junior.html",
    description: "Government recognized technical qualification in English Typewriting..."
  }
];
```

---

## 🌐 How to Upload to GitHub & Host on GitHub Pages

1. In your local terminal inside `Girija_Portfolio/`, run:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Girija S personal portfolio"
   git branch -M main
   git remote add origin https://github.com/Girija5907/Girija_Portfolio.git
   git push -u origin main
   ```
2. In GitHub, navigate to **Settings** &rarr; **Pages**.
3. Under **Branch**, select `main` and `/ (root)` &rarr; click **Save**.
4. In ~1 minute, your portfolio will be live at:
   `https://girija5907.github.io/Girija_Portfolio/`
