import React,{useState} from 'react';
import {useHistory, useParams} from "react-router-dom";
import TableComponent from '../components/TableComponent'
import AvatarComponent from "../components/AvatarComponent";
import useStyles from '../styles/PageCheckListStyle';

function PageCheckList() {
    const classes = useStyles();
    let history = useHistory();
    let slug = useParams();
    const id = slug.id;

    const getCheckList = () => {
        // setId(slug.id);
    }

    return (
        <div className={classes.root}>
            <h2>대출 기록 확인</h2>
            <AvatarComponent name={'이정하'}/>

            <div className={classes.checkTable}>
                <TableComponent/>
            </div>
        </div>
    );
}

export default PageCheckList;