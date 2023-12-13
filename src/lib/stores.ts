import { writable } from "svelte/store";
import type { A } from "vitest/dist/types-3c7dbfa5.js";

export const grabbedPiece = writable<GrabbedPiece|null>(null);

interface GrabbedPiece {
  id: string;
  startDragCoords: {x: number, y: number};
  shape: Array<Array<number>>;
}