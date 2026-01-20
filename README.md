# Backpacks & Blueprints Web

Architecture-led travel and academic exploration for students, educators, and curious minds. This project is the official website for Backpacks & Blueprints, built with Next.js 14+ (App Router), TypeScript, and Tailwind CSS.

## 🚀 Technologies

- **Framework:** [Next.js 14+](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [Radix UI](https://www.radix-ui.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Animations:** [Motion](https://motion.dev/) (formerly Framer Motion)
- **Forms:** React Hook Form
- **Theme:** Next-Themes (Dark/Light mode support)

## 🛠️ Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd Backpacksandblueprintsweb-main
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   npm install --legacy-peer-deps
   # (Use legacy-peer-deps if you encounter conflicts with react-day-picker)
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📜 Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm run start`: Starts the production server.
- `npm run lint`: Runs the linter to check for code issues.

## 📂 Project Structure

The project follows the Next.js App Router structure:

```
src/
├── app/                 # App Router pages and layouts
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   ├── about/           # About page
│   ├── study-tours/     # Study Tours page
│   ├── heritage-walks/  # Heritage Walks page
│   ├── documentation/   # Documentation page
│   ├── collaborations/  # Collaborations page
│   └── contact/         # Contact page
├── components/          # Reusable React components
│   ├── ui/              # Generic UI components (buttons, inputs, etc.)
│   ├── layout/          # Layout specific components (Header, Footer)
│   └── home/            # Home page specific sections
├── lib/                 # Utility functions
└── assets/              # Static assets (deprecated, use /public for static files)
public/                  # Static files (images, favicon, etc.)
```

## 🎨 Features

- **Responsive Design:** Fully responsive layout for mobile, tablet, and desktop.
- **Dynamic Routing:** Next.js file-system based routing.
- **Modern UI:** Clean and professional design using Tailwind CSS and Radix UI primitives.
- **Interactive Elements:** Smooth animations and transitions using Motion.
- **SEO Optimized:** Built-in SEO best practices with Next.js.

## 📄 License

[Add License Information Here]