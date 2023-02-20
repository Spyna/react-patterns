import { observer } from "mobx-react-lite";
import React from "react";
import { useInject } from "../../ioc/useInject";
import { LoginPresenter } from "../../presenter/LoginPresenter";

export default observer(function Login() {
  const loginPresenter = useInject<LoginPresenter>(LoginPresenter);

  function onUsernameChange(event: React.FormEvent<HTMLInputElement>) {
    loginPresenter.setUsername(event.currentTarget.value);
  }

  async function performLogin(event: React.SyntheticEvent) {
    event.preventDefault();
    await loginPresenter.authenticate();
  }

  return (
    <main>
      <h2>Login page</h2>
      <p>Login to access this page</p>
      <form onSubmit={performLogin}>
        <input
          value={loginPresenter.username}
          onChange={onUsernameChange}
          placeholder="Bret or Antonette"
        />
        <button disabled={loginPresenter.loading}>
          login {loginPresenter.loading && "loading"}
        </button>
      </form>
      {loginPresenter.error && <p>{loginPresenter.error}</p>}
    </main>
  );
});
