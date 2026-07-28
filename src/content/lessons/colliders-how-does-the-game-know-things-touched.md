---
title: Colliders: How Does the Game Know Things Touched?
course: know-the-game
courseTitle: Know the Game
order: 2
minutes: 12
objective: Recognize how collision shapes let a game detect contact and decide how objects should respond.
vocabulary: collider, collision, collision shape, boundary, collision response, hitbox
---

## This is what it is

When two things touch in a game, how does the game know?

It doesn't look at the screen the way we do. It isn't watching Tony run into the wall and thinking, "Yep, those definitely touched."

The game needs a simpler shape it can check. That shape is called a **collider**.

A collider is an invisible boundary attached to something in the game. It might be a box, a circle, a capsule, or a more complicated shape. When two of those boundaries meet, the game can recognize a **collision**.

The picture you see and the shape the game checks are not always the same thing.

> [pose: pointing-right] Tony looks like a person, but the engine doesn't check every part of his model. A simple capsule around him does most of the work!

## This is how it works

Let's look at Tony in the Training Ground.

Tony has a capsule-shaped collider. The wall has a box-shaped collider. The models show us what Tony and the wall look like; the colliders tell Unity where their physical boundaries are.

As Tony moves toward the wall, the engine keeps checking those shapes:

1. Where is Tony now?
2. Where is he trying to move next?
3. Does his collider touch the wall's collider?
4. If it does, what should happen?

When Tony's capsule reaches the wall's box, the wall stops him from moving forward.

Disable the wall's collider and try again. The wall still looks solid, but Tony walks straight through it. The artwork did not change. The invisible boundary did.

The collision tells the game **that the shapes met**. A rule decides how Tony should respond.

That response is called a **collision response**. The game might stop something, bounce it, slide it along a surface, push it away, or run some other rule completely.

In the Training Ground, we can describe the whole moment like this:

- Tony moves toward the wall.
- Tony's collider meets the wall's collider.
- The game detects the collision.
- A rule prevents Tony from moving through the wall.
- Tony stops at the wall's boundary.

The collision is the meeting. Stopping Tony is the response.

## This is why games use it

Without colliders, objects would not know where their boundaries are.

A player could walk through a wall. A ball could pass through a paddle. A character could fall straight through the floor. A sword could swing through an enemy without the game knowing it connected.

Colliders give the game's world a sense of physical space. They help answer questions like:

- Can I move through this?
- Am I standing on the ground?
- Did the ball hit the paddle?
- Did the attack reach the enemy?
- Is something blocking the way?

But colliders are usually simpler than the artwork around them. A game could try to check every tiny point on a character's outline, but that would be harder to build, harder to control, and more work for the game to calculate.

So developers make choices.

A round character might use a circle. A person might use a capsule. A complicated wall might be split into a few boxes. The collider only needs to be accurate enough for the interaction to feel right.

> [pose: skeptical] This is why some games have those moments where the visual representation and the collider don't match and you get "hit" when the impact isn't exactly on the player's character!

## This is how to recognize it

You usually can't see colliders while playing, but you can look for evidence of them.

Select Tony and the wall in Unity, then turn on collider visualization:

- Does Tony stop when the visible model reaches the wall?
- Does the capsule extend beyond any part of Tony's body?
- Does the wall's collider match its visible size?
- What changes when you make either collider larger or smaller?

Now disable the wall's collider. The visible wall remains, but its physical boundary is gone. That is the difference between seeing the artwork and seeing the system.

You can do this with any game. Watch where a character stops in front of a wall. Look at how close an attack needs to get before it counts as a hit. Notice when a platform catches the player's feet.

The gap between what you see and where contact happens can reveal the shape the game is actually checking.

### A collider is not the rule

This distinction matters:

- A **collider** gives the game a boundary to check.
- A **collision** happens when checked boundaries meet.
- A **rule** decides what that meeting means.
- A **collision response** changes what happens next.

The same collision system can support walls, paddles, floors, characters, attacks, and hundreds of other interactions. What makes each interaction different is the rule that responds to it.

## Now you can build it

When you open a game engine, search its documentation for:

- **Collider** or **collision shape**
- **Collision detection**
- **Collision event**
- **Collision response**
- **Physics body**
- **Hitbox** and **hurtbox**

Different engines organize these pieces differently. Some objects move through a physics system. Some are moved directly by code. Some collisions are handled automatically, while others send an event and wait for you to decide what happens.

Don't worry about memorizing every type. Start with the job:

**I need the game to know when these two boundaries meet.**

Once you can say that clearly, you know what you're trying to find in a tutorial or engine.

And what happens when we want the game to notice that something entered an area **without** stopping or bouncing it?

> [pose: excited] That's where triggers come in! Let's get into those with the next lesson!

## Exercise: Break the wall

Open Tony's Collider lesson scene and run him into the wall.

Then:

1. Select Tony and find his collider.
2. Select the wall and find its collider.
3. Disable the wall's collider and walk through it.
4. Re-enable it and confirm that Tony stops again.
5. Make the collider wider than the wall and test where Tony stops.
6. Make it smaller than the wall and find where Tony can slip through.

What stayed visible? What changed about the rules of the space?

You just changed the game without changing any of its artwork. That's the power of seeing the invisible shapes underneath it.
