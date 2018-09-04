import React from "react";
import Container from "../components/container";

export default () => {
  return (
    <div className="About-Me-Content">
      <Container>
        <h1>About Me</h1>

        <center>
          <div className="image-container">
            <img
              src="../static/LinkedIn-dfbd71c0fae03cd7d16ce2433df200e9.jpg"
              width="301"
              alt="Profile"
            />
            <img
              src="../static/Dubya-0045112e369c61baa8813fded93c5e4f.jpg"
              width="301"
              alt="Dubya"
            />
          </div>
        </center>
        <br />

        <p>
          I started this website as a way to gain experience in website
          development and programming. My goal is to provide insight, tutorials
          and opinions on various technologies and topics.
        </p>

        <h2>Interests:</h2>
        <ul>
          <li>
            <p>Finance</p>
          </li>
          <li>
            <p>Web Development</p>
          </li>
          <li>
            <p>Business Applications and Intelligence</p>
          </li>
        </ul>

        <h2>Contact Information:</h2>
        <p>
          Email:{" "}
          <a href="Mailto:prp1277@gmail.com" alt="email">
            Prp1277@gmail.com
          </a>
        </p>
        <p>
          Cell Phone:{" "}
          <a href="tel:14024159083" alt="mobile">
            402-415-9083
          </a>
        </p>
        <p>
          LinkedIn Profile:{" "}
          <a href="https://linkedin.com/in/prpowell1277/" alt="linkedin">
            /in/prpowell1277
          </a>
        </p>
        <p>
          Resume:{" "}
          <a
            href="https://1drv.ms/w/s!AoLkNBOSNnKyhel7Dp8q06YYxobiHQ"
            alt="word-resume"
          >
            .docx |
          </a>
          <a href="http://pat-facts.netlify.com/resume/" alt="web-resume">
            {" "}
            web page
          </a>
        </p>
      </Container>
    </div>
  );
};

{
  /*
        <h2>Background</h2>
        <p>
          I'm originally from Omaha, NE, went to Missouri State University in
          Springfield, MO and moved to Kansas City after graduating in December
          2015 with a B.S. in Finance and a Minor in Accounting.
        </p>
        <h2>Work</h2>
        <p>
          My background since graduating has primarily been focused on business
          operations, first in the call center at Waddell & Reed, then in Mutual
          Fund Operations at State Street and most recently in the FoodService
          Industry with Reinhart FoodService.
        </p>
        <p>
          During my time with State Street, I identified the dependence on
          Microsoft Excel and decided to learn everything that I could about the
          software. Using Microsoft OneNote, I created documentation for
          formulas, keyboard shortcuts and general notes to help improve my
          skills. This did not go unnoticed, and a few months later I applied
          and accepted a role as the Purchasing Assistant for Reinhart
          Foodservice.
        </p>
        <h3>
          "I identified the dependence on Microsoft Excel and decided to learn
          everything that I could about the software."
        </h3>
        <p>
          At Reinhart I continued to advance my Excel skills, starting with VBA
          Macros to automate daily and weekly tasks. When I learned about Power
          Queries I started mixing and matching between the two - using VBA
          primarily for formatting and Power Queries for analysis.
        </p>
        <p>
          As I dove deeper into Power Query I also stumbled upon the free,
          desktop version of Power BI. Since it used the familiar Power Pivot
          features I had previously learned, the learning curve came naturally
          and I immediately preferred Power Bi's canvas, data and relationship
          views for creating models.
        </p>
        <p>
          After parting ways with Reinhart in late February I realized that the
          skills that I had developed were great, but they were only a subset of
          the bigger picture. Power BI opened my eyes to the fact that you can
          literally get data from anywhere.
        </p>
*/
}
