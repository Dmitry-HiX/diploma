import React, { Component } from "react"
import { Container, Row, Col, Dropdown } from 'react-bootstrap'
import Marja from "../components/Marja"
import Dohod from "../components/Dohod"
import Statzakazov from "../components/Statzakazov"
import Dinamcen from "../components/Dinamcen"
import Bestemployees from "../components/Bestemployees"

export default class Report extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            switcher: 1
        };
    }
    handleClick(val) {
        this.setState({ switcher: val });
    }

    render() {
        return (            
            <Container className="show-grid">
                <Row>
                    <Col md={2} className="col-grid">
                        <Dropdown>
                            <Dropdown.Toggle variant="primary" id="dropdown-basic">
                                Выбор отчета
                        </Dropdown.Toggle>
                            <Dropdown.Menu>                                
                                <Dropdown.Item value="1" onSelect={() => this.handleClick(1)}>Доходы и расходы</Dropdown.Item>
                                <Dropdown.Item value="2" onSelect={() => this.handleClick(2)}>Маржинальность</Dropdown.Item>
                                <Dropdown.Item value="3" onSelect={() => this.handleClick(3)}>Статистика заказов</Dropdown.Item>
                                <Dropdown.Item value="4" onSelect={() => this.handleClick(4)}>Изменение заказов</Dropdown.Item>
                                <Dropdown.Item value="5" onSelect={() => this.handleClick(5)}>Лучший сотрудник</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Switcher switcher={this.state.switcher} />
                    </Col>
                </Row>
            </Container>
        )
    }
}
function Switcher(props) {
    const switcher = props.switcher;
    switch (switcher) {        
        case 1: { return <Dohod />; }
        case 2: { return <Marja />; }
        case 3: { return <Statzakazov />; }
        case 4: { return <Dinamcen />; }
        case 5: { return <Bestemployees />; }
    }
}



