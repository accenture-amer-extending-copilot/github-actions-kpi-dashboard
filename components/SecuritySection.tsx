
import React from 'react';
import { KpiCard } from './KpiCard';
import { SectionTitle } from './SectionTitle';
import { ShieldCheckIcon } from './icons';
import { vulnerabilitiesStatus } from '../data/mockData';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';

export const SecuritySection: React.FC = () => {
  return (
    <section className="mb-12">
      <SectionTitle
        icon={<ShieldCheckIcon className="h-8 w-8 text-accent"/>}
        title="Security"
        subtitle="Assessing security posture and reaction speed."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <KpiCard
          title="Open vs. Closed Vulns"
          metric="25 Open"
          status="warning"
          tooltip="Comparison of currently open vulnerabilities versus those closed in the last 30 days. Shows maturity in security management."
        >
             <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                <Pie data={vulnerabilitiesStatus} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={40} outerRadius={60} fill="#8884d8">
                    {vulnerabilitiesStatus.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.fill} />)}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: '#2d3748', border: 'none' }}/>
                <Legend iconSize={10} wrapperStyle={{fontSize: "12px"}}/>
                </PieChart>
          </ResponsiveContainer>
        </KpiCard>
        <KpiCard
          title="Avg. Vuln. Resolution Time"
          metric="3 days"
          change="-1 day"
          changeType="decrease"
          status="good"
          tooltip="Average time from when a vulnerability is detected (e.g., by Dependabot) to when it is fixed."
        />
        <KpiCard
          title="Repo Scanning Enabled"
          metric="98%"
          change="+5%"
          changeType="neutral"
          status="good"
          tooltip="Percentage of repositories that have dependency scanning enabled. Measures adoption of security best practices."
        />
        <KpiCard
          title="Critical Alerts Unresolved"
          metric="2"
          change="+1"
          changeType="increase"
          status="danger"
          tooltip="Number of open security alerts with a 'critical' severity level, representing the most severe active risks."
        />
      </div>
    </section>
  );
};
