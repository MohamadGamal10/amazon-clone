import React from 'react'
import '../assets/style/header.css'
import { Link } from 'react-router-dom'
import Logo from '../assets/images/header-logo.png'
import searchIcon from '../assets/images/icons/searchIcon.png'
import shoppingCart from '../assets/images/icons/shopping-cart.png'
import { useAuth } from '../context/GlobalState'
import { auth } from '../firebase'

export default function Header() {
  const { basket , user } = useAuth();

  console.log(user)

  const handleLogout = () => {
      auth.signOut();
  };
 
  return (
    <div className="header">
      <Link to="/">
        <img className="header-logo" src={Logo} alt="logo-img" />
      </Link>
      <div className="header-search">
        <input className="header-searchInput" type="text" />
        <img className="header-searchIcon" src={searchIcon} alt="search-icon" />
      </div>
      <div className="header-nav">
        <Link to={ !user && "/login"}>
          <div onClick={handleLogout} className="header-option" >
            <span className="header-optionLineOne">
              Hello {user ? `${user.email}` : "Guest"}
            </span>
            <span className="header-optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link to="/orders">
          <div className="header-option">
            <span className="header-optionLineOne">Returns</span>
            <span className="header-optionLineTwo">& Orders</span>
          </div>
        </Link>
        <div className="header-option">
          <span className="header-optionLineOne">Your</span>
          <span className="header-optionLineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header-optionBasket">
            <img src={shoppingCart} alt='cart-icon'/>
            <span className="header-optionLineTwo header-basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    
    </div>
  )
}
