import React from 'react'
import './Feature.css'
const Features = () => {
  return (
   <section className="features" id="features">
      <div className="features-container">
        <h2 className="features-title">
          Everything you need to run your workflow
        </h2>
        <p className="features-subtitle">
          TaskFlow gives your team the tools to plan, track, and deliver work
          faster — all in one platform.
        </p>

        <div className="features-grid">
          <div className="feature-card">
            <div className="icon"><center>🚀</center></div>
            <h3>Boost Productivity</h3>
            <p>
              Organize tasks, set priorities, and keep everyone aligned with
              real-time updates.
            </p>
          </div>

          <div className="feature-card" id='features'>
            <div className="icon"><center>📊</center></div>
            <h3>Track Progress</h3>
            <p>
              Visual dashboards help you monitor progress and identify blockers
              instantly.
            </p>
          </div>

          <div className="feature-card">
            <div className="icon"><center>🤝</center></div>
            <h3>Team Collaboration</h3>
            <p>
              Collaborate seamlessly with your team using shared tasks and
              comments.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features