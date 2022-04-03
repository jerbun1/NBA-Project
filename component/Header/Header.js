import React from 'react';
import Link from 'next/link';
const Header = () => {
    return (
        <div>
            <header className='header' style={{display: 'flex'}}>
                <Link href='/Player'>
                  <a>Menu</a>
                </Link>

                <p>Recipes</p>
            </header>
            
        </div>
    )
}

export default Header
