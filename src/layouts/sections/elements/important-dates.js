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

import { Table } from "reactstrap";

function ImportantDates() {
  return (
    // prettier-ignore
    <BaseLayout
      title="ImportantDates"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/elements/ImportantDates" },
        { label: "ImportantDates" },
      ]}
    >

    <Table
    bordered
    hover
    responsive
    striped
    >
    <thead>
        <tr>
        {/* <th>
            
        </th>
        <th>
            
        </th> */}
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">
                Paper Submission Deadline
            </th>
            <td>  
                17 September 2024
            </td>
        </tr>
        <tr>
            <th scope="row">
                Notification of Paper Acceptance
            </th>
            <td>
                15 October 2024
            </td>  
        </tr>
        <tr>
            <th scope="row">
                Submission of Camera-Ready Paper Deadline
            </th>
            <td>
                31 October 2024
            </td>
        </tr>
        <tr>
            <th scope="row">
                Registration Deadline
            </th>
            <td>
                15 November 2024
            </td>       
        </tr>
        <tr>
            <th scope="row">
                Conference Dates
            </th>
            <td>
                4 - 5 December 2024
            </td>       
        </tr>
    </tbody>
    </Table>
   
    </BaseLayout>
  );
}

export default ImportantDates;
