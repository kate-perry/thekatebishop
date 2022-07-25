import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import Grid from '@mui/material/Grid';
import '../shared/styles/styles.scss';
import { transitionTimeout } from '../shared/utils/constants';
import {
    aboutMe
} from '../shared/utils/strings'

export default function AboutMe() {
    const [showContent, setShowContent] = useState(false)
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries, observer) => {
            const entry = entries[0]    
            setShowContent(entry.isIntersecting);
                console.log(entry.isIntersecting)
            }
        );
        if (contentRef.current) {
            observer.observe(contentRef.current);
        }
        return () => {
            if (contentRef.current) {
                observer.unobserve(contentRef.current);
            }
        };
    }, []);

    return (
        <div className="aboutMe">
            <div className="content">
                <Grid container direction="column">
                    <Grid item ref={contentRef} >
                        <CSSTransition
                            in={showContent}
                            timeout={transitionTimeout}
                            classNames="content-left"
                            unmountOnExit
                            onEnter={() => setShowContent(true)}
                        >
                            <p>{aboutMe}</p>
                        </CSSTransition>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}