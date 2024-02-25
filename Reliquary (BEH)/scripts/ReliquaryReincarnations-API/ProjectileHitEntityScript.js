import * as mc from '@minecraft/server';

mc.world.afterEvents.projectileHitEntity.subscribe( data => {
    const projectile = data.projectile;
    const player = data.source;
    const entity = data.getEntityHit().entity;

    if (projectile.typeId == "bg:serpent_poison_entity") {

       entity.addTag('serpent_staff');
       mc.system.runTimeout(() => {
       entity.removeTag('serpent_staff');
       }, 300);
    }

    if (projectile.typeId == "minecraft:snowball") {

       if (player.hasTag('ice_magus_rod')) {
       mc.system.runTimeout(() => {
       if (entity.hasComponent('minecraft:fire_immune')) {
           entity.runCommand("damage @s 4");
          } else {
                 entity.runCommand("damage @s 2");
              }
           }, 10);
        };

        if (player.hasTag('glacial_staff')) {
       mc.system.runTimeout(() => {
       if (entity.hasComponent('minecraft:fire_immune')) {
           entity.runCommand("damage @s 6");
          } else {
                 entity.runCommand("damage @s 3");
          }
       }, 10);
    }}
});