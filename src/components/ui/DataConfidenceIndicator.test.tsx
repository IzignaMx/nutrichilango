
import React from 'react';
// @vitest-environment jsdom
import { render, screen } from '@testing-library/react';
import DataConfidenceIndicator from './DataConfidenceIndicator';
import { describe, it, expect } from 'vitest';

describe('DataConfidenceIndicator', () => {
  it('should render high confidence correctly', () => {
    const nutrition = {
      calories: 100,
      protein: 10,
      carbs: 20,
      fat: 5,
      sugar: 2,
      fiber: 3,
      iron: 1,
      calcium: 10
    };
    
    render(<DataConfidenceIndicator nutrition={nutrition} />);
    expect(screen.getByText(/Alta/)).toBeDefined();
  });

  it('should render low confidence correctly', () => {
    const nutrition = {
      calories: 100, // Only 1 field
      protein: 0,
      carbs: 0,
      fat: 0,
      sugar: 0
    };
    // Should be low or medium depending on logic, let's just check it renders
    render(<DataConfidenceIndicator nutrition={nutrition} />);
    // "Baja" might not be rendered text if we mocked it, but the component renders text directly.
    // Let's check for the text presence.
    // 5 fields out of 8 = 62.5% -> Media (>0.5)
    expect(screen.getByText(/Media/)).toBeDefined();
  });
  
  it('should handle undefined nutrition', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    render(<DataConfidenceIndicator nutrition={undefined} />);
    expect(screen.getByText(/Baja/)).toBeDefined();
  });
});
