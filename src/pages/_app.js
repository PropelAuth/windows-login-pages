import { AuthProvider, ComponentLibraryProvider } from "@propelauth/react-test";
import { BaseElements } from "@propelauth/base-elements";
import "@propelauth/base-elements/dist/default.css";
import "@/styles/globals.css";

const elements = {
  ...BaseElements,
  Label: ({ children, rest }) => <label {...rest}>{children}</label>,
  Input: (props) => <input {...props} className="field-row-stacked" />,
  Button: ({ children, rest }) => <button {...rest}>{children}</button>,
};

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider authUrl={process.env.NEXT_PUBLIC_AUTH_URL}>
      <ComponentLibraryProvider elements={elements}>
        <Component {...pageProps} />
      </ComponentLibraryProvider>
    </AuthProvider>
  );
}
