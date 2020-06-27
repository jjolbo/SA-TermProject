import React, {useState} from 'react';
import useStyles from '../styles/PageCheckListStyle';
import TextInputComponent from "../components/TextInputComponent";
import Grid from '@material-ui/core/Grid';
import * as firebase from 'firebase';
import Button from '@material-ui/core/Button';
import {useHistory} from "react-router-dom";


function PageLoan() {


    const classes = useStyles();
    let history = useHistory();

    let start_date = '';
    let end_date = '';

    const B_NUM = 0;
    const B_NAME = 1;
    const AUTH = 2;
    const PUB = 3;
    const U_NAME = 4;
    const U_NUM = 5;

    const [bNumber, setBNumber] = useState(0);
    const [bName, setBName] = useState('');
    const [author, setAuthor] = useState('');
    const [publisher, setPublisher] = useState('');
    const [number, setNumber] = useState(0);
    const [name, setName] = useState('');

    const getToday = () => {
        let date = new Date();
        let y = date.getFullYear();
        let m = date.getMonth() + 1;
        let d = date.getDate();

        let res_date = new Date(y, m, d);
        calcEndDate(res_date);

        return String(y) + '-' + String(m) + '-' + String(d);
    }

    const calcEndDate = (date) => {
        date.setDate(date.getDate() + 7);
        let y = date.getFullYear();
        let m = date.getMonth();
        let d = date.getDate();

        end_date = String(y) + '-' + String(m) + '-' + String(d);
    }

    const handleChange = (value, type) => {
        if (type === 0) {
            setBNumber(value)
        } else if (type === 1) {
            setBName(value)
        } else if (type === 2) {
            setAuthor(value)
        } else if (type === 3) {
            setPublisher(value)
        } else if (type === 4) {
            setName(value)
        } else if (type === 5) {
            setNumber(value)
        }

    }

    const handleSubmit = () => {
        start_date = getToday();

        firebase.database().ref(String(number)+'/'+name+'/'+String(bNumber)).update({
            'b_name': bName,
            'author': author,
            'publisher': publisher,
            'start_date': start_date,
            'end_date': end_date,
            'status':'loan',
        });
        alert('대출되었습니다.');
        history.push('/');
    }

    const handleCancel = () => {
        alert('대출 취소하였습니다.');
        history.push('/');
    }

    return (
        <div className={classes.root}>
            <h2>도서 대출</h2>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <img style={{width: 300}}
                         src={'https://cdn0.iconfinder.com/data/icons/library-6/64/Calendar-book-loan-period-education-school-library-512.png'}
                         alt='img'/>
                </Grid>
                <Grid item xs={9}>
                    <TextInputComponent label={'학번'} handleChange={e => handleChange(e.target.value, U_NUM)} placeholder={'학번을 입력해주세요.'}/>
                    <TextInputComponent label={'이름'} handleChange={e => handleChange(e.target.value, U_NAME)} placeholder={'이름을 입력해주세요.'}/>
                    <TextInputComponent label={'일련번호'} handleChange={e => handleChange(e.target.value, B_NUM)} placeholder={'일련번호를 입력해주세요.'}/>
                    <TextInputComponent label={'도서 이름'} handleChange={e => handleChange(e.target.value, B_NAME)} placeholder={'도서 이름을 입력해주세요.'}/>
                    <TextInputComponent label={'저자명'} handleChange={e => handleChange(e.target.value, AUTH)} placeholder={'저자명을 입력해주세요.'}/>
                    <TextInputComponent label={'출판사명'} handleChange={e => handleChange(e.target.value, PUB)} placeholder={'출판사명을 입력해주세요.'}/>
                    <Grid className={classes.buttonsLayout}>
                        <Button className={classes.cancelBtn} variant="contained" color="default"
                                onClick={handleCancel}>
                            취소하기
                        </Button>
                        <Button variant="contained" color="primary"
                                onClick={handleSubmit}>
                            대출하기
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

export default PageLoan;