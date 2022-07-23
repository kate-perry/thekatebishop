import React from 'react';
import Grid from '@mui/material/Grid';
import '../shared/styles/styles.scss';
import {
    title,
    tagline1,
    tagline2,
} from '../shared/utils/strings'

export default function Header() {
    return (
        <div className="header">
            <div className="content">
                <Grid container direction="column">
                    <Grid item>
                        <h1>{title.toUpperCase()}</h1>
                    </Grid>
                    <Grid item>
                        <h5>{tagline1} {tagline2}</h5>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}
