import '../shared/styles/styles.scss';
import { Typography } from '@mui/material';

export default function ComingSoon() {
    return (
        <div className="coming-soon">
                <div className="content">
                    <div id="stars" />
                    <div id="stars2" />
                    <div id="stars3" />
                    <Typography variant="h1" textAlign="left">Portfolio Coming Soon!</Typography>
                </div>
        </div>
    );
}