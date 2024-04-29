import AboutImage from "@/components/about/AboutImage";
import SocialLinks from "@/components/about/SocialLinks";
import Navigation from "@/components/navigation/Navigation";
import React from "react";
import { FaCode } from "react-icons/fa6";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa6";

export default function page() {
	let socialIconSize: number = 25;
	return (
		<div className="bg-gray-900 flex flex-col gap-y-10 md:gap-y-20">
			<Navigation />
			<div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 md:py-10">
				<div className="hidden md:flex items-center">
					<div className="flex w-4/6 lg:1/2 mx-auto">
						<AboutImage />
					</div>
				</div>
				<div className="order-1 md:order-2 font-medium flex flex-col justify-center gap-y-5 leading-7 px-5 pb-5">
					<h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
						About Me
					</h1>
					<div className="text-blue-600 flex items-center gap-x-4">
						<p>Mateo Sam</p> <FaCode size={20} /> <p>Developer</p>
					</div>
					<div className="text-white flex flex-col gap-y-5">
						<p>
							As a seasoned web developer, I blend creativity with
							technical prowess to craft immersive online
							experiences. With a passion for clean, efficient
							code and a keen eye for design, I specialize in
							turning visions into dynamic, user-friendly
							websites. From front-end aesthetics to back-end
							functionality, I thrive on the intricacies of web
							development, constantly pushing the boundaries of
							what&apos;s possible in the digital realm.
						</p>
						<p>
							With expertise in a variety of programming
							languages, frameworks, and tools, I bring
							versatility to every project, ensuring optimal
							performance across devices and platforms. Whether
							it&apos;s building responsive layouts, integrating
							APIs, or optimizing for SEO, I approach each task
							with precision and a commitment to excellence.
						</p>
					</div>
					<SocialLinks socialIconSize={socialIconSize} />
				</div>
			</div>
		</div>
	);
}
