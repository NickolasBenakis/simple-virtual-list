import { scrollState } from "./index.js";
/**
 *
 * Sets values to States properties
 * @propertyName {String} property Name of the State
 * @value
 */

export const setScrollState = (propertyName, value) => {
	return (scrollState[propertyName.toString()] = value);
};
