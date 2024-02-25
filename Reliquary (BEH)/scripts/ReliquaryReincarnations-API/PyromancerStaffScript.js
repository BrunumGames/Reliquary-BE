import * as mc from '@minecraft/server';

mc.system.runInterval(() => {
    let players = mc.world.getAllPlayers();
    players.forEach(player => {
    let playerInventory = player.getComponent("minecraft:inventory").container;
    let item = playerInventory.getItem(player.selectedSlot);
    if (item) {
       if (item.typeId == "bg:salamander_eye" || item.typeId == "bg:pyromancer_staff") {
           player.extinguishFire();
    }}
  })
}, 1);

mc.world.afterEvents.itemUse.subscribe( data => {
    const player = data.source;
    const item = data.itemStack;
    const playerInventory = player.getComponent("minecraft:inventory").container;
    if (item) {
    if (item.typeId == "bg:pyromancer_staff") {
    if (!player.isSneaking) {
    if (player.hasTag('blaze_powder')) {
    if (item.getLore().length == 0) {

       player.runCommand("clear @s blaze_powder 0 1");
       item.setLore([
      'Blaze Powder Amount:', '1', 'Fireball Amount', '0'
         ]);
        }
        else {
        let blaze_powders = parseInt(item.getLore()[1]);
        blaze_powders += 1;
        player.runCommand("clear @s blaze_powder 0 1");
        let blaze_powders2 = String(blaze_powders);
        let lore = item.getLore();
        lore[1] = blaze_powders2;
        item.setLore(lore);
        }

        player.removeTag('blaze_powder');
        playerInventory.setItem(player.selectedSlot, item);
    } 
    if (player.hasTag('fireball')) {
    if (item.getLore().length == 0) {

       player.runCommand("clear @s fireball 0 1");
       item.setLore([
      'Blaze Powder Amount:', '0', 'Fireball Amount', '1'
         ]);
        }
        else {
        let fireballs = parseInt(item.getLore()[3]);
        fireballs += 1;
        player.runCommand("clear @s fireball 0 1");
        let fireballs2 = String(fireballs);
        let lore = item.getLore();
        lore[3] = fireballs2;
        item.setLore(lore);
        }

        player.removeTag('fireball');
        playerInventory.setItem(player.selectedSlot, item);
    }} else {

       let lore = item.getLore();
       let blaze_powders = parseInt(item.getLore()[1]);
       if (blaze_powders >= 1) {
       player.runCommand("replaceitem entity @s slot.weapon.mainhand 0 bg:pyromancer_staff2");
       let item2 = playerInventory.getItem(player.selectedSlot);
       item2.setLore(lore);
       playerInventory.setItem(player.selectedSlot, item2);
       } else {

       let lore = item.getLore();
       let fireballs = parseInt(item.getLore()[3]);
       if (fireballs >= 1) {
       player.runCommand("replaceitem entity @s slot.weapon.mainhand 0 bg:pyromancer_staff3");
       let item2 = playerInventory.getItem(player.selectedSlot);
       item2.setLore(lore);
       playerInventory.setItem(player.selectedSlot, item2);
       } else {

       let lore = item.getLore();
       player.runCommand("replaceitem entity @s slot.weapon.mainhand 0 bg:pyromancer_staff4");
       let item2 = playerInventory.getItem(player.selectedSlot);
       item2.setLore(lore);
       playerInventory.setItem(player.selectedSlot, item2);
       }}
    }}

    if (item.typeId == "bg:pyromancer_staff2") {
    if (!player.isSneaking) {

       if (player.hasTag('pyromancer_staff_cooldown')) {
         let blaze_powders = parseInt(item.getLore()[1]);
         if (blaze_powders >= 1) {

            blaze_powders -= 1;
            let blaze_powders2 = String(blaze_powders);
            let lore = item.getLore();
            lore[1] = blaze_powders2;
            item.setLore(lore);
            playerInventory.setItem(player.selectedSlot, item);
         }
         if (blaze_powders == 0) {

            let lore = item.getLore();
             player.runCommand("replaceitem entity @s slot.weapon.mainhand 0 bg:pyromancer_staff");
            let item2 = playerInventory.getItem(player.selectedSlot);
            item2.setLore(lore);
             playerInventory.setItem(player.selectedSlot, item2);
        }
        player.removeTag('pyromancer_staff_cooldown');

        }} else {

       let lore = item.getLore();
       player.runCommand("replaceitem entity @s slot.weapon.mainhand 0 bg:pyromancer_staff5");
       let item2 = playerInventory.getItem(player.selectedSlot);
       item2.setLore(lore);
       playerInventory.setItem(player.selectedSlot, item2);
    }}

    if (item.typeId == "bg:pyromancer_staff5") {
    if (player.isSneaking) {

       let lore = item.getLore();
       let fireballs = parseInt(item.getLore()[3]);
       if (fireballs >= 1) {
       player.runCommand("replaceitem entity @s slot.weapon.mainhand 0 bg:pyromancer_staff3");
       let item2 = playerInventory.getItem(player.selectedSlot);
       item2.setLore(lore);
       playerInventory.setItem(player.selectedSlot, item2);
       } else {

       let lore = item.getLore();
       player.runCommand("replaceitem entity @s slot.weapon.mainhand 0 bg:pyromancer_staff4");
       let item2 = playerInventory.getItem(player.selectedSlot);
       item2.setLore(lore);
       playerInventory.setItem(player.selectedSlot, item2);
       }
    }}

    if (item.typeId == "bg:pyromancer_staff3") {
    if (!player.isSneaking) {

       if (player.hasTag('pyromancer_staff_cooldown')) {
         let fireballs = parseInt(item.getLore()[3]);
         if (fireballs >= 1) {

            fireballs -= 1;
            let fireballs2 = String(fireballs);
            let lore = item.getLore();
            lore[3] = fireballs2;
            item.setLore(lore);
            playerInventory.setItem(player.selectedSlot, item);
         }
         if (fireballs == 0) {

            let lore = item.getLore();
             player.runCommand("replaceitem entity @s slot.weapon.mainhand 0 bg:pyromancer_staff");
            let item2 = playerInventory.getItem(player.selectedSlot);
            item2.setLore(lore);
             playerInventory.setItem(player.selectedSlot, item2);
        }
        player.removeTag('pyromancer_staff_cooldown');

        }} else {

       let lore = item.getLore();
       player.runCommand("replaceitem entity @s slot.weapon.mainhand 0 bg:pyromancer_staff4");
       let item2 = playerInventory.getItem(player.selectedSlot);
       item2.setLore(lore);
       playerInventory.setItem(player.selectedSlot, item2);
    }}

    if (item.typeId == "bg:pyromancer_staff4") {
    if (player.isSneaking) {

       let lore = item.getLore();
       player.runCommand("replaceitem entity @s slot.weapon.mainhand 0 bg:pyromancer_staff");
       let item2 = playerInventory.getItem(player.selectedSlot);
       item2.setLore(lore);
       playerInventory.setItem(player.selectedSlot, item2);
        }
    }}
});

