import renderItem from "./renderItem";
import { element } from "./elements.js";
export default (
	itemCount,
	viewportHeight,
	rowHeight,
	nodePadding,
	scrollTop
) => {
	let startNode = Math.floor(scrollTop / rowHeight) - nodePadding;
	startNode = Math.max(0, startNode);

	let visibleNodeCount =
		Math.ceil(viewportHeight / rowHeight) + 2 * nodePadding;
	visibleNodeCount = Math.min(itemCount - startNode, visibleNodeCount);

	const offsetY = startNode * rowHeight;
	element.contentRoot.style.transform = `translateY(${offsetY}px)`;

	const visibleChildren = new Array(visibleNodeCount)
		.fill(null)
		.map((_, index) => renderItem(index + startNode));
	console.log(visibleChildren);
	for (let i = 0; i < itemCount; i++) {
		const item = visibleChildren[i];
		if (item !== undefined) {
			element.contentRoot.insertAdjacentHTML("beforeEnd", item);
		}
	}
};
