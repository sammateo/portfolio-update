import Banner from "@/components/banner/Banner";
import Navigation from "@/components/navigation/Navigation";
import Projects from "@/components/projects/Projects";
import Image from "next/image";

export default function Home() {
	return (
		<div>
			<Navigation />
			<Banner />
			<Projects />
		</div>
	);
}
