import React from 'react';
import "@patternfly/react-core/dist/styles/base.css";
import './fonts.css';
import { LoginForm, LoginPage, ListVariant, TextInput } from '@patternfly/react-core';
import { FormGroup, Form } from "../node_modules/@patternfly/react-core/src/components/Form/index";

import ExclamationCircleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon';

const brandImg2 = "https://github.com/teofilobetancourt/prueba/blob/main/src/assets/imagenes/cropped-PRESENTACION-RELIABYTICS-15.svg";

export const SimpleLoginPage = () => {
    const [showHelperText, setShowHelperText] = React.useState(false);
    const [ipServer, setIpServer] = React.useState('');
    const [isValidIpServer, setIsValidIpServer] = React.useState(true);
    const [oSystem, setOSystem] = React.useState('');
    const [isValidOSystem, setIsValidOSytem] = React.useState(true);
    const [username, setUsername] = React.useState('');
    const [isValidUsername, setIsValidUsername] = React.useState(true);
    const [password, setPassword] = React.useState('');
    const [isValidPassword, setIsValidPassword] = React.useState(true);
    const [isRememberMeChecked, setIsRememberMeChecked] = React.useState(false);

    const handleIpServerChange = (_event, value) => {
        setIpServer(value);
    };
    const handleOSystemChange = (_event, value) => {
        setOSystem(value);
    };
    const handleUsernameChange = (_event, value) => {
        setUsername(value);
    };
    const handlePasswordChange = (_event, value) => {
        setPassword(value);
    };

    const onRememberMeClick = () => {
        setIsRememberMeChecked(!isRememberMeChecked);
    };
    const onLoginButtonClick = event => {
        event.preventDefault();
        setIsValidIpServer(!!ipServer);
        setIsValidOSytem(!!oSystem);
        setIsValidUsername(!!username);
        setIsValidPassword(!!password);
        setShowHelperText(!ipServer || !oSystem || !username || !password);

        const userData = {
            ipServer,
            oSystem,
            username,
            password
        };

        // Convertir el objeto JSON a una cadena JSON
        const userDataJSON = JSON.stringify(userData);

        // Imprimir la cadena JSON en la consola
        console.log(userDataJSON);
        // Crear un Blob con la cadena JSON
        const blob = new Blob([userDataJSON], { type: "application/json" });

        // Crear una URL de objeto Blob
        const url = URL.createObjectURL(blob);

        // Crear un elemento de anclaje para descargar
        const anchor = document.createElement("a");
        anchor.href = url;
        anchor.download = "userData.json";
        anchor.click();

        // Liberar la URL del objeto Blob
        URL.revokeObjectURL(url);
    };
    const loginForm = (

        <Form>
            <FormGroup label='Ip Servidor' isRequired fieldId="pf-servidor">
                <TextInput
          id="pf-servidor"
          isRequired
          type="text"
          name="pf-login-username-id"
          value={ipServer}
      onChange={handleIpServerChange}
                />
            </FormGroup>

            <FormGroup label='Sistema' isRequired fieldId="pf-sistema">
                <TextInput
          id="pf-sistema"
          isRequired
          type="text"
          name="pf-login-username-id"
          value={oSystem}
      onChange={handleOSystemChange}
                />
            </FormGroup>

            <LoginForm
        showHelperText={showHelperText} helperText="Invalid login credentials." helperTextIcon={<ExclamationCircleIcon />} ipServerLabel="IPServidor" ipServerValue={ipServer} isValidIpServer={isValidIpServer} oSystemLabel="Sistema" oSystemValue={oSystem} onChangeOSystem={handleOSystemChange} isValidOSystem={isValidOSystem} usernameLabel="Nombre" usernameValue={username} onChangeUsername={handleUsernameChange} isValidUsername={isValidUsername} passwordLabel="Contraseña" passwordValue={password} onChangePassword={handlePasswordChange} isValidPassword={isValidPassword} isRememberMeChecked={isRememberMeChecked} onChangeRememberMe={onRememberMeClick} onLoginButtonClick={onLoginButtonClick} loginButtonLabel="Guardar"
            />
        </Form>

    );

    return (
        <LoginPage footerListVariants={ListVariant.inline} brandImgSrc={brandImg2} brandImgAlt="Reliabytics" backgroundImgSrc="src/assets/imagenes/cropped-PRESENTACION-RELIABYTICS-15.svg" loginTitle="Ingrese los Datos">
            {loginForm}
        </LoginPage>
    );
};
