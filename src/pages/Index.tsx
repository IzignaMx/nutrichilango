
import React, { useState, useEffect } from 'react';
import { useProductComparison } from '@/hooks/useProductComparison';
import { storeData } from '@/data';
import { useNutriStore } from '@/store/useNutriStore';
import HeroSection from '@/components/home/HeroSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import ComparisonSection from '@/components/home/ComparisonSection';
import CallToActionSection from '@/components/home/CallToActionSection';
import PriceDateBanner from '@/components/ui/price-date-banner';
import FloatingActionButton from '@/components/ui/floating-action-button';
import BugReportModal from '@/components/ui/bug-report-modal';
import { Bug } from 'lucide-react';

const Index: React.FC = () => {
  const { 
    searchQuery, 
    setSearchQuery, 
    selectedCategory, 
    setSelectedCategory, 
    comparisonFilter, 
    setComparisonFilter,
    sortBy,
    setSortBy,
    resetFilters
  } = useNutriStore();

  const [isLoading, setIsLoading] = useState(true);
  const [hasHydrated, setHasHydrated] = useState(false);
  const [isBugReportOpen, setIsBugReportOpen] = useState(false);

  // Zustand Hydration Guard
  useEffect(() => {
    setHasHydrated(true);
  }, []);

  // Simulate data loading
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Filter and search logic using custom hook
  const { filteredData } = useProductComparison(storeData);

  const handleScrollToComparisons = () => {
    const element = document.getElementById('comparisons');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-primary-lighter to-background">
      <HeroSection onScrollToComparisons={handleScrollToComparisons} />
      
      <FeaturesSection />

      <TestimonialsSection />

      <main id="main-content">
        <ComparisonSection
          filteredData={filteredData}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          sortBy={sortBy}
          setSortBy={setSortBy}
          comparisonFilter={comparisonFilter}
          setComparisonFilter={setComparisonFilter}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          onResetFilters={resetFilters}
          isLoading={isLoading}
        />
        
        <div className="container mx-auto max-w-7xl px-4 pb-12">
          <CallToActionSection />
        </div>
      </main>

      <FloatingActionButton
        onClick={() => setIsBugReportOpen(true)}
        icon={<Bug className="w-6 h-6" />}
        label="Reportar un problema"
      />
      
      <BugReportModal
        isOpen={isBugReportOpen}
        onClose={() => setIsBugReportOpen(false)}
      />
    </div>
  );
};

export default Index;
