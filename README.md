# Green Fredericton 🌿

A directory of sustainable local businesses in Fredericton, NB.
Joseph Trubela & Pedro Garbelotti — Responsive Web Design, Fall 2026.

Built with HTML5, CSS, the **Bulma** CSS framework (CDN) and **JavaScript/jQuery**,
using only techniques from *Web Development & Design Foundations with HTML5* (10th ed.), Chapters 1–14.

## Files

```
index.html     Home — hero, 3-column layout, customer reviews
shops.html     Shops — sticky category menu + shop cards, modal, hours/prices table
about.html     About — figure with caption, intro video, why buy local
contact.html   Contact — sticky info box + accessible contact form
css/style.css  Sticky side menus, shop logos, small extra touches
js/main.js     Burger menu, shop filter, modal, form handling
images/        riverside-shops.jpg (figure), video-poster.jpg
media/         intro.mp4, intro.webm (video in two formats)
```

## Requirements checklist

| Requirement | Where |
|---|---|
| 4+ connected pages, shared navbar & footer | all pages |
| Home: 3 columns on desktop, 1 on mobile | `index.html` — `columns is-multiline`, `is-12-tablet is-3-desktop` / `is-6-desktop` |
| Content pages: 2 columns with sticky side menu | `shops.html`, `about.html`, `contact.html` — Bulma columns (Flexbox) + `position: sticky` |
| Bulma columns, `is-multiline`, viewport modifiers | every page (`is-12-mobile`, `is-6-tablet`, `is-4-widescreen`, …) |
| Navbar with working burger menu | `navbar-burger` + `navbar-menu`, toggled in `js/main.js` |
| 3+ Bulma components | Hero, Card, Message, Modal, Notification, Menu, Box, Level, Tag |
| Accessible form | `contact.html` — labels, fieldset/legend, `required`, `type="email"` |
| `<figure>` with caption | `about.html` |
| Audio/video player | `about.html` — `<video>` with MP4 + WebM sources and a poster |
| Structured data table | `shops.html` — caption, thead/tbody/tfoot, `scope` |

## Textbook chapters used

- Ch 2–4: HTML structure, CSS colour/text, images, `<figure>`/`<figcaption>`
- Ch 5–6: skip-to-content link, fixed/sticky positioning, fragment identifiers (`#top`, `#cafes`)
- Ch 7: Flexbox (Bulma columns), viewport meta tag, media queries
- Ch 8: accessible tables (`caption`, `th scope`, `thead`/`tbody`/`tfoot`)
- Ch 9: forms, labels, fieldset/legend, HTML5 `email` input and `required`
- Ch 11: `<video>` + `<source>`, CSS `transition`/`transform`
- Ch 13: `<meta name="description">`, page titles
- Ch 14: `onsubmit="return validateForm();"`, `document.forms[0]`, jQuery from Google's CDN,
  `$(document).ready()`, `click()`, `attr()`, `css()`, `html()`

## Suggested split

| Person | Pages |
|---|---|
| Pedro | `index.html`, `about.html`, `css/style.css` |
| Joseph | `shops.html`, `contact.html`, `js/main.js` |

Each person works on a branch, then opens a pull request into `main`.

## Deploy to GitHub Pages (Milestone 4)

1. Push everything to the repo's `main` branch (keep `index.html` in the root).
2. On GitHub: **Settings → Pages → Build and deployment → Deploy from a branch → `main` / `(root)`**.
3. After a minute the site is live at `https://<username>.github.io/<repo-name>/`.

## Notes

- The shops are **made-up placeholder businesses**. Swap in real ones (with permission) before you present.
- The form doesn't send anything yet (no server-side script). It shows a success message instead.
