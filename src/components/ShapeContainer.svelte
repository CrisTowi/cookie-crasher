<script>
import { onMount } from 'svelte';

export let speed = 1;
export let onAddPoints;

const OPTIONS = [1, -1]

const shapeContainerDiv = document.getElementById('Board-container');
let left = shapeContainerDiv.clientWidth / 2;
let top = shapeContainerDiv.clientHeight / 2;
let topMulti = OPTIONS[Math.floor(Math.random() * 2)];
let leftMulti = OPTIONS[Math.floor(Math.random() * 2)];


onMount(() => {
  const clientHeight = shapeContainerDiv.clientHeight;
  const clientWidth = shapeContainerDiv.clientWidth;

  setInterval(() => {
    if (left >= clientWidth - 100) {
      leftMulti = -1;
    } else if (left <= 0) {
      leftMulti = 1;
    }

    if (top >= clientHeight - 100) {
      topMulti = -1;
    } else if (top <= 0) {
      topMulti = 1;
    }

    left += speed * leftMulti;
    top += speed * topMulti;
  }, 10);

  setInterval(onAddPoints, 5000);
});

</script>

<style>
.ShapeContainer {
  position: absolute;
}
</style>

<div id="ShapeContainer" class="ShapeContainer">
  <div 
    on:click={onAddPoints}
    style={`
      top: ${top}px;
      left: ${left}px;
    `}
    class="ShapeContainer">
    <slot />
  </div>
</div>