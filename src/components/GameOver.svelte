<script>
export let onStart;
export let finalPoints;
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
</style>

<div class="Intro">
  <div class="Intro-container">
    <div class="Intro-content">
      <p class="step">Game Over</p>
      <p class="step">You got {finalPoints} points!</p>
      <button class="Intro-start-game" on:click={onStart}>Start game</button>
    </div>
  </div>
</div>
