# Wonderlic 2.0 — the NFL Combine exam, in the browser

**Live site:** https://camthebarman.github.io/Wonderlic-2.0/

A self-contained HTML/CSS/JavaScript study tool. No build step, no dependencies,
no server required — open `index.html` and take the test.

## What it does

**Question 1 is your team.** The app opens white and neutral and asks one
unscored question: what's your favorite team? All 32 clubs, grouped by
division. Pick one and the entire interface — top bar, buttons, progress bars,
selection states, score figures, the browser theme color — takes that club's
colors for the rest of the visit. The choice persists, and the chip in the top
bar changes it at any time.

Team colors are applied through CSS custom properties that JavaScript writes at
runtime, and the ink colors are computed rather than hard-coded: each color is
checked for contrast and nudged until it clears WCAG AA, which is what keeps
Saints gold and Chargers powder blue legible as both a surface and as text. The
true club colors always appear on the team swatches. Correct/incorrect coloring
in the walkthrough stays independent of team color, so a red-primary club never
makes a right answer look wrong.

**Wonderlic 2.0** — a 20-question cognitive exam drawn from a bank of 100.

- **Five all-new sittings.** The engine tracks every question you have been
  served in `localStorage`. Your first five exams are guaranteed to contain
  100 distinct questions with zero repeats.
- **After that, it re-rolls.** Once the bank is exhausted, every exam samples
  from all 100 — but the composition is rebuilt each time: per-category weights
  are re-rolled, category counts are drawn proportionally so no sitting
  degenerates into all arithmetic, the question order is shuffled, the answer
  options are shuffled, and the previous exam's 20 questions are pushed to the
  back of the queue so back-to-back sittings never overlap.
- **No answers until the end.** No score, no feedback, no hints mid-exam. You
  can move backward, change answers and flag items until you submit.
- **Then everything is walked through.** Each of the 20 questions is replayed
  with your answer, the correct answer, the time you spent on it, and a written
  explanation of the reasoning.
- **Then you get compared to the NFL.** Your raw score is scaled to the real
  50-question format (×2.5) and stacked against 42 NFL players whose Combine
  scores leaked publicly, with a fact about each player and their reported
  score, plus commonly cited position averages and population benchmarks.

**Wonderlic 3.0 Beta** — offered at the end of every 2.0 exam. It throws out
arithmetic and vocabulary and tests football itself: match-quarters rules,
Palms, Tampa 2, Tite fronts, Counter GT, Duo, Dagger against single high,
half-slide protection, simulated pressures, the one-yard ineligible-downfield
rule, victory-formation clock math, EPA and cap proration. 20 questions from a
bank of 54, graded on a coordinator scale, with the same full walkthrough.

## Mobile

Built mobile-first. On a phone the exam takes over the screen — the site bar
drops away so the question, the clock and the buttons are all that is left —
with full-width answer targets, a thumb-reachable Previous/Next bar pinned to
the bottom, and `env(safe-area-inset-*)` padding for notched devices. Every
interactive control is at least 42px on its short edge, tables scroll inside
their own box rather than pushing the page sideways, and the layout was checked
on all 32 team themes at 390px wide with no horizontal overflow.

## Question banks

| Bank | File | Items | Categories |
| --- | --- | --- | --- |
| Wonderlic 2.0 | `js/questions.js` | 100 | Math, Number Series, Analogies, Word Meaning, Logic, Attention to Detail, Sentence Logic, Proverbs, Dates & Sequence, Spatial Reasoning |
| Wonderlic 3.0 Beta | `js/questions-advanced.js` | 54 | Coverage, Fronts & Run Fits, Blocking Schemes, Route Concepts, Protection & Pressure, Rules, Situational, Analytics & Roster |

Team colors live in `js/teams.js`.

## Timing

The real Wonderlic Personnel Test is 50 questions in 12 minutes. This exam is
20 questions, so **Combine pace** is the same rate: 4:48. **Study pace** (10:00)
and **Untimed** are also available. When the clock hits zero the exam submits
itself with whatever you have.

## Running it locally

```
open index.html          # or any static server
python3 -m http.server   # http://localhost:8000
```

## Deploying

`.github/workflows/pages.yml` publishes the repository root to GitHub Pages on
every push to `main`, and can be run by hand from the Actions tab. It requires **Settings → Pages → Build and deployment → Source:
GitHub Actions** to be selected once; nothing is built, the static files are
uploaded as-is.

All asset paths are relative, so the site works unchanged at a project-Pages
subpath such as `/Wonderlic-2.0/`, at a domain root, or straight off the
filesystem.

Progress lives in `localStorage` under `wonderlic_nfl_state_v1`, and the chosen
team under `wonderlic_team_v1`. Each bank has a
"Reset this bank" button on its home screen that clears seen-question history and
restarts the all-new cycle.

Keyboard: `1`–`5` pick an answer, `←`/`→` navigate, `F` flags, `Enter` advances.

## A note on the player scores

The NFL and Wonderlic have never officially released individual scores. Every
figure in `js/players.js` comes from numbers that leaked to reporters around the
Combine and have been repeated ever since. Several are disputed, some players
have denied theirs, and a few retested with different results. The app says so
on every screen that shows them. Treat it as well-documented folklore, not an
official transcript.

Not affiliated with the National Football League or Wonderlic Inc.
