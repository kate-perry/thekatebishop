import React from 'react';
import Grid from '@mui/material/Grid';
import '../shared/styles/styles.scss';
import {
    aboutMe
} from '../shared/utils/strings'

export default function Header() {
    return (
        <div className="aboutMe">
            <div className="content">
                <Grid container direction="column">
                    <Grid item>
                        <p>{aboutMe}</p>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}
