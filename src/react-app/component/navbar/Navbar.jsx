import React from 'react';

import './Navbar.styles.css';

function Navbar(){
    return(
        <>
            <section id="nav">

                <nav class="navbar">

                    <ul class="nav-container">
                        <li class="nav-link-container"> 
                            <a class="nav-link--anchor" href="/">Home</a>
                        </li>
                        <li class="nav-link-container"> 
                            <a class="nav-link--anchor" href="https://medium.com/@thenitinjayant">Blog</a>
                        </li>
                    </ul>

                </nav>

            </section>

        </>
    )
}

export default Navbar;