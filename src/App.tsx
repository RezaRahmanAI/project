import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductGrid } from './components/ProductGrid';
import { TopFilters } from './components/TopFilters';
import { Cart } from './components/Cart';
import { ProductModal } from './components/ProductModal';
import { Footer } from './components/Footer';
import { products, categories, brands } from './data/products';
import { Product, CartItem } from './types';

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  
  // Filter states
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedBrand, setSelectedBrand] = useState('All');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500]);
  const [sortBy, setSortBy] = useState('featured');

  // Filter products based on active tab and filters
  const filteredProducts = useMemo(() => {
    let filtered = products.filter(product => {
      const categoryMatch = selectedCategory === 'All' || product.category === selectedCategory;
      const brandMatch = selectedBrand === 'All' || product.brand === selectedBrand;
      const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1];
      
      return categoryMatch && brandMatch && priceMatch;
    });

    // Apply tab-specific filtering
    switch (activeTab) {
      case 'home':
        break; // Show all products on home
      case 'new-arrivals':
        filtered = filtered.filter(product => product.isNew);
        break;
      case 'men':
        filtered = filtered.filter(product => 
          ['T-Shirts', 'Jackets', 'Pants', 'Hoodies', 'Blazers'].includes(product.category)
        );
        break;
      case 'women':
        filtered = filtered.filter(product => 
          ['Sweaters', 'Jackets', 'T-Shirts'].includes(product.category)
        );
        break;
      case 'accessories':
        filtered = filtered.filter(product => 
          product.category === 'Accessories'
        );
        break;
      case 'sale':
        filtered = filtered.filter(product => product.isSale);
        break;
    }

    // Apply sorting
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      default:
        // Keep original order for 'featured'
        break;
    }

    return filtered;
  }, [selectedCategory, selectedBrand, priceRange, activeTab, sortBy]);

  const handleAddToCart = (product: Product, size?: string, color?: string) => {
    const defaultSize = size || product.sizes[0];
    const defaultColor = color || product.colors[0];
    
    setCartItems(prev => {
      const existingItem = prev.find(item => 
        item.product.id === product.id && 
        item.size === defaultSize && 
        item.color === defaultColor
      );
      
      if (existingItem) {
        return prev.map(item =>
          item.product.id === product.id && 
          item.size === defaultSize && 
          item.color === defaultColor
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      
      return [...prev, {
        product,
        quantity: 1,
        size: defaultSize,
        color: defaultColor
      }];
    });
  };

  const handleUpdateQuantity = (itemId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(itemId);
      return;
    }
    
    setCartItems(prev =>
      prev.map(item => {
        const currentItemId = `${item.product.id}-${item.size}-${item.color}`;
        return currentItemId === itemId ? { ...item, quantity } : item;
      })
    );
  };

  const handleRemoveItem = (itemId: string) => {
    setCartItems(prev =>
      prev.filter(item => {
        const currentItemId = `${item.product.id}-${item.size}-${item.color}`;
        return currentItemId !== itemId;
      })
    );
  };

  const handleQuickView = (product: Product) => {
    setSelectedProduct(product);
    setIsProductModalOpen(true);
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    // Reset filters when changing tabs for better UX
    setSelectedCategory('All');
    setSelectedBrand('All');
    setPriceRange([0, 500]);
    setSortBy('featured');
  };

  const getTabTitle = () => {
    switch (activeTab) {
      case 'home':
        return 'Featured Products';
      case 'new-arrivals':
        return 'New Arrivals';
      case 'men':
        return "Men's Collection";
      case 'women':
        return "Women's Collection";
      case 'accessories':
        return 'Accessories';
      case 'sale':
        return 'Sale Items';
      default:
        return 'All Products';
    }
  };

  const showHero = activeTab === 'home';

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        cartItems={cartItems}
        onCartClick={() => setIsCartOpen(true)}
        onMenuClick={() => {}}
        activeTab={activeTab}
        onTabChange={handleTabChange}
      />
      
      {showHero && <Hero onShopNow={() => setActiveTab('new-arrivals')} />}
      
      <main className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${showHero ? 'py-16' : 'py-8'}`}>
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            {getTabTitle()}
          </h1>
          <p className="text-lg text-gray-600">
            Discover our curated collection of premium fashion
          </p>
        </div>

        {/* Top Filters */}
        <TopFilters
          categories={categories}
          brands={brands}
          selectedCategory={selectedCategory}
          selectedBrand={selectedBrand}
          priceRange={priceRange}
          sortBy={sortBy}
          onCategoryChange={setSelectedCategory}
          onBrandChange={setSelectedBrand}
          onPriceRangeChange={setPriceRange}
          onSortChange={setSortBy}
          resultCount={filteredProducts.length}
        />

        {/* Products */}
        <div className="mt-8">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-2xl shadow-sm">
              <div className="text-gray-400 mb-6">
                <svg className="mx-auto h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2 2v-5m16 0h-2M4 13h2m13-8V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v1M7 8h10" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">No products found</h3>
              <p className="text-gray-600 mb-8 max-w-md mx-auto">
                We couldn't find any products matching your current filters. Try adjusting your search criteria.
              </p>
              <button 
                onClick={() => {
                  setSelectedCategory('All');
                  setSelectedBrand('All');
                  setPriceRange([0, 500]);
                  setSortBy('featured');
                }}
                className="bg-gray-900 text-white px-8 py-3 rounded-xl hover:bg-gray-800 transition-colors font-medium"
              >
                Clear All Filters
              </button>
            </div>
          ) : (
            <ProductGrid
              products={filteredProducts}
              onAddToCart={handleAddToCart}
              onQuickView={handleQuickView}
            />
          )}
        </div>
      </main>

      <Footer />

      {/* Cart Sidebar */}
      <Cart
        items={cartItems}
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />

      {/* Product Modal */}
      <ProductModal
        product={selectedProduct}
        isOpen={isProductModalOpen}
        onClose={() => setIsProductModalOpen(false)}
        onAddToCart={handleAddToCart}
      />
    </div>
  );
}

export default App;