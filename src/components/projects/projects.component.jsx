import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import FullStack from "./FullStack.component";
import FrontendAndBackend from "./FrontendAndBackend.component";

const Projects = () => {
  return (
    <div id="projects">
      <Tabs>
        <TabList>
          <h2>Projects</h2>
          <div>
            <Tab style={{ fontWeight: "bold" }} default={true}>
              Page 1/2{" "}
            </Tab>
            <Tab style={{ fontWeight: "bold" }}>Page 2/2</Tab>
          </div>
        </TabList>

        <TabPanel>
          <FrontendAndBackend />
        </TabPanel>
        <TabPanel>
          <FullStack />
        </TabPanel>
      </Tabs>

      <h2>Certificates</h2>
      <div>
        <div>
          <h3>
            <b>➢ </b>Introduction to Web Development with HTML, CSS, JavaScript{" "}
          </h3>
          <p>
            An online course authorised by Almabetter.
            <br></br>
            "I Learnt application development ecosystem and created basic,
            interactive web pages using HTML, CSS and JavaScript."
          </p>
          <a
            href="https://certificates.almabetter.com/en/verify/81516501301593?ref=email"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="skillbutton">Verify Credentials</button>
          </a>
        </div>
        
        <div>
        <div></div>
          <h3>
            <b>➢ </b>Advanced React
          </h3>
          <p>
            An online course authorised by Almabetter.<br></br>
            "Learnt to use more advanced React concepts and features,
             optimize and debug React applications, and become 
             proficient in creating a web application that consumes API data, 
             and familiarized with the most commonly used React framework 
             integrations, tools, and debugging approaches."
          </p>
          <a
            href="https://certificates.almabetter.com/en/verify/76448921394658?ref=email"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="skillbutton">Verify Credentials</button>
          </a>
        </div>
        <div>
          <div></div>
          <h3>
            <b>➢ </b>Introduction to OOPS
          </h3>
          <p>
            An online course authorisedby AlmaBetter.
            <br></br>
            " Object-oriented programming is a programming paradigm based on the concept of "objects", which can contain data and code. "
          </p>
          <a
            href="https://certificates.almabetter.com/en/verify/02554405469979?ref=email"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="skillbutton">Verify Credentials</button>
          </a>
        </div>
        <div>
          <h3>
            <b>➢ </b>Server-side Development with NodeJS, Express and MongoDB
          </h3>
          <p>
            An online course authorised Almabetter.<br></br>
            "It started with a brief overview of the Web protocols: HTTP and
            HTTPS. We examined NodeJS and it's modules: Express for building web
            servers. On the database side, we reviewed basic CRUD operations,SQL
            and NoSQL databases, in particular MySQL ,MongoDB and Mongoose."
          </p>
          <a
            href="
            https://certificates.almabetter.com/en/verify/89540239983483?ref=email"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="skillbutton">Verify Credentials</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
