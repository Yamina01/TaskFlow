import "./testimonials.css";

const Testimonials = () => {
  return (
    <section className="testimonials" id="testimonials">
      <h2 className="testimonials-title">What our users say</h2>
      <div className="testimonials-grid">
        <div className="testimonial-card">
          <p>"TaskFlow has transformed our workflow! Highly recommend it."</p>
          <h4>Jane Doe</h4>
          <span>Product Manager, XYZ Corp</span>
        </div>
        <div className="testimonial-card">
          <p>"We increased productivity by 40% thanks to TaskFlow."</p>
          <h4>John Smith</h4>
          <span>CTO, ABC Inc</span>
        </div>
        <div className="testimonial-card">
          <p>"A must-have tool for any team looking to organize work efficiently."</p>
          <h4>Emily Clark</h4>
          <span>Team Lead, Acme Co</span>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
