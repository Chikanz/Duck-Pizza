---
layout: default
date: 2018-04-01
img: reigny.jpg
alt: A scene from another reigny day
category: VR Design
description: Designing games for VR can be a daunting task, since the medium is so new and always shifting. So we've compiled a small list of problems we've had, and solutions we've found to fix them

---

# Dook's VR Design Tips

Lessons learned from ~200 hours in the matrix

~~Hey friend, I'm dook, a programmer/designer working on *Another Reigny Day,* A VR castle defense game for the HTC Vive*.~~* Designing games for VR can be a daunting task, since the medium is so new and always shifting. So we've compiled a small list of problems we've had, and solutions we've found to fix them. Quick disclaimer, I don't intend this article to be an authority on how to do things in VR, they're just things we've picked up along the way and that have worked for us. VR design is such a volatile and subjective thing that everything in this post could be completely wrong or outdated with new hardware. Anyway, with that out of the way, here's some things we learned in no particular order.

# For the love of god, don't make the player use the grip buttons too much

(on the vive wands anyway... most of the time...)

The grip buttons on the Vive have to be the worst part of the system. They're just downright awkward to press, or at least I think so anyway. Anecdotally, about every second VR user I've talked to didn't like using them, but some people don't seem to have an issue. Even if it only effects a small percent of players, you should always design VR with accessibility in mind. 

But there are some use cases where the grip buttons are necessary. Objects that have to be used (i.e. guns) come to mind. You can't use the trigger for a grab action since there'd be no way to fire the gun. Using the grip buttons to toggle grabbing and trigger for using the item, is a pretty common solution. I think you'd be hard pressed to find users that have a problem with that since the press is so in-frequent. But definitely set it to toggle and not hold. 

# Locomotion options

Following the trend of accessibility, locomotion options are essential to make sure your players have a good experience depending on their tolerance to motion sickness. It might be a little extra work, but players really appreciate this kind of stuff. Try get all the standard ones in there if you can. So: teleport, track pad and arm swinger. Dash teleport is also a bit nicer than regular fade teleport since it provides great feedback to the player of where they're moving to without any sort of motion sickness. When play-testing Reigny, we often had players accidentally teleport downstairs and being confused about where they were, since we only used fade teleport. 

# Don't cover the player's field of view entirely.

[](https://gfycat.com/DigitalFaintAmericanratsnake)

There's a flying monkey enemy that flings poop at the player's face and cover's the player's field of view with poo if it hits. This immediately brought a lot of players out of the experience and questioning what had just happened. This was kind of fixed with better sign-posting of what was happening: we slowed down the monkey, added a trail renderer to the projectile and most importantly made the sides of the poop texture transparent so players could still see a glimpse of what was happening around them. *Accounting* also does this well in the courtroom scene that gestures you to reach onto your face by covering half of your view with black and putting a low pass filter on the audio.

# Use tracked objects

[](https://gfycat.com/SeriousSpiffyAtlanticspadefish)

Held objects that are 'tracked' feel way nicer than objects that are children of the controller. Tracked objects have the benefit of interacting properly with the environment (knocking over stuff) as well as moving when colliding with the environment (like a wall). It's a really simple thing that adds a lot to immersion. 

# Juice it!

Even though VR design is still pretty new and always-changing, it's important to still adhere to some standard game design principles, especially making sure things are properly juiced. Sound + haptics are like half of what makes VR fun, and are really easy to neglect. Something that added a ridiculous amount of permanence was simply adding body parts and blood to the field on *Another Reigny Day*. The talk by Jan Willem Nijman (of Vlambeer fame) on juice is one of the best out there, and there are so many things that can be applied to VR (maybe not the screen shake parts though lol) 

[](https://www.youtube.com/watch?v=AJdEqssNZ-U)

# Accessibility

Thinking about accessibility is important for pretty much all games, and especially important in VR since you'll get a range of people playing your game. For example, how will kids and short people interact with things? A great way to test this is try to play your game on your knees and see if everything can still be played ok. Some ways to deal with this could be to create tables with adjustable heights, or the option to scale your environment down to half scale. 

Another important question to ask is if the player can play the game sitting down, or standing in place. Adding the ability to be able to turn on the spot is great for those with standing configs or people with only front-facing tracking.

[](https://gfycat.com/SpecificRemarkableHyracotherium)

Ergonomics is also worth keeping in mind when designing for VR. Experiences that have the player looking down or up for too long can cause neck strain. Having the player hold their arms out straight for too long can also be un-comfortable (ie using a bow and arrow for too long). Picking things up off the floor sucks just as much in VR as it does in real life, and should be avoided if possible. To fix some of these things in Reigny, we added the bow 'Recall' feature, which flings the bow from anywhere on the map to the players hand, so they don't have to bend down. We also made using the bow for long periods optional, with an array of other options to help enemies part. 

# Use Audio to give cues about what's happening in the game world

Audio can be a great tool to alert players to what's happening around them without looking, which is especially enhanced by 3D audio in VR. With so much sensory input to the player, it can be really easy for the player to miss things happening around them. It's really important to create sound cues for things like enemies that might sneak up behind the player (footsteps work really well with 3D Audio) or machines, that can sound off about if they're working properly or not. One of the issues we found when people played *Another Reigny Day* was that they were constantly surprised by enemies coming up behind them and attacking them, which happens when they break down the gate and storm the castle. The root cause of this was players not really knowing if the gate had been broken. To help fix this we added a loud audio cue for when enemies are attacking the gate, as well as a loud crash for when it's been broken down. 

That's it for now! If you'd like to read further into VR design I highly recommend searching through the Google I/O 2016 + 2017 talks on VR for things that sound interesting. GDC and VRDC also have some really good ones about things studios have learned developing for VR. I think it's also important to try out other people's games to build up a design vocabulary with others and get inspiration. Later skater

*You can follow me on twitter @duckpizza_ for more VR shenanigans  [https://twitter.com/duckpizza_](https://twitter.com/duckpizza_) (hyperlink dis)*