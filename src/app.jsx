import cockpit from 'cockpit';
import React from 'react';
// import Button from './Button';
// import ReactDOM from 'react-dom';
import "@patternfly/react-core/dist/styles/base.css";
import './fonts.css';
import { SimpleLoginPage } from './prueba.jsx';

const _ = cockpit.gettext;

export class Application extends React.Component {
    constructor() {
        super();
        this.state = { hostname: _("Unknown") };

        cockpit.file('/etc/hostname').watch(content => {
            this.setState({ hostname: content.trim() });
        });
    }

    render() {
        return (
            <div>
                <SimpleLoginPage> </SimpleLoginPage>
            </div>
        );
    }
}
