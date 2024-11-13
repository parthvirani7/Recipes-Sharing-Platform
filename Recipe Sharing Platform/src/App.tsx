import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import RecipeList from './components/RecipeList';
import CategorySection from './components/CategorySection';
import Footer from './components/Footer';
import AddRecipe from './components/AddRecipe';

function App() {
  const [showAddRecipe, setShowAddRecipe] = useState(false);

  return (
    <div className="min-h-screen bg-[#f5efe6]">
      <Navbar onCreateRecipe={() => setShowAddRecipe(true)} />
      
      {showAddRecipe ? (
        <AddRecipe onClose={() => setShowAddRecipe(false)} />
      ) : (
        <>
          <Hero onCreateRecipe={() => setShowAddRecipe(true)} />
          <RecipeList />
          <CategorySection />
        </>
      )}
      
      <Footer />
    </div>
  );
}

export default App;