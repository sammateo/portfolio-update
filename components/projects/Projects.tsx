import React from "react";
import projectList from "@/data/projects";
import { FaCode } from "react-icons/fa6";
export interface ProjectInterface {
	id: number;
	title: string;
	description: string;
	image: string;
	url: string;
	github: string;
}

export default function Projects() {
	return (
		<section id="projects" className="bg-gray-900 text-white">
			<div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
				<div className="mx-auto max-w-lg text-center">
					<h2 className="text-3xl font-bold sm:text-4xl uppercase">
						Projects
					</h2>

					<p className="mt-4 text-gray-300">
						A Portfolio Showcase of My Web Development Projects
					</p>
				</div>

				<div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
					{projectList
						.slice(0, 6)
						.map((project: ProjectInterface) => (
							<a
								key={project.id}
								target="_blank"
								rel="noopener noreferrer"
								className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-blue-600/10 hover:shadow-blue-600/10"
								href={project.url}
							>
								<FaCode size={20} className="text-blue-600" />

								<h2 className="mt-4 text-xl font-bold text-white">
									{project.title}
								</h2>

								<p className="mt-1 text-sm text-gray-300">
									{project.description}
								</p>
							</a>
						))}
				</div>

				<div className="mt-12 text-center">
					<a
						href="/projects"
						className="inline-block rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-400"
					>
						View More
					</a>
				</div>
			</div>
		</section>
	);
}
