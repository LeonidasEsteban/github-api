import React from 'react';
import Github from '../../icons/components/github'
import './header.css';

function Header() {
	return (
	    <div className="header">
		  <div className="header-container">
            <li> <Github size={32} color="white" view="0 0 32 32"/> </li>
            <input type="text" placeholder="Busca un producto"></input>
		  </div>
		</div>
	)
}

export default Header;