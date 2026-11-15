import React, { useContext } from "react";
import { useState } from'react'
import './Navbar.css'
import {assets} from '../../assets/assets'
import {Link, useLocation, useNavigate} from 'react-router-dom';
import { StoreContext } from "../../context/StoreContext";
const Navbar =({setShowLogin}) =>{

  const[showSearch, setShowSearch]=useState(false);
  const[searchText, setSearchText]=useState("");

  const[menu, setMenu] = useState("home");
  const{getTotalCartAmount,token,setToken}=useContext(StoreContext)
  const location =useLocation();
  const navigate =useNavigate();

  const activeMenu =location.pathname ==='/menu'?'menu':location.pathname==='/'?'home':menu;
  const handleSearch  =(e)=>{
    if(e)e.preventDefault();
    if(!searchText.trim())return;
    navigate(`/menu?search=${searchText}`);
    setShowSearch(false);
    setSearchText("");
    window.scrollTo(0,0);
  }

  const logout =( )=>{
    localStorage.removeItem("token");
    setToken("");
    navigate("/")
  }
 
  return(
    <div className="navbar">
     <Link to='/'> <img src={assets.logo} alt="" className="logo"/></Link>
      <ul className="navbar-menu">
        <Link to='/' onClick={()=>{setMenu("home");navigate('/');window.scrollTo({top:0,behavior:'smooth'});}} className={activeMenu==="home"?"active" : ""}>home</Link>
        <a href='#explore-menu' onClick={()=>{setMenu("menu");navigate('/menu');window.scrollTo({top:0,behavior:'smooth'});}} className={activeMenu==="menu"?"active":""} >menu</a>
        <a href='#app-download' onClick={()=>{setMenu("mobile-app");navigate('/');setTimeout(()=>{document.getElementById('app-download')?.scrollIntoView({behavior:'smooth'});},100);}} className={activeMenu==="mobile-app"?"active":""}>mobile-app</a>
        <a href='#footer' onClick={()=>{setMenu("contact us");navigate('/'); setTimeout(()=>{document.getElementById('footer')?.scrollIntoView({behavior:'smooth'});},100);}} className={activeMenu==="contact us"?"active":""}  >contact us</a>
      </ul>
      <div className="navbar-right">
        {showSearch &&(
          <form onSubmit={handleSearch}style={{display:'inline'}}>
          <input
           type="text"
            placeholder="Search food" 
            value={searchText}
          onChange={(e)=>setSearchText(e.target.value)}
            autoFocus
        style={{padding:'8px',borderRadius:'20px',border:'1px solid #ccc',outline:'none',width:'180px'}}
      />
      </form>
       )}
        <img src={assets.search_icon} alt="search" onClick={()=>{
          if (showSearch && searchText.trim()) {
            handleSearch();
          }else{
            setShowSearch(!showSearch);
          }
        }
        }style={{cursor:'pointer'}}/>
        <div className="navbar-search-icon">
         <Link to='/cart'><img src={assets.basket_icon} alt=""/></Link>
          <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>
        {!token?<button onClick={()=>setShowLogin(true)}>sign in</button>
        :<div className="navbar-profile">
          <img src={assets.profile_icon} alt="" />
          <ul className="nav-profile-dropdown">
            <li onClick={()=>navigate('/myorders')}><img src={assets.bag_icon} alt=""/><p>Orders</p> </li>
            <hr/>
            <li onClick={logout}><img src={assets.logout_icon} alt=""/><p>Logout</p>  </li>


          </ul>
          </div>}
        
      </div>
    </div>
  )
}
export default Navbar