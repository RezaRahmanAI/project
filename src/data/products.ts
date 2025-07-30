import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Cotton T-Shirt',
    price: 79,
    originalPrice: 99,
    images: [
      'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'T-Shirts',
    brand: 'Urban Essentials',
    description: 'Crafted from 100% organic cotton, this premium t-shirt offers unmatched comfort and style.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black', 'White', 'Gray', 'Navy'],
    rating: 4.8,
    reviews: 124,
    isSale: true,
    isNew: true
  },
  {
    id: '2',
    name: 'Vintage Denim Jacket',
    price: 189,
    images: [
      'https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Jackets',
    brand: 'Heritage Denim',
    description: 'Classic vintage-inspired denim jacket with modern fit and premium construction.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Light Blue', 'Dark Blue', 'Black'],
    rating: 4.9,
    reviews: 89,
    isNew: true
  },
  {
    id: '3',
    name: 'Slim Fit Chinos',
    price: 129,
    images: [
      'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Pants',
    brand: 'Modern Fit',
    description: 'Versatile slim-fit chinos perfect for both casual and business casual occasions.',
    sizes: ['28', '30', '32', '34', '36'],
    colors: ['Khaki', 'Navy', 'Black', 'Olive'],
    rating: 4.7,
    reviews: 203
  },
  {
    id: '4',
    name: 'Cashmere Blend Sweater',
    price: 259,
    images: [
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Sweaters',
    brand: 'Luxury Knits',
    description: 'Luxurious cashmere blend sweater with superior softness and warmth.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Cream', 'Charcoal', 'Burgundy'],
    rating: 4.9,
    reviews: 76,
    isNew: true
  },
  {
    id: '5',
    name: 'Athletic Performance Hoodie',
    price: 149,
    images: [
      'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Hoodies',
    brand: 'Active Wear',
    description: 'High-performance hoodie with moisture-wicking technology and ergonomic design.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'Gray', 'Navy', 'Forest Green'],
    rating: 4.6,
    reviews: 158
  },
  {
    id: '6',
    name: 'Tailored Blazer',
    price: 349,
    images: [
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Blazers',
    brand: 'Formal Elegance',
    description: 'Perfectly tailored blazer crafted from premium wool blend for sophisticated style.',
    sizes: ['36', '38', '40', '42', '44'],
    colors: ['Navy', 'Charcoal', 'Black'],
    rating: 4.8,
    reviews: 94
  },
  {
    id: '7',
    name: 'Silk Blouse',
    price: 199,
    originalPrice: 249,
    images: [
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'T-Shirts',
    brand: 'Elegant Essentials',
    description: 'Luxurious silk blouse with elegant draping and timeless appeal.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Ivory', 'Black', 'Blush', 'Navy'],
    rating: 4.7,
    reviews: 156,
    isSale: true
  },
  {
    id: '8',
    name: 'Leather Crossbody Bag',
    price: 299,
    images: [
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Accessories',
    brand: 'Luxury Leather',
    description: 'Handcrafted leather crossbody bag with premium hardware and timeless design.',
    sizes: ['One Size'],
    colors: ['Black', 'Brown', 'Tan'],
    rating: 4.9,
    reviews: 89,
    isNew: true
  }
];

export const categories = ['All', 'T-Shirts', 'Jackets', 'Pants', 'Sweaters', 'Hoodies', 'Blazers', 'Accessories'];
export const brands = ['All', 'Urban Essentials', 'Heritage Denim', 'Modern Fit', 'Luxury Knits', 'Active Wear', 'Formal Elegance', 'Elegant Essentials', 'Luxury Leather'];