import { motion } from 'framer-motion'

const variants = {
    open:{
        transition:{
            staggerChildren:0.1
        }
    },
    closed:{
        transition:{
            staggerChildren:0.05,
            staggerDirection:-1
        }
    }
}

const itemVariants={
    open:{
        y:0,
        opacity:1
    },
    closed:{
        y:50,
        opacity:0
    }
}

const Links = () => {
  const navItems = ["Home", "Projects", "About", "Contact"]
  const socialLinks = [
    { name: "Email", link: "mailto:sakthivel.ganesan@hotmail.com",img:"email_dark.png" },
    { name: "LinkedIn", link: "https://www.linkedin.com/in/sakthivel-g/",img:"linkedin_dark.png" },
    { name: "Github", link: "https://github.com/sakt-hi",img:"github_dark.png" },
    { name: "Dribbble", link: "https://dribbble.com/sakthi_svg",img:"dribbble_dark.png" },
  ];
  return (
    <motion.div className="links" variants={variants} >
      {navItems.map((item) => (
        <motion.a href={`#${item}`} key={item} variants={itemVariants} whileHover={{scale:1.1}} whileTap={{scale:0.95}} >
          {item}
        </motion.a>
      ))}
      <motion.div variants={variants} className='navSocial'>
        {socialLinks.map((item) => (
          <motion.a href={`${item.link}`} key={item.name} variants={itemVariants} whileHover={{scale:1.1}} whileTap={{scale:0.95}} >
            <img src={item.img} alt="" />
          </motion.a>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Links