import React from 'react';
import { Container, Navbar, NavDropdown, Nav} from 'react-bootstrap';

class Header extends React.Component {
    render() {
        return(
            <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand>MyShop</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <NavDropdown title="Товары" id="basic-nav-dropdown">
                        <NavDropdown.Item href='/find_goods'>Найти товар</NavDropdown.Item>
                        <NavDropdown.Item href='/add_goods'>Добавить товар</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav className="me-auto">
                    <NavDropdown title="Категории" id="basic-nav-dropdown">
                        <NavDropdown.Item href='/find_goods'>Найти категорию</NavDropdown.Item>
                        <NavDropdown.Item href='/add_goods'>Добавить категорию</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav className="me-auto">
                    <NavDropdown title="Заказы" id="basic-nav-dropdown">
                        <NavDropdown.Item href='/find_goods'>Найти заказ</NavDropdown.Item>
                        <NavDropdown.Item href='/add_goods'>Добавить заказ</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav className="me-auto">
                    <NavDropdown title="Способ доставки" id="basic-nav-dropdown">
                        <NavDropdown.Item href='/find_goods'>Найти товар</NavDropdown.Item>
                        <NavDropdown.Item href='/add_goods'>Добавить товар</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav className="me-auto">
                    <NavDropdown title="Пользователи" id="basic-nav-dropdown">
                        <NavDropdown.Item href='/find_goods'>Найти пользователя</NavDropdown.Item>
                        <NavDropdown.Item href='/add_goods'>Добавить пользователя</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        );
    }
};

export default Header;