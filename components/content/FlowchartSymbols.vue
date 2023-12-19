<script lang="ts" setup>
const symbolData = [
{
		name: 'Connector',
		description: 'A jump from one point to another',
		alt: 'The Connector shape',
    image: '/posts/flowchart-symbols/imgs/Connector.png'
	},
  {
    name: 'Data – I/O',
		description: 'Indicates data inputs and outputs to and from a process',
		alt: 'The Data – I/O shape',
    image: '/posts/flowchart-symbols/imgs/Data-I-O.png'
	},
	{
    name: 'Decision',
		description:
    'A question or branch in the process – Indicates a decision point between two or more paths in a flowchart',
		alt: 'The Decision shape',
    image: '/posts/flowchart-symbols/imgs/Decision.png'
	},
  {
    name: 'Delay',
		description: 'A waiting period – Indicates a delay in the process',
		alt: 'The Delay shape',
    image: '/posts/flowchart-symbols/imgs/Delay.png'
	},
	{
    name: 'Database – Magnetic Disk',
		description: 'A database',
		alt: 'The Database – Magnetic Disk shape',
    image: '/posts/flowchart-symbols/imgs/MagneticDisk-Database.png'
	},
	{
    name: 'Merge – Storage',
		description: 'Merge multiple processes into one. Also used to show raw material storage',
		alt: 'The Merge – Storage shape',
    image: '/posts/flowchart-symbols/imgs/Merge-Storage.png'
	},
	{ 
    name: 'Manual Operation', 
    description: "A process step that isn't automated", 
    alt: 'The Manual Operation shape',
    image: '/posts/flowchart-symbols/imgs/ManualOperation.png'
  },
	{
    name: 'Terminator',
		description:
    'A start or stop point in a process – Indicates the beginning or end of a program flow in your diagram.',
		alt: 'The Terminator shape',
    image: '/posts/flowchart-symbols/imgs/Terminator.png'
	},
	{
    name: 'Process',
		description: 'An operation or action step – Indicates any processing function.',
		alt: 'The Process shape',
    image: '/posts/flowchart-symbols/imgs/Process.png'
	},
	{
    name: 'Extract – Measurement – Finished Goods',
		description: 'Extract (split processes) or more commonly - a measurement or finished goods',
		alt: 'The Extract – Measurement – Finished Goods shape',
    image: '/posts/flowchart-symbols/imgs/Extract-Measurement-FinishedGoods.png'
	},
	{
    name: 'Preparation',
		description: 'A preparation or set-up process step',
		alt: 'The Preparation shape',
    image: '/posts/flowchart-symbols/imgs/Preparation.png'
	},
];
</script>

<template>
  <article v-for="symbolItem in symbolData">
		<h3 class="title">{{ symbolItem.name }}</h3>
		<p>{{ symbolItem.description }}</p>
		<img :src="symbolItem.image" :alt="symbolItem.alt" />
		<!-- <div class="btn">
			<router-link :to="thisPageId"> Check out the <strong>{{ title }}</strong> symbol </router-link>
		</div> -->
	</article>
</template>

<style scoped></style>
