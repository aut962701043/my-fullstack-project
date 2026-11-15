import React, { useState } from 'react'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
import { useSearchParams } from 'react-router-dom';

const Menu = () => {
    const[category,setCategory]=useState("All");
    const[searchParams]=useSearchParams();
    const search=searchParams.get('search')||"";
  return (
    <div className='menu-page'>
     
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category} search={search}/>
    </div>
  )
}

export default Menu

