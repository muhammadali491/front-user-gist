import React from "react";
import { Link } from "react-router-dom";

const Cta = () => {
  return (
    <section className="cta">
      <h4>Ready to Transform Your Future?</h4>
      <Link to={"/join"}>Join Now</Link>
    </section>
  );
};

export default Cta;
