// Test setup for React components
import { configure } from '@testing-library/react';

// Configure testing library
configure({ testIdAttribute: 'data-testid' });

// Mock DOM methods that might not be available in test environment
if (typeof window !== 'undefined') {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: (query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: () => {},
      removeListener: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => {},
    }),
  });

  // Mock ResizeObserver
  global.ResizeObserver = class ResizeObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
  };
}

// Simple mock for recharts components
const createMockComponent = (name: string) => {
  return function MockComponent(props: any) {
    const div = document.createElement('div');
    div.setAttribute('data-testid', `mock-${name.toLowerCase()}`);
    div.textContent = name;
    return div;
  };
};

// Set up global mocks for external dependencies
declare global {
  var jest: any;
}

// Simple jest-like mock functionality for Jasmine
if (typeof global.jest === 'undefined') {
  global.jest = {
    fn: () => jasmine.createSpy(),
    mock: () => ({})
  };
}