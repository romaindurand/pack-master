export function draggablePiece(node: HTMLElement, options: {id: string}) {
  console.log(node, options);

  node.addEventListener('dragstart', (e) => {
    e.dataTransfer?.setData('text/plain', options.id)
  })
  node.setAttribute('draggable', 'true')
}