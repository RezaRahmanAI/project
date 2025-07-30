import React, { useState } from 'react';
import { Plus, Edit, Trash2, Search } from 'lucide-react';

interface Brand {
  id: string;
  name: string;
  description: string;
  logo?: string;
  productCount: number;
}

interface BrandManagementProps {
  brands: Brand[];
  onAddBrand: (brand: Omit<Brand, 'id' | 'productCount'>) => void;
  onUpdateBrand: (id: string, brand: Partial<Brand>) => void;
  onDeleteBrand: (id: string) => void;
}

export const BrandManagement: React.FC<BrandManagementProps> = ({
  brands,
  onAddBrand,
  onUpdateBrand,
  onDeleteBrand
}) => {
  const [showForm, setShowForm] = useState(false);
  const [editingBrand, setEditingBrand] = useState<Brand | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    logo: ''
  });

  const filteredBrands = brands.filter(brand =>
    brand.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingBrand) {
      onUpdateBrand(editingBrand.id, formData);
    } else {
      onAddBrand(formData);
    }
    
    setShowForm(false);
    setEditingBrand(null);
    setFormData({ name: '', description: '', logo: '' });
  };

  const handleEdit = (brand: Brand) => {
    setEditingBrand(brand);
    setFormData({
      name: brand.name,
      description: brand.description,
      logo: brand.logo || ''
    });
    setShowForm(true);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this brand?')) {
      onDeleteBrand(id);
    }
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingBrand(null);
    setFormData({ name: '', description: '', logo: '' });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Brands</h1>
          <p className="text-gray-600 mt-1">Manage product brands</p>
        </div>
        <button
          onClick={() => setShowForm(true)}
          className="bg-gray-900 text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-colors flex items-center gap-2 font-medium"
        >
          <Plus size={20} />
          Add Brand
        </button>
      </div>

      {/* Search */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
        <div className="relative">
          <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search brands..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent"
          />
        </div>
      </div>

      {/* Brands Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBrands.map((brand) => (
          <div key={brand.id} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  {brand.logo && (
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="w-10 h-10 object-cover rounded-lg"
                    />
                  )}
                  <h3 className="text-lg font-semibold text-gray-900">{brand.name}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-3">{brand.description}</p>
                <p className="text-sm text-gray-500">{brand.productCount} products</p>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => handleEdit(brand)}
                  className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                >
                  <Edit size={16} />
                </button>
                <button
                  onClick={() => handleDelete(brand.id)}
                  className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredBrands.length === 0 && (
        <div className="bg-white rounded-2xl p-12 shadow-sm border border-gray-200 text-center">
          <p className="text-gray-500">No brands found</p>
        </div>
      )}

      {/* Brand Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-900">
                {editingBrand ? 'Edit Brand' : 'Add New Brand'}
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Brand Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  rows={3}
                  value={formData.description}
                  onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Logo URL
                </label>
                <input
                  type="url"
                  value={formData.logo}
                  onChange={(e) => setFormData(prev => ({ ...prev, logo: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                />
              </div>

              <div className="flex justify-end gap-3 pt-4">
                <button
                  type="button"
                  onClick={handleCancel}
                  className="px-4 py-2 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-colors"
                >
                  {editingBrand ? 'Update' : 'Create'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};