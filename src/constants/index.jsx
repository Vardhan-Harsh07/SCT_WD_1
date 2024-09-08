import { Car } from "lucide-react"; // For performance/engine
import { BatteryCharging } from "lucide-react"; // For powertrain and hybrid technology
import { Wind } from "lucide-react"; // For aerodynamics
import { ShieldCheck } from "lucide-react"; // For safety features
import { Sofa } from "lucide-react"; // For luxury interior
import { Wifi } from "lucide-react"; // For connectivity features

export const features = [
  {
    icon: <Car />,
    text: "Performance Engine",
    description: "Experience thrilling speed and power with the McLaren’s twin-turbo V8 engine, delivering up to 700 horsepower.",
  },
  {
    icon: <BatteryCharging />,
    text: "Advanced Powertrain",
    description: "A hybrid-electric powertrain enhances both efficiency and torque, pushing the boundaries of high-performance driving.",
  },
  {
    icon: <Wind />,
    text: "Aerodynamic Design",
    description: "Precision-engineered aerodynamics ensure optimal downforce and minimal drag, allowing for smooth handling at high speeds.",
  },
  {
    icon: <ShieldCheck />,
    text: "Unmatched Safety",
    description: "Equipped with advanced safety systems, including dynamic stability control and reinforced impact protection, ensuring a secure drive.",
  },
  {
    icon: <Sofa />,
    text: "Luxury Interior",
    description: "Immerse yourself in opulence with a fully customizable leather interior, ambient lighting, and a cutting-edge infotainment system.",
  },
  {
    icon: <Wifi />,
    text: "Seamless Connectivity",
    description: "Stay connected with real-time updates, GPS navigation, and 5G-integrated infotainment systems for a modern driving experience.",
  },
];


import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "About Us", href: "/about" },
  { label: "Our Team", href: "/team" },
  { label: "Services", href: "/services" },
  { label: "Vehicles", href: "/vehicles" },
  { label: "Contact Us", href: "/contact" },
];

export const testimonials = [
  {
    user: "John Doe",
    position: "Principal",
    image: user1,  // Use their photo or a placeholder
    text: "Leading this team has been a great honor. Our dedication and collaboration make us stand out.",
  },
  {
    user: "Sarah Miller",
    position: "Vice Principal",
    image: user2,
    text: "Working with such a committed staff and team has made all our projects a success.",
  },
  {
    user: "David Johnson",
    position: "Driver",
    image: user3,
    text: "I take pride in ensuring the safe transport of our team and supporting their daily needs.",
  },
  {
    user: "Emily Davis",
    position: "Support Staff",
    image: user4,
    text: "I love being part of such a dynamic and caring group of professionals. Every day brings new learning opportunities.",
  },
  {
    user: "Michael Brown",
    position: "Driver",
    image: user5,
    text: "It's a privilege to be part of this amazing team, ensuring everyone gets where they need to go safely and on time.",
  },
];


export const checklistItems = [
  {
    title: "Seamless Communication",
    description: "Our team members and drivers are always in sync through our communication channels.",
  },
  {
    title: "Real-Time Vehicle Availability",
    description: "Check vehicle availability in real-time to ensure smooth scheduling and operations.",
  },
  {
    title: "Fuel Efficiency",
    description: "We prioritize fuel efficiency to reduce costs and environmental impact.",
  },
  {
    title: "Punctuality",
    description: "Our drivers and staff work together to ensure timely transport and seamless operations.",
  },
];

export const pricingOptions = [
  {
    title: "Basic Service",
    price: "$50",
    features: [
      "2 Vehicle Rides per Day",
      "Standard Vehicles",
      "Basic Support",
    ],
  },
  {
    title: "Premium Service",
    price: "$100",
    features: [
      "Unlimited Rides",
      "Luxury Vehicles",
      "Priority Support",
    ],
  },
  {
    title: "Enterprise Service",
    price: "$200",
    features: [
      "Customized Fleet Management",
      "Real-Time Vehicle Monitoring",
      "Dedicated Driver and Vehicle",
    ],
  },
];

export const resourcesLinks = [
  { href: "/get-started", text: "Getting Started with Our Services" },
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
