import React from 'react';
import { ArrowRight, PlusCircle } from 'lucide-react';

interface HeroProps {
  onCreateRecipe: () => void;
}

const Hero = ({ onCreateRecipe }: HeroProps) => {
  return (
    <div className="container mx-auto px-4 py-16 relative">
      <div className="absolute inset-0 leaf-pattern opacity-10"></div>
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="lg:w-1/2">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            We provide the best Recipes for you
          </h1>
          <p className="text-gray-600 mb-8 text-lg leading-relaxed">
            Share Your Favorite Recipes. Tip: Browse through a vast collection of recipes from all over the world. Whether you're looking for quick weeknight dinners, decadent desserts, or healthy meals, you'll find it all here.
          </p>
          <div className="flex space-x-4">
            <button className="bg-gray-900 text-white px-8 py-4 rounded-lg flex items-center hover:bg-gray-800 transition-colors">
              Discover
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button
              onClick={onCreateRecipe}
              className="bg-orange-500 text-white px-8 py-4 rounded-lg flex items-center hover:bg-orange-600 transition-colors"
            >
              Create Recipe
              <PlusCircle className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
        <div className="lg:w-1/2 relative">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=600"
              alt="Delicious food"
              className="w-full h-[400px] object-cover"
            />
          </div>
          <div className="absolute -right-4 -bottom-4 w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1546069901-eacb567c5fdd?auto=format&fit=crop&q=80&w=200"
              alt="Food decoration"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;