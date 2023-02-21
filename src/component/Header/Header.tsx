import { observer } from "mobx-react-lite";
import { TYPES } from "../../ioc/ioc.types";
import { useInject } from "../../ioc/useInject";
import { AuthenticationService } from "../../service/AuthenticationService";

export default observer(function Header() {
  const authService = useInject<AuthenticationService>(
    TYPES.AuthenticationService
  );
  const user = authService.getUser();

  function logout() {
    authService.logout();
  }

  return (
    <header className="App-header">
      <div>React patterns - Todo List</div>
      {user && (
        <div>
          Logged as: <strong>{user.name}</strong>{" "}
          <button onClick={logout}>Logout</button>
        </div>
      )}
    </header>
  );
});
