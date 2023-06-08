import styled from "@emotion/styled";
import breakPoints from "../../../config/breackPoints";
import theme from '../../../config/theme';
import config from '../../../config/environment';



export const MainFooterStyled = styled.section`
    position: absolute;
    left: 7%;
    bottom: 8%;
    width: 40%;
    min-height: 15vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #E5E5E4;
    @media only screen and ${breakPoints.device.lg} {
      position: absolute;
      width: 90%;
      margin: 0% 0%;
      bottom: 16%;
      left: 6%;
      min-height: 13vh;
     }
  }
`;