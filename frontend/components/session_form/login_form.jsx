import React from 'react';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            email: '',
            first_name: '',
            last_name: '',
            location: '',
            headline: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div>
                <div className="login-form-container">
                    <form onSubmit={this.handleSubmit} className="login-form-box">
                        Welcome to LinkedList!
            <br />
                        Please {this.props.formType} or {this.props.navLink}
                        {this.renderErrors()}
                        <div className="login-form">
                            <br />
                            <label>Username:
                <input type="text"
                                    value={this.state.username}
                                    onChange={this.update('username')}
                                    className="login-input"
                                />
                            </label>
                            <br />
                            <label>Password:
                <input type="password"
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                    className="login-input"
                                />
                            </label>
                            <br />


                            <br />
                            <input className="session-submit" type="submit" value="Log In" />
                        </div>
                    </form>
                </div>
                {/* <img className="splash_pic2" src=“assets/splash_pic2” /> */}
                <img className="splash_pic1" src="assets/splash_pic1"/>
                <img className="splash_pic2" src="assets/splash_pic2"/>
            </div>
        );
    }
}

export default LoginForm;
