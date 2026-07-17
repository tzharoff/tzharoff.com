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

> [pose: thinking]The trigger isn't a wall. It's the game saying, **"Something important just entered this space."**

## This is how it works

Let's look at *Pac-Man*.

When Pac-Man reaches a wall, he stops. That wall gives us a collision with a physical response: Pac-Man cannot move through it.

When Pac-Man reaches a pellet, he does not stop or bounce away. He keeps moving. The pellet disappears, the score changes, and the game gives us sound and visual feedback.

The pellet interaction is doing a different job:

1. Pac-Man enters the pellet's space.
2. The game detects an **overlap**.
3. That overlap creates an **event**.
4. A rule decides what the event means.
5. The pellet is removed and the score increases.
6. The game shows and plays feedback so the player knows it happened.

The pellet did not need to block Pac-Man. It only needed to know that Pac-Man reached it.

> [pose: proud] A wall says, "You can't go through me." A pellet says, "You reached me—now make something happen!"

We can also see this at the tunnels on the sides of the maze. Pac-Man crosses the edge of one tunnel and appears at the other. The important part isn't bumping into a solid object. The important part is entering a location that tells the game to do something.

### One important note

The original *Pac-Man* was not built with a modern engine's "Trigger" component. Its programmers could check Pac-Man's position on the maze grid and run the same kind of rule.

We are using **trigger** to describe the job: notice that something reached an important place without physically stopping it.

> [pose: whisper] A trigger area is one way a modern game engine can do that job.

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

Choose a game and find one moment that seems to use a trigger: collecting an item, entering a room, activating a checkpoint, starting dialogue, or changing areas.

Write down:

1. **The object:** What entered the area?
2. **The area:** Where do you think the trigger begins and ends?
3. **The event:** Did the object enter, stay, or exit?
4. **The condition:** Did anything else need to be true?
5. **The rule:** What happened because the trigger activated?
6. **The feedback:** How did the game tell you it happened?

Now test your theory. Approach from another direction, leave and return, or try it with a different object if the game allows it.

You may never see the trigger itself, but you can still gather evidence about where it is and how it works.
