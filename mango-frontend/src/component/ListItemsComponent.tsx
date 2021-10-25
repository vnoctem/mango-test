import React, { Component } from 'react';
import ItemService from '../service/ItemService';

class ListItemsComponent extends Component<any, any>{

    constructor(props: any) {
        super(props);
        this.state = {
            items: []
        }
        this.refreshItems = this.refreshItems.bind(this);
        this.addItemClick = this.addItemClick.bind(this);
    }

    componentDidMount() {
        this.refreshItems();
    }

    refreshItems() {
        ItemService.getItems().then(
            response => {
                console.log('List items response: ' + JSON.stringify(response));
                this.setState({ items: response.data });
            }
        )
    }

    addItemClick() {
        this.props.history.push(`/items/-1`);
    }

    render() {
        return(
            <div className="container">
                <h2>Types of mangoes</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Description</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.items.map(
                                (item: any) =>
                                <tr key={item.id}>
                                    <td>{item.title}</td>
                                    <td>{item.description}</td> 
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                <div className="row">
                        <button className="btn btn-success" 
                            onClick={this.addItemClick}>Add</button>
                </div>
            </div>
        )
    }
}

export default ListItemsComponent;