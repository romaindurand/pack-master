<script lang="ts">
	import { draggablePiece } from "$lib/actions";
	import { grabbedPiece } from "$lib/stores";
  import {v4 as uuid} from "uuid";

  export let shape: Array<Array<number>>;
  export let id = uuid()

</script>

<div class="Piece" use:draggablePiece={{id}}>
  {#each shape as line, y}
    <div class="line">
      {#each line as cell, x}
        <button
          on:mousedown={() => {
            const startDragCoords = {x, y};
            grabbedPiece.set({id, shape, startDragCoords});
            console.log(startDragCoords)
          }}
          class="cell {cell && 'on'}"
          style="background-color: {cell ? '#ccc' : 'transparent'}">
        </button>
      {/each}
    </div>
  {/each}
</div>

<style>
  .line {
    display: flex;
  }

  button {
    border: none;
  }

  .cell {
    width: var(--grid-size);
    height: var(--grid-size);
    box-sizing: border-box;
  }
  .cell.on {
    border: 2px inset #eee;
    cursor: grab;
  }

  .cell.on:active {
    cursor: grabbing;
  }
</style>