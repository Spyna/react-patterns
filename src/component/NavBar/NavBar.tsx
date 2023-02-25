import { Link } from "terso-routing";

export default function NavBar() {
  return (
    <div>
      <h2>Navigation</h2>
      <ul>
        <li>
          <Link href="/">
            Home <small>(protected)</small>
          </Link>
        </li>
        <li>
          <Link href="/about">
            About <small>(public)</small>
          </Link>
        </li>
        <li>
          <Link href="/contacts">
            Contacts <small>(not found)</small>
          </Link>
        </li>
      </ul>
      <hr></hr>
    </div>
  );
}
