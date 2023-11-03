import Section from '../Section';

import { footerDisclaimer, sitesLinks, socialMedia } from '@/data';

const Footer = () => {
  return (
    <Section
      fullViewport={true}
      centerContent={false}
      extraClasses="bg-footer-image bg-[right_60rem_top] bg-cover md:bg-center bg-opacity-10"
    >
      <div className="container h-screen flex flex-col justify-end text-black py-20">
        {/* Links */}
        <div className="flex flex-col gap-10 text-xl">
          <ul className="flex flex-col gap-4">
            {sitesLinks.map((link) => (
              <li key={link.url}>
                <a href={link.url} target="_blank">
                  {link.text}
                </a>
              </li>
            ))}
          </ul>

          <ul className="flex items-center gap-5">
            {socialMedia.map((social) => (
              <li key={social.url}>
                <a href={social.url} target="_blank">
                  <i>
                    <img src={social.icon} />
                  </i>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Disclaimers */}
        <div className='mt-20 md:mt-40'>
            <p className='text-sm'>{footerDisclaimer}</p>
        </div>
      </div>
    </Section>
  );
};

export default Footer;
