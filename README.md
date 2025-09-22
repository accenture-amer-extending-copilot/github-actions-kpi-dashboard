# GitHub & Actions KPI Dashboard

<div align="center">

A modern, responsive dashboard for visualizing GitHub and GitHub Actions Key Performance Indicators (KPIs) with interactive charts and real-time metrics.

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

</div>

## 🚀 Features

- **📊 Interactive Charts**: Beautiful visualizations using Recharts library
- **🌙 Dark Theme**: Sleek dark interface with custom color palette
- **📱 Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **⚡ Fast Performance**: Built with Vite for lightning-fast development and builds
- **🔧 TypeScript**: Full type safety and excellent developer experience
- **📈 KPI Sections**:
  - **Development**: Commits, Pull Requests, Lead Time, Active Branches
  - **Collaboration**: Issues, Reviews, Contributors, Team Velocity
  - **Automation**: Workflow Runs, Success Rate, Deployment Frequency
  - **Security**: Vulnerabilities, Code Scanning, Dependency Updates

## 🛠️ Tech Stack

- **Frontend**: React 19 + TypeScript
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS (via CDN)
- **Charts**: Recharts 3.2
- **Package Manager**: npm

## 📋 Prerequisites

- **Node.js** (version 16 or higher)
- **npm** (comes with Node.js)

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/accenture-amer-extending-copilot/github-actions-kpi-dashboard.git
   cd github-actions-kpi-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables** *(optional)*
   ```bash
   # Create .env.local file
   echo "GEMINI_API_KEY=your_api_key_here" > .env.local
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
├── components/              # React components
│   ├── AutomationSection.tsx   # Automation KPIs
│   ├── CollaborationSection.tsx # Collaboration KPIs  
│   ├── DevelopmentSection.tsx   # Development KPIs
│   ├── SecuritySection.tsx     # Security KPIs
│   ├── KpiCard.tsx             # Reusable KPI card component
│   ├── SectionTitle.tsx        # Section header component
│   └── icons.tsx               # SVG icon components
├── data/                   # Mock data and types
│   └── mockData.ts            # Sample KPI data
├── .github/               # GitHub configuration
│   └── copilot-instructions.md # AI agent guidelines
├── App.tsx                # Main application component
├── types.ts              # TypeScript type definitions
├── index.html            # HTML template with Tailwind config
└── vite.config.ts        # Vite configuration
```

## 🎨 Component Architecture

### KPI Card Pattern
Each metric is displayed using a consistent `KpiCard` component:

```tsx
<KpiCard
  title="Metric Name"
  metric="Value"
  change="+12.5%"
  changeType="increase"
  status="good"
  tooltip="Detailed explanation"
>
  <ResponsiveContainer>
    {/* Chart component */}
  </ResponsiveContainer>
</KpiCard>
```

### Section Structure
Each KPI category follows this pattern:
1. `SectionTitle` with icon and description
2. Responsive grid layout with `KpiCard` components
3. Mix of simple metrics and chart-embedded visualizations

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 🎯 Customization

### Adding New KPIs
1. Add data to `data/mockData.ts`
2. Create or update section component
3. Follow existing `KpiCard` patterns
4. Use consistent status indicators (`good`, `warning`, `danger`)

### Styling
- Colors are defined in `index.html` Tailwind config
- Status indicators use predefined color tokens
- Dark theme is default with custom color palette

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is part of Accenture's extending Copilot initiative.

## 🙋‍♂️ Support

For questions or support, please open an issue in this repository.

---

<div align="center">
Built with ❤️ by the Accenture Extending Copilot Team
</div>
