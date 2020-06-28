import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    name: {
        paddingTop: 7,
    }
}));


export default function AvatarComponent(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Avatar src="/broken-image.jpg" />
            <p className={classes.name}>{props.name}님의 대출 기록</p>
        </div>
    );
}
