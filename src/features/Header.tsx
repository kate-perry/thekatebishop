import React, { useState, useEffect, useContext } from 'react';
import { CSSTransition } from 'react-transition-group';
import Grid from '@mui/material/Grid';
import '../shared/styles/styles.scss';
import { headerTheme } from '../shared/styles/MuiThemes'
import { transitionTimeout, WindowSize } from '../shared/utils/constants';
import {
    title,
    tagline1,
    tagline2,
    aboutMe
} from '../shared/utils/strings';
import katebishop from '../shared/static/katebishop.png';
import { ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { WindowSizeContext } from '../App';

export default function Header() {
    const [showContent, setShowContent] = useState(false);
    const windowSize = useContext(WindowSizeContext);

    useEffect(() => {
        setShowContent(true)
    }, [windowSize])

    return (
        <div className="header">
            <ThemeProvider theme={headerTheme}>
                <div className="background" />
                <div className="content">
                    <Grid container direction='row' style={{ height: '100vh', alignItems: 'center' }}>
                        <Grid item xs={8}>
                            <CSSTransition
                                in={showContent}
                                timeout={transitionTimeout}
                                classNames="content-left"
                                unmountOnExit
                                onEnter={() => setShowContent(true)}>
                                <Grid container direction="column">
                                    <Grid item>
                                        <Typography variant="h6">{tagline1}</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="h1">{title.toUpperCase()}</Typography>
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
                                    <Grid item style={{ marginBottom: '1.5rem', marginTop: '1.5rem' }}>
                                        <Typography variant="h5">
                                            <span>{tagline2}</span>
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="body1">{aboutMe}</Typography>
                                    </Grid>
                                </Grid>
                            </CSSTransition>
                        </Grid>
                        {windowSize >= WindowSize.MEDIUM &&
                            <Grid item xs={4}>
                                <CSSTransition
                                    in={showContent}
                                    timeout={transitionTimeout}
                                    classNames="content-grow"
                                    unmountOnExit
                                    onEnter={() => setShowContent(true)}>
                                    <img src={katebishop} alt="Kate Bishop" className="photo" />
                                </CSSTransition>
                            </Grid>
                        }
                    </Grid>
                </div>
            </ThemeProvider >
        </div >
    );
}
