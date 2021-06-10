import React, { Component } from 'react';
import '@elastic/eui/dist/eui_theme_light.css';
import {
    EuiEmptyPrompt,
    EuiButton,
    EuiForm,
    EuiFormRow,
    EuiFieldText,
} from '@elastic/eui';

class ForgotPasswordForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <EuiEmptyPrompt
                title={<span>Forgot Password</span>}
                body={<EuiForm>
                    <EuiFormRow label="Enter your username to search for your account." helpText="">
                        <EuiFieldText name="username" placeholder="Enter your username" />
                    </EuiFormRow>
                    <EuiFormRow>
                        <EuiButton onClick={() => { }}>Submit</EuiButton>
                    </EuiFormRow>
                    <EuiFormRow>
                        <EuiButton onClick={event => window.location.href = '/login'}>Login</EuiButton>
                    </EuiFormRow>
                </EuiForm>}
            ></EuiEmptyPrompt>
        );
    }
}

export default ForgotPasswordForm;