import { makeElements } from "./mockData";
import "./index.scss";
import _ from "lodash";
import { setScrollState } from "./setScrollState";
import { element } from "./elements";
export const scrollState = {
	scrollTop: 0,
	renderItem: {},
	itemsLength: 0,
	viewportHeight: 1080,
	rowHeight: 450,
	paddingAhead: 20
};
window.addEventListener("load", () => {
	// I get the elementsArray
	const elements = makeElements();
	// I set the state
	setScrollState("itemsLength", elements.length);
	// I calculate their total height of the content div
	const totalContentHeight = elements.length * 450;
	element.viewport.style.height = totalContentHeight + "px";

	// append elements to the root;
	elements.forEach(el => {
		const root = element.contentRoot;
		root.appendChild(el);
	});

	element.parent.addEventListener("scroll", event => {
		requestAnimationFrame(() => {
			let startNode = Math.floor(event.target.scrollTop / 450) - 20;
			startNode = Math.max(0, startNode);
			console.log(event.target.scrollTop, startNode);
		});
	});
});

// const VirtualScroll = ({
// 	renderItem,
// 	itemCount,
// 	viewportHeight,
// 	rowHeight,
// 	nodePadding
// }) => {
// 	const totalContentHeight = itemCount * rowHeight;
// 	let startNode = Math.floor(scrollTop / rowHeight) - nodePadding;
// 	startNode = Math.max(0, startNode);
// };
