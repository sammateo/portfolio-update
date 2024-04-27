"use client";
import React, { useState } from "react";
import { CgMenuRightAlt } from "react-icons/cg";
import { MobileNavigation } from "./MobileNavigation";
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
			<div className="hidden md:flex bg-primary text-primary-foreground justify-center gap-x-5 py-4 ">
				{navitems.map((item) => (
					<a
						key={item.name}
						href={item.path}
						className="py-2 px-4 rounded border-transparent border-2 hover:border-blue-600 "
					>
						{item.name}
					</a>
				))}
			</div>
			<div className="flex justify-end md:hidden bg-primary text-blue-600 py-4 px-4">
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
		</div>
	);
}
