<script>
import Square from './Square.svelte';
import Triangle from './Triangle.svelte';
import Circle from './Circle.svelte';

export let onStart;
export let shapeDict;

</script>

<style>
.Intro {
  height: 100%;
}

.Intro-container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.Intro-content {
  color: white;
  text-align: center;
}

.step {
  font-size: 25px;
  font-weight: 600;
  text-align: center;
}

.Intro-start-game {
  height: 150px;
  width: 150px;
  border: 1px solid white;
  border-radius: 50%;
  color: white;
  background-color: transparent;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  font-size: 24px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s;
}

.Intro-start-game:hover {
  transform: scale(1.05);
}

.Intro-shape {
  margin: 20px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.Intro-shape-label {
  margin-left: 25px;
  font-size: 24px;
  font-weight: 600;
}
</style>

<div class="Intro">
  <div class="Intro-container">
    <div class="Intro-content">
      <p class="step">Welcome to Cookie Crasher!</p>
      <p class="step">1. Click on the shaped cookies to get points</p>
      <p class="step">2. Invest points to get more cookies to click</p>
      <p class="step">3. Cookies generate points automatically every 5 seconds (the most you have the most points you will get!)</p>
      
      <div class="Intro-shape-containter">      
        {#each shapeDict as shape}
          {#if shape.shape === 'circle'}
            <div class="Intro-shape">
              <Circle color={shape.color} />
              <p class="Intro-shape-label" style={`color: ${shape.color};`}>
                {`You get ${shape.pointsRate} point per click a ${shape.pointsRate} point every 5 seconds!`}
              </p>
            </div>
          {/if}
          {#if shape.shape === 'square'}
            <div class="Intro-shape">
              <Square color={shape.color} />
              <p class="Intro-shape-label" style={`color: ${shape.color};`}>
                {`You get ${shape.pointsRate} points per click a ${shape.pointsRate} points every 5 seconds!`}
              </p>
            </div>
          {/if}
          {#if shape.shape === 'triangle'}
            <div class="Intro-shape">
              <Triangle color={shape.color} />
              <p class="Intro-shape-label" style={`color: ${shape.color};`}>
                {`You get ${shape.pointsRate} points per click a ${shape.pointsRate} points every 5 seconds!`}
              </p>
            </div>
          {/if}
        {/each}
      </div>
      <button class="Intro-start-game" on:click={onStart}>Start game</button>
    </div>
  </div>
</div>
