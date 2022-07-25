import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import '../shared/styles/styles.scss';
import { resumeTheme } from '../shared/styles/MuiThemes';
import { transitionTimeout } from '../shared/utils/constants';
import { ThemeProvider } from '@mui/material/styles';
import {
    title,
    position,
    location,
    email,
    education,
    experience,
    languages,
    technologies
} from '../shared/utils/strings'

export default function Resume() {
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
        <div className="resume">
            <ThemeProvider theme={resumeTheme}>
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
                                <Grid container direction="row">
                                    <Grid item xs={4}>
                                        <Grid container direction="column">
                                            <Typography variant="h1">{title}</Typography>
                                            <Typography variant="body1">{position} / {location}</Typography>
                                            <Typography variant="h2">Education</Typography>
                                            <Typography variant="subtitle1">{education.institutionName + ' (' + education.dateSpan[0] + ' - ' + education.dateSpan[1] + ')'}</Typography>
                                            <Typography variant="body1">{'Bachelor of Science in ' + education.major}</Typography>
                                            <Typography variant="h2">Languages</Typography>
                                            <Typography variant="body1">{languages}</Typography>
                                            <Typography variant="h2">Technologies</Typography>
                                            <Typography variant="body1">{technologies}</Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Grid container direction="column">
                                            <Typography variant="h2">Work Experience</Typography>
                                            {experience.map((exp, i) => 
                                                <>
                                                    <Typography variant="subtitle1">{exp.companyName}</Typography>
                                                    <Typography variant="subtitle1">{exp.jobTitle} | {exp.dateSpan}</Typography>
                                                    <Typography variant="body1">{exp.description}</Typography>
                                                </>
                                            )}
                                            <Typography variant="subtitle1"></Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </CSSTransition>
                        </Grid>
                    </Grid>
                </div>
            </ThemeProvider>
        </div>
    );
}