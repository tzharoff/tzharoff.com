---
title: Flags: How Does the Game Remember What Changed?
course: know-the-game
courseTitle: Know the Game
order: 6
minutes: 8
objective: Recognize how true-or-false values remember the results of events and give rules something to check later.
vocabulary: flag, boolean, true, false, condition, state, toggle
---

## This is what it is

An event announces that something just happened. Then the moment is over.

But games need to remember things.

Has Tony collected the key? Is the door unlocked? Did the tutorial already play? Is Tony standing inside the trigger? Has the checkpoint been activated?

A **flag** stores a yes-or-no answer.

In code, that kind of value is usually called a **boolean**. It has two possible values: `true` or `false`.

> [pose: expert] An event says, "This just happened!" A flag says, "Okay, I'll remember that."

## This is how it works

Let's put a key and a locked door in Tony's Training Ground.

At the beginning, we can imagine the block storing a flag:

`tony_has_key = false`

Tony walks through the key's trigger. The collection event is raised, and the listening code responds:

1. Collect the key.
2. Set `tony_has_key = true`.
3. Remove the key from the world.
4. Show Tony that something changed.

When Tony reaches the door, its rule checks the flag. If `tony_has_key` is false, the door stays locked. If it is true, the door opens.

The event is over. The flag remains.

## This is why games use it

Flags give rules something simple to check.

They can remember something that is true **while** an interaction is happening:

`tony_is_inside_water = true`

They can remember something that happened **once**:

`tutorial_has_played = true`

They can remember something that stays true **until** another event changes it:

`speed_boost_is_active = true`

When Tony's speed-boost timer ends, another event can set that flag back to false.

Flags let events affect rules that run later. The door does not need to watch Tony collect the key. It only needs to check whether `tony_has_key` is currently true.

## This is how to recognize it

Look for something in a game that clearly has two states:

- Locked or unlocked
- Collected or not collected
- Active or inactive
- Inside or outside
- Alive or defeated
- Seen or unseen
- Used or unused

Then ask:

- What event changed the state?
- What was probably true before it happened?
- What became true afterward?
- Does another event ever change it back?
- What rules behave differently because of it?

You cannot see the flag itself, but you can observe the game remembering its value.

### Triggers and flags

Flags are especially useful when a game needs to remember whether something is inside a trigger:

`tony_is_inside = false`

The enter event can change it:

`tony_is_inside = true`

The exit event can change it back:

`tony_is_inside = false`

Other rules can now check the flag without needing to wait for another trigger event.

A flag works best when the answer is truly yes or no. If a game needs to remember several overlapping objects, it may need a counter or a collection instead. We will get into those kinds of choices later.

## Now you can build it

When you open an engine tutorial or documentation, search for:

- **Boolean** or **bool**
- **Flag**
- **True and false**
- **Condition**
- **If statement**
- **Game state**
- **Toggle**

Start by writing the question your game needs to remember:

**Has this happened?**

Then turn it into a name that can be true or false:

- `door_is_unlocked`
- `checkpoint_is_active`
- `tony_has_key`
- `tutorial_has_played`

A clear flag name makes the rule easier to read because it tells Future You exactly what question the code is answering.

## Exercise: Find what the game remembers

Open Tony's Flags lesson scene and test the locked door before collecting the key. Then collect the key and return to the door.

Write down:

1. **The question:** Does Tony have the key?
2. **The flag:** Find the true-or-false value storing the answer.
3. **The starting value:** Confirm that it begins false.
4. **The event:** Collect the key and watch the value change.
5. **The rule:** Test how the door behaves when the flag is true.
6. **The experiment:** Reset the flag to false and try the door again.

You are taking something the game remembers and turning it into a question code can answer.
