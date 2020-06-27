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
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <p className={classes.name}>{props.name}의 대출 기록</p>
        </div>
    );
}
