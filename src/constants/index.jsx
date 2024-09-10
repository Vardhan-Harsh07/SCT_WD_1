import { Car, BatteryCharging, Wind, ShieldCheck, Rocket, Cpu } from "lucide-react";

export const features = [
  {
    icon: <Car />,
    text: "High-Performance Engine",
    description: "The car features a high-revving turbocharged V6 engine designed for maximum power and speed, pushing the limits of performance on the track.",
  },
  {
    icon: <BatteryCharging />,
    text: "Hybrid Power Unit",
    description: "An advanced hybrid power unit combines a turbocharged engine with an energy recovery system to optimize performance and fuel efficiency during races.",
  },
  {
    icon: <Wind />,
    text: "Advanced Aerodynamics",
    description: "State-of-the-art aerodynamic design includes adjustable front and rear wings, and a sophisticated floor to maximize downforce and reduce drag.",
  },
  {
    icon: <ShieldCheck />,
    text: "Robust Safety Systems",
    description: "Equipped with the latest safety features, including a reinforced monocoque and advanced crash structures, ensuring driver protection in high-speed conditions.",
  },
  {
    icon: <Rocket />,
    text: "Exceptional Acceleration",
    description: "Engineered for rapid acceleration, the car achieves 0-60 mph in under 2.5 seconds, delivering explosive speed on straightaways and corners.",
  },
  {
    icon: <Cpu />,
    text: "Track-Optimized Technology",
    description: "Incorporates advanced telemetry systems and real-time data analysis to monitor and adjust performance parameters for each specific track condition.",
  },
];



import lando from "../assets/profile-pictures/lando.jpg";
import oscar from "../assets/profile-pictures/oscar.jpg";
import andrea from "../assets/profile-pictures/andrea.jpeg";
import laura from "../assets/profile-pictures/laura.jpeg";
import steve from "../assets/profile-pictures/steve.jpeg";
import zak from "../assets/profile-pictures/zak.jpeg";

export const navItems = [
  { label: "About Us", href: "#hero" },            // Scrolls to the hero section
  { label: "Vehicle Performance", href: "#performance" }, // Scrolls to the performance section
  { label: "Livery Design", href: "#livery" },     // Scrolls to the livery section
  { label: "Our Team", href: "#team" },            // Scrolls to the team section
  { label: "Contact Us", href: "#contact" },       // Scrolls to the contact section
];
   // Contact information for inquiries and support.
  // { label: "Footer", href: "/footer" },           // Additional links and information available in the footer.
 

export const testimonials = [
  {
    user: "Lando Norris",
    position: "Driver",
    image: lando,  // Use their photo or a placeholder
    text: "As one of the drivers, I represent the team's hard work and dedication on the track. It’s an incredible experience to push the limits and showcase what we can achieve together.",
  },
  {
    user: "Oscar Piastri",
    position: "Driver",
    image: oscar,
    text: "Driving for this team has been an exhilarating journey. Our collective passion and commitment fuel our success, both on and off the racetrack.",
  },
  {
    user: "Zak Brown",
    position: "Chief Executive Officer",
    image: zak,
    text: "As CEO, my goal is to steer the team towards long-term success, fostering a culture of innovation and excellence in everything we do.",
  },
  {
    user: "Andrea Stella",
    position: "Team Principal",
    image: andrea,
    text: "As Team Principal, I manage all aspects of our performance, ensuring that our team is prepared, motivated, and always pushing for the best results on the grid.",
  },
  {
    user: "Laura Bowden",
    position: "Chief Financial Officer",
    image: laura,
    text: "As CFO, I ensure that our financial strategies are aligned with our vision, supporting the team's operations and ambitions to stay competitive on all fronts.",
  },
  {
    user: "Steve Atkins",
    position: "Chief Communications Officer",
    image: steve,
    text: "My role as Chief Communications Officer is to make sure our team's message is clear, inspiring, and reaches every corner of the motorsport world.",
  }
];


export const checklistItems = [
  {
    title: "Innovative Design Elements",
    description: "Incorporate cutting-edge graphics and patterns to create a striking and unique livery that captures attention on the track.",
  },
  {
    title: "Brand Identity Integration",
    description: "Seamlessly integrate sponsor logos and team branding to maintain a cohesive and professional appearance.",
  },
  {
    title: "Aerodynamic Aesthetics",
    description: "Design with aerodynamics in mind to ensure the livery complements the car's performance and enhances its visual appeal.",
  },
  {
    title: "High-Quality Finishes",
    description: "Utilize premium materials and finishes to ensure the livery looks exceptional from all angles and withstands the rigors of racing.",
  },
];


// export const pricingOptions = [
//   {
//     title: "Basic Service",
//     price: "$50",
//     features: [
//       "2 Vehicle Rides per Day",
//       "Standard Vehicles",
//       "Basic Support",
//     ],
//   },
//   {
//     title: "Premium Service",
//     price: "$100",
//     features: [
//       "Unlimited Rides",
//       "Luxury Vehicles",
//       "Priority Support",
//     ],
//   },
//   {
//     title: "Enterprise Service",
//     price: "$200",
//     features: [
//       "Customized Fleet Management",
//       "Real-Time Vehicle Monitoring",
//       "Dedicated Driver and Vehicle",
//     ],
//   },
// ];

export const resourcesLinks = [
  { href: "/get-started", text: "Our Services" },
  { href: "/drivers", text: "Meet Our Drivers" },
  { href: "/safety", text: "Safety Standards" },
  { href: "/support", text: "Contact Support" },
];

export const platformLinks = [
  { href: "/vehicles", text: "Our Fleet" },
  { href: "/scheduling", text: "Scheduling System" },
  { href: "/safety", text: "Safety Features" },
  { href: "/maintenance", text: "Maintenance Guidelines" },
];

export const communityLinks = [
  { href: "/events", text: "Upcoming Events" },
  { href: "/team-meetups", text: "Team Meetups" },
  { href: "/driver-conferences", text: "Driver Conferences" },
  { href: "/join-team", text: "Join Our Team" },
];
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export const Socials = [
  { 
    href: "https://www.instagram.com", 
    text: "Instagram", 
    icon: <FaInstagram /> 
  },
  { 
    href: "https://www.facebook.com", 
    text: "Facebook", 
    icon: <FaFacebook /> 
  },
  { 
    href: "https://www.linkedin.com", 
    text: "LinkedIn", 
    icon: <FaLinkedin /> 
  },
  { 
    href: "https://www.twitter.com", 
    text: "Twitter", 
    icon: <FaTwitter /> 
  }
];
