import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import Login from '../page/Login'



const Navbar = ({ authenticate, setAuthenticate }) => {
    const Menulist = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'H&M Home', 'Sale', '지속가능성']

    let [width, setWidth] = useState(0);
    const navigate = useNavigate();
    const goToLogin = ()=>{
navigate("/Login");
    };

    const logout = () => {
      setAuthenticate(false);
      navigate("/");
    };

    const search = (event) => {
if (event.key === "Enter"){
  let keyword = event.target.value
  navigate(`/?q=${keyword}`)
    }
  }
  
  return (
    <div>
      <div className="side-menu d-block d-md-none" style={{ width: width }}>
        <button className="closebtn" onClick={() => setWidth(0)}>
          &times;
        </button>
        <div className="side-menu-list" id="menu-list">
          {Menulist.map((menu, index) => (
            <button key={index}>{menu}</button>
          ))}
        </div>
      </div>
      <div>
        <div className="login-button" onClick={authenticate ? logout : goToLogin}>
        <FontAwesomeIcon icon={faUser} />
        <div>{authenticate ? "로그아웃" : "로그인"}</div>
      
    </div>
    </div>
        
    <button 
  className="btn btn-light d-block d-md-none" 
  onClick={() => setWidth(250)}
>
  &#9776;
</button>
     <div className="nav-section">
      <a href="/">
     <img width={100} src = "https://upload.wikimedia.org/wikipedia/commons/5/53/H%26M-Logo.svg"/>
     </a>
     </div>

 <div className="menu-area">
     <ul className="menu-list"> 
{Menulist.map((menu,index) => (
    <li key={index}>{menu}</li>
    ))}
     </ul>

     <div className="search-box">
     <FontAwesomeIcon icon={faSearch} />
     <input type="text" onKeyDown={(event)=>search(event)}/>
        </div> 
 </div> 
 </div> 
 )
};


export default Navbar
