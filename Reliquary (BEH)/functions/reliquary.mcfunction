effect @e[hasitem={item=bg:infernal_chalice}] fire_resistance 1 0 true
effect @e[hasitem={item=bg:infernal_chalice2}] fire_resistance 1 0 true

effect @e[hasitem={item=bg:infernal_claws2}] fire_resistance 1 0 true
effect @e[hasitem={item=bg:infernal_claws2}] hunger 1 0 true

effect @e[hasitem={item=bg:angelic_feather2}] slow_falling 1 0 true
effect @e[hasitem={item=bg:angelic_feather2}] jump_boost 1 1 true
effect @e[hasitem={item=bg:angelic_feather2}] hunger 1 0 true

execute as @e[hasitem={item=bg:fortune_coin2}] at @s run tp @e[type=item, r=5] ~~~
execute as @e[hasitem={item=bg:fortune_coin2}] at @s run tp @e[type=xp_orb, r=5] ~~~

execute as @e[hasitem={item=bg:glacial_staff}] at @s if block ~~~ air run function glacial_staff
execute as @e[hasitem={item=bg:glacial_staff2}] at @s if block ~~~ air run function glacial_staff

execute as @e[hasitem={item=bg:kraken_shell2}] at @s run execute if block ~ ~1 ~ water run effect @s water_breathing 1 0 true
execute as @e[hasitem={item=bg:kraken_shell2}] at @s run execute if block ~ ~1 ~ water run effect @s hunger 1 0 true
execute as @e[hasitem={item=bg:kraken_shell2}] at @s run execute if block ~ ~1 ~ water run effect @s night_vision 1 0 true
execute as @e[hasitem={item=bg:kraken_shell2}] at @s run execute if block ~ ~1 ~ water run effect @s haste 1 0 true
execute as @e[hasitem={item=bg:kraken_shell2}] at @s run execute if block ~ ~1 ~ water run effect @s speed 1 0 true
execute as @e[hasitem={item=bg:kraken_shell2}] at @s run execute if block ~ ~1 ~ flowing_water run effect @s water_breathing 1 0 true
execute as @e[hasitem={item=bg:kraken_shell2}] at @s run execute if block ~ ~1 ~ flowing_water run effect @s hunger 1 0 true
execute as @e[hasitem={item=bg:kraken_shell2}] at @s run execute if block ~ ~1 ~ flowing_water run effect @s night_vision 1 0 true
execute as @e[hasitem={item=bg:kraken_shell2}] at @s run execute if block ~ ~1 ~ flowing_water run effect @s haste 1 0 true
execute as @e[hasitem={item=bg:kraken_shell2}] at @s run execute if block ~ ~1 ~ flowing_water run effect @s speed 1 0 true

execute as @e[hasitem={location=slot.weapon.mainhand, item=bg:salamander_eye}] at @s run function salamander_eye
execute as @e[hasitem={location=slot.weapon.offhand, item=bg:salamander_eye}] at @s run function salamander_eye

execute as @e[hasitem={item=bg:pyromancer_staff}] at @s run function salamander_eye

effect @e[hasitem={location=slot.armor.chest,item=bg:twilight_cloak}] invisibility 1 0 true

tag @e[hasitem={item=bg:witherless_rose}] add witherless_rose
tag @e[hasitem={item=bg:witherless_rose, quantity=0}] remove witherless_rose

execute as @e [hasitem={location=slot.weapon.offhand, item=bg:midas_touchstone}] at @s[hasitem={item=glowstone_dust}] run tag @s add midas_touchstone

tag @e[hasitem={item=glowstone_dust, quantity=0}] remove midas_touchstone
tag @e[hasitem={location=slot.weapon.offhand, item=bg:midas_touchstone, quantity=0}] remove midas_touchstone

event entity @e[tag=serpent_staff] become_calm_event
event entity @e[tag=serpent_staff] calmed_down
event entity @e[tag=serpent_staff] minecraft:become_calm
event entity @e[tag=serpent_staff] minecraft:on_calm

