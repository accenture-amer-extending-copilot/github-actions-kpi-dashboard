import { 
  commitsPerWeek, 
  mergedPRsPerWeek,
  copilotAdoption,
  copilotAcceptanceRate 
} from '../src/data/mockData';

describe('Mock Data', () => {
  describe('commitsPerWeek', () => {
    it('should be an array', () => {
      expect(Array.isArray(commitsPerWeek)).toBe(true);
    });

    it('should contain trend data objects with name and value properties', () => {
      commitsPerWeek.forEach(item => {
        expect(typeof item.name).toBe('string');
        expect(typeof item.value).toBe('number');
        expect(item.value).toBeGreaterThan(0);
      });
    });

    it('should have at least one data point', () => {
      expect(commitsPerWeek.length).toBeGreaterThan(0);
    });

    it('should have consistent structure across all items', () => {
      const expectedKeys = ['name', 'value'];
      commitsPerWeek.forEach(item => {
        expect(Object.keys(item).sort()).toEqual(expectedKeys);
      });
    });
  });

  describe('mergedPRsPerWeek', () => {
    it('should be an array', () => {
      expect(Array.isArray(mergedPRsPerWeek)).toBe(true);
    });

    it('should contain trend data objects with name and value properties', () => {
      mergedPRsPerWeek.forEach(item => {
        expect(typeof item.name).toBe('string');
        expect(typeof item.value).toBe('number');
        expect(item.value).toBeGreaterThan(0);
      });
    });

    it('should have at least one data point', () => {
      expect(mergedPRsPerWeek.length).toBeGreaterThan(0);
    });

    it('should have consistent structure across all items', () => {
      const expectedKeys = ['name', 'value'];
      mergedPRsPerWeek.forEach(item => {
        expect(Object.keys(item).sort()).toEqual(expectedKeys);
      });
    });
  });

  describe('copilotAdoption', () => {
    it('should be an object with adoption metrics', () => {
      expect(typeof copilotAdoption).toBe('object');
      expect(copilotAdoption).not.toBeNull();
    });

    it('should have required properties', () => {
      expect(typeof copilotAdoption.enabledUsers).toBe('number');
      expect(typeof copilotAdoption.activeUsers).toBe('number');
      expect(typeof copilotAdoption.adoptionRate).toBe('number');
    });

    it('should have valid values', () => {
      expect(copilotAdoption.enabledUsers).toBeGreaterThanOrEqual(0);
      expect(copilotAdoption.activeUsers).toBeGreaterThanOrEqual(0);
      expect(copilotAdoption.adoptionRate).toBeGreaterThanOrEqual(0);
      expect(copilotAdoption.adoptionRate).toBeLessThanOrEqual(100);
    });

    it('should have logical relationship between enabled and active users', () => {
      expect(copilotAdoption.activeUsers).toBeLessThanOrEqual(copilotAdoption.enabledUsers);
    });
  });

  describe('copilotAcceptanceRate', () => {
    it('should be an array', () => {
      expect(Array.isArray(copilotAcceptanceRate)).toBe(true);
    });

    it('should contain usage data objects with required properties', () => {
      copilotAcceptanceRate.forEach(item => {
        expect(typeof item.name).toBe('string');
        expect(typeof item.value).toBe('number');
        expect(typeof item.acceptanceRate).toBe('number');
        expect(typeof item.suggestions).toBe('number');
        expect(typeof item.accepted).toBe('number');
      });
    });

    it('should have at least one data point', () => {
      expect(copilotAcceptanceRate.length).toBeGreaterThan(0);
    });

    it('should have valid acceptance rates', () => {
      copilotAcceptanceRate.forEach(item => {
        expect(item.acceptanceRate).toBeGreaterThanOrEqual(0);
        expect(item.acceptanceRate).toBeLessThanOrEqual(100);
      });
    });

    it('should have logical relationship between suggestions and accepted', () => {
      copilotAcceptanceRate.forEach(item => {
        expect(item.accepted).toBeLessThanOrEqual(item.suggestions);
      });
    });

    it('should have consistent structure across all items', () => {
      const expectedKeys = ['name', 'value', 'acceptanceRate', 'suggestions', 'accepted'];
      copilotAcceptanceRate.forEach(item => {
        expect(Object.keys(item).sort()).toEqual(expectedKeys.sort());
      });
    });
  });

  describe('Data consistency', () => {
    it('should have numeric values for all chart data', () => {
      const datasets = [commitsPerWeek, mergedPRsPerWeek, copilotAcceptanceRate];
      
      datasets.forEach(dataset => {
        dataset.forEach(item => {
          expect(typeof item.value).toBe('number');
          expect(isNaN(item.value)).toBe(false);
          expect(isFinite(item.value)).toBe(true);
        });
      });
    });

    it('should have string names for all chart data', () => {
      const datasets = [commitsPerWeek, mergedPRsPerWeek, copilotAcceptanceRate];
      
      datasets.forEach(dataset => {
        dataset.forEach(item => {
          expect(typeof item.name).toBe('string');
          expect(item.name.length).toBeGreaterThan(0);
        });
      });
    });
  });
});