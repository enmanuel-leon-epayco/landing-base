import styled from "@emotion/styled";
import breakPoints from "../../../config/breackPoints";
import theme from '../../../config/theme';
import config from '../../../config/environment';



export const MainHeaderStyled = styled.section`
    position: absolute;
    left: 7%;
    top: 3%;
    background-color: #E5E5E4;
    width: 40%;
    min-height: 15vh;
    display: flex;
    align-items: center;
    justify-content: center;
    @media only screen and ${breakPoints.device.lg} {
      position: absolute;
      width: 90%;
      top: 1%;
      left: 6%;
      min-height: 13vh;
      
  }
  }
`;