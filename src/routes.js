import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Test from './components/Test';
import BudgetPage from './components/BudgetPage';


export default (
	<Switch>
    <Route exact path="/Home" component={Home} />
    <Route exact path="/Test" component={Test} />
    <Route exact path="/Outlets" component={BudgetPage} />
	</Switch>
);
