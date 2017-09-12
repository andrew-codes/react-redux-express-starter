import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions } from './../../state/auth';
import { UserIcon, LogoutIcon } from './../common/Icons';
import { push } from 'react-router-redux';

const mapStateToProps = state => ({
    name: state.atom.user.name,
    verified: state.atom.user.verified
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...Actions, push }, dispatch);

@connect(mapStateToProps, mapDispatchToProps)
export default class Navigation extends Component {
    constructor(props, context) {
        super(props, context);
        this.viewProfile = this.viewProfile.bind(this);
    }

    viewProfile() {
        this.props.push('/profile');
    }


    render () {
        return (
            <ul>
                <li onClick={this.viewProfile}><UserIcon /><span>Account</span></li>
                <li onClick={this.props.logout}><LogoutIcon /><span>Logout</span></li>
            </ul>
        );
    }
}