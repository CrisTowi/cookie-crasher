<script>
import ShapeContainer from './ShapeContainer.svelte';
import Circle from './Circle.svelte';
import Square from './Square.svelte';
import Triangle from './Triangle.svelte';

export let shape;
</script>

<div class="Shape">
  {#if shape.shape === 'circle'}
    <ShapeContainer speed={shape.speed}>
      <Circle color={shape.color} />
    </ShapeContainer>
  {/if}
  {#if shape.shape === 'square'}
    <ShapeContainer speed={shape.speed}>
      <Square color={shape.color} />
    </ShapeContainer>
  {/if}
  {#if shape.shape === 'triangle'}
    <ShapeContainer speed={shape.speed}>
      <Triangle color={shape.color} />
    </ShapeContainer>
  {/if}
</div>