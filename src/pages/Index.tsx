
import React, { useState, useMemo, useEffect } from 'react';
import { storeData } from '@/data';
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
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('price-diff');
  const [comparisonFilter, setComparisonFilter] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isLoading, setIsLoading] = useState(true);
  const [isBugReportOpen, setIsBugReportOpen] = useState(false);

  // Simulate data loading
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Filter and search logic
  const filteredData = useMemo(() => {
    let filtered = storeData;

    // Apply search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(store => 
        store.name.toLowerCase().includes(query) ||
        store.location.toLowerCase().includes(query) ||
        store.products.some(product => 
          product.traditional.name.toLowerCase().includes(query) ||
          product.plantBased.name.toLowerCase().includes(query) ||
          product.traditional.brand?.toLowerCase().includes(query) ||
          product.plantBased.brand?.toLowerCase().includes(query)
        )
      );
    }

    // Apply category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(store =>
        store.products.some(product => product.category === selectedCategory)
      );
    }

    return filtered;
  }, [searchQuery, selectedCategory]);

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
