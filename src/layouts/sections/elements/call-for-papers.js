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

import MKTypography from "components/MKTypography";

function CallForPapers() {
  return (
    // prettier-ignore
    <BaseLayout
      title="CallForPapers"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/elements/CallForPapers" },
        { label: "CallForPapers" },
      ]}
    >
    <MKTypography variant="body3">
        All accepted and registered papers of ICMaM2024 will be published in the Pertanika Journal of Social Science and Humanities Proceedings <b>(Approved) </b>
    </MKTypography>
    </BaseLayout>
  );
}

export default CallForPapers;
