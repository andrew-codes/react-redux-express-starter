import React, { Component } from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Navigation from './Navigation';

const mapStateToProps = (state) => ({
    auth: state.atom.auth,
    user: state.atom.user
});

const mapDispatchToProps = (dispatcher) => bindActionCreators({ push }, dispatcher);

@connect(mapStateToProps)
class MyMenu extends Component {
    render() {
        return this.props.auth ? <Navigation /> : <div />
    }
}

@connect(mapStateToProps, mapDispatchToProps)
export class App extends Component {
    componentDidMount() {
        const { auth, location, push } = this.props;
        const pathname = location.pathname;

        const authenticatedRoutes = [
            'profile'
        ];

        const unathenticatedRoutes = [
            'login', 'signup', 'forgot-password', 'reset-password'
        ];

        if(auth) {
            if(unathenticatedRoutes.includes(pathname)) {
                push('/round');
            }
        } else {
            if(authenticatedRoutes.includes(pathname)) {
                push('/login');
            }
        }
    }

    render() {
        return (
            <div id="page-wrapper-id">
                <MyMenu />
                <div id="page-id">
                    {this.props.children}
                </div>
            </div>
        )
    }
}