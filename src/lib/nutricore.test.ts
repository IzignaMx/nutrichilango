import { describe, it, expect } from 'vitest';
import { calculateHealthScore, calculateDataConfidence, calculatePriceDiff, IDR } from './nutricore';

describe('NutriCore Engine', () => {
  describe('calculateHealthScore', () => {
    it('should return 50 for empty nutrition (neutral baseline)', () => {
      const score = calculateHealthScore({ calories: 0, protein: 0, carbs: 0, fat: 0, sugar: 0, fiber: 0 });
      expect(score).toBe(50);
    });

    it('should reward high protein and fiber', () => {
      // 10g protein (10*10=100) + 5g fiber (5*5=25) = 125
      // Base 50 + 125 = 175 -> clamped to 100
      const score = calculateHealthScore({ calories: 100, protein: 10, carbs: 10, fat: 0, sugar: 0, fiber: 5 });
      expect(score).toBe(100);
    });

    it('should penalize high sugar and fat', () => {
      // 20g sugar (20*-2=-40) + 10g fat (10*-1=-10) = -50
      // Base 50 - 50 = 0
      const score = calculateHealthScore({ calories: 200, protein: 0, carbs: 20, fat: 10, sugar: 20, fiber: 0 });
      expect(score).toBe(0);
    });

    it('should handle mixed values correctly', () => {
      // Protein 5 (50), Fiber 2 (10) = +60
      // Sugar 5 (-10), Fat 2 (-2) = -12
      // Base 50 + 60 - 12 = 98
      const score = calculateHealthScore({ calories: 100, protein: 5, carbs: 10, fat: 2, sugar: 5, fiber: 2 });
      expect(score).toBe(98);
    });
  });

  describe('calculateDataConfidence', () => {
    it('should return 0 for undefined nutrition', () => {
      expect(calculateDataConfidence(undefined)).toBe(0);
    });

    it('should return 1.0 for fully complete data', () => {
      const fullData = {
        calories: 100, protein: 10, carbs: 10, fat: 5, sugar: 2, 
        fiber: 3, iron: 10, calcium: 100 
      };
      expect(calculateDataConfidence(fullData)).toBe(1);
    });

    it('should return partial score for missing optional fields', () => {
      // 8 total fields. 6 present (missing iron, calcium)
      // 6/8 = 0.75
      const partialData = {
        calories: 100, protein: 10, carbs: 10, fat: 5, sugar: 2, fiber: 3
      };
      expect(calculateDataConfidence(partialData)).toBe(0.75);
    });
  });

  describe('calculatePriceDiff', () => {
    it('should calculate accurate percentage difference', () => {
      // (150 - 100) / 100 = 0.5 -> 50%
      expect(calculatePriceDiff(100, 150)).toBe(50);
    });

    it('should handle cheaper plant-based options', () => {
      // (80 - 100) / 100 = -0.2 -> -20%
      expect(calculatePriceDiff(100, 80)).toBe(-20);
    });

    it('should return 0 if traditional price is 0 or negative', () => {
      expect(calculatePriceDiff(0, 100)).toBe(0);
    });
  });
});
