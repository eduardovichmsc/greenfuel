"use client";
import { Nav } from "@/app/components/Nav";
import { variants } from "@/app/animated";
import { mindetter, News } from "@/app/store/static";

import { MoveUpRightIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";

export default function Home() {
	const [choosenMindet, setChoosenMindet] = useState<number | undefined>(0);
	const [mindet, setMindet] = useState<string>("");

	const handleMindet = (value: string, id: number) => {
		setMindet(value);
		setChoosenMindet(id);
	};

	return (
		<div className="space-y-8">
			<motion.div
				initial="initial"
				whileInView="to"
				transition={{ delay: 0.5, duration: 0.75 }}
				variants={variants}
				viewport={{ once: true }}
				className="flex gap-6 w-full h-[95.9vh]">
				<div className="bg-white w-1/2 h-full rounded-3xl relative order-2">
					<video
						src="/header.mp4"
						className="rounded-3xl object-cover w-full h-full"
						autoPlay
						loop
						muted
					/>
				</div>

				<div className="flex flex-col justify-between bg-white w-1/2 h-full p-6 rounded-3xl order-1">
					<Nav />
					<div className="space-y-8">
						<motion.span
							initial="initial"
							whileInView="to"
							variants={variants}
							transition={{ delay: 1.25, duration: 0.75 }}
							viewport={{ once: true }}
							className="text-6xl relative">
							Табиғатқа қамқорлық
							<br /> Қоғамды біріктіру
						</motion.span>
						<motion.p
							initial="initial"
							whileInView="to"
							variants={variants}
							transition={{ delay: 1.5, duration: 0.75 }}
							viewport={{ once: true }}
							className="text-xl leading-tight text-left ">
							Біздің әлемімізді және балаларымыздың өмірін қауіпсіз ету,
							<br /> біз өмір сүретін жерлердің экологиясы туралы сенімді
							ақпарат алу
							<br /> артық талаптар емес, бұлар ақылға қонымды адамның кәдімгі
							қажеттіліктері.
						</motion.p>
						<div className="flex h-14">
							<motion.button
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								transition={{ delay: 2, duration: 0.75 }}
								viewport={{ once: true }}
								className="border-2 rounded-full h-full px-8 text-xl transition-all duration-300 text-neutral-600 hover:border-black hover:text-black">
								Байланысыңыз
							</motion.button>
							<motion.button
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								transition={{ delay: 2, duration: 0.75 }}
								viewport={{ once: true }}
								className="border-2 rounded-full flex justify-center items-center size-14 duration-300 text-neutral-600 hover:border-black hover:text-black">
								<MoveUpRightIcon />
							</motion.button>
						</div>
					</div>
				</div>
			</motion.div>

			<section className="space-y-8">
				{/* sections -- start */}
				<motion.div
					initial="initial"
					whileInView="to"
					transition={{ delay: 0.5, duration: 0.75 }}
					viewport={{ once: true }}
					variants={variants}
					className="relative w-full bg-white rounded-3xl rounded-bl-none flex flex-col justify-center p-6 h-[90vh]">
					<p className="uppercase leading-tight font-normal text-[58px]">
						Экологиялық таза өнімдерді жеуге, таза ауамен тыныстауға, біздің
						әлемімізді және балаларымыздың <br /> өмірін қауіпсіз етуге деген
						ұмтылысымыз
					</p>
					<div className="absolute bottom-0 left-0 bg-black/5 max-w-[450px] rounded-tr-3xl p-6 space-y-6">
						<p className="leading-tight text-xl">
							Біз өмір сүретін жерлердің экологиясы туралы сенімді ақпарат алу —
							бұл ақылға қонымды адамның қажеттілігі.
						</p>
						<div className="flex h-14">
							<button className="border-2 rounded-full h-full px-8 text-lg bg-white duration-300 text-neutral-600 hover:text-black hover:border-black">
								Байланысыңыз
							</button>
							<button className="border-2 rounded-full flex justify-center items-center size-12 bg-white duration-300 text-neutral-600 hover:text-black hover:border-black">
								<MoveUpRightIcon />
							</button>
						</div>
					</div>
				</motion.div>

				<motion.div
					initial="initial"
					whileInView="to"
					transition={{ delay: 0.5, duration: 0.75 }}
					viewport={{ once: true }}
					variants={variants}
					className="flex h-[50vh] gap-8">
					{/* first */}
					<div className="bg-white rounded-3xl border-2 border-green-600 flex flex-col justify-between w-1/4 h-full p-6">
						<div className="space-y-6">
							<p className="font-medium text-4xl">
								Әлемді
								<br />
								<span className="text-green-600">Жасылдандырайық</span>
							</p>
							<p className="font-medium">
								Бұл – планетаны көгалдандырудың ең оңай және тиімді жолы.
								<br /> Сіз үйіңіздің ауласында, саябақта, орманда немесе тіпті
								балкондағы құмыраға ағаш отырғыза аласыз.
							</p>
						</div>
						<button className="border-2 rounded-full w-full py-3 text-lg bg-white duration-300 text-neutral-600 hover:text-black hover:border-black">
							Бізге қосылыңыз
						</button>
					</div>

					{/* second */}
					<div className="bg-black rounded-3xl w-1/4 h-full relative overflow-hidden group">
						<Image
							src="/header.jpg"
							fill
							alt=""
							className={clsx(
								"object-cover transition-all group-hover:scale-110 duration-500",
								{
									"opacity-60": choosenMindet,
								}
							)}
						/>
						<p
							className={clsx(
								"relative text-white text-2xl p-6 transition-opacity duration-500 ease-in-out transform",
								{
									"opacity-0 translate-y-2": !choosenMindet,
									"opacity-100 translate-y-0": choosenMindet,
								}
							)}>
							{mindet}
						</p>
					</div>

					{/* third */}
					<div className="bg-white rounded-3xl border-2 border-green-600 text-xl w-2/4 h-full relative flex flex-col justify-between overflow-hidden">
						{mindetter.map((mindet) => (
							<p
								key={mindet.title}
								className={clsx(
									"flex items-center w-full h-full px-10 transition-all",
									{
										"bg-green-600 text-white": choosenMindet === mindet.id,
									}
								)}
								onMouseEnter={() => {
									if (mindet.body) {
										handleMindet(mindet.body, mindet.id);
									}
								}}>
								{mindet.title}
							</p>
						))}
					</div>
				</motion.div>

				<div className="flex h-[50vh] gap-8 *:transition-all">
					{News.map((news) => (
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.5, duration: 0.75 }}
							viewport={{ once: true }}
							key={news.title}
							className={clsx(
								"w-[33.3%] hover:flex-grow h-full duration-1000 bg-white rounded-3xl p-6 space-y-4 overflow-hidden border-2 border-transparent hover:border-green-600"
							)}>
							{/* <div className="rounded-3xl w-full h-[60%] bg-black/5"></div> */}
							<p className="font-medium text-3xl">{news.title}</p>
							<p className="text-lg tracking-tight line-clamp-[12]">
								{news.body}
							</p>
						</motion.div>
					))}
				</div>

				{/* sections -- end */}
			</section>
		</div>
	);
}