execute as @e [hasitem={location=slot.weapon.mainhand, item=bg:glacial_staff}] at @s run tag @s add glacial_staff
execute as @e [hasitem={location=slot.weapon.mainhand, item=bg:glacial_staff2}] at @s run tag @s add glacial_staff
execute as @e [hasitem={location=slot.weapon.mainhand, item=bg:glacial_staff, quantity=0}] as @e [hasitem={location=slot.weapon.mainhand, item=bg:glacial_staff2, quantity=0}] at @s run tag @s remove glacial_staff

execute as @e [hasitem={location=slot.weapon.mainhand, item=bg:ice_magus_rod}] at @s run tag @s add ice_magus_rod
execute as @e [hasitem={location=slot.weapon.mainhand, item=bg:ice_magus_rod2}] at @s run tag @s add ice_magus_rod
execute as @e [hasitem={location=slot.weapon.mainhand, item=bg:ice_magus_rod, quantity=0}] as @e [hasitem={location=slot.weapon.mainhand, item=bg:ice_magus_rod2, quantity=0}] at @s run tag @s remove ice_magus_rod

execute as @e [hasitem={location=slot.hotbar, slot=8, item=bg:magazine}] at @s run tag @s add magazine
execute as @e [hasitem={location=slot.hotbar, slot=8, item=bg:magazine, quantity=0}] at @s run tag @s remove magazine
execute as @e [hasitem={location=slot.hotbar, slot=8, item=bg:blaze_magazine}] at @s run tag @s add blaze_magazine
execute as @e [hasitem={location=slot.hotbar, slot=8, item=bg:blaze_magazine, quantity=0}] at @s run tag @s remove blaze_magazine
execute as @e [hasitem={location=slot.hotbar, slot=8, item=bg:buster_magazine}] at @s run tag @s add buster_magazine
execute as @e [hasitem={location=slot.hotbar, slot=8, item=bg:buster_magazine, quantity=0}] at @s run tag @s remove buster_magazine
execute as @e [hasitem={location=slot.hotbar, slot=8, item=bg:concussive_magazine}] at @s run tag @s add concussive_magazine
execute as @e [hasitem={location=slot.hotbar, slot=8, item=bg:concussive_magazine, quantity=0}] at @s run tag @s remove concussive_magazine
execute as @e [hasitem={location=slot.hotbar, slot=8, item=bg:ender_magazine}] at @s run tag @s add ender_magazine
execute as @e [hasitem={location=slot.hotbar, slot=8, item=bg:ender_magazine, quantity=0}] at @s run tag @s remove ender_magazine
execute as @e [hasitem={location=slot.hotbar, slot=8, item=bg:exorcism_magazine}] at @s run tag @s add exorcism_magazine
execute as @e [hasitem={location=slot.hotbar, slot=8, item=bg:exorcism_magazine, quantity=0}] at @s run tag @s remove exorcism_magazine
execute as @e [hasitem={location=slot.hotbar, slot=8, item=bg:sand_magazine}] at @s run tag @s add sand_magazine
execute as @e [hasitem={location=slot.hotbar, slot=8, item=bg:sand_magazine, quantity=0}] at @s run tag @s remove sand_magazine
execute as @e [hasitem={location=slot.hotbar, slot=8, item=bg:seeker_magazine}] at @s run tag @s add seeker_magazine
execute as @e [hasitem={location=slot.hotbar, slot=8, item=bg:seeker_magazine, quantity=0}] at @s run tag @s remove seeker_magazine
execute as @e [hasitem={location=slot.hotbar, slot=8, item=bg:storm_magazine}] at @s run tag @s add storm_magazine
execute as @e [hasitem={location=slot.hotbar, slot=8, item=bg:storm_magazine, quantity=0}] at @s run tag @s remove storm_magazine