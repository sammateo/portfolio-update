import AboutImage from "@/components/about/AboutImage";
import Navigation from "@/components/navigation/Navigation";
import React from "react";
import { FaCode } from "react-icons/fa6";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa6";

export default function page() {
	let socialIconSize: number = 25;
	return (
		<div className="bg-gray-900 flex flex-col gap-y-20">
			<Navigation />
			<div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 md:py-10">
				<div className="hidden md:flex items-center">
					<div className="flex w-4/6 lg:1/2 mx-auto">
						<AboutImage />
					</div>
				</div>
				<div className="order-1 md:order-2 font-medium flex flex-col justify-center gap-y-5 leading-7 px-5">
					<h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
						About Me
					</h1>
					<div className="text-blue-600 flex items-center gap-x-4">
						<p>Mateo Sam</p> <FaCode size={20} /> <p>Developer</p>
					</div>
					<div className="text-white flex flex-col gap-y-4">
						<p>
							Lorem ipsum dolor sit amet consectetur. At tellus
							eget scelerisque sed consequat aliquam tellus
							pellentesque sed. Mus sem vulputate pellentesque
							morbi aenean non senectus interdum arcu. Est elit
							magna sodales sollicitudin aliquet. Ac in neque
							platea pulvinar ullamcorper enim egestas fringilla.{" "}
						</p>
						<p>
							Et aliquet proin id enim ultrices nisi in. Penatibus
							diam cras adipiscing in molestie volutpat sit tortor
							netus. Vitae maecenas enim vel dolor mi. Sit tempor
							neque in dictum eleifend tincidunt in lacus viverra.
							Ridiculus fringilla nunc tincidunt sit mattis
							gravida sit.
						</p>
					</div>
					<div className="text-blue-600 flex gap-x-5">
						<FaGithub size={socialIconSize} />
						<FaInstagram size={socialIconSize} />
						<FaLinkedin size={socialIconSize} />
					</div>
				</div>
			</div>
		</div>
	);
}
