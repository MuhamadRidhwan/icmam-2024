/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
// import DefaultCounterCard from "examples/Cards/CounterCards/DefaultCounterCard";
import MKTypography from "components/MKTypography";
import Slider from "react-infinite-logo-slider";

import unitarLogo from "assets/images/logos/unitar-logo.png";
import arshadAyubLogo from "assets/images/logos/arshad-ayub-logo.png";
import dosmLogo from "assets/images/logos/dosm-logo.png";
import unomLogo from "assets/images/logos/unom-logo.png";
import microsoftLogo from "assets/images/logos/microsoft-logo.png";
import talentCorpLogo from "assets/images/logos/talent-corp-logo.png";
import bharathLogo from "assets/images/logos/bharath-logo.png";
import ubayaLogo from "assets/images/logos/ubaya-logo.png";
import bSchoolLogo from "assets/images/logos/b-school-logo.png";
import sichuanLogo from "assets/images/logos/sichuan-logo.png";
import trisaktiLogo from "assets/images/logos/trisakti-logo.png";

function Collaborator() {
  return (
    // prettier-ignore
    <MKBox component="section" py={3}>
      <Container>
        <Grid container item xs={12} lg={9} sx={{ mx: "auto" }}>   
          <Grid item xs={12} md={4}>
            {/* <DefaultCounterCard
              count={50}
              suffix="+"
              title="Coded Elements"
              description="From buttons, to inputs, navbars, alerts or cards, you are covered"
            /> */}
          </Grid>
          <MKTypography 
        variant="h2"
        textGradient
        >
            In Collaboration with
        </MKTypography>
        </Grid>
        <Slider
            width="350px"
            duration={25}
            pauseOnHover={true}
            blurBorders={false}
            blurBoderColor={'#fff'}
        >
           
            <Slider.Slide>
                <img src={unitarLogo} alt="any2" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <img src={arshadAyubLogo} alt="any2" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <img src={dosmLogo} alt="any3" className='w-36' />
            </Slider.Slide>     
            <Slider.Slide>
                <img src={unomLogo} alt="any3" className='w-36' />
            </Slider.Slide>       
            <Slider.Slide>
                <img src={microsoftLogo} alt="any3" className='w-36' />
            </Slider.Slide>    
            <Slider.Slide>
                <img src={talentCorpLogo} alt="any3" className='w-36' />
            </Slider.Slide>      
            <Slider.Slide>
                <img src={bharathLogo} alt="any3" className='w-36' />
            </Slider.Slide>       
            <Slider.Slide>
                <img src={ubayaLogo} alt="any3" className='w-36' />
            </Slider.Slide>       
            <Slider.Slide>
                <img src={bSchoolLogo} alt="any3" className='w-36' />
            </Slider.Slide>      
            <Slider.Slide>
                <img src={sichuanLogo} alt="any3" className='w-36' />
            </Slider.Slide>      
            <Slider.Slide>
                <img src={trisaktiLogo} alt="any3" className='w-36' />
            </Slider.Slide>       
        </Slider>
      </Container>
    </MKBox>
  );
}

export default Collaborator;
