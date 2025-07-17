// Accessibility utilities

/**
 * Formats currency for screen readers with proper pronunciation
 */
export const formatCurrencyForScreenReader = (amount: number): string => {
  return `${amount.toFixed(2)} pesos mexicanos`
}

/**
 * Formats percentage for screen readers
 */
export const formatPercentageForScreenReader = (percentage: number): string => {
  const rounded = Math.round(percentage)
  return `${rounded} por ciento`
}

/**
 * Formats large numbers for screen readers
 */
export const formatLargeNumberForScreenReader = (number: number): string => {
  if (number >= 1000000) {
    return `${(number / 1000000).toFixed(1)} millones`
  }
  if (number >= 1000) {
    return `${(number / 1000).toFixed(0)} mil`
  }
  return number.toString()
}

/**
 * Creates accessible labels for comparison data
 */
export const createComparisonLabel = (
  traditional: string,
  plantBased: string,
  savings: number
): string => {
  return `Comparación: ${traditional} versus ${plantBased}. Ahorro de ${formatCurrencyForScreenReader(savings)}`
}

/**
 * Generates accessible description for charts
 */
export const generateChartDescription = (
  chartType: string,
  dataPoints: number,
  trend?: 'increasing' | 'decreasing' | 'stable'
): string => {
  let description = `Gráfico de ${chartType} con ${dataPoints} puntos de datos.`
  
  if (trend) {
    const trendText = {
      increasing: 'tendencia creciente',
      decreasing: 'tendencia decreciente',
      stable: 'tendencia estable'
    }
    description += ` Muestra una ${trendText[trend]}.`
  }
  
  return description
}

/**
 * Focus management utility
 */
export const focusElement = (elementId: string): void => {
  const element = document.getElementById(elementId)
  if (element) {
    element.focus()
  }
}

/**
 * Announces dynamic content changes to screen readers
 */
export const announceToScreenReader = (message: string): void => {
  const announcement = document.createElement('div')
  announcement.setAttribute('aria-live', 'polite')
  announcement.setAttribute('aria-atomic', 'true')
  announcement.className = 'sr-only'
  announcement.textContent = message
  
  document.body.appendChild(announcement)
  
  // Remove after announcement
  setTimeout(() => {
    document.body.removeChild(announcement)
  }, 1000)
}