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
			<Board shapes={shapes} />
		</div>
		<div class="Main-Aside-container">
			<Aside onStart={handleStart} shapeDict={shapeDict} onAddShape={handleAddShape} />
		</div>
	</div>
</main>
