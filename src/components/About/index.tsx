import TextWithImage from './TextWithImage';

import { aboutTim, aboutFoundation } from '@/data';

const About = () => {
  return (
    <>
      <TextWithImage position={'left'} content={aboutTim} />
      <TextWithImage position={'right'} content={aboutFoundation} />
    </>
  );
};

export default About;
