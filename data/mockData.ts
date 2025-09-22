
import type { TrendData, PieChartData } from '../types';

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
