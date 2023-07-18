import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';


// to dynamically set a variable that holds all the categories within the data
// we map through all the items in the data array to get the category key
// const allCategories = items.map((item) => item.category)

// then to get all the unique categories, we use the set function
// const allCategories = new Set(items.map((item) => item.category))

// then to format it into an array that includes 'all' we use the spread operator'...' to include the set
// const allCategories = ['all',...new Set(items.map((item) => item.category))]


const allCategories = ['all',...new Set(items.map((item) => item.category))]
console.log(allCategories)


function App() {
  // ---------- States -----------
  const [menuItems, setMenuItems] = useState(items)
  const [categories, setCategories] = useState(allCategories)


  // --------- Filter Function --------
  const filterItems = (category) =>{
    // to reset/show all categories
    if(category === 'all'){
      setMenuItems(items)
      return;
    }

    // using filter method to see if the category key in the data matches with the category specified by user
    const newItems = items.filter((item)=> item.category === category)
    setMenuItems(newItems)
  }

  return (
  <main>
    <section className="menu section">
      <div className="title">
        <h2>Our Menu</h2>
        <div className="underline"></div>
      </div>
      <Categories categories={categories} filterItems={filterItems}/>
      <Menu items={menuItems}/>
    </section>
  </main>
  );
}

export default App;
