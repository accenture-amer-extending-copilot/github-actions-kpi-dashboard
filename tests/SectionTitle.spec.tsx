import React from 'react';
import { render, screen } from '@testing-library/react';
import { SectionTitle } from '../src/components/SectionTitle';
import { CommitIcon } from '../src/components/icons';

describe('SectionTitle Component', () => {
  const defaultProps = {
    icon: <CommitIcon className="h-8 w-8 text-accent" />,
    title: 'Test Section',
    subtitle: 'This is a test section subtitle'
  };

  it('should render the title correctly', () => {
    render(<SectionTitle {...defaultProps} />);
    expect(screen.getByText('Test Section')).toBeDefined();
  });

  it('should render the subtitle correctly', () => {
    render(<SectionTitle {...defaultProps} />);
    expect(screen.getByText('This is a test section subtitle')).toBeDefined();
  });

  it('should render the icon', () => {
    const { container } = render(<SectionTitle {...defaultProps} />);
    const icon = container.querySelector('svg');
    expect(icon).toBeDefined();
  });

  it('should apply correct CSS classes to title', () => {
    render(<SectionTitle {...defaultProps} />);
    const title = screen.getByText('Test Section');
    expect(title.className).toContain('text-2xl');
    expect(title.className).toContain('font-bold');
    expect(title.className).toContain('text-text-primary');
  });

  it('should apply correct CSS classes to subtitle', () => {
    render(<SectionTitle {...defaultProps} />);
    const subtitle = screen.getByText('This is a test section subtitle');
    expect(subtitle.className).toContain('text-text-secondary');
  });

  it('should render with custom icon', () => {
    const customIcon = <div data-testid="custom-icon">Custom Icon</div>;
    render(
      <SectionTitle 
        icon={customIcon}
        title="Custom Section"
        subtitle="Custom subtitle"
      />
    );
    expect(screen.getByTestId('custom-icon')).toBeDefined();
    expect(screen.getByText('Custom Icon')).toBeDefined();
  });

  it('should have proper layout structure', () => {
    const { container } = render(<SectionTitle {...defaultProps} />);
    const wrapper = container.firstChild as HTMLElement;
    
    expect(wrapper.className).toContain('mb-6');
    expect(wrapper.className).toContain('flex');
    expect(wrapper.className).toContain('items-start');
    expect(wrapper.className).toContain('space-x-3');
  });

  it('should render title as h2 element', () => {
    render(<SectionTitle {...defaultProps} />);
    const title = screen.getByRole('heading', { level: 2 });
    expect(title).toBeDefined();
    expect(title.textContent).toBe('Test Section');
  });

  it('should render subtitle as paragraph element', () => {
    render(<SectionTitle {...defaultProps} />);
    const subtitle = screen.getByText('This is a test section subtitle');
    expect(subtitle.tagName).toBe('P');
  });
});