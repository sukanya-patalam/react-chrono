// Write your code here

import './index.css'
import {Chrono} from 'react-chrono'

import CourseTimelineCard from '../CourseTimelineCard/index'
import ProjectTimelineCard from '../ProjectTimelineCard'

const TimelineView = props => {
  const {timelineItemsList} = props
  return (
    <div className="chrono-container">
      <h3>MY JOURNEY OF</h3>
      <h1>CCBP 4.0</h1>

      <Chrono
        mode="VERTICAL_ALTERNATING"
        theme={{primary: 'blue', secondary: 'white'}}
        items={timelineItemsList}
      >
        {timelineItemsList.map(eachItem => (
          <CourseTimelineCard key={eachItem.id} itemDetails={eachItem} />
        ))}

        {timelineItemsList.map(eachItem => (
          <ProjectTimelineCard key={eachItem.id} projectDetails={eachItem} />
        ))}
      </Chrono>
    </div>
  )
}

export default TimelineView
