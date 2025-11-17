📘 Portfolio Website — Project Plan
📌 1. Project Overview

This project is a personal portfolio website designed to showcase my academic background, research, projects, experience, hobbies, and personality.
It is a static, fully responsive site deployed on GitHub Pages, with a modern aesthetic and clean UX.

The homepage highlights my identity and purpose, followed by modular subpages that present detailed information.

The tone blends professionalism with subtle hints of creativity and humor.

🎯 2. Project Goals

Build a clean and modern portfolio using only static technologies (HTML, CSS, JS, or a static-site framework).

Create a home page with intuitive navigation and strong first impression.

Highlight research, projects, and experience in structured layouts.

Include optional storytelling elements: quotes, hobbies, personal philosophy.

Ensure the site loads fast, works offline (optional), and is easy to maintain.

Deploy the site using GitHub Pages with automatic build/deploy pipeline.

🧱 3. Site Structure
/
|— index.html (Home)
|— about.html
|— research.html
|— projects.html
|— experience.html
|— blog/ (optional)
|— hobbies.html
|— contact.html
|— assets/
|     |— css/
|     |— js/
|     |— images/
|— README.md
|— PROJECT_PLAN.md

🏗 4. Page-Level Design Plan
4.1 Home Page (index.html)

Hero section

Name

Tagline

Animated effect (typing / fade-in / hover motion)

Buttons: “View CV”, “View Projects”

Quote section

Rotating / random inspirational quote

E.g.,

“Fueled by curiosity, caffeine, and the occasional philosophical crisis.”

“Balancing machine intelligence with human chaos.”

“I build systems… and occasionally break them to understand them better.”

Intro Summary

Highlights Cards

Research

Projects

Experience

Achievements (stat blocks)

Footer links

4.2 About Page

Personal introduction

Long-form bio

Academic journey

Research interests

Timeline of milestones

Photo/illustration (optional)

4.3 Research Page

Thesis summary

Research interests

Visual diagram (optional)

Links to publication(s)

4.4 Projects Page

Card layout

Each card links to its own page or modal

Screenshots, GIFs, and tech stack tags

4.5 Experience Page

Work timeline

Responsibilities

Skills learned

Collaboration outcomes

4.6 Blog (Optional)

Static markdown blog or manual HTML posts

Topics: ML, RL, automation, reflections, philosophy, tutorials

4.7 Hobbies Page

Guitar, music taste, sports, philosophy

Gallery-type layout

Optional audio snippets (local or external)

4.8 Contact Page

Contact form (static)

FormSubmit / Netlify forms (free)

Email + social icons

CV download button

✨ 5. Inspiring Quotes Implementation Plan

Three possible modes:

A. Under hero section

Static position below the hero block; random quote on each page load.

B. As an animated extension to hero

Displayed under the tagline with fade-in.

C. Loading screen quote (optional)

Show a quote during initial page load using a minimal JS loader.
Works in static sites using CSS + JS (no backend needed).

🛠 6. Tech Stack

HTML5 – Structure

CSS3 / Tailwind (optional) – Styling

JavaScript – Interactivity + animations

GitHub Pages – Deployment

GitHub Actions – Auto-deploy pipeline (optional)

Illustrations – Custom SVGs or icons

Font choices – Inter, Poppins, or JetBrains Mono

Favicon – Custom logo or initials

🔧 7. Feature Implementation Tasks
Phase 1 — Setup

 Create GitHub repository

 Initialize project folder structure

 Configure GitHub Pages deployment

 Add README & this project plan

Phase 2 — Base Layout

 Create header + responsive navigation

 Create footer with social links

 Add global CSS styles

 Add dark/light theme toggle

Phase 3 — Home Page

 Build hero section

 Add animation script

 Implement random quote generator

 Add intro summary section

 Build highlights cards

 Add achievements stats

Phase 4 — Subpages

 Build About

 Build Research

 Build Projects

 Build Experience

 Build Hobbies

 Build Contact

 Build Blog (optional)

Phase 5 — Visual Polish

 Add icons, illustrations, gallery images

 Add responsive rules (mobile-first)

 Add hover/scroll animations

 Improve typography & spacing

Phase 6 — Testing

 Test on mobile devices

 Test in multiple browsers

 Validate HTML + CSS

 Optimize images

 Reduce JS payload

Phase 7 — Deployment

 Push to main branch

 Verify GitHub Pages build

 Fix any path errors

 Final polish

 Tag release (v1.0)
