import React, { Component } from 'react';
import '@elastic/eui/dist/eui_theme_light.css';
import {
    EuiPageTemplate,
} from '@elastic/eui';
import ForgotPasswordForm from './components/forgotPasswordForm'

class ForgotPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <>
                <EuiPageTemplate
                    template="centeredBody"
                    pageContentProps={{ paddingSize: 'l' }}>
                    <ForgotPasswordForm />
                </EuiPageTemplate>
            </>
        );
    }
}

export default ForgotPassword;