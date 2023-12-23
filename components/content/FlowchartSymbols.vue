<script lang="ts" setup>
const symbolData = [
	{
		name: 'Rectangle / Process',
		description:
			'An operation or action step – Indicates any processing function. Illustrate actions taken, calculations performed, or tasks completed.',
		image: '/posts/flowchart-symbols/Process.webp',
	},
	{
		name: 'Terminator / Pill',
		description: 'Used to clearly define the start or stop point in a process or a flow in your diagram.',
		image: '/posts/flowchart-symbols/Terminator.webp',
	},
	{
		name: 'On-page Connector / Oval',
		description:
			'A jump from one point to another, and replace a long line on a flowchart page. Represented by a small circle with a letter inside',
		image: '/posts/flowchart-symbols/On-page-Connector.webp',
	},
	{
		name: 'Decision / Diamond',
		description:
			'A question or a needed decision in the process between two or more paths in a flowchart. Usually a yes/no or true/false condition that shows a branching point based on different outcomes.',
		image: '/posts/flowchart-symbols/Decision.webp',
	},
	{
		name: 'Input/Output / Parallelogram',
		description:
			'Indicates data inputs and outputs to and from a process, be it a user input, system output, or data exchange with external sources.',
		image: '/posts/flowchart-symbols/Input-Output.webp',
	},
	{
		name: 'Manual Operation / Trapezoid',
		description:
			"A process step that isn't automated, requiring a manual intervention or human action.	Used to show a user tasks, operator involvement, or steps requiring external human input.",
		image: '/posts/flowchart-symbols/ManualOperation.webp',
	},
	{
		name: 'Merge / Triangle',
		description: 'Indicates a step that merge multiple processes into one.',
		image: '/posts/flowchart-symbols/Merge.webp',
	},
	{
		name: 'Preparation / Hexagon',
		description: 'A preparation process step, like setting a switch or setting-up a routine.',
		image: '/posts/flowchart-symbols/Preparation.webp',
	},
	{
		name: 'Database / Cylinder',
		description: 'Indicates a database that allows for searching and sorting',
		image: '/posts/flowchart-symbols/Database.webp',
	},
	{
		name: 'Sequence diagram actor / MISSING IMAGE!',
		description: "A general-purpose visual model providing a standard way to visualize a system's design.",
		image: '/posts/flowchart-symbols/Database.webp',
	},
	{
		name: 'Delay',
		description: 'A waiting period – Indicates a delay in the process.',
		image: '/posts/flowchart-symbols/Delay.webp',
	},
	{
		name: 'Extract – Measurement – Finished Goods',
		description: 'Extract (split processes) or more commonly - a measurement or finished goods',
		image: '/posts/flowchart-symbols/Extract–Measurement–FinishedGoods.webp',
	},
	{
		name: 'Document / MISSING IMAGE!',
		description: 'A printed document or report.',
		image: '/posts/flowchart-symbols/Database.webp',
	},
	{
		name: 'Multiple Documents / MISSING IMAGE!',
		description: 'Represents multiple documents in the process',
		image: '/posts/flowchart-symbols/Database.webp',
	},
	{
		name: 'Off-page Connector / MISSING IMAGE!',
		description: 'Represents multiple documents in the process',
		image: '/posts/flowchart-symbols/Database.webp',
	},
	{
		name: 'Manual input / MISSING IMAGE!',
		description:
			'Represented by quadrilateral, with the top irregularly sloping up from left to right, like the side view of a keyboard. ',
		image: '/posts/flowchart-symbols/Database.webp',
	},
];
</script>

<template>
	<div>
		<ItemList :design-data="symbolData" />
	</div>
</template>

<style scoped></style>
