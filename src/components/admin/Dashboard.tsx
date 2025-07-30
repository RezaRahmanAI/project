import React from 'react';
import { Package, Users, ShoppingCart, DollarSign, TrendingUp, Eye } from 'lucide-react';

export const Dashboard: React.FC = () => {
  const stats = [
    {
      title: 'Total Products',
      value: '248',
      change: '+12%',
      changeType: 'positive',
      icon: Package,
      color: 'bg-blue-500'
    },
    {
      title: 'Total Orders',
      value: '1,429',
      change: '+8%',
      changeType: 'positive',
      icon: ShoppingCart,
      color: 'bg-green-500'
    },
    {
      title: 'Total Users',
      value: '3,847',
      change: '+23%',
      changeType: 'positive',
      icon: Users,
      color: 'bg-purple-500'
    },
    {
      title: 'Revenue',
      value: '$89,432',
      change: '+15%',
      changeType: 'positive',
      icon: DollarSign,
      color: 'bg-yellow-500'
    }
  ];

  const recentOrders = [
    { id: '#1234', customer: 'John Doe', amount: '$129.99', status: 'Completed', date: '2024-01-15' },
    { id: '#1235', customer: 'Jane Smith', amount: '$89.50', status: 'Processing', date: '2024-01-15' },
    { id: '#1236', customer: 'Mike Johnson', amount: '$199.99', status: 'Shipped', date: '2024-01-14' },
    { id: '#1237', customer: 'Sarah Wilson', amount: '$79.99', status: 'Pending', date: '2024-01-14' },
  ];

  const topProducts = [
    { name: 'Premium Cotton T-Shirt', sales: 156, revenue: '$12,324' },
    { name: 'Vintage Denim Jacket', sales: 89, revenue: '$16,821' },
    { name: 'Cashmere Blend Sweater', sales: 76, revenue: '$19,684' },
    { name: 'Athletic Performance Hoodie', sales: 134, revenue: '$19,966' },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-2">Welcome to your admin dashboard</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
                  <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                  <div className="flex items-center mt-2">
                    <TrendingUp size={16} className="text-green-500 mr-1" />
                    <span className="text-sm text-green-600 font-medium">{stat.change}</span>
                    <span className="text-sm text-gray-500 ml-1">vs last month</span>
                  </div>
                </div>
                <div className={`${stat.color} p-3 rounded-xl`}>
                  <Icon size={24} className="text-white" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Orders */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Recent Orders</h2>
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
              View all
            </button>
          </div>
          <div className="space-y-4">
            {recentOrders.map((order) => (
              <div key={order.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div>
                  <p className="font-medium text-gray-900">{order.id}</p>
                  <p className="text-sm text-gray-600">{order.customer}</p>
                  <p className="text-xs text-gray-500">{order.date}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900">{order.amount}</p>
                  <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${
                    order.status === 'Completed' ? 'bg-green-100 text-green-800' :
                    order.status === 'Processing' ? 'bg-yellow-100 text-yellow-800' :
                    order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {order.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Products */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Top Products</h2>
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
              View all
            </button>
          </div>
          <div className="space-y-4">
            {topProducts.map((product, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div className="flex-1">
                  <p className="font-medium text-gray-900 mb-1">{product.name}</p>
                  <p className="text-sm text-gray-600">{product.sales} sales</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900">{product.revenue}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Eye size={14} className="mr-1" />
                    View
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};