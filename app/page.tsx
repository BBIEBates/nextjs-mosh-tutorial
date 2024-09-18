import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth";
import coffee from "@/public/images/coffee.jpg";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main className="relative h-screen">
      <Image
        src="https://bit.ly/react-cover"
        alt="coffee"
        fill
        // style={{ objectFit: 'cover'}}
        className="object-cover"
        sizes="(max-width: 480px) 100vw, (max-width: 1200px) 50vw, 33vw"
        quality={75}
      />
    </main>
  );
}
