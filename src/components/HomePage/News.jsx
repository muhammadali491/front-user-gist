// NewsSection.jsx
import "./News.css";
import ali from "../../assets/images/courses/dae.jpg";
import ahmed from "../../assets/images/courses/ece.jpg";
import abid from "../../assets/images/faculty/abid.jpg";

const News = () => {
  const newsItems = [
    {
      title: "Admissions Open for Summer 2025",
      description:
        "Join our highly demanded Web Development and Graphic Design programs. Limited seats available!",
      date: "April 28, 2025",
      image: ali,
    },
    {
      title: "Free AI Seminar Hosted by Glamour",
      description:
        "Get insights into Artificial Intelligence from top industry experts. Register now!",
      date: "March 22, 2025",
      image: abid,
    },
    {
      title: "New Faculty Members Joined",
      description:
        "We welcome our new instructors in Computer Science and Design departments!",
      date: "February 15, 2025",
      image: ahmed,
    },
  ];

  return (
    <section className="section news-section">
      <h3 className="news-title">
        Latest <span>News & Updates</span>
      </h3>
      <div className="news-grid">
        {newsItems.map((item, index) => (
          <div className="news-card" key={index}>
            <img src={item.image} alt="news" className="news-image" />
            <div className="news-content">
              <h5 className="news-heading">{item.title}</h5>
              <p className="news-description">{item.description}</p>
              <span className="news-date">{item.date}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default News;
