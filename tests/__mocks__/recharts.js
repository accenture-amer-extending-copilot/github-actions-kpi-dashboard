// Mock recharts components for testing
const React = require('react');

const createMockComponent = (name) => {
  return React.forwardRef((props, ref) => {
    return React.createElement('div', {
      'data-testid': `mock-${name.toLowerCase()}`,
      ref,
      ...props
    }, props.children);
  });
};

module.exports = {
  LineChart: createMockComponent('LineChart'),
  Line: createMockComponent('Line'),
  XAxis: createMockComponent('XAxis'),
  YAxis: createMockComponent('YAxis'),
  CartesianGrid: createMockComponent('CartesianGrid'),
  Tooltip: createMockComponent('Tooltip'),
  ResponsiveContainer: createMockComponent('ResponsiveContainer'),
  Legend: createMockComponent('Legend'),
  PieChart: createMockComponent('PieChart'),
  Pie: createMockComponent('Pie'),
  Cell: createMockComponent('Cell')
};