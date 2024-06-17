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

// Sections components
import BaseLayout from "layouts/sections/components/BaseLayout";
// import View from "layouts/sections/components/View";

// Typography page components
// import TypographyRoboto from "layouts/sections/elements/index-committee";

// Typography page components code
// import typographyRobotoCode from "layouts/sections/elements/typography/components/TypographyRoboto/code";

import * as React from "react";
import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

// Images
import bgImage from "assets/images/unitar-bg.jpg";

function AboutUs() {
  return (
    // prettier-ignore
    <BaseLayout
    //   title="AboutUs"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/elements/AboutUs" },
        { label: "AboutUs" },
      ]}
    >
      {/* <View code={typographyRobotoCode}>
        <TypographyRoboto />
      </View> */}

<Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="unitar background"
        height="auto"
        image={bgImage}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Contact Us
        </Typography>
        <Typography variant="body2" color="text.first">
        icmam@unitar.my<br/>
        Dr Abdullah Bawazir (011-61626680 )
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>

    </BaseLayout>
  );
}

export default AboutUs;
