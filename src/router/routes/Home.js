import { lazy } from 'react'
import Test from '../../test/Test'
import Developer  from '@src/views/main/developer/Developer'
import ContactUs from '@src/views/main/contactUs/ContactUs'
import SuperLeadz from '../../views/main/products/superLeadz/home/SuperLeadz'
const Vision = lazy(() => import('../../views/main/company/vision/Vision'))
const Features = lazy(() => import('@src/views/main/products/superLeadz/features/Features'))
const Team = lazy(() => import('@src/views/main/company/team/Team'))
const Partner = lazy(() => import('@src/views/main/partner/Partner'))
const Home = lazy(() => import('@src/views/main/home/Home'))


const Homes_Routes = [
  {
    path: '/',
    element: <Home />,
    meta: {
      layout: "blank"
    }
  },
  {
    path: '/partner',
    element: <Partner />,
    meta: {
      layout: "blank"
    }
  },

  {
    path: '/team',
    element: <Team />,
    meta: {
      layout: "blank"
    }
  },
    {
    path: '/superLeadz',
    element: <SuperLeadz />,
    meta: {
      layout: "blank"
    }
  },
  
  {
    path: '/superLeadz-features',
    element: <Features />,
    meta: {
      layout: "blank"
    }
  },
  {
    path: '/contact-us',
    element: <ContactUs />,
    meta: {
      layout: "blank"
    }
  },
  {
    path: '/vision-&-mission',
    element: <Vision />,
    meta: {
      layout: "blank"
    }
  },
  {
    path: '/test',
    element: <Test />,
    meta: {
      layout: "blank"
    }
  },
  {
    path: '/developer',
    element: <Developer />,
    meta: {
      layout: "blank"
    }
  }
]

export default Homes_Routes
