import React from "react"
import { Container, Modal, Button, Form } from 'react-bootstrap'
import EmployeesDataService from "./services/employees.service";
import Find_employeesDataService from "./services/find_employees.service";

export default class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.handleApprove = this.handleApprove.bind(this);
        this.onChangeLogin = this.onChangeLogin.bind(this);
        this.onChangeParol = this.onChangeParol.bind(this);
        this.CookiesDelete = this.CookiesDelete.bind(this)

        this.state = {
            employees: "",
            login: "",
            parol: "",
            approve: false,
            show: true,
            fioEmployees: ""
        };
    }
    onChangeLogin(e) {
        this.setState({
            login: e.target.value
        });
    }
    componentDidMount() {
        this.CheckDataCookce();
        Find_employeesDataService.getAll().then((res) => {
            this.setState({ employees: res.data });
        });
    }
    
    onChangeParol(e) {
        this.setState({
            parol: e.target.value
        });
    }

    handleApprove(e) {
        EmployeesDataService.findByLogin(this.state.login, this.state.parol).then((res) => {
            this.setState({ employees: res.data }); this.CheckData()
        })
    }

    CheckDataCookce() {
        let Login = this.getCookie("login")
        let Parol = this.getCookie("parol")
        if (Login == undefined || Parol == undefined)
        {
            this.setState({show: true});
        }
        else{ this.setState({show: false, login: Login, parol: Parol});}
    }

    CheckData() {
        if (this.state.employees.length > 0) {
            this.setState({ approve: true, show: false })
            this.setCookie('login', this.state.login, { secure: true, 'max-age': 3600 });
            this.setCookie('parol', this.state.parol, { secure: true, 'max-age': 3600 });
        }
    }
    getCookie(name) {
        let matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }
    setCookie(name, value, options = {}) {
        options = { path: '/', ...options };
        if (options.expires instanceof Date) { options.expires = options.expires.toUTCString(); }
        let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
        for (let optionKey in options) {
            updatedCookie += "; " + optionKey;
            let optionValue = options[optionKey];
            if (optionValue !== true) {
                updatedCookie += "=" + optionValue;
            }
        }
        document.cookie = updatedCookie;
    }
    CookiesDelete() {
        var cookies = document.cookie.split(";");
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i];
            var eqPos = cookie.indexOf("=");
            var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
            document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;";
            document.cookie = name + '=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        }
        this.setState({ approve: false, show: true });
    }
    render() {             
        return <Container className="footer" fluid style={{ backgroundColor: '#343a40', color: '#adb1b8' }}>
            <Container id="login" style={{  display: 'flex', justifyContent: 'flex-end', padding: '10px' }}>
                <label style={{margin: '7px'}}>Киселев Д.С.</label>
                <Button variant="link" onClick={() => {this.CookiesDelete()}}>Выйти</Button>
            </Container>
            <Modal style={{backdropFilter:'blur(6px)'} } show={this.state.show} backdrop="static">
                <Modal.Header>
                    <Modal.Title>Введите логин и пароль.</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formBasicLogin">
                            <Form.Label>Login</Form.Label>
                            <Form.Control type="login" placeholder="Введите логин" onChange={this.onChangeLogin} />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control autoComplete="on" type="password" placeholder="Введите пароль" onChange={this.onChangeParol} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" type="submit" onClick={this.handleApprove}>
                        Войти
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    }
}
