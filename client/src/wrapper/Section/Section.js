import React from 'react';
import classes from './Section.module.css';
import SectionTitle from './SectionTitle/SectionTitle';

const Section = ({ children, sectTitle }) => {
    return (
        <div className={classes.Section}>
            <SectionTitle text={sectTitle} />
            <div className={classes.sectChildren}>
                {children}
            </div>
        </div>
    )
};

export default Section;