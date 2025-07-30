import React from 'react';
import { ArrowRight, Star, Truck, Shield, RefreshCw } from 'lucide-react';

interface HeroProps {
  onShopNow: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onShopNow }) => {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                New Collection 2024
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                Elevate Your
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                  Style
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                Discover our curated collection of premium clothing that combines 
                timeless elegance with contemporary design. Fashion that speaks to your soul.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={onShopNow}
                className="group bg-white text-gray-900 px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 font-semibold text-lg shadow-xl"
              >
                Shop Collection
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-white/30 text-white px-8 py-4 rounded-xl hover:bg-white/10 hover:border-white/50 transition-all duration-300 font-semibold text-lg backdrop-blur-sm">
                View Lookbook
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">500+</div>
                <div className="text-gray-400 text-sm">Premium Items</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">50k+</div>
                <div className="text-gray-400 text-sm">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">4.9</div>
                <div className="text-gray-400 text-sm">Rating</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative aspect-[4/5] bg-gradient-to-br from-gray-200 to-gray-400 rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Fashion Model"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-2xl backdrop-blur-sm">
              <div className="text-sm text-gray-600 mb-1">Starting from</div>
              <div className="text-3xl font-bold text-gray-900">$79</div>
              <div className="text-sm text-green-600 font-medium">Free Shipping</div>
            </div>
            
            <div className="absolute -top-8 -right-8 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-xl">
              <div className="flex items-center gap-2 text-sm font-medium text-gray-900">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                2.3k+ sold today
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Bar */}
      <div className="border-t border-white/10 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center justify-center gap-3 text-white">
              <Truck className="w-5 h-5 text-gray-300" />
              <span className="text-sm font-medium">Free shipping over $100</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-white">
              <Shield className="w-5 h-5 text-gray-300" />
              <span className="text-sm font-medium">Secure payment</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-white">
              <RefreshCw className="w-5 h-5 text-gray-300" />
              <span className="text-sm font-medium">30-day returns</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};