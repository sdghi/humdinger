import { runFLIP } from './runFLIP';
import { FLIPOptions } from '../types';

/**
 *
 * @param first Selector of first element
 * @param last Selector of last element
 * @param cb Callback function that has access to the last element
 * @param options FLIP animaiton options
 */

export function crossfade(
	first: string,
	last: string,
	cb: CallableFunction,
	options: FLIPOptions
) {
	const firstEl: Element = document.querySelector(first);
	const firstRect = firstEl.getBoundingClientRect();
	// @ts-ignore
	firstEl.style.visibility = 'hidden';

	const lastEl: Element = document.querySelector(last);
	const lastRect = lastEl.getBoundingClientRect();

	cb(lastEl);

	runFLIP(firstRect, lastRect, lastEl, options);
}
