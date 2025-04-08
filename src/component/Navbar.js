import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {
    const Menulist = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'H&M Home', 'Sale', '지속가능성']

  return (
    <div>
        <div >
        <div className="login-button">
      <FontAwesomeIcon icon={faUser} />
      <div>로그인</div>
      
    </div>
        </div>
  
     <div className="nav-section">
     <img width={100} src = "https://upload.wikimedia.org/wikipedia/commons/5/53/H%26M-Logo.svg"/>
     </div>

 <div className="menu-area">
     <ul className="menu-list"> 
{Menulist.map((menu,index) => (
    <li key={index}>{menu}</li>
    ))}
     </ul>

     <div className="search-box">
     <FontAwesomeIcon icon={faSearch} />
     <input className="search-input" type="text"/>
        </div> 
 </div> 
 </div> 
 )
}

export default Navbar
