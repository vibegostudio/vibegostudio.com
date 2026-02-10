This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 🎛 Content Management

### Easy Project Management
The portfolio now uses a simple JSON-based content management system! No database required.

**Quick Start:**
- Edit `src/data/projects.json` to add/update projects
- Edit `src/data/site-config.json` to update bio, contact info, etc.
- Edit `src/data/tech-stack.json` to manage technologies

**See [CONTENT-GUIDE.md](./CONTENT-GUIDE.md) for complete instructions!**

### Adding a New Project
```json
{
  "id": "my-new-project",
  "title": "My Awesome Project",
  "description": "What this project does...",
  "url": "https://myproject.com",
  "github": "https://github.com/me/repo",
  "tags": ["Next.js", "React"],
  "featured": false,
  "status": "live",
  "year": "2026"
}
```

Just edit the JSON, commit, and push - Vercel deploys automatically! 🚀
