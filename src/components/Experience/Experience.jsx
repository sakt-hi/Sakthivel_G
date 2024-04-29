import { useRef } from 'react';
import { expItemVariants, itemVariants, skillTextVariants, staggerVariants } from '../../helpers/motionTextVariants';
import './Experience.scss';
import { motion, useInView } from 'framer-motion';
const experiences = [
    {
      title: "UI/UX Designer",
      company: "Manomay InsurTech Pvt. Ltd.",
      location: "Hyderabad, Telangana, India",
      date: "August 2022 - Present",
      image: "/work.png"
    },
    {
      title: "Internship Trainee",
      company: "Manomay InsurTech Pvt. Ltd.",
      location: "Hyderabad, Telangana, India",
      date: "March 2022 - August 2022",
      image: "/intern.png"
    },
    {
      title: "B.E - Computer Science",
      company: "A.C.G.C.E.T",
      location: "Karaikudi, Tamil Nadu, India",
      date: "August 2018 - May 2022",
      image: "/graduate.png"
    }
  ];
  

const Experience = () => {
  return (
    <div className="expWrapper">
        <motion.div variants={skillTextVariants} className="expTitle" initial="initial" whileInView="animate">
            <motion.h1 variants={skillTextVariants}>Experience & Education</motion.h1>
            <motion.p variants={skillTextVariants}>Here's my journey blending experience and education, shaping digital excellence..</motion.p>
        </motion.div>  
        <motion.div className='experience' variants={staggerVariants} initial="closed" animate="open">
            {experiences.map((experience, index) => (
                <ExperienceItem key={index} experience={experience} />
            ))}
        </motion.div>
    </div>
  )
};

const ExperienceItem = ({ experience }) => {
    const containerRef = useRef(null);
    const inView = useInView(containerRef,{ triggerOnce: false });
    
  
    return (
      <motion.div
        className="container"
        ref={containerRef}
        variants={expItemVariants}
        initial="closed"
        animate={inView ? "open" : "closed"}
      >
        <img src={experience.image} alt="" />
        <div className="textBox">
          <h2>{experience.title}</h2>
          <h4>{experience.company}</h4>
          <small>{experience.location}</small>
          <p>{experience.date}</p>
          <span className="leftArrow"></span>
        </div>
      </motion.div>
    );
};  

export default Experience