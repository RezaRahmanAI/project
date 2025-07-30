import React from 'react';
import { Search, ShoppingBag, User, Menu, Heart } from 'lucide-react';
import { CartItem } from '../types';

interface HeaderProps {
  cartItems: CartItem[];
  onCartClick: () => void;
  onMenuClick: () => void;
  activeTab: string;
  onTabChange: (tab: string) => void;
  onAdminClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  cartItems, 
  onCartClick, 
  onMenuClick, 
  activeTab, 
  onTabChange,
  onAdminClick
}) => {
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'new-arrivals', label: 'New Arrivals' },
    { id: 'men', label: 'Men' },
    { id: 'women', label: 'Women' },
    { id: 'accessories', label: 'Accessories' },
    { id: 'sale', label: 'Sale' }
  ];

  return (
    <header className="bg-white/95 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={onMenuClick}
              className="lg:hidden p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all duration-200"
            >
              <Menu size={24} />
            </button>
            <button 
              onClick={() => onTabChange('home')}
              className="text-3xl font-bold text-gray-900 ml-2 lg:ml-0 hover:text-gray-700 transition-colors"
            >
              TiTO
            </button>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onTabChange(item.id)}
                className={`px-4 py-2 rounded-lg transition-all duration-200 font-medium ${
                  activeTab === item.id
                    ? 'text-gray-900 bg-gray-100'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-2">
            <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all duration-200">
              <Search size={20} />
            </button>
            <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all duration-200">
              <Heart size={20} />
            </button>
            <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all duration-200">
              <User size={20} />
            </button>
            <button 
              onClick={onAdminClick}
              className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all duration-200 text-sm font-medium"
            >
              Admin
            </button>
            <button 
              onClick={onCartClick}
              className="relative p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all duration-200"
            >
              <ShoppingBag size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-gray-900 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden border-t border-gray-200/50">
          <div className="flex overflow-x-auto py-4 space-x-1 scrollbar-hide">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onTabChange(item.id)}
                className={`whitespace-nowrap px-4 py-2 rounded-lg transition-all duration-200 font-medium text-sm ${
                  activeTab === item.id
                    ? 'text-gray-900 bg-gray-100'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};