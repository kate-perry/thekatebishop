import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import '../shared/styles/styles.scss';
import { ThemeProvider } from '@mui/material/styles';
import {
    portfolio
} from '../shared/utils/strings'
import { portfolioTheme } from '../shared/styles/MuiThemes';
import { paletteArray } from '../shared/utils/constants';

export default function Portfolio() {
    const usableColors = paletteArray.filter(color => color !== 'quaternary');
    const [colorPalette, setColorPalette] = useState({ background: paletteArray[0], content: paletteArray[1] })

    return (
        <div className="portfolio">
            <ThemeProvider theme={portfolioTheme}>
                <div className="content">
                    <div id="stars" />
                    <div id="stars2" />
                    <div id="stars3" />
                    <Grid container direction="row" style={{ height: '100vh', alignItems: 'center' }}>
                        <div className="projects">
                            {portfolio.map((project, i) => {
                                return (
                                    <Grid container direction="row" className={"project " + usableColors[i + 2]}>
                                        <Grid item xs={5}>
                                            <Grid container direction="column" className='description'>
                                                <Typography variant="h5">{project.projectRole}</Typography>
                                                <Typography variant="h6">{project.projectTitle}</Typography>
                                                <Typography variant="subtitle1">PROBLEM</Typography>
                                                <Typography variant="body1">{project.problem}</Typography>
                                                <Typography variant="subtitle1">APPROACH</Typography>
                                                <Typography variant="body1">{project.approach}</Typography>
                                                <Typography variant="subtitle1">RESULT</Typography>
                                                <Typography variant="body1">{project.result}</Typography>
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={7} className="artifacts">
                                            {project.artifacts ? [...project.artifacts].map((art) => {
                                                return (
                                                    <div className="artifact">
                                                        <img src={require('../shared/static/' + art.src)} alt={art.title} className="artifact" />
                                                        <Typography variant="body1">{art.description}</Typography>
                                                    </div>
                                                )
                                            }) : null}
                                        </Grid>
                                    </Grid>
                                )
                            })}
                        </div>
                    </Grid>
                </div>
            </ThemeProvider>
        </div>
    );
}