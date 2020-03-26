import React from 'react';
import Link from 'gatsby-link';

function Header() {
    return (
        <header>
            <h1>TodoList</h1>
            <Link className="link-style" to="/">Home</Link> | <Link className="link-style" to="/about">About</Link>
        </header>
    )
}

export default Header;