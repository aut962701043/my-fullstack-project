import React from 'react'
import './FoodDisplay.css'
import {StoreContext} from '../../context/StoreContext'
import { useContext } from 'react'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = ( {category,search} ) => {
    const {food_list}=useContext(StoreContext)
   
  return (
    <div className='food-display' id='food-display'>
        <h2>Top dishes near you</h2> 
        <div className='food-display-list'>
            {food_list.map((item,index)=>{
                if(category==="All" || category===item.category){
                    if (
                        search&&!item.name.toLowerCase().includes(search.toLowerCase())&&!( item.category ||"").toLowerCase().includes(search.toLowerCase())
                    ) {
                        return null;
                    }
                         return(<FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>);
                }

               return null;
            })}
        </div>     
    </div>
  )
}

export default FoodDisplay

