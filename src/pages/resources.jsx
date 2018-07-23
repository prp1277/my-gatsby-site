import React from "react"
import Wrapper from "../components/wrapper"
import Header from "../components/header"
import Footer from "../components/footer"

export default ({ data }) => (
  <Wrapper>
    <Header />
    <div
      className="Content"
      css={{
        height: `auto`,
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: `42rem`,
      }}>
      <h1 css={{ textAlign: `center` }}>Resources</h1>

      <h2>Web Development / APIs </h2>
      <ul className="Reference-Links">
        <a href="https://W3schools.com" alt="W3Schools">
          W3schools
        </a>
        <br />
        <a href="https://gatsbyjs.org" alt="Gatsby">
          GatsbyJS
        </a>
        <br />
        <a
          href="https://github.com/prp1277/resources"
          alt="Github-Resource-Repo">
          Personal Resources Repository
        </a>
        <br />
      </ul>

      <h2>Excel</h2>
      <ul className="Excel-Links">
        <a href="https://reddit.com/r/excel" alt="/r/Excel">
          /r/Excel
        </a>
        <br />
        <a href="https://powerspreadsheets.com" alt="PowerSpreadSheets">
          PowerSpreadSheets
        </a>
        <br />
      </ul>

      <h2>RStudio</h2>
      <ul className="RStudio-Links">
        <a href="https://www.r-bloggers.com/" alt="r-bloggers">
          R-Bloggers
        </a>
        <br />
        <a href="https://reddit.com/r/rstudio" alt="/r/Rstudio">
          /r/RStudio
        </a>
        <br />
        <a
          href="https://www.r-bloggers.com/where-to-get-help-with-your-r-question/"
          alt="R-Questions">
          R Questions
        </a>
        <br />
      </ul>

      <h2>Forums</h2>
      <ul className="Forum-Links">
        <a
          href="http://community.powerbi.com/t5/Forums/ct-p/Forums"
          alt="Official Power BI Forum">
          Official Power BI Forum
        </a>
        <br />
        <a
          href="https://social.technet.microsoft.com/Forums/en-US/home?forum=powerquery"
          alt="TechNet Power Query">
          TechNet Power Query
        </a>
        <br />
        <a
          href="https://social.technet.microsoft.com/Forums/en-US/home?forum=powerquery%2Csqlkjpowerpivotforexcel&filter=alltypes&sort=lastpostdesc"
          alt="TechNet Power Pivot">
          TechNet Power Pivot
        </a>
        <br />
        <a
          href="http://www.mrexcel.com/forum/power-bi/"
          alt="Mr Excel Power BI">
          Mr Excel Power BI
        </a>
        <br />
        <a
          href="http://stackoverflow.com/questions/tagged/powerquery"
          alt="Stackoverflow Power Query">
          Stackoverflow Power Query
        </a>
        <br />
        <a
          href="http://www.excelguru.ca/forums/forumdisplay.php?19-Power-Query-(Get-amp-Transform)"
          alt="XLGuru - Ken Puls">
          XLGuru - Ken Puls
        </a>
        <br />
      </ul>

      <h2>Blogs</h2>
      <ul className="Blogs-Links">
        <a
          href="https://www.thebiccountant.com"
          alt="Imke Feldmann -The Biccountant">
          The Biccountant - Imke Feldmann
        </a>
        <br />
        <a href="http://blog.crossjoin.co.uk/" alt="Chris Webb - Crossjoin">
          Crossjoin - Chris Webb
        </a>
        <br />
        <a href="http://www.excelguru.ca/blog/" alt="Ken Puls - XLGuru">
          XLGuru - Ken Puls
        </a>
        <br />
        <a href="https://datachant.com/" alt="Gil Raviv - DataChant">
          DataChant - Gil Raviv
        </a>
        <br />
        <a
          href="https://bondarenkoivan.wordpress.com/"
          alt="Ivan Bond - Bondarenkoivan">
          Bondarenkoivan - Ivan Bond
        </a>
        <br />
        <a
          href="http://excel-inside.pro/"
          alt="Maxim Zelensky - Excel Inside Pro">
          Excel Inside Pro - Maxim Zelensky
        </a>
        <br />
        <a href="http://www.mattmasson.com/" alt="Matt Mason - MattMason">
          Matt Mason's blog
        </a>
        <br />
        <a
          href="http://exceleratorbi.com.au/"
          alt="Matt Allington - Exceleratorbi">
          Exceleratorbi - Matt Allington
        </a>
        <br />
        <a
          href="http://www.powerpivotpro.com/"
          alt="Rob Collie - PowerPivotPro">
          PowerPivotPro - Rob Collie
        </a>
        <br />
        <a
          href="https://www.sqlbi.com/"
          alt="Marco Russo & Alberto Ferrari - SQLBi">
          SQLBi - Marco Russo & Alberto Ferrari
        </a>
        <br />
        <a href="http://tinylizard.com/" alt="Scott Senkeresty">
          tinylizard - Scott Senkeresty
        </a>
        <br />
      </ul>
    </div>
    <Footer />
  </Wrapper>
)
