import React, { Component } from "react"
import { Container, Row, Col } from 'react-bootstrap'
import { Bar } from 'react-chartjs-2'
import Count_monthDataService from "../services/count_month.services"


export default class Home extends Component {

    constructor(props) {
        super(props);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.retrieveEmployees = this.retrieveEmployees.bind(this);
        this.state = {
            count_month: []
        }
    }

    componentDidMount() {
        this.retrieveEmployees();
    }

    retrieveEmployees() {
        Count_monthDataService.getAll()
            .then((response) => 
            {
                let arr = response.data.reverse();
                this.setState({count_month: arr});
            }).catch(e => {console.log(e);});
    }

    render() {
        const { count_month } = this.state;
        let a = count_month.map(newcount_month => newcount_month.count);
        let b = count_month.map(newcount_month => newcount_month.dataVypolneniya);

        return (
            <Container className="show-grid">
                <Row className="row-grid">
                    <Col className="col-grid" md={6}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nibh nisi, dapibus non sem id, blandit pharetra mauris. 
                    In rhoncus nisi at sem iaculis, in euismod neque interdum. Cras non est velit. Nullam orci orci, aliquet sed enim sit amet, sagittis ultrices ex. 
                    Suspendisse ullamcorper urna nec mi lacinia venenatis. Ut nec nisi porta, iaculis lectus et, condimentum dolor. Vivamus ultrices nisi nec suscipit dictum.
                    Proin consectetur fermentum congue. Aliquam dictum non ex at lacinia. Donec sed augue nulla. Suspendisse posuere enim scelerisque dolor malesuada pulvinar. 
                    In lobortis ex et ligula consectetur imperdiet. Etiam imperdiet varius ligula nec rutrum. Nullam volutpat justo est, at ullamcorper purus aliquam et.
                    </Col>
                    <Col className="col-grid" md={6}>
                        <Bar
                            data={{labels: b, datasets:[{
                                    data: a, backgroundColor:
                                    ['red', 'blue', 'yellow', 'green', 'purple']}],borderWidth: 1}}
                            width={300}
                            height={300}
                            options={{
                                title: {display: true, text: 'Выполненные заказы'},
                                maintainAspectRatio: false,
                                legend: { display: false },
                                scales: { yAxes: [{ ticks: { beginAtZero: true }}]}}}/>
                    </Col>
                </Row>
            </Container>
        )
    }
}