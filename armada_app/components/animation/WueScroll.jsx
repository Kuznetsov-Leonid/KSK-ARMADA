import React, { useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Styles from '../../styles/WueScroll.module.scss';

export const AnimLeft = ({children}) => {
    return(
        <>
            <Fade left>
                {children}
            </Fade>
        </>
    );
}
export const AnimRight = ({children}) => {
    return(
        <>
            <Fade right>
                {children}
            </Fade>
        </>
    );
}
export const AnimBottom = ({children}) => {
    return(
        <>
            <Fade bottom>
                {children}
            </Fade>
        </>
    );
}



