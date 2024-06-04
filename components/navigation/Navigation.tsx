"use client";
import React, { useState } from "react";
import { CgMenuRightAlt } from "react-icons/cg";
import { MobileNavigation } from "./MobileNavigation";
import Link from "next/link";
export interface navItemInterface {
	name: string;
	path: string;
}
export default function Navigation() {
	const [openNav, setOpenNav] = useState(false);
	const navitems: navItemInterface[] = [
		{
			name: "Home",
			path: "/",
		},
		{
			name: "Projects",
			path: "/projects",
		},
		{
			name: "About",
			path: "/about",
		},
	];
	return (
		<div>
			<div className="hidden md:flex bg-gray-900 bg-transparent text-primary-foreground justify-center gap-x-5 py-4 z-10 relative">
				{navitems.map((item) => (
					<Link
						key={item.name}
						href={item.path}
						className="py-1 px-5 rounded-full transition-all duration-500 ease-out border-transparent border-2 hover:border-blue-600 "
					>
						{item.name}
					</Link>
				))}
			</div>
			<div className="flex items-center justify-between md:hidden bg-gray-900 text-blue-600 py-4 pe-4">
				<Link
					href={"/"}
					className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 transition-all duration-1000 ease-in-out bg-clip-text text-center w-fit mx-0 md:mx-auto text-xl px-4 py-2 font-extrabold text-transparent"
				>
					Mateo Sam
				</Link>
				<CgMenuRightAlt
					size={35}
					className=" cursor-pointer"
					onClick={() => {
						setOpenNav(true);
					}}
				/>
			</div>
			<MobileNavigation
				openNav={openNav}
				setOpenNav={setOpenNav}
				navitems={navitems}
			/>
			{/* <svg
				className="absolute top-0 -left-30 sm:left-0 z-0"
				width="304"
				height="210"
				viewBox="0 0 304 210"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M157.475 -10H220.939C271.024 -10 309.583 34.2192 302.765 83.8384C296.351 130.518 252.248 162.383 205.916 153.812L105.935 135.319C65.4378 127.828 24.166 143.718 -0.851048 176.433L-14.9286 194.842C-16.0747 196.341 -16.8529 198.088 -17.2007 199.942C-19.7982 213.796 -39.9911 212.693 -41.0645 198.639L-54.1514 27.296C-55.6883 7.17419 -39.7758 -10 -19.5953 -10H157.475Z"
					fill="#12355B"
				/>
			</svg> */}
		</div>
	);
}
