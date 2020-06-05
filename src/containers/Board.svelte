<script>
import Shape from './Shape.svelte';

export let shapes;
</script>

<style>
.Board {
  height: inherit;
}

.Board-container {
  position: relative;
  background-color: #F3F3F3;
  width: 100%;
  height: 100%;
}
</style>

<div class="Board">
  <div id="Board-container" class="Board-container">
    {#each shapes as shape}
      <Shape shape={shape} />
    {/each}
  </div>
</div>
