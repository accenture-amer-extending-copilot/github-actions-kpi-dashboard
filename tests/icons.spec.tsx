import React from 'react';
import { render } from '@testing-library/react';
import { 
  CommitIcon, 
  PullRequestIcon, 
  ArrowUpIcon, 
  ArrowDownIcon, 
  MinusIcon, 
  InfoIcon,
  GithubIcon 
} from '../src/components/icons';

describe('Icon Components', () => {
  describe('CommitIcon', () => {
    it('should render with default props', () => {
      const { container } = render(<CommitIcon />);
      const svg = container.querySelector('svg');
      expect(svg).toBeDefined();
      expect(svg?.getAttribute('stroke')).toBe('currentColor');
    });

    it('should apply custom className', () => {
      const { container } = render(<CommitIcon className="custom-class" />);
      const svg = container.querySelector('svg');
      expect(svg?.className).toContain('custom-class');
    });
  });

  describe('PullRequestIcon', () => {
    it('should render with default props', () => {
      const { container } = render(<PullRequestIcon />);
      const svg = container.querySelector('svg');
      expect(svg).toBeDefined();
      expect(svg?.getAttribute('stroke')).toBe('currentColor');
    });

    it('should apply custom className', () => {
      const { container } = render(<PullRequestIcon className="pr-icon" />);
      const svg = container.querySelector('svg');
      expect(svg?.className).toContain('pr-icon');
    });
  });

  describe('ArrowUpIcon', () => {
    it('should render correctly', () => {
      const { container } = render(<ArrowUpIcon />);
      const svg = container.querySelector('svg');
      expect(svg).toBeDefined();
      expect(svg?.getAttribute('stroke')).toBe('currentColor');
    });

    it('should apply custom className', () => {
      const { container } = render(<ArrowUpIcon className="arrow-up" />);
      const svg = container.querySelector('svg');
      expect(svg?.className).toContain('arrow-up');
    });
  });

  describe('ArrowDownIcon', () => {
    it('should render correctly', () => {
      const { container } = render(<ArrowDownIcon />);
      const svg = container.querySelector('svg');
      expect(svg).toBeDefined();
      expect(svg?.getAttribute('stroke')).toBe('currentColor');
    });

    it('should apply custom className', () => {
      const { container } = render(<ArrowDownIcon className="arrow-down" />);
      const svg = container.querySelector('svg');
      expect(svg?.className).toContain('arrow-down');
    });
  });

  describe('MinusIcon', () => {
    it('should render correctly', () => {
      const { container } = render(<MinusIcon />);
      const svg = container.querySelector('svg');
      expect(svg).toBeDefined();
      expect(svg?.getAttribute('stroke')).toBe('currentColor');
    });

    it('should apply custom className', () => {
      const { container } = render(<MinusIcon className="minus-icon" />);
      const svg = container.querySelector('svg');
      expect(svg?.className).toContain('minus-icon');
    });
  });

  describe('InfoIcon', () => {
    it('should render correctly', () => {
      const { container } = render(<InfoIcon />);
      const svg = container.querySelector('svg');
      expect(svg).toBeDefined();
      expect(svg?.getAttribute('stroke')).toBe('currentColor');
    });

    it('should apply custom className', () => {
      const { container } = render(<InfoIcon className="info-icon" />);
      const svg = container.querySelector('svg');
      expect(svg?.className).toContain('info-icon');
    });
  });

  describe('GithubIcon', () => {
    it('should render correctly', () => {
      const { container } = render(<GithubIcon />);
      const svg = container.querySelector('svg');
      expect(svg).toBeDefined();
    });

    it('should apply custom className', () => {
      const { container } = render(<GithubIcon className="github-icon" />);
      const svg = container.querySelector('svg');
      expect(svg?.className).toContain('github-icon');
    });
  });

  // Test that all icons have the proper structure
  const iconComponents = [
    { name: 'CommitIcon', component: CommitIcon },
    { name: 'PullRequestIcon', component: PullRequestIcon },
    { name: 'ArrowUpIcon', component: ArrowUpIcon },
    { name: 'ArrowDownIcon', component: ArrowDownIcon },
    { name: 'MinusIcon', component: MinusIcon },
    { name: 'InfoIcon', component: InfoIcon },
    { name: 'GithubIcon', component: GithubIcon }
  ];

  iconComponents.forEach(({ name, component: Component }) => {
    describe(`${name} structure`, () => {
      it('should render as an SVG element', () => {
        const { container } = render(<Component />);
        const svg = container.querySelector('svg');
        expect(svg).toBeDefined();
        expect(svg?.tagName).toBe('svg');
      });

      it('should have the xmlns attribute', () => {
        const { container } = render(<Component />);
        const svg = container.querySelector('svg');
        expect(svg?.getAttribute('xmlns')).toBe('http://www.w3.org/2000/svg');
      });

      it('should have viewBox attribute', () => {
        const { container } = render(<Component />);
        const svg = container.querySelector('svg');
        expect(svg?.getAttribute('viewBox')).toBe('0 0 24 24');
      });
    });
  });
});