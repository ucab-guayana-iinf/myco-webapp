
import React, { Component } from 'react';
import { ModalFooter, Modal,ModalHeader, Card, CardBody, InputGroup, InputGroupText, InputGroupAddon, Form, FormGroup, FormInput } from 'shards-react'
import { withRouter } from 'react-router-dom'

class Exito extends Component {
    

    render() {
        return (
            <Modal size="med" open={this.props.open} toggle={this.props.toggle}>
                <Card>
                    <CardBody className="mx-0 mb-n2 ">
                        <div className="big aquamarine title">
                            Su pago fue subido con exito!
                        </div>
                        <div className="medium navy ">
                            Su pago ahora debera ser confirmado por un administrador.
                        </div>
                    </CardBody>
                </Card>
            </Modal>     
        );
    }
    
};

export default Exito;