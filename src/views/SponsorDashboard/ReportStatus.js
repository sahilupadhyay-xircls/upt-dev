
import { Gift, User, DollarSign } from 'react-feather'

// ** Reactstrap Imports
import { Card, Col, CardHeader, CardTitle, CardBody, Row, CardText } from 'reactstrap'
import Avatar from '@components/avatar'

const ReportStatus = () => {
  const data = [
    {
      title: '0',
      subtitle: 'Number of customer eligible for this reward',
      color: 'light-success',
      icon: <User size={24} />
    },
    {
      title: '0',
      subtitle: 'Customer Rewarded',
      color: 'light-primary',
      icon: <Gift size={24} />
    },
    {
      subtitle: 'Discount Received',
      color: 'light-warning',
      icon: <Gift size={24} />
    },
    {
      subtitle: 'Amount Spend',
      color: 'light-success',
      icon: <DollarSign size={24} />
    }
  ]

  return (
    <Col xl='12'>

      <Card className='card-statistics'>
        <CardHeader>
          <CardTitle tag='h4'>Today's Reports</CardTitle>
        </CardHeader>
        <CardBody className='statistics-body'>
          <Row>
            {
              data.map((currElem) => {
                return (
                  <>
                    <div class="col-xl-3 col-sm-6 col-12 d-flex justify-content-center align-items-center">
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
