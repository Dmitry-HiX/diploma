import React, { Component } from "react"
import { Button, Form, Table, Row, Col, Container, Modal } from 'react-bootstrap'
import ZakazyDataService from "../services/zakazy.service";
import SearchDataService from "../services/find_zakazy.service";
import MonitoringDataService from "../services/monitoring.service";
import NaboruslugDataService from "../services/naboruslug.service";
import ZakazannyeuslugiDataService from "../services/zakazannyeuslugi.service";
import ServiceDataService from "../services/service.services";
import Find_employeesDataService from "../services/find_employees.service";
import Find_vladelcyDataService from "../services/find_vladelcy.service";
export default class Order extends Component {

    constructor(props) {
        super(props);
        this.onChangeDataPostupleniya = this.onChangeDataPostupleniya.bind(this);
        this.onChangeNomerVladelca = this.onChangeNomerVladelca.bind(this);
        this.onChangeNomerSotrudnika = this.onChangeNomerSotrudnika.bind(this);
        this.onChangeDataVypolneniya = this.onChangeDataVypolneniya.bind(this);
        this.saveZakazy = this.saveZakazy.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleCloseError = this.handleCloseError.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.handleShowError = this.handleShowError.bind(this);
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
        this.checkDate = this.checkDate.bind(this);

        this.state = {
            show: false,
            showerror: false,
            errortext: "",
            zakazy: [],
            zakazyvyvod:[],
            nomerZakaza: 0,
            dataPostupleniya: "",
            ocenkaSrokaVypolneniya: "",
            nomerVladelca: 0,
            nomerSotrudnika: "",
            dataVypolneniya: "",
            search: [],
            employees: [],
            service: [],
            selected: [],
            vladelcy: []
        };
    }
    checkDate(e) {
        e.preventDefault();
        let switcher = 0;
        if (this.state.nomerSotrudnika == "") {
            switcher = 1;
        }
        else if (this.state.nomerVladelca == 0) {
            switcher = 2;
        }
        else if (this.state.dataPostupleniy == "" || this.state.dataPostupleniya.length == 0) {
            switcher = 3;
        }
        else if (this.state.dataVypolneniya == "" || this.state.dataVypolneniya.length == 0) {
            switcher = 4;
        }
        else if (new Date(this.state.dataPostupleniya) >= new Date(this.state.dataVypolneniya)) {
            switcher = 5;
        }
        else if (this.state.selected.length == 0) {
            switcher = 6;
        }
        else {
            let temp = false;
            this.state.selected.forEach((element) => {
                if (element == true) {
                    temp = true;
                }
            })
            if (temp == false) {
                switcher = 6;
            }
        }
        switch (switcher) {
            case 0: this.saveZakazy(); break;
            case 1: this.setState({ errortext: "Не выбран исполнитель заказа. Заказ не может быть создан." }); this.handleShowError(); break;
            case 2: this.setState({ errortext: "Заказчик не выбран. Заказ не может быть создан." }); this.handleShowError(); break;
            case 3: this.setState({ errortext: "Дата создания заказа пуста. Заказ не может быть создан." }); this.handleShowError(); break;
            case 4: this.setState({ errortext: "Дата завершения заказа пуста. Заказ не может быть создан." }); this.handleShowError(); break;
            case 5: this.setState({ errortext: "Проверьте даты создания и завершения заказа. Заказ не может быть создан." }); this.handleShowError(); break;
            case 6: this.setState({ errortext: "Услуги не включены в заказ. Заказ не может быть создан." }); this.handleShowError(); break;
        }
    }

    handleCheckboxChange(e) {
        this.state.selected.map(selected => selected);
        if (this.state.selected[e.target.id - 1] == false) {
            this.setState(this.state.selected.splice(e.target.id - 1, 1, true));
        }
        else {
            this.setState(this.state.selected.splice(e.target.id - 1, 1, false));
        }
    }

    componentDidMount() {
        ZakazyDataService.getAll().then((res) => {
            this.setState({ zakazy: res.data });});
        SearchDataService.getAll().then((res) => {
            this.onSortVyvod(res.data);});
        Find_employeesDataService.getAll().then((res) => {
            this.setState({ employees: res.data });
        }).then(() => {
            this.setState({ nomerSotrudnika: this.state.employees[0].ntabelnyj })
        });
        Find_vladelcyDataService.getAll().then((res) => {
            this.setState({ vladelcy: res.data });
        }).then(() => {
            this.setState({ nomerVladelca: this.state.vladelcy[0].nomerVladelca })
        });
        ServiceDataService.getAll().then((res) => {
            this.setState({ service: res.data });
        });        
    }

