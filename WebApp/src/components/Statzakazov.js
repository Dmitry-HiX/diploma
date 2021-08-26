import React, { Component } from "react"
import { Row, Col, Form, Button } from 'react-bootstrap'
import { Pie } from 'react-chartjs-2'
import SearchDataService from "../services/find_uslugi.service"
import { saveAs } from 'file-saver';

export default class Statzakazov extends Component {
    constructor(props) {
        super(props);
        this.onSort = this.onSort.bind(this)
        this.onChangedataNachalo = this.onChangedataNachalo.bind(this)
        this.onChangedataKonec = this.onChangedataKonec.bind(this)
        this.state = {
            search: [],
            vidRaboty: "",
            nomerZakaza: "",
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
                </Col>
                <Col>
                    <Pie id="myChart" data={{
                        labels: data.ArrayB,
                        datasets: [{
                            label: 'Текст',
                            data: data.ArrayA,
                            borderColor: ['White'],
                            backgroundColor: data.ArrayC
                        }]
                    }}
                        options={{
                            title: { display: true, text: 'Статистика заказов' }
                        }} />
                </Col>
            </Row >
        )
    }
}
function filter(Datan, DataK, arr) {
    let a = arr.map(search => search.nomerZakaza);
    let b = arr.map(search => search.usluga);
    let NewB = arr.map(search => search.usluga);
    let c = arr.map(search => search.dataVypolneniya);
    let NewA= new Array();
    if (Datan == 0) {
        let Temp = c[0];
        for (let i = 0; i < c.length; i++){
            if (c[i] < Temp){Temp = c[i];}}
        Datan = Temp;
    }  
    if (DataK == 0) {
        let Temp = c[0];
        for (let i = 0; i < c.length; i++){
            if (c[i] > Temp){Temp = c[i];}}
        DataK = Temp;
    }
    for (let i = 0, len = b.length; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (b[i] == b[j] && i != j) {
                b.splice(j, 1);
                len--;
                j--;
            }
        }
    }
    let colorArr = new Array();
    for (let i = 0, len = a.length; i < b.length; i++) {
        NewA[i] = 0;
        for (let j = 0; j < len; j++) {
            if (b[i] == NewB[j]) {
                if ((new Date(c[j]) > new Date(Datan)) && (new Date(c[j]) < new Date(DataK))) {
                    NewA[i]++;
                    colorArr.push(getRandomColor());
                }
            }
        }
    }
    return { ArrayA: NewA, ArrayB: b, ArrayC: colorArr }
}
function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}