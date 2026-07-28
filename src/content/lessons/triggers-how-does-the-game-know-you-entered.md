---
title: Triggers: How Does the Game Know You Entered?
course: know-the-game
courseTitle: Know the Game
order: 3
minutes: 12
objective: Recognize how games detect that something entered an important area without physically blocking it.
vocabulary: trigger, trigger area, overlap, event, condition, enter, exit
---

## This is what it is

A collider helps the game know when two boundaries meet. Sometimes that meeting stops something, pushes it away, or makes it bounce.

But what if we want the game to notice that something happened **without blocking movement at all?**

That's the job of a **trigger**.

A trigger is an area the game watches. When something enters, stays inside, or leaves that area, the game can run a rule.

The player might walk straight through it and never know the area was there.

Triggers can open doors, collect items, start dialogue, activate checkpoints, change music, begin boss fights, reveal tutorials, or move the player into another part of the game.

> [pose: thinking] The trigger isn't a wall. It's the game saying, **"Something important just entered this space."**

## This is how it works

Let's look at Tony in the Training Ground.

When Tony reaches a wall, he stops. The wall's collider creates a physical response: Tony cannot move through it.

Now Tony jumps off a platform. He falls through an invisible Respawn Zone beneath the level. The zone does not catch him or bounce him away. It notices that Tony entered, then returns him to the starting point.

The Respawn Zone is doing a different job:

1. Tony enters the zone's space.
2. The game detects an **overlap**.
3. That overlap creates an **event**.
4. A rule decides what the event means.
5. Tony moves back to the respawn point.
6. The camera and visual feedback help the player understand what happened.

The zone did not need to block Tony. It only needed to know that Tony reached it.

> [pose: proud] A wall says, "You can't go through me." A trigger says, "You reached me—now make something happen!"

We can use the same idea for a coin. Tony passes through the coin's trigger, the game notices the overlap, and the coin is collected without physically stopping him.

### One important note

In Unity, a trigger still uses a Collider component, but **Is Trigger** is turned on. That tells the physics system to report overlaps without using that collider as a solid barrier.

Other engines use different components and names to do the same job: notice that something reached an important place without physically stopping it.

> [pose: whisper] The box under the level is invisible to the player, but it isn't invisible to the engine.

## This is why games use it

Games constantly need to connect **where something is** to **what should happen next**.

Imagine walking through a game world:

- You cross a doorway and enter a new room.
- Music changes when you reach a dangerous area.
- A character starts talking when you approach.
- A checkpoint saves your progress when you pass it.
- Enemies appear when you enter an arena.
- A treasure disappears when you collect it.

The player does not need to press a special button for every one of these moments. Their movement through the world can be the input.

Triggers let the game react to that movement.

They also let designers place rules in space. An invisible area can say, "When the player gets here, begin the next part."

## This is how to recognize it

Triggers are often invisible, so we have to look for their effects.

When something happens because you entered, crossed, approached, or left a place, ask:

- Where was I when it happened?
- Did anything physically stop me?
- Did I enter the same area every time?
- Does the event happen once, or can I repeat it?
- Does it happen when I enter, while I stay, or when I leave?
- What game state changed afterward?

Try walking backward across the same spot. Does the event happen again? Approach it from another direction. Does the game still notice you? Leave the area and return.

You are testing the possible shape, conditions, and rules of a trigger you cannot see.

### Enter, stay, and exit

Games can care about different parts of an overlap:

- **Enter:** Something has just moved into the area.
- **Stay:** Something is still inside the area.
- **Exit:** Something has just left the area.

> [pose: expert] I'd recommend using a flag that changes on Enter and Exit rather than using Stay. I've found that Stay can be kind of buggy.

A checkpoint might activate on enter. Poison gas might cause damage while the player stays inside it. Music might return to normal when the player exits a dangerous room.

Same area. Three different moments the game can watch.

## Now you can build it

When you open a game engine, search its documentation for:

- **Trigger** or **trigger collider**
- **Area** or **overlap area**
- **Enter event**
- **Exit event**
- **Overlap event**
- **Signal** or **callback**

The engine might ask which kinds of objects the trigger should notice. A player? An enemy? A projectile? Anything at all?

Then it needs a rule for what happens next:

- Add to the score.
- Remove the item.
- Open the door.
- Save the checkpoint.
- Start the dialogue.
- Load the next level.

Start with the job:

**I need the game to notice when this thing enters that area.**

Once you can say that clearly, you know what to search for and what event your rule needs to respond to.

## Exercise: Find the invisible area

Open Tony's Trigger lesson scene and turn on the Respawn Zone's visible guide so you can see the area the player normally cannot.

Write down:

1. Make Tony jump into the zone and watch him respawn.
2. Move the zone lower and test it again.
3. Make the zone smaller and try to fall past it.
4. Turn **Is Trigger** off and see how the behavior changes.
5. Turn it back on and restore the original size.
6. Write down what the trigger detected and what rule ran afterward.

Then walk Tony through a coin pickup and compare the two triggers. They detect the same kind of overlap, but their rules produce different results.

You may never see the trigger itself, but you can still gather evidence about where it is and how it works.
