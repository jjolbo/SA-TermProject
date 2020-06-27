import React, {useState} from 'react';
import useStyles from '../styles/PageCheckListStyle';
import TextInputComponent from "../components/TextInputComponent";
import Grid from '@material-ui/core/Grid';
import * as firebase from 'firebase';
import Button from '@material-ui/core/Button';
import {useHistory} from "react-router-dom";


function PageReturn() {
    const classes = useStyles();
    let history = useHistory();

    const BNUM = 0;
    const NUM = 1;
    const NAME = 2;

    const [bNumber, setbNumber] = useState(0);
    const [number, setNumber] = useState(0);
    const [name, setName] = useState('');

    const handleChange = (value, type) => {
        if (type === 0) {
            setbNumber(value)
        }
        else if (type === 1) {
            setNumber(value)
        }
        else if (type === 2) {
            setName(value)
        }
    }

    const handleSubmit = () => {
        firebase.database().ref(String(number)+'/'+name+'/'+String(bNumber)).update({
            'status':'return',
        });
        alert('반납되었습니다.');
        history.push("/");
    }

    const handleCancel = () => {
        alert('대출 취소하였습니다.');
        history.push('/');

    }

    return (
        <div className={classes.root}>
            <h2>도서 반납</h2>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <img style={{width: 300}}
                         src={'https://cdn0.iconfinder.com/data/icons/library-6/64/Calendar-book-loan-period-education-school-library-512.png'}
                         alt='img'/>
                </Grid>
                <Grid item xs={9}>
                    <TextInputComponent label={'학번'} handleChange={e => handleChange(e.target.value, NUM)} placeholder={'학번을 입력해주세요.'}/>
                    <TextInputComponent label={'이름'} handleChange={e => handleChange(e.target.value, NAME)} placeholder={'이름을 입력해주세요.'}/>
                    <TextInputComponent label={'일련번호'} handleChange={e => handleChange(e.target.value, BNUM)} placeholder={'일련번호를 입력해주세요.'}/>
                    <Grid className={classes.buttonsLayout}>
                        <Button className={classes.cancelBtn} variant="contained" color="default"
                                onClick={handleCancel}>
                            취소하기
                        </Button>
                        <Button variant="contained" color="primary"
                                onClick={handleSubmit}>
                            반납하기
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

export default PageReturn;