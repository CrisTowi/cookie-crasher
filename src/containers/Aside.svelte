<script>
import { points } from '../store';

export let onAddShape;
export let shapeDict;
</script>

<div class="Aside">
  {#each shapeDict as shape}
    <button disabled={$points < shape.cost} on:click={() => onAddShape(shape)}>{`Add a new ${shape.shape}`}</button>
  {/each}
  <div>
    Points: {$points}
  </div>
</div>
