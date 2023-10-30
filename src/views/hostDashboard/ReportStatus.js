
import { User } from 'react-feather'
import { MdOutlineCurrencyRupee } from 'react-icons/md'
import {TbPigMoney} from 'react-icons/tb'

// ** Reactstrap Imports
import { Card, Col, CardHeader, CardTitle, CardBody, Row, CardText } from 'reactstrap'
import Avatar from '@components/avatar'

const ReportStatus = () => {
  const data = [
    {
      title: '0',
      subtitle: 'Customers Hosted',
      color: 'light-primary',
      icon: <User size={24} />
    },
    {
      title: '0',
      subtitle: 'Earnings',
      color: 'light-warning',
      icon: <TbPigMoney size={24} />
    },
    {
      title: '0',
      subtitle: 'Withdrawable Amount',
      color: 'light-success',
      icon: <MdOutlineCurrencyRupee size={24} />
    }
  ]

  return (
    <Col xl='12'>
    
    <Card className='card-statistics'>
      <CardHeader>
        <CardTitle tag='h4'>Today's Reports</CardTitle>
      </CardHeader>
      <CardBody className='statistics-body'>
        <Row >
            {
                data.map((currElem) => {
                    return (
                        <>
                            <div class="col-xl-4 col-sm-12 col-md-4 d-flex justify-content-center align-items-center">
                                    <Avatar color={currElem.color} icon={currElem.icon} className='me-1' />
                                    <div className='my-auto'>
                                        <h4 className='fw-bolder mb-0'>{currElem.title}</h4>
                                        <CardText className='font-small-3 mb-0'>{currElem.subtitle}</CardText>
                                    </div>  
                            </div>
                        </>
                    )
                })  
            }
        </Row>
      </CardBody>
    </Card>
    </Col>

  )
}

export default ReportStatus
