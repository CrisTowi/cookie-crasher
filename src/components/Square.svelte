<script>
export let color;
</script>

<style>
.Square {
  width: 100px;
  height: 100px;
  background-color: red;
}
</style>

<div style={`
  background-color: ${color}
`} class="Square">

</div>