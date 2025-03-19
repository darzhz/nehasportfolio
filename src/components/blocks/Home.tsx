import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { BehanceIcon, DribbbleIcon, InstagramIcon, LinkedinIcon } from "@/components/social-icons"
import { Dribbble, Instagram } from "lucide-react"
import { cn } from "@/lib/utils"
import ShowcaseCard from "../ui/showcase-card"
import ShowcaseCardGrid from "../ui/showcase-card-grid"
import ResumeSection from "./Resume"

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const [, setIsMobile] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      // const sections = ["home", "projects","resume","about", "contact"];

      const homeSection = document.getElementById("home")
      const resumeSection = document.getElementById("resume")
      const aboutSection = document.getElementById("about")
      const projectsSection = document.getElementById("projects")
      const contactSection = document.getElementById("contact")

      const sectionPositions = [
        { id: "home", position: homeSection?.offsetTop || 0 },
        { id: "projects", position: projectsSection?.offsetTop || 0 },
        { id: "resume", position: resumeSection?.offsetTop || 0 },
        { id: "about", position: aboutSection?.offsetTop || 0 },
        { id: "contact", position: contactSection?.offsetTop || 0 },
      ]

      for (let i = sectionPositions.length - 1; i >= 0; i--) {
        if (scrollPosition >= sectionPositions[i].position - 200) {
          setActiveSection(sectionPositions[i].id)
          break
        }
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [window.scrollY])

  // Avatar animation values
  const avatarOpacity = useTransform(scrollYProgress, [0, 0.1, 0.7, 0.8], [1, 0, 0, 1])
  const bottomAvatarOpacity = useTransform(scrollYProgress, [0.6, 0.7], [0, 1])

  const navItems = [
    { id: "home", label: "Home", href: "#home" },
    { id: "projects", label: "Projects", href: "#projects" },
    { id: "resume", label: "Resume", href: "#resume" },
    { id: "about", label: "About", href: "#about" },
    { id: "contact", label: "Contact", href: "#contact" },
  ];

  const Sprite = [
    {
      image: "/sprite_1.png", // Placeholder image 1
      title: "Sprite Concept",
      description: "",
      link: "#", // Replace with your link
    },
    {
      image: "/sprite_2.png", // Placeholder image 2
      title: "Sprite Concept",
      description: "",
      link: "#", // Replace with your link
    },
    {
      image: "/sprite_3.png", // Placeholder image 2
      title: "Sprite Concept",
      description: "",
      link: "#", // Replace with your link
    },
    {
      image: "/sprite_4.png", // Placeholder image 2
      title: "Sprite Concept",
      description: "",
      link: "#", // Replace with your link
    },
  ];
  const camper = [
    {
      image: "/camper1.png", // Placeholder image 1
      title: "CamperQuest",
      description: "",
      link: "#", // Replace with your link
    },
    {
      image: "/camper2.png", // Placeholder image 2
      title: "CamperQuest",
      description: "",
      link: "#", // Replace with your link
    },
    {
      image: "/camper3.png", // Placeholder image 2
      title: "CamperQuest",
      description: "",
      link: "#", // Replace with your link
    },
    {
      image: "/camper4.png", // Placeholder image 2
      title: "CamperQuest",
      description: "",
      link: "#", // Replace with your link
    },
  ];
  const bookStream = [
    {
      image: "/BookStream/1.png", // Placeholder image 1
      title: "Libary",
      description: "",
      link: "#", // Replace with your link
    },
    {
      image: "/BookStream/2.png", // Placeholder image 2
      title: "Fine Tuning",
      description: "",
      link: "#", // Replace with your link
    },
    {
      image: "/BookStream/3.png", // Placeholder image 2
      title: "Video Generation",
      description: "",
      link: "#", // Replace with your link
    },
    {
      image: "/BookStream/4.png", // Placeholder image 2
      title: "Final output",
      description: "",
      link: "#", // Replace with your link
    },
  ];
  const dashboard = [
    {
      image: "/dashboard/overview.png", // Placeholder image 1
      title: "SEO Insites",
      description: "Shows all the seo metrics of the site and sidebar",
      link: "#", // Replace with your link
    },
    {
      image: "/dashboard/overview-1.png", // Placeholder image 2
      title: "Realtime updates",
      description: "Indicates metrics with colorful visualization",
      link: "#", // Replace with your link
    },
    {
      image: "/dashboard/Report.png", // Placeholder image 2
      title: "Course Enrollment Insites",
      description:
        "Indicates all the metrics associated with enrollment and retention rates",
      link: "#", // Replace with your link
    },
    {
      image: "/dashboard/ReportAnalytics-1.png", // Placeholder image 2
      title: "Graphs and Filters",
      description: "Filteration of graphs and simple pastel colors",
      link: "#", // Replace with your link
    },
    {
      image: "/dashboard/UserManagement.png", // Placeholder image 2
      title: "User Management",
      description: "Add and manage users with ease",
      link: "#", // Replace with your link
    },
  ];
  const healthcare = [
    {
      image: "/healthcare/ad1.png",
      title: "Your Health, Your Way!",
      description:
        "Find the right doctor, book appointments effortlessly, and manage your health all in one place!",
      link: "#", // Replace with your link
    },
    {
      image: "/healthcare/ad2.png",
      title: "Expert Care, Just a Tap Away!",
      description:
        "View doctor profiles, check expertise, clinic hours, and book your appointment in seconds.",
      link: "#", // Replace with your link
    },
    {
      image: "/healthcare/ad3.png",
      title: "Stay on Top of Your Health Reports!",
      description:
        "Track and manage your health records effortlessly with our secure medical report storage",
      link: "#", // Replace with your link
    },
    {
      image: "/healthcare/ad4.png",
      title: "Seamless Scheduling for a Healthier You!",
      description:
        "Choose a convenient time slot, confirm your appointment, and never miss a checkup!",
      link: "#", // Replace with your link
    },
    {
      image: "/healthcare/ad5.png",
      title: "UI/UX",
      description:
        "This UI/UX project aims to enhance digital healthcare accessibility, making medical consultations more convenient and efficient for users",
      link: "#", // Replace with your link
    },
  ];

  const transformToShowcaseCardGrid = (data:any[], figmaLink:string, caption:string) => {
    return {
      images: data.map((item:any) => item.image),
      figmaLink,
      caption,
    };
  };
  const healthcareShowcase = transformToShowcaseCardGrid(healthcare,"https://www.figma.com/design/COhAAH7VYbWN9ESPIH0AjB/HealthCare--Neha?node-id=0-1","Healthcare UI/UX Design");
  const dashboardShowcase = transformToShowcaseCardGrid(dashboard,"https://www.figma.com/design/CrbXhRByTHvdxHJSHevinP/Dashboard--Neha","EdTech SEO Dashboard")
  const bookShowcase = transformToShowcaseCardGrid(bookStream,"https://www.figma.com/design/KXZLv5XOQTaUHKvWqQVPDj/BookStream?node-id=51-1269","BookStream");
  const camperShowcase = transformToShowcaseCardGrid(camper,"https://www.figma.com/design/sF7ovqM4uypoMrXbiwCxvp/showcase","CamperQuest");
  const spriteShowcase = transformToShowcaseCardGrid(Sprite,"https://www.figma.com/design/UXTPCnf8lCXkhilzvz0Muz/sprite?node-id=11-272","Sprite Concept App");
  
  return (
    <div ref={containerRef} className="min-h-screen bg-white flex">
      {/* Main Content */}
      <div className="flex-1 ">
        {/* Social Icons */}
        <div className="fixed top-8 left-8 z-50 flex items-center  justify-between gap-6">
          <motion.div style={{ opacity: avatarOpacity}} className="relative">
            <img
              src="/nehu.png"
              alt="Avatar"
              width={48}
              height={48}
              className="rounded-full object-cover"
            />
          </motion.div>

          <div className="hidden md:flex items-center gap-6">
            <a href="https://dribbble.com/nehaspradeep" className="text-gray-700 hover:text-black">
              <DribbbleIcon className="h-6 w-6" />
            </a>
            <a href="https://www.behance.net/nehadatha" className="text-gray-700 hover:text-black">
              <BehanceIcon className="h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com/in/neha-datha-pradeep/" className="text-gray-700 hover:text-black">
              <LinkedinIcon className="h-6 w-6" />
            </a>
            <a href="https://www.instagram.com/neha_s_pradeep/" className="text-gray-700 hover:text-black">
              <InstagramIcon className="h-6 w-6" />
            </a>
          </div>
        </div>
        <div className="flex flex-col w-full justify-center items-center">
          {/* Hero Section */}
          <section id="home" className="pt-32 pb-20 relative max-w-6xl">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center relative">
                <div className="absolute inset-0 -z-10">
                  <div className="grid grid-cols-20 gap-4 opacity-20">
                    {Array.from({ length: 400 }).map((_, i) => (
                      <div
                        key={i}
                        className="w-1 h-1 rounded-full bg-gray-400"
                      ></div>
                    ))}
                  </div>
                </div>

                <h1 className="text-6xl md:text-7xl font-serif mb-8">
                  UI/UX
                  <br />
                  DESIGNER
                </h1>

                <div className="max-w-2xl mx-auto">
                  <h2 className="text-2xl md:text-3xl mb-4">
                    Hello! I'm Neha Datha Pradeep - UI/UX Designer
                  </h2>
                  <p className="text-lg text-gray-700">
                    I create user friendly visually appealing ui/ux designs here
                    is everything that I created
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="py-16 max-w-6xl">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <ShowcaseCard
                 images={[
                  "https://nehadathapradeep.vercel.app/school/Placements.png",
                  "https://nehadathapradeep.vercel.app/school/3.png",
                  "https://nehadathapradeep.vercel.app/school/Trainers.png",
                ]}
                figmaLink="https://www.figma.com/proto/BsCyzM5GYIZxJqnBfyMqYG/Finishing-School-neha?node-id=1-3&t=zGoYbEhg99VkxTdD-1"
                caption="Edtech Webdesign"/>
                <ShowcaseCardGrid {...healthcareShowcase}/>
                <ShowcaseCardGrid {...dashboardShowcase}/>
                <ShowcaseCardGrid {...bookShowcase}/>
                <ShowcaseCardGrid {...spriteShowcase}/>
                <ShowcaseCardGrid {...camperShowcase}/>
              </div>
            </div>
          </section>
          {/* Resume Section */}
          <section id="resume" className="py-16 max-w-6xl">
            <div className="container max-auto px-4">
              <ResumeSection/>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="py-20 max-w-6xl">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row items-center gap-12">
                <motion.div
                  style={{ opacity: bottomAvatarOpacity }}
                  className="relative w-48 h-48 md:w-64 md:h-64 flex-shrink-0"
                >
                  <img
                    src="/nehu.png"
                    alt="Neha Datha Pradeep"
                    width={300}
                    height={300}
                    className="rounded-full object-cover"
                  />
                </motion.div>

                <div>
                  <h3 className="text-2xl font-medium mb-4">A Bit About Me:</h3>
                  <p className="text-gray-700 mb-4">
                    I'm a passionate UI/UX and graphic designer dedicated to
                    crafting visually stunning, user-friendly digital
                    experiences. With a sharp eye for detail and a knack for
                    blending creativity with functionality, I transform ideas
                    into engaging, seamless designs. Let's create something
                    extraordinary together!
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* Footer */}
        <footer id="contact" className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
              <div>
                <h2 className="text-2xl font-bold uppercase mb-2">
                  Neha Datha Pradeep
                </h2>
                <p className="text-gray-600">
                  Crafting delightful and functional digital experiences.
                </p>

                <div className="flex gap-4 mt-4">
                  <a href="https://www.behance.net/nehadatha" className="text-gray-700 hover:text-black">
                    <BehanceIcon className="h-5 w-5" />
                  </a>
                  <a href="https://dribbble.com/nehaspradeep" className="text-gray-700 hover:text-black">
                    <Dribbble className="h-5 w-5" />
                  </a>
                  <a href="https://www.instagram.com/neha_s_pradeep/" className="text-gray-700 hover:text-black">
                    <Instagram className="h-5 w-5" />
                  </a>
                  {/* <a href="#" className="text-gray-700 hover:text-black">
                    <Github className="h-5 w-5" />
                  </a> */}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Contact:</h3>
                <a
                  href="mailto:nehadathapradeep@gmail.com"
                  className="text-gray-700 hover:text-black"
                >
                  nehadathapradeep@gmail.com
                </a>
              </div>
            </div>

            <div className="mt-12 text-center text-sm text-gray-500">
            © 2025. All rights reserved
            </div>
          </div>
        </footer>
      </div>

      {/* Vertical Navigation Sidebar */}
      <nav className="fixed right-0 top-0 h-screen w-[120px] flex flex-col justify-center items-end px-8 z-50">
        <ul className="space-y-4 text-right">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                className={cn(
                  "text-sm tracking-wider transition-all duration-200 hover:text-black",
                  activeSection === item.id
                    ? "font-bold text-black"
                    : "font-normal text-gray-400"
                )}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

