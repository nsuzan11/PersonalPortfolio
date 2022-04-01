import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
<Section id="tech">
  <SectionDivider />
  <br />
  <SectionTitle>Technologies</SectionTitle>
  <SectionText>
    Some of the Technologies that I have used for Front-end, Back-end Designing and other Designing tools are provided below.
  </SectionText>
  <List>

    <ListItem>
      <DiReact size="3rem" />
      <ListContainer>
        <ListTitle>Front-end</ListTitle>
        <ListParagraph>
          Experience with <br />
          React JS, Next JS
        </ListParagraph>
      </ListContainer>
    </ListItem>

    <ListItem>
      <DiFirebase size="3rem" />
      <ListContainer>
        <ListTitle>Back-end</ListTitle>
        <ListParagraph>
          Experience with <br />
          Node JS, Django
        </ListParagraph>
      </ListContainer>
    </ListItem>

    <ListItem>
      <DiZend size="3rem" />
      <ListContainer>
        <ListTitle>UI/UX</ListTitle>
        <ListParagraph>
          Experience with <br />
          Adobe Illustrator, Adobe Photoshop, Vegas pro 18/14, Figma, Canva
        </ListParagraph>
      </ListContainer>
    </ListItem>

  </List>
</Section>
);

export default Technologies;
