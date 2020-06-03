<script>
import { points } from './store/index.js';

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
		<Aside shapeDict={shapeDict} onAddShape={handleAddShape} />
	</div>
</main>
