import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <div className="flex flex-col md:flex-row bg-gray-800 text-white min-h-screen">
      {/* Image Section */}
      <div className="flex-1 flex justify-center items-center p-4">
        <Image
          src="/about.jpg"
          alt="aboutpic"
          width={900}
          height={900}
          className="rounded-lg max-w-full h-auto"
        />
      </div>

      {/* Content Section */}
      <div className="flex-1 flex flex-col justify-center p-6 md:p-12">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">
          I am a <b>passionate</b> Programmer.
        </h1>
        <p className="mb-4">
          I have knowledge of the following technologies:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>HTML</li>
          <li>CSS</li>
          <li>TypeScript</li>
          <li>Next.js</li>
          <li>Tailwind CSS</li>
          <li>Custom CSS</li>
          <li>ShadCN</li>
        </ol>
        <div className="mt-8 flex justify-center md:justify-end">
          <Button variant="outline">
            <Link href="/contact">Click here to contact</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}