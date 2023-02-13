import { goto } from '$app/navigation';

export const autoHash = (node: Element) => {
	const callback = (entries: IntersectionObserverEntry[]) => {
		const entry = entries.find((entry) => entry.isIntersecting);

		if (entry) {
			const id = entry.target.id;
			goto(`#${id}`, { replaceState: true, noScroll: true });
		}
	};

	const observer = new IntersectionObserver(callback, {
		threshold: 1
	});

	observer.observe(node);

	return { destroy: () => observer.disconnect() };
};
