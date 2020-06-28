import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({

});

function createData(id, name, start, end, during) {
    return { id, name, start, end, during};
}

const rows = [
    createData('971117','객체지향분석 및 설계', '2020-06-01', '2020-06-07', 5),
    createData('980602','소프트웨어 아키텍처 스타일','2020-06-01', '2020-06-07',5),
    createData('970625','맨큐의 핵심경제학', '2020-06-01', '2020-06-07',5),
    createData('000405','어린 왕자', '2020-06-02', '2020-06-08',6)
];

export default function SimpleTable(props) {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>번호</TableCell>
                        <TableCell align="left">일련번호</TableCell>
                        <TableCell align="left">책 제목</TableCell>
                        <TableCell align="left">대출일</TableCell>
                        <TableCell align="left">마감일</TableCell>
                        <TableCell align="left">남은 기간</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow key={props.name}>
                        <TableCell component="th" scope="row">
                            {props.idx}
                        </TableCell>
                        <TableCell align="left">{props.id}</TableCell>
                        <TableCell align="left">{props.name}</TableCell>
                        <TableCell align="left">{props.start}</TableCell>
                        <TableCell align="left">{props.end}</TableCell>
                        <TableCell align="left">{props.during}일</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}
