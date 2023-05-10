import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id="projects">
    <sectionDivider />
    <SectionTitle main>
        Projects
    </SectionTitle>
    <GridContainer>
      {projects.map(({id,image,title,description,tags,source,visit}) =>(
       <BlogCard key={id}>
         <div style={{width:"100%", height:"30%"}}><Img src={image} /></div>
         <TitleContent>
           <HeaderThree title>{title}</HeaderThree>
           <Hr />
         </TitleContent>
         <CardInfo>{description}</CardInfo>
         <div>
           <TagList>
              {tags.map((tag, i)=> (
                <Tag key={i}>{tag}</Tag>
              ))}
           </TagList>
         </div>
         <UtilityList>
           {/* <ExternalLinks href={visit}>
                Code
           </ExternalLinks> */}
         </UtilityList>
       </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;
