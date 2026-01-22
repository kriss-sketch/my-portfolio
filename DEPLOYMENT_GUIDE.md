# Portfolio Deployment Guide
## Git to Vercel Workflow

Your portfolio is ready for deployment! This guide walks you through the CI/CD setup that will automatically deploy changes to a live URL.

---

## Phase 3: Push to GitHub ✅ (Next Steps)

### Step 1: Create a GitHub Repository
1. Go to [github.com](https://github.com) and sign in (create account if needed)
2. Click **"+"** → **"New repository"**
3. Name it: `my-portfolio`
4. Add description: "Professional portfolio website built with React"
5. Choose **Public** (so it's visible to recruiters)
6. Click **Create repository**

### Step 2: Push Your Code to GitHub

Copy and paste these commands in your terminal:

```bash
cd "c:\Users\krista\Desktop\my_portfolio"
git remote add origin https://github.com/YOUR_USERNAME/my-portfolio.git
git branch -M main
git push -u origin main
```

**Important:** Replace `YOUR_USERNAME` with your actual GitHub username.

After running `git push`, you'll be prompted to authenticate:
- GitHub will open a browser to authorize
- Or you can use a Personal Access Token (PAT)

**Your code is now on GitHub!** ✅

---

## Phase 4: Deploy to Vercel 🚀

### Step 1: Connect to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click **"Sign Up"** → Choose **"Continue with GitHub"**
3. Authorize Vercel to access your GitHub account

### Step 2: Import Your Repository
1. On Vercel dashboard, click **"Add New"** → **"Project"**
2. Select **"Import Git Repository"**
3. Search for `my-portfolio` and click **Import**

### Step 3: Configure Project Settings
1. **Framework Preset:** Select **React**
2. **Build Command:** `npm run build` (should be auto-filled)
3. **Output Directory:** `build` (should be auto-filled)
4. Click **Deploy**

### Step 4: Wait for Deployment ⏳
Vercel will:
- Download your code
- Install dependencies
- Build the project
- Deploy to their servers
- Give you a live URL like: `my-portfolio-xyz123.vercel.app`

---

## Automatic CI/CD: The Magic Part 🪄

Once deployed, Vercel automatically watches your GitHub repository. Here's the workflow:

```
You make changes locally
         ↓
git add .
git commit -m "Update description"
git push origin main
         ↓
GitHub receives push
         ↓
Vercel detects new commit
         ↓
Vercel automatically rebuilds
         ↓
Your live site updates in seconds!
```

**This means:** Every time you push to GitHub, your live portfolio updates automatically!

---

## Making Changes & Pushing Updates

### When you're ready to update your portfolio:

1. **Edit files locally** (e.g., update projects, bio, skills)
   ```bash
   # Edit src/components/About.js, Projects.js, etc.
   ```

2. **Commit your changes**
   ```bash
   cd "c:\Users\krista\Desktop\my_portfolio"
   git add .
   git commit -m "Update project descriptions and skills"
   ```

3. **Push to GitHub**
   ```bash
   git push origin main
   ```

4. **Watch Vercel deploy** (check vercel.com dashboard)

That's it! Your live portfolio updates automatically. ✅

---

## Key Benefits

- **Live URL:** Share a professional link with recruiters
- **Automatic Deployment:** No manual uploads needed
- **Version Control:** Track all changes with git commits
- **CI/CD Learning:** You've now set up real DevOps workflow!
- **Growth Mindset:** Shows employers you understand modern deployment

---

## Troubleshooting

### "Deploy Failed" Error
- Check the build logs in Vercel dashboard
- Ensure `npm run build` works locally: `npm run build`
- Verify `public/index.html` exists

### Git Push Authentication Issues
- Use Personal Access Token (PAT) instead of password
- Go to GitHub → Settings → Developer settings → Personal access tokens
- Create token with `repo` scope

### Live Site Not Updating After Push
- Hard refresh: **Ctrl + Shift + Delete** (clears cache)
- Wait 1-2 minutes for Vercel to redeploy

---

## Your Next Steps

1. ✅ Git repository initialized locally
2. ⏳ **Push to GitHub** (follow Phase 3 above)
3. ⏳ **Deploy to Vercel** (follow Phase 4 above)
4. ⏳ **Share your live URL** with recruiters!

---

## Live URL (will be provided by Vercel)

Your portfolio will be live at:
```
https://my-portfolio-XXXXXXXXXX.vercel.app
```

Share this with:
- Your resume/CV
- LinkedIn profile
- Twitter/social media
- Job applications
- GitHub profile

---

**You're learning professional DevOps workflows that real companies use every day!** 🎉
