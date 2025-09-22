
import React from 'react';
import { KpiCard } from './KpiCard';
import { SectionTitle } from './SectionTitle';
import { UsersIcon } from './icons';
import { closedVsOpenIssues } from '../data/mockData';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';


export const CollaborationSection: React.FC = () => {
    const issueRatio = (closedVsOpenIssues[0].value / (closedVsOpenIssues[0].value + closedVsOpenIssues[1].value)) * 100;
  return (
    <section className="mb-12">
      <SectionTitle
        icon={<UsersIcon className="h-8 w-8 text-accent"/>}
        title="Collaboration"
        subtitle="Tracking team interaction and responsiveness."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <KpiCard
          title="Avg. Reviews per PR"
          metric="3.2"
          change="+0.5"
          changeType="neutral"
          tooltip="Average number of code reviews on each pull request. Higher numbers suggest strong collaboration."
        />
        <KpiCard
          title="Time to First Review"
          metric="4.5 hours"
          change="-15%"
          changeType="decrease"
          status="good"
          tooltip="Average time from PR creation to the first meaningful comment or review. Measures team feedback velocity."
        />
        <KpiCard
          title="Issues Closed/Open Ratio"
          metric={`${issueRatio.toFixed(1)}%`}
          status={issueRatio > 80 ? 'good' : 'warning'}
          tooltip="The percentage of closed issues relative to the total number of issues. Shows backlog management capability."
        >
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={closedVsOpenIssues}
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={60}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
              >
                {closedVsOpenIssues.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ backgroundColor: '#2d3748', border: 'none' }} />
              <Legend iconSize={10} wrapperStyle={{fontSize: "12px"}}/>
            </PieChart>
          </ResponsiveContainer>
        </KpiCard>
        <KpiCard
          title="Avg. Issue Resolution Time"
          metric="1.5 days"
          change="-5%"
          changeType="decrease"
          status="good"
          tooltip="Average time taken to close an issue from the moment it was created. Reflects efficiency in addressing problems."
        />
      </div>
    </section>
  );
};
