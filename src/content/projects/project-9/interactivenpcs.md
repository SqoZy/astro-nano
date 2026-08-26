---
title: "Interactive NPC"
description: "A Research to interactive npc behavior"
date: "Jun 1 2026"
---

This was a research project where I investigated how I could create interactive NPC behavior. The project was made in Unity, and I used an A* manager and Dijkstra's algoritm to create paths for the NPCs.

The NPCs roam around the world and have a component that can register them for certain events, such as when they enter a player's range or the range of a traffic light. When an NPC is registered within the player's range, it can receive events from the player. For example, when the player shoots, the NPC receives an event indicating that the player has fired. Depending on the type of NPC, it will react differently: police officers will attack, while normal citizens will run away.

![trafficlight event](/images/npctrafficlight.png)

The traffic light system had a different problem. Each traffic light has two different hitboxes, one for each side of the road. When the traffic light turned red, NPCs could sometimes stop on the other side of the road, in the middle of the street.

I fixed this by making the NPC check whether its next node was a traffic light. If it was a traffic light, the NPC would stop because it was still on the pavement, making the stop valid. If the next node was a different type of node, the NPC would ignore the traffic light event.

[Watch the short video of the project](https://www.youtube.com/watch?v=NHQYwJnEli4)
[![Image of the project](/images/npcbehavior.png)](https://www.youtube.com/watch?v=NHQYwJnEli4)
