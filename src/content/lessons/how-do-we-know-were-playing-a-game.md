---
title: How Do We Know We're Playing a Game?
course: know-the-game
courseTitle: Know the Game
order: 1
minutes: 12
objective: Recognize the loop of input, rules, state change, and feedback that makes something a game.
vocabulary: input, game state, rules, feedback, play loop, mental model
---

## This is what it is

At the broadest level, a game is **user input followed by a response from a system of rules (the Game)**. That's it. Not graphics, not story, not a controller — a conversation.

You press a button. Something in the world changes. The change means something. You decide what to do next.

Think of Tutorial levels in games, this is the way the game introduces the way it speaks to the player through guided interactions.

## This is how it works

Every game you have ever played runs the same loop:

1. You see the game world.
2. You push buttons, move the mouse use joysticks.
3. The game reads that input and follows its rules.
4. The game changes.
5. Video games offer visual feedback the show results.
6. You learn how the game's rules work and the loop continues!

Take away any step and play collapses. A movie has feedback but no input. A light switch has on and off but no that's it — flipping it doesn't ask you to *decide* anything.

> Controls tell you what inputs are available. Rules determine what those inputs mean. Feedback is the game.

## This is why games use it

Designers don't build "fun" directly — they build loops. When the loop is tight (input feels instant, feedback is readable, rules are learnable), players want to keep talking. When it's loose, players describe the game as "floaty," "confusing," or "unfair". Going through this paragraph, we get an understanding why: delayed feedback feels like something is broken.

## This is how to recognize it

Boot up anything — *Super Mario Bros.*, a match-3 on your phone, *Elden Ring* — and narrate the loop out loud:

- What did I just perceive?
- What input did I give?
- What rule interpreted it?
- What state changed?
- How did the game tell me?

In *Super Mario Bros.*, press the jump button next to a Goomba. Contact from above while descending defeats the enemy and bounces Mario. Contact from the side damages Mario. **The same collision, two different meanings** — because the rule, not the contact, decides what it means. **NOTE:** We're talking about Collision and we'll get more into it later!

## Now you can build it

You don't need an engine yet. You need the vocabulary:

- Search for **"game loop"** and **"input"** in any engine's documentation.
- When a tutorial says "add a collider," you now know it's building step 3 — the part where rules interpret events.

>In a 3D game Engine, you'll see a base piece that gives 9 numbers: 
>  <br><br>
> * Position (X, Y, Z)
> * Rotation (X, Y, Z)
> * Scale (X, Y, Z)

These are ways we can position and size the node/gameobject/actor in a game's world. Once you know how to move something in the game, you just need to find a way to accept **input** and you're closer to building a game!

**Exercise:** Choose a game you know. Identify one player input, the game's reaction, the rule producing that reaction, and the feedback communicating it. Write it as five short lines. Every video game you play will follow these rules, and knowing this helps unlock your path to finding a way to define those rules in the game engine's world.