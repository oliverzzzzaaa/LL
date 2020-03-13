import React from 'react';
import { Link } from 'react-router-dom';
import NavbarContainer from '../nav_bar/navbar_container';
import { openModal} from '../../actions/modal_actions';




class Feed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            first_name: '',
            last_name: '',
            location: '',
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
                <NavbarContainer />
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <div className="feed-container">
                    <div className="feed-profile-container">
                        <div className="feed-profile-background"></div>
                        <div className="feed-profile-info">
                            <div id="feed-img"></div>
                            <div id="feed-name">Albert Chen</div>
                            <div id="feed-title">Student</div>
                        </div>
                        <hr/>
                        <div className="feed-num">
                            <div className="feed-num-container">
                                <div id="feed-num-views-text">Who viewed your profile</div>
                                <div id="feed-num-views-num">0</div>
                            </div>
                            <br/>
                            <div id="feed-num-container">
                                <div id="feed-num-connections-text">Connections</div>
                                <div id="feed-num-connections-num">1</div>
                            </div>
                        </div>
                    </div>
                    <div className="post-container">
                        <div className="post-create">
                            <div className="post-create-container">

                                <div className='icon-create' onClick={() => this.props.openModal('create post', { user: this.props.currentUser })}>
                                    <div className="icon-post">
                                        <i className="ff-edit"></i>
                                    </div>
                                    <div className="icon-text">&nbsp; Start a post <i class="fas fa-edit"></i></div>
                                </div>
                                <div className='icon-post'><i className="icon-camera" onClick={e => alert("feature not available")} ></i></div>
                                <div className='icon-post'><i className="icon-video" onClick={e => alert("feature not available")} ></i></div>
                                <div className='icon-post'><i className="icon-doc" onClick={e => alert("feature not available")}></i></div>
                            </div>
                            <div className='write-article' onClick={e => alert("feature not available")}>Write an article on LinkedList</div>
                        </div>
                        <div className="post-list"></div>
                    </div>
                    <div className="news-container">
                        Today’s news and views
                    </div>
                </div>
                
                
            </div>
        );
    }
}

export default Feed;
