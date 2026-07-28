# Tony in the Game: Experience Design Document

**Version:** 0.1  
**Status:** Pre-production  
**Format:** Episodic tutorial game + written lesson series  
**Working season:** Season Zero — Tony's Training Ground

## High concept

Tony in the Game is a game about understanding how games work.

In each episode, Tony encounters a visible problem inside an unfinished game. The learner first experiences the problem as a player, then unlocks the ability to see the hidden systems causing it. After investigating and changing those systems, the learner leaves the playable experience and rebuilds the mechanic in Unity using the accompanying lesson and project files.

The core learning sequence is:

> Experience → Wonder → Investigate → Understand → Build

The playable experience, written explanation, and downloadable Unity project all represent the same mechanic.

## Core promise

**Do not just teach learners where a button is. Teach them to see what the game is doing, why it behaves that way, and how to investigate the next problem themselves.**

## Player fantasy

The learner is Tony's collaborator. Together, they are trapped inside—or responsible for finishing—an incomplete Training Ground. Progress depends on learning to see and repair the invisible systems beneath the visible game.

Tony is simultaneously:

- The playable character
- The learner's comic partner
- The presenter and explainer
- The subject of each experiment
- The bridge between player experience and developer knowledge

## Design pillars

### Experience before terminology

The learner encounters a mechanic before receiving its formal name or explanation. Curiosity should come from a visible contradiction: a wall that lies, a coin that does nothing, a door that forgets, or a sound whose invisible shape affects what Tony hears.

### Make the invisible visible

Designer Vision reveals colliders, triggers, audio ranges, paths, state, events, listeners, and other systems that players normally experience only through their effects.

### Change one thing and test it

Experiments expose a small, curated set of controls. The learner predicts what will happen, changes one property, observes the result, and updates their mental model.

### One continuous adventure

Episodes are not isolated technology demonstrations. Each repaired system becomes part of the same Training Ground and returns in later episodes.

### Understanding unlocks agency

Progress awards new ways to inspect and manipulate the game. Knowledge is represented as a usable tool, not merely a completed article.

## The two-screen system

The original conceptual model is a top screen for play and a bottom screen for explanation. Tony in the Game adapts this into a responsive web layout rather than literally reproducing a handheld console.

### Screen A: What Tony sees

This panel shows the player-facing result:

- A short GIF or video when reading
- The live WebGL experience when playing
- Tony's movement, animation, dialogue, sound, and feedback
- Only information a normal player would perceive

Example:

> Tony touches the coin. It disappears, a sound plays, and the counter increases.

### Screen B: What the game knows

This panel explains or visualizes the hidden chain:

> Trigger entered → collection event raised → coin hides → counter increments → sound plays

Depending on the concept, it may show:

- A compact animated diagram
- A live state readout
- Event messages appearing in sequence
- Inspector-style property controls
- A code excerpt tied to the current moment
- A Designer Vision view of the same scene

### Layout behavior

- **Desktop:** Two synchronized panels side by side.
- **Mobile:** Stacked panels with a clear What Tony Sees / What the Game Knows toggle or sequence.
- **Playable cold open:** The game initially occupies the primary panel. The explanation panel remains concealed or minimal until the learner encounters the problem.
- **Written lesson:** Short looping media and diagrams replace the full WebGL view so the learner does not need to keep the game running.

### Why both GIF and live play are useful

The live experience is for discovery and experimentation. The GIF is for recalling a precise moment while reading the explanation. They are not competing formats.

Each lesson should capture one canonical GIF from the same playable scene used in the WebGL experience.

## Core episode loop

### 1. Title card

- Story title
- Technical subtitle
- Current mission
- Previously unlocked tools

### 2. Cold open

Tony enters the scene through a brief camera-directed dialogue sequence. A seemingly simple objective is established.

### 3. Blind attempt

The learner controls Tony without developer overlays. The mechanic produces a surprising, broken, or unclear result.

### 4. Reaction

Control pauses or soft-locks. The dialogue camera frames Tony and the relevant object. Tony names the contradiction without immediately explaining it.

### 5. Designer Vision unlocked or activated

The hidden system becomes visible. The learner can compare the visible object with the invisible rule affecting it.

### 6. Guided experiment

The learner:

1. Observes the current hidden value.
2. Predicts what a change will do.
3. Changes one controlled property.
4. Tests the scene.
5. Compares the result with the prediction.

### 7. Mission resolution

The learner solves the immediate problem. Tony reaches the objective and the repaired mechanic remains part of the Training Ground.

### 8. Debrief

The two-screen explanation names the concept and reconstructs the hidden sequence.

### 9. Build it

The learner receives:

- A written Unity lesson
- A starter project or package
- A completed reference project or package
- A modification challenge
- Relevant vocabulary and research directions

### 10. Reward and teaser

- A tool, note, secret, or Training Ground feature is unlocked.
- The next episode's problem is teased.

## Designer Vision

Designer Vision is the signature progression system. It represents the learner gaining the ability to inspect the hidden design and implementation of the game.

### First-play behavior

The learner should **not** begin the first collider encounter with Designer Vision active. The contradiction must be experienced normally before it can be understood.

