<div>
  <slot/>
</div>

<style>
  :root {
    --playground-size: 300px;
    --grid-size: calc(var(--playground-size)/5);
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
</style>