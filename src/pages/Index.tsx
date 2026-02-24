
import React, { useState, useEffect } from 'react';
import { useProductComparison } from '@/hooks/useProductComparison';
import { storeData } from '@/data';
import { useNutriStore } from '@/store/useNutriStore';
import HeroSection from '@/components/home/HeroSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import ComparisonSection from '@/components/home/ComparisonSection';
import CallToActionSection from '@/components/home/CallToActionSection';
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
  const [isBugReportOpen, setIsBugReportOpen] = useState(false);

  // Zustand Hydration Guard
  useEffect(() => {
    setIsLoading(false); // Data is loaded locally, no artificial delay
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

      <div className="w-full">
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
      </div>

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
