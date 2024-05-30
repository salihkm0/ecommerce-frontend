import React, { useEffect } from 'react'
import { useRecoilState } from 'recoil';
import { Navbar } from '../components/user/UserNavbar';
import { currentUserState } from '../store/currentUserAttom';
import { BannerContainer, BannerSubContainer, RightSubContainer, StyledContainer, SubBanner } from '../styles/ContainerStyle';

export const HomePage = () => {
  const [currentUser, setCurrentUser] = useRecoilState(currentUserState)
    console.log(currentUser);
  return (
    <>
    <Navbar/>
    <StyledContainer>
      <BannerContainer>
        <BannerSubContainer className='w-full pr-1 flex-1 bg-red grid place-items-center'>
           <p> wdfwegfrfghrtuytuytjhjnghjhgjghj
            ghjghjhjhjhijtyue5wyrthbngkiuo8sw4r4523rtefhgty</p>
        </BannerSubContainer>
        <RightSubContainer>
        <SubBanner>frthgrh</SubBanner>
        <SubBanner>frthgrh</SubBanner>
        <SubBanner>frthgrh</SubBanner>
        <SubBanner>frthgrh</SubBanner>
        </RightSubContainer>
      </BannerContainer>
    </StyledContainer>
    
    
    </>
  )
}
