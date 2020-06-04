<script>
import { points, started } from '../store/index.js';

import ShapeContainer from '../components/ShapeContainer.svelte';
import Circle from '../components/Circle.svelte';
import Square from '../components/Square.svelte';
import Triangle from '../components/Triangle.svelte';

export let shape;

const handleAddPoints = () => {
  if ($started) {
    points.update(point => point + shape.pointsRate);
  }
};

</script>

<div class="Shape">
  {#if shape.shape === 'circle'}
    <ShapeContainer onAddPoints={handleAddPoints} speed={shape.speed}>
      <Circle color={shape.color} />
    </ShapeContainer>
  {/if}
  {#if shape.shape === 'square'}
    <ShapeContainer onAddPoints={handleAddPoints} speed={shape.speed}>
      <Square color={shape.color} />
    </ShapeContainer>
  {/if}
  {#if shape.shape === 'triangle'}
    <ShapeContainer onAddPoints={handleAddPoints} speed={shape.speed}>
      <Triangle color={shape.color} />
    </ShapeContainer>
  {/if}
</div>