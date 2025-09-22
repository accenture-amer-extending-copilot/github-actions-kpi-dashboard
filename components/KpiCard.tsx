
import React from 'react';
import type { KpiCardProps } from '../types';
import { ArrowUpIcon, ArrowDownIcon, MinusIcon, InfoIcon } from './icons';

const statusClasses = {
  good: 'border-status-good',
  warning: 'border-status-warning',
  danger: 'border-status-danger',
};

const statusDotClasses = {
    good: 'bg-status-good',
    warning: 'bg-status-warning',
    danger: 'bg-status-danger',
}

const changeClasses = {
    increase: 'text-status-danger',
    decrease: 'text-status-good',
    neutral: 'text-text-secondary',
}

const ChangeIndicator: React.FC<{ type?: 'increase' | 'decrease' | 'neutral', value?: string }> = ({ type, value }) => {
    if (!type || !value) return null;

    const Icon = type === 'increase' ? ArrowUpIcon : type === 'decrease' ? ArrowDownIcon : MinusIcon;
    const colorClass = changeClasses[type];

    return (
        <span className={`flex items-center text-sm font-medium ${colorClass}`}>
            <Icon className="h-4 w-4 mr-1" />
            {value}
        </span>
    );
};

export const KpiCard: React.FC<KpiCardProps> = ({ title, metric, change, changeType, status, children, tooltip }) => {
  const borderClass = status ? statusClasses[status] : 'border-primary';

  return (
    <div className={`bg-card rounded-lg shadow-lg p-5 flex flex-col border-t-4 ${borderClass} transition-transform duration-300 hover:transform hover:-translate-y-1`}>
      <div className="flex items-center justify-between">
        <h3 className="text-md font-semibold text-text-secondary">{title}</h3>
        <div className="relative group">
            <InfoIcon className="h-5 w-5 text-primary cursor-pointer" />
            <div className="absolute bottom-full mb-2 w-64 right-0 transform translate-x-1/2 p-2 bg-gray-900 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                {tooltip}
            </div>
        </div>
      </div>
      <div className="mt-2 flex-grow flex flex-col justify-center">
        <div className="flex items-baseline space-x-2">
            <p className="text-4xl font-bold text-text-primary">{metric}</p>
            <ChangeIndicator type={changeType} value={change} />
        </div>
      </div>
      {children && <div className="mt-4 h-40">{children}</div>}
    </div>
  );
};
