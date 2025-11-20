// tiles.js — tile definitions and simple sprite drawing helpers
export const TILE_SIZE = 32;


// Each tile has id, name, type (solid, background, hazard), and a draw(ctx,x,y)
export const TILES = [
{ id: 0, name: 'Empty', type: 'empty', draw(ctx,x,y){ /* nothing */ } },
{ id: 1, name: 'Ground', type: 'solid', draw(ctx,x,y){ctx.fillStyle='#7c5a2c';ctx.fillRect(x,y,32,32);ctx.fillStyle='#6b4f26';ctx.fillRect(x+2,y+2,28,12)} },
{ id: 2, name: 'Grass', type: 'solid', draw(ctx,x,y){ctx.fillStyle='#5aa63a';ctx.fillRect(x,y,32,20);ctx.fillStyle='#3f7a2a';ctx.fillRect(x+2,y+12,28,6)} },
{ id: 3, name: 'Brick', type: 'solid', draw(ctx,x,y){ctx.fillStyle='#b65a4a';ctx.fillRect(x,y,32,32);ctx.strokeStyle='#8a3f35';for(let i=0;i<3;i++){ctx.strokeRect(x+2+i*10,y+2,8,28);} } },
{ id: 4, name: 'Coin', type: 'pickup', draw(ctx,x,y, t=0){ctx.beginPath();ctx.fillStyle='#ffd43b';ctx.ellipse(x+16,y+16,9,9,0,0,Math.PI*2);ctx.fill()} },
{ id: 5, name: 'Lava', type: 'hazard', draw(ctx,x,y){ctx.fillStyle='#ff4e26';ctx.fillRect(x,y,32,32);ctx.fillStyle='#b43412';ctx.fillRect(x,y+20,32,12)} },
{ id: 6, name: 'Player Spawn', type: 'meta', draw(ctx,x,y){ctx.fillStyle='#2dd4bf';ctx.fillRect(x+6,y+6,20,20)} }
];


export function getTileById(id){return TILES.find(t=>t.id===id) || TILES[0];}
