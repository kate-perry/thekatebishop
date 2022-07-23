import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import Grid from '@mui/material/Grid';
import '../shared/styles/styles.scss';
import { transitionTimeout } from '../shared/utils/constants';
import {
    title,
    tagline1,
    tagline2,
    aboutMe
} from '../shared/utils/strings';
import katebishop from '../shared/static/katebishop.png';

export default function Header() {
    const [showContent, setShowContent] = useState(false);
    useEffect(() => {
        setShowContent(true)
    }, [])

    return (
        <div className="header">
            <div className="background" />
            <div className="content">
                <Grid container direction="row">
                    <Grid item xs={6}>
                        <CSSTransition
                            in={showContent}
                            timeout={transitionTimeout}
                            classNames="content-left"
                            unmountOnExit
                            onEnter={() => setShowContent(true)}>
                            <Grid container direction="column">
                                <Grid item>
                                    <h6>{tagline1}</h6>
                                </Grid>
                                <Grid item>
                                    <h1>{title.toUpperCase()}</h1>
                                </Grid>
                            </Grid>
                        </CSSTransition>
                        <CSSTransition
                            in={showContent}
                            timeout={transitionTimeout}
                            classNames="content-bottom"
                            unmountOnExit
                            onEnter={() => setShowContent(true)}>
                            <Grid container direction="column">
                                <Grid item>
                                    <h5>
                                        <span>{tagline2}</span>
                                    </h5>
                                </Grid>
                                <Grid item>
                                    <p>{aboutMe}</p>
                                </Grid>
                            </Grid>
                        </CSSTransition>
                    </Grid>
                    {/* <Grid item xs={6} alignContent="flex-end">
                        <CSSTransition
                            in={showContent}
                            timeout={transitionTimeout}
                            classNames="content-grow"
                            unmountOnExit
                            onEnter={() => setShowContent(true)}>
                            <img src={katebishop} alt="Photo of Kate Bishop" />
                        </CSSTransition>
                    </Grid> */}
                </Grid>
            </div>
        </div>
    );
}
