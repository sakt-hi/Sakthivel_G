import './Skills.scss';
import { motion, useInView } from 'framer-motion';
import { itemVariants, skillTextVariants, staggerVariants, textVariants } from '../../helpers/motionTextVariants';
import { useRef } from 'react';

const skills = [
    
    {skill:"HTML", logo:"/html.png"},
    { skill: "CSS", logo: "/css.png" },
    {skill:"Sass", logo:"/sass.png"},
    {skill:"Bootstrap", logo:"/bootstrap.png"},
    { skill: "Tailwind", logo: "/tailwindcss.png" },
    {skill:"Javascript", logo:"/javascript.png", style:{borderRadius:"30%"}},
    { skill: "React", logo: "/react.png" },
    {skill:"Typescript", logo:"/typescript.png"},
    {skill:"Angular", logo:"/angular.png"},
    {skill:"Git", logo:"/git.png"},
    {skill:"Figma", logo:"/figma.png"},
    // {skill:"Next.js", logo:"/nextjs.png"},
]

const Skills = () => {
    const ref = useRef();
    const isInView = useInView(ref,{margin:"-200px"})
  return (
    <div className='skills' >
        <motion.div ref={ref} variants={skillTextVariants} className="textContainer" initial="initial" whileInView="animate">
            <motion.h1 variants={skillTextVariants}>Tools & Expertise</motion.h1>
            <motion.p variants={skillTextVariants}>Presenting my curated selection of essential design tools and frontend skills for crafting compelling digital experiences.</motion.p>
        </motion.div>
        <motion.div className='skillList' variants={staggerVariants} initial="closed" whileInView="open" >
            <motion.div className="skills" variants={staggerVariants}>
                {skills.slice(0, 7).map((skill, index) => (
                <motion.div key={index} variants={itemVariants} className="skill">
                    <div className="skillIcon">
                        <img src={skill.logo} alt={skill.skill} style={skill.style} />
                    </div>
                    <span>{skill.skill}</span>
                </motion.div>
                ))}
            </motion.div>
            <motion.div className="skills" variants={staggerVariants}>
                {skills.slice(7).map((skill, index) => (
                <motion.div key={index+7} variants={itemVariants} className="skill">
                    <div className="skillIcon">
                        <img src={skill.logo} alt={skill.skill} style={skill.style} />
                    </div>
                    <span>{skill.skill}</span>
                </motion.div>
                ))}
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Skills