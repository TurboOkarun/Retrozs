// engine.js — runtime, renderer, physics, basic player
import { TILE_SIZE, TILES, getTileById } from './tiles.js';


const canvas = document.getElementById('editor-canvas');
const ctx = canvas.getContext('2d');


// Runtime state
export const Runtime = {
mode: 'edit', // or 'play'
map: { w:40,h:15, tiles: [] },
player: { x:64,y:64, vx:0, vy:0, w:20,h:24, onGround:false },
gravity: 1100,
keys: {},
time: 0
};


// initialize empty map
export function newMap(w,h){
Runtime.map.w = w; Runtime.map.h = h; Runtime.map.tiles = new Array(w*h).fill(0);
}


if(!Runtime.map.tiles || Runtime.map.tiles.length===0) newMap(40,15);


// helpers
export function idx(x,y){return y*Runtime.map.w + x}
export function setTile(x,y,id){ if(x<0||y<0||x>=Runtime.map.w||y>=Runtime.map.h) return; Runtime.map.tiles[idx(x,y)] = id }
export function getTile(x,y){ if(x<0||y<0||x>=Runtime.map.w||y>=Runtime.map.h) return 0; return Runtime.map.tiles[idx(x,y)] }


// rendering
export function render(camera){
ctx.clearRect(0,0,canvas.width,canvas.height);
const zoom = camera.zoom || 2;
const vw = Math.floor(canvas.width / (TILE_SIZE * zoom));
const vh = Math.floor(canvas.height / (TILE_SIZE * zoom));
const ox = Math.floor(camera.x);
const oy = Math.floor(camera.y);


for(let y=0;y<Runtime.map.h;y++){
for(let x=0;x<Runtime.map.w;x++){
const id = getTile(x,y);
const tile = getTileById(id);
const sx = Math.floor((x-ox) * TILE_SIZE * zoom + canvas.width/2 - (Runtime.map.w* TILE_SIZE*zoom)/2);
const sy = Math.floor((y-oy) * TILE_SIZE * zoom + canvas.height/2 - (Runtime.map.h* TILE_SIZE*zoom)/2);
if(id!==0){
ctx.save();
ctx.translate(sx,sy);
ctx.scale(zoom,zoom);
tile.draw(ctx,0,0, Runtime.time);
ctx.restore();
}
// grid
if(document.getElementById('grid-toggle').checked){
ctx.strokeStyle='rgba(255,255,255,0.03)';
ctx.strokeRect(sx+0.5,sy+0.5,Math.max(1,TILE_SIZE*zoom-1),Math.max(1,TILE_SIZE*zoom-1));
}
}
}
export function cameraF
