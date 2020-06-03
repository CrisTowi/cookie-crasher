<script>
export let color;
</script>

<style>
.Triangle {
  width: 0px;
  height: 0px;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
}
</style>

<div style={`
  border-bottom: 100px solid ${color}
`} class="Triangle shape-figure">

</div>