import React from 'react'
import AdminNavbar from './AdminNavbar';
export const NewHero = () => {
  return (
    <div>
        <AdminNavbar/>
         <div class="container">
            <img src="img_snow_wide.jpg" alt="Snow" style="width:100%;"/>
            <div class="bottom-left">Bottom Left</div>
            <div class="top-left">Top Left</div>
            <div class="top-right">Top Right</div>
            <div class="bottom-right">Bottom Right</div>
            <div class="centered">Centered</div>
    </div>
    </div>
  ) 
}
