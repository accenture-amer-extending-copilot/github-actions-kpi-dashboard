
import React from 'react';

interface SectionTitleProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ icon, title, subtitle }) => {
  return (
    <div className="mb-6 flex items-start space-x-3">
        {icon}
      <div>
        <h2 className="text-2xl font-bold text-text-primary">{title}</h2>
        <p className="text-text-secondary">{subtitle}</p>
      </div>
    </div>
  );
};
