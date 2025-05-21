import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa';
import logo from "../assets/SooD.png"

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-10 py-10">
      <div className="text-xl font-bold">
        <img className='mx-10 w-10' src={logo} alt="LOGO"/>
      </div>

      <div className="flex gap-4">
        <HoverIcon
          href="https://www.linkedin.com/in/swayam-sood-b76855252/"
          icon={<FaLinkedin />}
          text="LinkedIn"
          bgColor="bg-blue-600"
        />
        <HoverIcon
          href="https://github.com/SwayamS112"
          icon={<FaGithub />}
          text="GitHub"
          bgColor="bg-gray-800"
        />
        <HoverIcon
          href="https://www.instagram.com/swayam_sood__/"
          icon={<FaInstagram />}
          text="Instagram"
          bgColor="bg-pink-500"
        />
        <HoverIcon
          href="mailto:soodswayam41@gmail.com"
          icon={<FaEnvelope />}
          text="Email"
          bgColor="bg-red-500"
        />
      </div>
    </nav>
  );
};

const HoverIcon = ({ href, icon, text, bgColor }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex items-center overflow-hidden rounded-full px-3 py-2 text-white transition-all duration-300 hover:w-36 w-12 ${bgColor}`}
    >
      <span className="text-xl">{icon}</span>
      <span className="ml-2 hidden group-hover:inline text-sm">{text}</span>
    </a>
  );
};

export default Navbar;
