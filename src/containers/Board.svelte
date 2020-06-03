<script>
import ShapeContainer from '../components/ShapeContainer.svelte';
import Square from '../components/Square.svelte';
import Circle from '../components/Circle.svelte';

export let shapes;
</script>

<style>
.Board-container {
  position: relative;
  background-color: #F3F3F3;
  width: 100%;
  height: 500px;
}
</style>

<div class="Board">
  <div id="Board-container" class="Board-container">
    {#each shapes as shape}
      {#if shape.shape === 'square'}
        <ShapeContainer>
          <Square {...shape} />
        </ShapeContainer>
      {/if}
      {#if shape.shape === 'circle'}
        <ShapeContainer>
          <Circle {...shape} />
        </ShapeContainer>
      {/if}
    {/each}
  </div>
</div>
