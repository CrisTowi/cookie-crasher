<script>
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
};

</script>

<main>
	<Header />
	<div class="main-container">
		<Board shapes={shapes} />
		<Aside shapeDict={shapeDict} onAddShape={handleAddShape} />
	</div>
</main>

<style>

</style>
