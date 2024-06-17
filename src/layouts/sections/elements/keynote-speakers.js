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

import * as React from "react";
// prettier-ignore
import { CardGroup, CardBody, CardTitle, CardSubtitle, /*CardText, Button,*/ Card, CardImg } from "reactstrap";

// Images
import speaker1 from "assets/images/keynote-speakers/sahol-hamid.jpg";
import speaker2 from "assets/images/keynote-speakers/joseph-hair.jpg";
import speaker3 from "assets/images/Devi-Premnath-2.png";
import speaker4 from "assets/images/keynote-speakers/jo-ann.jpg";
import speaker5 from "assets/images/keynote-speakers/piyush-sharma.jpg";
import speaker6 from "assets/images/keynote-speakers/nurul-indarti.jpg";
import speaker7 from "assets/images/keynote-speakers/norlia-ahmad.jpg";
import speaker8 from "assets/images/keynote-speakers/jasmine-begum.jpg";
import speaker9 from "assets/images/Hajah-Mahuran-Saro-Dato-Haji-Sariki.png";

// import ImageList from "@mui/material/ImageList";
// import ImageListItem from "@mui/material/ImageListItem";

// import { experimentalStyled as styled } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import Paper from "@mui/material/Paper";
// import Grid from "@mui/material/Grid";

// Typography page components code
// import typographyRobotoCode from "layouts/sections/elements/typography/components/TypographyRoboto/code";

// prettier-ignore
// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(2),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   }));

// prettier-ignore
// const itemData = [
//     {
//       img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
//       title: 'Breakfast',
//     },
//     {
//       img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
//       title: 'Burger',
//     },
//     {
//       img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
//       title: 'Camera',
//     },
//     {
//       img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
//       title: 'Coffee',
//     },
//   ];

function KeynoteSpeakers() {
  return (
    // prettier-ignore
    <BaseLayout
      title="KeynoteSpeakers"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/elements/Keynote-Speakers" },
        { label: "Keynote-Speakers" },
      ]}
    >
    <CardGroup>
        <Card>
            <CardImg
            alt="Card image cap"
            src={speaker1}
            top
            width="100%"
            />
            <CardBody>
            <CardTitle tag="h5">
                Professor Emeritus Tan Sri Dato&apos; Sri Ir Dr Sahol Hamid Bin Abu Bakar
            </CardTitle>
            <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
            >
                Vice-Chancellor, UNITAR
            </CardSubtitle>
            {/* <CardText>
                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
            </CardText> */}
            {/* <Button>
                Button
            </Button> */}
            </CardBody>
        </Card>
        <Card>
            <CardImg
            alt="Card image cap"
            src={speaker2}
            top
            width="100%"
            />
            <CardBody>
            <CardTitle tag="h5">
                Prof. Joseph F. Hair 
            </CardTitle>
            <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
            >
                University of South Alabama, USA
            </CardSubtitle>
            {/* <CardText>
                This card has supporting text below as a natural lead-in to additional content.
            </CardText> */}
            {/* <Button>
                Button
            </Button> */}
            </CardBody>
        </Card>
        <Card>
            <CardImg
            alt="Card image cap"
            src={speaker3}
            top
            width="100%"
            />
            <CardBody>
            <CardTitle tag="h5">
                Prof. Devi Premnath
            </CardTitle>
            <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
            >
                Jansons School of Business, India
            </CardSubtitle>
            {/* <CardText>
                This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.
            </CardText> */}
            {/* <Button>
                Button
            </Button> */}
            </CardBody>
        </Card>
    </CardGroup>

    <CardGroup>
        <Card>
            <CardImg
            alt="Card image cap"
            src={speaker4}
            top
            width="100%"
            />
            <CardBody>
            <CardTitle tag="h5">
                Prof. Jo Ann Ho
            </CardTitle>
            <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
            >
                Universiti Putra Malaysia, Malaysia
            </CardSubtitle>
            {/* <CardText>
                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
            </CardText> */}
            {/* <Button>
                Button
            </Button> */}
            </CardBody>
        </Card>
        <Card>
            <CardImg
            alt="Card image cap"
            src={speaker5}
            top
            width="100%"
            />
            <CardBody>
            <CardTitle tag="h5">
                Prof. Piyush Sharma
            </CardTitle>
            <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
            >
                Curtin University, Australia
            </CardSubtitle>
            {/* <CardText>
                This card has supporting text below as a natural lead-in to additional content.
            </CardText> */}
            {/* <Button>
                Button
            </Button> */}
            </CardBody>
        </Card>
        <Card>
            <CardImg
            alt="Card image cap"
            src={speaker6}
            top
            width="100%"
            />
            <CardBody>
            <CardTitle tag="h5">
                Prof. Nurul Indarti
            </CardTitle>
            <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
            >
                Universitas Gadjah Mada, Indonesia
            </CardSubtitle>
            {/* <CardText>
                This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.
            </CardText> */}
            {/* <Button>
                Button
            </Button> */}
            </CardBody>
        </Card>
    </CardGroup>

    <CardGroup>
        <Card>
            <CardImg
            alt="Card image cap"
            src={speaker7}
            top
            width="100%"
            />
            <CardBody>
            <CardTitle tag="h5">
                Prof. Norlia Ahmad
            </CardTitle>
            <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
            >
                Kwansei Gakuin University, Japan
            </CardSubtitle>
            {/* <CardText>
                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
            </CardText> */}
            {/* <Button>
                Button
            </Button> */}
            </CardBody>
        </Card>
        <Card>
            <CardImg
            alt="Card image cap"
            src={speaker8}
            top
            width="100%"
            />
            <CardBody>
            <CardTitle tag="h5">
                Hon. Prof. Dr Jasmine Begum
            </CardTitle>
            <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
            >
                Microsoft,Malaysia
            </CardSubtitle>
            {/* <CardText>
                This card has supporting text below as a natural lead-in to additional content.
            </CardText> */}
            {/* <Button>
                Button
            </Button> */}
            </CardBody>
        </Card>
        <Card>
            <CardImg
            alt="Card image cap"
            src={speaker9}
            top
            width="100%"
            />
            <CardBody>
            <CardTitle tag="h5">
                Hajah Mahuran Saro Dato’ Haji Sariki
            </CardTitle>
            <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
            >
                TalentCorp
            </CardSubtitle>
            {/* <CardText>
                This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.
            </CardText> */}
            {/* <Button>
                Button
            </Button> */}
            </CardBody>
        </Card>
    </CardGroup>
    
    </BaseLayout>
  );
}

export default KeynoteSpeakers;
