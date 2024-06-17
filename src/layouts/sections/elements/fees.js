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

function Fees() {
  return (
    // prettier-ignore
    <BaseLayout
      title="Fees"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/elements/Fees" },
        { label: "Fees" },
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
        <th>
            Category
        </th>
        <th>
            Fees
        </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">
                Participant present paper (Physical)
            </th>
            <td>  
                600
            </td>
        </tr>
        <tr>
            <th scope="row">
                Participant present paper (Online)
            </th>
            <td>
                300
            </td>  
        </tr>
        <tr>
            <th scope="row">
                Participant present paper (Non-UNITAR student)
            </th>
            <td>
                200
            </td>
        </tr>
        <tr>
            <th scope="row">
                Participant present paper (UNITAR student)
            </th>
            <td>
                100
            </td>       
        </tr>
        <tr>
            <th scope="row">
                Attendees(Physical)
            </th>
            <td>
                100
            </td>       
        </tr>
    </tbody>
    </Table>
    *Fees exclude proceeding
   
    </BaseLayout>
  );
}

export default Fees;
