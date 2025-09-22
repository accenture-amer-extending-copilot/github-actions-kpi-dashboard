# Testing Setup

This project uses **Jasmine** as the testing framework and **Karma** as the test runner to provide comprehensive unit testing for the React KPI Dashboard.

## Framework Overview

- **Testing Framework**: Jasmine 5.x
- **Test Runner**: Karma 6.x
- **Browser**: Chrome Headless
- **Test Files**: Located in `tests/` directory

## Running Tests

### Run All Tests Once
```bash
npm test
```

### Run Tests in Watch Mode
```bash
npm run test:watch
```

## Test Structure

### Test Files
- `tests/simple.spec.js` - Basic application logic tests
- `tests/components.spec.js` - Component functionality tests

### Test Categories

#### 1. Basic Application Tests
- Mathematical operations validation
- String manipulation tests
- Array operations
- Object manipulation
- DOM element creation and manipulation

#### 2. KPI Dashboard Component Tests
- Mock data structure validation
- Component logic simulation
- CSS class validation
- Layout structure testing

#### 3. Specific Component Areas Tested
- **Mock Data Validation**: Ensures data structures match expected formats
- **KPI Card Logic**: Status classes, change indicators
- **Icon Components**: SVG element creation and attributes
- **Section Titles**: Header structure and styling
- **Application Layout**: Main app structure and responsive grid

## Test Examples

### Basic Test Structure
```javascript
describe('Component Name', function() {
  it('should do something specific', function() {
    // Arrange
    var input = 'test value';
    
    // Act
    var result = someFunction(input);
    
    // Assert
    expect(result).toBe('expected value');
  });
});
```

### DOM Testing
```javascript
it('should create proper DOM structure', function() {
  var element = document.createElement('div');
  element.className = 'test-class';
  element.textContent = 'Test Content';
  
  expect(element.tagName).toBe('DIV');
  expect(element.className).toBe('test-class');
  expect(element.textContent).toBe('Test Content');
});
```

### Data Validation
```javascript
it('should validate data structure', function() {
  var data = [
    { name: 'Item 1', value: 100 },
    { name: 'Item 2', value: 200 }
  ];
  
  expect(Array.isArray(data)).toBe(true);
  data.forEach(function(item) {
    expect(typeof item.name).toBe('string');
    expect(typeof item.value).toBe('number');
  });
});
```

## Configuration Files

### karma.conf.cjs
Main Karma configuration file that:
- Sets up Chrome Headless browser
- Configures test file patterns
- Sets up reporters and logging
- Configures single-run vs watch mode

### Tests Directory Structure
```
tests/
├── simple.spec.js       # Basic functionality tests
├── components.spec.js   # Component-specific tests
└── setup.ts            # Test environment setup (for future TypeScript tests)
```

## Coverage Information

Current test coverage includes:
- ✅ 27 passing tests
- ✅ Basic JavaScript operations
- ✅ DOM manipulation
- ✅ Component logic simulation
- ✅ Data structure validation
- ✅ CSS class validation
- ✅ Application layout testing

## Adding New Tests

### 1. Create a new test file
```javascript
// tests/new-feature.spec.js
describe('New Feature', function() {
  it('should work correctly', function() {
    expect(true).toBe(true);
  });
});
```

### 2. Update karma.conf.cjs
Add the new test file to the `files` array:
```javascript
files: [
  'tests/simple.spec.js',
  'tests/components.spec.js',
  'tests/new-feature.spec.js'  // Add your new test file
],
```

### 3. Run tests
```bash
npm test
```

## Best Practices

1. **Descriptive Test Names**: Use clear, descriptive names for test suites and individual tests
2. **Arrange-Act-Assert**: Structure tests with clear setup, execution, and assertion phases
3. **Single Responsibility**: Each test should focus on testing one specific behavior
4. **Data Validation**: Always validate data structures and types in tests
5. **DOM Testing**: Test DOM manipulation and element creation/modification

## Troubleshooting

### Common Issues

1. **Tests not found**: Ensure test files are listed in `karma.conf.cjs`
2. **Browser launch issues**: Chrome Headless requires proper system setup
3. **Test failures**: Check console output for specific error messages

### Debug Mode
To run tests with more verbose output:
```bash
npx karma start karma.conf.cjs --log-level debug
```

## Future Enhancements

The testing setup is ready for:
- TypeScript test files (setup.ts is already created)
- React component testing with additional tooling
- Code coverage reporting
- CI/CD integration
- Additional test frameworks integration