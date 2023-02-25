import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { useInject } from "terso";
import { Profile } from "../domain/User";
import { TYPES } from "../ioc/ioc.types";
import { AuthorizationService } from "../service/AuthorizationService";
import { adminTheme } from "./adminTheme";
import { defaultTheme } from "./defaultTheme";
import { userTheme } from "./usertheme";

// const authorizationService = container.get<AuthorizationService>(
//   TYPES.AuthorizationServiceType
// );
// autorun(() => {
//   const profile = authorizationService.getProfile();

//   applyTheme(profile);
// });

// example with React
export default observer(function Theme() {
  const authorizationService = useInject<AuthorizationService>(
    TYPES.AuthorizationServiceType
  );

  const profile = authorizationService.getProfile();

  useEffect(() => {
    applyTheme(profile);
  }, [profile]);
  return <></>;
});

function applyTheme(profile?: Profile) {
  let theme = defaultTheme;
  switch (profile) {
    case Profile.Admin:
      theme = adminTheme;
      break;
    case Profile.User:
      theme = userTheme;
      break;
  }
  Object.keys(theme).forEach((key) => {
    const cssKey = `--${key}`;
    const cssValue = theme[key];
    document.body.style.setProperty(cssKey, cssValue);
  });
}
