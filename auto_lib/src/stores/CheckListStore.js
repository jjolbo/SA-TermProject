import { observable, action } from "mobx";
import * as firebase from 'firebase';

export default class CheckListStore {
    constructor(root) {
        this.root = root;
        this.number = '';
        this.name = '';
    }

    @observable
    list = [];

    @action selectList = data => {
        const numberRef = firebase.database().ref().child(this.number);
        const nameRef = numberRef.child(this.name);
        nameRef.on('value', snap => {
            console.log(snap.key);
        });
    };
}