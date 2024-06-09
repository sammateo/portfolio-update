import ComingSoon from "@/components/Misc/ComingSoon";
import Navigation from "@/components/navigation/Navigation";
import React from "react";
import projectList from "@/data/projects";
import ProjectRow from "@/components/projects/ProjectRow";
export default function page() {
	return (
		<div>
			<Navigation />
			<div className=" md:mt-20">
				<h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-center w-fit mx-0 md:mx-auto text-3xl px-4 py-2 font-extrabold text-transparent sm:text-5xl">
					Projects
				</h1>
				{/* <div className="[&>*:nth-child(even)]:bg-[#12355B]"> */}
				<div className="">
					{projectList.map((project) => (
						<ProjectRow
							key={project.id}
							id={project.id}
							title={project.title}
							description={project.description}
							image={project.image}
							url={project.url}
							github={project.github}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
