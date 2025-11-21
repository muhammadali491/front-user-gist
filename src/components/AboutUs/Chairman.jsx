import hafizShab from "../../assets/images/hafiz.jpg";
import "./Chairman.css";
const Chairman = () => {
  return (
    <section className="section about">
      <h3>
        Chairman <span> Biography</span>
      </h3>
      <div className="box padding-large">
        <div className="chairmanData">
          <h2
            style={{
              color: "#6366f1",
            }}
          >
            Hafiz Qadir Bux, Ph.D.
          </h2>
          <p>
            Bachelor of Civil Engineering from the NED University of Engineering
            and Technology, Karachi, Pakistan was completed in the year 1985.
          </p>
          <p>
            In the year 1992, awarded scholarship for Ph.D. by the Ministry of
            Education, Government of Pakistan. After attending MSc.
            Transportation Planning & Engineering at the Institute of Transport
            Studies, University of Leeds, UK.
          </p>
          <p>
            The Ph.D degree in the field of Geotechnical Engineering was
            obtained from The University of Galsgow, Scotland, UK. During Ph.D.
            received Overseas Research Student Award from Committee of
            Vice-Chancellors’ and Principals’ (CVCP) of Universities of UK.
          </p>
        </div>

        <img src={hafizShab} className="image" alt="Hafiz Abdul Qadir Bux" />
      </div>
    </section>
  );
};

export default Chairman;
