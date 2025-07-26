# IC MediCare – Modern Medical Website

A **responsive, beginner-friendly medical clinic website** built with Next.js, React, and Tailwind CSS. This project is designed to showcase a professional healthcare platform where users can:

- Learn about the clinic and its services
- View a team of experienced doctors
- Book appointments online
- Read health and wellness blog posts
- Contact the clinic for more information

---

## 🌟 Features

- **Responsive Design:** Works on all devices (mobile, tablet, desktop)
- **Modern UI:** Clean, accessible, and easy to navigate
- **Book Appointments:** Simple online appointment form (data stored locally)
- **Doctors Directory:** Browse detailed doctor profiles
- **Health Blog:** Read articles on health and wellness
- **Contact Page:** Contact form and clinic info
- **Dark/Light Mode:** Toggle between themes
- **Testimonials:** Patient reviews and ratings
- **Accessible:** Uses semantic HTML and ARIA-friendly components

---

## 🛠️ Technologies Used

- [Next.js](https://nextjs.org/) (React framework)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/) (for type safety)
- [Tailwind CSS](https://tailwindcss.com/) (utility-first CSS framework)
- [Radix UI](https://www.radix-ui.com/) (accessible UI primitives)
- [Lucide Icons](https://lucide.dev/) (icon library)
- [date-fns](https://date-fns.org/) (date utilities)

---

## 📁 Project Structure

- `app/` – Main application pages (Home, Doctors, Appointments, Blog, Contact)
- `components/` – Reusable UI components (Navbar, Footer, Cards, Forms, etc.)
- `lib/` – Sample data for doctors and blog posts
- `public/` – Static assets (logos, images)
- `styles/` – Global and custom styles

---

## 🚀 Getting Started

### 1. **Clone the repository**

```bash
git https://github.com/isamch/MediCare-Clinic-Modern-Medical-Website.git
cd MediCare-Clinic-Modern-Medical-Website
```

### 2. **Install dependencies**

You can use **npm** or **pnpm**:

```bash
npm install
# or
pnpm install
```

### 3. **Run the development server**

```bash
npm run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

### 4. **Build for production**

```bash
npm run build
npm start
# or
pnpm build
pnpm start
```

---

## 📝 Customization

- **Doctor & Blog Data:** Edit `lib/data.ts` to update doctors or blog posts.
- **Branding:** Replace images in `public/` and update the logo in the Navbar/Footer.
- **Colors & Styles:** Adjust Tailwind config in `tailwind.config.ts` or global styles in `app/globals.css`.
- **Content:** Update text in the relevant components or pages in `app/` and `components/`.

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Make your changes (keep code clean and beginner-friendly)
4. Commit and push (`git commit -m 'Add feature' && git push`)
5. Open a Pull Request

---

---

## 🙋 FAQ

**Q: Where is appointment data stored?**
- Appointment form data is stored in your browser's local storage (for demo purposes only).

**Q: Is this production-ready?**
- This project is for learning and portfolio demonstration. For real clinics, add backend integration and security.

**Q: How do I add more doctors or blog posts?**
- Edit the `lib/data.ts` file and follow the existing structure.

---
