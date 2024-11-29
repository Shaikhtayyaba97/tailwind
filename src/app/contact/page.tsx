import { FaFacebook, FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';

export default function SocialLinks() {
  const socialLinks = [
    { name: 'Facebook', url: 'https://facebook.com/your-profile', icon: <FaFacebook /> },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/your-profile', icon: <FaLinkedin /> },
    { name: 'GitHub', url: 'https://github.com/your-profile', icon: <FaGithub /> },
    { 
      name: 'WhatsApp', 
      url: 'https://wa.me/+923153066596', // WhatsApp link using international format
      icon: <FaWhatsapp /> 
    },
  ];

  return (
    <section className="p-6 bg-gray-100">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">Connect with Me</h2>
      <ul className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
        {socialLinks.map((link, idx) => (
          <li key={idx} className="flex items-center space-x-2">
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline flex items-center text-lg md:text-xl"
            >
              {link.icon} <span className="ml-2">{link.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}