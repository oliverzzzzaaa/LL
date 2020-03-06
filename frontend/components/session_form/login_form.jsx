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
        this.handleDemo = this.handleDemo.bind(this);
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

    handleDemo() {
        const demo = {
            username: 'demo',
            password: '123456'
        };
        this.props.processForm(demo) //.then(() => this.props.history.push('/feed'));
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
                        <label className="welcome-back">Welcome Back</label>
                        <br/>
                        <br/>
                        <h6 className="dontmiss">Don't miss your next opportunity. Sign in to stay updated on your professional world.</h6>
            <br />
                        {/* Please {this.props.formType} or {this.props.navLink} */}
                        
                        {this.renderErrors()}
                        <div className="login-form">
                            <br />
                            <label>
                <input type="text"
                                    value={this.state.username}
                                    onChange={this.update('username')}
                                    className="login-input"
                                    placeholder="Username"
                                />
                            </label>
                            <br />
                            <label>
                <input type="password"
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                    className="login-input"
                                    placeholder="Password (6 or more characters)"
                                />
                            </label>
                            <br />


                            <br />
                            <input className="session-submit" type="submit" value="Log In" />
                            <br/>
                            <button className='session-demo' onClick={this.handleDemo}>Demo User</button>
                        </div>
                        <br/>
                        New to LinkedList? {this.props.navLink}
                        <br/>
                    </form>
                </div>
                {/* <img className="splash_pic1" src={window.splash_pic1}/>
                <img className="splash_pic2" src={window.splash_pic2}/> */}
            </div>
        );
    }
}

export default LoginForm;
