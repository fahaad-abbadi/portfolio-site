# `portfolio-site`

> A crisp, performant, and modular portfolio built with React + Tailwind — because you're not here to impress *everyone*, just the right ones.

---

## 📁 Project Structure (Clean AF™)

```
src/
├── assets/            # Static assets (images, SVGs, etc.)
├── components/        # Reusable atomic UI components
│   ├── Card.jsx       # A sexy display block for projects/info
│   └── Modal.jsx      # Reusable dialog/modal
├── sections/          # Logical page blocks
│   ├── about/         # Bio, intro, the “hey there” stuff
│   ├── contact/       # Form or socials
│   ├── faqs/          # Accordion / Q&A section
│   ├── floating-nav/  # Floating navigation component
│   ├── footer/        # Obvious
│   ├── header/        # Topmost hero section
│   ├── navbar/        # Main navigation bar
│   ├── portfolio/     # Project showcase section
│   ├── skills/        # Tech stack visuals
│   └── testimonials/  # Client feedback or fake flex 
├── App.jsx            # Root component orchestrator
├── index.js           # React DOM entry point
└── index.css          # Base styles & theme tokens (CSS vars)
```

---

## Tech Stack

| Purpose       | Tech                                                |
|--------------|------------------------------------------------------|
| Framework     | [React](https://reactjs.org/)                       |
| Styling       | Vanilla CSS
| Extras        | Modular file structure, responsive layout           |

---

## 🛠 Usage

```bash
git clone https://github.com/fahaad-abbadi/portfolio-site.git
cd portfolio-site
npm install
npm run dev  # or npm start
```

Dev runs at `http://localhost:3000`  
Build it for prod with:

```bash
npm run build
```

---

## 🔍 Custom CSS Tokens

Inside `index.css`, you're already doing pro-level HSL color theming:

```css
:root {
  --primary-hue: 270;
  --black-lightness: 15%;
  --color-primary: hsl(var(--primary-hue), 89%, 41%);
}
```

> These make theme switches, light/dark toggles, or dynamic theming child's play.

---

## 💼 Live Demo

> [🌐 See it deployed on GitHub Pages](https://fahaad-abbadi.github.io/portfolio-site)

---

## TODO / Feature Ideas (for MVP++)

- [ ] Add animations (Framer Motion / GSAP)
- [ ] Dark mode toggle 
- [ ] Typewriter effect on hero?
- [ ] Skeleton loading or suspense fallback

---

## Testing (If you go pro mode)

Add React Testing Library + Cypress or Playwright later.  
Testing suggestion for `Card.jsx`:

```js
render(<Card title="Test Project" />);
expect(screen.getByText("Test Project")).toBeInTheDocument();
```

---

## Contributions

Not open for contributions right now.  
But if you’re a recruiter or engineer vibing with this — let's talk.

---

## License

MIT — you can use this, but cloning the design pixel-by-pixel without adding your own flair is just... mid.
