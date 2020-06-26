import React from 'react';
import useStyles from '../styles/PageCheckListStyle';
import TextInputComponent from "../components/TextInputComponent";
function PageLoan(){
    const classes = useStyles();

    return(
        <div className={classes.root}>
            <h2>도서 대출</h2>
            <TextInputComponent label={'일련번호'}/>
            <TextInputComponent label={'도서 이름'}/>
            <TextInputComponent label={'바코드'}/>

        </div>
    );
}
export default PageLoan;