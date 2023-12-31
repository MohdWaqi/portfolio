import './App.css'
import NavBar from './components/NavBar'
import myImage from "./assets/image1.png"
import chakra from "./assets/chakra.png"
import ProjectCard from './components/ProjectCard'
import emailIcon from "./assets/gmail.png"
import { useContext, useEffect, useRef } from 'react'
import { ScreenContext } from './context/ScreenContextProvider'
import AOS from 'aos';
import 'aos/dist/aos.css'
import Cursor from './components/Cursor'
import { MouseContext } from './context/MouseContextProvider'
import resume from "./assets/Mohd-Waqi-Pervez-Resume.pdf"
import SkillDisplay from './components/SkillDisplay'



function App() {
 const {isTablet, isMobile} = useContext(ScreenContext)
 const{mouseOverEvent, mouseOutEvent} = useContext(MouseContext)
 useEffect(()=>{
  AOS.init({offset:isMobile?80:150})
  let openResume = document.querySelectorAll(".download")
  for(let element of openResume){
    element.addEventListener("click", handleClick)
  }
 },[isMobile])
const handleClick=()=>{
    open("https://drive.google.com/file/d/1tH0_LlIviwSo1yleoLGRZfvF3sUgyucT/view?usp=sharing")
}

  return (
    <div className="app" id='App'>
    <Cursor/>
    <NavBar/>
    <div >

    
    <div name='home' className='landingPage' style={{height:"100vh"}}>
    <div>
      <h2 onMouseOut={mouseOutEvent} onMouseOver={mouseOverEvent}>Hello!! I am </h2>
      <h1 onMouseOut={mouseOutEvent} onMouseOver={mouseOverEvent}>Mohd Waqi Pervez</h1>
      <h2 onMouseOut={mouseOutEvent} onMouseOver={mouseOverEvent}>a <span>React Developer</span></h2>
      <a className='download' onMouseOut={mouseOutEvent} onMouseOver={mouseOverEvent} href={resume} download="Mohd-Waqi-Pervez-Resume.pdf"><button className='btn'>Resume</button></a>
    </div>

    </div>
    <div name='about' className='sections'>
      <h1 onMouseOut={mouseOutEvent} onMouseOver={mouseOverEvent} data-aos="fade-up">About Me</h1>
      <hr data-aos="fade-up"/>
      <div data-aos="fade-up" className='about'>
        <h3 onMouseOut={mouseOutEvent} onMouseOver={mouseOverEvent}>Versatile Front End React Developer with expertise in HTML, CSS, and JavaScript. Proficient in crafting dynamic interfaces using React, Tailwind CSS, and Chakra UI. Quick learner adept at integrating innovative technologies like Generative AI. Skilled in Python, Git, and Github for collaborative project execution. Passionate about building impactful, user-centric solutions.</h3>
        {!isTablet&&<img onMouseOut={mouseOutEvent} onMouseOver={mouseOverEvent} src={myImage}/>}
      </div>
      <div className='githubStatus'>
      <img  data-aos="fade-up" onMouseOut={mouseOutEvent} onMouseOver={mouseOverEvent} src="https://github-readme-stats.vercel.app/api/top-langs?username=mohdwaqi&show_icons=true&locale=en&layout=compact&theme=transparent&hide_border=true" alt="mohdwaqi" />

<img data-aos="fade-up" onMouseOut={mouseOutEvent} onMouseOver={mouseOverEvent} src="https://github-readme-stats.vercel.app/api?username=mohdwaqi&show_icons=true&locale=en&theme=transparent&hide_border=true&title_color=white&text_color=#FFFFFF" alt="mohdwaqi" /><br/>

<img data-aos="fade-up" onMouseOut={mouseOutEvent} onMouseOver={mouseOverEvent} src="https://github-readme-streak-stats.herokuapp.com/?user=mohdwaqi&theme=transparent&hide_border=true&title_color=white&text_color=#FFFFFF" alt="mohdwaqi" />
      </div>
    </div>
    <div name='skills' className='sections skillCont'>
      <h1 data-aos="fade-up" onMouseOut={mouseOutEvent} onMouseOver={mouseOverEvent} >Skills</h1>
      <hr data-aos="fade-up"/>
      <h2 data-aos="fade-up">Tech Stack</h2>
      <div className='skills'>
        <SkillDisplay image='https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-256.png' label="React.js" />
        <SkillDisplay image={chakra} label="Chakra UI" />
        <SkillDisplay image='https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-html-5-512.png' label="HTML" />
        <SkillDisplay image='https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-css-3-512.png' label="CSS" />
        <SkillDisplay image='https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/tailwind-css-icon.png' label="Tailwindcss" />
        <SkillDisplay image='https://cdn2.iconfinder.com/data/icons/designer-skills/128/code-programming-javascript-software-develop-command-language-256.png' label="JavaScript" />
        <SkillDisplay image='https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/bootstrap-5-logo-icon.svg' label="Bootstrap" />
        <SkillDisplay image='https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/267_Python_logo-256.png' label="Python" />
        <SkillDisplay image='https://cdn4.iconfinder.com/data/icons/logos-3/456/nodejs-new-pantone-black-256.png' label="Node js" />
        <SkillDisplay image='https://cdn3.iconfinder.com/data/icons/social-media-2169/24/social_media_social_media_logo_git-512.png' label="Git" />
    </div>
      <h2 data-aos="fade-up">Tech Tools</h2>
      <div className='skills'>
        <SkillDisplay image='https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/visual-studio-code-icon.svg' label="VS Code" />
        <SkillDisplay image='https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/pycharm-icon.svg' label="Pycharm" />
        <SkillDisplay image='https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/postman-icon.svg' label="Postman" />
        <SkillDisplay image='https://seeklogo.com/images/R/replit-icon-logo-A666709FE9-seeklogo.com.png' label="Replit" />
        <SkillDisplay image='https://seeklogo.com/images/N/npm-logo-F0E1FE956F-seeklogo.com.png' label="NPM" />
        <SkillDisplay image='https://seeklogo.com/images/N/netlify-icon-logo-7CF6AA9DC7-seeklogo.com.png' label="Netlify" />
        <SkillDisplay image='https://seeklogo.com/images/V/vite-logo-BFD4283991-seeklogo.com.png' label="Vite" />
        <SkillDisplay image='https://seeklogo.com/images/C/codepen-logo-D1012149C3-seeklogo.com.png' label="Codepen" />
        <SkillDisplay image='https://seeklogo.com/images/H/heroku-logo-90FDE34A7D-seeklogo.com.png' label="Heroku" />
        <SkillDisplay image='https://seeklogo.com/images/F/firebase-logo-402F407EE0-seeklogo.com.png' label="Firebase" />
        <SkillDisplay image='https://cdn0.iconfinder.com/data/icons/shift-logotypes/32/Github-256.png' label="Github" />
     </div>

    </div>
    <div  name='projects' className='sections'>
      <h1 onMouseOut={mouseOutEvent} onMouseOver={mouseOverEvent} data-aos="fade-up">Projects</h1>
      <hr data-aos="fade-up"/>
      <ProjectCard techIco={['https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-html-5-512.png', 'https://cdn2.iconfinder.com/data/icons/designer-skills/128/code-programming-javascript-software-develop-command-language-256.png', 'https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-css-3-512.png', 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-256.png',chakra, 'https://cdn3.iconfinder.com/data/icons/social-media-2169/24/social_media_social_media_logo_git-512.png']} images={['https://i.postimg.cc/k53Kkfq6/Vite-React-Google-Chrome-21-11-2023-07-56-24.png','https://i.postimg.cc/gjWYpLrK/Vite-React-Google-Chrome-21-11-2023-07-57-33.png','https://i.postimg.cc/J4sT8YVP/Vite-React-Google-Chrome-21-11-2023-07-58-31.png','https://i.postimg.cc/wBwJ7HDJ/Vite-React-Google-Chrome-21-11-2023-07-58-48.png']} features={["Ability to Sort displayed Products.", "Ability to login the user with proper logged in successful alert.","User Friendly.","Fullscreen Mode."]} tech={["React js","Chakra UI","Javascript Utilities & Libraries"]} description="This is the clone UI of India's largest e-commerce store." projectOn="Myntra Clone" deploy='https://waqi-myntra.netlify.app/' github="https://github.com/MohdWaqi/Myntra-Clone"/>
      <ProjectCard techIco={['https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-html-5-512.png','https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-css-3-512.png', 'https://cdn3.iconfinder.com/data/icons/social-media-2169/24/social_media_social_media_logo_git-512.png']} images={['https://i.postimg.cc/d0ycMnHp/Document-Google-Chrome-02-12-2023-16-15-41.png','https://i.postimg.cc/6q0f8J3S/Document-Google-Chrome-02-12-2023-16-17-11.png','https://i.postimg.cc/brB4FBcZ/Document-Google-Chrome-02-12-2023-16-18-24.png']} features={["Different UI in different devices", "Responsive","User Friendly.","Fullscreen Mode."]} tech={["HTML","CSS","Git"]} description="This is the responsive superhero resume of Batman." projectOn="Superhero Resume" deploy='https://mohdwaqi.github.io/Superhero-Resume/' github="https://github.com/MohdWaqi/Superhero-Resume"/>
    </div>
    <div name='contact' className='sections contact'>
      <h1 data-aos="fade-up">Get In Touch</h1>
      <div>
        <a onMouseOut={mouseOutEvent} onMouseOver={mouseOverEvent} target="_blank" href='https://www.linkedin.com/in/mohd-waqi-pervez-52a432291/'><img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/square-linkedin-256.png"/></a>
        <a onMouseOut={mouseOutEvent} onMouseOver={mouseOverEvent} target="_blank" href='mailto:mohdwaqipervez@gmail.com'><img src={emailIcon}/></a>
        <a onMouseOut={mouseOutEvent} onMouseOver={mouseOverEvent} target="_blank" href='https://github.com/MohdWaqi'><img src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-256.png"/></a>
        <a onMouseOut={mouseOutEvent} onMouseOver={mouseOverEvent} target="_blank" href="https://api.whatsapp.com/send?phone=918755075132&text=Hello Waqi"><img src="https://cdn2.iconfinder.com/data/icons/social-micon/512/whatsapp-256.png"/></a>
        <a onMouseOut={mouseOutEvent} onMouseOver={mouseOverEvent} target="_blank" href='tel:+918755075132'><img src="https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_local_phone_48px-256.png"/></a>
      </div>
      <p style={{textAlign:"center"}}>Developed by: Mohd Waqi Pervez || mohdwaqipervez@gmail.com</p>
    </div>
    </div>
    </div>
  )
}

export default App
