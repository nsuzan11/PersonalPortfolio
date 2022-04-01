import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import Clock from 'react-live-clock';
import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

// const date =`${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
const Footer = () => {
  return (
   <FooterWrapper>
     <LinkList>
      <LinkColumn>
        <LinkTitle>Call</LinkTitle>
        <LinkItem href="tel:+977-9843806272">+977-9843806272</LinkItem>
      </LinkColumn>
      <LinkColumn>
        <LinkTitle>Email</LinkTitle>
        <LinkItem href="mailto:suzanneupane60@gmail.com">suzanneupane60@gmail.com</LinkItem>
      </LinkColumn>
     </LinkList>
     <LinkColumn>
        <LinkTitle>Date</LinkTitle>
        <LinkItem>{<Clock format={'h:mm:ssa'}/>}</LinkItem>
      </LinkColumn>
     <SocialIconsContainer>
       <CompanyContainer>
         <Slogan>Learning and experiencing new jobs</Slogan>
       </CompanyContainer>
       <SocialContainer>
       <SocialIcons href="https://github.com/nsuzan11">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/himal-neupane-5014031b9/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://instagram.com/himal_11">
        <AiFillInstagram size="3rem" />
      </SocialIcons>
      </SocialContainer>
     </SocialIconsContainer>
   </FooterWrapper>
  );
};

export default Footer;
