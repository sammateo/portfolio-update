import React from "react";
import { ProjectInterface } from "./Projects";
import { FaArrowRightLong } from "react-icons/fa6";
import { HiArrowLongRight } from "react-icons/hi2";
export default function ProjectRow({
	id,
	title,
	description,
	image,
	url,
	github,
}: ProjectInterface) {
	const newDesign = true;
	return (
		<>
			{newDesign ? (
				<section>
					<div className="mx-auto max-w-screen-2xl px-8 py-16 lg:px-16">
						<div className="grid grid-cols-1  lg:h-[75vh] max-h-[700px] lg:grid-cols-2">
							<div className="relative z-10 lg:py-16">
								<div className="relative h-64 sm:h-80 lg:h-full">
									<img
										alt=""
										src={
											image
												? image
												: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
										}
										className="absolute inset-0 h-full w-full object-cover object-top lg:object-center lg:object-contain rounded-t"
									/>
								</div>
							</div>

							<div className="relative flex items-center bg-gray-800 rounded-b lg:rounded-b-none lg:rounded-tr lg:rounded-br">
								<span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:-start-32 lg:block lg:w-16 lg:w-32 lg:bg-gray-800 lg:rounded-tl lg:rounded-bl"></span>

								<div className="p-8 sm:p-16 lg:p-24">
									<h2 className="text-2xl font-bold sm:text-3xl text-white">
										{title}
									</h2>

									<p className="mt-4 text-gray-200">
										{description}
									</p>

									<a
										href={url}
										target="_blank"
										rel="noreferrer"
										className="mt-8 inline-block rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
									>
										Visit
									</a>
								</div>
							</div>
						</div>
					</div>
				</section>
			) : (
				<div className="group grid grid-cols-2 justify-between items-center my-5 px-6 py-10 md:w-4/6 max-w-[750px] md:rounded mx-auto transition-all hover:shadow-blue-600/10 hover:shadow-xl">
					<div className="group-[:nth-of-type(even)]:order-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className=" w-36 sm:w-44 md:w-52 h-auto mx-auto"
							data-name="Layer 1"
							width="1098.75"
							height="632.37039"
							viewBox="0 0 1098.75 632.37039"
							xmlnsXlink="http://www.w3.org/1999/xlink"
						>
							<title>heatmap</title>
							<ellipse
								cx="549.375"
								cy="600.77366"
								rx="549.375"
								ry="31.59674"
								fill="#f2f2f2"
							/>
							<rect
								x="174.96748"
								width="825.31765"
								height="26.25696"
								fill="#f2f2f2"
							/>
							<circle
								cx="197.05271"
								cy="12.74148"
								r="6.79546"
								fill="#2563eb"
							/>
							<circle
								cx="219.13794"
								cy="12.74148"
								r="6.79546"
								fill="#2563eb"
							/>
							<circle
								cx="241.22317"
								cy="12.74148"
								r="6.79546"
								fill="#2563eb"
							/>
							<polygon
								points="175.552 415.277 174.967 415.779 174.967 592.903 1000.285 592.903 1000.285 281.779 990.449 282.525 175.552 415.277"
								fill="#3f3d56"
							/>
							<rect
								x="234.5289"
								y="175.64069"
								width="230.47032"
								height="9.29316"
								fill="#3f3d56"
							/>
							<rect
								x="234.5289"
								y="196.08564"
								width="230.47032"
								height="9.29316"
								fill="#3f3d56"
							/>
							<rect
								x="234.5289"
								y="216.53058"
								width="78.06253"
								height="9.29316"
								fill="#3f3d56"
							/>
							<rect
								x="704.5289"
								y="433.64069"
								width="230.47032"
								height="9.29316"
								fill="#fff"
							/>
							<rect
								x="704.5289"
								y="454.08564"
								width="230.47032"
								height="9.29316"
								fill="#fff"
							/>
							<rect
								x="704.5289"
								y="474.53058"
								width="78.06253"
								height="9.29316"
								fill="#fff"
							/>
							<circle
								cx="561.33549"
								cy="575.26922"
								r="9.0658"
								fill="#f2f2f2"
							/>
							<circle
								cx="587.6263"
								cy="576.1758"
								r="9.0658"
								fill="#f2f2f2"
							/>
							<circle
								cx="613.91711"
								cy="577.08238"
								r="9.0658"
								fill="#f2f2f2"
							/>
							<circle
								cx="587.70943"
								cy="576.1758"
								r="7.25264"
								fill="#3f3d56"
							/>
							<rect
								x="310.5289"
								y="282.01368"
								width="78.06253"
								height="17.81006"
								fill="#3f3d56"
							/>
							<rect
								x="774.5289"
								y="523.01368"
								width="78.06253"
								height="17.81006"
								fill="#fff"
							/>
							<circle
								cx="350"
								cy="291.01368"
								r="54"
								fill="#2563eb"
								opacity="0.3"
							/>
							<circle
								cx="350"
								cy="291.01368"
								r="36"
								fill="#2563eb"
								opacity="0.3"
							/>
							<circle
								cx="350"
								cy="291.01368"
								r="25"
								fill="#2563eb"
							/>
							<circle
								cx="804.375"
								cy="157.1852"
								r="54"
								fill="#2563eb"
								opacity="0.3"
							/>
							<circle
								cx="804.375"
								cy="157.1852"
								r="36"
								fill="#2563eb"
								opacity="0.3"
							/>
							<circle
								cx="804.375"
								cy="157.1852"
								r="25"
								fill="#2563eb"
							/>
							<circle
								cx="814"
								cy="532.01368"
								r="54"
								fill="#2563eb"
								opacity="0.3"
							/>
							<circle
								cx="814"
								cy="532.01368"
								r="36"
								fill="#2563eb"
								opacity="0.3"
							/>
							<circle
								cx="814"
								cy="532.01368"
								r="25"
								fill="#2563eb"
							/>
							<rect
								x="141.09287"
								y="215.02041"
								width="22.24232"
								height="28.59727"
								transform="translate(244.80285 330.54921) rotate(-177.77929)"
								fill="#2563eb"
							/>
							<path
								d="M241.91491,314.67894s30.77895-14.70576,30.28646-2.00541-31.02521,21.05594-31.02521,21.05594Z"
								transform="translate(-50.625 -133.8148)"
								fill="#ffb9b9"
							/>
							<path
								d="M225.02834,422.13944S239.54941,457.681,244.9146,483.328s13.53608,60.94229,3.02582,85.97362-40.39191,98.59934-40.69972,106.53706,2.55946,15.99857-3.79071,15.75232-40.90677-11.12588-42.30963-15.95007,11.79-17.032,11.79-17.032l32.57732-102.08224L171.5182,490.02139l-24.51648,99.215-4.80184,123.82843s-23.56691-7.2736-26.98824-1.04655c0,0-10.55875-14.71883-11.90005-21.13057s4.98653-128.59106,4.98653-128.59106-21.63236-139.16289-4.16937-138.4857S189.99232,382.62245,225.02834,422.13944Z"
								transform="translate(-50.625 -133.8148)"
								fill="#2f2e41"
							/>
							<path
								d="M203.69623,685.2408s16.10862,35.60315,17.63461,37.25226,12.02317,17.95548,4.08545,17.64767-26.68044-8.98428-40.47584-22.23869-31.98406-36.21877-30.33495-37.74475,12.9466-5.85768,12.9466-5.85768Z"
								transform="translate(-50.625 -133.8148)"
								fill="#2f2e41"
							/>
							<path
								d="M139.33261,705.00394s.97192,15.937,3.90076,22.4103,2.55947,15.99856-5.37825,15.69075-28.45267-4.2832-28.45267-4.2832-1.21817-9.58683.43093-11.11281,8.67647-18.74272,5.68607-23.62847S139.33261,705.00394,139.33261,705.00394Z"
								transform="translate(-50.625 -133.8148)"
								fill="#2f2e41"
							/>
							<path
								d="M127.58939,187.8209s-16.922,26.37263-23.51842,32.47656,11.9616,19.543,11.9616,19.543l33.2153,4.46789s-.41786-30.2249,1.29281-33.33842S127.58939,187.8209,127.58939,187.8209Z"
								transform="translate(-50.625 -133.8148)"
								fill="#ffb9b9"
							/>
							<path
								d="M156.45992,222.329s-6.84267,12.45411-13.19285,12.20786-39.1961-14.2394-40.599-19.0636-10.87963,34.5566-10.87963,34.5566L172.16,391.47053l19.60459-13.54915-9.49913-83.04478-7.80153-44.8206Z"
								transform="translate(-50.625 -133.8148)"
								fill="#2563eb"
							/>
							<path
								d="M99.70361,348.91253c3.206,6.70666,5.20835,13.70047,4.9307,20.86031-.01231.31753-.02462.635-.05282.95187-.76057,14.69329-6.17341,31.68645-8.11534,44.04442-1.40908,8.86485-1.00808,15.33552,4.1797,16.85636,12.57723,3.66759-1.83379,6.28862,46.826,22.48494s57.15159,2.21623,57.27471-.95886-6.89116-27.29606-5.24206-28.822,23.07442,19.974,29.54772,17.04512.73874-19.05053.73874-19.05053-14.58264-33.954-14.27483-41.89176-22.08942-45.37466-22.08942-45.37466L178.193,235.89122s-5.85768-12.9466-13.73384-14.84195-14.411,2.621-14.411,2.621L163.228,252.80015l13.90546,51.417-2.32629,18.989s-16.17018-34.0156-26.7905-47.14689-33.26379-44.21805-33.26379-44.21805-5.28646-17.83738-1.2957-23.16791c3.99136-5.34632-16.64671-6.14663-25.4463,15.77118-4.66382,11.61641-12.23581,28.93924-16.97922,45.068-4.22682,14.28852-6.22343,27.646-2.03588,35.28111C75.396,316.45748,91.4958,331.78866,99.70361,348.91253Z"
								transform="translate(-50.625 -133.8148)"
								fill="#575a89"
							/>
							<path
								d="M68.99574,304.79359c6.40029,11.66389,22.50006,26.99507,30.70787,44.11894,2.14378-7.72349,4.75909-15.71476,4.75909-15.71476s10.03082-53.66869-19.64-67.53872a19.85762,19.85762,0,0,0-13.79106,3.85343C66.8048,283.801,64.80819,297.15851,68.99574,304.79359Z"
								transform="translate(-50.625 -133.8148)"
								opacity="0.1"
							/>
							<path
								d="M186.7818,301.41146l25.15446,7.33517,34.926,1.35436,3.593,30.348L193.05735,344.583S178.721,304.27874,186.7818,301.41146Z"
								transform="translate(-50.625 -133.8148)"
								fill="#575a89"
							/>
							<path
								d="M145.764,403.451s33.65163,5.58313,25.971,15.7098-37.49194-.51979-37.49194-.51979Z"
								transform="translate(-50.625 -133.8148)"
								fill="#ffb9b9"
							/>
							<path
								d="M104.58149,370.72471c-.76057,14.69329-6.17341,31.68645-8.11534,44.04442,10.72016,10.14608,20.91438,19.09523,24.75621,19.24421,7.93772.30781,20.69963-.78723,25.4007.985s7.4583-28.32955,7.4583-28.32955-2.80572-9.64839-15.32139-14.90351C130.31217,388.21008,114.119,378.56726,104.58149,370.72471Z"
								transform="translate(-50.625 -133.8148)"
								opacity="0.1"
							/>
							<path
								d="M85.19206,256.13379s-26.86513-4.22165-25.41378,40.35271-2.83185,73.027,7.97315,81.39568,45.90258,46.29809,53.8403,46.6059,20.69964-.78724,25.40071.985,7.45829-28.32954,7.45829-28.32954S151.645,387.49514,139.12935,382.24s-42.00182-23.88779-41.75558-30.238,7.4583-28.32955,7.4583-28.32955S114.8629,270.00382,85.19206,256.13379Z"
								transform="translate(-50.625 -133.8148)"
								fill="#575a89"
							/>
							<circle
								cx="100.65442"
								cy="58.10462"
								r="34.95222"
								fill="#ffb9b9"
							/>
							<path
								d="M174.81363,141.82272a6.74905,6.74905,0,0,0,2.93882,1.47478,2.09716,2.09716,0,0,0,2.43029-1.68345c.79968,1.65841,1.70192,3.42593,3.33461,4.27689s4.15732.13741,4.39266-1.68864a7.706,7.706,0,0,0,1.77364,3.74392c1.013.96584,2.85,1.20961,3.73439.12482-.715,3.90745-.27369,7.92586-.49823,11.89184s-1.2821,8.17049-4.27847,10.7784c-4.36987,3.80334-10.94108,2.86467-16.68929,2.1441a5.06575,5.06575,0,0,0-2.61539.14307c-2.15231.917-2.05467,3.9131-2.08369,6.25243a17.37275,17.37275,0,0,1-15.21221,16.49749,8.70861,8.70861,0,0,1-6.47244-1.57964c-1.63206-1.38336-2.46572-3.63806-4.33585-4.67724-3.04207-1.6904-6.73153.77486-8.95568,3.45158s-4.4162,5.96933-7.86172,6.45932c-4.55691.648-8.02766-3.996-9.73047-8.27217a48.223,48.223,0,0,1,.95837-37.46978C125.15791,132.94937,157.66118,129.66876,174.81363,141.82272Z"
								transform="translate(-50.625 -133.8148)"
								fill="#2f2e41"
							/>
							<path
								d="M1013.84731,697.58434c12.30975,20.99239,37.13647,29.30353,37.13647,29.30353s4.86866-25.72424-7.44108-46.71664-37.13647-29.30354-37.13647-29.30354S1001.53756,676.59194,1013.84731,697.58434Z"
								transform="translate(-50.625 -133.8148)"
								fill="#f2f2f2"
							/>
							<path
								d="M1021.52851,690.25752c21.28835,11.79052,30.20667,36.40565,30.20667,36.40565s-25.59693,5.49892-46.88529-6.2916-30.20667-36.40564-30.20667-36.40564S1000.24015,678.467,1021.52851,690.25752Z"
								transform="translate(-50.625 -133.8148)"
								fill="#2563eb"
							/>
						</svg>
					</div>
					<div className="text-white flex flex-col gap-y-2 group-[:nth-of-type(even)]:order-1 mx-auto">
						<h2 className=" font-semibold text-white text-xl">
							{title}
						</h2>
						<p className=" font-medium text-gray-300">
							{description}
						</p>
						<a
							href={url}
							target="_blank"
							rel="noreferrer"
							className="w-fit group inline-flex items-center gap-1 text-md font-medium text-blue-600 border-2 border-transparent hover:border-blue-600 rounded-full py-1 px-4 transition-all duration-500 ease-out"
						>
							Visit
							<span
								aria-hidden="true"
								className="block transition-all text-xl font-bold group-hover:ms-1 rtl:rotate-180"
							>
								{/* <FaArrowRightLong /> */}
								<HiArrowLongRight />
								{/* &rarr; */}
							</span>
						</a>
						{/* <a href={github} target="_blank" rel="noreferrer">
					<button>Github</button>
				</a> */}
					</div>
				</div>
			)}
		</>
	);
}
