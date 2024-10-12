"use client";
import { LinkType } from "@/app/types/types";

import Link from "next/link";
import clsx from "clsx";
import { useState } from "react";

export const Links: LinkType[] = [
	{ href: "/", title: "Зерттеу" },
	{ href: "/team", title: "Команда" },
	{ href: "/faqs", title: "FAQs" },
];

export const Nav = () => {
	const [hoveredLink, setHoveredLink] = useState("");

	return (
		<nav className="flex justify-between items-center">
			<div className="flex items-center space-x-2">
				<div className="size-9 bg-green-500 rounded-full"></div>
				<Link
					href={"/"}
					className="font-semibold uppercase tracking-wide text-2xl">
					GreenFuel
				</Link>
			</div>

			<div className="flex space-x-6">
				{Links.map((link) => (
					<Link
						key={link.href}
						href={link.href ? link.href : "/error"}
						className={clsx(
							"font-normal text-lg duration-150 transition-all ease-in-out",
							{
								"text-neutral-300": hoveredLink && hoveredLink !== link.href,
							}
						)}
						onMouseEnter={() => setHoveredLink(link.href ? link.href : "")}
						onMouseLeave={() => setHoveredLink("")}>
						{link.title}
					</Link>
				))}
			</div>

			<div className="w-8 h-5 group transition-all flex flex-col items-center justify-between cursor-pointer hidden">
				{[1, 2, 3].map((index) => (
					<div
						key={index}
						className="w-full h-[3px] bg-black/70 group-hover:bg-black/100 transition-colors rounded-full"></div>
				))}
			</div>
		</nav>
	);
};
