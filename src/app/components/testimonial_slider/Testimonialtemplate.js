import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./TestimonialSlider.css"; // Import your custom CSS for styling if needed

const TestimonialCarousel = ({ testimonials }) => {
  return (
    <Carousel fade>
      {testimonials.map((testimonial, index) => (
        <Carousel.Item key={index}>
          <div className="testimonial">
            <div className="testimonial-content">
              <img
                className="testimonial-image"
                src={testimonial.image}
                alt={`Testimonial ${index + 1}`}
              />
              <div className="testimonial-quote">
                <p>{testimonial.message}</p>
                <span className="testimonial-name">{testimonial.name}</span>
                <span className="testimonial-doctorate">
                  {testimonial.doctorate}
                </span>
              </div>
            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

const testimonials = [
  {
    name: "DR. MARIAZEENA JOHNSON",
    doctorate: "-CHANCELLOR",
    message:
      "I am proud to witness the Department of Computer Science and Engineering's pursuit of excellence in quality education through affective collaboration with industries.",
    image: "./testimonal/Mariazeena.png",
  },
  {
    name: "DR. MARIE JOHNSON",
    doctorate: "PRESIDENT",
    message:
      "The Department of Computer Science and Engineering plays a crucial role in shaping the students for impactful careers in the digital era.",
    image: "./testimonal/Marie.jpg",
  },
  {
    name: "MS. MARIA CATHERINE JAYAPRIYA",
    doctorate: "VICE PRESIDENT",
    message:
      "I am excited to share with you the remarkable achievements and ongoing advancements within our esteemed Computer Science and Engineering Department.",
    image: "./testimonal/vicechancellor.jpg",
  },
  {
    name: "DR.T.SASIPRABA",
    doctorate: "VICE CHANCELLOR",
    message:
      "Department of CSE has been on the path of delivering quality education by developing the youth human resources on the foundation of ethical and moral values.",
    image: "./testimonal/ViceXhN.jpg",
  },
  {
    name: "DR.T.SASIKALA",
    doctorate: "DEAN- SCHOOL OF COMPUTING",
    message:
      "It is wonderful to look back at the last 30 years, at Department of Computer Science and Engineering, when there is so much to feel proud of and so much to celebrate.",
    image: "./testimonal/SASIKALA.jpg",
  },

  {
    name: "DR.L.LAKSHMANAN",
    doctorate: "HOD- SCHOOL OF COMPUTING",
    message:
      "Department of Computer Science  and Engineering has a proud history of academic excellence and innovation and I am honoured to lead a team of dedicated and talented faculty.",
    image: "./testimonal/lakshman.jpg",
  },
  // Add more testimonials as needed
];

const App = () => {
  return (
    <div className="App">
      <div className="carousel-container">
        <TestimonialCarousel testimonials={testimonials} />
      </div>
      <div className="image-container">
        <img src="./event-img.png" alt="Event Image" />
      </div>
    </div>
  );
};

export default App;
