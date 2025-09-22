
import React from 'react';
import { KpiCard } from './KpiCard';
import { SectionTitle } from './SectionTitle';
import { CommitIcon } from './icons';
import { commitsPerWeek, mergedPRsPerWeek } from '../data/mockData';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

export const DevelopmentSection: React.FC = () => {
  return (
    <section className="mb-12">
      <SectionTitle 
        icon={<CommitIcon className="h-8 w-8 text-accent"/>}
        title="Development" 
        subtitle="Measuring code contribution and integration pace."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <KpiCard
          title="Commits this Week"
          metric="210"
          change="+12.5%"
          changeType="increase"
          tooltip="Total number of commits pushed to all branches in the last 7 days. Reflects active code contribution."
        >
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={commitsPerWeek} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#4a5568" />
              <XAxis dataKey="name" stroke="#a0aec0" fontSize={12} />
              <YAxis stroke="#a0aec0" fontSize={12} />
              <Tooltip contentStyle={{ backgroundColor: '#2d3748', border: 'none' }}/>
              <Line type="monotone" dataKey="value" stroke="#4fd1c5" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} name="Commits"/>
            </LineChart>
          </ResponsiveContainer>
        </KpiCard>
        
        <KpiCard
          title="PRs Merged this Week"
          metric="45"
          change="+8.1%"
          changeType="neutral"
          tooltip="Number of pull requests successfully merged into the main branch, indicating the rhythm of feature integration."
        >
           <ResponsiveContainer width="100%" height="100%">
            <LineChart data={mergedPRsPerWeek} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#4a5568" />
              <XAxis dataKey="name" stroke="#a0aec0" fontSize={12} />
              <YAxis stroke="#a0aec0" fontSize={12} />
              <Tooltip contentStyle={{ backgroundColor: '#2d3748', border: 'none' }}/>
              <Line type="monotone" dataKey="value" stroke="#81e6d9" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} name="Merged PRs"/>
            </LineChart>
          </ResponsiveContainer>
        </KpiCard>
        
        <KpiCard
          title="Avg. PR Cycle Time"
          metric="2.8 days"
          change="-10%"
          changeType="decrease"
          status="good"
          tooltip="Average time from when a pull request is opened until it is merged. A lower value signifies greater agility."
        />
        
        <KpiCard
          title="Stale Branches (>30d)"
          metric="8"
          change="+2"
          changeType="increase"
          status="warning"
          tooltip="Number of active branches with no new commits in over 30 days. These can represent potential technical debt."
        />
      </div>
    </section>
  );
};
