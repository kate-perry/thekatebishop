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
                        <Typography variant="h1">Portfolio</Typography>
                        {portfolio.map((project, i) =>
                            <Grid container direction="row" className='project'>
                                <Grid item xs={8}>
                                    <Grid container direction="column" className='description'>
                                        <span className={usableColors[i + 1]}>
                                            <Typography variant="h5">{project.projectRole}</Typography>
                                            <Typography variant="h6">{project.projectTitle}</Typography>
                                            <Typography variant="subtitle1">Problem</Typography>
                                            <Typography variant="body1">{project.problem}</Typography>
                                            <Typography variant="subtitle1">Approach</Typography>
                                            <Typography variant="body1">{project.approach}</Typography>
                                            <Typography variant="subtitle1">Result</Typography>
                                            <Typography variant="body1">{project.result}</Typography>
                                        </span>
                                    </Grid>
                                </Grid>
                                <Grid item xs={4}>
                                    {project.artifacts ? [...project.artifacts].map((art, i) => {
                                        return (
                                            <img alt={art.title} />
                                        )
                                    }) : null}
                                </Grid>
                            </Grid>
                        )}
                    </Grid>
                </div>
            </ThemeProvider>
        </div>
    );
}