import * as mc from '@minecraft/server';

mc.world.afterEvents.itemUse.subscribe( data => {
    const player = data.source;
    const item = data.itemStack;
    const playerInventory = player.getComponent("minecraft:inventory").container;
    if (item) {
    if (item.typeId == "bg:destruction_catalyst") {
    if (player.hasTag('gunpowder') && !player.isSneaking) {
    if (item.getLore().length == 0) {

       player.runCommand("clear @s gunpowder 0 1");
       item.setLore([
      'Gunpowder Amount:', '1'
         ]);
        } 
        else {
        let gunpowders = parseInt(item.getLore()[1]);
        gunpowders += 1;
        player.runCommand("clear @s gunpowder 0 1");
        let gunpowders2 = String(gunpowders);
        let lore = item.getLore();
        lore[1] = gunpowders2;
        item.setLore(lore);
        }

        player.removeTag('gunpowder');
        playerInventory.setItem(player.selectedSlot, item);
        }
    }}
});

mc.world.afterEvents.playerInteractWithBlock.subscribe( data => {
    const block = data.block;
    const player = data.player;
    const item = data.itemStack;
    const playerInventory = player.getComponent("minecraft:inventory").container;
    if (item && item.typeId == "bg:destruction_catalyst" && player.isSneaking && block) {
         let gunpowders = parseInt(item.getLore()[1]);
         if (gunpowders >= 1) {

            gunpowders -= 1;
            player.runCommand(`execute positioned ${block.location.x} ${block.location.y} ${block.location.z} run function destruction_catalyst`);
            let gunpowders2 = String(gunpowders);
            let lore = item.getLore();
            lore[1] = gunpowders2;
            item.setLore(lore);
            playerInventory.setItem(player.selectedSlot, item);
    }}
});