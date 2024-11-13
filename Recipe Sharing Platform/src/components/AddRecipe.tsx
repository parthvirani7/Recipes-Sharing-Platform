import React, { useState } from 'react';
import { Upload, X, Plus } from 'lucide-react';

interface RecipeForm {
  title: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  cookingTime: number;
  servings: number;
  category: string;
  calories: number;
  image: File | null;
  previewUrl: string;
}

const initialForm: RecipeForm = {
  title: '',
  description: '',
  ingredients: [''],
  instructions: [''],
  cookingTime: 30,
  servings: 4,
  category: '',
  calories: 0,
  image: null,
  previewUrl: '',
};

const AddRecipe = () => {
  const [form, setForm] = useState<RecipeForm>(initialForm);
  const [dragActive, setDragActive] = useState(false);

  const handleImageUpload = (file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setForm(prev => ({
        ...prev,
        image: file,
        previewUrl: reader.result as string
      }));
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleImageUpload(e.dataTransfer.files[0]);
    }
  };

  const handleIngredientChange = (index: number, value: string) => {
    const newIngredients = [...form.ingredients];
    newIngredients[index] = value;
    setForm(prev => ({ ...prev, ingredients: newIngredients }));
  };

  const handleInstructionChange = (index: number, value: string) => {
    const newInstructions = [...form.instructions];
    newInstructions[index] = value;
    setForm(prev => ({ ...prev, instructions: newInstructions }));
  };

  const addIngredient = () => {
    setForm(prev => ({ ...prev, ingredients: [...prev.ingredients, ''] }));
  };

  const addInstruction = () => {
    setForm(prev => ({ ...prev, instructions: [...prev.instructions, ''] }));
  };

  const removeIngredient = (index: number) => {
    if (form.ingredients.length > 1) {
      const newIngredients = form.ingredients.filter((_, i) => i !== index);
      setForm(prev => ({ ...prev, ingredients: newIngredients }));
    }
  };

  const removeInstruction = (index: number) => {
    if (form.instructions.length > 1) {
      const newInstructions = form.instructions.filter((_, i) => i !== index);
      setForm(prev => ({ ...prev, instructions: newInstructions }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Recipe submitted:', form);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <form onSubmit={handleSubmit} className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-8">Create New Recipe</h2>

        {/* Image Upload */}
        <div className="mb-8">
          <div
            className={`border-2 border-dashed rounded-2xl p-8 text-center ${
              dragActive ? 'border-orange-500 bg-orange-50' : 'border-gray-300'
            }`}
            onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
            onDragLeave={() => setDragActive(false)}
            onDrop={handleDrop}
          >
            {form.previewUrl ? (
              <div className="relative">
                <img
                  src={form.previewUrl}
                  alt="Recipe preview"
                  className="max-h-[300px] mx-auto rounded-lg"
                />
                <button
                  type="button"
                  onClick={() => setForm(prev => ({ ...prev, image: null, previewUrl: '' }))}
                  className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-full hover:bg-red-600"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            ) : (
              <div>
                <Upload className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                <p className="text-gray-600">Drag and drop your recipe image here or</p>
                <label className="mt-2 inline-block cursor-pointer text-orange-500 hover:text-orange-600">
                  <span>Browse files</span>
                  <input
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={(e) => {
                      if (e.target.files?.[0]) {
                        handleImageUpload(e.target.files[0]);
                      }
                    }}
                  />
                </label>
              </div>
            )}
          </div>
        </div>

        {/* Basic Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Recipe Name</label>
            <input
              type="text"
              value={form.title}
              onChange={(e) => setForm(prev => ({ ...prev, title: e.target.value }))}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
              placeholder="Enter recipe name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
            <select
              value={form.category}
              onChange={(e) => setForm(prev => ({ ...prev, category: e.target.value }))}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
            >
              <option value="">Select category</option>
              <option value="breakfast">Breakfast</option>
              <option value="lunch">Lunch</option>
              <option value="dinner">Dinner</option>
              <option value="dessert">Dessert</option>
              <option value="snack">Snack</option>
            </select>
          </div>
        </div>

        {/* Description */}
        <div className="mb-8">
          <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
          <textarea
            value={form.description}
            onChange={(e) => setForm(prev => ({ ...prev, description: e.target.value }))}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
            rows={3}
            placeholder="Describe your recipe"
          />
        </div>

        {/* Ingredients */}
        <div className="mb-8">
          <label className="block text-sm font-medium text-gray-700 mb-4">Ingredients</label>
          {form.ingredients.map((ingredient, index) => (
            <div key={index} className="flex gap-2 mb-2">
              <input
                type="text"
                value={ingredient}
                onChange={(e) => handleIngredientChange(index, e.target.value)}
                className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                placeholder="Add ingredient"
              />
              <button
                type="button"
                onClick={() => removeIngredient(index)}
                className="p-2 text-red-500 hover:text-red-600"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addIngredient}
            className="mt-2 flex items-center text-orange-500 hover:text-orange-600"
          >
            <Plus className="h-4 w-4 mr-1" />
            Add Ingredient
          </button>
        </div>

        {/* Instructions */}
        <div className="mb-8">
          <label className="block text-sm font-medium text-gray-700 mb-4">Instructions</label>
          {form.instructions.map((instruction, index) => (
            <div key={index} className="flex gap-2 mb-2">
              <div className="flex-none w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 font-medium">
                {index + 1}
              </div>
              <input
                type="text"
                value={instruction}
                onChange={(e) => handleInstructionChange(index, e.target.value)}
                className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                placeholder="Add instruction step"
              />
              <button
                type="button"
                onClick={() => removeInstruction(index)}
                className="p-2 text-red-500 hover:text-red-600"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addInstruction}
            className="mt-2 flex items-center text-orange-500 hover:text-orange-600"
          >
            <Plus className="h-4 w-4 mr-1" />
            Add Instruction
          </button>
        </div>

        {/* Additional Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Cooking Time (minutes)</label>
            <input
              type="number"
              value={form.cookingTime}
              onChange={(e) => setForm(prev => ({ ...prev, cookingTime: parseInt(e.target.value) }))}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
              min="0"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Servings</label>
            <input
              type="number"
              value={form.servings}
              onChange={(e) => setForm(prev => ({ ...prev, servings: parseInt(e.target.value) }))}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
              min="1"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Calories</label>
            <input
              type="number"
              value={form.calories}
              onChange={(e) => setForm(prev => ({ ...prev, calories: parseInt(e.target.value) }))}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
              min="0"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors"
          >
            Post Recipe
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRecipe;