import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
}));

export default function LayoutTextFields(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div>
                <TextField
                    id="standard-full-width"
                    label={props.label}
                    style={{ margin: 8, width: 600 }}
                    placeholder={props.placeholder}
                    // helperText="Full width!"
                    fullWidth
                    margin="normal"
                    onChange={props.handleChange}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </div>
        </div>
    );
}
