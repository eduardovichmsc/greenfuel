import Image from "next/image";

import { Nav } from "@/app/components/Nav";
import { MoveUpRightIcon } from "lucide-react";

export default function TeamPage() {
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

			<div className=""></div>

			{/* используй в /contacts */}
			<div className="w-full h-[70vh] bg-white relative overflow-hidden rounded-3xl">
				<Image src="/mainland.jpg" fill alt="" />
				<div className="relative bg-[#f2f2f2] w-fit p-6 rounded-3xl rounded-bl-none rounded-tr-none">
					<p className="text-4xl">Әлемді Бірге Жақсартайық!</p>
				</div>
			</div>

			<div className="w-full h-[80vh] bg-black/90 rounded-3xl text-white flex justify-center items-center p-6">
				<form className="space-y-6 w-fit">
					<p className="text-3xl text-center">
						Командамыздың бір <br /> бөлігі болыңыз!
					</p>
					<div className="space-y-3">
						<input
							type="text"
							placeholder="Сіздің аты жөніңіз"
							className="bg-transparent border-b-2 border-white/75 w-full p-3 placeholder:text-white/75"
						/>
						<input
							type="tel"
							placeholder="Сіздің телефон номер"
							className="bg-transparent border-b-2 border-white/75 w-full p-3 placeholder:text-white/75"
						/>
						<button className="border-b-2 p-3 w-full transition-all hover:text-black hover:bg-white">
							Жіберу
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
