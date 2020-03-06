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
        const demo = { username: `demo${Math.random() * 100000000}`, 
                        password:'123456', 
                        email: `demo${Math.random() * 100000000}@demo.com`, 
                        first_name:'Demo', 
                        last_name:'User', 
                        location:'San Francisco Bay Area', 
                        headline: 'Software Engineer' };
        this.props.processForm(demo).then(() => this.props.history.push('/feed')); 
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li className="signup-errors" key={`error-${i}`}>
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
                        Make the most of your professional life
            <br />
                        {/* Please {this.props.formType} or {this.props.navLink} */}

                        {this.renderErrors()}
                        <div className="signup-form">
                            <br />
                            <label>
                                <input type="text"
                                    value={this.state.username}
                                    onChange={this.update('username')}
                                    className="signup-input"
                                    placeholder="Username"
                                />
                            </label>
                            <br />
                            <label>
                                <input type="password"
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                    className="signup-input"
                                    placeholder="Password (6 or more characters)"
                                />
                            </label>
                            <br/>

                            <label>
                                <input type="text"
                                    value={this.state.email}
                                    onChange={this.update('email')}
                                    className="signup-input"
                                    placeholder="Email"
                                />
                            </label>
                            <br />

                            <label>
                                <input type="text"
                                    value={this.state.first_name}
                                    onChange={this.update('first_name')}
                                    className="signup-input"
                                    placeholder="First Name"
                                />
                            </label>
                            <br />

                            <label>
                                <input type="text"
                                    value={this.state.last_name}
                                    onChange={this.update('last_name')}
                                    className="signup-input"
                                    placeholder="Last Name"
                                />
                            </label>
                            <br />

                            <label>
                                <input type="text"
                                    value={this.state.location}
                                    onChange={this.update('location')}
                                    className="signup-input"
                                    placeholder="Location"
                                />
                            </label>
                            <br />

                            <label>
                                <input type="text"
                                    value={this.state.headline}
                                    onChange={this.update('headline')}
                                    className="signup-input"
                                    placeholder="Headline"
                                />
                            </label>
                            <br />

                            <br />
                            <input className="session-submit" type="submit" value="Join" />
                            <br/>
                            <button className='session-demo' onClick={this.handleDemo}>Demo User</button>
                        </div>
                    </form>
                    <br />
                    <label className="already-on-linkedlist">Already on LinkedList? {this.props.navLink}</label>
                </div>
                {/* <img className="splash_pic1" src={window.splash_pic1} />
                <img className="splash_pic2" src={window.splash_pic2} /> */}
            </div>
        );
    }
}

export default SignupForm;
