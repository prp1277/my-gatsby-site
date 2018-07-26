import React from "react"
import Container from "../components/container"
import Header from "../components/header"
import Footer from "../components/footer"

export default ({ data }) => {
  console.log(data)
  return (
    <div className="About-Me-Content">
      <Header />
      <Container>
        <h1 css={{ textAlign: `center` }}>About Me</h1>
        <center>
          <img
            src="https://prp1277.github.io/static/LinkedIn-dfbd71c0fae03cd7d16ce2433df200e9.jpg"
            alt="Profile"
            height="301"
            width="301"
          />
        </center>
        <p>
          I'm originally from Omaha, NE, went to Missouri State University in
          Springfield, MO and moved to Kansas City after graduating in December
          2015 with a B.S. in Finance and a Minor in Accounting.
        </p>
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
          Formulas, Keyboard Shortcuts and general notes to help improve my
          skills. This did not go unnoticed, and a few months later I applied
          and accepted a role as the Purchasing Assistant at Reinhart
          Foodservice.
        </p>
        <p>
          At Reinhart, I continued to advance my Excel skills. I starting with
          VBA Macros to automate daily and weekly tasks. When I learned about
          Power Queries I started mixing and matching between the two, using VBA
          primarily for formatting and Power Queries for analysis.
        </p>
        <p>
          After diving deeper into Power Query I stumbled upon the free, desktop
          version of Power BI. Since it used the familiar Power Pivot features I
          had previously learned, the learning curve came naturally and I
          immediately preferred Power Bi's ETL model for cleaning data and
          creating visualizations.
        </p>
        <p>
          After parting ways with Reinhart in late February I realized that the
          skills that I had developed were great, but they were only a subset of
          the bigger picture. Power BI opened my eyes to the fact that ypu can
          literally get data from anywhere.
        </p>
        <p>
          Since then, I've built two websites (you're looking at version 2),
          familiarized myself with JS, HTML and CSS and learned a few hard
          lessons about Data Science.
        </p>
        <p>
          Throughout my experiences I've found that observing a process from
          end-to-end, noting the details, and interpreting the results is the
          key to developing business insights.
        </p>
      </Container>
      <Footer />
    </div>
  )
}

export const query = graphql`
  query MyImagesQuery {
    allImageSharp {
      edges {
        node {
          original {
            width
            height
            src
          }
          resolutions {
            width
            height
          }
        }
      }
    }
  }
`
