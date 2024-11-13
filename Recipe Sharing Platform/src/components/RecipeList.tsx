import React, { useState } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import RecipeCard from './RecipeCard';

interface Recipe {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  cookingTime: number;
  calories: number;
}

const dummyRecipes: Recipe[] = [
  {
    id: 1,
    title: 'Lumpia with Sauce',
    description: 'Crispy lumpia filled with meat, paired with tangy, flavorful sauce.',
    image: 'https://images.unsplash.com/photo-1625398407796-82650a8c135f?auto=format&fit=crop&q=80&w=400',
    category: 'Appetizer',
    cookingTime: 30,
    calories: 250
  },
  {
    id: 2,
    title: 'Fish and Veggie',
    description: 'Fresh fish and veggies, a nutritious and delicious meal option.',
    image: 'https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?auto=format&fit=crop&q=80&w=400',
    category: 'Main Course',
    cookingTime: 45,
    calories: 380
  },
  // Add more dummy recipes as needed
];

const RecipeList = () => {
  const [recipes, setRecipes] = useState<Recipe[]>(dummyRecipes);
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('newest');

  const filteredRecipes = recipes
    .filter(recipe => {
      const matchesSearch = recipe.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || recipe.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.title.localeCompare(b.title);
        case 'time':
          return a.cookingTime - b.cookingTime;
        case 'calories':
          return a.calories - b.calories;
        default:
          return b.id - a.id; // newest first
      }
    });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div className="relative flex-1 max-w-md">
          <input
            type="text"
            placeholder="Search recipes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
        
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 hover:border-orange-500 transition-colors"
        >
          <SlidersHorizontal className="h-5 w-5" />
          Filters
        </button>
      </div>

      {showFilters && (
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
              >
                <option value="all">All Categories</option>
                <option value="Appetizer">Appetizer</option>
                <option value="Main Course">Main Course</option>
                <option value="Dessert">Dessert</option>
                <option value="Beverage">Beverage</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
              >
                <option value="newest">Newest First</option>
                <option value="name">Name</option>
                <option value="time">Cooking Time</option>
                <option value="calories">Calories</option>
              </select>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredRecipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            title={recipe.title}
            description={recipe.description}
            image={recipe.image}
          />
        ))}
      </div>
    </div>
  );
};

export default RecipeList;