import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
 <Section row nopadding>
   <LeftSection>
     <SectionTitle main center>
        Welcome to<br />
        Himal's Portfolio
     </SectionTitle>
     <SectionText>
        Web developer | Web Designer | Video Editor | Graphics Designer
     </SectionText>
     <Button onClick ={() =>window.location ='https://github.com/nsuzan11'}>
       Learn More
     </Button>
   </LeftSection>
 </Section>
);

export default Hero;