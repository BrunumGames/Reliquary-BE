import * as mc from '@minecraft/server';

mc.world.afterEvents.playerInteractWithBlock.subscribe( data => {
    const block = data.block;
    const player = data.player;
    const item = data.itemStack;
    const playerInventory = player.getComponent("minecraft:inventory").container;
    const loc_x = String(block.location.x);
    const loc_y = String(block.location.y);
    const loc_z = String(block.location.z);
    if (item && block && block.typeId == "bg:wraith_node") {
    if (item.typeId == "bg:ender_staff") {
    if (item.getLore().length == 0) {
       player.runCommand("replaceitem entity @s slot.weapon.mainhand 0 bg:ender_staff4");
       let item2 = playerInventory.getItem(player.selectedSlot);
       item2.setLore([
      'Ender Pearl Amount:', '0', 'Currently bound to:', loc_x, loc_y, loc_z
         ])
       player.runCommand("playsound mob.endermen.portal @p");
       playerInventory.setItem(player.selectedSlot, item2);
   } else {
       let ender_pearls = item.getLore()[1];
       player.runCommand("replaceitem entity @s slot.weapon.mainhand 0 bg:ender_staff4");
       let item2 = playerInventory.getItem(player.selectedSlot);
       item2.setLore([
      'Ender Pearl Amount:', ender_pearls, 'Currently bound to:', loc_x, loc_y, loc_z
         ])
       player.runCommand("playsound mob.endermen.portal @p");
       playerInventory.setItem(player.selectedSlot, item2);
   }}
    if (item.typeId == "bg:ender_staff4") {
       let ender_pearls = item.getLore()[1];
       item.setLore([
      'Ender Pearl Amount:', ender_pearls, 'Currently bound to:', loc_x, loc_y, loc_z
         ])
       player.runCommand("playsound mob.endermen.portal @p");
       playerInventory.setItem(player.selectedSlot, item);
   }}
});

mc.world.afterEvents.itemUse.subscribe( data => {
    const player = data.source;
    const item = data.itemStack;
    const playerInventory = player.getComponent("minecraft:inventory").container;
    if (item) {
    if (item.typeId == "bg:ender_staff") {
    if (player.hasTag('ender_pearl') && !player.isSneaking) {
    if (item.getLore().length == 0) {

       player.runCommand("clear @s ender_pearl 0 1");
       item.setLore([
      'Ender Pearl Amount:', '1', 'Currently bound to:', 'Nowhere'
         ]);
        } 
        else {
        let ender_pearls = parseInt(item.getLore()[1]);
        ender_pearls += 1;
        player.runCommand("clear @s ender_pearl 0 1");
        let ender_pearls2 = String(ender_pearls);
        let lore = item.getLore();
        lore[1] = ender_pearls2;
        item.setLore(lore);
        }

        player.removeTag('ender_pearl');
        playerInventory.setItem(player.selectedSlot, item);
    }

    if (player.isSneaking) {

       let lore = item.getLore();
       let ender_pearls = parseInt(item.getLore()[1]);
       if (ender_pearls >= 1) {
       player.runCommand("replaceitem entity @s slot.weapon.mainhand 0 bg:ender_staff2");
       let item2 = playerInventory.getItem(player.selectedSlot);
       item2.setLore(lore);
       playerInventory.setItem(player.selectedSlot, item2);
       }
    }}

    if (item.typeId == "bg:ender_staff2" || item.typeId == "bg:ender_staff3") {
    if (!player.isSneaking) {

       if (player.hasTag('ender_staff_cooldown')) {
         let ender_pearls = parseInt(item.getLore()[1]);
         if (ender_pearls >= 1) {

            ender_pearls -= 1;
            let ender_pearls2 = String(ender_pearls);
            let lore = item.getLore();
            lore[1] = ender_pearls2;
            item.setLore(lore);
            playerInventory.setItem(player.selectedSlot, item);
         }
         if (ender_pearls == 0) {

            let lore = item.getLore();
             player.runCommand("replaceitem entity @s slot.weapon.mainhand 0 bg:ender_staff");
            let item2 = playerInventory.getItem(player.selectedSlot);
            item2.setLore(lore);
             playerInventory.setItem(player.selectedSlot, item2);
        }
        player.removeTag('ender_staff_cooldown');
        }
    }}

    if (item.typeId == "bg:ender_staff2" && player.isSneaking) {

       let lore = item.getLore();
       player.runCommand("replaceitem entity @s slot.weapon.mainhand 0 bg:ender_staff3");
       let item2 = playerInventory.getItem(player.selectedSlot);
       item2.setLore(lore);
       playerInventory.setItem(player.selectedSlot, item2);
    }

    if (item.typeId == "bg:ender_staff3" && player.isSneaking) {

       let lore = item.getLore();
       player.runCommand("replaceitem entity @s slot.weapon.mainhand 0 bg:ender_staff");
       let item2 = playerInventory.getItem(player.selectedSlot);
       item2.setLore(lore);
       playerInventory.setItem(player.selectedSlot, item2);
    }

    if (item.typeId == "bg:ender_staff4" && player.isSneaking) {

       let lore = item.getLore();
       player.runCommand("replaceitem entity @s slot.weapon.mainhand 0 bg:ender_staff");
       let item2 = playerInventory.getItem(player.selectedSlot);
       item2.setLore(lore);
       playerInventory.setItem(player.selectedSlot, item2);
    }

    if (item.typeId == "bg:ender_staff4" && !player.isSneaking) {
        const loc_x2 = parseInt(item.getLore()[3]);
        const loc_y2 = parseInt(item.getLore()[4]);
        const loc_z2 = parseInt(item.getLore()[5]);
         let ender_pearls = parseInt(item.getLore()[1]);
         if (ender_pearls >= 1) {

            ender_pearls -= 1;
            player.runCommand(`tp @s ${loc_x2} ${loc_y2} ${loc_z2}`)
            player.runCommand("playsound mob.endermen.portal @p");
            let ender_pearls2 = String(ender_pearls);
            let lore = item.getLore();
            lore[1] = ender_pearls2;
            item.setLore(lore);
            playerInventory.setItem(player.selectedSlot, item);
         }
         if (ender_pearls == 0) {

            let lore = item.getLore();
             player.runCommand("replaceitem entity @s slot.weapon.mainhand 0 bg:ender_staff");
            let item2 = playerInventory.getItem(player.selectedSlot);
            item2.setLore(lore);
             playerInventory.setItem(player.selectedSlot, item2);
        }
        player.runCommand(`execute as @s at @s if block ${loc_x2} ${loc_y2} ${loc_z2} bg:wraith_node run tag @s add hs_wn`)
        if (player.hasTag('hs_wn')) {
         player.removeTag('hs_wn');
        } else {

           let ender_pearls = item.getLore()[1];
           item.setLore([
      'Ender Pearl Amount:', ender_pearls, 'Currently bound to:', 'Nowhere'
      ])
            playerInventory.setItem(player.selectedSlot, item);
           player.runCommand("playsound mob.endermen.death @p");
      }
   }}
})