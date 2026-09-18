/* ==========================================================================
   NFL WONDERLIC SCORE DATABASE
   IMPORTANT: The NFL and Wonderlic have never officially released individual
   scores. Every figure below comes from scores that leaked to reporters
   around the Combine and have been repeated for years. Some are disputed,
   some players have publicly denied their reported number, and several
   players retook the test with a different result. Treat this as football
   folklore with a paper trail, not as an official record.
   ========================================================================== */

const NFL_SCORES = [
  { name: 'Pat McInally', score: 50, pos: 'P/WR', college: 'Harvard', era: '1975–85',
    fact: 'The only player publicly known to have scored a perfect 50. A Harvard man who was a Pro Bowl punter for the Bengals and the 1988 NFL Man of the Year. He has said the perfect score hurt him — he slid to the fifth round because teams found it strange.' },
  { name: 'Mike Mamula', score: 49, pos: 'DE', college: 'Boston College', era: '1995–2000',
    fact: 'The original Combine riser. His workout and test scores were so good that the Eagles traded up to take him seventh overall in 1995, and his name became shorthand for the danger of drafting the underwear olympics instead of the tape.' },
  { name: 'Ryan Fitzpatrick', score: 48, pos: 'QB', college: 'Harvard', era: '2005–20',
    fact: 'Reported at 48, with some accounts claiming he finished in a fraction of the allotted time — a detail he has laughed off. Fitzpatrick started for nine different franchises, an NFL record, and became the patron saint of the journeyman quarterback.' },
  { name: 'Benjamin Watson', score: 48, pos: 'TE', college: 'Georgia', era: '2004–19',
    fact: 'A first-round tight end who played 16 seasons. He is best remembered for running down Champ Bailey from 100 yards away after an interception in the 2005 playoffs — one of the great hustle plays in postseason history.' },
  { name: 'Kevin Curtis', score: 48, pos: 'WR', college: 'Utah State', era: '2003–11',
    fact: 'A slot technician for the Rams and Eagles who posted 1,110 receiving yards in 2007. His score is among the highest ever reported for a skill-position player.' },
  { name: 'Greg McElroy', score: 43, pos: 'QB', college: 'Alabama', era: '2011–13',
    fact: 'Won a BCS national title as Alabama’s starter, was a Rhodes Scholar candidate, and threw just 31 NFL passes before moving to the broadcast booth, where the football-IQ reputation stuck.' },
  { name: 'Blaine Gabbert', score: 42, pos: 'QB', college: 'Missouri', era: '2011–23',
    fact: 'Tenth overall pick in 2011 whose test score outpaced his results in Jacksonville. He reinvented himself as one of the league’s most respected backups and picked up a Super Bowl ring with Tampa Bay.' },
  { name: 'Calvin Johnson', score: 41, pos: 'WR', college: 'Georgia Tech', era: '2007–15',
    fact: 'Megatron: 6-5, 239 pounds, a 4.35 forty, and an industrial engineering major. He set the single-season receiving record with 1,964 yards in 2012 and walked away at 30. Hall of Fame, 2021.' },
  { name: 'Alex Smith', score: 40, pos: 'QB', college: 'Utah', era: '2005–20',
    fact: 'Finished his Utah degree in two years before going first overall in 2005. Came back from a compound leg fracture and 17 surgeries to start again in 2020 and win Comeback Player of the Year.' },
  { name: 'Eli Manning', score: 39, pos: 'QB', college: 'Ole Miss', era: '2004–19',
    fact: 'Two Super Bowl MVPs, both against the Patriots, including the drive that ended New England’s perfect season. Started 210 consecutive regular season games for the Giants.' },
  { name: 'Matthew Stafford', score: 38, pos: 'QB', college: 'Georgia', era: '2009–present',
    fact: 'First overall pick in 2009 who spent a decade throwing for huge yardage on bad Lions teams, then won Super Bowl LVI in his first season with the Rams.' },
  { name: 'Tony Romo', score: 37, pos: 'QB', college: 'Eastern Illinois', era: '2003–16',
    fact: 'Went undrafted out of a I-AA program and retired as the Cowboys’ all-time leading passer. The same pattern-recognition that shows up in his score now shows up on broadcasts where he calls plays before the snap.' },
  { name: 'Andrew Luck', score: 37, pos: 'QB', college: 'Stanford', era: '2012–18',
    fact: 'Architectural design major, first overall pick, three Pro Bowls in his first three seasons, and a shock retirement at 29 after years of accumulated injuries.' },
  { name: 'Colin Kaepernick', score: 37, pos: 'QB', college: 'Nevada', era: '2011–16',
    fact: 'The only FBS player ever with 10,000 passing yards and 4,000 rushing yards in college. He took the 49ers to Super Bowl XLVII in his first year as a starter.' },
  { name: 'Josh Allen', score: 37, pos: 'QB', college: 'Wyoming', era: '2018–present',
    fact: 'Zero FBS scholarship offers out of high school, junior college, then Wyoming, then seventh overall. He was named NFL MVP for the 2024 season after years of being told the accuracy would never come.' },
  { name: 'Aaron Rodgers', score: 35, pos: 'QB', college: 'California', era: '2005–present',
    fact: 'Fell to 24th overall on draft night and became a four-time NFL MVP with the best career touchdown-to-interception ratio in league history.' },
  { name: 'Tom Brady', score: 33, pos: 'QB', college: 'Michigan', era: '2000–22',
    fact: 'The 199th pick of the 2000 draft, sixth quarterback taken, with a Combine performance so unremarkable the photo became a meme. Seven Super Bowl titles, five Super Bowl MVPs, three regular season MVPs.' },
  { name: 'Kirk Cousins', score: 33, pos: 'QB', college: 'Michigan State', era: '2012–present',
    fact: 'Taken in the fourth round of the same 2012 draft in which Washington traded a fortune for Robert Griffin III, and became the first NFL player to play on consecutive franchise tags and then hit free agency with a fully guaranteed deal.' },
  { name: 'Johnny Manziel', score: 32, pos: 'QB', college: 'Texas A&M', era: '2014–15',
    fact: 'First freshman to win the Heisman Trophy. His score was near the top of his draft class, but two seasons in Cleveland ended a career that never recovered.' },
  { name: 'Peyton Manning', score: 28, pos: 'QB', college: 'Tennessee', era: '1998–2015',
    fact: 'Five-time MVP and the most famous line-of-scrimmage operator the sport has produced — proof that a mid-range Wonderlic and elite football processing are entirely different things. Record 55 touchdown passes in 2013.' },
  { name: 'Drew Brees', score: 28, pos: 'QB', college: 'Purdue', era: '2001–20',
    fact: 'A second-round pick at 6-0 who retired as the NFL’s all-time completions leader and Super Bowl XLIV MVP, with the most accurate passing seasons in league history.' },
  { name: 'Russell Wilson', score: 28, pos: 'QB', college: 'Wisconsin', era: '2012–present',
    fact: 'Drafted in the third round because of his height, he won a Super Bowl in year two and tied the rookie touchdown record. He also played minor league baseball in the Rockies and Rangers systems.' },
  { name: 'Ryan Leaf', score: 27, pos: 'QB', college: 'Washington State', era: '1998–2001',
    fact: 'Taken second overall in 1998 immediately after Peyton Manning. Four career touchdown passes against 36 turnovers made him the definitional draft bust; he has since spent years working in recovery advocacy.' },
  { name: 'Jameis Winston', score: 27, pos: 'QB', college: 'Florida State', era: '2015–present',
    fact: 'Heisman winner and first overall pick in 2015. In 2019 he became the only player in NFL history to throw for 30 touchdowns and 30 interceptions in the same season, and the only one with a 5,000-yard season in which he led the league in picks.' },
  { name: 'Ben Roethlisberger', score: 25, pos: 'QB', college: 'Miami (OH)', era: '2004–21',
    fact: 'Went 13-0 as a rookie starter, won two Super Bowls, and built a career on extending plays past the point where the protection had failed — a skill no written test measures.' },
  { name: 'Baker Mayfield', score: 25, pos: 'QB', college: 'Oklahoma', era: '2018–present',
    fact: 'The only walk-on to win the Heisman Trophy and then go first overall. He delivered Cleveland its first playoff win since 1994 before reviving his career in Tampa Bay.' },
  { name: 'Patrick Mahomes', score: 24, pos: 'QB', college: 'Texas Tech', era: '2017–present',
    fact: 'A mid-20s score belonging to the most improvisational quarterback of his era: multiple MVPs, multiple Super Bowl MVPs, and a no-look, off-platform game that has effectively rewritten what teams look for.' },
  { name: 'JaMarcus Russell', score: 24, pos: 'QB', college: 'LSU', era: '2007–09',
    fact: 'First overall pick in 2007 on the strength of a historic arm. Seven career wins and a weight and work-ethic story that helped push the league toward its current emphasis on makeup over measurables.' },
  { name: 'Brett Favre', score: 22, pos: 'QB', college: 'Southern Miss', era: '1991–2010',
    fact: 'Three consecutive MVP awards and 297 consecutive regular season starts, an ironman record that may never be approached. Taken in the second round by Atlanta and traded to Green Bay for a first.' },
  { name: 'Tim Tebow', score: 22, pos: 'QB', college: 'Florida', era: '2010–12',
    fact: 'Heisman winner and two-time national champion whose 80-yard touchdown pass on the first play of overtime beat Pittsburgh in the 2011 playoffs. He later played minor league baseball in the Mets system.' },
  { name: 'Cam Newton', score: 21, pos: 'QB', college: 'Auburn', era: '2011–21',
    fact: 'First overall pick who threw for a rookie-record 4,051 yards, then won MVP in 2015 while accounting for 45 total touchdowns and taking Carolina to 15-1 and the Super Bowl.' },
  { name: 'Michael Vick', score: 20, pos: 'QB', college: 'Virginia Tech', era: '2001–15',
    fact: 'The first quarterback taken first overall by Atlanta and the first to rush for 1,000 yards in a season (1,039 in 2006). After a federal prison sentence, he returned to win Comeback Player of the Year in 2010.' },
  { name: 'Dan Marino', score: 16, pos: 'QB', college: 'Pittsburgh', era: '1983–99',
    fact: 'The sixth quarterback taken in the legendary 1983 class. In his second season he threw for 5,084 yards and 48 touchdowns, numbers nobody matched for more than two decades. Fastest release in the history of the position.' },
  { name: 'Terry Bradshaw', score: 15, pos: 'QB', college: 'Louisiana Tech', era: '1970–83',
    fact: 'His low reported score followed him for his whole career and he has spoken openly about the "dumb" label. He answered it with four Super Bowl titles, two Super Bowl MVPs and a bust in Canton.' },
  { name: 'Jim Kelly', score: 15, pos: 'QB', college: 'Miami', era: '1986–96',
    fact: 'Ran the no-huddle K-Gun offense — arguably the most cognitively demanding job any quarterback of his era held — and took Buffalo to four consecutive Super Bowls.' },
  { name: 'Randall Cunningham', score: 15, pos: 'QB', college: 'UNLV', era: '1985–2001',
    fact: 'The Ultimate Weapon: a punter in college, the most dangerous scrambler of his generation, and the quarterback of the 15-1 1998 Vikings, who scored a then-record 556 points.' },
  { name: 'Steve McNair', score: 15, pos: 'QB', college: 'Alcorn State', era: '1995–2007',
    fact: 'Came out of an HBCU program to become co-MVP in 2003. His last-second drive in Super Bowl XXXIV ended one yard short of forcing overtime — the Music City ending.' },
  { name: 'Donovan McNabb', score: 14, pos: 'QB', college: 'Syracuse', era: '1999–2011',
    fact: 'Booed by Eagles fans on draft night, he made six Pro Bowls, reached five NFC title games and a Super Bowl, and retired as the franchise’s all-time leading passer.' },
  { name: 'Lamar Jackson', score: 13, pos: 'QB', college: 'Louisville', era: '2018–present',
    fact: 'Heisman winner told to switch positions, drafted 32nd, and now a two-time MVP — the 2019 award was unanimous. He is the only quarterback with multiple 1,000-yard rushing seasons and holds the single-season quarterback rushing record.' },
  { name: 'Vince Young', score: 6, pos: 'QB', college: 'Texas', era: '2006–11',
    fact: 'His reported 6 on the first attempt became the most cited low score in Combine history; he retook it and scored in the mid-teens. He was Offensive Rookie of the Year and had already authored the 2006 Rose Bowl, one of the greatest games ever played.' },
  { name: 'Frank Gore', score: 6, pos: 'RB', college: 'Miami', era: '2005–20',
    fact: 'Has spoken publicly about living with dyslexia, which the timed format punishes brutally. He retired third on the all-time rushing list with more than 16,000 yards across 16 seasons and five Pro Bowls.' },
  { name: 'Morris Claiborne', score: 4, pos: 'CB', college: 'LSU', era: '2012–19',
    fact: 'The lowest reported score ever leaked. He has said he has a learning disability and essentially did not attempt the test. Dallas traded up to take him sixth overall anyway, and he started 76 NFL games.' }
];

