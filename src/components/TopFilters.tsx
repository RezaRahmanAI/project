import React, { useState } from 'react';
import { ChevronDown, Filter, X, SlidersHorizontal } from 'lucide-react';

interface TopFiltersProps {
  categories: string[];
  brands: string[];
  selectedCategory: string;
  selectedBrand: string;
  priceRange: [number, number];
  sortBy: string;
  onCategoryChange: (category: string) => void;
  onBrandChange: (brand: string) => void;
  onPriceRangeChange: (range: [number, number]) => void;
  onSortChange: (sort: string) => void;
  resultCount: number;
}

export const TopFilters: React.FC<TopFiltersProps> = ({
  categories,
  brands,
  selectedCategory,
  selectedBrand,
  priceRange,
  sortBy,
  onCategoryChange,
  onBrandChange,
  onPriceRangeChange,
  onSortChange,
  resultCount
}) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'newest', label: 'Newest' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'rating', label: 'Highest Rated' }
  ];

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const closeDropdowns = () => {
    setOpenDropdown(null);
  };

  const hasActiveFilters = selectedCategory !== 'All' || selectedBrand !== 'All' || priceRange[0] !== 0 || priceRange[1] !== 500;

  const clearAllFilters = () => {
    onCategoryChange('All');
    onBrandChange('All');
    onPriceRangeChange([0, 500]);
    onSortChange('featured');
    closeDropdowns();
  };

  return (
    <>
      {/* Backdrop */}
      {openDropdown && (
        <div 
          className="fixed inset-0 z-30" 
          onClick={closeDropdowns}
        />
      )}

      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          {/* Left side - Filters */}
          <div className="flex flex-wrap items-center gap-4">
            {/* Category Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('category')}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border transition-all duration-200 ${
                  selectedCategory !== 'All' 
                    ? 'bg-gray-900 text-white border-gray-900' 
                    : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'
                }`}
              >
                <Filter size={16} />
                <span className="font-medium">
                  {selectedCategory === 'All' ? 'Category' : selectedCategory}
                </span>
                <ChevronDown 
                  size={16} 
                  className={`transition-transform ${openDropdown === 'category' ? 'rotate-180' : ''}`} 
                />
              </button>
              
              {openDropdown === 'category' && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-200 z-40 py-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => {
                        onCategoryChange(category);
                        closeDropdowns();
                      }}
                      className={`w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors ${
                        selectedCategory === category ? 'bg-gray-100 text-gray-900 font-medium' : 'text-gray-700'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Brand Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('brand')}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border transition-all duration-200 ${
                  selectedBrand !== 'All' 
                    ? 'bg-gray-900 text-white border-gray-900' 
                    : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'
                }`}
              >
                <span className="font-medium">
                  {selectedBrand === 'All' ? 'Brand' : selectedBrand}
                </span>
                <ChevronDown 
                  size={16} 
                  className={`transition-transform ${openDropdown === 'brand' ? 'rotate-180' : ''}`} 
                />
              </button>
              
              {openDropdown === 'brand' && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-200 z-40 py-2 max-h-64 overflow-y-auto">
                  {brands.map((brand) => (
                    <button
                      key={brand}
                      onClick={() => {
                        onBrandChange(brand);
                        closeDropdowns();
                      }}
                      className={`w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors ${
                        selectedBrand === brand ? 'bg-gray-100 text-gray-900 font-medium' : 'text-gray-700'
                      }`}
                    >
                      {brand}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Price Range Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('price')}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border transition-all duration-200 ${
                  priceRange[0] !== 0 || priceRange[1] !== 500
                    ? 'bg-gray-900 text-white border-gray-900' 
                    : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'
                }`}
              >
                <span className="font-medium">
                  {priceRange[0] === 0 && priceRange[1] === 500 
                    ? 'Price' 
                    : `$${priceRange[0]} - $${priceRange[1]}`
                  }
                </span>
                <ChevronDown 
                  size={16} 
                  className={`transition-transform ${openDropdown === 'price' ? 'rotate-180' : ''}`} 
                />
              </button>
              
              {openDropdown === 'price' && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-200 z-40 p-6">
                  <h4 className="font-semibold text-gray-900 mb-4">Price Range</h4>
                  <div className="space-y-4">
                    <div className="px-2">
                      <input
                        type="range"
                        min="0"
                        max="500"
                        value={priceRange[1]}
                        onChange={(e) => onPriceRangeChange([priceRange[0], parseInt(e.target.value)])}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-600">$</span>
                        <input
                          type="number"
                          value={priceRange[0]}
                          onChange={(e) => onPriceRangeChange([parseInt(e.target.value) || 0, priceRange[1]])}
                          className="w-20 px-3 py-2 border border-gray-300 rounded-lg text-sm"
                          min="0"
                          max="500"
                        />
                      </div>
                      <span className="text-gray-400">to</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-600">$</span>
                        <input
                          type="number"
                          value={priceRange[1]}
                          onChange={(e) => onPriceRangeChange([priceRange[0], parseInt(e.target.value) || 500])}
                          className="w-20 px-3 py-2 border border-gray-300 rounded-lg text-sm"
                          min="0"
                          max="500"
                        />
                      </div>
                    </div>
                    <div className="flex gap-2 pt-2">
                      <button
                        onClick={() => {
                          onPriceRangeChange([0, 500]);
                          closeDropdowns();
                        }}
                        className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        Reset
                      </button>
                      <button
                        onClick={closeDropdowns}
                        className="flex-1 px-3 py-2 text-sm bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                      >
                        Apply
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Clear Filters */}
            {hasActiveFilters && (
              <button
                onClick={clearAllFilters}
                className="flex items-center gap-2 px-4 py-2.5 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <X size={16} />
                <span className="text-sm font-medium">Clear all</span>
              </button>
            )}
          </div>

          {/* Right side - Sort and Results */}
          <div className="flex items-center justify-between lg:justify-end gap-6">
            <div className="text-sm text-gray-600">
              <span className="font-medium text-gray-900">{resultCount}</span> {resultCount === 1 ? 'item' : 'items'}
            </div>

            {/* Sort Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('sort')}
                className="flex items-center gap-2 px-4 py-2.5 bg-white text-gray-700 border border-gray-300 rounded-xl hover:border-gray-400 transition-all duration-200"
              >
                <SlidersHorizontal size={16} />
                <span className="font-medium">
                  {sortOptions.find(option => option.value === sortBy)?.label}
                </span>
                <ChevronDown 
                  size={16} 
                  className={`transition-transform ${openDropdown === 'sort' ? 'rotate-180' : ''}`} 
                />
              </button>
              
              {openDropdown === 'sort' && (
                <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-200 z-40 py-2">
                  {sortOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => {
                        onSortChange(option.value);
                        closeDropdowns();
                      }}
                      className={`w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors ${
                        sortBy === option.value ? 'bg-gray-100 text-gray-900 font-medium' : 'text-gray-700'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #1f2937;
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }
        
        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #1f2937;
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </>
  );
};