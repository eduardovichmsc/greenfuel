"use client";
import { MoveUpRightIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import clsx from "clsx";

import { Nav } from "@/app/components/Nav";
import { mindetter } from "@/app/store/static";

export default function Home() {
	const [choosenMindet, setChoosenMindet] = useState<number | undefined>(0);
	const [mindet, setMindet] = useState<string>("");

	const handleMindet = (value, id) => {
		setMindet(value);
		setChoosenMindet(id);
	};

	return (
		<div className="space-y-8">
			<div className="flex gap-6 w-full h-[90vh]">
				<div className="bg-white w-1/2 h-full rounded-3xl relative order-2">
					<Image src="/header.jpg" fill alt="" className="rounded-3xl" />
				</div>
				<div className="flex flex-col justify-between bg-white w-1/2 h-full p-6 rounded-3xl order-1">
					<Nav />
					<div className="space-y-8">
						<span className="text-6xl relative">
							Табиғатқа қамқорлық
							<br /> Қоғамды біріктіру
						</span>
						<p className="text-xl leading-tight text-left ">
							Біздің әлемімізді және балаларымыздың өмірін қауіпсіз ету,
							<br /> біз өмір сүретін жерлердің экологиясы туралы сенімді
							ақпарат алу
							<br /> артық талаптар емес, бұлар ақылға қонымды адамның кәдімгі
							қажеттіліктері.
						</p>
						<div className="flex h-14">
							<button className="border-2 rounded-full h-full px-8 text-xl">
								Байланысыңыз
							</button>
							<button className="border-2 rounded-full flex justify-center items-center size-14">
								<MoveUpRightIcon />
							</button>
						</div>
					</div>
				</div>
			</div>

			<section className="space-y-8">
				{/* sections -- start */}
				<div className="relative w-full bg-white rounded-3xl rounded-bl-none flex flex-col justify-center p-6 h-[90vh]">
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
							<button className="border-2 rounded-full h-full px-8 text-lg bg-white text-black">
								Байланысыңыз
							</button>
							<button className="border-2 rounded-full flex justify-center items-center size-12 bg-white text-black">
								<MoveUpRightIcon />
							</button>
						</div>
					</div>
				</div>

				<div className="flex h-[50vh] gap-8">
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
						<button className="border-2 rounded-full w-full py-3 text-lg bg-white text-black">
							Бізге қосылыңыз
						</button>
					</div>

					{/* second */}
					<div className="bg-black rounded-3xl w-1/4 h-full relative overflow-hidden">
						<Image
							src="/header.jpg"
							fill
							alt=""
							className={clsx("object-cover transition-all", {
								"opacity-60": choosenMindet,
							})}
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
								className={clsx("w-full p-6 px-10 transition-all", {
									"bg-green-600 text-white": choosenMindet == mindet.id,
								})}
								onMouseEnter={() => handleMindet(mindet.body, mindet.id)}>
								{mindet.title}
							</p>
						))}
					</div>
				</div>

				<div className="flex h-[60vh] gap-8">
					<div className="w-3/5 h-full bg-white rounded-3xl p-6 space-y-4">
						<div className="rounded-3xl w-full h-[70%] bg-black/5"></div>
						<p className="font-medium text-3xl">Green Counter</p>
						<p className="text-xl">
							Have reliable information about the ecology of the places where we
							live are not overstated requirements, these are the normal needs
							of a reasonable person.
						</p>
					</div>
					<div className="w-2/5 h-full bg-white rounded-3xl p-6 space-y-4">
						<div className="rounded-3xl w-full h-[70%] bg-black/5"></div>
						<p className="font-medium text-3xl">Green Career</p>
						<p className="text-xl">
							A worldwide flash mob of good environmental deeds for everyone who
							loves nature and shares &quot;green&quot; values.
						</p>
					</div>
				</div>

				{/* sections -- end */}
			</section>
		</div>
	);
}
