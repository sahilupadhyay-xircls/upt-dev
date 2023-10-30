import { useEffect, useState } from 'react'
import { MdOutlineVerified } from 'react-icons/md' //verified icon
import { HiOutlineLightBulb } from 'react-icons/hi' //lightbulb icon
import { CgLaptop } from 'react-icons/cg' //laptop icon
import { Row, Col, CardText } from 'reactstrap'
import Avatar from '@components/avatar'

const StatsCard = () => {
    const [responseData, setResponseData] = useState([])
  const [loading, setLoading] = useState(true)
    const data = [
        {
            title: 'Total earnings',
            subtitle: responseData?.total_revenue,
            color: 'light-primary',
            icon: <CgLaptop size={24} />
        },
        {
            title: 'Total referrals',
            subtitle: responseData?.total_referrals,
            color: 'light-info',
            icon: <HiOutlineLightBulb size={24} />
        },
        {
            title: 'Total Redemptions ',
            subtitle: responseData?.total_redemptions,
            color: 'light-warning',
            icon: <MdOutlineVerified size={24} />
        }
    ]

    useEffect(() => {
        fetch('https://api.xircles.in/referral/dashboard/', {
          method: 'GET',
          headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk0NjEyOTAxLCJpYXQiOjE2OTQ1ODI5MDEsImp0aSI6IjdkMzRlZTRhNjU2NjRiMWQ4MTBhYzYyYjBmOGFjODM4IiwidXNlcl9pZCI6MTg3MTc2fQ.EcNnuonjeSZtWWmD85PFKOqCqbA68scCC2WKETYiDQk",
            "Api-key": "Fv14sMRkz8uYqd3VMbKy5U+7h6QE4Rcb7MeG1d/PoXU="
        }
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error('Network response was not ok')
            }
            return response.json()
          })
          .then((responseData) => {
            console.log(responseData)
            setResponseData(responseData)
            setLoading(false)
          })
          .catch((error) => {
            console.error('Error fetching data:', error)
            // setError(error)
            setLoading(false)
          })
      }, [])

      if (loading) {
        return <div>Loading...</div>
      }

      console.log("responseData", responseData)

    return (
        <>
            <Row>
                {
                    data.map((currElem) => {
                        return (
                            <>
                                <Col xs={4}>
                                    <div class="media d-flex">
                                        <Avatar color={currElem.color} icon={currElem.icon} className='me-1' style={{ borderRadius: "0" }} />
                                        <div className='my-auto'>
                                            <h6 className='fw-medium' style={{ marginBottom: "6px" }}>{currElem.title}</h6>
                                            <CardText className='fw-bold' color={currElem.color} style={{ fontSize: "20px" }}>{currElem.subtitle}</CardText>
                                        </div>
                                    </div>
                                </Col>
                            </>
                        )
                    })
                }

            </Row>
        </>
    )
}
export default StatsCard