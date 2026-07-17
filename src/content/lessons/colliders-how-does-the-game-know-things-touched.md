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

It doesn't look at the screen the way we do. It isn't watching the ball hit the paddle and thinking, "Yep, those definitely touched."

The game needs a simpler shape it can check. That shape is called a **collider**.

A collider is an invisible boundary attached to something in the game. It might be a box, a circle, a capsule, or a more complicated shape. When two of those boundaries meet, the game can recognize a **collision**.

The picture you see and the shape the game checks are not always the same thing.

> [pose: pointing-right] Wait... *Pong* is just rectangles hitting other rectangles? Yes! And that's exactly why it's so useful. We can see the whole collision system without a bunch of other stuff getting in the way.

## This is how it works

Let's look at *Pong*.

We have a ball, two paddles, and the top and bottom edges of the play area. Each one can be represented by a simple collision shape.

As the ball moves, the game keeps checking those shapes:

1. Where is the ball now?
2. Where is it trying to move next?
3. Does its collider touch another collider?
4. If it does, what should happen?

When the ball touches the top or bottom wall, it bounces.

When the ball touches a paddle, it bounces back toward the other player.

The collision tells the game **that the shapes met**. A rule decides how the ball should respond.

That response is called a **collision response**. The game might stop something, bounce it, slide it along a surface, push it away, or run some other rule completely.

In *Pong*, we can describe the whole moment like this:

- The ball moves toward the paddle.
- The ball's collider meets the paddle's collider.
- The game detects the collision.
- A rule changes the ball's direction.
- The ball moves away from the paddle.
- The game uses motion and sound to show that the hit happened.

The collision is the meeting. The bounce is the response.

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

Watch the ball in *Pong* as it reaches the edge of a paddle:

- Does it bounce when the artwork appears to touch?
- Can part of the ball overlap the paddle before it bounces?
- Does hitting near the edge change the angle?
- What happens when the ball moves very quickly?

Now imagine drawing invisible boxes around the ball, paddles, and walls. Where would you put them? Would they fit the artwork exactly, or would you make them a little larger or smaller?

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

## Exercise: Draw the invisible game

Watch a short round of *Pong* or play a version of it yourself.

Pause during a rally and sketch the play area using only collision shapes:

1. Draw a shape for the ball.
2. Draw shapes for both paddles.
3. Draw the boundaries that make the ball bounce.
4. Mark one place where a collision can happen.
5. Write the rule that responds to that collision.
6. Write down the feedback that tells the player it happened.

Then choose one collider and change it. Make the paddle's collider wider, make the ball's collider smaller, or move a wall's boundary inward.

What would the player see? What would feel easier, harder, strange, or unfair?

You just changed the game without changing any of its artwork. That's the power of seeing the invisible shapes underneath it.
