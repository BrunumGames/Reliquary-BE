import { world } from '@minecraft/server';

world.afterEvents.entityHitEntity.subscribe( data => {
    const target = data.hitEntity;
    const attacker = data.damagingEntity;
    const entityInv = attacker.getComponent("minecraft:inventory").container;
    const hand = entityInv.getItem(attacker.selectedSlot);
    const drop = [
    "minecraft:bat",
    "minecraft:blaze",
    "minecraft:cave_spider",
    "minecraft:creeper",
    "minecraft:drowned",
    "minecraft:enderman",
    "minecraft:ghast",
    "minecraft:glow_squid",
    "minecraft:guardian",
    "minecraft:magma_cube",
    "minecraft:skeleton",
    "minecraft:slime",
    "minecraft:snowman",
    "minecraft:spider",
    "minecraft:squid",
    "minecraft:stray",
    "minecraft:witch",
    "minecraft:wither_skeleton",
    "minecraft:zombie",
    "minecraft:zombie_pigman",
    "minecraft:zombie_villager"
    ];

    if (!target || !attacker) {

         return;
    }

    if (hand && hand.typeId == "bg:magicbane") {

       var chance_eff = Math.floor(Math.random() * 100) + 1;
       if (chance_eff <= 7) {

          target.addEffect('weakness', 100, { amplifier: 2, showParticles: true });
       }

       if (chance_eff > 7 && chance_eff >= 14) {

          target.addEffect('slowness', 100, { amplifier: 2, showParticles: true });
       }

       if (chance_eff > 14 && chance_eff >= 21) {

          target.addEffect('poison', 100, { amplifier: 2, showParticles: true });
       }

       if (chance_eff > 21 && chance_eff >= 28) {

          target.addEffect('nausea', 100, { amplifier: 2, showParticles: true });
       }

       if (chance_eff > 28 && chance_eff >= 35) {

          target.addEffect('wither', 100, { amplifier: 2, showParticles: true });
       }

       if (chance_eff > 35 && chance_eff >= 42) {

          target.addEffect('blindness', 100, { amplifier: 2, showParticles: true });
       }

       if (drop.includes(target.typeId)) {
          target.addTag("magicbane");
    }}
});

world.afterEvents.entityDie.subscribe( data => {
    const target = data.deadEntity;

    if (!target) {

         return;
    }
   
    if (target.typeId == "minecraft:creeper" && target.hasComponent("minecraft:is_charged")) {

       target.runCommand('loot spawn ~~~ loot "entities/eye_of_storm"');
    }
   
    if (target.hasTag('magicbane')) {

        if (target.typeId == "minecraft:bat") {
       target.runCommand('loot spawn ~~~ loot "entities/bat"');
    }

        if (target.typeId == "minecraft:blaze" || target.typeId == "minecraft:magma_cube") {
       target.runCommand('loot spawn ~~~ loot "entities/molten_core"');
    }

        if (target.typeId == "minecraft:cave_spider" || target.typeId == "minecraft:spider") {
       target.runCommand('loot spawn ~~~ loot "entities/chelicerae"');
    }

        if (target.typeId == "minecraft:creeper" && target.hasComponent("minecraft:is_charged")) {
       target.runCommand('loot spawn ~~~ loot "entities/eye_of_storm"');
    }

        if (target.typeId == "minecraft:creeper" || target.typeId == "minecraft:ghast") {
       target.runCommand('loot spawn ~~~ loot "entities/catalyzing_gland"');
    }

        if (target.typeId == "minecraft:drowned" || target.typeId == "minecraft:zombie" || target.typeId == "minecraft:zombie_pigman" || target.typeId == "minecraft:zombie_villager") {
       target.runCommand('loot spawn ~~~ loot "entities/zombie_heart"');
    }

        if (target.typeId == "minecraft:enderman") {
       target.runCommand('loot spawn ~~~ loot "entities/nebulous_heart"');
    }

        if (target.typeId == "minecraft:glow_squid" || target.typeId == "minecraft:squid") {
       target.runCommand('loot spawn ~~~ loot "entities/squid_beak"');
    }

        if (target.typeId == "minecraft:guardian") {
       target.runCommand('loot spawn ~~~ loot "entities/guardian_spike"');
    }

        if (target.typeId == "minecraft:magma_cube" || target.typeId == "minecraft:slime") {
       target.runCommand('loot spawn ~~~ loot "entities/slime_pearl"');
    }

        if (target.typeId == "minecraft:skeleton" || target.typeId == "minecraft:stray") {
       target.runCommand('loot spawn ~~~ loot "entities/rib_bone"');
    }

        if (target.typeId == "minecraft:snowman") {
       target.runCommand('loot spawn ~~~ loot "entities/frozen_core"');
    }

        if (target.typeId == "minecraft:witch") {
       target.runCommand('loot spawn ~~~ loot "entities/witch_hat"');
    }

        if (target.typeId == "minecraft:wither_skeleton") {
       target.runCommand('loot spawn ~~~ loot "entities/withered_rib"');
    }}
});