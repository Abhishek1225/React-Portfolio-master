import cryptodash from "../../assets/cryptodash.jpeg";
import TodoApp from "../../assets/TodoApp.jpeg";
import bms from "../../assets/bms.jpeg";

const FrontendAndBackend = () => {
  return (
    <>
      <div className="gridlayout1">
        <div>
          <img 
          className="imgeffects"
          src={cryptodash} 
          alt="Visual Studio Code Inspired Portfolio" />
        </div>
        <div>
          <h3>Cryptocurrency Dashboard</h3>
          <p>
            The purpose of the project titled “Cryptocurrency Dashboard” is to
            exclusively provide a web application that is user-friendly &
            reliable. This will give the insight to track various
            cryptocurrencies of one’s interest. The project mainly focuses on
            front-end technologies to build this responsive web application,
            that will work seamlessly across all platforms. The Dashboard has
            four modules: Cryptocurrency Graph, Market Cap table, Exchange
            crypto-currency, and Portfolio.
          </p>
          <h4>
            Tech-Stack : &nbsp; <i>Javascript, HTML, CSS</i>{" "}
          </h4>
          <br />

          <div className="gridlayout2">
            <a href="https://crypto-dashboard-sooty-chi.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              &lt; Live Site /&gt;
            </a>
            <a
              href="https://github.com/Abhishek1225/crypto-dashboard/tree/main/Coincex-main"
              target="_blank"
              rel="noopener noreferrer"
            >
              &lt; Code /&gt;
            </a>
          </div>
        </div>
      </div>

      
      <div className="gridlayout1">
        
        <div>
          <h3>Quiz platforms</h3>
          <p>
          Implements the functioning of an Quiz Platform Website that performs various functions like
             Create Quiz responsive and much more, developed by using REACTJS,CSS,HTML,ChartJs.
            Once added, there's also an option to edit the task and update it.
            Upon task completion, there's an option to strike off the task or to
            un-strike if not done. Then, at last, the task can be deleted when finally done.
          </p>
          <h4>
            Tech-Stack : &nbsp; <i>Javascript, HTML, CSS</i>{" "}
          </h4>
          <br />
          <div className="gridlayout2">
            <a
              href="https://quiz-dusky-gamma.vercel.app/"
              rel="noopener noreferrer"
            >
              &lt; Live Site /&gt;
            </a>
            <a
              href="https://github.com/Abhishek1225/quiz"
              target="_blank"
              rel="noopener noreferrer"
            >
              &lt; Code /&gt;
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default FrontendAndBackend;
