<script>
	import Piece from "../components/piece.svelte";

</script>
<div
  class="playground"
  role="grid"
  tabindex="0"
  on:drop={(e) => {
    console.log("dropped");
    e.preventDefault();
    if (e.dataTransfer) e.dataTransfer.dropEffect = "move"
    console.log(e);
  }}
  on:dragover={(e) => {
    e.preventDefault();
    console.log(Math.floor(e.offsetX/60), Math.floor(e.offsetY/60))
  }}
></div>
<div class="storage">
  <Piece shape={[[1, 1, 1], [0, 1, 0]]} />
  <Piece shape={[[1, 1, 1], [1, 0, 0]]} />

</div>

<style>
  .playground {
    width: var(--playground-size);
    height: var(--playground-size);
    border: 2px solid #ccc;
    background-image:
      repeating-linear-gradient(#ccc 0 1px, transparent 1px 100%),
      repeating-linear-gradient(90deg, #ccc 0 1px, transparent 1px 100%);
    background-size: var(--grid-size) var(--grid-size);
    margin-bottom: 1rem;
  }

  .storage {
    padding: 1rem;
    width: calc(300px - 2rem);
    height: calc(300px - 2rem);
    border: 2px solid #ccc;
  }
  :global(.storage > *:first-child) {
    margin-bottom: 10px;
  }
</style>