/* ==========================================================================
   WONDERLIC 3.0 BETA — ADVANCED FOOTBALL CONCEPTS BANK (54 questions)
   Coverage structures, fronts and run fits, blocking schemes, route concepts,
   protection and pressure, rules minutiae, clock management, and analytics.
   This is a football-IQ instrument, not a cognitive-ability test.
   ========================================================================== */

const ADVANCED_BANK = [

/* ---------------- COVERAGE STRUCTURE ---------------- */
{
  id: 'A01', cat: 'Coverage',
  q: 'In Tampa 2, what makes the structure different from a standard Cover 2?',
  options: [
    'The middle linebacker sprints to the deep middle hole, turning two deep defenders into three',
    'Both safeties rotate to the same half of the field',
    'The corners play man coverage on the outside receivers',
    'The strong safety walks down as the force player and the corners take deep thirds'
  ],
  answer: 0,
  why: 'Standard Cover 2 leaves a hole between the safeties on the deep middle seam. Tampa 2 asks the Mike to run the "pole" — carrying #3 vertical down the middle — so the shell plays like three deep without giving up the flats that a true Cover 3 concedes.'
},
{
  id: 'A02', cat: 'Coverage',
  q: 'In Palms (also called 2-Read or Cover 2 match), what is the cornerback keying after the snap?',
  options: [
    'The quarterback’s front shoulder',
    'The release of #2 — if #2 breaks to the flat, the corner jumps #2 and the safety takes #1 vertical',
    'The running back’s first step, to diagnose run or pass',
    'The tight end’s block, to trigger a fire-zone exchange'
  ],
  answer: 1,
  why: 'Palms is a pattern-match variation of quarters. The corner reads #2: an out-breaking #2 lets him drive on the flat route while the safety takes over #1 vertically. That trade is what makes Palms a smash and flat-route killer, but it also stresses the safety on a deep over-the-top throw.'
},
{
  id: 'A03', cat: 'Coverage',
  q: 'What is Cover 6?',
  options: [
    'A six-man pressure with man coverage behind it',
    'Quarters coverage to one side of the field and Cover 2 to the other side',
    'Three deep defenders and three underneath',
    'A double-robber look with two hole players'
  ],
  answer: 1,
  why: 'Cover 6 is "quarter-quarter-half." One half plays quarters rules (usually the field) and the other plays Cover 2 (usually the boundary). It gets its name from the 4 + 2 of its two halves and lets a defense apply different rules to each side based on formation strength.'
},
{
  id: 'A04', cat: 'Coverage',
  q: 'In a Cover 3 "Cloud" call, who is the force player to that side?',
  options: [
    'The cornerback, who rolls down to the flat while the safety takes that deep third',
    'The strong safety, with the corner staying over the top',
    'The nickel, with both safeties staying deep',
    'The defensive end, in a two-gap alignment'
  ],
  answer: 0,
  why: '"Cloud" means the corner has the cloud/flat — he squats as the force defender and a safety rotates over the top to replace him in the deep third. "Sky" is the opposite rotation: safety down as force, corner over the top.'
},
{
  id: 'A05', cat: 'Coverage',
  q: 'What is the "robber" doing in a Cover 1 Robber call?',
  options: [
    'Blitzing off the edge from a depth of five yards',
    'Playing a two-gap technique against the run',
    'Sitting in the intermediate middle reading the quarterback’s eyes while the free safety plays the deep middle',
    'Doubling the #1 receiver with the corner'
  ],
  answer: 2,
  why: 'Cover 1 uses man across the board with a single deep safety. The extra defender — the robber or "rat" — plays eye-based zone in the middle to steal digs, crossers and shallow throws, which is why dropping a linebacker or safety there is the classic answer to a mesh or dig-heavy game plan.'
},
{
  id: 'A06', cat: 'Coverage',
  q: 'Against a bunch or stack set, defenders often play a "banjo." What does that mean?',
  options: [
    'Both defenders play zone and pass off everything',
    'An in-out rule: whichever receiver releases inside belongs to the inside defender, the outside release to the outside defender',
    'Both defenders take the point man in the bunch',
    'The corner presses while the safety plays 12 yards deep'
  ],
  answer: 1,
  why: 'A banjo replaces "who has which man" with "who has which release." It defeats the pick and rub concepts a bunch alignment is built to create, because no defender has to chase a man through traffic.'
},
{
  id: 'A07', cat: 'Coverage',
  q: 'Post-snap, what does a quarterback mean by reading "MOFC" versus "MOFO"?',
  options: [
    'Whether the middle of the field is closed by a single deep safety or open with two deep safeties',
    'Whether the offense has motioned to the field or the boundary',
    'Whether the front is odd or even',
    'Whether the coverage is man or zone'
  ],
  answer: 0,
  why: 'Middle of field closed means one deep safety (Cover 1 or Cover 3 family), so the post is capped and the seams and back-shoulder throws open up. Middle of field open means two deep safeties (Cover 2, 4 or 0 shells), which invites the dig, deep cross and four-verts bender at the vacated middle.'
},
{
  id: 'A08', cat: 'Coverage',
  q: 'What is the single biggest structural vulnerability of Cover 0?',
  options: [
    'It cannot defend the flats',
    'There is no deep help, so any beaten defender gives up an explosive play, and a quick sight adjustment beats the pressure',
    'It leaves the deep middle uncovered but protects the sidelines',
    'It cannot be run out of a nickel personnel package'
  ],
  answer: 1,
  why: 'Cover 0 trades every deep defender for an extra rusher. The math works only if the pressure gets home before the hot throw. Offenses answer it with quick sight adjustments, slants and empty sets that let the quarterback identify the free rusher pre-snap.'
},
{
  id: 'A09', cat: 'Coverage',
  q: 'In a match-quarters scheme, what is the safety’s primary post-snap key?',
  options: [
    'The quarterback’s drop depth', 'The #2 receiver to his side', 'The offensive tackle’s helmet', 'The running back'
  ],
  answer: 1,
  why: 'Quarters rules are triggered by #2: vertical past about 10-12 yards and the safety carries him man-to-man; out or under, and the safety comes off to help on #1 or rob the middle. Getting that key wrong is how quarters gives up a seam throw.'
},
{
  id: 'A10', cat: 'Coverage',
  q: 'Jet motion crosses the formation and one defender travels with the motion man the entire way while the rest of the defense stands still. What is the most likely coverage indicator?',
  options: ['Zone coverage', 'Man coverage', 'A fire zone blitz', 'A two-deep zone rotation'],
  answer: 1,
  why: 'A defender who chases motion all the way across is carrying a man assignment. Zone defenses typically bump, rotate or pass the motion man off between defenders. This pre-snap tell is the cheapest coverage information an offense can buy.'
},

/* ---------------- FRONTS & RUN FITS ---------------- */
{
  id: 'B01', cat: 'Fronts & Run Fits',
  q: 'Where does a 3-technique defensive tackle align?',
  options: [
    'Head up over the center', 'On the outside shoulder of the guard', 'On the inside shoulder of the tackle', 'Outside shoulder of the tight end'
  ],
  answer: 1,
  why: 'In the standard technique numbering, 0 is head up on the center, 1 is a shade on the guard’s inside shoulder, 2 is head up on the guard, 3 is the guard’s outside shoulder (the B gap), 5 is the tackle’s outside shoulder, and 9 is outside the tight end.'
},
{
  id: 'B02', cat: 'Fronts & Run Fits',
  q: 'Which front covers the center and both guards with defensive linemen, denying the offense any double team on the interior?',
  options: ['Under front', 'Over front', 'Bear (double eagle) front', 'Tite front'],
  answer: 2,
  why: 'The Bear front puts a nose on the center and defenders on both guards, so all three interior blockers are occupied one-on-one. It is brutal against interior runs, but it demands man coverage behind it and leaves the edges and the quick game exposed.'
},
{
  id: 'B03', cat: 'Fronts & Run Fits',
  q: 'A Tite front aligns two 4i techniques (inside shoulder of the tackles) with a nose over the center. What is the design intent?',
  options: [
    'To generate interior pressure with pure one-on-one pass rush',
    'To squeeze the interior gaps and force runs to bounce outside to unblocked overhang defenders while keeping the linebackers clean',
    'To force the offense into empty formations',
    'To defend the deep middle with an extra hook defender'
  ],
  answer: 1,
  why: 'Tite (or Mint) fronts became the standard answer to zone read and RPO offenses. Closing the B gaps with 4i techniques removes the interior read, keeps the second level free of climbing linemen, and spills everything out to the alley defenders.'
},
{
  id: 'B04', cat: 'Fronts & Run Fits',
  q: 'What is the primary tradeoff of a wide-9 alignment for the defensive ends?',
  options: [
    'It improves the pass rush edge but widens the run fits and can open interior and cutback lanes',
    'It strengthens run defense but slows the pass rush',
    'It requires the linebackers to blitz on every snap',
    'It is illegal against an unbalanced formation'
  ],
  answer: 0,
  why: 'Aligning outside the tight end gives the rusher a better angle and a head start on the arc, but it also puts him far from the ball and hands the offense easier down blocks and cutback creases. Wide-9 teams generally need linebackers who can run and safeties willing to fit the run.'
},
{
  id: 'B05', cat: 'Fronts & Run Fits',
  q: 'A defender is coached to "spill" a kick-out block. What is he doing?',
  options: [
    'Taking on the blocker with his outside shoulder to keep the ball inside',
    'Wrong-arming the block to force the ball carrier outside into unblocked pursuit',
    'Dropping into the flat to defend the swing pass',
    'Two-gapping the pulling guard'
  ],
  answer: 1,
  why: 'Spilling means wrong-arming the kick-out so the ball has to bounce outside, where the force defender and pursuit are waiting. The alternative is to "box" — keeping outside leverage so the ball stays inside to the linebackers. A defense must know which fit it is playing, because mixing spill and box players creates the crease.'
},
{
  id: 'B06', cat: 'Fronts & Run Fits',
  q: 'On a zone read, the defense runs a "scrape exchange." What happens?',
  options: [
    'The end and nose stunt to the same gap',
    'The read end crashes on the dive while a linebacker scrapes over the top to take the quarterback',
    'The safety rotates down to replace a blitzing linebacker',
    'The end drops into the flat while a corner blitzes'
  ],
  answer: 1,
  why: 'The zone read makes the read defender wrong either way. A scrape exchange answers it by assigning the crashing end the running back and having a linebacker take the quarterback, so the read gives the quarterback a false pull key into an unblocked defender.'
},
{
  id: 'B07', cat: 'Fronts & Run Fits',
  q: 'In run-fit terminology, what is the "force" player’s job?',
  options: [
    'Penetrate the backfield and disrupt the mesh point',
    'Set the edge and turn the ball back inside to pursuit',
    'Cover the running back out of the backfield',
    'Take the first threat through the A gap'
  ],
  answer: 1,
  why: 'The force (or contain) defender owns the edge. If he gets reached or turns his shoulders out, the run is outside of everyone. Every legal run fit assigns one force player per side — corner, safety, nickel or outside linebacker depending on the coverage rotation.'
},

/* ---------------- BLOCKING SCHEMES ---------------- */
{
  id: 'C01', cat: 'Blocking Schemes',
  q: 'In Counter GT, which two blockers pull and what does each do?',
  options: [
    'Both guards pull and lead through the hole',
    'The backside guard kicks out the end man on the line and the backside tackle wraps through the hole to the linebacker',
    'The center pulls to kick out while the tight end wraps',
    'The playside tackle pulls flat and the fullback leads inside'
  ],
  answer: 1,
  why: 'Counter GT gets its name from the guard and tackle who pull. The guard kicks out the edge defender and the tackle wraps up into the hole for the first linebacker, while the playside blockers down-block to create the wall. Counter also gives the false-step misdirection that holds the second level.'
},
{
  id: 'C02', cat: 'Blocking Schemes',
  q: 'What distinguishes Power from Counter?',
  options: [
    'Power has no pulling blocker at all',
    'Power kicks out with a back or tight end and pulls the backside guard to lead up through the hole; Counter pulls two blockers and adds misdirection footwork',
    'Power is only run from the shotgun',
    'Power uses zone rules for every blocker'
  ],
  answer: 1,
  why: 'Both are gap schemes built on down blocks and a puller, but Power typically uses a fullback or tight end to kick out with a single pulling guard leading, while Counter pulls two blockers from the backside and starts the back away from the point of attack.'
},
{
  id: 'C03', cat: 'Blocking Schemes',
  q: 'On outside (wide) zone, a running back is taught "bang, bend, bounce." What does that describe?',
  options: [
    'The three tempos of his footwork at the mesh point',
    'His three read options: cut up inside the playside tackle, cut back behind the front, or press the ball outside the edge',
    'How to set up a cut block on the backside',
    'The three pass protection checks he makes before releasing'
  ],
  answer: 1,
  why: 'Wide zone stretches the front horizontally and asks the back to pick a lane off the first defender who declares. Bang is the cut up inside, bend is the backside cut when the front over-pursues, and bounce is keeping it outside when the edge is reached. The read discipline, not the blocking, is usually what makes or breaks the scheme.'
},
{
  id: 'C04', cat: 'Blocking Schemes',
  q: 'What makes the Duo concept different from Power?',
  options: [
    'Duo has no puller — it is built on vertical double teams with the back reading the linebacker’s fill',
    'Duo pulls both tackles',
    'Duo can only be run out of an empty formation',
    'Duo asks the linemen to reach block the playside gap'
  ],
  answer: 0,
  why: 'Duo is often called "power without a puller." Two double teams drive vertically off the ball while the back presses downhill and cuts off the linebacker who fills first. It is a favorite against light boxes and two-high shells because it wins with displacement rather than angles.'
},
{
  id: 'C05', cat: 'Blocking Schemes',
  q: 'What is a "pin and pull" scheme?',
  options: [
    'Every lineman blocks the man in front of him and the back picks a gap',
    'Covered linemen pin the defender inside while uncovered linemen pull around the edge',
    'The center and both guards pull in the same direction',
    'The tackles block down and the quarterback reads the end'
  ],
  answer: 1,
  why: 'Pin and pull combines gap and zone ideas. A lineman with a defender inside of him pins that man down; a lineman with no one to pin pulls to the edge. It gets an outside-zone look with gap-scheme angles and lets an offense run wide without needing a reach block on a nose.'
},
{
  id: 'C06', cat: 'Blocking Schemes',
  q: 'On a combination (combo) block, how do the two linemen decide who comes off to the linebacker?',
  options: [
    'The playside lineman always climbs first',
    'They stay on the down lineman until his movement is controlled, then the lineman whose path the linebacker crosses takes him — the "four hands, four eyes" rule',
    'The backside lineman climbs on the snap',
    'Neither climbs; the back is expected to make the linebacker miss'
  ],
  answer: 1,
  why: 'A combo block is a double team with a built-in pass-off. Four hands on the down lineman, four eyes on the linebacker: whoever the linebacker fits toward takes him, while the other finishes the down lineman. Climbing too early is the most common cause of a stuffed inside zone run.'
},

/* ---------------- ROUTE CONCEPTS ---------------- */
{
  id: 'D01', cat: 'Route Concepts',
  q: 'The Dagger concept pairs a deep dig with a vertical from the inside receiver. What is the vertical route’s job?',
  options: [
    'To be the primary read against two-high safeties',
    'To clear the middle defender and hold the safety so the dig comes open behind the linebackers',
    'To block the nickel defender',
    'To occupy the flat defender'
  ],
  answer: 1,
  why: 'Dagger is a vertical clear-out plus an in-breaker. The seam runner pulls the middle-of-field defender out of the throwing window, and the dig replaces that space at 15-18 yards. It is a staple single-high beater for exactly that reason.'
},
{
  id: 'D02', cat: 'Route Concepts',
  q: 'The Smash concept (hitch underneath, corner route over the top) is designed primarily to attack which defender?',
  options: [
    'The middle linebacker', 'The free safety', 'The cornerback in a two-deep zone', 'The nickel in man coverage'
  ],
  answer: 2,
  why: 'Smash is a high-low on the corner. In Cover 2, that corner has to squat on the hitch and also carry or funnel the corner route — he cannot do both. The throw goes opposite his leverage, which is why Smash is the classic Cover 2 answer.'
},
{
  id: 'D03', cat: 'Route Concepts',
  q: 'In the Mesh concept, what is the coaching rule for the crossers once they clear the mesh point?',
  options: [
    'Always sit down at 6 yards regardless of coverage',
    'Keep running against man coverage to create the rub, and settle in the open window against zone',
    'Always convert to a corner route',
    'Turn back toward the quarterback on every snap'
  ],
  answer: 1,
  why: 'Mesh is a coverage-indifferent concept because the crossers change behavior: against man they run away from trailing defenders and let the traffic at the mesh point do the work, and against zone they find the hole between underneath defenders and sit.'
},
{
  id: 'D04', cat: 'Route Concepts',
  q: 'Sail (or Flood) puts a vertical, an out-breaking route at 12-14 yards and a flat route on the same side. What coverage is it built to stress?',
  options: [
    'Cover 0', 'Cover 3, by putting three routes into two defenders on one side', 'Cover 2 Man', 'Quarters, by attacking the safety'
  ],
  answer: 1,
  why: 'Flooding a side creates a three-level vertical stretch against the flat defender and the deep-third corner. The corner cannot leave the vertical, so the sail route lands in the void the flat defender vacates — a classic Cover 3 beater, especially off play action.'
},
{
  id: 'D05', cat: 'Route Concepts',
  q: 'Four Verts against a single-high (MOFC) look: what adjustment is typically coached for an inside receiver?',
  options: [
    'Break the route off at 6 yards',
    'Bend the seam toward the vacated middle of the field, since only one safety can cap the post',
    'Run a flat route instead',
    'Stop at the sticks and turn around'
  ],
  answer: 1,
  why: 'Four Verts is a rules concept, not four straight lines. Against one deep safety, an inside receiver bends toward the middle behind the safety’s leverage; against two-high, the seams stay outside the hash to hold the quarters safeties and let the middle open for a dig or cross underneath.'
},
{
  id: 'D06', cat: 'Route Concepts',
  q: 'What is the Levels concept designed to do?',
  options: [
    'Stretch a hook defender vertically with two in-breaking routes at different depths',
    'Stretch the defense horizontally with three flat routes',
    'Clear one side of the field entirely',
    'Create a pick against press man'
  ],
  answer: 0,
  why: 'Levels puts a shallow in-breaker under a deeper in-breaker attacking the same defender. He can only take one, and the quarterback throws off his reaction — a high-low read that works against zone and can still function against man if the shallow wins inside.'
},
{
  id: 'D07', cat: 'Route Concepts',
  q: 'In the Stick concept, what makes the stick route an "option" route?',
  options: [
    'The receiver chooses the route based on the play clock',
    'It settles facing the quarterback against zone but converts outward away from leverage against man',
    'The quarterback signals the break at the snap',
    'It is run only on third down'
  ],
  answer: 1,
  why: 'The stick runner reads the flat defender and coverage type: sit in the window against zone, break out or away from leverage against man. That built-in answer is why Stick is one of the most-called third-and-short concepts in football.'
},

/* ---------------- PROTECTION & PRESSURE ---------------- */
{
  id: 'E01', cat: 'Protection & Pressure',
  q: 'In a half-slide protection, how are the responsibilities divided?',
  options: [
    'All five linemen slide in the same direction',
    'Three linemen slide to cover gaps one way while the other two block man on the other side, usually with the back responsible for the extra rusher',
    'The back always blocks the defensive end',
    'The center blocks the free rusher after identifying the Mike'
  ],
  answer: 1,
  why: 'Half-slide gives you a gap-sound side against stunts and blitzes and a man side where the athletic protectors work one-on-one. The tradeoff is that the back is left with a linebacker on the man side, and offenses that keep only five in have to build in a hot throw.'
},
{
  id: 'E02', cat: 'Protection & Pressure',
  q: 'What is the practical purpose of the quarterback or center declaring the "Mike"?',
  options: [
    'To tell the receivers which route to convert',
    'To set the protection’s reference point so every blocker knows who he has and which way the slide goes',
    'To signal the snap count to the offensive line',
    'To identify which safety is rotating down'
  ],
  answer: 1,
  why: 'The Mike point is the anchor of the count. Naming it tells the line where the front is being blocked from, which gaps the slide covers, and who the back has. Get the declaration wrong and a free rusher shows up even though all five linemen blocked correctly.'
},
{
  id: 'E03', cat: 'Protection & Pressure',
  q: 'The offense keeps five in to protect and the defense rushes six. What is the built-in answer?',
  options: [
    'The quarterback must throw the ball away',
    'The center blocks two rushers',
    'The hot receiver adjusts his route and the quarterback throws to the area the extra rusher vacated',
    'The running back releases into a wheel route'
  ],
  answer: 2,
  why: 'Five blockers cannot account for six rushers, so the answer is arithmetic, not effort. The unblocked rusher’s vacated zone is where the hot throw goes, and the quarterback must get the ball out before that rusher arrives — typically on the third step.'
},
{
  id: 'E04', cat: 'Protection & Pressure',
  q: 'What does BOB protection stand for and mean?',
  options: [
    'Back on ball — the back checks the ball carrier first',
    'Big on big — linemen take the defensive linemen and the back takes the linebacker',
    'Blitz or bail — the line slides toward pressure',
    'Box on backer — the tight end seals the edge'
  ],
  answer: 1,
  why: 'Big on big assigns the five linemen to the down linemen and gives the sixth threat (usually a linebacker) to the running back or tight end. It is the simplest man protection to install and the easiest for a defense to attack with twists and overload looks.'
},
{
  id: 'E05', cat: 'Protection & Pressure',
  q: 'What is a "simulated pressure" (creeper)?',
  options: [
    'A six- or seven-man blitz from a two-high shell',
    'A four-man rush that shows blitz but drops a defensive lineman and replaces him with a linebacker or defensive back',
    'A delayed blitz by the free safety after the snap',
    'A stunt in which both defensive tackles cross'
  ],
  answer: 1,
  why: 'Simulated pressures keep full coverage — still only four rushers — while distorting the protection’s math. The offense slides toward a threat that drops out, and the replacement rusher comes free. That is why they have largely replaced the true blitz as the pressure tool of choice.'
},
{
  id: 'E06', cat: 'Protection & Pressure',
  q: 'On a T-E (tackle-end) twist, what are the two rushers’ roles?',
  options: [
    'Both rushers attack the same gap simultaneously',
    'One is the penetrator who crosses first to occupy blockers, the other is the looper who comes behind him into the vacated lane',
    'Both drop into coverage after two steps',
    'The end sets the edge while the tackle two-gaps'
  ],
  answer: 1,
  why: 'Twists beat protection by manufacturing a pick. The penetrator must get flat and cross the blocker’s face to force a pass-off; the looper times his path to hit the seam created. Linemen defeat it by passing off cleanly and staying square instead of chasing.'
},

/* ---------------- RULES ---------------- */
{
  id: 'F01', cat: 'Rules',
  q: 'How many offensive players must be on the line of scrimmage for a legal formation?',
  options: ['5', '6', '7', '8'],
  answer: 2,
  why: 'Seven players must be on the line at the snap. Fewer is an illegal formation. This is why a receiver who covers up a tight end makes that tight end ineligible — he is no longer on the end of the line.'
},
{
  id: 'F02', cat: 'Rules',
  q: 'In the NFL, how far downfield may an ineligible offensive lineman travel before a forward pass crosses the line of scrimmage?',
  options: ['1 yard', '3 yards', '5 yards', 'There is no limit'],
  answer: 0,
  why: 'The NFL limit is one yard — college allows three. That single yard is the biggest reason college-style RPOs have to be adapted for the NFL, since a run-blocking lineman gets downfield in a hurry.'
},
{
  id: 'F03', cat: 'Rules',
  q: 'Under what condition can a quarterback throw the ball away without being called for intentional grounding?',
  options: [
    'Any time he is being pressured',
    'When he is outside the tackle box and the pass reaches the line of scrimmage or beyond',
    'Only when he is inside his own 5-yard line',
    'Only on fourth down'
  ],
  answer: 1,
  why: 'Getting outside the tackle box and putting the ball at or beyond the line of scrimmage (including out of bounds past it) makes the throwaway legal. Inside the pocket, the passer needs an eligible receiver in the area of the throw.'
},
{
  id: 'F04', cat: 'Rules',
  q: 'On fourth down, the offense fumbles forward and a teammate recovers it in the end zone. What is the ruling?',
  options: [
    'Touchdown',
    'Only the player who fumbled may recover and advance it; the ball is returned to the spot of the fumble',
    'The defense automatically takes possession',
    'The play is replayed'
  ],
  answer: 1,
  why: 'The fourth-down fumble rule (which also applies inside the last two minutes of a half) stops teams from purposely batting the ball forward. A teammate may recover, but the ball comes back to the spot of the fumble — so on fourth down that usually means a turnover on downs.'
},
{
  id: 'F05', cat: 'Rules',
  q: 'The offense commits a false start with 40 seconds left in the half and the clock running. What can the defense choose besides the yardage?',
  options: [
    'An automatic first down', 'A 10-second runoff', 'A charged timeout against the offense', 'A replay of the previous down'
  ],
  answer: 1,
  why: 'Inside the final minute of either half, an offensive foul that stops the clock carries a 10-second runoff, which the defense may accept or decline. It is the rule that turns a late false start into a game-ending penalty.'
},
{
  id: 'F06', cat: 'Rules',
  q: 'After a safety, how does play resume?',
  options: [
    'The scoring team kicks off from its own 35',
    'The team that was scored upon puts the ball in play with a free kick from its own 20',
    'The scoring team takes possession at midfield',
    'A standard kickoff from the 30'
  ],
  answer: 1,
  why: 'The team charged with the safety free-kicks from its own 20. Because it is a free kick, the team may punt it, place-kick it without a tee holder restriction, or drop-kick it — which is why safety kicks look different from kickoffs.'
},
{
  id: 'F07', cat: 'Rules',
  q: 'A returner signals for a fair catch on a punt with three seconds left. What rarely used option does his team have?',
  options: [
    'An untimed down from the spot',
    'A fair catch kick — a free-kick field goal attempt from the spot of the catch with no rush',
    'A choice to take the ball at midfield',
    'An automatic first down'
  ],
  answer: 1,
  why: 'The fair catch kick is a legal but nearly extinct play: an unrushed free-kick field goal from the spot of the catch. It has been attempted only a handful of times in the modern era and has not been converted in the NFL since the 1970s.'
},

/* ---------------- SITUATIONAL & CLOCK ---------------- */
{
  id: 'G01', cat: 'Situational',
  q: 'You lead by 3 with the ball and the defense has no timeouts left. Roughly what game clock reading lets you end it in victory formation?',
  options: ['0:45', '1:24', '2:10', '3:00'],
  answer: 1,
  why: 'Each kneel burns about a play plus the 40-second play clock, so the two gaps between three snaps consume roughly 84 seconds. At about 1:24 you can take three knees and reach zero. Any more than that and you must run a play or accept giving the ball back.'
},
{
  id: 'G02', cat: 'Situational',
  q: 'You score a touchdown to cut a 14-point deficit to 8 with time for one more possession after a stop. Why do modern analytics favor going for two immediately?',
  options: [
    'It is worth more expected points than an extra point in every situation',
    'It gives you information: convert and the next touchdown plus a kick wins it; fail and you still have a chance to go for two at the end to tie',
    'It stops the clock',
    'It prevents the defense from using timeouts'
  ],
  answer: 1,
  why: 'The value is informational, not just arithmetic. Going for two first tells you whether you need a second conversion later, so you can play the rest of the drive accordingly. Kicking first leaves you needing a two-point conversion at the buzzer anyway, with no chance to adjust.'
},
{
  id: 'G03', cat: 'Situational',
  q: 'You trail by 4 with 1:50 left, no timeouts, and you are on your own 25. What clock principle matters most?',
  options: [
    'Every completion must get out of bounds or be followed immediately by a spike, and you need a touchdown, not a field goal',
    'You should run the ball to keep the defense honest',
    'You should huddle to preserve the play clock',
    'You should take a delay of game to stop the clock'
  ],
  answer: 0,
  why: 'Down four, a field goal is worthless — the drive must end in the end zone. With no timeouts, clock stoppages come only from incompletions, going out of bounds, or a spike, and every in-bounds completion costs you roughly 8-12 seconds of drive time.'
},
{
  id: 'G04', cat: 'Situational',
  q: 'Time expires at the end of the second quarter on a play in which the defense is flagged for holding. What happens?',
  options: [
    'The half is over; penalties do not carry over',
    'The half is extended by an untimed down',
    'The penalty is enforced on the second-half kickoff',
    'The offense may choose to take three points'
  ],
  answer: 1,
  why: 'A half cannot end on an accepted defensive foul. The offense gets an untimed down — which is how teams get a free shot at the end zone or a field goal after time shows triple zeros.'
},
{
  id: 'G05', cat: 'Situational',
  q: 'The clock is running, you are in field goal range with 12 seconds left and one timeout. What is the standard sequencing principle?',
  options: [
    'Spike immediately and kick on the next play',
    'You can afford one more play to improve the kick, then use the timeout — but only if that play can be run and whistled dead with enough time left to align the unit',
    'Run the ball twice and then call timeout',
    'Kick immediately regardless of distance'
  ],
  answer: 1,
  why: 'The timeout is the insurance policy that lets you take one more shot to shorten the kick or gain a hash advantage. The discipline is knowing your operation time: if the next play cannot end with enough clock to get the field goal unit set, you take the points you already have.'
},

/* ---------------- ANALYTICS & ROSTER ---------------- */
{
  id: 'H01', cat: 'Analytics & Roster',
  q: 'What does EPA (Expected Points Added) measure?',
  options: [
    'Total yards gained per drive',
    'The change in a drive’s expected point value from before a play to after it, given down, distance and field position',
    'A quarterback’s completion percentage above the league average',
    'The number of points a defense allows per possession'
  ],
  answer: 1,
  why: 'Every down-distance-field-position state has a historical average point value. EPA is the difference between the state before the snap and the state after it, which is why a 4-yard gain on 3rd-and-3 is worth far more than a 6-yard gain on 3rd-and-12.'
},
{
  id: 'H02', cat: 'Analytics & Roster',
  q: 'In the standard definition of "success rate," what does a successful first-down play require?',
  options: [
    'At least 4 yards', 'At least 40% of the yards needed for a first down', 'A gain of any positive yardage', 'At least half the yards needed'
  ],
  answer: 1,
  why: 'The conventional thresholds are 40% of needed yardage on first down, 60% on second, and 100% on third or fourth. The idea is to measure whether a play kept the offense ahead of schedule rather than how many raw yards it produced.'
},
{
  id: 'H03', cat: 'Analytics & Roster',
  q: 'Why do analytics models generally favor going for it on 4th-and-1 near midfield?',
  options: [
    'Conversion rates are historically well above the break-even point once the value of a new set of downs and the poor field position swing from a punt are accounted for',
    'Punts are more likely to be blocked than a run is to be stuffed',
    'Coaches are rewarded for aggressiveness by the league',
    'Field goals from that range are almost never made'
  ],
  answer: 0,
  why: 'A 4th-and-1 sneak or run converts at a high rate, and the alternative — a punt that nets roughly 35-40 yards — surrenders the ball anyway. The break-even conversion probability near midfield sits well below the observed rate, so the aggressive call is the higher-expected-value one.'
},
{
  id: 'H04', cat: 'Analytics & Roster',
  q: 'Over how many years can a signing bonus be prorated against the salary cap?',
  options: ['3 years', '4 years', '5 years', 'The full length of the contract, with no limit'],
  answer: 2,
  why: 'Proration is capped at five years no matter how long the deal runs. That limit is why long contracts get stuffed with void years — they create additional proration seasons — and why the accelerated charge shows up as dead money when the deal ends early.'
},
{
  id: 'H05', cat: 'Analytics & Roster',
  q: 'What is "dead money" on an NFL salary cap sheet?',
  options: [
    'Salary paid to players on injured reserve',
    'Remaining prorated bonus money that accelerates onto the cap for a player no longer on the roster',
    'Money set aside for in-season signings',
    'The cash difference between the cap and actual spending'
  ],
  answer: 1,
  why: 'Signing bonus money is paid up front but charged over time. Cut or trade the player and the unamortized balance accelerates onto the current year’s cap. A post-June 1 designation — teams get two per year — splits that hit across two seasons instead.'
},
{
  id: 'H06', cat: 'Analytics & Roster',
  q: 'How is the non-exclusive franchise tag value determined?',
  options: [
    'It is a flat percentage of the salary cap for every position',
    'The greater of the average of the top five salaries at the position (as a share of the cap) or 120% of the player’s prior-year salary',
    'The median salary at the position',
    'It is negotiated individually with the player'
  ],
  answer: 1,
  why: 'The tag is pegged to the top of the position market or to a 20% raise on the player’s own prior salary, whichever is higher. A non-exclusive tag also lets the player negotiate with other teams, with two first-round picks as compensation if his team declines to match.'
}
];

if (typeof module !== 'undefined') { module.exports = { ADVANCED_BANK }; }
