import React from 'react'
import './getStarted.scss'
import { Card, CardBody, Col, Row, Table } from 'reactstrap'
import { Link } from 'react-router-dom'
export default function CreateSample() {
    return (
        <Card>
            <CardBody>

                <div>
                    <h1 className='text-center fs-1 fw-bold'>Create Sample</h1>
                </div>

                <div className='ms-2 mt-2 '>
                    <Row className='mt-3'>

                        <h4 className='m-0 fs-4 fw-bold '> Which product do you want to give as a free sample ?</h4>
                        <p className='ms-1 font-small-3'>Pick one for now. You can create more samples later.</p>
                        <Col md="6" >
                        <Table bordered className='p-1 ' >
                            <thead>
                                <tr>
                                    <th>
                                        #
                                    </th>
                                    <th>
                                        First Name
                                    </th>
                                    <th>
                                        Last Name
                                    </th>
                                    <th>
                                        Username
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">
                                        1
                                    </th>
                                    <td>
                                        Mark
                                    </td>
                                    <td>
                                        Otto
                                    </td>
                                    <td>
                                        @mdo
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        2
                                    </th>
                                    <td>
                                        Jacob
                                    </td>
                                    <td>
                                        Thornton
                                    </td>
                                    <td>
                                        @fat
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        3
                                    </th>
                                    <td>
                                        Larry
                                    </td>
                                    <td>
                                        the Bird
                                    </td>
                                    <td>
                                        @twitter
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                        </Col>
                    </Row>
                </div>
            </CardBody>
            <div className='p-2 d-flex justify-content-between'>
                <Link to='/merchant/sample/Get-Started/set-conditions' className='btn btn-primary'>Previous</Link>
                <Link to='/merchant/sample/Get-Started/create-sample' className='btn btn-primary'>Save & Proceed</Link>
            </div>
        </Card>
    )
}
