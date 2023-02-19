import Link from "../../routing/Link";

export default function NavBar() {
  return (
    <div>
      <h2>Navigation</h2>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
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
