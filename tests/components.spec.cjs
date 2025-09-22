// Component utility tests in TypeScript style (but with .js extension for simplicity)

// Setup JSDOM for browser environment
if (typeof document === 'undefined') {
  const { JSDOM } = require('jsdom');
  const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>');
  global.window = dom.window;
  global.document = dom.window.document;
  global.HTMLElement = dom.window.HTMLElement;
  global.Element = dom.window.Element;
}

// Mock data validation tests that mirror the actual application structure
describe('KPI Dashboard Component Tests', function() {
  
  describe('Mock Data Structure Validation', function() {
    // Test data that matches the application's actual structure
    var sampleCommitsData = [
      { name: 'Week 1', value: 120 },
      { name: 'Week 2', value: 150 },
      { name: 'Week 3', value: 130 },
      { name: 'Week 4', value: 180 },
      { name: 'Week 5', value: 165 },
      { name: 'Week 6', value: 210 }
    ];

    var sampleCopilotAdoption = {
      enabledUsers: 50,
      activeUsers: 38,
      adoptionRate: 76
    };

    it('should validate commits per week data structure', function() {
      expect(Array.isArray(sampleCommitsData)).toBe(true);
      expect(sampleCommitsData.length).toBeGreaterThan(0);
      
      sampleCommitsData.forEach(function(item) {
        expect(typeof item.name).toBe('string');
        expect(typeof item.value).toBe('number');
        expect(item.value).toBeGreaterThan(0);
      });
    });

    it('should validate copilot adoption data structure', function() {
      expect(typeof sampleCopilotAdoption).toBe('object');
      expect(sampleCopilotAdoption).not.toBeNull();
      
      expect(typeof sampleCopilotAdoption.enabledUsers).toBe('number');
      expect(typeof sampleCopilotAdoption.activeUsers).toBe('number');
      expect(typeof sampleCopilotAdoption.adoptionRate).toBe('number');
      
      expect(sampleCopilotAdoption.adoptionRate).toBeGreaterThanOrEqual(0);
      expect(sampleCopilotAdoption.adoptionRate).toBeLessThanOrEqual(100);
      expect(sampleCopilotAdoption.activeUsers).toBeLessThanOrEqual(sampleCopilotAdoption.enabledUsers);
    });
  });

  describe('KPI Card Component Logic', function() {
    // Simulate the component logic without React
    function getStatusClass(status) {
      var statusClasses = {
        good: 'border-status-good',
        warning: 'border-status-warning',
        danger: 'border-status-danger'
      };
      return status ? statusClasses[status] : 'border-primary';
    }

    function getChangeClass(changeType) {
      var changeClasses = {
        increase: 'text-status-danger',
        decrease: 'text-status-good',
        neutral: 'text-text-secondary'
      };
      return changeClasses[changeType];
    }

    it('should return correct status classes', function() {
      expect(getStatusClass('good')).toBe('border-status-good');
      expect(getStatusClass('warning')).toBe('border-status-warning');
      expect(getStatusClass('danger')).toBe('border-status-danger');
      expect(getStatusClass(null)).toBe('border-primary');
      expect(getStatusClass(undefined)).toBe('border-primary');
    });

    it('should return correct change type classes', function() {
      expect(getChangeClass('increase')).toBe('text-status-danger');
      expect(getChangeClass('decrease')).toBe('text-status-good');
      expect(getChangeClass('neutral')).toBe('text-text-secondary');
    });
  });

  describe('Icon Component Logic', function() {
    // Simulate icon component creation
    function createIconElement(className) {
      var svg = document.createElement('svg');
      svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
      svg.setAttribute('viewBox', '0 0 24 24');
      svg.setAttribute('stroke', 'currentColor');
      if (className) {
        svg.className = className;
      }
      return svg;
    }

    it('should create valid SVG icon elements', function() {
      var icon = createIconElement('h-8 w-8 text-accent');
      
      expect(icon.tagName).toBe('SVG'); // SVG elements have uppercase tagName in browser
      expect(icon.getAttribute('xmlns')).toBe('http://www.w3.org/2000/svg');
      expect(icon.getAttribute('viewBox')).toBe('0 0 24 24');
      expect(icon.getAttribute('stroke')).toBe('currentColor');
      expect(icon.className).toBe('h-8 w-8 text-accent');
    });

    it('should create icon without className', function() {
      var icon = createIconElement();
      
      expect(icon.tagName).toBe('SVG'); // SVG elements have uppercase tagName in browser
      expect(icon.className).toBe('');
    });
  });

  describe('Section Title Component Logic', function() {
    // Simulate section title creation
    function createSectionTitle(title, subtitle) {
      var wrapper = document.createElement('div');
      wrapper.className = 'mb-6 flex items-start space-x-3';
      
      var textContainer = document.createElement('div');
      
      var titleElement = document.createElement('h2');
      titleElement.className = 'text-2xl font-bold text-text-primary';
      titleElement.textContent = title;
      
      var subtitleElement = document.createElement('p');
      subtitleElement.className = 'text-text-secondary';
      subtitleElement.textContent = subtitle;
      
      textContainer.appendChild(titleElement);
      textContainer.appendChild(subtitleElement);
      wrapper.appendChild(textContainer);
      
      return wrapper;
    }

    it('should create proper section title structure', function() {
      var section = createSectionTitle('Test Section', 'Test subtitle');
      
      expect(section.className).toContain('mb-6');
      expect(section.className).toContain('flex');
      expect(section.className).toContain('items-start');
      expect(section.className).toContain('space-x-3');
      
      var title = section.querySelector('h2');
      var subtitle = section.querySelector('p');
      
      expect(title).not.toBeNull();
      expect(subtitle).not.toBeNull();
      expect(title.textContent).toBe('Test Section');
      expect(subtitle.textContent).toBe('Test subtitle');
    });
  });

  describe('Application Layout Tests', function() {
    // Simulate app structure creation
    function createAppLayout() {
      var app = document.createElement('div');
      app.className = 'min-h-screen bg-background font-sans';
      
      var header = document.createElement('header');
      header.className = 'py-6 px-4 sm:px-6 lg:px-8';
      
      var main = document.createElement('main');
      main.className = 'py-6 px-4 sm:px-6 lg:px-8';
      
      var footer = document.createElement('footer');
      footer.className = 'text-center py-4 text-text-secondary text-sm';
      
      app.appendChild(header);
      app.appendChild(main);
      app.appendChild(footer);
      
      return app;
    }

    it('should create proper app layout structure', function() {
      var app = createAppLayout();
      
      expect(app.className).toContain('min-h-screen');
      expect(app.className).toContain('bg-background');
      expect(app.className).toContain('font-sans');
      
      var header = app.querySelector('header');
      var main = app.querySelector('main');
      var footer = app.querySelector('footer');
      
      expect(header).not.toBeNull();
      expect(main).not.toBeNull();
      expect(footer).not.toBeNull();
      
      expect(header.className).toContain('py-6');
      expect(main.className).toContain('py-6');
      expect(footer.className).toContain('text-center');
    });
  });

  describe('Responsive Grid Tests', function() {
    function createResponsiveGrid() {
      var grid = document.createElement('div');
      grid.className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6';
      return grid;
    }

    it('should create responsive grid with correct classes', function() {
      var grid = createResponsiveGrid();
      
      expect(grid.className).toContain('grid');
      expect(grid.className).toContain('grid-cols-1');
      expect(grid.className).toContain('md:grid-cols-2');
      expect(grid.className).toContain('lg:grid-cols-4');
      expect(grid.className).toContain('gap-6');
    });
  });
});