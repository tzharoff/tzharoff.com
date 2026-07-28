---
title: Events: How Does the Game Announce What Happened?
course: know-the-game
courseTitle: Know the Game
order: 4
minutes: 8
objective: Recognize how a game engine announces collisions, overlaps, and other moments so other systems can respond.
vocabulary: event, raise, emit, announcement, event data
---

## This is what it is

A collider can detect that two things touched. A trigger can detect that something entered an area.

But detection isn't the end of the story. Somehow, the rest of the game needs to hear about it.

That's where **events** come in.

An event is an announcement that something just happened.

The engine might announce that a collision began, a trigger was entered, a button was pressed, a timer ended, or an animation finished. Code that is listening for that announcement can respond.

> [pose: excited] An event is the game yelling, "Hey! This just happened!" Code only responds if something is listening.

## This is how it works

Let's return to Tony's Training Ground.

When Tony falls into the Respawn Zone:

1. Tony's collider enters the trigger.
2. Unity detects the overlap.
3. Unity calls the trigger code.
4. The zone announces that Tony needs to respawn.

When Tony collects a coin:

1. Tony overlaps the coin's trigger.
2. Unity detects the overlap.
3. The coin announces that it was collected.
4. Other parts of the game get a chance to respond.

The collision or trigger does the detecting. The event carries the news.

We can describe the complete path like this:

**Something happens → the engine detects it → an event is raised → code responds**

Different tools use different words for the response. You might see **listener**, **handler**, **callback**, or **signal**. The names change, but the job is the same: run this code when that event happens.

> [pose: adjusting-glasses] Unity can tell us that Tony entered the trigger. We can turn that detection into a more useful announcement: "Tony collected a coin!"

## This is why games use it

Events let one part of a game tell other parts what happened without doing every job itself.

The coin doesn't need to control sound, particles, scoring, tutorials, controller vibration, and every other possible response. It can announce that Tony collected it, and the systems that care can respond.

One event might cause several things:

- The coin disappears.
- A sound plays.
- The counter increases.
- A message appears.
- The collection is recorded.

The announcement is one moment. The responses can come from many places.

Events can also carry useful information. A collision event might tell the code what was hit, where contact happened, or which direction something was moving.

That gives the rules enough information to decide what happens next.

> [pose: thinking] Think of Events as notifications, and you can have listeners pick and choose which notifications they pay attention to.

## This is how to recognize it

Events usually happen behind the screen, so look for a single moment that causes an immediate response.

Ask:

- What happened first?
- What system detected it?
- What responses followed?
- Did several responses happen at the same time?
- What information would the responding code need?

When Tony collects a coin and you see it disappear, hear a sound, and watch the counter increase, you may be looking at several systems responding to the same event.

You don't need the source code to form a useful theory about the announcement connecting them.

## Now you can build it

When you open an engine's documentation, search for:

- **Collision event**
- **Trigger event** or **overlap event**
- **Event listener**
- **Event handler**
- **Callback**
- **Signal**
- **Subscribe to event**

For example, you might encounter names like `OnCollisionEnter`, `OnTriggerEnter`, `body_entered`, Hit Event, or Begin Overlap.

Don't worry about memorizing the names. Start with the question:

**What event tells my code that this just happened?**

Raising the event makes the announcement. But how does code sign up to hear it and know when to respond?

That's where listeners come in.

## Exercise: Follow the announcement

Open Tony's Events lesson scene, collect the coin, and watch the event display.

1. **What happened?** Tony entered the coin trigger.
2. **What detected it?** Identify the trigger component.
3. **What event was raised?** Find the announcement in the Inspector.
4. **What information did it carry?** Look for the coin or player reference.
5. **What responses happened afterward?** List everything you saw and heard.
6. **What changed when you disabled the event?** Test it and compare.

You are tracing the path from something happening in the game world to the code that decides what happens next.
