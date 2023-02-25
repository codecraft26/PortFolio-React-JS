import React from 'react'
import { Row } from 'react-bootstrap'

const GitHubStreak = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
    <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
      Streak of My github <strong className="purple">Code</strong>
    </h1>

    <img src='https://streak-stats.demolab.com?user=codecraft26&theme=prussian)](https://git.io/streak-stats'  style={{maxWidth:"50%"}} alt="gitHub Streak"></img>
   
  </Row>
  )
}

export default GitHubStreak