import React from 'react';
import { render, screen } from '@testing-library/react';
import { KpiCard } from '../src/components/KpiCard';

describe('KpiCard Component', () => {
  const defaultProps = {
    title: 'Test Metric',
    metric: '123',
    tooltip: 'This is a test metric tooltip'
  };

  it('should render the title correctly', () => {
    render(<KpiCard {...defaultProps} />);
    expect(screen.getByText('Test Metric')).toBeDefined();
  });

  it('should render the metric value correctly', () => {
    render(<KpiCard {...defaultProps} />);
    expect(screen.getByText('123')).toBeDefined();
  });

  it('should render tooltip text when present', () => {
    render(<KpiCard {...defaultProps} />);
    const tooltip = screen.getByText('This is a test metric tooltip');
    expect(tooltip).toBeDefined();
  });

  it('should display change indicator when change and changeType are provided', () => {
    render(
      <KpiCard 
        {...defaultProps} 
        change="+12.5%" 
        changeType="increase" 
      />
    );
    expect(screen.getByText('+12.5%')).toBeDefined();
  });

  it('should apply correct status border class', () => {
    const { container } = render(
      <KpiCard {...defaultProps} status="good" />
    );
    const cardElement = container.firstChild as HTMLElement;
    expect(cardElement.className).toContain('border-status-good');
  });

  it('should apply warning status correctly', () => {
    const { container } = render(
      <KpiCard {...defaultProps} status="warning" />
    );
    const cardElement = container.firstChild as HTMLElement;
    expect(cardElement.className).toContain('border-status-warning');
  });

  it('should apply danger status correctly', () => {
    const { container } = render(
      <KpiCard {...defaultProps} status="danger" />
    );
    const cardElement = container.firstChild as HTMLElement;
    expect(cardElement.className).toContain('border-status-danger');
  });

  it('should render children when provided', () => {
    render(
      <KpiCard {...defaultProps}>
        <div data-testid="test-child">Test Child Content</div>
      </KpiCard>
    );
    expect(screen.getByTestId('test-child')).toBeDefined();
    expect(screen.getByText('Test Child Content')).toBeDefined();
  });

  it('should not render change indicator when no change is provided', () => {
    render(<KpiCard {...defaultProps} />);
    // Should not find any arrow icons or change text
    expect(screen.queryByText('+')).toBeNull();
    expect(screen.queryByText('-')).toBeNull();
  });

  it('should render decrease change indicator correctly', () => {
    render(
      <KpiCard 
        {...defaultProps} 
        change="-5.2%" 
        changeType="decrease" 
      />
    );
    expect(screen.getByText('-5.2%')).toBeDefined();
  });

  it('should render neutral change indicator correctly', () => {
    render(
      <KpiCard 
        {...defaultProps} 
        change="0%" 
        changeType="neutral" 
      />
    );
    expect(screen.getByText('0%')).toBeDefined();
  });
});