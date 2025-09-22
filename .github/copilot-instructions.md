# GitHub & Actions KPI Dashboard - AI Agent Instructions

## Project Overview
This is a React-based dashboard for visualizing GitHub and GitHub Actions KPIs, built with Vite, TypeScript, and Recharts. The application displays development, collaboration, automation, and security metrics through interactive charts and cards.

## Architecture Patterns

### Component Structure
- **Section-based organization**: Each major KPI category (`DevelopmentSection`, `CollaborationSection`, `AutomationSection`, `SecuritySection`) is a standalone component
- **Shared components**: `KpiCard` for metric display, `SectionTitle` for section headers, `icons.tsx` for all SVG icons
- **Data separation**: All mock data lives in `data/mockData.ts` with specific exports per section

### Styling System
- **Tailwind CSS via CDN**: Configured in `index.html` with custom color palette
- **Dark theme by default**: Uses predefined color tokens (`text-primary`, `background`, `card`, etc.)
- **Status indicators**: Three-tier system (`good`, `warning`, `danger`) with consistent color mapping
- **Responsive design**: Grid layouts that adapt from 1 column (mobile) to 4 columns (desktop)

### Data Flow
- **Static mock data**: Currently uses `TrendData[]` and `PieChartData[]` interfaces from `types.ts`
- **Chart integration**: Recharts components (`LineChart`, `PieChart`, `ResponsiveContainer`) embedded within KpiCards
- **No state management**: Pure functional components with props-based data flow

## Development Workflow

### Local Development
```bash
npm install          # Install dependencies (includes react-is for recharts)
npm run dev         # Start Vite dev server on port 3000
```

### Key Dependencies
- **Recharts**: Used extensively for data visualization - requires `react-is` peer dependency
- **Vite**: Build tool with React plugin, configured for port 3000 and external host access
- **TypeScript**: Strict typing with interfaces in `types.ts`

### Environment Setup
- Expects `GEMINI_API_KEY` in `.env.local` (configured in vite.config.ts)
- Vite config includes alias `@` pointing to project root

## Component Conventions

### KpiCard Pattern
```tsx
<KpiCard
  title="Metric Name"
  metric="Value"
  change="+12.5%"
  changeType="increase|decrease|neutral"
  status="good|warning|danger"
  tooltip="Detailed explanation"
>
  <ResponsiveContainer>
    {/* Recharts component */}
  </ResponsiveContainer>
</KpiCard>
```

### Icon Usage
- All icons in `components/icons.tsx` follow consistent `IconProps` interface
- Each icon accepts `className` prop for styling
- Icons are semantic (CommitIcon, PullRequestIcon, etc.)

### Section Pattern
Each section follows this structure:
1. SectionTitle with icon and description
2. Grid layout with KpiCards
3. Mix of simple metrics and chart-embedded cards

## File Organization
- `/components/` - All React components (no subdirectories)
- `/data/` - Mock data exports organized by section
- `/types.ts` - Shared TypeScript interfaces
- Root level: Main app files, config, and entry points

## Adding New Features
1. **New metrics**: Add data to `mockData.ts`, create interface in `types.ts` if needed
2. **New sections**: Follow existing section pattern with SectionTitle + grid layout
3. **New charts**: Use Recharts components with consistent responsive wrapper
4. **New icons**: Add to `icons.tsx` following the IconProps pattern

This codebase prioritizes clarity and consistency over complex abstractions - ideal for rapid KPI dashboard development and maintenance.