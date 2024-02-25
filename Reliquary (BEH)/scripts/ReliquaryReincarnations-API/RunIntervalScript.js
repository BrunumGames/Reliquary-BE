import * as mc from '@minecraft/server';

mc.system.runInterval(() => {
    let players = mc.world.getAllPlayers();
    players.forEach(player => {
        if (player.hasTag('midas_touchstone')) {
            let inv = player.getComponent("inventory")?.container;
            if (inv) {
            let item = inv.getItem(player.selectedSlot);
            if (item) {
            let durability = item.getComponent("durability");
            let maxDurability = item.getComponent("durability")?.maxDurability;
            let damage = item.getComponent("durability")?.damage;          if (durability && damage) {
            if (item.typeId == "minecraft:golden_sword" || item.typeId == "minecraft:golden_pickaxe" || item.typeId == "minecraft:golden_axe" || item.typeId == "minecraft:golden_shovel" || item.typeId == "minecraft:golden_hoe" || item.typeId == "minecraft:golden_helmet" || item.typeId == "minecraft:golden_chestplate" || item.typeId == "minecraft:golden_leggings" || item.typeId == "minecraft:golden_boots" || item.typeId == "bg:magicbane" || item.typeId == "bg:mercy_cross") {

             if (damage === maxDurability) {
             inv.setItem(player.selectedSlot, undefined);
             } else {

               player.runCommand("clear @s glowstone_dust 0 1");
               durability.damage -= 1;
               inv.setItem(player.selectedSlot, item);
                  }}
             }}
        }}
        let entities = player.dimension.getEntities({tags: ['witherless_rose']});
        entities.forEach(entity => {

        entity.removeEffect('wither');
        });
        let entities2 = player.dimension.getEntities({type: "bg:interdiction_torch_entity"});
        entities2.forEach(entity2 => {

        let entities3 = entity2.dimension.getEntities({location:entity2.location, excludeFamilies: ['inanimate', 'lightning', 'npc', 'player'], maxDistance: 5});
        entities3.forEach(entity3 => {
        entity3.applyKnockback(entity3.location.x - entity2.location.x, entity3.location.z - entity2.location.z, 1.0, 0);
                 })
            })
       });
}, 1)