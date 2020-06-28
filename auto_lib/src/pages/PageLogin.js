import React, {useState} from 'react';
import useStyles from '../styles/PageCheckListStyle';
import TextInputComponent from "../components/TextInputComponent";
import * as firebase from 'firebase';
import Button from '@material-ui/core/Button';
import {useHistory} from "react-router-dom";
import { observer, inject } from 'mobx-react';

// @inject(stores => ({
//     checkListStore: stores.checkListStore,
// }))
// @observer

function PageLogin() {
    const classes = useStyles();
    let history = useHistory();

    const NUM = 1;
    const NAME = 2;

    const [number, setNumber] = useState(0);
    const [name, setName] = useState('');

    const handleChange = (value, type) => {
        if (type === 1) {
            setNumber(value)
        } else if (type === 2) {
            setName(value)
        }
    }

    const handleLogin = (number, name) => {
        const numberRef = firebase.database().ref().child(number);
        const nameRef = numberRef.child(name);

        nameRef.on('value', snap => {
            if(snap && snap.exists()){

                history.push(`/checklist/${number}`);
            }else{
                alert('로그인에 실패하였습니다.')
            }
        });
    }

    const handleCancel = () => {
        alert('로그인을 취소하였습니다.');
        history.push('/');
    }

    return (
        <div className={classes.root}>
            <h2>로그인</h2>
            <TextInputComponent label={'학번'} handleChange={e => handleChange(e.target.value, NUM)}
                                placeholder={'학번을 입력해주세요.'}/>
            <TextInputComponent label={'이름'} handleChange={e => handleChange(e.target.value, NAME)}
                                placeholder={'이름을 입력해주세요.'}/>
            <Button className={classes.loginBtn} variant="contained" color="primary"
                    onClick={()=>handleLogin(number, name)}>
                로그인
            </Button>
            <Button className={classes.cancelBtn} variant="contained" color="default"
                    onClick={handleCancel}>
                취소하기
            </Button>

        </div>
    );
}

export default PageLogin;