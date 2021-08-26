import React from "react"
import { Navbar, Nav, Container } from 'react-bootstrap'
import { BiHome, BiCartAlt, BiSearch, BiListUl, BiUser } from "react-icons/bi";
import styled from 'styled-components';

const Styles = styled.div`
    a, .navbar-brand, .navbar-nav, .nav-link{
        color: #adb1b8;
        &:hover{
            color: white
        }
    }
`
export default class Header extends React.Component {
    render() {
        return (
            <Styles>
                <Navbar collapseOnSelect expand="xl" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href='/'>{<BiHome glyph="home" />}Главная</Nav.Link>
                                <Nav.Link href='/order'>{<BiCartAlt glyph="shopping-cart" />} Заказы</Nav.Link>
                                <Nav.Link href='/service'>{<BiCartAlt glyph="shopping-cart" />} Услуги</Nav.Link>
                                <Nav.Link href='/search'><BiSearch glyph="search" />Поиск заказов</Nav.Link>
                                <Nav.Link href='/report'><BiListUl glyph="list-alt" />Отчетность</Nav.Link>
                                <Nav.Link href='/employees'><BiUser glyph="user" />Кадры</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Styles>);
    }
}
