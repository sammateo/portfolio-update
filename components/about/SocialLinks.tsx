import Link from "next/link";
import React from "react";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa6";
export default function SocialLinks({
	socialIconSize,
}: {
	socialIconSize: number;
}) {
	return (
		<div className="text-blue-600 flex gap-x-5">
			<Link
				href="https://github.com/sammateo/"
				target="_blank"
				rel="noopener noreferrer"
			>
				<FaGithub size={socialIconSize} />
			</Link>
			{/* <Link
				href="https://www.instagram.com/sammateo4?igsh=MWo3ZmQ5aTA2dGw1YQ%3D%3D&utm_source=qr"
				target="_blank"
				rel="noopener noreferrer"
			>
				<FaInstagram size={socialIconSize} />
			</Link> */}
			<Link
				href="https://www.linkedin.com/in/mateosam/"
				target="_blank"
				rel="noopener noreferrer"
			>
				<FaLinkedin size={socialIconSize} />
			</Link>
		</div>
	);
}
