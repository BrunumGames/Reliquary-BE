import * as mc from '@minecraft/server';

mc.world.afterEvents.itemUse.subscribe( data => {
    const player = data.source;
    const item = data.itemStack;
    const playerInventory = player.getComponent("minecraft:inventory").container;
    if (item) {
    if (item.typeId == "bg:rending_gale") {
    if (player.hasTag('feather') && !player.isSneaking) {
    if (item.getLore().length == 0) {

       player.runCommand("clear @s feather 0 1");
       item.setLore([
      'Feather Amount:', '1'
         ]);
        } 
        else {
        let feathers = parseInt(item.getLore()[1]);
        feathers += 1;
        player.runCommand("clear @s feather 0 1");
        let feathers2 = String(feathers);
        let lore = item.getLore();
        lore[1] = feathers2;
        item.setLore(lore);
        }

        player.removeTag('feather');
        playerInventory.setItem(player.selectedSlot, item);
    }

    if (player.isSneaking) {

       let lore = item.getLore();
       let feathers = parseInt(item.getLore()[1]);
       if (feathers >= 1) {
       player.runCommand("replaceitem entity @s slot.weapon.mainhand 0 bg:rending_gale2");
       let item2 = playerInventory.getItem(player.selectedSlot);
       item2.setLore(lore);
       playerInventory.setItem(player.selectedSlot, item2);
       } else {

       let lore = item.getLore();
       player.runCommand("function rending_gale");
       let item2 = playerInventory.getItem(player.selectedSlot);
       item2.setLore(lore);
       playerInventory.setItem(player.selectedSlot, item2);
       }
    }}

    if (item.typeId == "bg:rending_gale2" && player.isSneaking) {

       if (player.hasTag('rending_gale_cooldown')) {
         let feathers = parseInt(item.getLore()[1]);
         if (feathers >= 1) {

            feathers -= 1;
            let feathers2 = String(feathers);
            let lore = item.getLore();
            lore[1] = feathers2;
            item.setLore(lore);
            let entities = player.dimension.getEntities({location:player.location, minDistance: 1, maxDistance: 5})
            entities.forEach(entity => {
             entity.applyKnockback(entity.location.x - player.location.x, entity.location.z - player.location.z, 2, 0.5);
          });
            playerInventory.setItem(player.selectedSlot, item);
         }
         if (feathers == 0) {

            let lore = item.getLore();
             player.runCommand("replaceitem entity @s slot.weapon.mainhand 0 bg:rending_gale");
            let item2 = playerInventory.getItem(player.selectedSlot);
            item2.setLore(lore);
             playerInventory.setItem(player.selectedSlot, item2);
        }
        player.removeTag('rending_gale_cooldown');
    }}

    if (item.typeId == "bg:rending_gale3" && player.isSneaking) {

       if (player.hasTag('rending_gale_cooldown')) {
         let feathers = parseInt(item.getLore()[1]);
         if (feathers >= 1) {

            feathers -= 1;
            let feathers2 = String(feathers);
            let lore = item.getLore();
            lore[1] = feathers2;
            item.setLore(lore);
            player.runCommand("tp @e[type=mob, r=5] @s");
            playerInventory.setItem(player.selectedSlot, item);
         }
         if (feathers == 0) {

            let lore = item.getLore();
             player.runCommand("replaceitem entity @s slot.weapon.mainhand 0 bg:rending_gale");
            let item2 = playerInventory.getItem(player.selectedSlot);
            item2.setLore(lore);
             playerInventory.setItem(player.selectedSlot, item2);
        }
        player.removeTag('rending_gale_cooldown');
    }}

    if (item.typeId == "bg:rending_gale2" && player.isSneaking) {

       let lore = item.getLore();
       player.runCommand("replaceitem entity @s slot.weapon.mainhand 0 bg:rending_gale3");
       let item2 = playerInventory.getItem(player.selectedSlot);
       item2.setLore(lore);
       playerInventory.setItem(player.selectedSlot, item2);
    }

    if (item.typeId == "bg:rending_gale3" && player.isSneaking) {

       let lore = item.getLore();
       player.runCommand("function rending_gale");
       let item2 = playerInventory.getItem(player.selectedSlot);
       item2.setLore(lore);
       playerInventory.setItem(player.selectedSlot, item2);
    }

    if (item.typeId == "bg:rending_gale4") {
    if (player.isSneaking) {

       let lore = item.getLore();
       player.runCommand("function rending_gale2");
       let item2 = playerInventory.getItem(player.selectedSlot);
       item2.setLore(lore);
       playerInventory.setItem(player.selectedSlot, item2);
        }
    }}
});