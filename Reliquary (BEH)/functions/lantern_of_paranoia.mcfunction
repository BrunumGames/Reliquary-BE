setblock ~~~ torch

execute unless block ~5 ~ ~ air unless block ~5 ~1 ~ air if block ~5 ~2 ~ air run setblock ~5 ~2 ~ torch

execute unless block ~5 ~ ~ air if block ~5 ~1 ~ air run setblock ~5 ~1 ~ torch

execute if block ~5 ~ ~ air run setblock ~5 ~ ~ torch


execute unless block ~-5 ~ ~ air unless block ~-5 ~1 ~ air if block ~-5 ~2 ~ air run setblock ~-5 ~2 ~ torch

execute unless block ~-5 ~ ~ air if block ~-5 ~1 ~ air run setblock ~-5 ~1 ~ torch

execute if block ~-5 ~ ~ air run setblock ~-5 ~ ~ torch


execute unless block ~ ~ ~5 air unless block ~ ~1 ~5 air if block ~ ~2 ~5 air run setblock ~ ~2 ~5 torch

execute unless block ~ ~ ~5 air if block ~ ~1 ~5 air run setblock ~ ~1 ~5 torch

execute if block ~ ~ ~5 air run setblock ~ ~ ~5 torch


execute unless block ~ ~ ~-5 air unless block ~ ~1 ~-5 air if block ~ ~2 ~-5 air run setblock ~ ~2 ~-5 torch

execute unless block ~ ~ ~-5 air if block ~ ~1 ~-5 air run setblock ~ ~1 ~-5 torch

execute if block ~ ~ ~-5 air run setblock ~ ~ ~-5 torch
