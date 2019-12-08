import React from 'react';
import classes from './Navigation.module.css';

import NavLinks from './NavLinks/NavLinks';

const Navigation = ({ menuOpen, toggleMenu }) => {

    return(
        <nav>
            <div className={classes.bar}>
                <span className={classes.Title}>Store</span>
                <div className={classes.Desktop} onClick={toggleMenu}>M</div>
            </div>

            {/* Make it a component */}
            <NavLinks linkChosen={toggleMenu} open={menuOpen} />
        </nav>
    );
}

export default Navigation;