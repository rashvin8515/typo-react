import React from "react";
import Page_Heading from "../../Components/page-heading/Page_Heading";
import Team from "../../Components/team/Team";

function TeamSingle() {
  const firstBreadcrumb = { label: "Pages", link: "/team-single" };
  const secondBreadcrumb = {
    label: "Team Single",
    link: "/team-single",
    active: true,
  };
  return (
    <div>
      <Page_Heading
        title="Team Single"
        firstBreadcrumb={firstBreadcrumb}
        secondBreadcrumb={secondBreadcrumb}
      />
      <div class="page-content">
        <Team />
      </div>
    </div>
  );
}

export default TeamSingle;
