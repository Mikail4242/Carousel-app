import { useRef, useEffect, useState } from "react";

export const useHorizontalScroll = () => {
	const elRef = useRef();
	const [totalScroll, setTotalScroll] = useState(0);

	useEffect(() => {
		const el = elRef.current;
		if (el) {
			const onWheel = (e) => {
				if (e.deltaY == 0) return;
				e.preventDefault();
				setTotalScroll((total) => e.deltaY > 0 ? (total <= -50 ? 0 : total - 0.2) : (total >= 0 ? -50 : total + 0.2));
			};
			el.addEventListener("wheel", onWheel);
			return () => el.removeEventListener("wheel", onWheel);
		}
	}, []);
	
	return { elRef, totalScroll };
}


