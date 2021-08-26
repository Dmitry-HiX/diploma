import React from "react"
import { Container, Table} from 'react-bootstrap'

export const Stok = () => (
    <Container className="show-grid">
        <Table striped bordered>
            <thead>
                <tr>
                    <th>Услуга</th>
                    <th>Стоимость</th>
                    <th>Время выполнения</th>
                    <th>Гарантия</th>
                </tr>
            </thead>
            <tbody>
                <td>{1}</td>
                <td>{2}</td>
                <td>{3}</td>
                <td>{4}</td>
            </tbody>
        </Table>
    </Container>
)