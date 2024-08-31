import { useRef } from 'react'
import './Projects.scss'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { aboutVariants } from '../../helpers/motionTextVariants'

const projectItems = [
    {
        id:1,
        title:"FoodEase",
        img:"/foodease_mockup.png",
        desc:"FoodEase is a food delivery app designed to offer a seamless experience for browsing, ordering, and enjoying meals from a cloud kitchen. With user-friendly navigation and quick delivery, FoodEase ensures that your favorite dishes are just a tap away.",
        link:"https://foodease.vercel.app/",
        repo:"https://github.com/sakt-hi/foodease-frontend"
    },
    {
        id:2,
        title:"Tic-Tac-Toe",
        img:"/tic_tac_toe_mockup.png",
        desc:"This is a simple implementation of the classic game Tic-Tac-Toe using React. It allows two players to take turns marking spaces on a 3x3 grid. The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row wins the game.",
        link:"https://tic-tac-toe-sakthi.netlify.app/",
        repo:"https://github.com/sakt-hi/Tic-Tac-Toe"
    },
    {
        id:3,
        title:"The Almost Final Countdown",
        img:"/finalcountdown_mockup.png",
        desc:"This Timer Countdown App is a demonstration of using useRef hook in React to manage multiple timers. The app provides four different timers - Easy, Medium, Hard, and Pros Only. Each timer counts down from a predefined duration and notifies the user upon completion.",
        link:"https://timercountdown-useref.netlify.app/",
        repo:"https://github.com/sakt-hi/TimerCountdown-useRef"
    },
    // {
    //     id:3,
    //     title:"ChatGPT Clone",
    //     img:"/chatgpt_clone_mockup.png",
    //     desc:"This project seeks to replicate OpenAI's GPT-3.5, creating a conversational AI capable of understanding and generating human-like text across various topics using advanced natural language processing techniques.",
    //     link:"https://chatgpt-clone-sakthi.netlify.app/",
    //     repo:"https://github.com/sakt-hi/ChatGPT_Clone"
    // },
    // {
    //     id:4,
    //     title:"Foodjun",
    //     img:"/foodjun_mockup.png",
    //     desc:"FoodJun, inspired by platforms like Swiggy, offers seamless ordering and delivery tracking. Designed to showcase my skills in app development and user experience, it ensures a delightful culinary journey.",
    //     link:"https://foodjun.netlify.app/",
    //     repo:"https://github.com/sakt-hi/foodjun"
    // }

]

const SingleProject = ({item}) =>{
    const projectRef = useRef();
    const {scrollYProgress} = useScroll({target:projectRef});
    const y = useTransform(scrollYProgress,[0,1],[-300,300])
    return(
        <section ref={projectRef}>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer">
                        <img src={item.img} alt="" />
                    </div>
                    <motion.div className="textContainer">
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <motion.div variants={aboutVariants} className="btnContainer">
                            <motion.button className='primary-btn' whileHover={{backgroundColor:"hsl(240,47%,40%)", color:"white",borderColor:"hsl(240,47%,60%)"}}><motion.a href={item.link} target='_blank'>Live Preview</motion.a></motion.button>
                            <motion.button className='secondary-btn' whileHover={{backgroundColor:"hsl(240,47%,16%)", borderColor:"hsl(240,47%,40%)"}}><motion.a href={item.repo} target='_blank'>View Repo</motion.a></motion.button>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

const Projects = () => {

    const ref = useRef()
    const {scrollYProgress} = useScroll({target:ref,offset:["start start","end end"]})
    const  scaleX = useSpring(scrollYProgress,{
        stiffness:100,
        damping:30,
    })

  return (
    <div className='projects' ref={ref} id='Projects'>
        <div className="progress">
            <h1>Featured Works</h1>
            <motion.div style={{ scaleX }} className="progressBar"></motion.div>
        </div>
        {projectItems.map(item=>(
            <SingleProject item={item} key={item.id} />
        ))}
    </div>
  )
}

export default Projects