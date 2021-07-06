import { FLIPOptions } from '../types';

export function runFLIP(
	firstRect,
	lastRect,
	el: Element,
	options: FLIPOptions = {
		duration: 300,
		easing: 'ease-in-out',
		direction: 'forwards',
	}
) {
	// Deltas
	const dy = firstRect.top - lastRect.top;
	const dx = firstRect.left - lastRect.left;
	const dh = firstRect.height / lastRect.height;
	const dw = firstRect.width / lastRect.width;

	const animateFlip = el.animate(
		[
			{
				transformOrigin: 'top left',
				transform: `translate3d(${dx}px, ${dy}px, 0) scale(${dw}, ${dh})`,
			},
			{
				transformOrigin: 'top left',
				transform: 'none',
			},
		],
		{
			duration: options.duration,
			easing: options.easing,
			fill: 'both',
		}
	);

	// TODO: Child elements with the data-maintain attribute will not scale during FLIP

	if (options.direction === 'reverse') {
		animateFlip.reverse();
	} else {
		animateFlip.play();
	}

	if (options.done) {
		// @ts-ignore
		animateFlip.onfinish = options.done;
	}
}
