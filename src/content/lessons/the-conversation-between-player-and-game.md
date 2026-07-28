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

Strong moments stack several channels at once. When Tony collects a coin, it might spin and disappear *and* play a sound *and* update the counter *and* show a message—four answers to one interaction.

## This is what it costs

More feedback is not automatically better. Stack too much and the signal turns to noise: the player can't tell which flash mattered. Every channel you add also costs production time — art, sound design, tuning. Design is choosing which cost to pay.

> [pose: facepalm] Players cannot learn from feedback they cannot perceive.

## This is how to recognize it

Open Tony's Feedback lesson scene and collect the coin. List every response you notice. Then mute the game and collect another coin. What did you stop understanding?

Now disable the coin's message, animation, and counter update one at a time. The trigger and event can still work even when the player receives a weaker answer.

## Now you can build it

- Search for **"game feel"**, **"juice"**, and **"hit stop"** to find implementation techniques in any engine.
- When you prototype, add feedback *before* adding features. A plain cube that answers loudly teaches you more than a beautiful character that says nothing.

**Exercise:** Collect a coin in Tony's Training Ground and list every feedback channel it uses. Disable them one at a time—which removal makes the interaction confusing first? Then add one new response that makes the collection clearer without making it noisy.
