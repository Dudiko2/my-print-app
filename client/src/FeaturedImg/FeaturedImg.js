import React from 'react';

const Featured = ({ imgSrc, imgName, width, imgCls }) => {
    return (
        <img
            className={imgCls}
            src={imgSrc}
            alt={imgName}
            width={width}
            height='auto' />
    )
}

export default Featured;