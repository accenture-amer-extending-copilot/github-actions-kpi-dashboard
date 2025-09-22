
import React from 'react';

export type Status = 'good' | 'warning' | 'danger';

export interface KpiCardProps {
  title: string;
  metric: string;
  change?: string;
  changeType?: 'increase' | 'decrease' | 'neutral';
  status?: Status;
  children?: React.ReactNode;
  tooltip: string;
}

export interface TrendData {
  name: string;
  value: number;
}

export interface PieChartData {
  name: string;
  value: number;
  fill: string;
}

// GitHub Copilot specific data types
export interface CopilotUsageData extends TrendData {
  acceptanceRate?: number;
  suggestions?: number;
  accepted?: number;
}

export interface CopilotLanguageData extends PieChartData {
  usage: number;
  acceptance: number;
}

export interface CopilotAdoptionData {
  enabledUsers: number;
  activeUsers: number;
  adoptionRate: number;
}
