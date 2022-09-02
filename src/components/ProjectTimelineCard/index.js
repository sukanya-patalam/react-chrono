// Write your code here
// Write your code here
import './index.css'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {imageUrl, projectTitle, description, projectUrl} = projectDetails

  return (
    <div>
      <img src={imageUrl} alt={projectTitle} className="image-size" />
      <h1>{projectTitle}</h1>
      <p>{description}</p>
      <a href={projectUrl}>VISIT</a>
    </div>
  )
}

export default ProjectTimelineCard
