import Header from "./Header";
import Contact from "./Contact";

export default function HomePage() {
  return (
    <div className="w-full max-h-full flex flex-col   gap-0 justify-center ">
      <Header />

      <div className="p-5 bg-black overflow-y-scroll gap-2 scroll-smooth no-scrollbar">
        <div className="w-full h-[100px] bg-black flex  items-center justify-between text-gray-600  p-8 border-b-2 border-gray-600">
          <h1>Portfolio — 2026</h1>

          <h1>Software Engineering Undergraduate · Full-Stack Developer</h1>
        </div>

        <div className="w-full h-[500px] bg-black flex flex-col  text-gray-600  p-5 border-b-2 border-gray-600 ">
          <h1 className=" flex text-9xl font-bold font-serif text-white p-5 leading-none -mt-3 ">
            Isaac
          </h1>

          <h1 className="text-9xl font-bold font italic font-fantasy text-yellow-400 -mt-15 p-5 leading-none">
            Perera
          </h1>

          <div className="flex flex-row justify-between">
            <span className="p-5">
              Third-year Software Enginner student at the Sri Lanka Institute of
              Information Technology. <br />I build full-stack apps, tinker with
              systems, <br />
              and care deeply about writing clean, purposeful code.
            </span>

            <a
              href="#projects"
              className="p-5 text-2xl font-bold cursor-pointer hover:text-white transition duration-400"
            >
              View My Projects
            </a>
          </div>
        </div>

        <div className="w-full min-h-[600px] bg-black flex flex-col  justify-between text-gray-600  p-8 border-b-2 border-gray-600 ">
          <div className="w-[100%] h-[100px]  flex flex-row  text-gray-600  p-5 justify-between">
            <div className="flex flex-col">
              <span className="text-6xl font-bold font-serif  mb-4 text-amber-300">
                3+
              </span>

              <span>Projects Completed</span>
            </div>

            <div className="flex flex-col">
              <span className="text-6xl font-bold font-serif  mb-4 text-amber-300">
                3rd
              </span>

              <span>Year of Study</span>
            </div>

            <div className="flex flex-col">
              <span className="text-6xl font-bold font-serif  mb-4 text-amber-300">
                Open
              </span>

              <span>to Internships</span>
            </div>
          </div>

          <div
            id="projects"
            className="w-full min-h-[400px] flex flex-col  text-gray-600  p-5 justify-between scroll-mt-24"
          >
            <span className=" text-6xl font-bold font-serif  mb-30 mt-10 text-white ">
              Projects
            </span>
          </div>

          <div className="w-full min-h-[400px] flex flex-col  text-gray-600  p-5 justify-between -mt-75 mb-20">
            <span className=" text-2xl font-bold font-serif  mb-20 mt-10 text-white ml-3">
              Smart Travel Assistance & Management System
            </span>

            <a
              href="https://github.com/isaac035/smart-travel_system.git"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex flex-col md:flex-row gap-8 items-stretch group cursor-pointer"
            >
              <div className="w-full flex flex-col md:flex-row gap-8 items-stretch">
                <div className="w-full flex flex-row">
                  <img
                    src="/one.png"
                    className="w-full h-[500px] -mt-15 shadow-4xl rounded-4xl brightness-50 blur-[0.2px] object-cover transition-transform duration-500 ease-in-out hover:scale-105 "
                  />

                  <span className="w-full h-[400px] text-md font-bold font-serif  -mt-25 text-gray-600 p-12 overflow-y-auto no-scrollbar">
                    Developed a full-stack Smart Travel Assistance & Management
                    System for Sri Lanka using the MERN stack (MongoDB,
                    Express.js, React, Node.js). The platform integrates
                    destination exploration, weather-aware trip planning, hotel
                    booking, travel guide management, tour packages, travel
                    product purchasing, and emergency assistance into a single
                    unified system. Features include real-time weather
                    integration via OpenWeatherMap, interactive map support with
                    Leaflet, Haversine-based location recommendations, JWT
                    authentication with role-based access control, and cloud
                    media management via Cloudinary. Backend tested with Jest
                    (48/49 test cases passed).
                  </span>
                </div>
              </div>
            </a>
          </div>

          <div className="w-full min-h-[400px] flex flex-col  text-gray-600  p-5 justify-between mt-10 ">
            <span className=" text-2xl font-bold font-serif  mb-20 -mt-18 text-white ml-3">
              Restaurant Management System
            </span>

            <a
              href="https://github.com/MalinduPeiris/Restaurant-Managment-System.git"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex flex-col md:flex-row gap-8 items-stretch group cursor-pointer"
            >
              <div className="w-full flex flex-col md:flex-row gap-8 items-stretch">
                <div className="w-full flex flex-row">
                  <img
                    src="/three.png"
                    className="w-full h-[500px] -mt-15 shadow-4xl rounded-4xl brightness-50 blur-[0.2px] object-cover transition-transform duration-500 ease-in-out hover:scale-105 "
                  />

                  <span className="w-full h-[400px] text-md font-bold font-serif  -mt-25 text-gray-600 p-12 overflow-y-auto no-scrollbar">
                    Developed a full-stack Restaurant Management System as a
                    team project at SLIIT, built with React Native (Expo) mobile
                    frontend and Node.js / Express.js backend connected to
                    MongoDB. The system integrates dish management, room and
                    amenity booking, table reservations, order processing,
                    payment proof upload and refund handling, delivery tracking
                    with rider assignment, customer feedback, and dish reviews
                    into a single unified platform. Role-based access control is
                    implemented for three user types — Customer, Admin, and
                    Delivery Rider — secured with JWT authentication and
                    protected REST APIs. Media uploads are handled via
                    Cloudinary. An admin dashboard provides full control over
                    users, orders, bookings, payments, deliveries, and system
                    operations.
                  </span>
                </div>
              </div>
            </a>
          </div>
        </div>

        <div className="w-full min-h-[700px] bg-black flex flex-row md:flex-row items-start gap-8 text-gray-600 p-8 border-b-2 border-gray-600">
          <div
            id="about"
            className="w-full md:w-1/2 flex flex-col text-gray-600 p-5 gap-6 scroll-mt-24"
          >
            <span className="text-6xl font-bold font-serif text-white mb-4">
              About
            </span>

            <div className="flex flex-col sm:flex-col gap-6">
              <span className="w-full sm:w-1/2 text-md font-bold font-serif text-gray-600 text-5xl">
                "I write code to solve real problems — not to impress, but to
                ship things that actually work."
              </span>
              <span className="w-full sm:w-1/2 text-md mt-8 font-bold font-serif text-gray-600">
                My goal is to contribute to impactful projects that enhance user
                experiences and drive technological advancement. I am open to
                internships and collaborative opportunities where I can apply my
                skills, gain practical experience, and continue to grow as a
                software developer. Let's connect and explore how we can work
                together to create meaningful software solutions.
              </span>
            </div>
            <div className="flex flex-row sm:flex-row gap-30 mt-10">
            <div className="flex flex-col sm:flex-col gap-1 mt-10">
            <div className="flex flex-col gap-1 mt-4">
                <span className="text-md font-bold font-serif text-gray-600 mt-1.5">
                    Sri Lanka
                </span>
                    
                <span className="text-md font-bold font-serif text-white">
                    Colombo
                </span>
            </div>
            <div className="flex flex-col gap-1 mt-4">
                <span className="text-md font-bold font-serif text-gray-600 mt-1.5">
                    Focus Areas
                </span>
                    
                <span className="text-md font-bold font-serif text-white  ">
                    Backend / Full-Stack
                </span>
            </div>
            </div>
             <div className="flex flex-col sm:flex-col gap-1 mt-10">
            <div className="flex flex-col gap-1 mt-4">
                <span className="text-md font-bold font-serif text-gray-600 mt-1.5">
                    Seeking Internship
                </span>
                    
                <span className="text-md font-bold font-serif text-white">
                    Summer 2026
                </span>
            </div>
            <div className="flex flex-col gap-1 mt-4">
                <span className="text-md font-bold font-serif text-gray-600 mt-1.5">
                    GPA
                </span>
                    
                <span className="text-md font-bold font-serif text-white  ">
                    3.2 / 4.0
                </span>
            </div>
            </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <img
              src="/five.jpg"
              className="w-full max-w-[500px] h-[700px] mr-25 mt-25 object-cover rounded-4xl shadow-4xl brightness-50 blur-[0.2px] transition-transform duration-500 ease-in-out hover:scale-105"
            />
          </div>
        </div>

        <div className="w-full min-h-[400px] bg-black flex flex-col md:flex-col items-start gap-8 text-gray-600 p-8 border-b-2 border-gray-600">

            <div className="w-full md:w-1/2 ">
            <span id="skills" className="text-6xl font-bold font-serif text-white mb-10 scroll-mt-24 block">
                Skills
            </span>

            </div>
            <div className="w-full  flex flex-row md:flex-row justify-between p-5 gap-150">
            <div className="w-full md:w-1/3 flex flex-col ">

            <span className="text-3xl text-amber-300 font-serif mb-4">
                Languages
            </span>
            <span className="text-2xl text-gray-700 hover:text-white  cursor-default">
                Python
            </span>
            <span className="text-2xl text-gray-700 hover:text-white cursor-default">
                JavScript
            </span>
            <span className="text-2xl text-gray-700 hover:text-white cursor-default">
                Java
            </span>
            <span className="text-2xl text-gray-700 hover:text-white cursor-default">
                SQL
            </span>
            </div>

            <div className="w-full md:w-1/3 flex flex-col ">
            <span className="text-3xl text-amber-300 font-serif mb-4">
                Frontend
            </span>
            <span className="text-2xl text-gray-700 hover:text-white  cursor-default">
                React
            </span>
            <span className="text-2xl text-gray-700 hover:text-white cursor-default">
                React Native
            </span>
            <span className="text-2xl text-gray-700 hover:text-white cursor-default">
                Tailwind CSS
            </span>
            <span className="text-2xl text-gray-700 hover:text-white cursor-default">
                Vite
            </span>

            </div>

            <div className="w-full md:w-1/3 flex flex-col ">

            <span className="text-3xl text-amber-300 font-serif mb-4">
                Backend
            </span>
            <span className="text-2xl text-gray-700 hover:text-white  cursor-default">
                Node.js
            </span>
            <span className="text-2xl text-gray-700 hover:text-white cursor-default">
                PostgreSQL
            </span>
            <span className="text-2xl text-gray-700 hover:text-white cursor-default">
                Docker
            </span>
            <span className="text-2xl text-gray-700 hover:text-white cursor-default">
                Express.js
            </span>
            </div>
            </div>
            <div className="w-full flex flex-col md:flex-col">
            <span className="text-3xl text-gray-700 mb-10 mt-4 ">
                Relevant Coursework & Experience
            </span>
            <div className="w-full  flex flex-col md:flex-row justify-between gap-10 p-4 group cursor-default">
            <span className="text-2xl text-gray-700 w-full md:w-1/3 group-hover:text-amber-300 mr-10">
                Sri Lanka Institute of Information Technology                                                             
            </span>
            <span className="text-lg text-gray-700 w-full md:w-1/3 md:text-center group-hover:text-amber-300">
                BSc (Hons) in Software Engineering
            </span>
            <span className="text-lg text-gray-700 w-full md:w-1/3 md:text-right mr-20 group-hover:text-amber-300">
               July 2024 - Present
            </span>

            </div>
            </div>

        </div>

        <Contact />
      </div>
    </div>
  );
}
