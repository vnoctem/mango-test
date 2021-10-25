/* eslint-disable eqeqeq */
import React, { Component } from 'react'
import ItemService from '../service/ItemService';
import { Formik, Form, Field, ErrorMessage } from 'formik';

class ItemComponent extends Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            title: '',
            description: ''
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.validate = this.validate.bind(this);
    }

    componentDidMount() {
        console.log('componentDidMount state.id: ' + this.state.id)
        if (this.state.id == -1) {
            return;
        }
    }

    onSubmit(values: { title: string; description: string; }) {
        let item = {
            id: this.state.id,
            title: values.title,
            description: values.description
        }

        if (this.state.id == -1) {
            ItemService.addItem(item).then(
                response => {
                    console.log('Item component response: ' + JSON.stringify(response));
                    this.props.history.push('/items');
                }
            )
        }
        console.log('Item component values: ' + JSON.stringify(values));
    }

    validate(values: any) {
        let errors: any = {};
        if (!values.title) {
            errors.title = 'Enter a title';
        }

        if (!values.description) {
            errors.description = 'Enter a description';
        }

        return errors;
    }

    render() {
        return (
            <div>
                <h3>Add new item</h3>
                <div className="container">
                    <Formik 
                        initialValues={{ title: '', description: ''}}
                        onSubmit={this.onSubmit}
                        validate={this.validate}>
                        {
                            () => (
                                <Form>
                                    <fieldset className="form-group">
                                        <label>Title</label>
                                        <Field className="form-control" 
                                            type="text" 
                                            name="title" />
                                    </fieldset>
                                    <ErrorMessage name="title" 
                                        component="div"
                                        className="alert alert-warning" />
                                    <fieldset className="form-group">
                                        <label>Description</label>
                                        <Field className="form-control" 
                                            type="text" 
                                            name="description" />
                                    </fieldset>
                                    <ErrorMessage name="description" 
                                        component="div"
                                        className="alert alert-warning" />
                                    <br />
                                    <button className="btn btn-success" 
                                        type="submit">Submit</button>
                                </Form>
                            )
                        }
                    </Formik>
                </div>
            </div>
        )
    }
}

export default ItemComponent;