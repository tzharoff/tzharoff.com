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

At the broadest level, a game is **user input followed by a meaningful response from a system of rules**. That's it. Not graphics, not story, not a controller — a conversation.

You press a button. Something in the world changes. The change means something. You decide what to do next.

## This is how it works

Every game you have ever played runs the same loop:

1. You perceive the game world.
2. You provide input.
3. The game interprets that input through its rules.
4. The game state changes.
5. Feedback communicates the result.
6. You update your mental model and decide again.

Take away any step and play collapses. A movie has feedback but no input. A light switch has input and state but no meaningful rules — flipping it doesn't ask you to *decide* anything.

> Controls tell you what inputs are available. Rules determine what those inputs mean. Feedback teaches you the consequences.

## This is why games use it

Designers don't build "fun" directly — they build loops. When the loop is tight (input feels instant, feedback is readable, rules are learnable), players stay in the conversation. When it's loose, players describe the game as "floaty," "confusing," or "unfair" without knowing why.

## This is how to recognize it

Boot up anything — *Super Mario Bros.*, a match-3 on your phone, *Elden Ring* — and narrate the loop out loud:

- What did I just perceive?
- What input did I give?
- What rule interpreted it?
- What state changed?
- How did the game tell me?

In *Super Mario Bros.*, press the jump button next to a Goomba. Contact from above while descending defeats the enemy and bounces Mario. Contact from the side damages Mario. **The same collision, two different meanings** — because the rule, not the contact, decides what it means.

## Now you can build it

You don't need an engine yet. You need the vocabulary:

- Search for **"game loop"** and **"input handling"** in any engine's documentation.
- When a tutorial says "add a collider," you now know it's building step 3 — the part where rules interpret events.

**Exercise:** Choose a game you know. Identify one player input, the game's reaction, the rule producing that reaction, and the feedback communicating it. Write it as five short lines.
