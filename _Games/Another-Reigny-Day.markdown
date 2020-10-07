---
layout: portfolio
subtitle: VR Castle defence game
img: reigny.jpg
project-date: Jan 2016
project-num: 2
carousel: Reigny

links:
  - icon: steam
    url: https://store.steampowered.com/app/882860/

icons:
 - top: unity 
 - top: vive
 - top: steam
---

### What?
Another Reigny Day gives you the frantic and hilarious duty of defending a castle stronghold from mythical hordes of fairy tale creatures. The resources of the realm are at your disposal, including siege weapons like cannons,  giant slingshots, elemental staffs, magic towers and others. Talk to tiny cow kings, wipe poo out of your eyes, flip off your enemies and more in this wacky VR game.

I worked on Another Reigny Day part time during uni for about 2 years and it was the first large game that I'd finished. It was such a great (and slightly daunting) experience to be given heaps of creative freedom over the project and a small team of artists and animators to get me the assets I needed. It was finished and ready to ship at the end of 2019 but due to publishing complications still hasn't been released on steam.

### Who?
With a small remote team from US based [Mega Cat Studios](https://megacatstudios.com/)

### Doing?
A lot of programming! I created or refactored pretty much all of the game's systems. But I also dabbled in the game's design, UI, even creative direction and production at some points. Also, I made the trailer!

### Tech?
Unity, Steam VR, VRTK

## Feature breakdown: The strategy table

### ~2 minute read 

One of the main features of another reigny day is the ability to buy magic towers to help defend your castle from the onslaught of enemies and one of my first jobs on the project was to implement the tower purchasing UI as well as the tower's combat behaviour. The team originally had the idea to implement a flat menu UI pop up that the player could bring up at any time to purchase towers.

I then came up with the idea to instead have a more physical UI for purchasing. Where instead of the standard vertical UI with pointer the player could instead walk up to a table, place tower figurines on the map and have them magically appear in the world. Even though this would be a lot more work on my part I thought it'd be worth it since it plays into VR's strengths so much more.

<img data-id="unselfishdirtycoypu" height="200" class="gfyitem" />  

I pitched this idea to the team and they loved it. After we refined it a bit I got to work implementing a prototype. The design of the system isn't really much to write home about since it's pretty straightforward; a script detects when a tower is released into a pick up zone and spawns the tower's prefab in the world. But there were enough little complexities to keep it interesting, for example the system places towers as well as castle defences. Castle defences can only be placed in certain positions so I had to create a placement system that checks a figurine against a mask (ie bool array) to check if it can be placed or not. There was also a fun bug where you could break this by picking up a figurine to show it's placement areas and then quickly picking up another figurine to place in a spot it doesn't belong. 

There was also the challenge of *magically* re-spawning figurines in place after you pick one up. This was a bit fiddly as you could easily bypass the check to see if a figurine was already spawned which caused figurines to spawn infinitely. 

Using spring physics for the UI was quite a challenge as well. To interact with a tower on the planning table the player can point and hover their finger near it to bring up a menu to upgrade, repair or remove the tower. This could have been done much more easily with a traditional UI but I wanted to keep in line with the physical theme of the table even if it meant more work.

<img data-id="rashbravealbatross" class="gfyitem" />  

We got some player feedback from showcasing at a convention that they didn't like having to turn around to access the table because they would get caught up in the VR headset cable. They also found it difficult to comprehend where they were placing towers as the map was rotated from where towers were being placed in the world. To fix this we rotated the table so that instead of it being flush against the back of the castle it was flipped 90 degrees so that it could be accessed from both sides. This seems simple enough but it meant a lot of extra work to check where the player is to bring up different menus based on which side of the table they're on.

<img data-id="qualifiedcanineatlanticsharpnosepuffer" class="gfyitem" />

All in all this was a really fun feature to implement and I think it makes placing towers much more fun.

<img data-id="rewardingickyblackbear" class="gfyitem" />
