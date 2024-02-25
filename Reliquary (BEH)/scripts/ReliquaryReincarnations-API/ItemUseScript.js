import * as mc from '@minecraft/server';

mc.world.afterEvents.itemUse.subscribe( data => {
    const player = data.source;
    const item = data.itemStack;
    const playerInventory = player.getComponent("minecraft:inventory").container;
    if (item) {
    if (item.typeId == "bg:hero_medallion") {
       if (!player.isSneaking && player.level >= 1) {

          if (item.getLore().length == 0) {
          item.setLore([
          'Stores', '1', 'Levels'
          ])
   } else {

          const xp_level = parseInt(item.getLore()[1]);
          if (xp_level < 200) {

          const xp_levelS = String(xp_level + 1);
          item.setLore([
           'Stores', xp_levelS, 'Levels'
          ])
    }}
            playerInventory.setItem(player.selectedSlot, item);
          player.addLevels(-1);
   }

   if (player.isSneaking) {
      if (item.getLore().length > 0) {

          const xp_levelI = parseInt(item.getLore()[1]);
          if (xp_levelI >= 1) {

          const xp_levelS2 = String(xp_levelI - 1);
          item.setLore([
           'Stores', xp_levelS2, 'Levels'
          ])
          player.addLevels(1);
            playerInventory.setItem(player.selectedSlot, item);
        }}
    }}
    if (item.typeId == "bg:shears_of_winter2") {
      let entities = player.dimension.getEntities({location:player.location, minDistance: 0, maxDistance: 5})
       entities.forEach(entity => {
       if (entity.typeId == "minecraft:sheep" && !entity.hasComponent('minecraft:is_sheared')) {

          entity.runCommand('loot spawn ~~~ loot "entities/sheep_shear"');
          entity.runCommand("playsound mob.sheep.shear @s");
          entity.runCommand("event entity @s minecraft:on_sheared");
            }
        })
    }

    if (item.typeId == "bg:void_tear") { 
    if (player.hasTag('vt_mb')) {
    if (!player.isSneaking) {
    if (item.getLore().length == 0) {

       player.runCommand("clear @s bucket 1 1");
       item.setLore([
      'Milk Bucket Amount:', '1'
         ]);
        } 
        else {
        let mbs = parseInt(item.getLore()[1]);
        mbs += 1;
        player.runCommand("clear @s bucket 1 1");
        let mbs2 = String(mbs);
        let lore = item.getLore();
        lore[1] = mbs2;
        item.setLore(lore);
        }

        player.removeTag('vt_mb');
        playerInventory.setItem(player.selectedSlot, item);
    }}

    if (player.isSneaking) {

       let mbs = parseInt(item.getLore()[1]);
         if (mbs >= 1) {

            mbs -= 1;
            player.runCommand("function vt_milk_bucket");
            let mbs2 = String(mbs);
            let lore = item.getLore();
            lore[1] = mbs2;
            item.setLore(lore);
            playerInventory.setItem(player.selectedSlot, item);
         }
         if (mbs == 0) {
            player.runCommand("replaceitem entity @s slot.weapon.mainhand 0 bg:empty_void_tear");
         }
    }}

    if (item.typeId == "bg:void_tear2") { 
    if (player.hasTag('vt_wb')) {
    if (!player.isSneaking) {
    if (item.getLore().length == 0) {

       player.runCommand("clear @s bucket 8 1");
       item.setLore([
      'Water Bucket Amount:', '1'
         ]);
        } 
        else {
        let wbs = parseInt(item.getLore()[1]);
        wbs += 1;
        player.runCommand("clear @s bucket 8 1");
        let wbs2 = String(wbs);
        let lore = item.getLore();
        lore[1] = wbs2;
        item.setLore(lore);
        }

        player.removeTag('vt_wb');
        playerInventory.setItem(player.selectedSlot, item);
    }}

    if (player.isSneaking) {

       let wbs = parseInt(item.getLore()[1]);
         if (wbs >= 1) {

            wbs -= 1;
            player.runCommand("function vt_water_bucket");
            let wbs2 = String(wbs);
            let lore = item.getLore();
            lore[1] = wbs2;
            item.setLore(lore);
            playerInventory.setItem(player.selectedSlot, item);
         }
         if (wbs == 0) {
            player.runCommand("replaceitem entity @s slot.weapon.mainhand 0 bg:empty_void_tear");
         }
    }}

    if (item.typeId == "bg:void_tear3") { 
    if (player.hasTag('vt_lb')) {
    if (!player.isSneaking) {
    if (item.getLore().length == 0) {

       player.runCommand("clear @s bucket 10 1");
       item.setLore([
      'Lava Bucket Amount:', '1'
         ]);
        } 
        else {
        let lbs = parseInt(item.getLore()[1]);
        lbs += 1;
        player.runCommand("clear @s bucket 10 1");
        let lbs2 = String(lbs);
        let lore = item.getLore();
        lore[1] = lbs2;
        item.setLore(lore);
        }

        player.removeTag('vt_lb');
        playerInventory.setItem(player.selectedSlot, item);
    }}

    if (player.isSneaking) {

       let lbs = parseInt(item.getLore()[1]);
         if (lbs >= 1) {

            lbs -= 1;
            player.runCommand("function vt_lava_bucket");
            let lbs2 = String(lbs);
            let lore = item.getLore();
            lore[1] = lbs2;
            item.setLore(lore);
            playerInventory.setItem(player.selectedSlot, item);
         }
         if (lbs == 0) {
            player.runCommand("replaceitem entity @s slot.weapon.mainhand 0 bg:empty_void_tear");
         }
    }}

    if (item.typeId == "bg:void_tear4") { 
    if (player.hasTag('vt_mb')) {
    if (!player.isSneaking) {
    if (item.getLore().length == 0) {

       player.runCommand("clear @s powder_snow_bucket 0 1");
       item.setLore([
      'Powder Snow Bucket Amount:', '1'
         ]);
        } 
        else {
        let psbs = parseInt(item.getLore()[1]);
        psbs += 1;
        player.runCommand("clear @s powder_snow_bucket 0 1");
        let psbs2 = String(psbs);
        let lore = item.getLore();
        lore[1] = psbs2;
        item.setLore(lore);
        }

        player.removeTag('vt_psb');
        playerInventory.setItem(player.selectedSlot, item);
    }}

    if (player.isSneaking) {

       let psbs = parseInt(item.getLore()[1]);
         if (psbs >= 1) {

            psbs -= 1;
            player.runCommand("function vt_powder_snow_bucket");
            let psbs2 = String(psbs);
            let lore = item.getLore();
            lore[1] = psbs2;
            item.setLore(lore);
            playerInventory.setItem(player.selectedSlot, item);
         }
         if (psbs == 0) {
            player.runCommand("replaceitem entity @s slot.weapon.mainhand 0 bg:empty_void_tear");
         }
    }}

    if (item.typeId == "bg:void_tear5") { 
    if (player.hasTag('vt_sb')) {
    if (!player.isSneaking) {
    if (item.getLore().length == 0) {

       player.runCommand("clear @s snowball 0 1");
       item.setLore([
      'Snowball Amount:', '1'
         ]);
        } 
        else {
        let sbs = parseInt(item.getLore()[1]);
        sbs += 1;
        player.runCommand("clear @s snowball 0 1");
        let sbs2 = String(sbs);
        let lore = item.getLore();
        lore[1] = sbs2;
        item.setLore(lore);
        }

        player.removeTag('vt_sb');
        playerInventory.setItem(player.selectedSlot, item);
    }}

    if (player.isSneaking) {

       let sbs = parseInt(item.getLore()[1]);
         if (sbs >= 1) {

            sbs -= 1;
            player.runCommand("function vt_snowball");
            let sbs2 = String(sbs);
            let lore = item.getLore();
            lore[1] = sbs2;
            item.setLore(lore);
            playerInventory.setItem(player.selectedSlot, item);
         }
         if (sbs == 0) {
            player.runCommand("replaceitem entity @s slot.weapon.mainhand 0 bg:empty_void_tear");
         }
    }}

    if (item.typeId == "bg:void_tear6") { 
    if (player.hasTag('vt_ep')) {
    if (!player.isSneaking) {
    if (item.getLore().length == 0) {

       player.runCommand("clear @s ender_pearl 0 1");
       item.setLore([
      'Ender Pearl Amount:', '1'
         ]);
        } 
        else {
        let eps = parseInt(item.getLore()[1]);
        eps += 1;
        player.runCommand("clear @s ender_pearl 0 1");
        let eps2 = String(eps);
        let lore = item.getLore();
        lore[1] = eps2;
        item.setLore(lore);
        }

        player.removeTag('vt_ep');
        playerInventory.setItem(player.selectedSlot, item);
    }}

    if (player.isSneaking) {

       let eps = parseInt(item.getLore()[1]);
         if (eps >= 1) {

            eps -= 1;
            player.runCommand("function vt_ender_pearl");
            let eps2 = String(eps);
            let lore = item.getLore();
            lore[1] = eps2;
            item.setLore(lore);
            playerInventory.setItem(player.selectedSlot, item);
         }
         if (eps == 0) {
            player.runCommand("replaceitem entity @s slot.weapon.mainhand 0 bg:empty_void_tear");
         }
    }}

    if (item.typeId == "bg:void_tear7") { 
    if (player.hasTag('vt_hb')) {
    if (!player.isSneaking) {
    if (item.getLore().length == 0) {

       player.runCommand("clear @s honey_bottle 0 1");
       item.setLore([
      'Honey Bottle Amount:', '1'
         ]);
        } 
        else {
        let hbs = parseInt(item.getLore()[1]);
        hbs += 1;
        player.runCommand("clear @s honey_bottle 0 1");
        let hbs2 = String(hbs);
        let lore = item.getLore();
        lore[1] = hbs2;
        item.setLore(lore);
        }

        player.removeTag('vt_hb');
        playerInventory.setItem(player.selectedSlot, item);
    }}

    if (player.isSneaking) {

       let hbs = parseInt(item.getLore()[1]);
         if (hbs >= 1) {

            hbs -= 1;
            player.runCommand("function vt_honey_bottle");
            let hbs2 = String(hbs);
            let lore = item.getLore();
            lore[1] = hbs2;
            item.setLore(lore);
            playerInventory.setItem(player.selectedSlot, item);
         }
         if (hbs == 0) {
            player.runCommand("replaceitem entity @s slot.weapon.mainhand 0 bg:empty_void_tear");
         }
    }}

    if (item.typeId == "bg:void_tear8") { 
    if (player.hasTag('vt_egg')) {
    if (!player.isSneaking) {
    if (item.getLore().length == 0) {

       player.runCommand("clear @s egg 0 1");
       item.setLore([
      'Egg Amount:', '1'
         ]);
        } 
        else {
        let eggs = parseInt(item.getLore()[1]);
        eggs += 1;
        player.runCommand("clear @s egg 0 1");
        let eggs2 = String(eggs);
        let lore = item.getLore();
        lore[1] = eggs2;
        item.setLore(lore);
        }

        player.removeTag('vt_egg');
        playerInventory.setItem(player.selectedSlot, item);
    }}

    if (player.isSneaking) {

       let eggs = parseInt(item.getLore()[1]);
         if (eggs >= 1) {

            eggs -= 1;
            player.runCommand("function vt_egg");
            let eggs2 = String(eggs);
            let lore = item.getLore();
            lore[1] = eggs2;
            item.setLore(lore);
            playerInventory.setItem(player.selectedSlot, item);
         }
         if (eggs == 0) {
            player.runCommand("replaceitem entity @s slot.weapon.mainhand 0 bg:empty_void_tear");
         }
    }}

    if (item.typeId == "bg:void_tear9") { 
    if (player.hasTag('vt_tc')) {
    if (!player.isSneaking) {
    if (item.getLore().length == 0) {

       player.runCommand("clear @s torch 0 1");
       item.setLore([
      'Torch Amount:', '1'
         ]);
        } 
        else {
        let tcs = parseInt(item.getLore()[1]);
        tcs += 1;
        player.runCommand("clear @s torch 0 1");
        let tcs2 = String(tcs);
        let lore = item.getLore();
        lore[1] = tcs2;
        item.setLore(lore);
        }

        player.removeTag('vt_tc');
        playerInventory.setItem(player.selectedSlot, item);
    }}

    if (player.isSneaking) {

       let tcs = parseInt(item.getLore()[1]);
         if (tcs >= 1) {

            tcs -= 1;
            player.runCommand("function vt_torch");
            let tcs2 = String(tcs);
            let lore = item.getLore();
            lore[1] = tcs2;
            item.setLore(lore);
            playerInventory.setItem(player.selectedSlot, item);
         }
         if (tcs == 0) {
            player.runCommand("replaceitem entity @s slot.weapon.mainhand 0 bg:empty_void_tear");
         }
    }}

    if (item.typeId == "bg:void_tear10") { 
    if (player.hasTag('vt_er')) {
    if (!player.isSneaking) {
    if (item.getLore().length == 0) {

       player.runCommand("clear @s emerald 0 1");
       item.setLore([
      'Emerald Amount:', '1'
         ]);
        } 
        else {
        let ers = parseInt(item.getLore()[1]);
        ers += 1;
        player.runCommand("clear @s emerald 0 1");
        let ers2 = String(ers);
        let lore = item.getLore();
        lore[1] = ers2;
        item.setLore(lore);
        }

        player.removeTag('vt_er');
        playerInventory.setItem(player.selectedSlot, item);
    }}

    if (player.isSneaking) {

       let ers = parseInt(item.getLore()[1]);
         if (ers >= 1) {

            ers -= 1;
            player.runCommand("function vt_emerald");
            let ers2 = String(ers);
            let lore = item.getLore();
            lore[1] = ers2;
            item.setLore(lore);
            playerInventory.setItem(player.selectedSlot, item);
         }
         if (ers == 0) {
            player.runCommand("replaceitem entity @s slot.weapon.mainhand 0 bg:empty_void_tear");
         }
    }}

    if (item.typeId == "bg:void_tear11") { 
    if (player.hasTag('vt_ar')) {
    if (!player.isSneaking) {
    if (item.getLore().length == 0) {

       player.runCommand("clear @s arrow 0 1");
       item.setLore([
      'Arrow Amount:', '1'
         ]);
        } 
        else {
        let ars = parseInt(item.getLore()[1]);
        ars += 1;
        player.runCommand("clear @s arrow 0 1");
        let ars2 = String(ars);
        let lore = item.getLore();
        lore[1] = ars2;
        item.setLore(lore);
        }

        player.removeTag('vt_ar');
        playerInventory.setItem(player.selectedSlot, item);
    }}

    if (player.isSneaking) {

       let ars = parseInt(item.getLore()[1]);
         if (ars >= 1) {

            ars -= 1;
            player.runCommand("function vt_arrow");
            let ars2 = String(ars);
            let lore = item.getLore();
            lore[1] = ars2;
            item.setLore(lore);
            playerInventory.setItem(player.selectedSlot, item);
         }
         if (ars == 0) {
            player.runCommand("replaceitem entity @s slot.weapon.mainhand 0 bg:empty_void_tear");
        }}
    }}
})