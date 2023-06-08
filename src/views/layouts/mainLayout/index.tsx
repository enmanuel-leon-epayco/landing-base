import React from "react";
import { FormLayoutStyled, ContentLayoutStyled, BannerLayoutStyled, BannerMovilLayoutStyled } from "./style";
import MainHeader  from '../header';
import MainFooter from "../footer";



export const MainLayout = () => {
    return(
    
             <ContentLayoutStyled>
                <MainHeader />
                <FormLayoutStyled><h1>Formularios</h1></FormLayoutStyled> 
                <BannerLayoutStyled>Banners</BannerLayoutStyled>
                <BannerMovilLayoutStyled>Banners movil</BannerMovilLayoutStyled>
                <MainFooter />
            </ContentLayoutStyled>
       
    )
}