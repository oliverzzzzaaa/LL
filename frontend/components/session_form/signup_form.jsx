import React from 'react';

class SignupForm extends React.Component {
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
                <div className="signup-form-container">
                    <form onSubmit={this.handleSubmit} className="signup-form-box">
                        Welcome to LinkedList!
            <br />
                        Please {this.props.formType} or {this.props.navLink}
                        {this.renderErrors()}
                        <div className="signup-form">
                            <br />
                            <label>Username:
                <input type="text"
                                    value={this.state.username}
                                    onChange={this.update('username')}
                                    className="signup-input"
                                />
                            </label>
                            <br />
                            <label>Password:
                <input type="password"
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                    className="signup-input"
                                />
                            </label>
                            <br />

                            <label>Email:
                <input type="email"
                                    value={this.state.email}
                                    onChange={this.update('email')}
                                    className="signup-input"
                                />
                            </label>
                            <br />

                            <label>First Name:
                <input type="first_name"
                                    value={this.state.first_name}
                                    onChange={this.update('first_name')}
                                    className="signup-input"
                                />
                            </label>
                            <br />

                            <label>Last Name:
                <input type="last_name"
                                    value={this.state.last_name}
                                    onChange={this.update('last_name')}
                                    className="signup-input"
                                />
                            </label>
                            <br />

                            <label>Location:
                <input type="location"
                                    value={this.state.location}
                                    onChange={this.update('location')}
                                    className="signup-input"
                                />
                            </label>
                            <br />

                            <label>Headline:
                <input type="headline"
                                    value={this.state.headline}
                                    onChange={this.update('headline')}
                                    className="signup-input"
                                />
                            </label>
                            <br />

                            <br />
                            <input className="session-submit" type="submit" value="Sign Up" />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default SignupForm;
