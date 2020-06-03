<script>
import Shape from '../components/Shape.svelte';

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
      <Shape shape={shape} />
    {/each}
  </div>
</div>
