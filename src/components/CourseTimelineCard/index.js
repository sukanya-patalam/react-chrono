// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {itemDetails} = props
  const {courseTitle, description, duration, tagsList} = itemDetails
  console.log(tagsList)

  return (
    <div>
      <div className="title-container">
        <h1>{courseTitle}</h1>
        <div className="duration-container">
          <AiFillClockCircle />
          <p>{duration}</p>
        </div>
      </div>
      <p>{description}</p>
    </div>
  )
}

export default CourseTimelineCard
