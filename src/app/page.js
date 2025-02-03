import Image from "next/image";
import { Button } from "@heroui/react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex relative min-h-screen justify-center items-center">
      <div className="w-full h-full z-0">
        <Image src="/book.jpg" fill alt="book-sample" />
      </div>
      <div className="z-10 mr-10 space-y-5">
        <p className="text-xl font-sans font-medium text-white italic">
          "A reader lives a thousand lives before he dies. The man who never
          reads lives only one." — George R.R. Martin
        </p>
        <Link href={"/home"} legacyBehavior>
          <Button className="bg-gradient-to-br from-black to-blue-900 text-white shadow-lg p-5">
            Get Started
          </Button>
        </Link>
      </div>
    </div>
  );
}
