import styled from "@emotion/styled";
import breakPoints from "../../../config/breackPoints";
import theme from '../../../config/theme';
import config from '../../../config/environment';



export const ContentLayoutStyled = styled.section`
	display: flex;
	flex-direction: column;
	width: 100%;
	min-height: 100vh;
	justify-content: space-between;
	@media only screen and ${breakPoints.device.lg} {
		overflow: hidden;
    width: 100%;
	min-height: 80vh;
        
  }
`;

export const FormLayoutStyled = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 40%;
	min-height: 55vh;
	padding: 20px 0;
	margin: 0 auto;
    position: absolute;
    top: 20%;
    left: 7%;
    background-color: red;
    @media only screen and ${breakPoints.device.lg} {
        position: absolute;
		width: 90%;
		top: 15%;
		left: 6%;
    }
`;

export const BannerLayoutStyled = styled.section`
	display: flex;
	flex-direction: column;
	width: 40%;
	min-height: 100vh;
	justify-content: center;
	align-items: center;
    position: absolute;
    right: 0%;
	background-color: #FCFCD1;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    margin-top: 3%;
	@media only screen and ${breakPoints.device.lg} {
	 display:none
  }
`;

export const BannerMovilLayoutStyled = styled.section`
	
	@media only screen and ${breakPoints.device.lg} {
	 position:absolute;
	 bottom: 0%;
	 width: 100%;
	 background-color: aqua;
	 min-height: 12vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;