import { makeElements } from "./mockData";
import "./index.scss";
import _ from "lodash";
import { setScrollState } from "./setScrollState";
import { element } from "./elements";
import virtualScroll from "./virtualScroller";
export const scrollState = {
	scrollTop: 0,
	itemsLength: 0,
	viewportHeight: 2500,
	rowHeight: 450,
	nodePadding: 100
};
window.addEventListener("load", () => {
	// I get the elementsArray
	const elements = makeElements();
	// I set the state
	setScrollState("itemsLength", elements.length);
	console.log(scrollState.itemsLength);
	// I calculate their total height of the content div
	const totalContentHeight = scrollState.itemsLength * 450;
	element.viewport.style.height = totalContentHeight + "px";

	// first initialize
	virtualScroll(
		scrollState.itemsLength,
		scrollState.viewportHeight,
		scrollState.rowHeight,
		scrollState.nodePadding,
		scrollState.scrollTop
	);
	//**  append elements to the root;

	// elements.forEach(el => {
	// 	const root = element.contentRoot;
	// 	root.appendChild(el);
	// });

	//** */
	element.parent.addEventListener(
		"scroll",
		_.throttle(event => {
			requestAnimationFrame(() => {
				// let startNode = Math.floor(event.target.scrollTop / 450) - 20;
				// startNode = Math.max(0, startNode);
				// console.log(event.target.scrollTop, startNode);

				// run on Scroll
				virtualScroll(
					scrollState.itemsLength,
					totalContentHeight,
					scrollState.rowHeight,
					scrollState.nodePadding,
					event.target.scrollTop
				);
			});
		}),
		4000
	);
});
