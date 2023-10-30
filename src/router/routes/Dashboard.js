import { lazy } from 'react'
import Demo from '@src/views/dashboard/Demo'
import Report from '@src/views/Report/Report'
import Notification from '@src/views/Notification/Notification'
import Statistics from '@src/views/Statistics/Statistics'
import Analytics from '@src/views/analytics/Analytics'
import EmailStats from '@src/views/email-stats/EmailStats'
import OverallStats from '@src/views/overall-stats/OverallStats'
import ConsentStats from '@src/views/consent-stats/ConsentStats'
import WizardModernVertical from '@src/views/Campaign/Campaign'
import OffersLog from '@src/views/offers-log/OffersLog'

import SponsorDashboard from '@src/views/SponsorDashboard/SponsorDashboard'
import HostDashboard from '@src/views/hostDashboard/HostDashboard'
import SponsorRewards from '@src/views/sponsorRewards/SponsorRewards'
import ViewOffers from '@src/views/viewOffers/ViewOffers'
import ViewRewards from '@src/views/viewRewards/ViewRewards'
import AddRewardPageHost from '@src/views/hostDashboard/addReward/AddRewardPage'
import AddRewardPageSponsor from '@src/views/SponsorDashboard/addReward/AddRewardPage'
import RewardImages from '@src/views/hostDashboard/addReward/RewardImages'
import CustomerGroup from '@src/views/SponsorDashboard/addReward/CustomerGroup'


import Campaign from '@src/views/dashboard/Campaign'
import Rewards from '@src/views/dashboard/Rewards'
import Mapro from '@src/views/dashboard/Mapro'
import Referrals from '@src/views/dashboard/Referrals'
import Reports from '@src/views/dashboard/Reports'
import ReferralsTable from '@src/views/dashboard/ReferralsTable'
import Analytics2 from '@src/views/dashboard/Analytics'
// import TotalReach from '@src/views/dashboard/TotalReach'

import { Notify } from '@src/views/Notify/Notify'
const Dashboard = lazy(() => import('@src/views/dashboard/Dashboard'))

const Dashboard_Routes = [
  {
    path: '/merchant/dashboard',
    element: <Dashboard />
  },
  {
    path: '/merchant/demo',
    element: <Demo />
  },
  {
    path: '/merchant/dashboard/report',
    element: <Report />
  },
  {
    path: '/merchant/dashboard/notification',
    element: <Notification />
  },
  {
    path: '/merchant/statistics',
    element: <Statistics />
  },
  {
    path: '/merchant/analytics',
    element: <Analytics />
  },
  {
    path: '/merchant/analytics2',
    element: <Analytics2 />
  },
  {
    path: '/merchant/email-statistics',
    element: <EmailStats />
  },
  {
    path: '/merchant/overall-statistics',
    element: <OverallStats />
  },
  {
    path: '/merchant/consent-statistics',
    element: <ConsentStats />
  },
  {
    path: '/merchant/campaign',
    element: <WizardModernVertical />
  },
  {
    path: '/merchant/sponsorDashboard',
    element: <SponsorDashboard />
  },
  {
    path: '/merchant/hostDashboard',
    element: <HostDashboard />
  },
  {
    path: '/merchant/host/add-reward/details',
    element: <AddRewardPageHost />
  },
  {
    path: '/merchant/host/add-reward/images',
    element: <RewardImages />
  },
  {
    path: '/merchant/sponsorRewards',
    element: <SponsorRewards />
  },
  {
    path: '/merchant/sponsorRewards-offers',
    element: <ViewOffers />
  },
  {
    path: '/merchant/sponsorRewards-rewards',
    element: <ViewRewards />
  },
  {
    path: '/merchant/sponsor/add-reward/budget',
    element: <AddRewardPageSponsor />
  },
  {
    path: '/merchant/sponsor/add-reward/customerGroup',
    element: <CustomerGroup />
  },
  {
    path: '/merchant/campaign/',
    element: <Campaign />
  },
  {
    path: '/merchant/rewards/',
    element: <Rewards />
  },
  {
    path: '/merchant/mapro/',
    element: <Mapro/>
  },
  {
    path: '/merchant/referrals/',
    element: <Referrals/>
  },
  {
    path: '/merchant/analytics/',
    element: <Analytics/>
  },
  {
    path: '/merchant/reports/',
    element: <Reports/>
  },
  {
    path: '/merchant/ReferralsTable/',
    element: <ReferralsTable/>
  },
  {
    path: '/merchant/notify',
    element: <Notify />
  }
]

export default Dashboard_Routes
