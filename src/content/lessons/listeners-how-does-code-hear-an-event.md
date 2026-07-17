---
title: Listeners: How Does Code Hear an Event?
course: know-the-game
courseTitle: Know the Game
order: 5
minutes: 8
objective: Recognize how code listens for specific events and runs a response when those events are raised.
vocabulary: listener, subscribe, handler, callback, signal, sender, receiver
---

## This is what it is

An event is an announcement that something happened.

But an announcement doesn't do much if nobody is listening.

A **listener** is code that waits for a specific event. When that event is raised, the listener runs a response.

Imagine the game as a busy Discord server. Collisions, triggers, timers, inputs, and animations are all posting messages. If every system read every message, the game would be buried in noise.

Listeners join only the channels they care about.

When a message appears in that channel, the listener can read it and run the right response. Messages in every other channel can keep moving without demanding that listener's attention.

> [pose: expert] Listeners don't stop the server from being noisy. They make sure your code only joins the channels it actually needs.

## This is how it works

Let's return to *Pong*.

The ball hits the paddle and a collision event is raised. Imagine that event as a new message in a `paddle-hit` channel.

Several parts of the game might care about that one event:

- The ball listens so it can change direction.
- The audio system listens so it can play a sound.
- The paddle listens so it can flash.
- A statistics system listens so it can count the hit.

We can describe the path like this:

**Event is raised → listeners are notified → response code runs**

Before that can happen, the listener needs to connect itself to the event. You might hear this called **listening**, **subscribing**, **registering**, or **connecting a signal**.

The code that runs after the event is received might be called a **handler** or **callback**.

The Discord comparison gives us a way to organize the pieces:

- **Server:** The game's event system.
- **Channel:** A type of event a system can listen for.
- **Message:** The event being raised.
- **Message contents:** Information carried by the event.
- **Channel member:** A listener waiting for that event.
- **Reply or reaction:** The handler code running in response.
- **Leaving the channel:** Unsubscribing from the event.

The analogy helps us see the relationships, even though an engine may organize them differently.

## This is why games use it

Listeners reduce the amount of event noise each system needs to care about. They also let several systems respond to the same event without one giant piece of code controlling everything.

The paddle doesn't need to know how the sound system works. The sound system only needs to listen for the right event and play the right sound when it arrives.

This also makes responses easier to change. A developer can add screen shake, an achievement, or controller vibration without changing how the collision itself is detected.

One event can have several listeners. One listener can also subscribe to several kinds of events.

What matters is the connection: **which code is listening for which announcement?**

Good listeners are selective. The audio system doesn't need to hear every movement update. The score display doesn't need to hear every animation event. Each system listens for the smallest useful set of announcements.

When a listener no longer needs an event, it should unsubscribe. Otherwise it may keep responding after it has been removed, disabled, or replaced. That can create duplicate reactions, errors, and a whole new kind of noise.

## This is how to recognize it

Listeners are invisible while you play, but you can look for several responses that begin from the same moment.

Ask:

- What event happened?
- Which systems appeared to respond?
- Did the responses happen at the same time?
- Could one response be removed without changing the others?
- Which part of the game probably sent the announcement?
- Which parts were probably listening?
- Which unrelated events could those listeners safely ignore?

When Pac-Man collects a pellet, the pellet disappears, the score changes, and a sound plays. Those responses could be handled by separate listeners receiving the same collection event.

We cannot know the exact architecture without seeing the code, but the listener model gives us a useful way to investigate how the systems might be separated.

## Now you can build it

When you open an engine's documentation, search for:

- **Event listener**
- **Subscribe to event**
- **Register callback**
- **Event handler**
- **Connect signal**
- **Add listener**
- **Bind event**

Some engines automatically call special functions for collisions and triggers. Others ask you to connect a signal, bind an event, or subscribe a function yourself.

Start with two questions:

**What event am I waiting for?**

**What code should run when I hear it?**

Once a listener runs its code, it can make something happen immediately. It can also change a value the game needs to remember.

That's where flags come in.

## Exercise: Who is listening?

Choose one moment in a game that creates several responses: collecting an item, landing a hit, crossing a finish line, or opening a chest.

Write down:

1. **The sender:** What part of the game announces the event?
2. **The event:** What just happened?
3. **The listeners:** Which systems care about it?
4. **The handlers:** What response does each listener run?
5. **The connection:** What might each listener search for in an engine?

Try removing one imagined listener. If the sound stopped but the score and animation still worked, would the interaction still make sense?

You are separating one moment into the systems that hear it and the jobs they perform.
