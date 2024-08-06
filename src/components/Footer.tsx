import phone from "../assets/phone.png";
import gmail from "../assets/gmail.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import leetcode from "../assets/leetcode.png";

function Footer() {
  const links = [
    { path: "tel:+91 8178168353", icon: phone },
    { path: "mailto:pandeyamit01092002@gmail.com", icon: gmail },
    {
      path: "https://www.linkedin.com/in/amit-kumar-a9030b293/",
      icon: linkedin
    },
    { path: "https://github.com/kumarAmit0109", icon: github },
    { path: "https://leetcode.com/u/kumar__01/", icon: leetcode },
  ];
  return (
    <div className=" relative z-20 w-11/12 max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3 py-8">
      {/* <div className="text-lg tracking-wider ">Amit Kumar</div> */}
      <div className="flex items-center mx-auto  gap-5">
        {links.map((link, index) => (
          <a key={index} href={link.path}>
            <img src={link.icon} className="w-8 rounded" />
          </a>
        ))}
      </div>
    </div>
  );
}

export default Footer;
