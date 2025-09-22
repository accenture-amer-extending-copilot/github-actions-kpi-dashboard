// Simple Jasmine tests to demonstrate the testing framework

// Setup JSDOM for browser environment
if (typeof document === 'undefined') {
  const { JSDOM } = require('jsdom');
  const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>');
  global.window = dom.window;
  global.document = dom.window.document;
  global.HTMLElement = dom.window.HTMLElement;
  global.Element = dom.window.Element;
}

describe('Basic Application Tests', function() {
  
  describe('Math operations', function() {
    it('should add two numbers correctly', function() {
      expect(2 + 2).toBe(4);
    });

    it('should multiply numbers correctly', function() {
      expect(3 * 4).toBe(12);
    });

    it('should handle division', function() {
      expect(10 / 2).toBe(5);
    });
  });

  describe('String operations', function() {
    it('should concatenate strings', function() {
      var result = 'Hello' + ' ' + 'World';
      expect(result).toBe('Hello World');
    });

    it('should check string length', function() {
      expect('JavaScript'.length).toBe(10);
    });

    it('should convert to uppercase', function() {
      expect('hello'.toUpperCase()).toBe('HELLO');
    });
  });

  describe('Array operations', function() {
    it('should create an array with correct length', function() {
      var arr = [1, 2, 3, 4, 5];
      expect(arr.length).toBe(5);
    });

    it('should find element in array', function() {
      var arr = ['apple', 'banana', 'orange'];
      expect(arr.indexOf('banana')).toBe(1);
    });

    it('should push elements to array', function() {
      var arr = [];
      arr.push('first');
      arr.push('second');
      expect(arr.length).toBe(2);
      expect(arr[0]).toBe('first');
      expect(arr[1]).toBe('second');
    });
  });

  describe('Object operations', function() {
    it('should create object with properties', function() {
      var obj = {
        name: 'Test',
        value: 42
      };
      expect(obj.name).toBe('Test');
      expect(obj.value).toBe(42);
    });

    it('should add properties to object', function() {
      var obj = {};
      obj.newProperty = 'new value';
      expect(obj.newProperty).toBe('new value');
    });
  });

  describe('Application mock data validation', function() {
    // Simulate testing mock data structure
    it('should validate trend data structure', function() {
      var sampleTrendData = [
        { name: 'Week 1', value: 120 },
        { name: 'Week 2', value: 150 },
        { name: 'Week 3', value: 130 }
      ];

      expect(Array.isArray(sampleTrendData)).toBe(true);
      expect(sampleTrendData.length).toBe(3);
      expect(sampleTrendData[0].name).toBe('Week 1');
      expect(sampleTrendData[0].value).toBe(120);
    });

    it('should validate pie chart data structure', function() {
      var samplePieData = [
        { name: 'JavaScript', value: 28, fill: '#1464A0' },
        { name: 'Python', value: 18, fill: '#5BBDF0' }
      ];

      expect(Array.isArray(samplePieData)).toBe(true);
      expect(samplePieData.length).toBe(2);
      expect(samplePieData[0]).toEqual(jasmine.objectContaining({
        name: jasmine.any(String),
        value: jasmine.any(Number),
        fill: jasmine.any(String)
      }));
    });

    it('should validate KPI card properties', function() {
      var kpiProps = {
        title: 'Test Metric',
        metric: '123',
        change: '+12.5%',
        changeType: 'increase',
        status: 'good',
        tooltip: 'Test tooltip'
      };

      expect(kpiProps.title).toBeDefined();
      expect(kpiProps.metric).toBeDefined();
      expect(kpiProps.tooltip).toBeDefined();
      expect(['increase', 'decrease', 'neutral']).toContain(kpiProps.changeType);
      expect(['good', 'warning', 'danger']).toContain(kpiProps.status);
    });
  });

  describe('DOM manipulation basics', function() {
    it('should create and manipulate DOM elements', function() {
      var div = document.createElement('div');
      div.className = 'test-class';
      div.textContent = 'Test Content';
      
      expect(div.tagName).toBe('DIV');
      expect(div.className).toBe('test-class');
      expect(div.textContent).toBe('Test Content');
    });

    it('should set and get attributes', function() {
      var input = document.createElement('input');
      input.setAttribute('type', 'text');
      input.setAttribute('placeholder', 'Enter value');
      
      expect(input.getAttribute('type')).toBe('text');
      expect(input.getAttribute('placeholder')).toBe('Enter value');
    });
  });

  describe('CSS class validation', function() {
    it('should validate Tailwind CSS classes format', function() {
      var validClasses = [
        'bg-background',
        'text-text-primary',
        'border-status-good',
        'hover:transform',
        'md:grid-cols-2',
        'lg:grid-cols-4'
      ];

      validClasses.forEach(function(className) {
        // Updated regex to handle numbers in class names
        expect(className).toMatch(/^[a-z0-9-]+:[a-z0-9-]+$|^[a-z0-9-]+$/);
        expect(className.length).toBeGreaterThan(0);
      });
    });

    it('should validate status classes', function() {
      var statusClasses = {
        good: 'border-status-good',
        warning: 'border-status-warning',
        danger: 'border-status-danger'
      };

      expect(Object.keys(statusClasses)).toEqual(['good', 'warning', 'danger']);
      expect(statusClasses.good).toContain('status-good');
      expect(statusClasses.warning).toContain('status-warning');
      expect(statusClasses.danger).toContain('status-danger');
    });
  });
});