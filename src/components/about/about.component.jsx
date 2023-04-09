import React from "react";
import { ReactComponent as Html } from "../../assets/html.svg";
import { ReactComponent as Css } from "../../assets/css.svg";
import { ReactComponent as Js } from "../../assets/js.svg";
import { ReactComponent as Node } from "../../assets/node.svg";
import { ReactComponent as Reacti } from "../../assets/react.svg";
import { ReactComponent as Mongo } from "../../assets/mongoDB.svg";
import { ReactComponent as Boot } from "../../assets/boot.svg";
import { ReactComponent as Git } from "../../assets/git.svg";
import { ReactComponent as Tailwind } from "../../assets/tailwind.svg";
import { ReactComponent as AWS } from "../../assets/aws.svg";
import { ReactComponent as MySQL } from "../../assets/mysql1.svg";
import { ReactComponent as Cplus } from "../../assets/cplus.svg";
const About = () => {
  return (
    <div id="about">
      <div>
        <h2>About</h2>
        <p>Hello! My name is Abhishek Mishra and I am a full stack developer.</p>
        <p>
       
          The scope of my work mostly includes quality web design by integrating powerful designing tools
          such as Tailwind CSS with frontend tools---Reactjs,HTML , backend tools---Nodejs, Expressjs
          and non-relational database---MongoDB.
        </p>
        <p>
          That being said, I like learning all aspects of web development and
          take pride in my fullstack work. Because of this, I am always open to
          new projects in the new development environments.
        </p>
      </div>
      <div>
        <h3 style={{ marginTop: "2rem" }}>Current Skills</h3>
        <div className="skillgrid">
          <div>
            <div className="skillemblem">
              <Html />
            </div>
            <p>HTML5</p>
          </div>
          <div>
            <div className="skillemblem">
              <Css />
            </div>
            <p>CSS3</p>
          </div>
          <div>
            <div className="skillemblem">
              <Js />
            </div>
            <p>JavaScript</p>
          </div>
          
          

          
          <div>
            <div className="skillemblem ">
              <Mongo />
            </div>
            <p>MongoDB</p>
          </div>

          <div>
            <div className="skillemblem">
              <Node />
            </div>
            <p>NodeJS</p>
          </div>
          <div>
            <div className="skillemblem">
              <Reacti />
            </div>
            <p>React</p>
          </div>

          <div>
            <div className="skillemblem">
              <Boot />
            </div>
            <p>Bootstrap</p>
          </div>

          <div>
            <div className="skillemblem">
              <Git />
            </div>
            <p>Git</p>
          </div>
          <div>
            <div className="skillemblem">
              <Tailwind />
            </div>
            <p>Tailwind</p>
          </div>
          <div>
            <div className="skillemblem">
              <AWS />
            </div>
            <p>AWS</p>
          </div>
          <div>
            <div className="skillemblem">
              <MySQL />
            </div>
            <p>MySQL</p>
          </div>
        </div>
      </div>
      <div>
        <h3>Education</h3>
        <p>
          <b> ➢ Full Stack Development Course </b>
          <br></br>
          AlmaBetter in Collab with Polygon<br></br>
          May 2022-Present
        </p>
        
        <p>
          <b> ➢ B.E </b>
          <br></br>
          UIT,BU <br></br>
          2019-2023 
        </p>
        <p>
          <b> ➢ Standard XII </b>
          <br></br>
          Tulsi vidya niketan <br></br>
          
        </p>
        
      </div>
    </div>
  );
};

export default About;
