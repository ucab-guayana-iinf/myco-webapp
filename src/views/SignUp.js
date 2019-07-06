import React from 'react';
import NavBar from '../components/Utilities/NavBar/NavBar'
import { Card, CardBody, InputGroup, InputGroupText, InputGroupAddon, Form, FormGroup, FormInput } from 'shards-react'

const SignUp = () => {
    
    return (
        <div className="signup">
            <NavBar />
            <h1 className="big navy title mt-5">Registro</h1>
            
            <Card className="mx-auto" style={{width: 750}}>
                <CardBody className="mx-0">
                    <Form method="">
                        <FormGroup>
                            <InputGroup className="mb-1">
                                <InputGroupAddon type="prepend" >
                                    <InputGroupText className="navy">Username</InputGroupText>
                                </InputGroupAddon>
                                <FormInput size="med" type="text" placeholder="Nombre de Usuario ó e-mail" />
                            </InputGroup>

                            <InputGroup className="mb-1">
                                <InputGroupAddon type="prepend" >
                                    <InputGroupText className="navy">Contraseña</InputGroupText>
                                </InputGroupAddon>
                                <FormInput size="med" type="password" placeholder="Contraseña" />
                            </InputGroup>

                            <button className="btn btn-primary">Registrarse</button>
                        </FormGroup>
                    </Form>
                </CardBody>
            </Card>
        </div>
    );
};

export default SignUp;