import React from "react";
import Page_Heading from "../../Components/page-heading/Page_Heading";

function SignIn() {
  const firstBreadcrumb = { label: "Pages", link: "/index" };
  const secondBreadcrumb = {
    label: "Sign In",
    link: "/login",
    active: true,
  };
  return (
    <div>
      <Page_Heading
        title="Sign In"
        firstBreadcrumb={firstBreadcrumb}
        secondBreadcrumb={secondBreadcrumb}
      />
    </div>
  );
}

export default SignIn;
