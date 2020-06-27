import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {Home, Loan, Return, CheckList, Login} from './pages';

function App() {
    return (
        <div className="App">
            <Route exact path="/" component={Home}/>
            <Switch>
                <Route path="/loan" component={Loan}/>
                <Route path="/return" component={Return}/>
                <Route path="/login" component={Login}/>
                <Route path="/checklist/:id" component={CheckList}/>
            </Switch>
        </div>
    );
}

export default App;
