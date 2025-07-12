# Project Summary for Vanguard 15 Sailing Website

## Overview
This project develops a secure, modern static website for Vanguard 15 sailors, serving as a hub for informational articles, parts recommendations, and regatta activities. It uses Next.js for static generation, Tailwind CSS for styling, and Netlify for hosting with CI/CD and CMS integration. The site draws content structure from the GitHub repo (https://github.com/southbay82/v15-sailing) but features a contemporary design.

## Key Objectives
- Provide resources like articles, parts sourcing, and event info.
- Ensure security (HTTPS, headers), performance (Lighthouse 90+), and responsiveness.
- Support content updates via GitOps and Netlify CMS.
- Host on Netlify with custom domain https://v-15.org and admin skipper@v-15.org.

## Technology Stack
- Next.js 15.x: Static site generation.
- Tailwind CSS 3.x: Responsive styling with sailing-themed palette (navy blue, white, sky blue).
- Netlify: Hosting, CDN, CI/CD, CMS.
- Other: Lunr.js for client-side search.

## Project Structure
- /pages: Routes (index.js, articles.js, etc.).
- /components: Reusable UI (Navbar, Footer, etc.).
- /content: JSON/Markdown for data.
- /public: Assets (images, favicon).
- /static/admin: Netlify CMS config.
- Config Files: next.config.js, tailwind.config.js, netlify.toml.

## Status
- Initialized: Yes (as of 2025-07-11).
- Design: Minimalistic, mobile-first.
- Cost: Target $0/month via Netlify Starter plan.

This summary will be updated as the project evolves.
