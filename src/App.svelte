<script>
import { onMount } from 'svelte';
import { points, started, time, finalPoints, shapes } from './store/index.js';

import Header from './containers/Header.svelte';
import Board from './containers/Board.svelte';
import Aside from './containers/Aside.svelte';
import Modal from './containers/Modal.svelte';

import Intro from './components/Intro.svelte';
import GameOver from './components/GameOver.svelte';

import { shapeDict } from './data';

const handleAddShape = (newShape) => {
	shapes.update(s => [...s, newShape]);
  points.update(p => p - newShape.cost);
};

const handleStart = () => {
  points.update(() => 0);
  started.update(() => true);
	time.update(() => 60);
	finalPoints.update(() => 0);
	shapes.update(() => [shapeDict[0]]);

	const timerInterval = setInterval(handleTimer, 1000);

	function handleTimer() {
		time.update(t => t -= 1);

		if ($time === 0) {
			clearInterval(timerInterval);
			started.update(() => false);
			finalPoints.update(() => $points);
			shapes.update(() => []);
		}
	};
}

</script>

<style>
:global(.shape-figure) {
	cursor: pointer;
}

.Main-container {
	margin-top: 50px;
	display: flex;
}

.Main-Board-container {
	width: 80%;
	height: calc(100vh - 65px);
}

.Main-Aside-container {
	width: 20%;
	height: calc(100vh - 65px);
}
</style>

<main>
	<Header />
	<div class="Main-container">
		<div class="Main-Board-container">
			<Board />
		</div>
		<div class="Main-Aside-container">
			<Aside shapeDict={shapeDict} onAddShape={handleAddShape} />
		</div>
	</div>
	<Modal visible={!$started} >
		{#if $finalPoints === 0}
			<Intro shapeDict={shapeDict} onStart={handleStart} />
		{/if}
		{#if $finalPoints !== 0}
			<GameOver finalPoints={$finalPoints} onStart={handleStart} />
		{/if}
	</Modal>
</main>
