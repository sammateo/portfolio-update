import React from "react";

function Banner() {
	return (
		<section className=" bg-primary text-primary-foreground">
			<div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-[89.7vh] lg:items-center">
				<div className="mx-auto max-w-3xl text-center">
					<h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
						Mateo Sam
					</h1>

					<p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
						Web Development Portfolio
					</p>

					<div className="mt-8 flex flex-wrap justify-center gap-4">
						<a
							className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-primary-foreground hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
							href="#projects"
						>
							See My Projects
						</a>

						<a
							className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-primary-foreground hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
							href="/about"
						>
							Learn More
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Banner;
