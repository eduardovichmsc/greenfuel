import { FooterLinkType } from "@/app/types/types";
import { variants } from "@/app/animated";

import { MoveUpRightIcon } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export const FooterLinks: FooterLinkType[] = [
	{
		title: "Сілтемелер",
		sub: [
			{ title: "Зерттеу", href: "/" },
			{ title: "Жеке тұлғалар", href: "/individuals" },
			{ title: "Бизнес", href: "/business" },
			{ title: "Блог", href: "/blog" },
		],
	},
	{
		title: "Біз әлеуметтік желіде",
		sub: [
			{ title: "Twitter", href: "/twitter" },
			{ title: "Facebook", href: "/facebook" },
			{ title: "Instagram", href: "/instagram" },
			{ title: "Linkedin", href: "/linkedin" },
		],
	},
	{
		title: "Қолдау",
		sub: [
			{
				title: "FAQs",
				href: "/faqs",
			},
			{ title: "Байланыстар", href: "/contacts" },
		],
	},
];

export const Footer = () => {
	return (
		<footer className="flex flex-col gap-4">
			<motion.div
				initial="initial"
				whileInView="to"
				variants={variants}
				transition={{ delay: 0.5, duration: 0.75 }}
				viewport={{ once: true }}
				className="w-full flex gap-8">
				<div className="w-1/3 bg-black/90 text-white rounded-3xl p-6 space-y-6">
					<motion.p
						initial="initial"
						whileInView="to"
						variants={variants}
						transition={{ delay: 1, duration: 0.75 }}
						viewport={{ once: true }}
						className="text-3xl">
						{/* Become a Part Of Community, <br /> Help Us Make the Planet Green! */}
						Қоғамның мүшесі бол <br /> Әлемді жасылдандыруға көмектес!
					</motion.p>
					<motion.p
						initial="initial"
						whileInView="to"
						variants={variants}
						transition={{ delay: 1, duration: 0.75 }}
						viewport={{ once: true }}
						className="font-light leading-tight text-lg">
						Бірге әлемді жасылдандыра аламыз. Біздің қоғамның бір бөлігі болыңыз
						және планетаны жасылдандыруға көмектесіңіз. Проблема туралы білетін
						адамдар көбейген сайын, оны шешу мүмкіндігі артады.
					</motion.p>
					<div className="flex *:border-white h-12">
						<motion.button
							initial="initial"
							whileInView="to"
							variants={variants}
							transition={{ delay: 1, duration: 0.75 }}
							viewport={{ once: true }}
							className="border-2 rounded-full h-full px-8 text-lg bg-white text-black">
							Байланысыңыз
						</motion.button>
						<motion.button
							initial="initial"
							whileInView="to"
							variants={variants}
							transition={{ delay: 1, duration: 0.75 }}
							viewport={{ once: true }}
							className="border-2 rounded-full flex justify-center items-center size-12 bg-white text-black">
							<MoveUpRightIcon />
						</motion.button>
					</div>
				</div>

				<div className="w-2/3 rounded-3xl bg-white p-6">
					<div className="flex">
						<div className="w-2/3 flex justify-between">
							{FooterLinks.map((link) => (
								<motion.div
									initial="initial"
									whileInView="to"
									variants={variants}
									transition={{ delay: 1.5, duration: 0.75 }}
									viewport={{ once: true }}
									key={link.title}
									className="w-1/3 space-y-4">
									<p className="text-neutral-500 text-lg">{link.title}</p>
									<div className="space-y-2 text-lg font-normal">
										{link.sub?.map((sub) => (
											<Link
												className="flex w-max hover:underline underline-offset-8"
												href={link.href ? link.href : "/"}
												key={sub.href}>
												{sub.title}
											</Link>
										))}
									</div>
								</motion.div>
							))}
						</div>
						<motion.div
							initial="initial"
							whileInView="to"
							variants={variants}
							transition={{ delay: 1.5, duration: 0.75 }}
							viewport={{ once: true }}
							className="w-1/3 flex justify-end space-x-2">
							<div className="size-9 bg-green-500 rounded-full"></div>
							<p className="font-semibold uppercase tracking-wide text-2xl">
								GreenFuel
							</p>
						</motion.div>
					</div>
				</div>
			</motion.div>

			<motion.div
				initial="initial"
				whileInView="to"
				variants={variants}
				transition={{ delay: 2, duration: 0.75 }}
				viewport={{ once: true }}
				className="flex justify-end gap-[inherit]">
				<div className="flex items-center gap-[inherit] text-sm">
					<p>Ақпаратты қорғау саясаты</p>
					<span className="block rounded-full size-2 bg-black/50"></span>
					<p>Пайдалану шарттары</p>
				</div>
			</motion.div>
		</footer>
	);
};
