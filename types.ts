
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