    onChangeHandler = event => {
        const { name, checked } = event.target;
        this.setState({ [name]: checked });
    }

    onChangeNomerSotrudnika(e) {
        this.setState({
            nomerSotrudnika: e.target.value
        });
    }
    onChangeNomerVladelca(e) {
        this.setState({
            nomerVladelca: e.target.value
        });
    }

    onChangeDataVypolneniya(e) {
        this.setState({
            dataVypolneniya: e.target.value
        });        
    }

    onChangeDataPostupleniya(e) {
        this.setState({
            dataPostupleniya: e.target.value
        });
    }
    onSortVyvod(res) {
        res.sort((a, b) => b['nomerZakaza'] - (a['nomerZakaza']))
        this.setState({search: res})
    }
    onSort() {
        const { zakazy } = this.state;
        zakazy.sort((a, b) => a['nomerZakaza'] - (b['nomerZakaza']))
        this.setState({ zakazy: zakazy })
    }
    generator() {        
        let iter = 0;
        let check = false;
        let arr = this.state.zakazy.map(zakazy => zakazy.nomerZakaza);
        for (let i = 0; i < arr.length; i++) {
            iter++;
            if (arr[i] != iter) {
                return iter;
            }
        }
        if (check == false) {
            iter++;
            return iter;
        }
        
    }
    saveMonitoring() {
        let monitoring = {
            nomerZakaza: this.state.nomerZakaza,
            ehtap: "Диагностика"
        };
        MonitoringDataService.create(monitoring).then(res => {
            console.log(res.data);
        }).catch(e => { console.log(e); });
    }
    saveNaboruslug() {
        let naboruslug = {
            nomerZakaza: this.state.nomerZakaza,
            kod_uslugi: 2,
            ocenkaSrokaVypolneniya: this.state.ocenkaSrokaVypolneniya,
            dataSozdania: this.state.dataPostupleniya,
        };
        let iterat = 0;
        this.state.selected.forEach((element) => {
            iterat++;
            if (element == true) {
                naboruslug = {
                    nomerZakaza: this.state.nomerZakaza,
                    kodUslugi: iterat,
                    dataSozdania: this.state.dataPostupleniya,
                };
                NaboruslugDataService.create(naboruslug).then(res => {
                    console.log(res.data); this.componentDidMount(); this.setState({ selected: [] });
                }).catch(e => { console.log(e); });
            }
        })
    }
    saveZakazannyeuslugi() {
        let zakazannyeuslugi = {
            nomerZakaza: this.state.nomerZakaza,
            ustanovlennyeZapchasti: "-",
            ntabelnyj: this.state.nomerSotrudnika,
            vidRaboty: "ТО"
        };
        ZakazannyeuslugiDataService.create(zakazannyeuslugi).then(res => {
            console.log(res.data); this.saveNaboruslug();
        }).catch(e => { console.log(e); });

    }
    saveZakazy() {
        let srok=(Math.abs(Math.ceil((new Date(this.state.dataVypolneniya)-new Date(this.state.dataPostupleniya))/86400000)))+"d.";
        let zakazy = {
            nomerZakaza: this.state.nomerZakaza,
            dataPostupleniya: this.state.dataPostupleniya,
            nomerVladelca: this.state.nomerVladelca,
            ocenkaSrokaVypolneniya: srok,
            nomerSotrudnika: this.state.nomerSotrudnika,
            dataVypolneniya: this.state.dataVypolneniya,
        };
        ZakazyDataService.create(zakazy).then(res => {
            this.setState({ocenkaSrokaVypolneniya: srok});console.log(res.data); 
            this.saveMonitoring(); this.saveZakazannyeuslugi();
        }).catch(e => { console.log(e); });
    }
    onKeyPress(event) {
        const keyCode = event.keyCode || event.which;
        const keyValue = String.fromCharCode(keyCode);
        if (!/[0-9]/.test(keyValue))
            event.preventDefault();
    }
    handleCloseError(e) {
        e.preventDefault();
        this.setState({ showerror: false })
    }
    handleShowError() {
        this.setState({ showerror: true })
    }
    handleClose() {
        this.setState({ show: false })
    }
    bildSelected() {
        this.onSort();
        this.setState({
            nomerZakaza: this.generator()
        });
        if (this.state.selected.length == 0) {
            for (let i = 0; i < this.state.service.length; i++) {
                this.setState(prevState => ({
                    selected: [...prevState.selected, false]
                }))
            }
        }
    }
    handleShow() {
        this.bildSelected();
        this.setState({ show: true })
    }

