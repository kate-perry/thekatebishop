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
    const usableColors = paletteArray.filter(color => color !== 'senary');

    return (
        <div className="portfolio">
            <ThemeProvider theme={portfolioTheme}>
                <div className="content">
                    <Grid container direction="column">
                        <div className="title">
                            <Typography variant="h1">
                                <span>PORTFOLIO</span>
                            </Typography>
                        </div>
                        <div className="projects">
                            {portfolio.map((project, i) =>
                                <Grid container direction="row" className='project'>
                                    <Grid item xs={5}>
                                        <Grid container direction="column" className='description'>
                                            <span className={usableColors[i + 2]}>
                                                <Typography variant="h5">{project.projectRole}</Typography>
                                                <Typography variant="h6">{project.projectTitle}</Typography>
                                                <Typography variant="subtitle1">PROBLEM</Typography>
                                                <Typography variant="body1">{project.problem}</Typography>
                                                <Typography variant="subtitle1">APPROACH</Typography>
                                                <Typography variant="body1">{project.approach}</Typography>
                                                <Typography variant="subtitle1">RESULT</Typography>
                                                <Typography variant="body1">{project.result}</Typography>
                                            </span>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={7}>
                                        {project.artifacts ? [...project.artifacts].map((art, i) => {
                                            return (
                                                <div className="artifact">
                                                    <img src={require('../shared/static/' + art.src)} alt={art.title} className="artifact" />
                                                    <Typography variant="body1">{art.description}</Typography>
                                                </div>
                                            )
                                        }) : null}
                                    </Grid>
                                </Grid>
                            )}
                        </div>
                    </Grid>
                </div>
            </ThemeProvider>
        </div>
    );
}