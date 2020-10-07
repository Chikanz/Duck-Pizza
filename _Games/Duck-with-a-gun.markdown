---
layout: portfolio
subtitle: Weird third person cover shooter
img: duck.jpg
project-date: Feb 2019 - ongoing
project-num: 1
carousel: Ducko

icons:
 - top: unity 
---


### What?

Duck with a gun is a third person cover shooter where you play as a duck taking down the mob, John Wick style. A small but growing community has found the game via my [youtube channel](https://www.youtube.com/c/dookdook/) where I talk about my development progress and process in a mildly entertaining way.

### Who?
Almost all me with additional art by [Alan Robinson](https://twitter.com/arobinsonswork)


> "Duck With A Gun just looks… fun? Messy, broken fun, for sure, but there’s enough table-flipping, slow motion physics nonsense to give it an identity beyond “what if that horrible goose was packing heat?”

[-Rock Paper Shotgun](https://www.rockpapershotgun.com/2020/02/16/screenshot-saturday-sundays-letting-the-sun-set-on-windmills-androids-and-dusty-old-towers/)

>"Seems the goose from untitled goose game finally has a worthy opponent"

[-Some redditor](https://www.reddit.com/r/IndieGaming/comments/ha49ym/never_bring_a_sword_to_a_gun_fight_unless_youre_a/fv0q4aa)

## Feature breakdown: AI system

### *~3 minute read*

*A slightly longer video version of this breakdown is available [here](https://www.youtube.com/watch?v=b71GusLd4M8&t=6s)*

In the past I'd used a few different solutions for AI like simple state machines or behaviour trees but for this project I wanted to try out something different. I'd heard of this cool tech called [Utility AI](https://en.wikipedia.org/wiki/Utility_system) based on the economic theory of utility. This sort of tech seemed perfect for this application since I really wanted the AI's behaviour to be clever and organic, which utility seems to do really nicely. For better or for worse it's kind of 'hands off' in the way that you give the brain some actions and some inputs to create a score for how desirable an action is at point in time and let it rip. 

First I had a look around for some off the shelf solutions for implementing this into Unity but they were either expensive or didn't really fit my needs. So I ended up taking an [existing open source solution](https://github.com/Bartvanderkruys/utility-ai) and re-writing a lot of it, like creating a much more flexible system for gathering different input types (floats, bools etc.) using generics. I also re-worked the editor interface to make it a bit more glanceable, completely rewrote the scoring system and added a veto curve as described in [this GDC talk](https://www.gdcvault.com/play/1012410/Improving-AI-Decision-Modeling-Through). However with all my changes I made sure to keep compatibility with the existing UI system since I quite liked that.

To ensure my new system was working properly I created a super simple test scene with 3 actions for the AI: shoot, reload and heal. 

- The urge to shoot was driven by how many enemies were approaching and how close they were
- The urge to reload was driven inversely by ammo count
- The urge to heal was inversely driven by current health and how many enemies were present.


<img data-id="DigitalHandyFattaileddunnart" class="gfyitem" />  

After confirming the test worked I copied over the brain to my game scene and hooked up the inputs to the existing code with some additional modification. 

I then went on to work on the movement and positioning system (i.e. where the AI should move to and take cover based on the world state). I wanted the AI for the game to feel organic and make positioning decisions a real person might make instead of standing out in the open blindly firing, which makes the game much easier for the player leaving combat to feel like a bit of a really messed up wack-a-mole. I wanted the AI to be a lot more cunning than most third person shooters and nailing the positioning decision system was crucial to achieving that. 

After some thought I decided that the positioning system should use a custom solution instead of an off the shelf one although it was still heavily inspired by utility theory and a paper on the [AI of Killzone 2](https://www.cgf-ai.com/docs/straatman_remco_killzone_ai.pdf). The essence of it is that around the level I hand place a bunch of points I call cover points, to mark a possible position that the AI can move to and take cover in. The gist of it is that on each AI step it evaluates each point around it and gives them all a score based on a set of criteria, and them simply moves to the point with the highest score.

Scoring of each point is based on a few factors like if the point has visibility to the last known player position, distance to the player and distance to the AI. Points are also excluded if they are too close or too far from the player, and if they can be flanked from the player's point. To implement this in a cpu efficient way I pre-compute this data with a custom tool before the game runs, as sending out thousands of raycasts between each point every frame would be incredibly inefficient. Instead at build time I wrote a tool to check visibility from each point to all other points in the level and store that data in a dictionary on the point. Due to the quirks of the game, the AI only needs to know if a peek point (blue) is visible from a duck peek point (green) which further saves on memory since I don't need to store visibility checks from blue to blue or from green to green. 

![https://i.imgur.com/IuJ2s31.png](https://i.imgur.com/IuJ2s31.png)

Highlighted in light green are the other points that have visibility to this point and yellow shows which points can flank the current point (ie can see the back of the point)

Although it can be fiddly sometimes with getting the scoring right, overall I think this solution works pretty well. Although it struggles with verticality as distance is evaluated using  `Vector3.Distance()` instead of `NavMesh.CalculatePath()`.

since it's much more expensive. The next step would be to bake this data in with the visibility although I haven't gotten around to it. The AI also has problems running across firing lines from other enemies or the player which is kind of hilarious but this could be fixed by excluding those points like in the killzone 2 paper but I haven't gotten around to it. 

<img data-id="velvetygaseousakitainu" class="gfyitem" />  