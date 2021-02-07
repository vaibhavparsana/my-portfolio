import udemyCCP from './images/Capture.png';
import kanbanPractitioner from './images/Capture3.png';
import frontEnd from './images/Capture2.png';
import javascriptAlgo from './images/Capture2.png';
import webDesign from './images/Capture2.png';
import astitva from './images/Astitva.png';
import drumMachine from './images/drum-machine.png';
import jsCalc from './images/javascript-calculator.png';
import pomodoro from './images/pomodoro-clock.png';
import rqg from './images/random_quote_genereator.png';
import avsar from './images/Avsar.png';
import wlBg from './images/welcome-background.jpg';
import skillsImage from './images/Skill-image.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="site-header sticky-top py-1 my-header">
        <nav className="container d-flex flex-column flex-md-row justify-content-between">
          <a className="py-2 d-none d-md-inline-block active" href="#home">Home</a>
          <a className="py-2 d-none d-md-inline-block" href="#about-me">About</a>
          <a className="py-2 d-none d-md-inline-block" href="#skills">Skills</a>
          <a className="py-2 d-none d-md-inline-block" href="#achievement">Achievement</a>
          <a className="py-2 d-none d-md-inline-block" href="#portfolio">Portfolio</a>
          <a className="py-2 d-none d-md-inline-block" href="#experience">Experience</a>
          <a className="py-2 d-none d-md-inline-block" href="#education">Education</a>
        </nav>
      </header>

      <div id='home'>
        <div className="container">
          <div className="card bg-color">
            <img src={wlBg} className="card-img wel-img" alt="welcome-image" />
            <div className="card-img-overlay about-content">
              <h3 className="card-title">Vaibhav Parsana</h3>
              <div><i className="fa fa-envelope mr-3"></i>parsana7v@gmail.com</div>
              <div><i className="fa fa-phone mr-3"></i>+1 905 208 6645</div>
              <div><i className="fa fa-map-marker mr-3"></i>Brampton, Ontario, Canada</div>
              <div><a href="https://www.linkedin.com/in/vaibhav-parsana" className="text-light"><i className="fa fa-linkedin mr-3"></i>https://www.linkedin.com/in/vaibhav-parsana</a>
                <div><a href="https://github.com/vaibhavparsana" className="text-light"><i className="fa fa-github-square mr-3"></i>https://github.com/vaibhavparsana</a></div>

              </div>
            </div>
          </div>
        </div>
        <Divider space="70" />
      </div>
      <div id='about-me'>
        <div className="container">
          <div className="row justify-content-around">
            <div className="col-md-4">
              <h4 className='section-title'><i className="fa fa-user icon-color"></i>&emsp; About Me</h4>
              <p className="card-text">I am a self-motivated individual with about two years of learning experience at a coding Bootcamp and six years experience in electronics and communications seeking a challenging role as front end Developer in an organization that values my qualifications and my ability to deliver quality products.</p>
            </div>
            <div className="col-md-4">
              <h4 className='section-title'><i className="fa fa-pen"></i>&emsp;  Knowledge</h4>
              <ul>
                <li className="skill-tags">C</li>
                <li className="skill-tags">Java/JavaScript</li>
                <li className="skill-tags">HTML/CSS</li>
                <li className="skill-tags">Bootstrap</li>
                <li className="skill-tags">AWS</li>
                <li className="skill-tags">REACT</li>
                <li className="skill-tags">jQuery/AngularJS/JSON</li>
                <li className="skill-tags">Kanban</li>
                <li className="skill-tags">Agile</li>
                <li className="skill-tags">Test Driven Development</li>
                <li className="skill-tags">PL/SQL</li>
                <li className="skill-tags">MySQL/Oracle</li>
                <li className="skill-tags">NoSQL</li>
                <li className="skill-tags">MongoDB</li>
              </ul>

            </div>
          </div>

        </div>
        <Divider space="70" />
      </div>


      <div id='skills'>

        <div className="container">
          <SectionHeader section_title='My Skills' icon_name="fa fa-tool" />
          <div className='row'>
            <div className='col-md-1'></div>
            <div className='col-md-4'>
              <ProgressBar skill='Python' percentage='70' />
              <ProgressBar skill='React' percentage='80' />
              <ProgressBar skill='AWS' percentage='60' />
              <ProgressBar skill='Java' percentage='75' />
              <ProgressBar skill='JavaScript/jQuery' percentage='85' />

            </div><div className='col-md-2'></div> <div className='col-md-4'>
              <ProgressBar skill='JavaScript/jQuery' percentage='85' />
              <ProgressBar skill='C' percentage='80' />
              <ProgressBar skill='HTML/CSS' percentage='90' />
              <ProgressBar skill='BootStrap' percentage='90' />
              <ProgressBar skill='SQL' percentage='80' />
              <div className='col-md-1'></div>


            </div>
          </div>
        </div>
        <Divider space="70" />
      </div>

      <div id='achievement'>
        <SectionHeader section_title='My Achievements' icon_name="fa fa-trophy" />
        <div className="container">
          <div className='row'>
            <AchievementContent achievementImage={udemyCCP} achievementImageAlt='udemy-AWS_CCP' achievementTitle='AWS Certified Cloud Practitioner' achievementDesc='' achievementCerti='https://www.udemy.com/certificate/UC-e9e6a62a-4a32-4055-a820-37deb675db62/' />
            <AchievementContent achievementImage={kanbanPractitioner} achievementImageAlt='Kanban_Practitioner' achievementTitle='Team Kanban Practitioner' achievementDesc='Learned to how organize work, improve transparency, identify bottlenecks, and enhance team collaboration' achievementCerti='https://edu.kanban.university/users/vaibhav-parsana'/>
          </div>
          <div className='row'>
            <AchievementContent achievementImage={webDesign} achievementImageAlt='Responsive_Web_Design' achievementTitle='Responsive Web Design' achievementDesc='HTML, CSS, Responsive Web Design, Applied Accessibility' achievementCerti="https://freecodecamp.org/certification/vaibhavparsana/responsive-web-design" />
            <AchievementContent achievementImage={javascriptAlgo} achievementImageAlt='JavaScript_Algorithms' achievementTitle='JavaScript Algorithms and Data Structure' achievementDesc='ES6, Object-Oriented, and Functional Programming Debugging' achievementCerti='https://www.freecodecamp.org/certification/vaibhavparsana/javascript-algorithms-and-data-structures'/>
          </div>
          <div className='row'>
            <AchievementContent achievementImage={frontEnd} achievementImageAlt='Front_End_Libraries' achievementTitle='Front End Libraries' achievementDesc='Bootstrap, Jquery, Sass, React, Redux' achievementCerti='https://www.freecodecamp.org/certification/vaibhavparsana/front-end-libraries'/>
            <AchievementContent achievementImage={frontEnd} achievementImageAlt='Front_End_Libraries' achievementTitle='Front End Libraries' achievementDesc='Bootstrap, Jquery, Sass, React, Redux' />
          </div>
        </div>
        <Divider space="70" />
      </div>

      <div id='portfolio'>
        <SectionHeader section_title='My Portfolio' icon_name="fa fa-briefcase"/>
        <div className="container ">
          <div className='row justify-content-around'>
            <PortfolioContent portfolioImage={rqg} portfolioImageAlt='Random_quote_genereator' portfolioTitle='Random Quote Generator' portfolioDesc='' portfolioLink='' />
            <PortfolioContent portfolioImage={astitva} portfolioImageAlt='Astitva' portfolioTitle='Astitva' portfolioDesc='' portfolioLink='' />
            <PortfolioContent portfolioImage={avsar} portfolioImageAlt='Avsar' portfolioTitle='Avsar' portfolioDesc='' portfolioLink='' />
          </div>
          <div className='row justify-content-around'>
            <PortfolioContent portfolioImage={jsCalc} portfolioImageAlt='Javascript-calculator' portfolioTitle='Calculator' portfolioDesc='' portfolioLink='' />
            <PortfolioContent portfolioImage={pomodoro} portfolioImageAlt='Pomodoro-clock' portfolioTitle='Pomodoro Clock' portfolioDesc='' portfolioLink='' />
            <PortfolioContent portfolioImage={drumMachine} portfolioImageAlt='Drum-machine' portfolioTitle='Drum machine' portfolioDesc='' portfolioLink='' />
          </div>
        </div>
        <Divider space="70" />
      </div>

      <div id='experience'>
        <SectionHeader section_title='My Experience' icon_name='fa fa-user-tie' />
        <div className="container">
          <div className="row experience-content">
            <div className="left-content col-md-3">
              <p className="mt-1">June 2017 - July 2018</p>

            </div>

            <div className="middle-content col-md-1">
              <i className="fa fa-circle time-circle"></i>
              <p className="vert-line text-center"></p>

            </div>
            <div className="right-content col-md-8">
              <h4>Assistant Engineer at Aaditya Techtronics Pvt Ltd</h4>
              <p>Research and Development Department</p>
              <ul><li>Analyzed requirements and prepared the design for research products.</li>
                <li>Monitored the products under development in the research lab.</li>
                <li>Assembled circuitry for given system as per requirements.</li>
                <li>Developed, integrated and tested the research products.</li></ul>
            </div>
          </div>
        </div>
        <Divider space="70" />
      </div>

      <div id='education'>
        <SectionHeader section_title='My Education' icon_name="fa fa-user-graduate" />
        <div className="container">
          <EducationContent certificate="Ontario College Diploma" majors="Computer Systems Technician – Software Engineering" collegename="Sheridan College" year="June 2019 - Aug 2020" />
          <EducationContent certificate="Bachelor's Engineering" majors="Electronics and Telecommunication Engineering" collegename="BVM Collge of Engineering" year="June 2014 - May 2017" />
          <EducationContent certificate="Diploma Engineering" majors="Electronics and Communication Engineering" collegename="STBS College of Engineering " year="June 2011 - May 2014" />

        </div>
        <Divider space="70" />
      </div>

    </div >
  );
}

