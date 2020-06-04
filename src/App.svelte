<script>
import { onMount } from 'svelte';
import { points, started, time, finalPoints } from './store/index.js';

import Header from './containers/Header.svelte';
import Board from './containers/Board.svelte';
import Aside from './containers/Aside.svelte';

import { shapeDict } from './data';

let shapes = [];

const handleAddShape = (shape) => {
	shapes = [
		...shapes,
		shape,
	]

  points.update(point => point - shape.cost);
};

const handleStart = () => {
  points.update(() => 7);
  started.update(() => true);
	time.update(() => 10);
	finalPoints.update(() => 0);

	const timerInterval = setInterval(handleTimer, 1000);

	function handleTimer() {
		time.update(t => t -= 1);

		if ($time === 0) {
			clearInterval(timerInterval);
			started.update(() => false);
			finalPoints.update(() => $points)
		}
	};
}

</script>

<style>
:global(.shape-figure) {
	cursor: pointer;
}
</style>

<main>
	<Header />
	<div class="main-container">
		<Board shapes={shapes} />
		<Aside onStart={handleStart} shapeDict={shapeDict} onAddShape={handleAddShape} />
	</div>
</main>