    render() {
        const { search } = this.state;
        const { employees } = this.state;
        const { vladelcy } = this.state;
        const { service } = this.state;
        return (
            <Container className="show-grid">
                <Row className="row-grid" >
                    <Col md={6} className="col-grid">
                        <Form>
                            <Form.Group>
                                <Form.Label>Исполнитель</Form.Label>
                                <Form.Control as="select" placeholder="qwe" onChange={this.onChangeNomerSotrudnika}>
                                    {
                                        employees.map(
                                            Employees =>
                                                <option key={parseInt(Employees.ntabelnyj)}
                                                    value={parseInt(Employees.ntabelnyj)}>
                                                    {Employees.fioEmployees}</option>)
                                    }
                                </Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Заказчик</Form.Label>
                                <Form.Control as="select" onChange={this.onChangeNomerVladelca}>
                                    {
                                        vladelcy.map(
                                            Vladelcy =>
                                                <option key={Vladelcy.nomerVladelca}
                                                    value={Vladelcy.nomerVladelca}>
                                                    {Vladelcy.fioVladelca}</option>)
                                    }
                                </Form.Control>
                            </Form.Group>
                        </Form>
                        <Row className="col-container-grid">
                            <Button variant="primary" type="submit" onClick={this.checkDate}>
                                Добавить заказ
                            </Button>
                        </Row>
                    </Col>
                    <Col md={6} className="col-grid">
                        <Form>
                            <Form.Group>
                                <Form.Label>Дата создания</Form.Label>
                                <Form.Control type="date" onChange={this.onChangeDataPostupleniya} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Дата завершения</Form.Label>
                                <Form.Control type="date" onChange={this.onChangeDataVypolneniya} />
                            </Form.Group>
                        </Form>
                        <Button variant="info" onClick={() => { this.handleShow() }}>
                            Выбор услуг
                        </Button>

                        <Modal show={this.state.showerror} onHide={this.handleCloseError}>
                            <Modal.Header closeButton>
                                <Modal.Title>Ошибка заполнения формы.</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>{this.state.errortext}</Modal.Body>
                            <Modal.Footer>
                                <Button variant="primary" onClick={this.handleCloseError}>
                                    Закрыть
                                </Button>
                            </Modal.Footer>
                        </Modal>

                        <Modal show={this.state.show} onHide={this.handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Услуги включаемые в заказ.</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form>
                                    {['checkbox'].map((type) => (
                                        <div key={type}>
                                            {service.map(Service =>
                                                <Form.Check key={Service.kodUslugi} onChange={this.handleCheckboxChange} id={Service.kodUslugi} type={type} checked={this.state.selected[Service.kodUslugi - 1]} label={Service.naimenovanie} />
                                            )}
                                        </div>
                                    ))}
                                </Form>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="primary" onClick={this.handleClose}>
                                    Закрыть
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </Col>
                </Row>
                <Row className="row-grid">
                    <Table responsive className="table-wrapper" striped bordered hover >
                        <thead>
                            <tr>
                                <th>Номер</th>
                                <th>Заказчик</th>
                                <th>Исполнитель</th>
                                <th>Время выполнения</th>
                                <th>Стоимость</th>
                                <th>Дата создания</th>
                                <th>Дата завершения</th>
                            </tr>
                        </thead>
                        <tbody>
                            {search.map(
                                Search => <tr key={Search.nomerZakaza}>
                                    <td>{Search.nomerZakaza}</td>
                                    <td>{Search.fioVladelcy}</td>
                                    <td>{Search.fioEmployees}</td>
                                    <td>{Search.srok}</td>
                                    <td>{Search.dohod}</td>
                                    <td>{Search.dataPostupleniya}</td>
                                    <td>{Search.dataVypolneniya}</td>
                                </tr>)}
                        </tbody>
                    </Table>
                </Row>
            </Container>
        )
    }

}
