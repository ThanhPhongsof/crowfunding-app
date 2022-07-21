import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "../components/common/ErrorComponent";
import { ButtonGoogle } from "components/button";

const authentications = [
  {
    type: "sign-up",
    title: "Already have an account?",
    titleLink: "Sign in",
    to: "/sign-in",
    text: "Sign up with google",
    content: "Or sign up with email",
  },
  {
    type: "sign-in",
    title: "Dont have an account?",
    titleLink: "Sign up",
    to: "/sign-up",
    text: "Sign in with google",
    content: "",
  },
];

const LayoutAuthentication = (props) => {
  const { heading = "", typeLayout, children } = props;
  const { title, titleLink, text, to, content } =
    typeLayout === 0 ? authentications[0] : authentications[1];

  return (
    <div className="box-border relative w-full min-h-screen p-10 bg-lite dark:bg-darkbg isolate">
      <img
        srcSet="/ellipse.png"
        alt="bg"
        className="hidden lg:block pointer-events-none absolute bottom-0 left-0 right-0 z-[-1] w-full"
      />
      <Link to="/" className="inline-block mb-5 lg:mb-16">
        <img srcSet="/logo.png 2x" alt="crowfunding-app" />
      </Link>
      <div className="w-full max-w-[556px] bg-white dark:bg-darkSecondary rounded-xl px-5 py-8 lg:px-16 lg:py-12 mx-auto">
        <h1 className="mb-1 text-lg font-semibold text-center lg:text-xl lg:mb-3 text-text1 dark:text-white">
          {heading}
        </h1>
        <p className="authentication-heading mb-6 text-xs font-normal text-center lg:mb-8 lg:text-sm text-text3">
          {title}{" "}
          <Link to={to} className="font-medium underline text-primary">
            {titleLink}
          </Link>
        </p>
        <ButtonGoogle text={text}></ButtonGoogle>
        {content.length > 0 && (
          <p className="mb-4 text-xs font-normal text-center lg:text-sm lg:mb-8 text-text2 dark:text-white">
            {content}
          </p>
        )}
        {children}
      </div>
    </div>
  );
};

LayoutAuthentication.propTypes = {
  heading: PropTypes.string,
  typeLayout: PropTypes.number.isRequired,
  children: PropTypes.node,
};

export default withErrorBoundary(LayoutAuthentication, {
  FallbackComponent: ErrorComponent,
});
