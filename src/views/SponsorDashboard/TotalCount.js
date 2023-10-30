import React from 'react'
import { Col, Row, Card, CardBody, CardText } from 'reactstrap'
import Avatar from '@components/avatar'
import { TrendingUp, User, Box, DollarSign, CheckSquare } from 'react-feather'

export default function TotalCount() {

  const data = [
    {
      title: '120',
      subtitle: 'Total customers eligible for this reward',
      color: 'light-info',
      icon: <User size={20} />
    },
    {
      title: '60',
      subtitle: 'Total Customers Rewarded',
      color: 'light-primary',
      icon: <CheckSquare size={20} />
    },
    {
      title: '67',
      subtitle: 'Total Hout Partners',
      color: 'light-info',
      icon: <User size={20} />
    },
    {
      title: '100',
      subtitle: 'Total Rewards Sponsered',
      color: 'light-info',
      icon: <User size={20} />
    }
  ]

  return (
    <>
    {
      data.map((currElem) => {
        return (

          <Col xl='3' md='6' xs='12' >
          <Card >
              <CardBody>

                <div class="media text-center">
                  
                  <Avatar color={currElem.color} icon={currElem.icon} style={{padding:"5px"}}/>
                  <div className=''>
                    <h4 className='fw-bolder my-1'>{currElem.title}</h4>
                    <CardText className='font-small-3 mb-0 fw-bold text-primary'>{currElem.subtitle}</CardText>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
          )
        })
      }

      </>
  )
}
