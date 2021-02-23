import React from 'react'

function ExperienceBar() {
  return (
    <header className="experience-bar">
      <span>0 xp</span>
      <div>
        <div style={{width: '50%'}}/>

        <span className="current-experience" style={{left: '50%' }}>111xp</span>
      </div>
      <span>4444 xp</span>
    </header>
  )
}

export default ExperienceBar