Recommended flow:

1. Tony hits the invisible boundary.
2. Tony reacts.
3. The learner tries from another angle.
4. Tony introduces Designer Vision.
5. The collider becomes visible.

This gives the tool a narrative purpose and creates an authentic before-and-after comparison.

### Persistent unlock behavior

After Designer Vision is unlocked, it remains available throughout the Training Ground.

- On later episodes, learners may activate it when they choose.
- New visualization layers unlock as their concepts are introduced.
- On replay, Designer Vision is available from the beginning.
- A mission may optionally award a bonus for diagnosing the problem before activating it.

Designer Vision therefore behaves like one tool with an expanding set of filters:

- Geometry: colliders and rigidbodies
- Zones: triggers and checkpoints
- Audio: source position, range, falloff, and active mix
- Logic: flags, conditions, and state changes
- Events: broadcasts, listeners, and response order
- Navigation: paths, destinations, and detection ranges
- Feedback: which channels respond to an interaction

### Visual language

Designer Vision should resemble intentional in-world instrumentation rather than raw editor clutter.

- Colliders: translucent cyan surfaces and wireframes
- Triggers: translucent amber volumes
- Audio: concentric range shells with a live intensity indicator
- Events: traveling pulses or labeled message trails
- Listeners: connected nodes that illuminate when responding
- Flags/state: compact pinned labels with current values
- Inactive or broken components: red, interrupted, or flickering visualization

Learners should later see how these visualizations correspond to Unity's actual Gizmos and Inspector.

## Recurring tools

### Designer Vision

Reveals hidden systems. Its filters expand as the season progresses.

### Tony's Notes

Records concepts, vocabulary, discoveries, and diagrams. Notes become the in-game version of the written reference material.

### Rule Inspector

Shows a selected object's relevant conditions and outcomes in plain language.

Example:

> IF Tony has the red key → open the door  
> OTHERWISE → remain locked

### Event Radio

Shows announcements and listeners in real time.

Example:

> `coin_collected` broadcast  
> Score heard it  
> Audio heard it  
> Progress heard it

### Debug Remote

Provides experiment controls such as pause, step, reset, enable/disable, and a small number of lesson-specific values.

### Playtest Mode

Hides all developer information and lets the learner test whether the repaired interaction communicates correctly to an ordinary player.

## Dialogue and cutscene system

The dialogue system must support both story and instruction without becoming a full cinematic toolset.

### Required presentation

- A dialogue camera that can frame Tony, an object, or a two-shot
- A lower-screen dialogue panel with speaker name, portrait, and text
- Tony pose or expression changes
- Simple camera cuts rather than complex continuous animation
- Object highlighting or focus indicators
- Continue, skip, replay, and reduced-motion support
- A return to player control that is immediate and obvious

### Required triggers

- Scene start
- Entering a zone
- First failed attempt
- Repeated failed attempt
- Tool activation
- Correct prediction
- Incorrect prediction
- Mission success
- Secret discovery

### Writing rule

Dialogue introduces the problem, preserves personality, and gives the learner a reason to act. The debrief carries the complete technical explanation.

Tony should not deliver paragraphs while the learner waits to play.

## Mission format

Every playable lesson contains four layers:

**Mission:** The immediate story objective.  
**Success:** The observable completion condition.  
**Developer check:** A question that confirms understanding.  
**Secret:** An optional application or edge case.

Example:

### Mission: The False Wall

**Objective:** Tony needs to reach the red switch without moving the visible wall. Inspect the wall, predict what will happen if its collider is disabled, then test it.  
**Success:** Tony reaches the switch.  
**Developer check:** Explain why the artwork remained unchanged.  
**Secret:** Resize the collider to create a hidden passage without removing it.

## Season Zero episode map

### Episode 01: Tony Is in the Game

**Technical subtitle:** How Do We Know We're Playing a Game?  
**Problem:** Tony enters the Training Ground, but the world does not clearly communicate what he can do.  
**Concepts:** Input, rules, state, feedback, player mental model  
**Unlock:** Tony's Notes

### Episode 02: The Wall That Wasn't

**Technical subtitle:** Colliders and Invisible Boundaries  
**Problem:** Tony stops before touching a wall.  
**Concepts:** Colliders, geometry, collision rules  
**Unlock:** Designer Vision — Geometry filter

### Episode 03: The Floor Is Missing

**Technical subtitle:** Triggers, Zones, and Respawning  
**Problem:** Tony falls through a non-solid zone and returns somewhere else.  
**Concepts:** Triggers, overlap detection, checkpoints, responses  
**Unlock:** Designer Vision — Zones filter

### Episode 04: The Coin That Did Nothing

**Technical subtitle:** Events, Listeners, and Feedback  
**Problem:** The coin disappears, but some expected responses do not occur.  
**Concepts:** Events, listeners, decoupled responses, feedback channels  
**Unlock:** Event Radio and Designer Vision — Events filter

### Episode 05: The Door That Forgot

**Technical subtitle:** Flags, Conditions, and Game State  
**Problem:** Tony collects the key, but the door behaves as if he did not.  
**Concepts:** Boolean flags, conditions, persistent state  
**Unlock:** Rule Inspector and Designer Vision — Logic filter

