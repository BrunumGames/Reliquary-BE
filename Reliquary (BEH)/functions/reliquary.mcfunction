effect @e[hasitem={item=bg:infernal_chalice}] fire_resistance 1 0 true
effect @e[hasitem={item=bg:infernal_chalice2}] fire_resistance 1 0 true

effect @e[hasitem={item=bg:infernal_claws2}] fire_resistance 1 0 true
effect @e[hasitem={item=bg:infernal_claws2}] hunger 1 0 true

effect @e[hasitem={item=bg:angelic_feather2}] slow_falling 1 0 true
effect @e[hasitem={item=bg:angelic_feather2}] jump_boost 1 1 true
effect @e[hasitem={item=bg:angelic_feather2}] hunger 1 0 true

execute as @e[hasitem={item=bg:fortune_coin2}] at @s run tp @e[type=item, r=6] ~~~
execute as @e[hasitem={item=bg:fortune_coin2}] at @s run tp @e[type=xp_orb, r=6] ~~~

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

execute as @e[hasitem={location=slot.weapon.mainhand, item=bg:magicbane}] as @e[hasitem={location=slot.hotbar, slot=1, item=bg:magicbane}] at @s run effect @s strength 1 0 true
execute as @e[hasitem={location=slot.weapon.mainhand, item=bg:magicbane}] as @e[hasitem={location=slot.hotbar, slot=2, item=bg:magicbane}] at @s run effect @s strength 1 0 true
execute as @e[hasitem={location=slot.weapon.mainhand, item=bg:magicbane}] as @e[hasitem={location=slot.hotbar, slot=3, item=bg:magicbane}] at @s run effect @s strength 1 1 true
execute as @e[hasitem={location=slot.weapon.mainhand, item=bg:magicbane}] as @e[hasitem={location=slot.hotbar, slot=4, item=bg:magicbane}] at @s run effect @s strength 1 1 true
execute as @e[hasitem={location=slot.weapon.mainhand, item=bg:magicbane}] as @e[hasitem={location=slot.hotbar, slot=5, item=bg:magicbane}] at @s run effect @s strength 1 2 true
execute as @e[hasitem={location=slot.weapon.mainhand, item=bg:magicbane}] as @e[hasitem={location=slot.hotbar, slot=6, item=bg:magicbane}] at @s run effect @s strength 1 2 true
execute as @e[hasitem={location=slot.weapon.mainhand, item=bg:magicbane}] as @e[hasitem={location=slot.hotbar, slot=7, item=bg:magicbane}] at @s run effect @s strength 1 3 true
execute as @e[hasitem={location=slot.weapon.mainhand, item=bg:magicbane}] as @e[hasitem={location=slot.hotbar, slot=8, item=bg:magicbane}] at @s run effect @s strength 1 4 true

execute as @e[hasitem={location=slot.weapon.mainhand, item=bg:salamander_eye}] at @s run function salamander_eye

execute as @e[hasitem={item=bg:pyromancer_staff4}] at @s run function pyromancer_staff

effect @e[hasitem={location=slot.armor.chest,item=bg:twilight_cloak}] invisibility 1 0 true