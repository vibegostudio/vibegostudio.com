# 📝 VibeGo Studio - Content Management Guide

This guide shows you how to easily add/edit projects and update site content without touching the main code.

## 🚀 Quick Start: Adding a New Project

### 1. Edit the Projects File
Open: `src/data/projects.json`

```json
{
  "featured": [
    // Your main/featured projects go here
  ],
  "upcoming": [
    // Add new projects here
    {
      "id": "my-new-project",                    // Unique ID
      "title": "My Awesome New Project",        // Project name
      "description": "What this project does and why it's cool...", 
      "url": "https://myproject.com",           // Live URL (or null)
      "github": "https://github.com/me/repo",   // GitHub URL (or null)
      "tags": ["Next.js", "React", "Cool"],    // Tech tags
      "featured": false,                        // true for main projects
      "status": "live",                         // live, coming-soon, in-development, archived
      "year": "2026"                            // Year created
    }
  ]
}
```

### 2. Status Options
- `"live"` - 🟢 Project is deployed and working
- `"coming-soon"` - 🟡 Announced but not ready yet  
- `"in-development"` - 🔵 Currently building
- `"archived"` - ⚪ Old/deprecated project

### 3. Featured vs Regular
- `"featured": true` - Shows as a larger card (max 1-2 recommended)
- `"featured": false` - Regular sized project card

## 📋 Data Structure Overview

### File Structure
```
src/data/
├── projects.json      # All your projects
├── site-config.json   # General site settings
└── tech-stack.json    # Your technologies
```

## ⚙️ Site Configuration

### Update General Info
Edit: `src/data/site-config.json`

## 🚀 Deploy Changes

After editing any JSON file:

1. **Test locally:**
   ```bash
   npm run dev
   ```

2. **Build and deploy:**
   ```bash
   npm run build
   git add .
   git commit -m "✨ Add new project: [Project Name]"
   git push
   ```

3. **Vercel auto-deploys** from your GitHub pushes!

## 💡 Pro Tips

### 🎯 Project Organization
- Keep `featured` projects to 1-2 maximum (they take more space)
- Use descriptive, unique `id`s (no spaces, use kebab-case)
- Update `year` to keep projects organized

### 🏷 Good Tagging
- Use consistent tag names ("Next.js" not "NextJS" or "next.js")
- Popular tags: "React", "Next.js", "TypeScript", "Python", "AI", "Free Tool"
- Keep tags relevant and concise (max 4-5 per project)

---

*Happy coding! 🚀 Remember: Dawn coding is the best coding ☕*
