import React from 'react';
import Github from '../../icons/components/github'
import './footer.css';

function Footer() {
	return (
	    <div className="footer">
        <div className="container list">
          <div className="banners">
            <li>© 2018 GitHub, Inc.</li>
            <li>Terms</li>
            <li>Privacy</li>
            <li>Security</li>
            <li>Status</li>
            <li>Help</li>
          </div>
          <li> <Github size={25} color="lightgray" view="0 0 32 32"/> </li>
          <div className="banners">
            <li>Contact GitHub</li>
            <li>Pricing</li>
            <li>API</li>
            <li>Training</li>
            <li>Blog</li>
            <li>About</li>
          </div>
        </div>
		</div>
	)
}

export default Footer;