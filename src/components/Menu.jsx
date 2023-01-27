export const Menu = () => {
  return (
    <ul className="tree-view has-container has-connector">
      <li>
        Components
        <ul>
          <li>
            <a href="#Login">LoginManager</a>
            <ul>
              <li>
                <a href="#Login">Login</a>
              </li>
              <li>
                <a href="#ConfirmEmail">ConfirmEmail</a>
              </li>
              <li>
                <a href="#VerifyMfa">VerifyMfa</a>
              </li>
              <li>
                <a href="#CompleteAccount">CompleteAccount</a>
              </li>
              <li>
                <a href="#UpdatePassword">UpdatePassword</a>
              </li>
              <li>
                <a href="#CreateOrg">CreateOrg</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#Signup">Signup</a>
          </li>
          <li>
            <a href="#ForgotPassword">ForgotPassword</a>
          </li>
        </ul>
      </li>
    </ul>
  );
};
