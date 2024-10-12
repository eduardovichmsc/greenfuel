"use client";
import { FloatingBar } from "@/app/components/FloatingBar";
import SmoothScrollProvider from "@/app/HOC/SmoothScroll";
import { Footer } from "@/app/components/Footer";

import { ReactNode, useEffect, useState } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
	const [windowWidth, setWindowWidth] = useState<number | null>(null);

	// Обновляем ширину окна после рендера на клиенте
	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window?.innerWidth || 0);
		};

		// Устанавливаем начальное значение и слушаем изменения размера
		handleResize();
		window.addEventListener("resize", handleResize);

		// Убираем слушателя при размонтировании компонента
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<div>
			<FloatingBar />
			<SmoothScrollProvider>
				{windowWidth && windowWidth >= 1200 ? (
					<div className="min-w-screen min-h-screen relative bg-black/5 p-6 space-y-8">
						{children}
						<Footer />
					</div>
				) : (
					<div className="min-w-screen min-h-screen flex flex-col items-center justify-center">
						<p>Телефонмен немес планшетпен қарау қазір мүмкін емес</p>
					</div>
				)}
			</SmoothScrollProvider>
		</div>
	);
}
