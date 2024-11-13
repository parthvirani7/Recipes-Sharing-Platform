import React, { useState } from 'react';
import { ChefHat, Menu, X, Search, PlusCircle } from 'lucide-react';

interface NavbarProps {
  onCreateRecipe: () => void;
}

const Navbar = ({ onCreateRecipe }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#f5efe6] border-b border-orange-100/50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <ChefHat className="h-8 w-8 text-orange-500" />
            <span className="ml-2 text-xl font-semibold">New Taste</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            <a href="/" className="text-gray-800 hover:text-orange-500 font-medium">Home</a>
            <a href="/recipes" className="text-gray-800 hover:text-orange-500 font-medium">Recipes</a>
            <a href="/categories" className="text-gray-800 hover:text-orange-500 font-medium">Categories</a>
            <a href="/account" className="text-gray-800 hover:text-orange-500 font-medium">Account</a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="pl-10 pr-4 py-2 rounded-lg bg-white border border-gray-200 focus:outline-none focus:border-orange-500 w-48"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <button
              onClick={onCreateRecipe}
              className="bg-orange-500 text-white px-4 py-2 rounded-lg flex items-center hover:bg-orange-600 transition-colors"
            >
              <PlusCircle className="h-5 w-5 mr-2" />
              Create Recipe
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden rounded-lg p-2 hover:bg-gray-100 focus:outline-none"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <a href="/" className="text-gray-800 hover:text-orange-500">Home</a>
              <a href="/recipes" className="text-gray-800 hover:text-orange-500">Recipes</a>
              <a href="/categories" className="text-gray-800 hover:text-orange-500">Categories</a>
              <a href="/account" className="text-gray-800 hover:text-orange-500">Account</a>
              <div className="pt-4">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full pl-10 pr-4 py-2 rounded-lg bg-white border border-gray-200 focus:outline-none focus:border-orange-500"
                />
              </div>
              <button
                onClick={onCreateRecipe}
                className="bg-orange-500 text-white px-4 py-2 rounded-lg flex items-center hover:bg-orange-600 transition-colors"
              >
                <PlusCircle className="h-5 w-5 mr-2" />
                Create Recipe
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;