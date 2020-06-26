import React from 'react';
import TableComponent from '../components/TableComponent'
import AvatarComponent from "../components/AvatarComponent";
import useStyles from '../styles/PageCheckListStyle';

function PageCheckList() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <h2>대출 기록 확인</h2>
            <AvatarComponent/>
            {/*이정하님의 대출 현황*/}
            <div className={classes.checkTable}>
                <TableComponent/>
            </div>
        </div>
    );
}

export default PageCheckList;