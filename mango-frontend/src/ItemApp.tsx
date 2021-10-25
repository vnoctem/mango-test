import React, { Component } from 'react';
import ListItemsComponent from './component/ListItemsComponent';
import ItemComponent from './component/ItemComponent';
import LoginComponent from './component/LoginComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class ItemApp extends Component {
    render() {
        return(
            <Router>
                <h1>Mango Developer Test</h1>
                <br />
                <br />
                <Switch>
                    <Route path="/" exact component={LoginComponent} />
                    <Route path="/login" exact component={LoginComponent} />
                    <Route path="/items" exact component={ListItemsComponent} />
                    <Route path="/items/:id" component={ItemComponent} />
                </Switch>
            </Router>
        )
    }
}

export default ItemApp;