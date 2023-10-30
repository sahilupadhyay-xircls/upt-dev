// ** Custom Components
import Avatar from '@components/avatar'

import { MoreVertical, Edit, FileText, Archive, Trash } from 'react-feather'

// ** Reactstrap Imports
import { Badge, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'

const status = {
  0: { title: 'Inactive', color: 'light-danger' },
  1: { title: 'Active', color: 'light-success' }
}

// ** Get initial Data


// ** Table My sponsored Reward
export const SponsoredMultiLingColumns = [
  {
    name: 'Reward Name',
    sortable: true,
    minWidth: '200px',
    selector: row => row.reward_name
  },
  {
    name: 'Total Sponsorship Amount',
    sortable: true,
    minWidth: '220px',
    selector: row => row.total_sponsor_amount
  },
  {
    name: 'Reward Price',
    sortable: true,
    minWidth: '140px',
    selector: row => row.reward_price
  },
  {
    name: 'Discounted Reward Price',
    sortable: true,
    minWidth: '210px',
    selector: row => row.discounted_reward_price
  },
  {
    name: 'Start Date',
    sortable: true,
    minWidth: '100px',
    selector: row => row.start_date
  },
  {
    name: 'End Date',
    sortable: true,
    minWidth: '100px',
    selector: row =>  row.end_date
  },
  {
    name: 'Activate',
    sortable: true,
    minWidth: '60px',
    selector: row => row.activate
  },
  {
    name: 'Status',
    sortable: true,
    minWidth: '100px',
    selector: row => row.status,
    cell: row => {
      return (
        <Badge color={status[row.status].color} pill>
          {status[row.status].title}
        </Badge>
      )
    }
  },
  {
    name: 'Actions',
    allowOverflow: true,
    cell: () => {
      return (
        <div className='d-flex w-100 h-100 justify-content-center align-items-center'>
          <UncontrolledDropdown>
            <DropdownToggle className='pe-1' tag='span'>
          <Edit size={18} />
            </DropdownToggle>
            <DropdownMenu end>
              <DropdownItem>
                <FileText size={15} />
                <span className='align-middle ms-50'>Details</span>
              </DropdownItem>
              <DropdownItem>
                <Archive size={15} />
                <span className='align-middle ms-50'>Archive</span>
              </DropdownItem>
              <DropdownItem>
                <Trash size={15} />
                <span className='align-middle ms-50'>Delete</span>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </div>
      )
    }
  }
]

// Host wise Report
// ** Table Intl Column
export const HostWiseReportColumns = [
  {
    name: 'Sr.no',
    sortable: true,
    minWidth: '100px',
    selector: row => row.sr_no
  },
  {
    name: 'Host',
    sortable: true,
    minWidth: '180px',
    selector: row => row.host
  },
  {
    name: 'Total Customers Sponsored',
    sortable: true,
    minWidth: '200px',
    selector: row => row.total_customers_sponsored
  },
  {
    name: 'Total Value Rewarded',
    sortable: true,
    minWidth: '220px',
    selector: row => row.total_valued_rewarded
  },
  {
    name: 'Total Discount Received',
    sortable: true,
    minWidth: '100px',
    selector: row => row.total_discount_received
  },
  {
    name: 'Total Amount Spent',
    sortable: true,
    minWidth: '100px',
    selector: row => row.total_amount_spent
  }
]
