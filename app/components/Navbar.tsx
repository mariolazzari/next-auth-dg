import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="p-4 bg-blue-800">
      <ul className="flex text-2xl font-bold justify-evenly">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/api/auth/signin">Sign In</Link>
        </li>
        <li>
          <Link href="/api/auth/signout">Sign Out</Link>
        </li>
        <li>
          <Link href="/server">Server</Link>
        </li>
        <li>
          <Link href="/client">Client</Link>
        </li>
        <li>
          <Link href="/extra">Extra</Link>
        </li>
      </ul>
    </nav>
  );
}
