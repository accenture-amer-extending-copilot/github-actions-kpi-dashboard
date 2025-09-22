
import React from 'react';
import { KpiCard } from './KpiCard';
import { SectionTitle } from './SectionTitle';
import { CogIcon } from './icons';
import { workflowsPerWeek, pipelineSuccessRate } from '../data/mockData';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';

export const AutomationSection: React.FC = () => {
  return (
    <section className="mb-12">
      <SectionTitle
        icon={<CogIcon className="h-8 w-8 text-accent"/>}
        title="Automation (CI/CD)"
        subtitle="Monitoring the health and efficiency of automated pipelines."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <KpiCard
          title="Workflows Executed"
          metric="600"
          change="+7.1%"
          changeType="neutral"
          tooltip="Total GitHub Actions workflows executed in the past week. Indicates the level of automation activity."
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={workflowsPerWeek} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#4a5568" />
              <XAxis dataKey="name" stroke="#a0aec0" fontSize={12} />
              <YAxis stroke="#a0aec0" fontSize={12} />
              <Tooltip contentStyle={{ backgroundColor: '#2d3748', border: 'none' }} cursor={{fill: '#4a5568'}} />
              <Bar dataKey="value" fill="#4fd1c5" name="Workflows"/>
            </BarChart>
          </ResponsiveContainer>
        </KpiCard>
        <KpiCard
          title="Pipeline Success Rate"
          metric="92%"
          change="-1%"
          changeType="decrease"
          status="good"
          tooltip="Percentage of workflow runs that completed successfully. A key indicator of automation reliability."
        >
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                <Pie data={pipelineSuccessRate} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={60} fill="#8884d8">
                    {pipelineSuccessRate.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.fill} />)}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: '#2d3748', border: 'none' }}/>
                <Legend iconSize={10} wrapperStyle={{fontSize: "12px"}}/>
                </PieChart>
          </ResponsiveContainer>
        </KpiCard>
        <KpiCard
          title="Avg. Workflow Duration"
          metric="4m 15s"
          change="-30s"
          changeType="decrease"
          status="good"
          tooltip="Average execution time for all workflow runs. Faster pipelines lead to faster feedback cycles."
        />
        <KpiCard
          title="Deployment Frequency"
          metric="15/day"
          change="+2"
          changeType="neutral"
          tooltip="Number of successful deployments to production per day. Measures software delivery velocity."
        />
      </div>
    </section>
  );
};
