import React from 'react';
import { KpiCard } from './KpiCard';
import { SectionTitle } from './SectionTitle';
import { CopilotIcon, SparklesIcon, BrainIcon, RobotIcon } from './icons';
import { 
  copilotAdoption, 
  copilotAcceptanceRate, 
  copilotSuggestionsPerWeek, 
  copilotLanguageUsage, 
  copilotProductivityMetrics 
} from '../data/mockData';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';

export const CopilotSection: React.FC = () => {
  const getAcceptanceRateStatus = (rate: number) => {
    if (rate >= 60) return 'good';
    if (rate >= 30) return 'warning';
    return 'danger';
  };

  const currentAcceptanceRate = copilotAcceptanceRate[copilotAcceptanceRate.length - 1]?.acceptanceRate || 0;
  const previousAcceptanceRate = copilotAcceptanceRate[copilotAcceptanceRate.length - 2]?.acceptanceRate || 0;
  const acceptanceChange = currentAcceptanceRate - previousAcceptanceRate;
  
  const currentSuggestions = copilotSuggestionsPerWeek[copilotSuggestionsPerWeek.length - 1]?.value || 0;
  const previousSuggestions = copilotSuggestionsPerWeek[copilotSuggestionsPerWeek.length - 2]?.value || 0;
  const suggestionsChangeNum = ((currentSuggestions - previousSuggestions) / previousSuggestions * 100);
  const suggestionsChange = suggestionsChangeNum.toFixed(1);

  return (
    <section className="mb-12">
      <SectionTitle 
        icon={<CopilotIcon className="h-8 w-8 text-accent"/>}
        title="GitHub Copilot Usage" 
        subtitle="Measuring AI adoption, effectiveness, and developer productivity impact."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Adoption Rate */}
        <KpiCard
          title="User Adoption Rate"
          metric={`${copilotAdoption.adoptionRate}%`}
          change="+8.2%"
          changeType="increase"
          status={copilotAdoption.adoptionRate >= 70 ? 'good' : copilotAdoption.adoptionRate >= 50 ? 'warning' : 'danger'}
          tooltip={`${copilotAdoption.activeUsers} out of ${copilotAdoption.enabledUsers} enabled users actively using Copilot. Measures real adoption vs licensed seats.`}
        />

        {/* Acceptance Rate */}
        <KpiCard
          title="Suggestion Acceptance Rate"
          metric={`${currentAcceptanceRate}%`}
          change={`${acceptanceChange > 0 ? '+' : ''}${acceptanceChange.toFixed(1)}%`}
          changeType={acceptanceChange > 0 ? 'increase' : acceptanceChange < 0 ? 'decrease' : 'neutral'}
          status={getAcceptanceRateStatus(currentAcceptanceRate)}
          tooltip="Percentage of Copilot suggestions accepted by developers. Higher rates indicate more relevant and useful suggestions."
        >
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={copilotAcceptanceRate} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#4a5568" />
              <XAxis dataKey="name" stroke="#a0aec0" fontSize={12} />
              <YAxis stroke="#a0aec0" fontSize={12} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#2d3748', border: 'none' }}
                formatter={(value: number) => [`${value}%`, 'Acceptance Rate']}
              />
              <Line 
                type="monotone" 
                dataKey="acceptanceRate" 
                stroke="#4fd1c5" 
                strokeWidth={2}
                dot={{ fill: '#4fd1c5', strokeWidth: 2, r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </KpiCard>

        {/* Weekly Suggestions */}
        <KpiCard
          title="Suggestions This Week"
          metric={`${currentSuggestions.toLocaleString()}`}
          change={`${suggestionsChangeNum > 0 ? '+' : ''}${suggestionsChange}%`}
          changeType={suggestionsChangeNum > 0 ? 'increase' : suggestionsChangeNum < 0 ? 'decrease' : 'neutral'}
          status="good"
          tooltip="Total number of code suggestions provided by Copilot this week. Indicates usage intensity and developer engagement."
        >
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={copilotSuggestionsPerWeek} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#4a5568" />
              <XAxis dataKey="name" stroke="#a0aec0" fontSize={12} />
              <YAxis stroke="#a0aec0" fontSize={12} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#2d3748', border: 'none' }}
                formatter={(value: number) => [value.toLocaleString(), 'Suggestions']}
              />
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="#4fd1c5" 
                strokeWidth={2}
                dot={{ fill: '#4fd1c5', strokeWidth: 2, r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </KpiCard>

        {/* Average Daily Acceptance */}
        <KpiCard
          title="Avg. Daily Acceptances"
          metric="142"
          change="+18.3%"
          changeType="increase"
          status="good"
          tooltip="Average number of Copilot suggestions accepted per day per active user. Measures individual productivity impact."
        />

        {/* Language Distribution */}
        <KpiCard
          title="Top Languages"
          metric="5 Languages"
          tooltip="Distribution of Copilot usage across programming languages. TypeScript and JavaScript show highest adoption rates."
        >
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={copilotLanguageUsage as any}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={60}
                innerRadius={25}
              >
                {copilotLanguageUsage.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ backgroundColor: '#2d3748', border: 'none' }}
                formatter={(value: number, name: string) => [`${value}%`, name]}
              />
            </PieChart>
          </ResponsiveContainer>
        </KpiCard>

        {/* Code Generation Ratio */}
        <KpiCard
          title="Code Generation Impact"
          metric="42%"
          change="+5.2%"
          changeType="increase"
          status="good"
          tooltip="Percentage of code lines generated by Copilot vs manually written. Measures direct productivity contribution."
        >
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={copilotProductivityMetrics as any}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={60}
                innerRadius={25}
              >
                {copilotProductivityMetrics.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ backgroundColor: '#2d3748', border: 'none' }}
                formatter={(value: number, name: string) => [`${value}%`, name]}
              />
            </PieChart>
          </ResponsiveContainer>
        </KpiCard>

        {/* Most Productive Language */}
        <KpiCard
          title="Most Productive Language"
          metric="TypeScript"
          change="68% acceptance"
          changeType="increase"
          status="good"
          tooltip="Programming language with highest Copilot suggestion acceptance rate. TypeScript shows best AI-human collaboration."
        />

        {/* Weekly Active Users */}
        <KpiCard
          title="Weekly Active Users"
          metric="38"
          change="+3 users"
          changeType="increase"
          status="good"
          tooltip="Number of developers who actively used Copilot this week. Growth indicates increasing adoption and engagement."
        />

      </div>
    </section>
  );
};