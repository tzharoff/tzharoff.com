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

Has the player collected the key? Is the door unlocked? Did the tutorial already play? Is the player standing inside the trigger? Has this Question Mark Block already been used?

A **flag** stores a yes-or-no answer.

In code, that kind of value is usually called a **boolean**. It has two possible values: `true` or `false`.

> [pose: expert] An event says, "This just happened!" A flag says, "Okay, I'll remember that."

## This is how it works

Let's go back to Mario and the Question Mark Block.

At the beginning, we can imagine the block storing a flag:

`block_has_been_used = false`

Mario punches the block. The collision raises an event, and the block's code responds:

1. Check whether `block_has_been_used` is false.
2. Release the power-up.
3. Change the block's appearance.
4. Set `block_has_been_used = true`.

When Mario punches the block again, the collision can still happen and the event can still run. But now the rule checks the flag, sees that the block has already been used, and does not release another power-up.

The event is over. The flag remains.

## This is why games use it

Flags give rules something simple to check.

They can remember something that is true **while** an interaction is happening:

`player_is_inside_water = true`

They can remember something that happened **once**:

`tutorial_has_played = true`

They can remember something that stays true **until** another event changes it:

`ghosts_are_vulnerable = true`

When the Power Pellet timer ends, another event can set that flag back to false.

Flags let events affect rules that run later. The code controlling ghost behavior doesn't need to watch Pac-Man eat the Power Pellet. It can check whether `ghosts_are_vulnerable` is currently true.

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

`player_is_inside = false`

The enter event can change it:

`player_is_inside = true`

The exit event can change it back:

`player_is_inside = false`

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
- `player_has_key`
- `tutorial_has_played`

A clear flag name makes the rule easier to read because it tells Future You exactly what question the code is answering.

## Exercise: Find what the game remembers

Choose one object or interaction in a game that has two clear states.

Write down:

1. **The question:** What does the game need to remember?
2. **The flag:** What would you name its true-or-false value?
3. **The starting value:** Is it true or false at the beginning?
4. **The event:** What changes the flag?
5. **The rule:** What behaves differently after it changes?
6. **The reset:** Does anything change it back?

You are taking something the game remembers and turning it into a question code can answer.
