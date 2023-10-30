import CalendarHeatmap from 'react-calendar-heatmap'
import 'react-calendar-heatmap/dist/styles.css'
import './Heatmap.css'

function Heatmap() {
    return (
    <CalendarHeatmap
    startDate={new Date('2016-01-01')}
    endDate={new Date('2016-10-01')}
    values={[
    { date: '2016-01-05', count: 12 },
    { date: '2016-08-22', count: 122 },
    { date: '2016-05-30', count: 38 },
    { date: '2016-02-28', count: 50 },
    { date: '2016-04-16', count: 78 },
    { date: '2016-03-04', count: 7 },
    { date: '2016-07-15', count: 249 },
    { date: '2016-02-07', count: 48 },
    { date: '2016-10-11', count: 99 },
    { date: '2016-09-25', count: 82 },
    { date: '2016-06-19', count: 4 }
    
    // ...and so on
  ]}
/>
    )
}

export default Heatmap
