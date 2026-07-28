---
title: Movement, Collision, and Rules
course: know-the-game
courseTitle: Know the Game
order: 8
minutes: 14
objective: Separate the three systems tutorials usually blur together — moving, detecting, and deciding.
vocabulary: movement, collision, trigger, collider, rule, world state
---

## This is what it is

Almost every action game is built from five fundamentals:

- **Movement** — something changes position or state.
- **Collision** — the system determines that two regions meet, or that movement is constrained.
- **Triggers** — the system detects a meaningful condition *without* blocking movement.
- **Rules** — the game decides what the event means and what changes next.
- **Feedback** — the game communicates the result.

Tutorials usually teach these as one blob ("add a Rigidbody, add a Collider, done"). Understanding them as separate systems is what lets you debug them.

## This is how it works

Collision and rules are different jobs, and confusing them is the most common beginner trap:

> [pose: thinking] Collisions tell the game that two things met. Rules tell the game what that meeting means.

Tony reaching a wall and Tony entering a Respawn Zone are both meetings between regions, but their rules create different results. The wall stops Tony. The Respawn Zone lets him pass through, then moves him back to safety. The meeting has no meaning until a rule gives it one.

A **trigger** is collision's quieter sibling: a region that detects "the player is here" without physically stopping anything. Checkpoints, cutscene starts, pressure plates, the invisible box that makes enemies notice you — all triggers.

## This is when you need it

Ask these questions about any interaction you want to build:

1. Does something need to *move*? That's the movement system.
2. Does the game need to *know two things met*? Collision or trigger.
3. Should the meeting *block* movement? Collision. Just *detect*? Trigger.
4. What should the meeting *mean*? That's a rule — your code, your design.
5. How does the player *find out*? Feedback.

## This is what it costs

Collision detection is one of the most performance-sensitive systems in a game — every moving thing potentially checks against every other thing. That's why engines use simplified collision shapes (boxes, capsules) instead of exact character outlines. The visible model and the collidable shape are *different objects*, and the gap between them is a deliberate tradeoff: precision versus speed.

## Now you can build it

The vocabulary transfers everywhere:

- Unity: **Collider**, **Trigger**, **OnCollisionEnter**, **OnTriggerEnter**
- Godot: **CollisionShape**, **Area2D/Area3D**, **body_entered**
- Unreal: **Collision component**, **Overlap events**, **Hit events**

Different names, same three jobs: move, detect, decide.

**Exercise:** Open Tony's completed Training Ground and trace two interactions: running into the wall and falling into the Respawn Zone. For each one, identify the movement, detection, event, listener, rule, state change, and feedback. Then change one piece and predict what Tony will do before pressing Play.
