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
import View from "layouts/sections/components/View";

// Typography page components
import TypographyRoboto from "layouts/sections/elements/index-committee";

// Typography page components code
// import typographyRobotoCode from "layouts/sections/elements/typography/components/TypographyRoboto/code";

function Committee() {
  return (
    <BaseLayout
      title="Committee"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/elements/Committee" },
        { label: "Committee" },
      ]}
    >
      <View /*code={typographyRobotoCode}*/>
        <TypographyRoboto />
      </View>
    </BaseLayout>
  );
}

export default Committee;
