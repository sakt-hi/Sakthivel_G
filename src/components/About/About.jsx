import { aboutVariants } from '../../helpers/motionTextVariants'
import './About.scss'
import { motion } from 'framer-motion'
// Hi there! I'm Sakthivel, a guy with a passion for crafting visually stunning and seamlessly functional digital experiences. As a designer-cum-front-end developer, I merge aesthetic finesse with technical prowess to bring ideas to life.

const textVariants ={
    initial:{
        y:-200,
        opacity:0
    },
    animate:{
        y:0,
        opacity:1,
        transition:{
            duration:1,
            staggerChildren:0.1
        }
    },
    scrollButton:{
        opacity:0,
        y:10,
        transition:{
            duration:2,
            repeat:Infinity
        }
    }
}

const sliderVariants ={
    initial:{
        x:"100%",
    },
    animate:{
        x:"-220%",
        transition:{
            repeat:Infinity,
            repeatType:"mirror",
            duration:100,
        }
    },
}

const About = () => {

  return (
    <motion.div className='about' >
        <div className="wrapper">
            <motion.div className="textWrapper" variants={aboutVariants} initial="initial" whileInView="animate">
                <motion.div variants={aboutVariants} className="titleContainer">
                    <motion.div variants={aboutVariants} className="title">
                        <motion.p variants={aboutVariants}>Hi there !👋</motion.p>
                        <motion.h1 variants={aboutVariants}>I'm <b>Sakthivel</b>,</motion.h1>
                    </motion.div>
                </motion.div>
                <motion.div variants={aboutVariants} className="textContainer">
                    <motion.p variants={aboutVariants}>A design-focused <b>Front-End Developer</b>, merging visual finesse with technical expertise to craft captivating digital experiences.</motion.p>
                </motion.div>
                <motion.div variants={aboutVariants} className="cta">
                    <motion.button className='primary-cta' whileHover={{backgroundColor:"hsl(240,47%,40%)", color:"white",borderColor:"hsl(240,47%,60%)"}}><motion.a href="https://drive.google.com/file/d/1JBi94T_76BxRStGX0nrDY4r7-NBOt82_/view?usp=sharing" target='_blank'>Check out Resume</motion.a></motion.button>
                    <motion.button whileHover={{backgroundColor:"hsl(240,47%,16%)", borderColor:"hsl(240,47%,40%)"}}><motion.a href="#Projects">Explore my works</motion.a></motion.button>
                </motion.div>
            </motion.div>
            <motion.a href="#About"><motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="" /></motion.a>
            {/* <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate" >
                    Javascript React Angular
            </motion.div> */}
        </div>
    </motion.div>
  )
}

export default About