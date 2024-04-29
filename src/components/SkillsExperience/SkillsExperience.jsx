import './SkillsExperience.scss'

const skills = [
    {skill:"UI/UX Design", logo:""},
    {skill:"HTML", logo:""},
    {skill:"CSS", logo:""},
    {skill:"Javascript", logo:""},
    {skill:"React", logo:""},
    {skill:"Angular", logo:""},
    {skill:"Next.js", logo:""},
    {skill:"Typescript", logo:""},
    {skill:"SCSS", logo:""},
    {skill:"Git", logo:""},
    {skill:"Tailwind CSS", logo:""},
]

const experience = [
    {exp:"UI/UX Designer", company:"Manomay InsurTech Pvt. Ltd.",address:"Hyderabad, Telangana, India",from:"August 2022", to:"Present"},
    {exp:"Internship Trainee", company:"Manomay InsurTech Pvt. Ltd.",address:"Hyderabad, Telangana, India", from:"March 2022", to:"August 2022"},
    {exp:"B.E - Computer Science", company:"A.C.G.C.E.T",address:"Karaikudi, Tamil Nadu, India", from:"August 2018", to:"May 2022"},
]

const SkillsExperience = () => {
  return (
    <div className='skillsExperience'>
        <div className="skills">
            <h2>Skills</h2>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
            </ul>
        </div>
        <div className="experience">
            <h2>Experience</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquet, sapien eget fermentum consequat.</p>
        </div>
    </div>
  )
}

export default SkillsExperience