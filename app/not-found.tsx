import Link from "next/link";

export default function NotFoundPage() {
	return (
		<div className="min-w-screen min-h-screen relative bg-black/5 p-6 space-y-2 flex flex-col items-center justify-center">
			<p className="text-xl">Сіз іздеген парақшаны таба алмадық</p>
			<Link href={"/"} className="underline-offset-2 underline">
				Бас парақшаға өту
			</Link>
		</div>
	);
}
