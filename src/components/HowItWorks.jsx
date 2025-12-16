import "./howitworks.css";

const HowItWorks = () => {
  return (
    <section className="how-it-works" id="how-it-works">
      <h2 className="how-title">How it works</h2>
      <div className="steps-grid">
        <div className="step-card">
          <span className="step-number">1</span>
          <h4>Sign Up</h4>
          <p>Create your account in under a minute</p>
        </div>
        <div className="step-card">
          <span className="step-number">2</span>
          <h4>Add Tasks</h4>
          <p>Organize your work efficiently and assign to team members</p>
        </div>
        <div className="step-card">
          <span className="step-number">3</span>
          <h4>Track Progress</h4>
          <p>Visualize results and improve team productivity</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
