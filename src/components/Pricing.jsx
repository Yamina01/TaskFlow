import "./pricing.css";

const Pricing = () => {
  return (
    <section className="pricing" id="pricing">
      <div className="pricing-container">
        <h2 className="pricing-title">Simple, transparent pricing</h2>
        <p className="pricing-subtitle">
          Choose a plan that fits your team. No hidden fees.
        </p>

        <div className="pricing-grid">
          <div className="pricing-card">
            <h3>Free</h3>
            <p className="price">$0</p>
            <ul>
              <li>Up to 5 tasks</li>
              <li>Basic analytics</li>
              <li>Email support</li>
            </ul>
            <button className="price-btn">Get Started</button>
          </div>

          <div className="pricing-card featured">
            <span className="badge">Most Popular</span>
            <h3>Pro</h3>
            <p className="price">$19</p>
            <ul>
              <li>Unlimited tasks</li>
              <li>Advanced analytics</li>
              <li>Priority support</li>
            </ul>
            <button className="price-btn primary">Start Free Trial</button>
          </div>

          <div className="pricing-card">
            <h3>Team</h3>
            <p className="price">$49</p>
            <ul>
              <li>Team collaboration</li>
              <li>Role management</li>
              <li>Dedicated manager</li>
            </ul>
            <button className="price-btn">Contact Sales</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
