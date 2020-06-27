import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            margin: 50,
        },
        checkTable:{
            marginTop: 20,
        },
        buttonsLayout:{
            marginLeft: 430,
            marginTop: 10,
        },
        cancelBtn:{
            marginRight: 10,
        }
    }),
);

export default useStyles;