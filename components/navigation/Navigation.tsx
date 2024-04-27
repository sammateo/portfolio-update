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
			<div className="hidden md:flex bg-gray-900 text-primary-foreground justify-center gap-x-5 py-4 ">
				{navitems.map((item) => (
					<Link
						key={item.name}
						href={item.path}
						className="py-2 px-4 rounded border-transparent border-2 hover:border-blue-600 "
					>
						{item.name}
					</Link>
				))}
			</div>
			<div className="flex justify-end md:hidden bg-gray-900 text-blue-600 py-4 px-4">
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
