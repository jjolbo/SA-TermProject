import React, {useState, useEffect} from 'react';
import {useHistory, useParams, Link} from "react-router-dom";
import TableComponent from '../components/TableComponent'
import AvatarComponent from "../components/AvatarComponent";
import useStyles from '../styles/PageCheckListStyle';
import * as firebase from 'firebase';
import Button from '@material-ui/core/Button';

const apiUrl = "https://librarysystem-ce797.firebaseio.com";

function PageCheckList() {
    const classes = useStyles();
    let history = useHistory();
    let id = useParams().id;

    let [productions, setProductions] = useState({});

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        const rootRef = firebase.database().ref(id);
        const nameRef = rootRef.child(id);

        rootRef.on("value", snapshot => {
            setProductions(snapshot.val());
        })
    }

    return (
        <div className={classes.root}>
            <h2>대출 기록 확인</h2>
            <AvatarComponent name={id}/>
            <div className={classes.checkTable}>
                <TableComponent idx={1} id={123456} name={'이정하의 책'} start={'2020-06-28'} end={'2020-07-04'} during={7}/>
                {console.log(productions)}
                {/*<ul>*/}
                {/*{*/}
                {/*    Object.keys(productions).map(id => {*/}
                {/*        const product = productions[id]*/}
                {/*        return (*/}
                {/*            <li key={id}>*/}
                {/*                <Link to={{*/}
                {/*                    pathname:`${this.props.match.url}/${product.name}`,*/}
                {/*                    search: `?company=${product.company}`*/}
                {/*                }}>*/}
                {/*                    {product.name} [by {product.company}]*/}
                {/*                </Link>*/}
                {/*            </li>*/}
                {/*        )*/}
                {/*    })*/}
                {/*}*/}
                {/*</ul>*/}
            </div>
        </div>
    );
}

export default PageCheckList;