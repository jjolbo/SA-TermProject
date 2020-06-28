import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    body: {
        backgroundColor: '#e57373'
    },
}));

const calcDate = (endDate) => {
    let date = new Date();
    let y = date.getFullYear();
    let m = date.getMonth() + 1;
    let d = date.getDate();

    let res = endDate.split('-');

    if (parseInt(res[2]) < d) {
        if(parseInt(res[1]) <= m){
            return 1;
        }
        else{
            return 0;
        }
    } else return 0;
}

export default function TableComponent(props) {

    const classes = useStyles();

    let keys = [];
    for (let key in props.data) {
        keys.push(key);
    }

    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>번호</TableCell>
                        <TableCell align="left">일련번호</TableCell>
                        <TableCell align="left">책 제목</TableCell>
                        <TableCell align="left">저자 이름</TableCell>
                        <TableCell align="left">출판사 이름</TableCell>
                        <TableCell align="left">대출일</TableCell>
                        <TableCell align="left">반납일</TableCell>
                        <TableCell align="left">상태</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {keys.map((key, id) => (
                        <>
                            <TableRow key={id} className={calcDate(props.data[key].end_date) === 1 && classes.body}>
                                <TableCell component="th" scope="row">
                                    {id + 1}
                                </TableCell>
                                <TableCell align="left">{key}</TableCell>
                                <TableCell align="left">{props.data[key].b_name}</TableCell>
                                <TableCell align="left">{props.data[key].author}</TableCell>
                                <TableCell align="left">{props.data[key].publisher}</TableCell>
                                <TableCell align="left">{props.data[key].start_date}</TableCell>
                                <TableCell align="left">{props.data[key].end_date}</TableCell>
                                <TableCell
                                    align="left">{props.data[key].status === 'loan' ? '대출중' : '반납완료'}{calcDate(props.data[key].end_date) === 1 && '(기한초과)'}</TableCell>
                            </TableRow>
                        </>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
