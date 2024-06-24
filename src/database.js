import components from "./assets/components.png";
import props from "./assets/config.png";
import jsx from "./assets/jsx-ui.png";
import state from "./assets/state-mgmt.png";

export const CONCEPTS = [
	{
		title: "Components",
		img: components,
		desc: "Some desc about components",
	},
	{
		title: "JSX",
		img: jsx,
		desc: "Some desc about JSX",
	},
	{
		title: "State",
		img: state,
		desc: "Some desc about State",
	},
	{
		title: "Props",
		img: props,
		desc: "Some desc about Props",
	},
];

export const EXAMPLES = {
	components: {
		title: "Components",
		desc: "Components are the building blocks of React applications. ",
	},
	jsx: {
		title: "JSX",
		desc: "JSX is a syntax extension to JavaScript. ",
	},
	props: {
		title: "Props",
		desc: "They are like function arguments.",
	},
	state: {
		title: "State",
		desc: "State allows React components to change their output in response to user actions.",
	},
};
