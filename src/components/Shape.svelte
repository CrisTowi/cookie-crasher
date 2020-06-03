<script>
import { points } from '../store/index.js';

import ShapeContainer from './ShapeContainer.svelte';
import Circle from './Circle.svelte';
import Square from './Square.svelte';
import Triangle from './Triangle.svelte';

export let shape;

const handleAddPoints = () => {
  points.update(point => point + shape.pointsRate);
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