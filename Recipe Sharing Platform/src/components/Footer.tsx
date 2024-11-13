import React from 'react';
import { ChefHat, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white mt-16 border-t border-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <ChefHat className="h-8 w-8 text-orange-500" />
              <span className="ml-2 text-xl font-semibold">New Taste</span>
            </div>
            <p className="text-gray-600">
              New Taste is the ultimate community for food lovers. Whether you're a seasoned chef or just starting in the kitchen, New Taste is the perfect place to discover new recipes, share your culinary creations, and connect with fellow food enthusiasts.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">NAVIGATION</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-600 hover:text-orange-500">Home</a></li>
              <li><a href="/recipes" className="text-gray-600 hover:text-orange-500">Recipe</a></li>
              <li><a href="/categories" className="text-gray-600 hover:text-orange-500">Categories</a></li>
              <li><a href="/account" className="text-gray-600 hover:text-orange-500">Account</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">RECIPES</h3>
            <ul className="space-y-2">
              <li><a href="/recipes/fish" className="text-gray-600 hover:text-orange-500">Fish & Veggies</a></li>
              <li><a href="/recipes/tofu" className="text-gray-600 hover:text-orange-500">Tofu Chili</a></li>
              <li><a href="/recipes/egg" className="text-gray-600 hover:text-orange-500">Egg & Cucumber</a></li>
              <li><a href="/recipes/lumpia" className="text-gray-600 hover:text-orange-500">Lumpia w/Sauce</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">FOLLOW US</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-orange-500">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-orange-500">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-orange-500">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-100 text-center text-gray-600">
          <p>© 2024 New Taste. All Right Reserved.</p>
          <div className="mt-2 space-x-4">
            <a href="/terms" className="hover:text-orange-500">Terms of Service</a>
            <a href="/privacy" className="hover:text-orange-500">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;