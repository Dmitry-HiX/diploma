import React, { Component } from "react"
import { Container, Table, Row } from 'react-bootstrap'
import ServiceDataService from "../services/service.services";

export default class Service extends Component {

    constructor(props) {
        super(props);

        this.state = {
            service: [],
            kod_uslugi: "",
            naimenovanie: "",
            stoimost: "",
            srok_vypolneniya: "",
            garantiya: ""
        };
    }
    componentDidMount() {
        ServiceDataService.getAll().then((res) => {
            this.setState({ service: res.data });
        });
    }

    render() {
        const { service } = this.state;
        return (
            <Container className="show-grid">
                <Row className="row-grid">
                    <Table responsive className="table-wrapper" striped bordered hover className="col-grid">
                        <thead>
                            <tr>
                                <th>Услуга</th>
                                <th>Стоимость</th>
                                <th>Время выполнения</th>
                                <th>Гарантия</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                service.map(
                                    newService =>
                                        <tr key={newService.kodUslugi}>
                                            <td>{newService.naimenovanie}</td>
                                            <td>{newService.stoimost}</td>
                                            <td>{newService.srokVypolneniya}</td>
                                            <td>{newService.garantiya}</td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </Table>
                </Row>
            </Container>
        )
    }
}