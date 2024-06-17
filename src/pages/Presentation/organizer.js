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

import { CContainer, CRow, CCol, CImage } from "@coreui/react";

// Images
import unitarLogo from "assets/images/logos/unitar-logo.png";
import arshadAyubLogo from "assets/images/logos/arshad-ayub-logo.png";
import dosmLogo from "assets/images/logos/dosm-logo.png";

function Organizer() {
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
            Organized by
        </MKTypography>
        </Grid>

        <CContainer>
            <CRow className="align-items-center">
                <CCol sm="auto"><CImage fluid src={unitarLogo} alt="any" /></CCol>
                <CCol sm="auto"><CImage fluid src={arshadAyubLogo} alt="any2" /></CCol>
                <CCol sm="auto"><CImage fluid src={dosmLogo} alt="any3" /></CCol>
            </CRow>
        </CContainer>
        
        {/* <img src={unitarLogo} alt="any" />
        <img src={arshadAyubLogo} alt="any2" />
        <img src={dosmLogo} alt="any3" className='w-36' /> */}
                  
      </Container>
    </MKBox>
  );
}

export default Organizer;
