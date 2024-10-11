import { FloatingBar } from "@/app/components/FloatingBar";
import SmoothScrollProvider from "@/app/HOC/SmoothScroll";
import { Footer } from "@/app/components/Footer";

import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<div className="">
			<FloatingBar />
			<SmoothScrollProvider>
				<div className="min-w-screen min-h-screen relative bg-black/5 p-6 space-y-8">
					{children}
					<Footer />
				</div>
			</SmoothScrollProvider>
		</div>
	);
}
