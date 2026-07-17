---
title: The Conversation Between Player and Game
course: know-the-game
courseTitle: Know the Game
order: 7
minutes: 10
objective: See feedback as the game's half of a conversation, and judge whether it is perceivable and consistent.
vocabulary: feedback, affordance, readability, signal, juice
---

## This is what it is

If a game is a loop, then playing one is a **conversation**. You speak in inputs. The game speaks in feedback — visuals, sound, motion, interface, vibration, score, world state.

A game that "feels great" is usually just a game that is a *good conversationalist*: it always answers, it never mumbles, and it never contradicts itself.

## This is how it works

Every meaningful event in a game needs an answer the player can perceive:

- **Visual** — a flash, a particle burst, a number popping off an enemy.
- **Audio** — the coin chime, the hit thud, the low-health heartbeat.
- **Motion** — screen shake, hit stop, a character's recoil.
- **Interface** — a bar draining, an icon lighting up.
- **World state** — the door is open now, and it stays open.

Strong moments stack several channels at once. When you defeat an enemy in a great action game, you might get a flash *and* a sound *and* a brief hit stop *and* a score tick — four answers to one input.

## This is what it costs

More feedback is not automatically better. Stack too much and the signal turns to noise: the player can't tell which flash mattered. Every channel you add also costs production time — art, sound design, tuning. Design is choosing which cost to pay.

> [pose: facepalm] Players cannot learn from feedback they cannot perceive.

## This is how to recognize it

Play thirty seconds of any game and mute it. What did you stop understanding? Now play with sound but look away during hits. Which channel was carrying the conversation?

In *Space Invaders*, removing enemies makes the remaining formation speed up. The escalating tempo isn't decoration — it's the game telling you, without a single word, that you are winning and the pressure is rising.

## Now you can build it

- Search for **"game feel"**, **"juice"**, and **"hit stop"** to find implementation techniques in any engine.
- When you prototype, add feedback *before* adding features. A plain cube that answers loudly teaches you more than a beautiful character that says nothing.

**Exercise:** Pick one action in a game you love (a jump, a hit, a pickup). List every feedback channel it uses. Then imagine removing them one at a time — which removal kills the feeling first?
