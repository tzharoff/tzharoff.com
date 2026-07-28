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

At the broadest level, playing a game is **a conversation between you and a system of rules**.

That's it.

You see something. You press a button. The game decides what that button means. Something changes. The game shows you what happened, and now you have to decide what to do next.

No realistic graphics required. No big story. You don't even need a controller. Your input could come from a keyboard, a mouse, a touchscreen, your voice, or just choosing to wait.

The point is: **you do something, the game responds, and that response means something.**

Think about tutorial levels. A tutorial is the game introducing itself. It gives you a safe place to press a button, see what happens, and begin learning how the game speaks.

## This is how it works

Every game you have ever played has some version of this loop:

1. You see or hear something from the game.
2. You make a decision and give the game an input.
3. The game reads that input and checks its rules.
4. Something in the game changes.
5. The game gives you feedback so you can understand the result.
6. You learn something and make your next decision.

Then you do it again!

What changed is called the **game state**. That can be something obvious, like your character moving across the screen. It can also be something hidden: your health went down, a door became unlocked, an enemy noticed you, or the game remembered that you picked up a key.

But the game isn't the only thing changing. **You are changing too.**

Every time the game responds, you learn a little more about how it works. You press a button and learn that it makes Tony move. You press another and learn that he can jump. You run into a wall and learn that the world has boundaries.

That understanding in your head is called a **mental model**. It's your current idea of what the game's rules are—even if the game never explains those rules out loud.

> [pose: expert] Controls show you what you can do. Rules decide what it means. Feedback helps you figure out what just happened.

A movie can show you things, but it normally doesn't care what buttons you press. A light switch accepts an input and changes from off to on, but that's about it. There isn't much to explore, learn, or decide.

A game gives you a whole space of possibilities and asks, **"Okay, what do you want to try?"**

## This is why games use it

Designers don't build "fun" directly—they build loops.

When the loop is working, the player can connect what they did to what happened. The input feels responsive. The feedback is clear. The rules start to make sense. The player wants to try something else and keep the conversation going.

When the loop isn't working, players start using words like "floaty," "confusing," or "unfair."

Those words are useful! They tell us where to start looking.

- Did the game respond too slowly?
- Did something change without telling the player?
- Did the same action seem to follow two different rules?
- Was the feedback there, but too hard to notice?

We're taking a feeling—"this seems broken"—and turning it into questions we can actually investigate. That's a big part of learning to look at games like a developer.

## This is how to recognize it

Press Play in Tony's Training Ground and narrate one small moment out loud:

- What did I just notice?
- What input did I give?
- What rule interpreted it?
- What changed?
- How did the game tell me?
- What did I learn?

Let's make Tony walk toward a wall.

You see the wall and press the movement input. Tony moves forward until he reaches it, then stops.

That tiny moment gives us the whole loop. The player sees the world and decides to move. Unity reads the input. Tony's movement system changes his position. His collider reaches the wall's collider, and the rules stop him from moving through it. Tony stopping at the wall shows the player that the space has a boundary.

Now disable the wall's collider and try again. Tony walks through the same visible wall. Your input did not change. Tony's model did not change. The rule controlling the boundary changed.

That difference gives us something we can investigate inside the engine.

> [pose: excited] This is why we're bringing Tony with us. We can play the interaction, open the engine, change one piece, and see exactly what that piece was doing!

We're getting into movement and collision here, and we'll dig much deeper into both later. For now, notice that we can separate what we saw from what we think the game is doing:

- **What we saw:** Tony moved forward and stopped at the wall.
- **What we found:** Two colliders created a physical boundary.
- **What we tested:** Disabling the wall's collider let Tony pass through it.
- **What we can research:** How do different engines create physical boundaries?

That last question is where we start seeing the game as developers.

## Now you can build it

You don't need an engine yet. You need the vocabulary to understand what you're looking for.

When a tutorial tells you to add an input action, create a variable, or connect an event, don't just copy the steps. Ask what job that piece is doing:

- **Input** receives the player's action.
- **Variables** remember the current game state.
- **Rules** decide what the action means.
- **Events, animation, audio, and UI** help show the result.

Different engines will call these things by different names, but the jobs are still there. Once you recognize the job, you know what to search for.

Try searching for **"input actions," "game state,"** and **"events"** along with the name of any engine you're interested in.

You aren't trying to memorize an engine yet. You're learning how to ask it the right questions.

## Exercise: Catch the game in the act

Choose one small interaction in Tony's Training Ground: moving, jumping, hitting a wall, or falling off the platform.

Write it as six short lines:

1. **I noticed:** What information did the game give me?
2. **I did:** What input or decision did I make?
3. **The rule:** What rule do I think the game checked?
4. **It changed:** What changed in the game state?
5. **The game answered:** How did the game show me the result?
6. **I learned:** What could I understand or predict afterward?

You don't need the game's source code, and you don't have to be right on your first try. Start with what you can see. Make a guess. Then turn that guess into something you can research.

That's how we begin looking at games from the inside.
