import { FaLink } from "react-icons/fa";

export default function ProjectCard({ title, description, link }: { title: string; description: string; link: string }) {

    return (
      <div className="bg-gray-50 rounded-lg flex flex-col px-8 py-4">
        <h3 className="font-bold">{title}</h3>
        <p className="text-gray-500 my-2">{description}</p>
        <div className="mt-auto"></div>
        <div className="flex items-center ">
          <FaLink className="text-gray-500" />
          <a href={link} target="_blank" rel="noopener noreferrer" className="text-gray-500 ml-2">More Details</a>
        </div>
      </div>
    )
  }