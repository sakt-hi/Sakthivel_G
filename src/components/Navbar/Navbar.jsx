import Sidebar from '../Sidebar/Sidebar';
import './Navbar.scss'
import { motion } from 'framer-motion'

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Sakthivel G
        </motion.span>
        <div className="social-links">
          <a href="mailto:sakthivel.ganesan@hotmail.com" target='_blank'>
              <img src="/email.png" className='mail' alt="" />
          </a>
          <a href="https://www.linkedin.com/in/sakthivel-g/" target='_blank'>
            <img src="/linkedin_white.png" alt="" />
          </a>
          <a href="https://github.com/sakt-hi" target='_blank'>
            <img src="/github_white.png" className='github' alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar