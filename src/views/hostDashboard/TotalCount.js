import React from 'react'
import { Col, Row, Card, CardBody, CardText } from 'reactstrap'
import Avatar from '@components/avatar'
import { User } from 'react-feather'
// icon import
import {MdPeopleOutline, MdOutlineCurrencyRupee} from 'react-icons/md'
import {LiaUserFriendsSolid} from 'react-icons/lia'


export default function TotalCount() {

  const data = [
    {
      title: '120',
      subtitle: 'Total Customers Hosted',
      color: 'light-info',
      icon: <MdPeopleOutline size={20} />
    },
    {
      title: '60',
      subtitle: 'Total Sponser Partner',
      color: 'light-primary',
      icon: <LiaUserFriendsSolid size={20} />
    },
    {
      title: '67',
      subtitle: 'Total Earnings',
      color: 'light-success',
      icon: <MdOutlineCurrencyRupee size={20} />
    }
  ]

  return (
    <>
    {
      data.map((currElem) => {
        return (

          <Col xl='4' md='4' xs='12' >
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
