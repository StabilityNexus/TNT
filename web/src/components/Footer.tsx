import {
  faGithub,
  faDiscord,
  faTelegram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import logo from "../images/logo.png";

const contact_links = [
  { href: "https://github.com/StabilityNexus", icon: faGithub },
  { href: "https://discord.gg/YzDKeEfWtS", icon: faDiscord },
  { href: "https://t.me/StabilityNexus", icon: faTelegram },
  { href: "https://x.com/StabilityNexus", icon: faTwitter },
];

export default function Footer() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1">
        {/* Main content goes here */}
        {/* Your page content */}
      </div>
      <footer className="w-full px-24 py-10 space-y-4 bg-[#9deef7] dark:bg-[#08131e] text-black dark:text-white mt-auto">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link
              href="https://stability.nexus/"
              target="_blank"
              className="cursor-pointer"
            >
              <Image
                unoptimized
                fetchPriority="high"
                loading="lazy"
                src={logo}
                alt="Stability Nexus Logo"
                height={50}
                width={50}
              />
            </Link>
          </div>

          {/* Text Section */}
          <div
            className="text-center text-base md:text-lg font-medium"
            style={{ fontFamily: "var(--font-bebas-nueue)" }}
          >
            <span className="mr-1">&copy;</span>
            The Stable Order. All rights reserved.
          </div>

          {/* Social Links Section */}
          <div className="flex items-center space-x-4">
            {contact_links.map(({ href, icon }, index) => (
              <a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl md:text-3xl hover:text-[#6A0DAD] transition-colors duration-200"
              >
                <FontAwesomeIcon icon={icon} />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
