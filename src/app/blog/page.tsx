import Image from "next/image";
import Link from "next/link";

export default function Blog() {
  return (
    <div>
      <h1>Blog</h1>
      <Image src="/logo.png" alt="logo" width={200} height={200} />
      <Link href="/blog">Go to Blog</Link>
    </div>
  );
}