import CheckListStore from "./CheckListStore";

class RootStore {
    constructor() {
        this.checkListStore = new CheckListStore(this);
    }
}

export default RootStore;