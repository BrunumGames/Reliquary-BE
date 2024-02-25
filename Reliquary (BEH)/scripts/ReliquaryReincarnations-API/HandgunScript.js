import * as mc from '@minecraft/server';

mc.world.afterEvents.itemUse.subscribe( data => {
    const player = data.source;
    const item = data.itemStack;
    const inv = player.getComponent("minecraft:inventory").container;
    if (item) {
    if (item.typeId == "bg:handgun") {
    if (player.hasTag('magazine')) {

       player.runCommand("replaceitem entity @s slot.weapon.mainhand 0 bg:handgun_neutral");
       player.runCommand("clear @s bg:magazine 0 1");
       player.runCommand("function empty_magazine");
       player.runCommand("playsound custom.handgun_load @a ~~~");

       let item2 = inv.getItem(player.selectedSlot);
       item2.setLore([
      'Neutral Shot Amount:', '8'
         ]);
       inv.setItem(player.selectedSlot, item2);
        }
    if (player.hasTag('blaze_magazine')) {

       player.runCommand("replaceitem entity @s slot.weapon.mainhand 0 bg:handgun_blaze");
       player.runCommand("clear @s bg:blaze_magazine 0 1");
       player.runCommand("function empty_magazine");
       player.runCommand("playsound custom.handgun_load @a ~~~");

       let item2 = inv.getItem(player.selectedSlot);
       item2.setLore([
      'Blaze Shot Amount:', '8'
         ]);
       inv.setItem(player.selectedSlot, item2);
        }
    if (player.hasTag('buster_magazine')) {

       player.runCommand("replaceitem entity @s slot.weapon.mainhand 0 bg:handgun_buster");
       player.runCommand("clear @s bg:buster_magazine 0 1");
       player.runCommand("function empty_magazine");
       player.runCommand("playsound custom.handgun_load @a ~~~");

       let item2 = inv.getItem(player.selectedSlot);
       item2.setLore([
      'Buster Shot Amount:', '8'
         ]);
       inv.setItem(player.selectedSlot, item2);
        }
    if (player.hasTag('concussive_magazine')) {

       player.runCommand("replaceitem entity @s slot.weapon.mainhand 0 bg:handgun_concussive");
       player.runCommand("clear @s bg:concussive_magazine 0 1");
       player.runCommand("function empty_magazine");
       player.runCommand("playsound custom.handgun_load @a ~~~");

       let item2 = inv.getItem(player.selectedSlot);
       item2.setLore([
      'Concussive Shot Amount:', '8'
         ]);
       inv.setItem(player.selectedSlot, item2);
        }
    if (player.hasTag('ender_magazine')) {

       player.runCommand("replaceitem entity @s slot.weapon.mainhand 0 bg:handgun_sand");
       player.runCommand("clear @s bg:ender_magazine 0 1");
       player.runCommand("function empty_magazine");
       player.runCommand("playsound custom.handgun_load @a ~~~");

       let item2 = inv.getItem(player.selectedSlot);
       item2.setLore([
      'Ender Shot Amount:', '8'
         ]);
       inv.setItem(player.selectedSlot, item2);
        }
    if (player.hasTag('exorcism_magazine')) {

       player.runCommand("replaceitem entity @s slot.weapon.mainhand 0 bg:handgun_exorcism");
       player.runCommand("clear @s bg:exorcism_magazine 0 1");
       player.runCommand("function empty_magazine");
       player.runCommand("playsound custom.handgun_load @a ~~~");

       let item2 = inv.getItem(player.selectedSlot);
       item2.setLore([
      'Exorcism Shot Amount:', '8'
         ]);
       inv.setItem(player.selectedSlot, item2);
        }
    if (player.hasTag('sand_magazine')) {

       player.runCommand("replaceitem entity @s slot.weapon.mainhand 0 bg:handgun_sand");
       player.runCommand("clear @s bg:sand_magazine 0 1");
       player.runCommand("function empty_magazine");
       player.runCommand("playsound custom.handgun_load @a ~~~");

       let item2 = inv.getItem(player.selectedSlot);
       item2.setLore([
      'Sand Shot Amount:', '8'
         ]);
       inv.setItem(player.selectedSlot, item2);
        }
    if (player.hasTag('seeker_magazine')) {

       player.runCommand("replaceitem entity @s slot.weapon.mainhand 0 bg:handgun_seeker");
       player.runCommand("clear @s bg:seeker_magazine 0 1");
       player.runCommand("function empty_magazine");
       player.runCommand("playsound custom.handgun_load @a ~~~");

       let item2 = inv.getItem(player.selectedSlot);
       item2.setLore([
      'Seeker Shot Amount:', '8'
         ]);
       inv.setItem(player.selectedSlot, item2);
        }
    if (player.hasTag('storm_magazine')) {

       player.runCommand("replaceitem entity @s slot.weapon.mainhand 0 bg:handgun_storm");
       player.runCommand("clear @s bg:storm_magazine 0 1");
       player.runCommand("function empty_magazine");
       player.runCommand("playsound custom.handgun_load @a ~~~");

       let item2 = inv.getItem(player.selectedSlot);
       item2.setLore([
      'Storm Shot Amount:', '8'
         ]);
       inv.setItem(player.selectedSlot, item2);
        }
    }
    if (item.typeId == "bg:handgun_neutral" || item.typeId == "bg:handgun_blaze" || item.typeId == "bg:handgun_buster" || item.typeId == "bg:handgun_concussive" || item.typeId == "bg:handgun_ender" || item.typeId == "bg:handgun_exorcism" || item.typeId == "bg:handgun_sand" || item.typeId == "bg:handgun_seeker" || item.typeId == "bg:handgun_storm") {
    if (player.hasTag('handgun_cooldown')) {
        let bullets = parseInt(item.getLore()[1]);
        if (bullets >= 1) {

        bullets -= 1;
        let bullets2 = String(bullets);
        let lore = item.getLore();
        lore[1] = bullets2;
        item.setLore(lore);
        player.runCommand("playsound custom.handgun_shot @a ~~~");
        inv.setItem(player.selectedSlot, item);
        };
        if (bullets == 0) {
               player.runCommand("replaceitem entity @s slot.weapon.mainhand 0 bg:handgun");
        };
        player.removeTag('handgun_cooldown');
        }
    }}
});

mc.world.afterEvents.projectileHitEntity.subscribe( data => {
    const projectile = data.projectile;
    const entity = data.getEntityHit().entity;
    if (projectile.typeId == "bg:blaze_shot") {

       mc.system.runTimeout(() => {
          entity.runCommand("damage @s 16 fire");
       }, 10);
       entity.setOnFire(40, true);
    }
    if (projectile.typeId == "bg:exorcism_shot") {
    const undead = [
    "minecraft:drowned",
    "minecraft:husk",
    "minecraft:phantom",
    "minecraft:skeleton",
    "minecraft:skeleton_horse",
    "minecraft:stray",
    "minecraft:wither_skeleton",
    "minecraft:zoglin",
    "minecraft:zombie",
    "minecraft:zombie_horse",
    "minecraft:zombie_pigman",
    "minecraft:zombie_villager"
    ];

    if (undead.includes(entity.typeId)) {

       mc.system.runTimeout(() => {
          entity.runCommand("damage @s 11");
        }, 10);
    }}
    if (projectile.typeId == "bg:sand_shot") {

       if (entity.typeId == "minecraft:creeper") {
          entity.runCommand("event entity @s minecraft:start_exploding_forced");
    }}
});