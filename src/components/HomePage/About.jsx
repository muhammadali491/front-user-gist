// import hafizShab from "../../assets/images/hafiz.jpg";
import glamour from "../../assets/images/slideshow/3.jpg";
import styles from "../../components/HomePage/About.module.css";

const About = () => {
  return (
    <section className="section about ">
      <h3>
        About <span> Us</span>
      </h3>
      <div style={{ padding: "16px 32px" }} className={styles.main}>
        <p>
          <span className="xlarge" style={{ color: "#6366f1" }}>
            Welcome to Glamour Institute of Science and Technology
          </span>
          <br />
          <span className="hide-medium hide-small">
            Glamour Institute of Science & Technology (GIST) was established on
            12th February 1999 with the mission to uplift the human resource of
            upper Sindh through quality education. The institute focuses on
            Computer Science, Information Technology, online earning, and
            vocational training, with a special emphasis on technical education
            for both boys and girls.
            <br />
            <br />
            GIST continues to grow in reputation, partnering with local
            factories, multinational companies, and educational institutions. It
            offers a diverse range of programs in IT, Technical & Vocational
            Training, and Early Childhood Education, serving the people of
            District Ghotki and surrounding areas. The growing presence of
            industries has further fueled interest in IT education, making GIST
            a valuable contributor to regional development.
          </span>
          <span className="hide-large">
            Glamour Institute of Science & Technology (GIST), established on
            12th February 1999, aims to empower the youth of upper Sindh through
            quality education in IT, online earnings, and vocational training.
            GIST is gaining recognition in local industries and educational
            institutions for its wide range of programs in Computer Science,
            Technical Education, and Early Childhood Learning.
          </span>
        </p>
        <img
          src={glamour}
          className={styles.image}
          alt="Hafiz Abdul Qadir Bux"
        />
      </div>
    </section>
  );
};

export default About;
