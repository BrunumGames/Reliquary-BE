import * as mc from '@minecraft/server';

mc.world.afterEvents.itemUse.subscribe( data => {
    const player = data.source;
    const item = data.itemStack;
    const playerInventory = player.getComponent("minecraft:inventory").container;
    if (item) {
    if (item.typeId == "bg:glacial_staff") {
    if (player.hasTag('snowball') && !player.isSneaking) {
    if (item.getLore().length == 0) {

       player.runCommand("clear @s snowball 0 1");
       item.setLore([
      'Snowball Amount:', '1'
         ]);
        } 
        else {
        let snowballs = parseInt(item.getLore()[1]);
        snowballs += 1;
        player.runCommand("clear @s snowball 0 1");
        let snowballs2 = String(snowballs);
        let lore = item.getLore();
        lore[1] = snowballs2;
        item.setLore(lore);
        }

        player.removeTag('snowball');
        playerInventory.setItem(player.selectedSlot, item);
    }

    if (player.isSneaking) {

       let lore = item.getLore();
       let snowballs = parseInt(item.getLore()[1]);
       if (snowballs >= 1) {
       player.runCommand("replaceitem entity @s slot.weapon.mainhand 0 bg:glacial_staff2");
       let item2 = playerInventory.getItem(player.selectedSlot);
       item2.setLore(lore);
       playerInventory.setItem(player.selectedSlot, item2);
       }
    }}

    if (item.typeId == "bg:glacial_staff2") {
    if (!player.isSneaking) {

       if (player.hasTag('glacial_staff_cooldown')) {
         let snowballs = parseInt(item.getLore()[1]);
         if (snowballs >= 1) {

            snowballs -= 1;
            let snowballs2 = String(snowballs);
            let lore = item.getLore();
            lore[1] = snowballs2;
            item.setLore(lore);
            playerInventory.setItem(player.selectedSlot, item);
         }
         if (snowballs == 0) {

            let lore = item.getLore();
             player.runCommand("replaceitem entity @s slot.weapon.mainhand 0 bg:glacial_staff");
            let item2 = playerInventory.getItem(player.selectedSlot);
            item2.setLore(lore);
             playerInventory.setItem(player.selectedSlot, item2);
        }
        player.removeTag('glacial_staff_cooldown');

        }} else {

       let lore = item.getLore();
       player.runCommand("replaceitem entity @s slot.weapon.mainhand 0 bg:glacial_staff");
       let item2 = playerInventory.getItem(player.selectedSlot);
       item2.setLore(lore);
       playerInventory.setItem(player.selectedSlot, item2);
    }}

    if (item.typeId == "bg:ice_magus_rod") {
    if (player.hasTag('snowball') && !player.isSneaking) {
    if (item.getLore().length == 0) {

       player.runCommand("clear @s snowball 0 1");
       item.setLore([
      'Snowball Amount:', '1'
         ]);
        } 
        else {
        let snowballs = parseInt(item.getLore()[1]);
        snowballs += 1;
        player.runCommand("clear @s snowball 0 1");
        let snowballs2 = String(snowballs);
        let lore = item.getLore();
        lore[1] = snowballs2;
        item.setLore(lore);
        }

        player.removeTag('snowball');
        playerInventory.setItem(player.selectedSlot, item);
    }

    if (player.isSneaking) {

       let lore = item.getLore();
       let snowballs = parseInt(item.getLore()[1]);
       if (snowballs >= 1) {
       player.runCommand("replaceitem entity @s slot.weapon.mainhand 0 bg:ice_magus_rod2");
       let item2 = playerInventory.getItem(player.selectedSlot);
       item2.setLore(lore);
       playerInventory.setItem(player.selectedSlot, item2);
       }
    }}

    if (item.typeId == "bg:ice_magus_rod2") {
    if (!player.isSneaking) {

       if (player.hasTag('ice_magus_rod_cooldown')) {
         let snowballs = parseInt(item.getLore()[1]);
         if (snowballs >= 1) {

            snowballs -= 1;
            let snowballs2 = String(snowballs);
            let lore = item.getLore();
            lore[1] = snowballs2;
            item.setLore(lore);
            playerInventory.setItem(player.selectedSlot, item);
         }
         if (snowballs == 0) {

            let lore = item.getLore();
             player.runCommand("replaceitem entity @s slot.weapon.mainhand 0 bg:glacial_staff");
            let item2 = playerInventory.getItem(player.selectedSlot);
            item2.setLore(lore);
             playerInventory.setItem(player.selectedSlot, item2);
        }
        player.removeTag('ice_magus_rod_cooldown');

        }} else {

       let lore = item.getLore();
       player.runCommand("replaceitem entity @s slot.weapon.mainhand 0 bg:ice_magus_rod");
       let item2 = playerInventory.getItem(player.selectedSlot);
       item2.setLore(lore);
       playerInventory.setItem(player.selectedSlot, item2);
    }}

    if (item.typeId == "bg:harvest_rod") {
    if (player.hasTag('bone_meal') && !player.isSneaking) {
    if (item.getLore().length == 0) {

       player.runCommand("clear @s dye 15 1");
       item.setLore([
      'Bone Meal Amount:', '1'
         ]);
        } 
        else {
        let bone_meals = parseInt(item.getLore()[1]);
        bone_meals += 1;
        player.runCommand("clear @s dye 15 1");
        let bone_meals2 = String(bone_meals);
        let lore = item.getLore();
        lore[1] = bone_meals2;
        item.setLore(lore);
        }

        player.removeTag('bone_meal');
        playerInventory.setItem(player.selectedSlot, item);
    }

    if (player.isSneaking) {

       let lore = item.getLore();
       let bone_meals = parseInt(item.getLore()[1]);
       if (bone_meals >= 1) {
       player.runCommand("replaceitem entity @s slot.weapon.mainhand 0 bg:harvest_rod2");
       let item2 = playerInventory.getItem(player.selectedSlot);
       item2.setLore(lore);
       playerInventory.setItem(player.selectedSlot, item2);
       }
    }}

    if (item.typeId == "bg:harvest_rod2") {
    if (!player.isSneaking) {

       if (player.hasTag('harvest_rod_cooldown')) {
         let bone_meals = parseInt(item.getLore()[1]);
         if (bone_meals >= 1) {

            bone_meals -= 1;
            let bone_meals2 = String(bone_meals);
            let lore = item.getLore();
            lore[1] = bone_meals2;
            item.setLore(lore);
            playerInventory.setItem(player.selectedSlot, item);
         }
         if (bone_meals == 0) {

            let lore = item.getLore();
             player.runCommand("replaceitem entity @s slot.weapon.mainhand 0 bg:harvest_rod");
            let item2 = playerInventory.getItem(player.selectedSlot);
            item2.setLore(lore);
             playerInventory.setItem(player.selectedSlot, item2);
        }
        player.removeTag('harvest_rod_cooldown');

        }} else {

       let lore = item.getLore();
       player.runCommand("replaceitem entity @s slot.weapon.mainhand 0 bg:harvest_rod");
       let item2 = playerInventory.getItem(player.selectedSlot);
       item2.setLore(lore);
       playerInventory.setItem(player.selectedSlot, item2);
    }}

    if (item.typeId == "bg:sojourner_staff") {
    if (player.hasTag('torch') && !player.isSneaking) {
    if (item.getLore().length == 0) {

       player.runCommand("clear @s torch 0 1");
       item.setLore([
      'Torch Amount:', '1'
         ]);
        } 
        else {
        let torches = parseInt(item.getLore()[1]);
        torches += 1;
        player.runCommand("clear @s torch 0 1");
        let torches2 = String(torches);
        let lore = item.getLore();
        lore[1] = torches2;
        item.setLore(lore);
        }

        player.removeTag('torch');
        playerInventory.setItem(player.selectedSlot, item);
    }

    if (player.isSneaking) {

       let lore = item.getLore();
       let torches = parseInt(item.getLore()[1]);
       if (torches >= 1) {
       player.runCommand("replaceitem entity @s slot.weapon.mainhand 0 bg:sojourner_staff2");
       let item2 = playerInventory.getItem(player.selectedSlot);
       item2.setLore(lore);
       playerInventory.setItem(player.selectedSlot, item2);
       }
    }}

    if (item.typeId == "bg:sojourner_staff2") {
    if (!player.isSneaking) {

       if (player.hasTag('sojourner_staff_cooldown')) {
         let torches = parseInt(item.getLore()[1]);
         if (torches >= 1) {

            torches -= 1;
            let torches2 = String(torches);
            let lore = item.getLore();
            lore[1] = torches2;
            item.setLore(lore);
            playerInventory.setItem(player.selectedSlot, item);
         }
         if (torches == 0) {

            let lore = item.getLore();
             player.runCommand("replaceitem entity @s slot.weapon.mainhand 0 bg:sojourner_staff");
            let item2 = playerInventory.getItem(player.selectedSlot);
            item2.setLore(lore);
             playerInventory.setItem(player.selectedSlot, item2);
        }
        player.removeTag('sojourner_staff_cooldown');

       }} else {

       let lore = item.getLore();
       player.runCommand("replaceitem entity @s slot.weapon.mainhand 0 bg:sojourner_staff");
       let item2 = playerInventory.getItem(player.selectedSlot);
       item2.setLore(lore);
       playerInventory.setItem(player.selectedSlot, item2);
        }
    }}
});