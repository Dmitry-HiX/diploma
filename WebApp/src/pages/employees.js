import React, { Component } from "react"
import { Button, Container, Table, Form, Col, Row } from 'react-bootstrap'
import EmployeesDataService from "../services/employees.service.js"

export default class Employees extends Component {

    constructor(props) {
        super(props);
        this.onChangeSerch = this.onChangeSerch.bind(this);
        this.serch = this.serch.bind(this);

        this.state = {
            serch: "",
            employees: []
        }
    }
    componentDidMount() {
        EmployeesDataService.getAll().then((res) => {
            this.onSort(res.data);
        });
    }
    onChangeSerch(e) {
        if (e.target.value == "") {
            this.componentDidMount()
        }
        this.setState({ serch: e.target.value });
    }
    serch(e) {
        e.preventDefault();
        EmployeesDataService.getAll(this.state.serch)
            .then(response => 
                { this.onSort(response.data); });
    }
    onSort(arr) {
        arr.sort((a, b) => a['ntabelnyj'] - (b['ntabelnyj']))
        this.setState({ 
            employees: arr })
    }
    render() {
        const { employees } = this.state;
        return (
            <Container className="show-grid">
                <Form>
                    <Form.Row className="align-items-end">
                        <Col>
                            <Form.Group>
                                <Form.Label>Поиск сотрудников</Form.Label>
                                <Form.Control type="text" placeholder="Введите табельный номер, фамилию или должность сотрудника."
                                    onChange={this.onChangeSerch} />
                            </Form.Group>
                        </Col>
                        <Col >
                            <Form.Group>
                                <Button variant="primary" type="submit" onClick={this.serch}>
                                    Найти
                                </Button>
                            </Form.Group>
                        </Col>
                    </Form.Row>
                </Form>
                <Table responsive className="table-wrapper" striped bordered hover>
                    <thead>
                        <tr>
                            <th>Номер</th>
                            <th>Фамилия</th>
                            <th>Имя</th>
                            <th>Отчество</th>
                            <th>Телефон</th>
                            <th>Должность</th>
                            <th>Дата приема</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employees.map(
                                employee =>
                                    <tr key={employee.ntabelnyj}>
                                        <td>{employee.ntabelnyj}</td>
                                        <td>{employee.familiya}</td>
                                        <td>{employee.imya}</td>
                                        <td>{employee.otchestvo}</td>
                                        <td>{employee.telefon}</td>
                                        <td>{employee.dolzhnost}</td>
                                        <td>{employee.dataPriema}</td>
                                    </tr>
                            )
                        }
                    </tbody>
                </Table>
            </Container>
        )
    }
}