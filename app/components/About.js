import React from "react";
import { Parser } from "html-to-react";
import { useLocation } from "react-router-dom";
import { usePrevious } from "../utils";
import avatar from "../images/avatar.jpg";
import PoliceLine from "./Banner";

export default function About() {
  var htmlToReactParser = new Parser();

  const location = useLocation();
  const prevLocation = usePrevious(location);

  if (location !== prevLocation) {
    window.scrollTo(0, 0);
  }

  return (
    <>
      <div className="section-container about">
        <h1 className="lg-heading">
          About <span className="text-secondary">me</span>
        </h1>
        <div className="about-info ">
          <img
            className="bio-image"
            src={avatar}
            alt={"Github avatar"}
          />
          <div className="bio">
            <p>
            Hello! My name is Bogdan Moroz. I am a software engineer with a holistic goal-oriented vision for the systems that I build. My responsibilities include software architecture and service design, full-stack software engineering, project management work such as product backlog refinement and prioritization, as well as customer communication, which includes product demonstrations, training seminars, and requirements engineering.
            <br />
            <br />
            In software engineering, I consider frontend development with the web technology stack as my primary area of expertise. However, working in an agile team in a senior position I have been responsible for backend and API development countless times as well. While this is a lot of responsibilities, I am comfortable adjusting my role depending on the circumstances and consider that one of my core strengths.
            <br />
            <br />
            I've studied at{" "}
              <a
                target="_blank"
                href="https://www.xamk.fi/en/degree-blog/hands-experience-hardware-building-computer-networks/"
              >
                Xamk
              </a>{" "}
              and recently graduated from{" "}
              <a
                target="_blank"
                href="https://www.linkedin.com/posts/bogdan-moroz-20b892113_thankyou-activity-6969953671887380480-9od3?utm_source=share&utm_medium=member_desktop"
              >
                LUT University
              </a>{" "}
              with a Master's of Science in Technology. To keep my hand on the pulse of the emerging industry trends and satiate my curiosity for all things software, I am continuing my education with a doctoral programme at LUT.
              <br />
              <br />
              At the moment I'm working at{" "}
              <a
                target="_blank"
                href="https://www.observis.fi/"
              >
                Observis
              </a>{" "}
              on situational awareness software.{" "}
              <a
                target="_blank"
                href="https://mikseimikkeli.fi/vuoden-edellakavija-2021-palkinto-myonnettiin-observis-oylle/"
              >
                Spot me in this picture from back when we
                won the "Pioneer of the year" award!
              </a>{" "}
              My technology stack includes but is not
              limited to React, React Native, TypeScript,
              ES6 and Java.
            </p>

          </div>

          <div className="job job-1">
            <h3>Observis Oy</h3>
            <h4>Lead Developer</h4>
            <p>February 2023 - Present</p>
            <p>
              My responsibility in this new role is to ensure the continuous professional growth of our front-end teams,
              and the use of the best tools and practices for each product and service.
            </p>
          </div>

          <div className="job job-2">
            <h3>Observis Oy</h3>
            <h4>Software Engineer</h4>
            <p>December 2018 - January 2023</p>
            <p>
              Multiple teams and projects, primarily focused on the ObSAS
              situational awareness software.
            </p>
          </div>

          <div className="job job-3">
            <h3>LUT University</h3>
            <h4>Doctoral Researcher</h4>
            <p>May 2023 - Present</p>
            <p>
              My current research focus is in the area of software product management, specifically the emerging discipline of Product Ops, smooth product-led growth, and efficient operation at scale.
            </p>
          </div>
        </div>
      </div>
      <footer className="about-footer">
        Bogdan Moroz &copy; {new Date().getFullYear()}
      </footer>
    </>
  );
}
