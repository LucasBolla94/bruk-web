import Image from "next/image";
import Link from "next/link";
import Login from "../Login/page";

export default function Menu() {
  return (
    <div>
      <h1>BrUk Couriers</h1>
      <Image src="/logo.png" alt="logo" width={200} height={200} />
      <div>
        <Link href="/">Home</Link>
        <Link href="/about">About Us</Link>
        <Link href="/contact">Contact</Link>
      </div>
        <Login />
    </div>
  );
}