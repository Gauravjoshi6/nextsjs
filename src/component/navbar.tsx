'use client';
import React, { useState } from 'react';

import  Link  from 'next/link';
// import img from '@/imgs/shopping-cart.png'

export default function Navbar() {

  const [isopen, setIsopen] = useState(false);
  

  const toggleMenu = () =>{
     setIsopen(!isopen);
  }

  return (
    <>
    <div>
    <div  >
    
      <ul className={`menu ${isopen ? 'active' : ''}`}>
        <li>
        <div className='searchContainer'><input type='text' placeholder='Suchen' className='searchInput'/>
          <img src="imgs\img2.png" height={30} width={30} className='searchIcon '/>
           </div>
          </li>  
          
      <li><div className='plant'></div><Link href='/' className='Rezenpt'>Rezenpt einlosen</Link></li>
      <li>
      <div className='plant'></div><Link href='/' className='Live'>Live Bestand</Link>
        </li>

        <li>
      <div className='plant'></div><Link href='/' className='Live'>Vindeosprechstunde</Link>
        </li>

        <li>
      <div className='plant'></div><Link href='/' className='Live'>FAQs</Link>
        </li>

        <li>
      <div className='plant'></div><Link href='/' className='Live'>Kontankt</Link>
        </li>

  <li> <Link href='/'><img src="imgs\shopping-cart.png"  width={30} height={30}/></Link></li>

        <li>
      <Link href='/' className='Live Anm'>Anmelden</Link>
        </li>
        
       
        
      </ul>
      <div>
          <img src='imgs\menu.png' width={30} height={30} className='menu_butt' onClick={toggleMenu}/>
        </div>

    </div>

    <div className='GkV'>
      <p>GKV mit Kostenubernahme?</p>
      <div className='Pre'>
        <p>Preisoptionen</p>
      </div>
    </div>
    </div>
    </>
  )
}

// export default Navbar;