mc.world.afterEvents.playerInteractWithBlock.subscribe( data => {
    const block = data.block;
    const player = data.player;
    const item = data.itemStack;
    const playerInventory = player.getComponent("minecraft:inventory").container;
    if (item && item.typeId == "bg:pyromancer_staff5" && block) {

         let blaze_powders = parseInt(item.getLore()[1]);
         if (blaze_powders >= 1) {

            let entities = block.dimension.getEntities({location:block.location, minDistance: 0, maxDistance: 5})
            entities.forEach(entity => {

            mc.system.runTimeout(() => {
             
            entity.runCommand("damage @s 4 fire");

            }, 10);
            entity.setOnFire(40, true);
            })
            player.runCommand(`particle "minecraft:lava_particle" ${block.location.x} ${block.location.y} ${block.location.z}`);
            player.runCommand(`particle "minecraft:lava_particle" ${block.location.x} ${block.location.y} ${block.location.z}`);
            player.runCommand(`particle "minecraft:lava_particle" ${block.location.x} ${block.location.y} ${block.location.z}`);
            player.runCommand(`particle "minecraft:lava_particle" ${block.location.x} ${block.location.y} ${block.location.z}`);
            player.runCommand(`particle "minecraft:lava_particle" ${block.location.x} ${block.location.y} ${block.location.z}`);
            blaze_powders -= 1;
            let blaze_powders2 = String(blaze_powders);
            let lore = item.getLore();
            lore[1] = blaze_powders2;
            item.setLore(lore);
            playerInventory.setItem(player.selectedSlot, item);
    }}
    if (item && item.typeId == "bg:pyromancer_staff4") {

      
       player.runCommand("playsound fire.ignite @p");
       playerInventory.setItem(player.selectedSlot, item);
    }
});