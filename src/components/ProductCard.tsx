import React, { useState } from 'react';
import { Heart, Star, ShoppingBag, Eye } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onQuickView: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart, onQuickView }) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
      {/* Product Image */}
      <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
        <img 
          src={product.images[0]} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {product.isNew && (
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 text-xs font-bold rounded-full shadow-lg">
              NEW
            </span>
          )}
          {product.isSale && (
            <span className="bg-gradient-to-r from-red-500 to-pink-600 text-white px-3 py-1 text-xs font-bold rounded-full shadow-lg">
              SALE
            </span>
          )}
        </div>

        {/* Wishlist */}
        <button 
          onClick={() => setIsLiked(!isLiked)}
          className="absolute top-4 right-4 p-3 bg-white/90 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110 shadow-lg"
        >
          <Heart 
            size={16} 
            className={`transition-colors ${isLiked ? 'text-red-500 fill-current' : 'text-gray-600'}`} 
          />
        </button>

        {/* Quick Actions */}
        <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
          <button 
            onClick={() => onQuickView(product)}
            className="flex-1 bg-white/95 backdrop-blur-sm text-gray-900 py-3 px-4 rounded-xl text-sm font-semibold hover:bg-white transition-all duration-200 flex items-center justify-center gap-2 shadow-lg"
          >
            <Eye size={16} />
            Quick View
          </button>
          <button 
            onClick={() => onAddToCart(product)}
            className="flex-1 bg-gray-900/95 backdrop-blur-sm text-white py-3 px-4 rounded-xl text-sm font-semibold hover:bg-gray-900 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg"
          >
            <ShoppingBag size={16} />
            Add to Cart
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-6 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500 font-medium">{product.brand}</span>
          <div className="flex items-center gap-1">
            <Star size={14} className="text-yellow-400 fill-current" />
            <span className="text-sm text-gray-600 font-medium">{product.rating}</span>
            <span className="text-xs text-gray-400">({product.reviews})</span>
          </div>
        </div>
        
        <h3 className="font-semibold text-gray-900 line-clamp-2 text-lg leading-tight">
          {product.name}
        </h3>
        
        <div className="flex items-center gap-3">
          <span className="text-xl font-bold text-gray-900">${product.price}</span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
          )}
          {product.originalPrice && (
            <span className="text-sm text-green-600 font-semibold">
              {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
            </span>
          )}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <div className="flex -space-x-1">
              {product.colors.slice(0, 3).map((color, index) => (
                <div 
                  key={index}
                  className="w-5 h-5 rounded-full border-2 border-white shadow-sm"
                  style={{ 
                    backgroundColor: color.toLowerCase() === 'white' ? '#f3f4f6' : 
                                   color.toLowerCase() === 'black' ? '#1f2937' :
                                   color.toLowerCase() === 'gray' ? '#6b7280' :
                                   color.toLowerCase() === 'navy' ? '#1e3a8a' :
                                   color.toLowerCase() === 'brown' ? '#92400e' :
                                   color.toLowerCase() === 'tan' ? '#d2b48c' :
                                   color.toLowerCase()
                  }}
                />
              ))}
            </div>
            {product.colors.length > 3 && (
              <span className="text-xs text-gray-500 ml-2">+{product.colors.length - 3}</span>
            )}
          </div>
          <div className="text-xs text-gray-500">
            {product.sizes.length} sizes
          </div>
        </div>
      </div>
    </div>
  );
};