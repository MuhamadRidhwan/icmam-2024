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
import Divider from "@mui/material/Divider";

import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
// import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

// Material Kit 2 React components
import MKBox from "components/MKBox";

import MKTypography from "components/MKTypography";

function Home() {
  return (
    // prettier-ignore
    <MKBox component="section" py={3}>
      <Container>
      <MKTypography 
            variant="body3"
            textGradient
            >
                The First International Conference on Marketing and Management (ICMaM2024) provides a platform for researchers, academicians, and industry experts 
                to explore innovations in the fields of marketing and management. The conference aims to foster collaboration and exchange of ideas to address the 
                challenges and opportunities in today&apos;s dynamic business environment.<br/><br/>
                
                Authors are invited to submit papers in the management and marketing areas, but are not limited to the following tracks:

            </MKTypography>
            <Accordion>
              <AccordionSummary
                expandIcon={<ArrowDropDownIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Typography><b>Tracks</b></Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <ol>
                    <li>
                      Human Resource Management
                    </li>
                    <li>
                      Leadership and Organizational Development
                    </li>
                    <li>
                      Strategic Management
                    </li>
                    <li>
                      Entrepreneurship
                    </li>
                    <li>
                      Consumer Behaviour 
                    </li>
                    <li>
                      Accounting. Finance & Economics
                    </li>
                    <li>
                      Business Intelligence
                    </li>
                    <li>
                      Financial Analytics
                    </li>
                    <li>
                      Financial Analytics
                    </li>
                    <li>
                      Digital Transformation
                    </li>
                    <li>
                      Toursim & Hospitality Management
                    </li>
                    <li>
                      Business Management
                    </li>
                    <li>
                      Marketing Management
                    </li>
                    <li>
                      Marketing Analytics
                    </li>
                    <li>
                      Digital Marketing
                    </li>
                    <li>
                      Ethics, and Corporate Social Responsibility
                    </li>
                    <li>
                      ESG & Sustainability
                    </li>
                    <li>
                      AI Marketing
                    </li>
                  </ol>                            
                </Typography>
              </AccordionDetails>
            </Accordion>
        <Grid container item xs={12} lg={9} sx={{ mx: "auto" }}>
          <Grid item xs={12} md={4} display="flex">
            <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, mx: 0 }} />
           
            <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, ml: 0 }} />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Home;
