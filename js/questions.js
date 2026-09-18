/* ==========================================================================
   WONDERLIC 2.0 — CORE BANK (100 questions)
   Modeled on the cognitive-ability test the NFL has used at the Combine.
   Each item: id, cat (category), q (stem), pre (optional monospace block),
   options, answer (index into options as authored), why (walkthrough).
   Option order is shuffled at runtime; "None of these" style options are
   pinned last by the engine.
   ========================================================================== */

const CORE_BANK = [

/* ---------------- MATH & WORD PROBLEMS (30) ---------------- */
{
  id: 'm01', cat: 'Math',
  q: 'A running back gains 4, 7, 2 and 11 yards on four carries. What is his average gain per carry?',
  options: ['5 yards', '6 yards', '7 yards', '8 yards'],
  answer: 1,
  why: '4 + 7 + 2 + 11 = 24 yards on 4 carries. 24 / 4 = 6 yards per carry.'
},
{
  id: 'm02', cat: 'Math',
  q: 'A team scores 3 touchdowns (each with a successful extra point) and 2 field goals. How many points did it score?',
  options: ['24', '26', '27', '29'],
  answer: 2,
  why: 'A touchdown plus the extra point is 7 points: 3 x 7 = 21. A field goal is 3 points: 2 x 3 = 6. 21 + 6 = 27.'
},
{
  id: 'm03', cat: 'Math',
  q: 'Club-level tickets cost $85 each. A group buys 14 of them. What is the total cost?',
  options: ['$1,090', '$1,190', '$1,290', '$1,275'],
  answer: 1,
  why: '85 x 14 = 85 x 10 + 85 x 4 = 850 + 340 = $1,190.'
},
{
  id: 'm04', cat: 'Math',
  q: 'A rookie signs a contract worth $12 million over 4 years. What is the average annual value?',
  options: ['$2.4 million', '$3 million', '$3.5 million', '$4 million'],
  answer: 1,
  why: '12 / 4 = 3, so the deal averages $3 million per year.'
},
{
  id: 'm05', cat: 'Math',
  q: 'A stadium seats 72,000 and is 75% full. How many seats are empty?',
  options: ['12,000', '18,000', '24,000', '54,000'],
  answer: 1,
  why: 'If 75% are full, 25% are empty. 25% of 72,000 = 72,000 / 4 = 18,000.'
},
{
  id: 'm06', cat: 'Math',
  q: 'A quarterback completes 24 of 32 passes. What is his completion percentage?',
  options: ['66%', '72%', '75%', '78%'],
  answer: 2,
  why: '24 / 32 = 3/4 = 0.75, which is 75%.'
},
{
  id: 'm07', cat: 'Math',
  q: 'A kicker makes 27 of 30 field goal attempts. What percentage did he MISS?',
  options: ['3%', '9%', '10%', '13%'],
  answer: 2,
  why: 'He missed 30 - 27 = 3 kicks. 3 / 30 = 0.10, which is 10%. Read the question carefully: it asks for misses, not makes.'
},
{
  id: 'm08', cat: 'Math',
  q: 'Practice starts at 9:15 a.m. and runs for 2 hours and 45 minutes. When does it end?',
  options: ['11:45 a.m.', '12:00 p.m.', '12:15 p.m.', '12:30 p.m.'],
  answer: 1,
  why: '9:15 + 2 hours = 11:15. 11:15 + 45 minutes = 12:00 p.m.'
},
{
  id: 'm09', cat: 'Math',
  q: 'A $120 jersey is marked down 30%. What is the sale price?',
  options: ['$36', '$84', '$90', '$96'],
  answer: 1,
  why: '30% of 120 = 36. 120 - 36 = $84. (You can also multiply directly: 120 x 0.70 = 84.)'
},
{
  id: 'm10', cat: 'Math',
  q: 'A team charter covers 260 miles at an average speed of 65 miles per hour. How long does the trip take?',
  options: ['3 hours', '3.5 hours', '4 hours', '4.5 hours'],
  answer: 2,
  why: 'Time = distance / speed = 260 / 65 = 4 hours.'
},
{
  id: 'm11', cat: 'Math',
  q: 'Three receivers split a $45,000 bonus pool in a 4:3:2 ratio. How much does the largest share pay?',
  options: ['$15,000', '$18,000', '$20,000', '$22,500'],
  answer: 2,
  why: 'The ratio has 4 + 3 + 2 = 9 parts. 45,000 / 9 = 5,000 per part. The largest share is 4 parts: 4 x 5,000 = $20,000.'
},
{
  id: 'm12', cat: 'Math',
  q: 'A football field measures 120 yards long (including both end zones) by 53 1/3 yards wide. What is its area in square yards?',
  options: ['5,300', '6,400', '6,540', '7,200'],
  answer: 1,
  why: '120 x 53 1/3 = 120 x 160/3 = 19,200 / 3 = 6,400 square yards.'
},
{
  id: 'm13', cat: 'Math',
  q: 'Six equipment managers can load the truck in 30 minutes. Working at the same rate, how long would 10 managers take?',
  options: ['15 minutes', '18 minutes', '20 minutes', '25 minutes'],
  answer: 1,
  why: 'The job takes 6 x 30 = 180 manager-minutes. Split among 10 people: 180 / 10 = 18 minutes.'
},
{
  id: 'm14', cat: 'Math',
  q: 'A number increased by 40% equals 63. What is the original number?',
  options: ['23', '38', '45', '50'],
  answer: 2,
  why: 'If x x 1.40 = 63, then x = 63 / 1.4 = 45. Check: 45 + 40% of 45 (18) = 63.'
},
{
  id: 'm15', cat: 'Math',
  q: '15 is what percent of 60?',
  options: ['15%', '20%', '25%', '40%'],
  answer: 2,
  why: '15 / 60 = 1/4 = 0.25, which is 25%.'
},
{
  id: 'm16', cat: 'Math',
  q: 'Two team buses leave the facility at the same time in opposite directions, one at 55 mph and the other at 65 mph. How far apart are they after 3 hours?',
  options: ['180 miles', '300 miles', '330 miles', '360 miles'],
  answer: 3,
  why: 'They separate at 55 + 65 = 120 mph. In 3 hours: 120 x 3 = 360 miles.'
},
{
  id: 'm17', cat: 'Math',
  q: 'Adult tickets cost $60 and child tickets cost $25. What is the cost for 8 adults and 5 children?',
  options: ['$580', '$605', '$625', '$650'],
  answer: 1,
  why: '8 x 60 = 480. 5 x 25 = 125. 480 + 125 = $605.'
},
{
  id: 'm18', cat: 'Math',
  q: 'A team averages 24 points per game over a 17-game season. How many points does it score in total?',
  options: ['384', '396', '408', '424'],
  answer: 2,
  why: '24 x 17 = 24 x 10 + 24 x 7 = 240 + 168 = 408.'
},
{
  id: 'm19', cat: 'Math',
  q: 'What is 1/4 of 3/5 of 200?',
  options: ['24', '30', '36', '48'],
  answer: 1,
  why: '3/5 of 200 = 120. One quarter of 120 = 30.'
},
{
  id: 'm20', cat: 'Math',
  q: 'A lineman weighs 250 pounds and loses 8% of his body weight in the offseason. What does he weigh now?',
  options: ['220 lbs', '225 lbs', '230 lbs', '242 lbs'],
  answer: 2,
  why: '8% of 250 = 20. 250 - 20 = 230 pounds.'
},
{
  id: 'm21', cat: 'Math',
  q: 'A playbook has 240 plays and 35% of them are runs. How many are pass plays?',
  options: ['84', '132', '156', '168'],
  answer: 2,
  why: 'If 35% are runs, 65% are passes. 0.65 x 240 = 156. (Or 240 - 84 runs = 156.)'
},
{
  id: 'm22', cat: 'Math',
  q: 'After a 20% discount, a helmet costs $50. What was the original price?',
  options: ['$58.50', '$60.00', '$62.50', '$70.00'],
  answer: 2,
  why: '$50 represents 80% of the original. 50 / 0.80 = $62.50. Check: 20% of 62.50 = 12.50, and 62.50 - 12.50 = 50.'
},
{
  id: 'm23', cat: 'Math',
  q: '0.25 of what number is 17?',
  options: ['4.25', '42.5', '68', '85'],
  answer: 2,
  why: '0.25x = 17, so x = 17 / 0.25 = 17 x 4 = 68.'
},
{
  id: 'm24', cat: 'Math',
  q: 'A club deposits $5,000 at 6% simple interest. How much interest does it earn in 3 years?',
  options: ['$300', '$600', '$900', '$1,500'],
  answer: 2,
  why: 'Simple interest = principal x rate x time = 5,000 x 0.06 x 3 = 300 x 3 = $900.'
},
{
  id: 'm25', cat: 'Math',
  q: 'On a scouting diagram, 1 inch represents 8 yards. How many yards does 7.5 inches represent?',
  options: ['48 yards', '56 yards', '60 yards', '64 yards'],
  answer: 2,
  why: '7.5 x 8 = 60 yards.'
},
{
  id: 'm26', cat: 'Math',
  q: 'A receiver covers 40 yards in 4.4 seconds. What is his average speed, to the nearest tenth of a yard per second?',
  options: ['8.4', '9.1', '9.6', '10.2'],
  answer: 1,
  why: '40 / 4.4 = 9.09..., which rounds to 9.1 yards per second.'
},
{
  id: 'm27', cat: 'Math',
  q: 'A team flies 1,860 miles in three legs of equal length. How long is each leg?',
  options: ['520 miles', '590 miles', '620 miles', '660 miles'],
  answer: 2,
  why: '1,860 / 3 = 620 miles.'
},
{
  id: 'm28', cat: 'Math',
  q: 'If 4 pounds of protein powder cost $54, what do 10 pounds cost at the same rate?',
  options: ['$121.50', '$128.00', '$135.00', '$140.50'],
  answer: 2,
  why: 'Unit price = 54 / 4 = $13.50 per pound. 10 x 13.50 = $135.00.'
},
{
  id: 'm29', cat: 'Math',
  q: 'A drive gains 9 yards, loses 4 yards, gains 17 yards, and loses 5 yards. What is the net gain?',
  options: ['13 yards', '17 yards', '21 yards', '25 yards'],
  answer: 1,
  why: '9 - 4 + 17 - 5 = 17 yards net.'
},
{
  id: 'm30', cat: 'Math',
  q: 'A 53-man roster has 3 quarterbacks. What fraction of the roster are quarterbacks, in lowest terms?',
  options: ['3/53', '1/17', '3/50', '1/18'],
  answer: 0,
  why: '3 out of 53. Since 53 is prime and does not divide 3, the fraction 3/53 is already in lowest terms.'
},

/* ---------------- NUMBER SERIES (10) ---------------- */
{
  id: 'n01', cat: 'Number Series',
  q: 'What number comes next in this series?  2, 4, 8, 16, ___',
  options: ['20', '24', '32', '64'],
  answer: 2,
  why: 'Each term doubles: 2 x 2 = 4, 4 x 2 = 8, 8 x 2 = 16, 16 x 2 = 32.'
},
{
  id: 'n02', cat: 'Number Series',
  q: 'What number comes next in this series?  3, 7, 11, 15, ___',
  options: ['17', '18', '19', '21'],
  answer: 2,
  why: 'The series adds 4 each time: 15 + 4 = 19.'
},
{
  id: 'n03', cat: 'Number Series',
  q: 'What number comes next in this series?  81, 27, 9, 3, ___',
  options: ['0', '1', '1.5', '2'],
  answer: 1,
  why: 'Each term is divided by 3: 3 / 3 = 1.'
},
{
  id: 'n04', cat: 'Number Series',
  q: 'What number comes next in this series?  1, 4, 9, 16, 25, ___',
  options: ['30', '32', '36', '49'],
  answer: 2,
  why: 'These are perfect squares: 1², 2², 3², 4², 5², so the next is 6² = 36.'
},
{
  id: 'n05', cat: 'Number Series',
  q: 'What number comes next in this series?  2, 3, 5, 8, 13, ___',
  options: ['18', '20', '21', '26'],
  answer: 2,
  why: 'Each term is the sum of the two before it: 5 + 8 = 13, and 8 + 13 = 21.'
},
{
  id: 'n06', cat: 'Number Series',
  q: 'What number comes next in this series?  100, 92, 84, 76, ___',
  options: ['64', '66', '68', '70'],
  answer: 2,
  why: 'The series subtracts 8 each time: 76 - 8 = 68.'
},
{
  id: 'n07', cat: 'Number Series',
  q: 'What number comes next in this series?  1, 2, 6, 24, 120, ___',
  options: ['240', '480', '600', '720'],
  answer: 3,
  why: 'Each term is multiplied by the next counting number: 1x2=2, 2x3=6, 6x4=24, 24x5=120, 120x6=720.'
},
{
  id: 'n08', cat: 'Number Series',
  q: 'What number comes next in this series?  7, 14, 28, 56, ___',
  options: ['98', '102', '112', '124'],
  answer: 2,
  why: 'Each term doubles: 56 x 2 = 112.'
},
{
  id: 'n09', cat: 'Number Series',
  q: 'What number comes next in this series?  2, 5, 10, 17, 26, ___',
  options: ['33', '35', '37', '41'],
  answer: 2,
  why: 'The gaps grow by odd numbers (3, 5, 7, 9, then 11): 26 + 11 = 37. Equivalently each term is n² + 1.'
},
{
  id: 'n10', cat: 'Number Series',
  q: 'What number comes next in this series?  5, 11, 23, 47, ___',
  options: ['71', '85', '94', '95'],
  answer: 3,
  why: 'Each term is double the previous term plus 1: 47 x 2 + 1 = 95.'
},

/* ---------------- VERBAL ANALOGIES (10) ---------------- */
{
  id: 'a01', cat: 'Analogies',
  q: 'WHISTLE is to REFEREE as GAVEL is to ___',
  options: ['Courtroom', 'Judge', 'Lawyer', 'Verdict'],
  answer: 1,
  why: 'A whistle is the tool a referee uses to command attention and stop play; a gavel is the tool a judge uses the same way. The relationship is tool-to-user.'
},
{
  id: 'a02', cat: 'Analogies',
  q: 'COACH is to TEAM as CONDUCTOR is to ___',
  options: ['Baton', 'Symphony', 'Orchestra', 'Composer'],
  answer: 2,
  why: 'A coach directs a team of players; a conductor directs an orchestra of musicians. A symphony is the work performed, not the group.'
},
{
  id: 'a03', cat: 'Analogies',
  q: 'PLAYBOOK is to PLAYS as DICTIONARY is to ___',
  options: ['Letters', 'Words', 'Pages', 'Authors'],
  answer: 1,
  why: 'A playbook is a collected reference of plays; a dictionary is a collected reference of words.'
},
{
  id: 'a04', cat: 'Analogies',
  q: 'ROOKIE is to VETERAN as NOVICE is to ___',
  options: ['Amateur', 'Student', 'Expert', 'Apprentice'],
  answer: 2,
  why: 'Rookie and veteran are opposites on an experience scale, as are novice and expert. Amateur and apprentice are near-synonyms for novice, not opposites.'
},
{
  id: 'a05', cat: 'Analogies',
  q: 'SPRINT is to RUN as SHOUT is to ___',
  options: ['Speak', 'Listen', 'Whisper', 'Sing'],
  answer: 0,
  why: 'A sprint is an intense form of running; a shout is an intense form of speaking. The relationship is intensity.'
},
{
  id: 'a06', cat: 'Analogies',
  q: 'DROUGHT is to WATER as FAMINE is to ___',
  options: ['Food', 'Land', 'Disease', 'Harvest'],
  answer: 0,
  why: 'A drought is a severe shortage of water; a famine is a severe shortage of food.'
},
{
  id: 'a07', cat: 'Analogies',
  q: 'CLEAT is to FOOT as HELMET is to ___',
  options: ['Hand', 'Head', 'Shoulder', 'Facemask'],
  answer: 1,
  why: 'A cleat is protective equipment worn on the foot; a helmet is protective equipment worn on the head.'
},
{
  id: 'a08', cat: 'Analogies',
  q: 'ISLAND is to OCEAN as OASIS is to ___',
  options: ['Water', 'Palm', 'Desert', 'Mirage'],
  answer: 2,
  why: 'An island is a patch of land surrounded by ocean; an oasis is a patch of water surrounded by desert. The relationship is "surrounded by its opposite."'
},
{
  id: 'a09', cat: 'Analogies',
  q: 'CHAPTER is to BOOK as QUARTER is to ___',
  options: ['Clock', 'Score', 'Game', 'Half'],
  answer: 2,
  why: 'A chapter is one of the sections that make up a book; a quarter is one of the sections that make up a game.'
},
{
  id: 'a10', cat: 'Analogies',
  q: 'ARCHITECT is to BLUEPRINT as COORDINATOR is to ___',
  options: ['Stadium', 'Game plan', 'Roster', 'Sideline'],
  answer: 1,
  why: 'An architect produces a blueprint as the plan others execute; a coordinator produces a game plan the same way.'
},

/* ---------------- WORD MEANING (12) ---------------- */
{
  id: 'w01', cat: 'Word Meaning',
  q: 'TENACIOUS most nearly means:',
  options: ['Persistent', 'Talkative', 'Fragile', 'Generous'],
  answer: 0,
  why: 'Tenacious describes someone who holds on and refuses to give up — persistent.'
},
{
  id: 'w02', cat: 'Word Meaning',
  q: 'OBSOLETE most nearly means:',
  options: ['Expensive', 'Outdated', 'Hidden', 'Required'],
  answer: 1,
  why: 'Something obsolete is out of date and no longer in use.'
},
{
  id: 'w03', cat: 'Word Meaning',
  q: 'CANDID most nearly means:',
  options: ['Frank', 'Cautious', 'Cheerful', 'Confused'],
  answer: 0,
  why: 'Candid means open and honest in speech — frank.'
},
{
  id: 'w04', cat: 'Word Meaning',
  q: 'METICULOUS most nearly means:',
  options: ['Careless', 'Extremely careful', 'Slow-witted', 'Aggressive'],
  answer: 1,
  why: 'Meticulous means showing great attention to detail — extremely careful.'
},
{
  id: 'w05', cat: 'Word Meaning',
  q: 'The OPPOSITE of SCARCE is:',
  options: ['Rare', 'Costly', 'Abundant', 'Hidden'],
  answer: 2,
  why: 'Scarce means in short supply; abundant means plentiful. Rare is a synonym, not an opposite.'
},
{
  id: 'w06', cat: 'Word Meaning',
  q: 'The OPPOSITE of LENIENT is:',
  options: ['Merciful', 'Strict', 'Patient', 'Generous'],
  answer: 1,
  why: 'Lenient means permissive and forgiving; strict is its opposite.'
},
{
  id: 'w07', cat: 'Word Meaning',
  q: 'FLUCTUATE most nearly means:',
  options: ['Vary', 'Freeze', 'Increase steadily', 'Disappear'],
  answer: 0,
  why: 'To fluctuate is to rise and fall irregularly — to vary.'
},
{
  id: 'w08', cat: 'Word Meaning',
  q: 'Which word is LEAST like the others?',
  options: ['Sprint', 'Dash', 'Crawl', 'Bolt'],
  answer: 2,
  why: 'Sprint, dash and bolt all mean to move very fast. Crawl means to move very slowly.'
},
{
  id: 'w09', cat: 'Word Meaning',
  q: 'AMBIGUOUS most nearly means:',
  options: ['Unclear', 'Ambitious', 'Dishonest', 'Detailed'],
  answer: 0,
  why: 'Ambiguous means open to more than one interpretation — unclear. Do not confuse it with the similar-looking word "ambitious."'
},
{
  id: 'w10', cat: 'Word Meaning',
  q: 'RESILIENT most nearly means:',
  options: ['Quick to recover', 'Easily broken', 'Highly rigid', 'Slow to start'],
  answer: 0,
  why: 'Resilient describes something that bounces back quickly from difficulty or strain.'
},
{
  id: 'w11', cat: 'Word Meaning',
  q: 'Do the words CONCEAL and REVEAL have similar meanings, contradictory meanings, or neither similar nor contradictory?',
  options: ['Similar', 'Contradictory', 'Neither'],
  answer: 1,
  why: 'To conceal is to hide; to reveal is to show. They are direct opposites, so their meanings are contradictory.'
},
{
  id: 'w12', cat: 'Word Meaning',
  q: 'Do the words PRUDENT and CAUTIOUS have similar meanings, contradictory meanings, or neither similar nor contradictory?',
  options: ['Similar', 'Contradictory', 'Neither'],
  answer: 0,
  why: 'Both describe acting with care and forethought to avoid risk, so the meanings are similar.'
},

/* ---------------- LOGIC & DEDUCTION (12) ---------------- */
{
  id: 'l01', cat: 'Logic',
  q: 'Assume the first statement is true. All linebackers on this roster wear a number in the 50s. Marcus wears number 58. Therefore, Marcus is a linebacker. This statement is:',
  options: ['True', 'False', 'Not certain'],
  answer: 2,
  why: 'The rule says every linebacker wears a 50s number, but not that every 50s number belongs to a linebacker. Marcus might be a linebacker — or a lineman wearing 58. The conclusion is not certain.'
},
{
  id: 'l02', cat: 'Logic',
  q: 'Assume the first two statements are true. All players who make the final roster passed the physical. Devon did not pass the physical. Therefore, Devon did not make the final roster. This statement is:',
  options: ['True', 'False', 'Not certain'],
  answer: 0,
  why: 'Passing the physical is required for every roster player. Devon fails that requirement, so he cannot be on the roster. The conclusion is true.'
},
{
  id: 'l03', cat: 'Logic',
  q: 'Tyler finished the drill before Marcus. Marcus finished before Devon. Who finished last?',
  options: ['Tyler', 'Marcus', 'Devon', 'Cannot be determined'],
  answer: 2,
  why: 'The order is Tyler, then Marcus, then Devon. Devon finished last.'
},
{
  id: 'l04', cat: 'Logic',
  q: 'Assume the first two statements are true. All rookies attend the extra walkthrough. Jordan attends the extra walkthrough. Therefore, Jordan is a rookie. This statement is:',
  options: ['True', 'False', 'Not certain'],
  answer: 2,
  why: 'Rookies all attend, but the statement never says only rookies attend. Veterans could be there too, so Jordan’s status is not certain.'
},
{
  id: 'l05', cat: 'Logic',
  q: 'Assume the first two statements are true. No defensive ends are eligible receivers in this formation. Kyle is an eligible receiver in this formation. Therefore, Kyle is not a defensive end. This statement is:',
  options: ['True', 'False', 'Not certain'],
  answer: 0,
  why: 'The two groups share no members. Since Kyle is in one group, he cannot be in the other. The conclusion is true.'
},
{
  id: 'l06', cat: 'Logic',
  q: 'Player A is taller than Player B. Player C is shorter than Player B. Player D is taller than Player A. Who is tallest?',
  options: ['Player A', 'Player B', 'Player C', 'Player D'],
  answer: 3,
  why: 'From the clues the order is D > A > B > C. Player D is tallest.'
},
{
  id: 'l07', cat: 'Logic',
  q: 'An equipment bag holds 4 blue jerseys and 6 white jerseys. If one jersey is pulled at random, what is the probability it is blue?',
  options: ['1/4', '2/5', '3/5', '2/3'],
  answer: 1,
  why: 'There are 10 jerseys in all and 4 are blue: 4/10 = 2/5.'
},
{
  id: 'l08', cat: 'Logic',
  q: 'Of 12 plays called in the first quarter, 3 were screens. If one of those plays is picked at random, what is the probability it was a screen?',
  options: ['1/3', '1/4', '1/6', '3/8'],
  answer: 1,
  why: '3 out of 12 = 1/4.'
},
{
  id: 'l09', cat: 'Logic',
  q: 'On a 27-man travel squad, 20 players lift on Monday and 15 run on Monday. If 8 players do both, how many players do neither?',
  options: ['0', '2', '5', '7'],
  answer: 0,
  why: 'Players doing at least one activity = 20 + 15 - 8 = 27. That is the whole squad, so nobody does neither.'
},
{
  id: 'l10', cat: 'Logic',
  q: 'Assume the first two statements are true. Some receivers on this team are faster than every linebacker. Every player faster than every linebacker returns kicks. Therefore, some receivers on this team return kicks. This statement is:',
  options: ['True', 'False', 'Not certain'],
  answer: 0,
  why: 'At least one receiver belongs to the "faster than every linebacker" group, and every member of that group returns kicks. So at least one receiver returns kicks — the conclusion holds.'
},
{
  id: 'l11', cat: 'Logic',
  q: 'Four teams finish in order. The Hawks finished ahead of the Bears. The Wolves finished behind the Bears but ahead of the Foxes. Which team finished third?',
  options: ['Hawks', 'Bears', 'Wolves', 'Foxes'],
  answer: 2,
  why: 'The order is Hawks, Bears, Wolves, Foxes. The Wolves are third.'
},
{
  id: 'l12', cat: 'Logic',
  q: 'If every player who missed curfew was fined, and Andre was not fined, which statement must be true?',
  options: ['Andre missed curfew', 'Andre did not miss curfew', 'Andre was suspended', 'Nothing can be concluded'],
  answer: 1,
  why: 'Missing curfew always leads to a fine. Andre was not fined, so he cannot have missed curfew. (This is the contrapositive of the rule.)'
},

/* ---------------- ATTENTION TO DETAIL (6) ---------------- */
{
  id: 'd01', cat: 'Attention to Detail',
  q: 'Which two of these numbers are identical?',
  pre: '1) 4739281\n2) 4739821\n3) 4739281\n4) 4793281',
  options: ['1 and 2', '1 and 3', '2 and 4', '3 and 4'],
  answer: 1,
  why: 'Items 1 and 3 both read 4739281. Item 2 swaps the 2 and the 8; item 4 swaps the 3 and the 9.'
},
{
  id: 'd02', cat: 'Attention to Detail',
  q: 'Which two of these names are identical?',
  pre: '1) Stephon Kaminski\n2) Stephen Kaminski\n3) Stephon Kaminsky\n4) Stephon Kaminski',
  options: ['1 and 2', '1 and 4', '2 and 3', '3 and 4'],
  answer: 1,
  why: 'Items 1 and 4 match exactly. Item 2 uses "Stephen"; item 3 ends in "Kaminsky."'
},
{
  id: 'd03', cat: 'Attention to Detail',
  q: 'Which of these words is misspelled?',
  options: ['Receive', 'Separate', 'Occurrence', 'Definately'],
  answer: 3,
  why: 'The correct spelling is "definitely" — there is no "a" in it.'
},
{
  id: 'd04', cat: 'Attention to Detail',
  q: 'Which two of these codes are identical?',
  pre: '1) GUN-RT-27B\n2) GUN-RT-278\n3) GUN-RT-27B\n4) GUN-TR-27B',
  options: ['1 and 3', '1 and 2', '2 and 4', '2 and 3'],
  answer: 0,
  why: 'Items 1 and 3 are the same. Item 2 ends in the digit 8 rather than the letter B, and item 4 reverses RT to TR.'
},
{
  id: 'd05', cat: 'Attention to Detail',
  q: 'One of these words is spelled incorrectly. Which one?',
  options: ['Maneuver', 'Rythm', 'Discipline', 'Leverage'],
  answer: 1,
  why: 'The correct spelling is "rhythm," with an h after the r.'
},
{
  id: 'd06', cat: 'Attention to Detail',
  q: 'Which two of these times are identical?',
  pre: '1) 4.38 seconds\n2) 4.83 seconds\n3) 4.38 seconds\n4) 4.34 seconds',
  options: ['1 and 3', '2 and 3', '1 and 4', '2 and 4'],
  answer: 0,
  why: 'Items 1 and 3 both read 4.38. Item 2 transposes the digits to 4.83 and item 4 ends in 4.'
},

/* ---------------- SENTENCE & GRAMMAR (5) ---------------- */
{
  id: 's01', cat: 'Sentence Logic',
  q: 'When rearranged, these words form a sentence. Is that sentence true or false?',
  pre: 'points  a  worth  seven  is  touchdown',
  options: ['True', 'False'],
  answer: 1,
  why: 'The sentence is "A touchdown is worth seven points." A touchdown itself is worth six; the seventh point comes from a separate extra-point kick. The sentence is false.'
},
{
  id: 's02', cat: 'Sentence Logic',
  q: 'When rearranged, these words form a sentence. Is that sentence true or false?',
  pre: 'field  long  a  yards  is  football  100',
  options: ['True', 'False'],
  answer: 0,
  why: 'The sentence is "A football field is 100 yards long." The playing field between the goal lines is 100 yards, so the sentence is true.'
},
{
  id: 's03', cat: 'Sentence Logic',
  q: 'Which sentence is grammatically correct?',
  options: [
    'Neither of the quarterbacks were ready to play.',
    'Neither of the quarterbacks was ready to play.',
    'Neither of the quarterback were ready to play.',
    'Neither the quarterbacks was ready to play.'
  ],
  answer: 1,
  why: '"Neither" is singular, so it takes the singular verb "was." The phrase "of the quarterbacks" does not change the subject.'
},
{
  id: 's04', cat: 'Sentence Logic',
  q: 'Which sentence uses the underlined words correctly?',
  options: [
    'The team lost it’s starting center, and their now on the road.',
    'The team lost its starting center, and they’re now on the road.',
    'The team lost its’ starting center, and there now on the road.',
    'The team lost it’s starting center, and there now on the road.'
  ],
  answer: 1,
  why: '"Its" is the possessive form (no apostrophe), and "they’re" is the contraction of "they are." "It’s" means "it is," and "its’" is never correct.'
},
{
  id: 's05', cat: 'Sentence Logic',
  q: 'Which sentence is punctuated correctly?',
  options: [
    'After the snap the guard pulled, and the back cut inside him.',
    'After the snap, the guard pulled and the back, cut inside him.',
    'After the snap the guard, pulled and the back cut inside him.',
    'After, the snap the guard pulled and the back cut inside him.'
  ],
  answer: 0,
  why: 'The comma belongs before the coordinating conjunction "and" joining two complete clauses. The other options place commas between a subject and its verb, or after an introductory word that does not need one.'
},

/* ---------------- PROVERBS & MEANING (5) ---------------- */
{
  id: 'p01', cat: 'Proverbs',
  q: 'What does the saying "Don’t count your chickens before they hatch" mean?',
  options: [
    'Do not rely on something good until it has actually happened',
    'Start work earlier than your rivals do',
    'Small details matter more than large ones',
    'Never trust a stranger with your plans'
  ],
  answer: 0,
  why: 'The proverb warns against treating an expected result as if it were already guaranteed.'
},
{
  id: 'p02', cat: 'Proverbs',
  q: 'What does the saying "A stitch in time saves nine" mean?',
  options: [
    'Repetition is the key to mastery',
    'Fixing a small problem early prevents a much bigger one later',
    'Nine people can do the work of one',
    'Time is the most valuable resource of all'
  ],
  answer: 1,
  why: 'One stitch made now avoids nine stitches later, meaning early repair prevents a larger failure.'
},
{
  id: 'p03', cat: 'Proverbs',
  q: 'Which two sayings have the most similar meaning?',
  pre: '1) Look before you leap.\n2) The squeaky wheel gets the grease.\n3) Measure twice, cut once.\n4) Too many cooks spoil the broth.',
  options: ['1 and 2', '1 and 3', '2 and 4', '3 and 4'],
  answer: 1,
  why: 'Both 1 and 3 say to check carefully before committing to an action you cannot take back.'
},
{
  id: 'p04', cat: 'Proverbs',
  q: 'What does the saying "Don’t put all your eggs in one basket" mean?',
  options: [
    'Guard your best asset closely',
    'Spread your risk instead of depending on a single outcome',
    'Finish one job before starting another',
    'Keep your plans to yourself'
  ],
  answer: 1,
  why: 'If the single basket is dropped, everything is lost at once. The advice is to diversify.'
},
{
  id: 'p05', cat: 'Proverbs',
  q: 'What does the saying "Actions speak louder than words" mean?',
  options: [
    'Loud leaders get results',
    'What a person does reveals more than what they say',
    'Speeches should be kept short',
    'Arguments rarely change anyone’s mind'
  ],
  answer: 1,
  why: 'Behavior is more reliable evidence of intent and character than stated promises.'
},

/* ---------------- DATES & SEQUENCE (5) ---------------- */
{
  id: 'c01', cat: 'Dates & Sequence',
  q: 'The season opener is on Thursday, September 4. What day of the week is September 25?',
  options: ['Wednesday', 'Thursday', 'Friday', 'Saturday'],
  answer: 1,
  why: 'September 25 is 21 days after September 4, and 21 is exactly 3 weeks. The day of the week repeats: Thursday.'
},
{
  id: 'c02', cat: 'Dates & Sequence',
  q: 'January 1 falls on a Wednesday. What day of the week is January 20?',
  options: ['Sunday', 'Monday', 'Tuesday', 'Wednesday'],
  answer: 1,
  why: 'January 15 is 14 days later, so it is also a Wednesday. Five more days (16, 17, 18, 19, 20) lands on Monday.'
},
{
  id: 'c03', cat: 'Dates & Sequence',
  q: 'Kickoff is at 1:05 p.m. Eastern Time. What time is that in the Pacific Time zone?',
  options: ['10:05 a.m.', '11:05 a.m.', '2:05 p.m.', '4:05 p.m.'],
  answer: 0,
  why: 'Pacific Time is three hours behind Eastern Time. 1:05 p.m. minus 3 hours = 10:05 a.m.'
},
{
  id: 'c04', cat: 'Dates & Sequence',
  q: 'Which of these dates is the earliest?',
  options: ['3/7/2019', '7/3/2019', '3/17/2018', '12/1/2018'],
  answer: 2,
  why: 'Compare years first: 2018 comes before 2019, which leaves March 17, 2018 and December 1, 2018. March comes before December, so 3/17/2018 is earliest.'
},
{
  id: 'c05', cat: 'Dates & Sequence',
  q: 'A team practices 6 days a week for 5 straight weeks, then takes 2 days off. How many practice days were there?',
  options: ['28', '30', '32', '35'],
  answer: 1,
  why: '6 x 5 = 30 practice days. The 2 days off come after the five weeks and do not change the count.'
},

/* ---------------- SPATIAL & VISUAL REASONING (5) ---------------- */
{
  id: 'x01', cat: 'Spatial Reasoning',
  q: 'An arrow on a play card points northeast. If the card is rotated 180 degrees, which way does the arrow point?',
  options: ['Northwest', 'Southeast', 'Southwest', 'Northeast'],
  answer: 2,
  why: 'A 180-degree rotation reverses a direction exactly. The opposite of northeast is southwest.'
},
{
  id: 'x02', cat: 'Spatial Reasoning',
  q: 'A player runs 10 yards north, then 10 yards east, then 10 yards south. How far is he from where he started, and in what direction?',
  options: ['10 yards east', '10 yards north', '20 yards east', '30 yards away'],
  answer: 0,
  why: 'The 10 yards north and the 10 yards south cancel out, leaving only the 10 yards east.'
},
{
  id: 'x03', cat: 'Spatial Reasoning',
  q: 'How many 1-yard cubes are needed to completely fill a cube that measures 3 yards on each edge?',
  options: ['9', '18', '27', '81'],
  answer: 2,
  why: 'Volume of a cube = side³ = 3 x 3 x 3 = 27.'
},
{
  id: 'x04', cat: 'Spatial Reasoning',
  q: 'A square practice field has a perimeter of 200 yards. What is its area?',
  options: ['400 square yards', '2,000 square yards', '2,500 square yards', '10,000 square yards'],
  answer: 2,
  why: 'Each side is 200 / 4 = 50 yards. Area = 50 x 50 = 2,500 square yards.'
},
{
  id: 'x05', cat: 'Spatial Reasoning',
  q: 'If a sheet of paper is folded in half three times, how many sections is it divided into when unfolded?',
  options: ['3', '6', '8', '16'],
  answer: 2,
  why: 'Each fold doubles the number of sections: 2, then 4, then 8.'
}
];

if (typeof module !== 'undefined') { module.exports = { CORE_BANK }; }
