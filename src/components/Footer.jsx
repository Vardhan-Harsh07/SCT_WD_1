import { resourcesLinks, platformLinks, communityLinks, Socials } from "../constants";

const Footer = () => {
  return (
    <footer className="mt-20 border-t py-10 border-neutral-700" id="contact">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20 bg-gradient-to-r from-orange-500 to-orange-800 bg-clip-text text-transparent">
        Stay Connected
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-orange-500 to-orange-800 bg-clip-text text-transparent">Resources</h3>
          <ul className="space-y-2">
            {resourcesLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-neutral-300 hover:text-white"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-orange-500 to-orange-800 bg-clip-text text-transparent">Platform</h3>
          <ul className="space-y-2">
            {platformLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-neutral-300 hover:text-white"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-orange-500 to-orange-800 bg-clip-text text-transparent">Community</h3>
          <ul className="space-y-2">
            {communityLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-neutral-300 hover:text-white"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
        <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-orange-500 to-orange-800 bg-clip-text text-transparent">Socials</h3>
        <ul className="flex flex-col space-y-2 mt-4">
            {Socials.map((social, index) => (
              <li key={index}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-300 hover:text-white flex items-center"
                >
                  {social.icon}  {/* Render social media icon */}
                  <span className="ml-2">{social.text}</span>  {/* Social media text */}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
