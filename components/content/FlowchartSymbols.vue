<script lang="ts" setup>
const symbolData = [
	{
		name: 'Rectangle / Process',
		description: 'An operation or action step – Indicates any processing function. Illustrate actions taken, calculations performed, or tasks completed.',
		image: '/posts/flowchart-symbols/imgs/Process.png',
	},
	{
		name: 'Terminator / Pill',
		description:
			'Used to clearly define the start or stop point in a process or a flow in your diagram.',
		image: '/posts/flowchart-symbols/imgs/Terminator.png',
	},
	{
		name: 'Connector / Oval',
		description: 'A jump from one point to another, and replace a long line on a flowchart page. Represented by a small circle with a letter inside',
		image: '/posts/flowchart-symbols/imgs/Connector.png',
	},
	{
		name: 'Decision / Diamond',
		description:
			'A question or a needed decision in the process between two or more paths in a flowchart. Usually a yes/no or true/false condition that shows a branching point based on different outcomes.',
		image: '/posts/flowchart-symbols/imgs/Decision.png',
	},
	{
		name: 'Input/Output / Parallelogram',
		description: 'Indicates data inputs and outputs to and from a process, be it a user input, system output, or data exchange with external sources.',
		image: '/posts/flowchart-symbols/imgs/Input-Output.png',
	},
	{
		name: 'Manual Operation / Trapezoid',
		description: "A process step that isn't automated, requiring a manual intervention or human action.	Used to show a user tasks, operator involvement, or steps requiring external human input.",
		image: '/posts/flowchart-symbols/imgs/ManualOperation.png',
	},
	{
		name: 'Merge / Triangle',
		description: 'Indicates a step that merge multiple processes into one.',
		image: '/posts/flowchart-symbols/imgs/Merge.png',
	},
	{
		name: 'Preparation / Hexagon',
		description: 'A preparation process step, like setting a switch or setting-up a routine.',
		image: '/posts/flowchart-symbols/imgs/Preparation.png',
	},
	{
		name: 'Database / Cylinder',
		description: 'Indicates a database that allows for searching and sorting',
		image: '/posts/flowchart-symbols/imgs/Database.png',
	},
	{
		name: 'Sequence diagram actor / MISSING IMAGE!',
		description: "A general-purpose visual model providing a standard way to visualize a system's design.",
		image: '/posts/flowchart-symbols/imgs/Database.png',
	},
	{
		name: 'Delay',
		description: 'A waiting period – Indicates a delay in the process.',
		image: '/posts/flowchart-symbols/imgs/Delay.png',
	},
	{
		name: 'Extract – Measurement – Finished Goods',
		description: 'Extract (split processes) or more commonly - a measurement or finished goods',
		image: '/posts/flowchart-symbols/imgs/Extract–Measurement–FinishedGoods.png',
	},
];

</script>

<template>
	<div>
		<ItemList :design-data="symbolData" />
	</div>
</template>

<style scoped></style>