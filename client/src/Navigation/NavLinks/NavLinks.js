import React from 'react';
import { Link } from 'react-router-dom';
import classes from './NavLinks.module.css';

const NavLinks = ({ open, linkChosen }) => {
    let classGroups = [classes.links, 'uppercase'];

    if(open){
        classGroups.push(classes.open);
    }

    return (
        <div className={classGroups.join(' ')}>
            <Link className={classes.anc} onClick={linkChosen} to='/'>Home</Link>
        </div>
    );
}

export default NavLinks;