### Episode 06: Finish the Game

**Technical subtitle:** Connecting Systems into a Complete Player Experience  
**Problem:** The repaired mechanics work separately but must survive one complete playthrough together.  
**Concepts:** Integration, testing, feedback, edge cases, polish  
**Unlock:** Playtest Mode and Season Zero completion

### Candidate bonus episode: Can You Hear Me Now?

**Technical subtitle:** 3D Audio Sources, Range, and Falloff  
**Problem:** Tony hears a radio, but cannot tell where the sound begins, peaks, or disappears.  
**Experiment:** Display the audio source and its range. Move Tony through the falloff zone while showing a live intensity meter. Change minimum distance, maximum distance, and falloff behavior, then listen again without Designer Vision.  
**Unlock:** Designer Vision — Audio filter

## First vertical slice

The first production target is Episode 02, The Wall That Wasn't. It is the smallest experience that proves the complete format.

### Required content

- One small Training Ground room
- Tony movement
- One visible wall with an intentionally oversized collider
- One red objective switch
- Opening dialogue camera sequence
- First-collision reaction
- Designer Vision unlock moment
- Collider visualization
- Collider width adjustment
- Collider enable/disable control
- Prediction prompt
- Reset Experiment
- Mission success state
- Debrief-ready GIF capture
- Starter Unity project/package
- Completed Unity project/package

### Explicitly out of scope

- Voice acting
- Mobile-first controls
- Accounts or cloud saves
- Multiple playable characters
- Large environments
- General-purpose runtime Inspector
- Complex branching dialogue
- Cross-episode persistence beyond local progress

## Website integration

### Landing page

The landing page presents Tony in the Game as an episodic playable show, not only a tutorial library.

### Episode select

Replace the flat Season Zero list with a Training Ground episode-select screen showing:

- Story title
- Technical subtitle
- Mission status
- Concept/tool unlocked
- Available, completed, or coming-soon state

### Lesson page order

1. Episode title card
2. Current objective
3. Optional Play the Problem invitation
4. What Tony Sees / What the Game Knows
5. Technical explanation
6. Build it in Unity
7. Developer check
8. Secret challenge
9. Download starter and completed files
10. Reward and next-episode teaser

### Optional experience gate

The playable experience is an invitation, not a prerequisite. The Unity experience does not load until the learner chooses to enter it.

Recommended presentation:

**Play the Problem**  
Meet the mechanic before we explain it. Help Tony reach the switch and investigate what stops him. Approximately 3 minutes.

- **Enter the Training Ground** — load and play the WebGL scene
- **Watch the Moment** — show the short canonical clip or GIF
- **Skip to the Breakdown** — continue directly to What Tony Sees / What the Game Knows

Skipping never blocks the written lesson, downloads, or later episodes. After completing the playable scene, the primary action changes to **Replay with Designer Vision**.

On devices that cannot run the WebGL experience reliably, Watch the Moment becomes the primary option while the full lesson remains available.

## Unity/Web architecture

- One shared Unity project contains the Training Ground and all episode scenes.
- A shared WebGL application opens the requested lesson scene through a URL or JavaScript parameter.
- The React site embeds the experience in an isolated frame and loads it only after the learner chooses Play.
- Shared assets and runtime code are cached instead of shipping a separate engine build for every lesson.
- The WebGL experience and downloadable lesson projects originate from the same source whenever possible.
- Each downloadable artifact declares its compatible Unity version.

Initial implementation should avoid requiring live communication between React and Unity. Completion can remain inside the embedded experience until the core loop is proven.

## Behind the Scenes strategy

This document and its revisions are part of the product story.

Potential public artifacts:

- The original design question
- Experience flow diagrams
- Early dialogue scripts
- Designer Vision visual tests
- Failed prototypes and what they taught us
- WebGL performance decisions
- How the playable scene and Unity download remain synchronized
- A comparison between the first prototype and shipped lesson

The Behind the Scenes material should demonstrate the same process Tony teaches: identify the visible experience, reveal the underlying system, explain the decisions, and document the tradeoffs.

## Success criteria for the format

The vertical slice succeeds when a new learner can:

1. Describe the problem before receiving terminology.
2. Predict how changing the collider will affect Tony.
3. Use Designer Vision to connect the invisible boundary to the visible result.
4. Explain why disabling the collider does not change the wall's artwork.
5. Recreate or repair the interaction in the provided Unity project.
6. Recognize a similar collider problem in a different scene.

## Open design questions

- Is Tony trapped in the Training Ground, responsible for finishing it, or both?
- Does the learner address Tony directly as an unseen collaborator?
- Is Designer Vision controlled by a keyboard/button input, an on-screen tool wheel, or both?
- How much of the experiment UI should exist inside Unity versus the surrounding web page?
- Should first-time progress unlock episodes sequentially, while still allowing teachers to open any lesson directly?
- What visual treatment distinguishes a deliberate secret from a required objective?
- Should Tony's Awesome Mode become an advanced remix of completed missions with fewer hints and multiple failure causes?
