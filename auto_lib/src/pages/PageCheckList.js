import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import TableComponent from '../components/TableComponent'
import AvatarComponent from "../components/AvatarComponent";
import useStyles from '../styles/PageCheckListStyle';
import * as firebase from 'firebase';

function PageCheckList() {
    const classes = useStyles();
    let id = useParams().id;

    let [productions, setProductions] = useState({});
    let [name, setName] = useState('');

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        const rootRef = firebase.database().ref(id);

        rootRef.on('value', snapshot => {
            snapshot.forEach((childSnapshot) => {
                setName(childSnapshot.key);
            })
        })

        rootRef.on("value", snapshot => {
            setProductions(snapshot.val());
        })
    }

    return (
        <div className={classes.root}>

            <h2>대출 기록 확인</h2>
            <AvatarComponent name={name}/>
            <div className={classes.checkTable}>

                <TableComponent data={productions[name]}/>

            </div>
        </div>
    );
}

export default PageCheckList;