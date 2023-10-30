
import { TrendingUp, User, Box, DollarSign, Chrome, Smartphone, Mail, MessageSquare } from 'react-feather'
import { DiAndroid } from "react-icons/di"
import { FaApple } from "react-icons/fa"

// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, Row, CardText } from 'reactstrap'
import Avatar from '@components/avatar'

const Reach_User = () => {
  const data = [
    {
      title: 'Web Push',
      color: 'light-primary',
      icon: <Chrome size={24} />
    },
    {
      title: 'Android Push',
      color: 'light-success',
      icon: <DiAndroid size={24} />
    },
    {
      title: 'IOS Push',
      color: 'light-secondary',
      icon: <FaApple size={24} />
    },
    {
      title: 'Email',
      color: 'light-danger',
      icon: <Mail size={24} />
    },
    {
      title: 'SMS',
      color: 'light-warning',
      icon: <MessageSquare size={24} />
    }
  ]

  return (
    <Card className='card-statistics'>
      <CardHeader>
        <CardTitle tag='h4' className={`m-auto m-sm-0`}><strong><h3>Reach Users Via</h3></strong></CardTitle>
      </CardHeader>
      <CardBody className='statistics-body'>
        <Row>
            {
                data.map((currElem) => {
                    return (
                        <>
                            <div class="col-xl col-sm-6 col-12 mb-2 mb-sm-0">
                                <div class="media d-flex">
                                    <Avatar color={currElem.color} icon={currElem.icon} className='me-2' />
                                    <div className='my-auto'>
                                        <h4 className='fw-bolder mb-0' style={{fontSize:`16px`, opacity:`0.9` }}>{currElem.title}</h4>
                                    </div>  
                                </div>
                            </div>
                        </>
                    )
                })  
            }
        </Row>
      </CardBody>
    </Card>
  )
}

export default Reach_User
