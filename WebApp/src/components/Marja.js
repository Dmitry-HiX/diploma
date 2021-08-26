import React, { Component } from "react"
import { Col, Form, Row, Button, Dropdown } from 'react-bootstrap'
import { Radar } from 'react-chartjs-2'
import SearchDataService from "../services/find_zakazy.service"
import ServiceDataService from "../services/service.services";
import Find_uslugiDataService from "../services/find_uslugi.service"
import { saveAs } from 'file-saver';

export default class Marja extends Component {
    constructor(props) {
        super(props);
        this.onSort = this.onSort.bind(this)
        this.onChangedataNachalo = this.onChangedataNachalo.bind(this)
        this.onChangedataKonec = this.onChangedataKonec.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.state = {
            search: [],
            service: [],
            uslugi: [],
            ehtap: "All",
            dohod: "",
            rashod: "",
            dataVypolneniya: "",
            dataNachalo: "",
            dataKonec: ""
        };
    }
    onChangedataNachalo(e) {
        let dataNachalo = e.target.value;
        if (dataNachalo.length == 4 || dataNachalo.length == 7) { dataNachalo = dataNachalo + '-'; }
        if (dataNachalo.length <= 10) {
            this.setState({
                dataNachalo: dataNachalo
            });
        }
    }
    onChangedataKonec(e) {
        let dataKonec = e.target.value;
        if (dataKonec.length == 4 || dataKonec.length == 7) { dataKonec = dataKonec + '-'; }
        if (dataKonec.length <= 10) {
            this.setState({
                dataKonec: dataKonec
            });
        }
    }
    onKeyPress(event) {
        const keyCode = event.keyCode || event.which;
        const keyValue = String.fromCharCode(keyCode);
        if (!/[0-9]/.test(keyValue))
            event.preventDefault();
    }
    componentDidMount() {
        SearchDataService.getAll().then((res) => {
            this.setState({ search: res.data });
        });
        ServiceDataService.getAll().then((res) => {
            this.setState({ service: res.data });
        })
        Find_uslugiDataService.getAll().then((res) => {
            this.setState({ uslugi: res.data });
        })
    }
    onSort(event, sortKey) {
        const { search } = this.state;
        search.sort((a, b) => a[sortKey].localeCompare(b[sortKey]))
        this.setState({ search })
    }
    saveCanvasPNG() {
        const canvasSave = document.getElementById('myChart');
        canvasSave.toBlob(function (blob) {
            saveAs(blob, "ChartPNG.png")
        })
    }
    handleClick(Ehtap) {
        this.setState({ ehtap: Ehtap });
    }

    render() {
        const { service, search, uslugi } = this.state;
        let data = filter(this.state.dataNachalo, this.state.dataKonec, search, uslugi, this.state.ehtap);
        return (
            <Row>
                <Col md={2}>
                    <Form>
                        <Form.Group>
                            <Form.Label >Начало периода</Form.Label>
                            <Form.Control type="date" onChange={this.onChangedataNachalo} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Конец периода</Form.Label>
                            <Form.Control type="date" onChange={this.onChangedataKonec} />
                        </Form.Group>
                        <Button variant="info" onClick={this.saveCanvasPNG}>Скачать PNG</Button>
                    </Form>
                    <Form.Group>
                        <Form.Label>Фильтр услуг</Form.Label>
                        <Dropdown >
                            <Dropdown.Toggle variant="primary" id="dropdown-basic">
                                Выбор услуги
                                </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item onClick={() => this.handleClick("All")}>Показать все</Dropdown.Item>
                                {
                                    service.map(Service =>
                                        <Dropdown.Item key={Service.kodUslugi} onClick={() => this.handleClick(Service.naimenovanie)}>{Service.naimenovanie}
                                        </Dropdown.Item>)}
                            </Dropdown.Menu>
                        </Dropdown>
                    </Form.Group>
                </Col>
                <Col>
                    <Radar id="myChart" data={{
                        labels: data.ArrayB,
                        datasets: [{
                            data: data.ArrayA,
                            label: "Маржинальность",
                            backgroundColor: 'rgba(54, 162, 235, 0.2)',
                            borderColor: 'rgb(54, 162, 235, 0.5)',
                            pointBackgroundColor: 'rgb(54, 162, 235)',
                            pointBorderColor: '#fff',
                            pointHoverBackgroundColor: '#fff',
                            pointHoverBorderColor: 'rgb(54, 162, 235)'
                        }]
                    }}
                        options={{
                            scale: { ticks: { stepSize: 5 } },
                            title: { display: true, text: 'Диаграмма изменения маржи %' }
                        }} />
                </Col>
            </Row>
        )
    }
}
function filter(Datan, DataK, arr, arr2, ehtap) {
    let a, b, c, d;
    if (ehtap == "All") {
        a = arr.map(search => search.dohod);
        b = arr.map(search => search.rashod);
        c = arr.map(search => search.dataVypolneniya);
        d = arr.map(search => search.ehtap);
    }
    else {
        a = arr2.map(uslugi => uslugi.dohod);
        b = arr2.map(uslugi => uslugi.rashod);
        c = arr2.map(uslugi => uslugi.dataVypolneniya);
        d = arr2.map(uslugi => uslugi.usluga);
    }

    let ArrDohod = [11];
    let ArrRashod = [11];
    if (Datan == 0) {
        let Temp = c[0];
        for (let i = 0; i < c.length; i++) {
            if (c[i] < Temp) { Temp = c[i]; }
        }
        Datan = Temp;
    }
    if (DataK == 0) {
        let Temp = c[0];
        for (let i = 0; i < c.length; i++) {
            if (c[i] > Temp) { Temp = c[i]; }
        }
        DataK = Temp;
    }
    for (let i = 0, len = a.length; i < 12; i++) {
        ArrDohod[i] = 0;
        ArrRashod[i] = 0;
        for (let j = 0; j < len; j++) {
            if ((new Date(c[j]) > new Date(Datan)) && (new Date(c[j]) < new Date(DataK))) {
                if (new Date(c[j]).getMonth() == i) {
                    if (ehtap == "All" || d[j] == ehtap) {
                        ArrDohod[i] = ArrDohod[i] + a[j];
                        ArrRashod[i] = ArrRashod[i] + b[j];
                    }
                    a.splice(j, 1);
                    b.splice(j, 1);
                    c.splice(j, 1);
                    d.splice(j, 1);
                    j--
                }
            }
        }
    }
    let arrmarg = [];
    let arrdate = [];
    let month = 'Январь,Февраль,Март,Апрель,Май,Июнь,Июль,Август,Сентябрь,Октябрь,Ноябрь,Декабрь'.split(',');
    for (let j = 0; j < 12; j++) {
        arrmarg[j] = Math.round((ArrDohod[j] - ArrRashod[j]) / ArrDohod[j] * 100);
        if (isNaN(arrmarg[j])) {
            arrmarg.splice(j, 1);
            arrdate.splice(j, 1);
        }
        else if ((j >= new Date(Datan).getMonth()) && (j <= new Date(DataK).getMonth())) {
            arrdate[j] = month[j]
        }
    }
    for (let j = 0; j < arrmarg.length; j++) {
        if (arrmarg[j] == null || arrdate[j] == null) {
            arrdate.splice(j, 1);
            arrmarg.splice(j, 1);
            j--;
        }
    }
    return { ArrayA: arrmarg, ArrayB: arrdate, ArrayC: arrdate }
}