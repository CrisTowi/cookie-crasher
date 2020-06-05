<script>
import { points, started, time, finalPoints } from '../store';

export let onAddShape;
export let shapeDict;
</script>

<style>
.aside-button-container {
  margin: 20px 0px;
  display: flex;
  flex-direction: column;
}

.aside-button {
  background-color: white;
  border: none;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  font-weight: 600;
}

.aside-button.circle {
  border: 2px solid #C15F4B;
  color: #C15F4B;
}

.aside-button.triangle {
  border: 2px solid #87AD5B;
  color: #87AD5B;
}

.aside-button.square {
  border: 2px solid #3D7BA0;
  color: #3D7BA0;
}

.aside-button:disabled,.aside-button[disabled] {
  color: #A5A5A5;
  border: 2px solid #A5A5A5;
}

.Aside-count {
  margin: 20px 0px;
  text-align: center;
}

.Aside-count-label {
  font-size: 24px;
  font-weight: 400;
}

.Aside-count-amount {
  font-size: 30px;
  font-weight: 600;
}
</style>

<div class="Aside">
  <div class="Aside-count">
    <div class="Aside-count-label">
      Points
    </div>
    <div class="Aside-count-amount">
      {$points}
    </div>
  </div>
  <div class="Aside-count">
    <div class="Aside-count-label">
      Seconds
    </div>
    <div class="Aside-count-amount">
      {$time}
    </div>
  </div>

  <div class="aside-button-container">
    {#each shapeDict as shape}
      <button
        class={`aside-button ${shape.shape}`}
        disabled={$points < shape.cost || !$started}
        on:click={() => onAddShape(shape)}>
        {`Add a ${shape.shape} cookie`}
      </button>
    {/each}
  </div>

  {#if $finalPoints !== 0}
    <div class="Aside-count">
      <div class="Aside-count-label">
        Game Over
      </div>
      <div class="Aside-count-amount">
        {$finalPoints}
      </div>
    </div>
  {/if}
</div>
