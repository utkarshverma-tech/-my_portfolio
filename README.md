# Utkarsh Verma — Portfolio

Futuristic AI/ML & Computer Vision Engineer portfolio built with **React (Vite) + Tailwind CSS + Framer Motion**.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open http://localhost:5173
```

---

## 📂 Project Structure

```
src/
├── components/
│   ├── CustomCursor.jsx      # Glowing custom cursor
│   ├── Footer.jsx            # Footer with social links
│   ├── Navbar.jsx            # Sticky animated navbar
│   ├── NeuralNetwork.jsx     # Canvas-based neural net background
│   ├── ScrollProgress.jsx    # Top scroll indicator bar
│   ├── SectionTitle.jsx      # Reusable section heading
│   └── SectionWrapper.jsx    # Scroll-triggered reveal wrapper
├── data/
│   └── index.js              # ← All content lives here (projects, skills, etc.)
├── sections/
│   ├── Hero.jsx              # Full-screen hero with typing effect
│   ├── About.jsx             # About + stats
│   ├── Skills.jsx            # Skill cards grid
│   ├── Projects.jsx          # Dynamic project cards
│   ├── Education.jsx         # Timeline education cards
│   └── Contact.jsx           # Contact form (EmailJS) + links
├── App.jsx                   # Root layout
├── main.jsx                  # Entry point
└── index.css                 # Global styles + Tailwind
```

---

## ✏️ Customization

### Add a New Project
Open `src/data/index.js` and add a new object to the `projects` array:

```js
{
  id: 3,
  title: "Your Project Title",
  description: "Project description here.",
  tech: ["Python", "PyTorch", "React"],
  github: "https://github.com/yourrepo",
  demo: "https://yourdemo.com",   // or null
  category: "Computer Vision",
  status: "Completed",            // or "In Progress"
  highlights: ["Feature 1", "Feature 2"],
},
```

That's it — the card renders automatically. No other changes needed.

---

## 📧 EmailJS Setup (Contact Form)

1. Create a free account at [emailjs.com](https://www.emailjs.com/)
2. Create an **Email Service** → copy the **Service ID**
3. Create an **Email Template** → copy the **Template ID**
4. Go to **Account → API Keys** → copy your **Public Key**
5. Open `src/sections/Contact.jsx` and replace:

```js
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';
```

**EmailJS Template Variables** (use these in your template):
- `{{from_name}}` — sender's name
- `{{from_email}}` — sender's email
- `{{subject}}` — message subject
- `{{message}}` — message body

---

## 🌐 Deploy to Vercel

### Option 1 — Vercel CLI (Recommended)
```bash
npm i -g vercel
vercel login
vercel --prod
```

### Option 2 — GitHub Integration
1. Push this project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → **New Project**
3. Import your GitHub repo
4. Framework: **Vite** (auto-detected)
5. Click **Deploy**

The `vercel.json` file is already configured for SPA routing.

---

## 🎨 Theming

All colors are defined in `tailwind.config.js`. Key variables:

| Token | Color | Usage |
|-------|-------|-------|
| `neon-cyan` | `#00f5ff` | Primary accent |
| `neon-purple` | `#a855f7` | Secondary accent |
| `neon-green` | `#00ff88` | Success / availability |
| `dark` | `#030712` | Background |

---

## 📦 Built With

- [React 18](https://react.dev)
- [Vite 5](https://vitejs.dev)
- [Tailwind CSS 3](https://tailwindcss.com)
- [Framer Motion 11](https://www.framer.com/motion/)
- [EmailJS](https://www.emailjs.com/)
- [React Intersection Observer](https://github.com/thebuilder/react-intersection-observer)
