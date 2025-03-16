import { motion, useInView } from "framer-motion"
import { Briefcase, Calendar, Download, GraduationCap } from "lucide-react"
import { useRef } from "react"

export default function ResumeSection() {
    const sectionRef = useRef(null)
    const isInView = useInView(sectionRef, { once: false, amount: 0.2 })
  
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1,
          delayChildren: 0.2,
        },
      },
    }
  
    const itemVariants = {
      hidden: { y: 20, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.5, ease: "easeOut" },
      },
    }
  
    const skillVariants = {
      hidden: { width: 0 },
      visible: (width:number) => ({
        width: `${width}%`,
        transition: { duration: 1, ease: "easeOut", delay: 0.5 },
      }),
    }
  
    const educationData = [
      {
        degree: "Advanced Diploma In UI/UX Design",
        institution: "Aviv Digital",
        year: "2024 - 2025",
        description: "Currently pursuing advanced studies in UI/UX design principles and methodologies.",
      },
      {
        degree: "Bachelor of Technology CSE",
        institution: "Mahaguru Institute of Technology",
        year: "2020 - 2024",
        description: "CGPA - 6.56",
      },
      {
        degree: "Higher Secondary Education",
        institution: "GOVT VHSS MAVELIKARA",
        year: "2019",
        description: "79%",
      },
      {
        degree: "SSLC",
        institution: "ST MARY'S GIRLS HIGH SCHOOL",
        year: "2017",
        description: "97%",
      },
    ]
  
    const projectData = [
      {
        position: "UI/UX for software training institute",
        company: "Lead Designer, UX Researcher | Case Study",
        description:
          "Designed an intuitive and modern UI/UX for a software training institute's website, focusing on enhancing user engagement, accessibility, and ease of navigation for students and parents.",
      },
      {
        position: "HealthCare App",
        company: "Lead Designer | Mini Project",
        description:
          "Designed a user-friendly healthcare app for seamless doctor search, appointment booking, and health record management emphasizing intuitive design, accessibility, and a calming aesthetic to ensure an efficient and stress-free user experience.",
      },
      {
        position: "EdTech SEO Dashboard Design",
        company: "Lead Designer | Mini Project",
        description:
          "Designed a comprehensive data visualization tool to track student engagement, course performance, instructor effectiveness, and revenue trends. Developed three key dashboards: Overview, Report & Analysis, and User Management, providing real-time data and interactive charts for actionable insights.",
      },
      {
        position: "Fingerprint Authentication Voting System",
        company: "Frontend Designer",
        description:
          "Designed a user-friendly UI for a fingerprint voter authentication system, focusing on clear navigation and efficient interactions. Applied UX/UI principles to create a visually appealing and functional experience.",
      },
      {
        position: "Flight price prediction system",
        company: "Frontend Designer",
        description:
          "Designed interface seamlessly presents data-driven forecasts and insights, making complex information on historical ticket prices and future predictions accessible and user-friendly.",
      },
    ]
  
    const experienceData = [
      {
        position: "Web Development Using React",
        company: "Atmios Technologies",
        year: "Internship",
        description:
          "Gained hands-on experience in translating design concepts into functional and visually appealing web applications.",
      },
    ]
  
    const designSkills = [
      "UX Research",
      "UI Design",
      "Agile Development",
      "Wireframing",
      "Prototyping",
      "Web Design",
      "Graphics Design",
      "Illustration",
    ]
  
    const softwareSkills = [
      { name: "Figma", proficiency: 90 },
      { name: "Illustrator", proficiency: 85 },
      { name: "Indesign", proficiency: 80 },
      { name: "Photoshop", proficiency: 85 },
      { name: "HTML", proficiency: 75 },
      { name: "CSS", proficiency: 75 },
    ]
  
    const languages = ["English", "Hindi", "Malayalam"]
  
    return (
      <section className="py-20 " ref={sectionRef}>
        <div className="container mx-auto px-4">
          <motion.div
            className="mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
             <div className="flex justify-between items-center mb-16">
            <motion.h2 className="text-3xl font-serif" variants={itemVariants}>
              Resume
            </motion.h2>

            <motion.a
              href="/neha_resume.pdf"
              download
              className="flex items-center gap-2 px-5 py-2.5 bg-black text-white rounded-full hover:bg-gray-800 transition-colors duration-300 group"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="h-4 w-4 group-hover:animate-bounce" />
              <span>Download CV</span>
            </motion.a>
          </div>
  
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              {/* Education Column */}
              <div>
                <motion.h3 className="text-xl font-medium mb-8 flex items-center gap-2" variants={itemVariants}>
                  <GraduationCap className="h-5 w-5" />
                  Education
                </motion.h3>
  
                <div className="space-y-8">
                  {educationData.map((item, index) => (
                    <motion.div key={index} className="relative pl-8 border-l border-gray-200" variants={itemVariants}>
                      <div className="absolute -left-[5px] top-0 h-2.5 w-2.5 rounded-full bg-gray-400" />
                      <h4 className="text-lg font-medium">{item.degree}</h4>
                      <p className="text-gray-600 mb-1">{item.institution}</p>
                      <div className="flex items-center text-gray-500 text-sm mb-2">
                        <Calendar className="h-3.5 w-3.5 mr-1" />
                        {item.year}
                      </div>
                      <p className="text-gray-700">{item.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
  
              {/* Experience Column */}
              <div>
                <motion.h3 className="text-xl font-medium mb-8 flex items-center gap-2" variants={itemVariants}>
                  <Briefcase className="h-5 w-5" />
                  Experience
                </motion.h3>
  
                <div className="space-y-8">
                  {experienceData.map((item, index) => (
                    <motion.div key={index} className="relative pl-8 border-l border-gray-200" variants={itemVariants}>
                      <div className="absolute -left-[5px] top-0 h-2.5 w-2.5 rounded-full bg-gray-400" />
                      <h4 className="text-lg font-medium">{item.position}</h4>
                      <p className="text-gray-600 mb-1">{item.company}</p>
                      <div className="flex items-center text-gray-500 text-sm mb-2">
                        <Calendar className="h-3.5 w-3.5 mr-1" />
                        {item.year}
                      </div>
                      <p className="text-gray-700">{item.description}</p>
                    </motion.div>
                  ))}
                </div>
  
                <motion.h3 className="text-xl font-medium my-8 flex items-center gap-2" variants={itemVariants}>
                  <Briefcase className="h-5 w-5" />
                  Projects
                </motion.h3>
  
                <div className="space-y-8">
                  {projectData.slice(0, 2).map((item, index) => (
                    <motion.div key={index} className="relative pl-8 border-l border-gray-200" variants={itemVariants}>
                      <div className="absolute -left-[5px] top-0 h-2.5 w-2.5 rounded-full bg-gray-400" />
                      <h4 className="text-lg font-medium">{item.position}</h4>
                      <p className="text-gray-600 mb-2">{item.company}</p>
                      <p className="text-gray-700">{item.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
  
            {/* More Projects */}
            <motion.div variants={itemVariants} className="mb-16">
              <h3 className="text-xl font-medium mb-8 flex items-center gap-2 justify-center">
                <Briefcase className="h-5 w-5" />
                More Projects
              </h3>
  
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {projectData.slice(2).map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                  >
                    <h4 className="text-lg font-medium mb-2">{item.position}</h4>
                    <p className="text-gray-600 text-sm mb-3">{item.company}</p>
                    <p className="text-gray-700 text-sm">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
  
            {/* Skills Section */}
            <motion.div variants={itemVariants} className="mb-16">
              <h3 className="text-xl font-medium mb-8 text-center">Technical Skills</h3>
  
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                {softwareSkills.map((skill, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-gray-500">{skill.proficiency}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gray-800 rounded-full"
                        custom={skill.proficiency}
                        variants={skillVariants}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
  
            {/* Design Skills */}
            <motion.div className="mb-16 text-center" variants={itemVariants}>
              <h3 className="text-xl font-medium mb-6">Design Skills</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {designSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="px-4 py-2 bg-white border border-gray-200 rounded-md shadow-sm"
                    whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                    transition={{ duration: 0.2 }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
  
            {/* Languages */}
            <motion.div className="text-center" variants={itemVariants}>
              <h3 className="text-xl font-medium mb-6">Languages</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {languages.map((language, index) => (
                  <motion.div
                    key={index}
                    className="px-6 py-3 bg-white border border-gray-200 rounded-full shadow-sm"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    {language}
                  </motion.div>
                ))}
              </div>
            </motion.div>
  
            {/* Contact Info */}
            <motion.div className="mt-16 text-center" variants={itemVariants}>
              <a
                href="mailto:nehadathapradeep@gmail.com"
                className="inline-flex items-center gap-2 text-gray-700 hover:text-black transition-colors"
              >
                <span>nehadathapradeep@gmail.com</span>
              </a>
              <p className="text-gray-600 mt-1 text-sm">
                Kottapurathu kizhakethil, olakettiyambalam po mavelikara, Alappuzha
              </p>
              <div className="mt-4">
                <a
                  href="https://nehadathapradeep.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 hover:text-black font-medium transition-colors"
                >
                  Portfolio: nehadathapradeep.vercel.app
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    )
  }