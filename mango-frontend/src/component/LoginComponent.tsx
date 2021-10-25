import React, { Component } from 'react'
import LoginService from '../service/LoginService';
import { Formik, Form, Field, ErrorMessage } from 'formik';

class LoginComponent extends Component<any, any> {

    constructor(props: any) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            username: '',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.validate = this.validate.bind(this);
    }

    onSubmit(values: { username: string; password: string; }) {
        let user = {
            id: this.state.id,
            username: values.username,
            password: values.password
        }

        LoginService.login(user).then(() => {
            console.log('login success');
            this.props.history.push(`/items`);
        }).catch(() => {
            console.log('login failed');
            this.setState({ hasLoginFailed:true });
        })
    }

    validate(values: any) {
        let errors: any = {};
        if (!values.username) {
            errors.username = 'Enter a username';
        }

        if (!values.password) {
            errors.password = 'Enter a password';
        }

        return errors;
    }

    render() {
        return (
            <div>
                <h3>Login</h3>
                <div className="container">
                    <Formik 
                        initialValues={{ username: '', password: '' }}
                        onSubmit={this.onSubmit}
                        validate={this.validate}>
                        {
                            () => (
                                <Form>
                                    {this.state.hasLoginFailed && <div className="alert alert-danger">Invalid credentials</div>}
                                    <fieldset className="form-group">
                                        <label>Username</label>
                                        <Field className="form-control" 
                                            type="text" 
                                            name="username" />
                                    </fieldset>
                                    <ErrorMessage name="username" 
                                        component="div"
                                        className="alert alert-warning" />
                                    <fieldset className="form-group">
                                        <label>Password</label>
                                        <Field className="form-control" 
                                            type="password" 
                                            name="password" />
                                    </fieldset>
                                    <ErrorMessage name="password" 
                                        component="div"
                                        className="alert alert-warning" />
                                    <br />
                                    <button className="btn btn-success" 
                                        type="submit">Login</button>
                                </Form>
                            )
                        }
                        </Formik>
                    </div>
            </div>
        )
    }
}

export default LoginComponent;