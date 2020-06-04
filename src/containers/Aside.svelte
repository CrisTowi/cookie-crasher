<script>
import { points, started, time, finalPoints } from '../store';

export let onAddShape;
export let onStart;
export let shapeDict;

</script>

<div class="Aside">
  {#each shapeDict as shape}
    <button disabled={$points < shape.cost || !$started} on:click={() => onAddShape(shape)}>{`Add a new ${shape.shape}`}</button>
  {/each}

  <button disabled={$started} on:click={onStart}>Start game</button>
  <div>
    Points: {$points}
  </div>
  <div>
    Time: {$time}
  </div>
  {#if $finalPoints !== 0}
    Game over! {$finalPoints}
  {/if}
</div>
