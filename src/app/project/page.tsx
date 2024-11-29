import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Project() {
  const projects = [
    { name: "Resume Builder", link: "https://milstonethree.vercel.app/" },
    { name: "Dry Fruite Mixture Selling", link: "https://sahar-beta.vercel.app/" },
    { name: "Normal navigated pages", link: "https://17-nov-clss.vercel.app/" },
  ];

  return (
    <section className="p-6 bg-gray-300 min-h-screen flex flex-col items-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
        My Projects
      </h2>
      <ul className="w-full max-w-md space-y-4">
        {projects.map((project, idx) => (
          <li key={idx} className="text-center">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline text-lg md:text-xl"
            >
              {project.name}
            </a>
          </li>
        ))}
      </ul>
      <div className="w-full flex justify-end mt-10">
        <Button className="bg-blue-500 text-white hover:bg-blue-600 px-4 py-2 rounded-lg">
          <Link href="/contact">Click here to contact</Link>
        </Button>
      </div>
    </section>
  );
}