function ProgressBar(props) {
  return <div>
    <p className="my-progress-title">{props.skill}<span className="float-right">{props.percentage + '%'}</span></p>
    <div className='progress'>
      <div className="progress-bar progress-bar-striped" role="progressbar" style={{ width: props.percentage + '%' }} aria-valuenow={props.percentage} aria-valuemin="0" aria-valuemax="100"></div>
    </div>
  </div>
}

function SectionHeader(props) {
  return <div className='row'><div className="container">
    <h4 className='section-title text-center'>{props.section_title}</h4>
  </div>
  </div>
}

function AchievementContent(props) {
  return <div className="col-md-6 mb-3" >
    <div className="row g-0">
      <div className="col-md-4 certi-border mx-auto text-center">
        <img className='img-fluid ' src={props.achievementImage} alt={props.achievementImageAlt} style={{ Height: 100, Width: 100 }} />
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title">{props.achievementTitle}</h5>
          <p className="card-text">{props.achievementDesc}</p>
          <a href={props.achievementCerti} target="_blank" className="btn btn-primary">View Certificate</a>
          {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
        </div>
      </div>
    </div>
  </div>
}

function PortfolioContent(props) {
  return <div className="col card portfolio-card " style={{ width: 18 + 'rem' }}>
    <img src={props.portfolioImage} className="card-img-top" alt={props.portfolioImageAlt} />
    <div className="card-body bg-portfolio">
      <h5 className="card-title">{props.portfolioTitle}</h5>
      <p className="card-text">{props.portfolioDesc}</p>
      <a href={props.portfolioLink} className="btn btn-primary">View</a>
    </div>
  </div>
}


function EducationContent(props) {
  return <div>
    <div className="row experience-content">
      <div className="left-content col-md-3">
        <p className="mt-1">{props.year}</p>

      </div>

      <div className="middle-content col-md-1">
        <i className="fa fa-circle time-circle"></i>
        <p className="vert-line text-center"></p>

      </div>
      <div className="right-content col-md-8">
        <h4>{props.certificate}</h4>
        <p>{props.majors}</p>
        <p>{props.collegename}</p>
      </div>
    </div>
  </div>
}

function Divider(props) {
  return <div style={{ height: props.space + 'px' }}>

  </div>
}



export default App;
