import aboutmeicon from "../assets/aboutpageicon.png";

function About() {
  const aboutme = [
    `👨‍💻 Hi, I'm <b>Amit Kumar</b>, a passionate and skilled <b>Full Stack Developer</b> based in <b>Delhi</b>, <b>India</b>. I'm currently in my <b>final year</b> of pursuing a <b>Bachelor of Technology</b> in <b>Information Technology</b> at <b>Maharaja Surajmal Institute of Technology</b>, where I have maintained an impressive <b>CGPA</b> of <b>8.87</b>. My education has provided me with a strong foundation in core computer science subjects such as Data Structures and Algorithms, Operating Systems, Database Management Systems, and Computer Networks.`,
    "💻 I am proficient in a variety of programming languages, including C++, JavaScript, and TypeScript. I have honed my frontend development skills using HTML, CSS, Tailwind CSS, ShadCN, and React.js, while my backend expertise encompasses Node.js, Express.js, MongoDB, and Mongoose. My technical repertoire also includes version control and deployment tools like Git, GitHub, Vercel, and Render, along with API testing using Postman.",
    "🎓 My educational journey began at <b>Rajkiya Pratibha Vikas Vidyalaya</b> in <b>Delhi</b>, where I excelled in my academics, achieving <b>81.3%</b> in my <b>Senior Secondary Examination</b> and <b>91.2%</b> in my <b>Secondary Examination</b>. This strong academic background laid a solid foundation for my technical education and professional development.",
    "📈 Throughout my academic journey, I have demonstrated my technical prowess and creativity by developing several full-stack applications. My projects showcase my ability to create dynamic, responsive, and user-friendly web applications. Although the details of these projects are extensive, they highlight my commitment to delivering high-quality solutions and my capability to manage both frontend and backend development seamlessly.",
    "🚀 My dedication to continuous learning and innovation drives me to stay updated with the latest industry trends. This curiosity and eagerness to expand my knowledge make me a valuable asset in the tech community.",
    "🤝 I am actively seeking internships and full-time roles in software development. I am excited about the opportunity to further hone my skills and contribute to impactful projects. I am eager to collaborate with like-minded professionals and make meaningful contributions to the tech industry. My proactive approach, combined with my technical expertise, makes me a promising candidate for any development team.",
  ];
  return (
    <div className="w-11/12 max-w-7xl mx-auto py-6 mt-28 flex flex-col items-center ">
      <div className="flex items-center gap-x-3 mx-auto">
        <img src={aboutmeicon} className="w-9" />
        <div className="text-3xl sm:text-4xl font-bold text-center tracking-wider bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500 dark:bg-gradient-to-l dark:from-blue-300 dark:to-teal-200 text-transparent">
          About me
        </div>
      </div>

      <div className="flex flex-col gap-y-3 pt-4 ">
        {aboutme.map((value, index) => (
          <p
            key={index}
            dangerouslySetInnerHTML={{ __html: value }}
            className="text-center   text-lg tracking-wide bg-card/70 border rounded-xl shadow p-4 sm:p-6"
          />
        ))}
      </div>
    </div>
  );
}

export default About;
