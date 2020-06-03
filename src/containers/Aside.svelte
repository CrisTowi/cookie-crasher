<script>
export let onAddShape;
export let shapeDict;
</script>

<div class="Aside">
  {#each shapeDict as shape}
    <button on:click={() => onAddShape(shape)}>{`Add a new ${shape.shape}`}</button>
  {/each}
</div>
