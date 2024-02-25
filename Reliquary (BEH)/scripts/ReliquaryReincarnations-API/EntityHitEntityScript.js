import * as mc from '@minecraft/server';

mc.world.afterEvents.entityHitEntity.subscribe( data => {
    const target = data.hitEntity;
    const attacker = data.damagingEntity;
    const entityInventory = attacker.getComponent("minecraft:inventory").container;
    const hand = entityInventory.getItem(attacker.selectedSlot);
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

    if (!target || !attacker) {

         return;
    }

    if (hand && hand.typeId == "bg:mercy_cross" && undead.includes(target.typeId)) {

  mc.system.runTimeout(() => {
             
     target.applyDamage(6);

     }, 10);
  }
})