import React from "react";

function About() {
  return (
    <section className="my-5" style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
      <img
        src={require('../../assets/profile.png').default}
        alt=""
        id="about-photo"
      />
      <p style={{marginLeft: "60px"}}>
      Hey there! I'm Alex
      <br></br>
      A highly motivated full-stack web developer, seeking for new opportunity to start my career as a web developer! Able to create responsive, modern, and user-friendly applications and web pages using mobile first approach. Passionate about what is possible to achieve using the latest technologies and eager to learn new things!
    
      </p>
    </section>
  );
}
 
export default About;
