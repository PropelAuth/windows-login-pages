import { Container } from "@/components/Container";
import { LoginManager, Signup, ForgotPassword } from "@propelauth/react";
import { useEffect, useState } from "react";

export default function App() {
  const [os, setOs] = useState("98");
  const [hash, setHash] = useState("");

  useEffect(() => {
    const handleChange = () => setHash(window.location.hash.slice(1));
    window.addEventListener("hashchange", handleChange);
    return () => {
      window.removeEventListener("hashchange", handleChange);
    };
  }, []);

  useEffect(() => {
    let css = document.createElement("link");
    css.href = `https://unpkg.com/${os}.css`;
    css.rel = "stylesheet";
    document.head.appendChild(css);
    return () => {
      css.remove();
    };
  }, [os]);

  const appearance = {
    elements: {
      Logo: null,
      Header: null,
    },
  };

  switch (hash) {
    case "Login":
      return (
        <Container os={os} setOs={setOs} title={"Login"}>
          <LoginManager
            onLoginCompleted={() => simLoading()}
            loginAppearance={appearance}
          />
          <div className="bottom-links">
            <a href="#Signup">Create Account</a>
            <a href="#ForgotPassword">Forgot password?</a>
          </div>
        </Container>
      );

    case "ConfirmEmail":
      return (
        <Container os={os} setOs={setOs} title={"Confirm Email"}>
          <LoginManager
            onLoginCompleted={() => console.log("foo")}
            confirmEmailAppearance={appearance}
            overrideCurrentScreenForTesting={"ConfirmEmailRequired"}
          />
        </Container>
      );

    case "VerifyMfa":
      return (
        <Container os={os} setOs={setOs} title={"Verify"}>
          <LoginManager
            onLoginCompleted={() => console.log("foo")}
            verifyMfaAppearance={appearance}
            overrideCurrentScreenForTesting={"TwoFactorRequired"}
          />
        </Container>
      );

    case "CompleteAccount":
      return (
        <Container os={os} setOs={setOs} title={"Complete Account"}>
          <LoginManager
            onLoginCompleted={() => console.log("foo")}
            completeAccountAppearance={appearance}
            overrideCurrentScreenForTesting={"UserMetadataRequired"}
          />
        </Container>
      );

    case "UpdatePassword":
      return (
        <Container os={os} setOs={setOs} title={"Update Password"}>
          <LoginManager
            onLoginCompleted={() => console.log("foo")}
            updatePasswordAppearance={appearance}
            overrideCurrentScreenForTesting={"UpdatePasswordRequired"}
          />
        </Container>
      );

    case "CreateOrg":
      return (
        <Container os={os} setOs={setOs} title={"Create Organization"}>
          <LoginManager
            onLoginCompleted={() => console.log("foo")}
            createOrgAppearance={appearance}
            overrideCurrentScreenForTesting={"OrgCreationRequired"}
          />
        </Container>
      );

    case "Signup":
      return (
        <Container os={os} setOs={setOs} title={"Signup"}>
          <Signup appearance={appearance} />
          <div className="bottom-links">
            <a href="#Login">Login</a>
          </div>
        </Container>
      );

    case "ForgotPassword":
      return (
        <Container os={os} setOs={setOs} title={"Forgot Password"}>
          <ForgotPassword appearance={appearance} />
          <div className="bottom-links">
            <a href="#Login">Back to login</a>
          </div>
        </Container>
      );

    default:
      return (
        <Container os={os} setOs={setOs} title={"Login"}>
          <LoginManager
            onLoginCompleted={() => console.log("foo")}
            loginAppearance={appearance}
          />
          <div className="bottom-links">
            <a href="#Signup">Create Account</a>
            <a href="#ForgotPassword">Forgot password?</a>
          </div>
        </Container>
      );
  }
}
