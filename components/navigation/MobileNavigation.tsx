import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { navItemInterface } from "./Navigation";
import Link from "next/link";
interface NavbarProps {
	openNav: boolean;
	setOpenNav: any;
	navitems: navItemInterface[];
}
export function MobileNavigation({
	openNav,
	setOpenNav,
	navitems,
}: NavbarProps) {
	return (
		<Sheet open={openNav} onOpenChange={setOpenNav}>
			<SheetContent className="bg-gray-900 text-primary-foreground">
				<SheetHeader>
					<SheetTitle className="text-primary-foreground">
						Mateo Sam
					</SheetTitle>
					<SheetDescription>
						Web Development Portfolio
					</SheetDescription>
				</SheetHeader>
				<div className="flex flex-col">
					{navitems.map((item) => (
						<Link
							key={item.name}
							href={item.path}
							className="py-2 px-4 rounded hover:bg-blue-600 transition ease-in-out"
						>
							{item.name}
						</Link>
					))}
				</div>
			</SheetContent>
		</Sheet>
	);
}
