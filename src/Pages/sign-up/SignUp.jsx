import React from "react";
import Page_Heading from "../../Components/page-heading/Page_Heading";
function SignUp() {
  const firstBreadcrumb = { label: "Pages", link: "/signup" };
  const secondBreadcrumb = {
    label: "Sign Up",
    link: "/signup",
    active: true,
  };
  return (
    <div>
      <Page_Heading
        title="Sign Up"
        firstBreadcrumb={firstBreadcrumb}
        secondBreadcrumb={secondBreadcrumb}
      />
    </div>
  );
}

export default SignUp;
