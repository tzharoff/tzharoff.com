# Tony Pose Library

The 12 poses from the character sheet, sliced into individual PNGs in [`public/tony/`](../public/tony/). Names follow the Brand Bible's core pose library.

## Using poses in lessons

Start any blockquote with a pose tag to pick Tony's expression in the **Tony's Frame** callout:

```markdown
> [pose: excited] The rule creates the behavior. Feedback creates the experience.
```

Quotes **without** a tag automatically rotate through `explaining → expert → excited → thinking`, so every frame gets a Tony either way.

## Using poses in components

`DialogueBox` accepts an optional `pose` prop:

```tsx
<DialogueBox pose="frustrated" heading="Development rule of thumb" lines={[...]} />
```

Without `pose`, it falls back to the photo (`/tony.png`).

## The poses

| Pose | Tag | When to use |
| --- | --- | --- |
| ![explaining](../public/tony/explaining.png) | `[pose: explaining]` | Neutral teaching voice. The default — introducing a concept, walking through an idea. |
| ![thinking](../public/tony/thinking.png) | `[pose: thinking]` | Thoughtful, finger on chin. Posing a question, weighing a tradeoff, "hmm, why is that?" |
| ![pointing-left](../public/tony/pointing-left.png) | `[pose: pointing-left]` | Stern point to the left. Calling out a problem, "look at what this code is doing." |
| ![pointing-right](../public/tony/pointing-right.png) | `[pose: pointing-right]` | Shocked point to the right. "Wait — look at THAT!" Surprising evidence. |
| ![pointing-left-shocked](../public/tony/pointing-left-shocked.png) | `[pose: pointing-left-shocked]` | The shocked point, mirrored to face left. |
| ![pointing-right-angry](../public/tony/pointing-right-angry.png) | `[pose: pointing-right-angry]` | The stern point, mirrored to face right. |
| ![excited](../public/tony/excited.png) | `[pose: excited]` | Excited discovery! The payoff moment, the aha, the reason the mechanic is cool. |
| ![skeptical](../public/tony/skeptical.png) | `[pose: skeptical]` | Arms crossed, unconvinced. Challenging a common assumption or a "best practice" that isn't. |
| ![confused](../public/tony/confused.png) | `[pose: confused]` | Shrugging. Naming the confusion every learner feels before the explanation lands. |
| ![frustrated](../public/tony/frustrated.png) | `[pose: frustrated]` | Head in hands, debugging. Bug stories, production pain, "we've all been here." |
| ![panic](../public/tony/panic.png) | `[pose: panic]` | Jump-scare panic. Horror-game bits, scary-sounding topics, dramatic warnings. |
| ![laughing](../public/tony/laughing.png) | `[pose: laughing]` | Big laugh. Jokes landing, absurd bugs, playful asides. |
| ![deadpan](../public/tony/deadpan.png) | `[pose: deadpan]` | The deadpan stare. Dry humor, "yes, the engine really does that." |
| ![expert](../public/tony/expert.png) | `[pose: expert]` | Whiteboard mode with pointer. Formal definitions, vocabulary, the authoritative frame. |
| ![adjusting-glasses](../public/tony/adjusting-glasses.png) | `[pose: adjusting-glasses]` | Pushing up the glasses, all business. "Let's look at this properly." Pre-deep-dive. |
| ![idea](../public/tony/idea.png) | `[pose: idea]` | Finger up, delighted. The lightbulb moment, a tip, "here's the trick." |
| ![investigating](../public/tony/investigating.png) | `[pose: investigating]` | Magnifying glass. Research mode — digging into a mechanic, reading the fine print. |
| ![annoyed](../public/tony/annoyed.png) | `[pose: annoyed]` | Quietly irritated. Janky mechanics, bad defaults, "why does it do that." |
| ![gasp](../public/tony/gasp.png) | `[pose: gasp]` | Hands up, jaw dropped. Plot twists, shocking reveals, "the game was doing WHAT?" |
| ![proud](../public/tony/proud.png) | `[pose: proud]` | Eyes closed, satisfied. Job well done, a shipped feature, post-exercise glow. |
| ![facepalm](../public/tony/facepalm.png) | `[pose: facepalm]` | The classic. Obvious-in-hindsight bugs, self-deprecating dev stories. |
| ![whisper](../public/tony/whisper.png) | `[pose: whisper]` | Hand beside mouth, sly. Insider tips, secrets, "between you and me…" |
| ![notes](../public/tony/notes.png) | `[pose: notes]` | Clipboard and pencil. Checklists, playtest observations, gathering requirements. |
| ![graduate](../public/tony/graduate.png) | `[pose: graduate]` | Donning the mortarboard. Course completions, graduation moments, leveling up. |
| ![stop](../public/tony/stop.png) | `[pose: stop]` | Palm out, stern. Warnings, common mistakes, "don't do this." |
| ![shush](../public/tony/shush.png) | `[pose: shush]` | Wink and a finger to the lips. Spoiler territory, easter eggs, secret techniques. |

## Adding a new pose

1. Drop the PNG (transparent background) into `public/tony/`.
2. Add its name to the `tonyPoses` array in [`src/lib/lessons.ts`](../src/lib/lessons.ts) — that whitelists it for `[pose: ...]` tags and the `DialogueBox` prop.
3. Add a row to this table.
