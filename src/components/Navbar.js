import React from 'react'

function Navbar(){
  return (
    <nav className="navbar">      
      <a className="navbar-item" href='/'>ASPECT</a>      
      <ul className='navbar-links'>        
        <li>
          <a className="navbar-item" href='/about'>About</a>
        </li>
      </ul>
      
    </nav>
  )
}

export default Navbar;

{/* <li className="nav-item">
							<Link
								to="/products"
								className="nav-links"
								onClick={closeMobileMenu}
							>
								Products
							</Link>
						</li> */}