/* Commonly cited position averages from aggregated Combine reporting.
   Same caveat applies — these are compiled from leaked data, not official records. */
const POSITION_AVERAGES = [
  { pos: 'Offensive Tackle', avg: 26 },
  { pos: 'Center', avg: 25 },
  { pos: 'Quarterback', avg: 24 },
  { pos: 'Guard', avg: 23 },
  { pos: 'Tight End', avg: 22 },
  { pos: 'Safety', avg: 19 },
  { pos: 'Linebacker', avg: 19 },
  { pos: 'Defensive End', avg: 19 },
  { pos: 'Cornerback', avg: 18 },
  { pos: 'Wide Receiver', avg: 17 },
  { pos: 'Fullback', avg: 17 },
  { pos: 'Running Back', avg: 16 },
  { pos: 'Defensive Tackle', avg: 16 }
];

/* Reference points for the results screen. The Wonderlic Personnel Test is
   normed so that the general-population average is about 20 of 50. */
const BENCHMARKS = [
  { label: 'Perfect score', value: 50 },
  { label: 'Chemist / engineer range', value: 31 },
  { label: 'NFL quarterback average', value: 24 },
  { label: 'General population average', value: 20 },
  { label: 'NFL player average (all positions)', value: 20 }
];

if (typeof module !== 'undefined') { module.exports = { NFL_SCORES, POSITION_AVERAGES, BENCHMARKS }; }
