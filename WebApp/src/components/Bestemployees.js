import React, { Component } from "react"
import { Row, Col, Form, Button } from 'react-bootstrap'
import { Bar } from 'react-chartjs-2'
import SearchDataService from "../services/find_zakazy.service"
import { saveAs } from 'file-saver';

export default class Bestemployees extends Component {
    constructor(props) {
        super(props);
        this.onSort = this.onSort.bind(this)
        this.onChangeData_nachalo = this.onChangeData_nachalo.bind(this)
        this.onChangeData_konec = this.onChangeData_konec.bind(this)
        this.state = {
            search: [],
            nomerZakaza: "",
            fioEmployees: "",
            dataVypolneniya: "",
            dataNachalo: "",
            dataKonec: ""
        };
    }
    onChangeData_nachalo(e) {
        let dataNachalo = e.target.value;
        if (dataNachalo.length == 4 || dataNachalo.length == 7) { dataNachalo = dataNachalo + '-'; }
        if (dataNachalo.length <= 10) {
            this.setState({
                dataNachalo: dataNachalo
            });
        }
    }
    onChangeData_konec(e) {
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

    render() {
        const { search } = this.state;
        let data = filter(this.state.dataNachalo, this.state.dataKonec, search);
        let a = data.ArrayA;
        let b = data.ArrayB;
        return (
            <Row>
                <Col md={2}>
                    <Form>
                        <Form.Group>
                            <Form.Label >Начало периода</Form.Label>
                            <Form.Control type="date" onChange={this.onChangeData_nachalo} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Конец периода</Form.Label>
                            <Form.Control type="date" onChange={this.onChangeData_konec} />
                        </Form.Group>
                        <Button variant="info" onClick={this.saveCanvasPNG}>Скачать PNG</Button>
                    </Form>
                </Col>
                <Col>
                    <Bar id="myChart"
                        data={{ labels: b, datasets: [{ data: a, backgroundColor: data.ArrayC }], borderWidth: 1 }}
                        width={445}
                        height={445}
                        options={{
                            title: { display: true, text: 'Лучшие сотрудники' },
                            maintainAspectRatio: false,
                            legend: { display: false },
                            scales: { yAxes: [{ ticks: { beginAtZero: true } }] }
                        }} />
                </Col>
            </Row>
        )
    }
}
function filter(Datan, DataK, arr) {
    let a = arr.map(search => search.fioEmployees);
    let b = arr.map(search => search.fioEmployees);
    let c = arr.map(search => search.dataVypolneniya);
    let NewA = new Array();
    let colorArr = new Array();
    for (let i = 0, len = b.length; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (b[i] == b[j] && i != j) {
                b.splice(j, 1);
                len--;
                j--;
            }
        }
    }
    for (let i = 0, len = a.length; i < b.length; i++) {
        NewA[i] = 0;
        for (let j = 0; j < len; j++) {
            if (b[i] == a[j]) {
                colorArr.push(getRandomColor());
                NewA[i]++;
                if ((new Date(c[j]) < new Date(Datan)) || (new Date(c[j]) > new Date(DataK))) {
                    NewA[i]--;
                    c.splice(j, 1, "dell,");
                }
                a.splice(j, 1, "dell,");
                j = 0;
            }
        }
    }
    return { ArrayA: NewA, ArrayB: b, ArrayC: colorArr }
}

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}