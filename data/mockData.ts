
import type { TrendData, PieChartData, CopilotUsageData, CopilotLanguageData, CopilotAdoptionData } from '../types';

// Development Data
export const commitsPerWeek: TrendData[] = [
  { name: 'Week 1', value: 120 },
  { name: 'Week 2', value: 150 },
  { name: 'Week 3', value: 130 },
  { name: 'Week 4', value: 180 },
  { name: 'Week 5', value: 165 },
  { name: 'Week 6', value: 210 },
];

export const mergedPRsPerWeek: TrendData[] = [
  { name: 'Week 1', value: 30 },
  { name: 'Week 2', value: 35 },
  { name: 'Week 3', value: 28 },
  { name: 'Week 4', value: 42 },
  { name: 'Week 5', value: 38 },
  { name: 'Week 6', value: 45 },
];

// Collaboration Data
export const closedVsOpenIssues: PieChartData[] = [
  { name: 'Closed', value: 350, fill: '#48bb78' },
  { name: 'Open', value: 80, fill: '#f56565' },
];

// Automation Data
export const workflowsPerWeek: TrendData[] = [
  { name: 'Week 1', value: 450 },
  { name: 'Week 2', value: 500 },
  { name: 'Week 3', value: 480 },
  { name: 'Week 4', value: 550 },
  { name: 'Week 5', value: 530 },
  { name: 'Week 6', value: 600 },
];

export const pipelineSuccessRate: PieChartData[] = [
    { name: 'Success', value: 92, fill: '#48bb78' },
    { name: 'Failure', value: 8, fill: '#f56565' },
];

// Security Data
export const vulnerabilitiesStatus: PieChartData[] = [
  { name: 'Closed', value: 120, fill: '#48bb78' },
  { name: 'Open', value: 25, fill: '#f6e05e' },
];

// GitHub Copilot Data
export const copilotAdoption: CopilotAdoptionData = {
  enabledUsers: 50,
  activeUsers: 38,
  adoptionRate: 76
};

export const copilotAcceptanceRate: CopilotUsageData[] = [
  { name: 'Week 1', value: 45, acceptanceRate: 45, suggestions: 1250, accepted: 563 },
  { name: 'Week 2', value: 52, acceptanceRate: 52, suggestions: 1380, accepted: 718 },
  { name: 'Week 3', value: 48, acceptanceRate: 48, suggestions: 1290, accepted: 619 },
  { name: 'Week 4', value: 61, acceptanceRate: 61, suggestions: 1450, accepted: 885 },
  { name: 'Week 5', value: 58, acceptanceRate: 58, suggestions: 1520, accepted: 882 },
  { name: 'Week 6', value: 64, acceptanceRate: 64, suggestions: 1580, accepted: 1011 },
];

export const copilotSuggestionsPerWeek: TrendData[] = [
  { name: 'Week 1', value: 1250 },
  { name: 'Week 2', value: 1380 },
  { name: 'Week 3', value: 1290 },
  { name: 'Week 4', value: 1450 },
  { name: 'Week 5', value: 1520 },
  { name: 'Week 6', value: 1580 },
];

export const copilotLanguageUsage: CopilotLanguageData[] = [
  { name: 'TypeScript', value: 35, fill: '#007ACC', usage: 850, acceptance: 68 },
  { name: 'JavaScript', value: 28, fill: '#F7DF1E', usage: 680, acceptance: 62 },
  { name: 'Python', value: 18, fill: '#3776AB', usage: 425, acceptance: 58 },
  { name: 'Java', value: 12, fill: '#ED8B00', usage: 290, acceptance: 55 },
  { name: 'C#', value: 7, fill: '#239120', usage: 165, acceptance: 60 },
];

export const copilotProductivityMetrics: PieChartData[] = [
  { name: 'Copilot Generated', value: 42, fill: '#4fd1c5' },
  { name: 'Manual Code', value: 58, fill: '#a0aec0' },
];
