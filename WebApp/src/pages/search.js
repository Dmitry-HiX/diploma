import React, { Component } from "react"
import { Container, Table, Row, Dropdown, Form, Button, Col } from 'react-bootstrap'
import SearchDataService from "../services/find_zakazy.service"

export default class Search extends Component {

    constructor(props) {
        super(props);
        this.onSort = this.onSort.bind(this)
        this.onSortnumber = this.onSortnumber.bind(this)
        this.onChangeSerch = this.onChangeSerch.bind(this)
        this.serch = this.serch.bind(this)
        this.state = {
            search: [],
            serch: "",
            sort: false,
            sortkey: ""
        };
    }
    componentDidMount() {
        SearchDataService.getAll().then((res) => {
            this.setState({ search: res.data });
        });
    }
    onChangeSerch(e) {
        if(e.target.value==""){
            this.componentDidMount()
        }
        this.setState({
            serch: e.target.value
        });
    }
    serch(e){
        e.preventDefault();
        SearchDataService.getAll(this.state.serch)
        .then(response => { this.setState({ search: response.data }); });
    }
    onSortnumber(e, sortKey) {
        e.preventDefault();
        const { search } = this.state;
        if (this.state.sortkey == sortKey) {
            if (this.state.sort === true) {
                search.sort((a, b) => b[sortKey] - a[sortKey])
                this.setState({ search })
                this.setState({ sort: false })
            }
            else {
                search.sort((a, b) => a[sortKey] - b[sortKey])
                this.setState({ search })
                this.setState({ sort: true })
            }
        }
        else {
            search.sort((a, b) => a[sortKey] - b[sortKey])
            this.setState({ search })
            this.setState({ sort: true })
            this.setState({ sortkey: sortKey })
        }
    }
    onSort(event, sortKey) {
        const { search } = this.state;
        if (this.state.sortkey == sortKey) {
            if (this.state.sort === true) {
                search.sort((a, b) => b[sortKey].localeCompare(a[sortKey]))
                this.setState({ search })
                this.setState({ sort: false })
            }
            else {
                search.sort((a, b) => a[sortKey].localeCompare(b[sortKey]))
                this.setState({ search })
                this.setState({ sort: true })
            }
        }
        else {
            search.sort((a, b) => a[sortKey].localeCompare(b[sortKey]))
            this.setState({ search })
            this.setState({ sort: true })
            this.setState({ sortkey: sortKey })
        }
    }
    render() {
        const { search } = this.state;
        return (
            <Container className="show-grid">
                <Row className="col-grid">
                    <Form>
                        <Form.Row className="align-items-center">
                            <Col xs="auto">
                                <Dropdown>
                                    <Dropdown.Toggle variant="info" id="dropdown-basic">
                                        Сортировка
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item onClick={e => this.onSortnumber(e, 'nomerZakaza')}>Номер</Dropdown.Item>
                                        <Dropdown.Item onClick={e => this.onSort(e, 'fioVladelcy')}>Заказчик</Dropdown.Item>
                                        <Dropdown.Item onClick={e => this.onSort(e, 'fioEmployees')}>Исполнитель</Dropdown.Item>
                                        <Dropdown.Item onClick={e => this.onSort(e, 'ehtap')}>Вид работы</Dropdown.Item>
                                        <Dropdown.Item onClick={e => this.onSort(e, 'dataPostupleniya')}>Дата поступления</Dropdown.Item>
                                        <Dropdown.Item onClick={e => this.onSort(e, 'dataVypolneniya')}>Дата выполнения</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Col>
                            <Col xs="auto">
                                <Form.Control type="text" placeholder="Фильтр поиска" onChange={this.onChangeSerch} />
                            </Col>
                            <Col xs="auto">
                                <Button variant="primary" onClick={this.serch}>
                                    Поиск
                                </Button>
                            </Col>
                        </Form.Row>
                    </Form>
                </Row>
                <Row className="col-grid">
                    <Table responsive className="table-wrapper" striped bordered hover>
                        <thead>
                            <tr>
                                <th>Номер</th>
                                <th>Заказчик</th>
                                <th>Исполнитель</th>
                                <th>Вид работы</th>
                                <th>Стоимость</th>
                                <th>Дата поступления</th>
                                <th>Дата выполнения</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                search.map(
                                    newSearch =>
                                        <tr key={newSearch.nomerZakaza}>
                                            <td>{newSearch.nomerZakaza}</td>
                                            <td>{newSearch.fioVladelcy}</td>
                                            <td>{newSearch.fioEmployees}</td>
                                            <td>{newSearch.ehtap}</td>
                                            <td>{newSearch.dohod}</td>
                                            <td>{newSearch.dataPostupleniya}</td>
                                            <td>{newSearch.dataVypolneniya}</td>
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