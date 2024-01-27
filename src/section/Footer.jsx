import React from "react";
import { footerLinks, socialMedia } from "../constans";
import { copyrightSign } from "../assets/icons";

const Footer = () => {
  return (
    <footer id="contact-us" className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-row items-start">
          <div className="flex items-center gap-5 mt-8 px-6">
            {socialMedia.map((icon) => (
              <div className="flex justify-center w-12 h-12 items-center bg-white rounded-full">
                <img src={icon.src} alt={icon.alt} width={25} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex  flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((section) => (
            <div key={section}>
              <h4 className="text-white font-bold text-2xl mb-6 leading-normal">
                {" "}
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    key={link.name}
                    className="text-white mt-3 hover:text-slate-400"
                  >
                    <a href=""> {link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between text-white mt-24 max-sm:flex-col max-sm:items-center">
        <div className=" flex flex-1 justify-start items-center gap-3">
          <img src={copyrightSign} alt="copy" width={20} />
          <p> Copyright. All rights reserved </p>
        </div>
        <p>Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
