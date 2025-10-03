# My Portfolio Website

Welcome to my personal portfolio website! This project is built to showcase my skills, experience, and projects in a modern and visually appealing way. It serves as a central hub for anyone who wants to learn more about me and my work.

## Features

- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Dynamic Theme Switching**: Toggle between light and dark themes for a personalized experience.
- **Smooth Navigation**: Section-based navigation with active section highlighting.
- **Project Showcase**: A dedicated section to display my projects with images and descriptions.
- **Contact Form**: A simple way to get in touch with me directly from the website.
- **Downloadable CV**: Visitors can download my CV for offline reference.

## Technologies Used

- **Next.js**: A React framework for server-side rendering and static site generation.
- **TypeScript**: Ensures type safety and better developer experience.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **React Context API**: For managing theme and active section states.

## Folder Structure

```
.
├── app/                     # Application-level files
│   ├── favicon.ico          # Favicon for the website
│   ├── globals.css          # Global CSS styles
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main page component
├── components/              # Reusable UI components
│   ├── about.tsx            # About section
│   ├── contact.tsx          # Contact section
│   ├── experience.tsx       # Experience section
│   ├── footer.tsx           # Footer component
│   ├── header.tsx           # Header component
│   ├── intro.tsx            # Introduction section
│   ├── project.tsx          # Single project component
│   ├── projects.tsx         # Projects section
│   ├── section-divider.tsx  # Section divider component
│   ├── section-heading.tsx  # Section heading component
│   ├── skills.tsx           # Skills section
│   └── theme-switch.tsx     # Theme switcher component
├── context/                 # React context files
│   ├── active-section-context.tsx  # Context for active section tracking
│   └── theme-context.tsx            # Context for theme management
├── lib/                     # Utility files
│   ├── data.ts              # Static data for the portfolio
│   ├── hooks.ts             # Custom React hooks
│   └── types.ts             # TypeScript types
├── public/                  # Public assets
│   ├── authBackendImg.png   # Image for a project
│   ├── CV.pdf               # Downloadable CV
│   ├── eventBookingImg.png  # Image for a project
│   ├── MyImg.jpg            # Personal image
│   └── portfolioImg.jpeg    # Portfolio image
├── next.config.js           # Next.js configuration
├── package.json             # Project dependencies and scripts
├── postcss.config.js        # PostCSS configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── README.md                # Project documentation
```

## Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js** (v16 or higher)
- **npm** or **yarn**

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd portfolioweb
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

### Development

To start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

### Build

To build the application for production:

```bash
npm run build
```

### Deployment

After building, you can deploy the application using platforms like **Vercel**, **Netlify**, or any static hosting service.


## About Me

Hi! I'm Sarthak Hota, a passionate developer with expertise in building modern web applications. This portfolio is a reflection of my journey, skills, and the projects I've worked on. Feel free to explore and reach out to me!

## Contact

- **Email**: [your-email@example.com](mailto:your-email@example.com)
- **LinkedIn**: [Your LinkedIn Profile](https://linkedin.com/in/your-profile)
- **GitHub**: [Your GitHub Profile](https://github.com/your-profile)

## License

This project is licensed under the [MIT License](LICENSE).

---

Thank you for visiting my portfolio!