import Link from "next/link";

export default function Home() {
  return (
    <>
      <p>Home</p>
      <Link href="/lost">
        <a>I lost something</a>
      </Link>
      <Link href="/found">
        <a>I found something</a>
      </Link>
    </>
  );
}
