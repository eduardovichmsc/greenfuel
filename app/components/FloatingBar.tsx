"use client";
import Link from "next/link";
import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { usePathname } from "next/navigation";

import { Links } from "@/app/components/Nav";

export const FloatingBar = () => {
	const pathname = usePathname();
	const [hoveredLink, setHoveredLink] = useState("");

	const { scrollYProgress } = useScroll();
	const [scrollProgress, setScrollProgress] = useState(scrollYProgress.get());

	useEffect(() => {
		const unsubscribe = scrollYProgress.on("change", (latest) => {
			setScrollProgress(latest);
		});
		return () => unsubscribe();
	}, [scrollYProgress]);

	useEffect(() => {
		console.log(pathname);
	}, [pathname]);

	console.log(scrollProgress);

	return (
		<motion.div
			className="fixed flex justify-center w-full z-50 mt-6"
			initial={{ opacity: 0, y: -10 }}
			animate={{
				opacity: scrollProgress < 0.3645 || scrollProgress == 1 ? 0 : 1,
				y: scrollProgress < 0.3645 || scrollProgress == 1 ? -10 : 0,
				pointerEvents:
					scrollProgress < 0.3645 || scrollProgress == 1 ? "none" : "auto",
			}}
			transition={{ duration: 0.3, ease: "easeOut" }}>
			<div
				className={clsx(
					"flex bg-white border-2 transition border-green-600 w-fit rounded-xl gap-6 px-3",
					{
						"border-neutral-300": hoveredLink,
					}
				)}>
				{Links.map((link) => (
					<Link
						key={link.href}
						href={link.href ? link.href : "/error"}
						className={clsx(
							"font-normal text-md duration-150 transition-all ease-in-out p-2",
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
		</motion.div>
	);
};
