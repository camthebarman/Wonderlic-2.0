/* ==========================================================================
   NFL TEAM COLORS
   Primary and secondary are the club's official colors. `accent` names which
   of the two (or the tertiary) should drive small highlights: for clubs whose
   secondary is plain black, white or silver, a tertiary reads better.
   ========================================================================== */

const TEAMS = [
  /* --- AFC East --- */
  { id: 'buf', name: 'Bills',      city: 'Buffalo',      conf: 'AFC', div: 'East',  primary: '#00338D', secondary: '#C60C30' },
  { id: 'mia', name: 'Dolphins',   city: 'Miami',        conf: 'AFC', div: 'East',  primary: '#008E97', secondary: '#FC4C02' },
  { id: 'ne',  name: 'Patriots',   city: 'New England',  conf: 'AFC', div: 'East',  primary: '#002244', secondary: '#C60C30', tertiary: '#B0B7BC' },
  { id: 'nyj', name: 'Jets',       city: 'New York',     conf: 'AFC', div: 'East',  primary: '#125740', secondary: '#000000', tertiary: '#1C8B5E' },

  /* --- AFC North --- */
  { id: 'bal', name: 'Ravens',     city: 'Baltimore',    conf: 'AFC', div: 'North', primary: '#241773', secondary: '#9E7C0C', tertiary: '#000000' },
  { id: 'cin', name: 'Bengals',    city: 'Cincinnati',   conf: 'AFC', div: 'North', primary: '#FB4F14', secondary: '#000000' },
  { id: 'cle', name: 'Browns',     city: 'Cleveland',    conf: 'AFC', div: 'North', primary: '#311D00', secondary: '#FF3C00' },
  { id: 'pit', name: 'Steelers',   city: 'Pittsburgh',   conf: 'AFC', div: 'North', primary: '#101820', secondary: '#FFB612' },

  /* --- AFC South --- */
  { id: 'hou', name: 'Texans',     city: 'Houston',      conf: 'AFC', div: 'South', primary: '#03202F', secondary: '#A71930' },
  { id: 'ind', name: 'Colts',      city: 'Indianapolis', conf: 'AFC', div: 'South', primary: '#002C5F', secondary: '#A2AAAD' },
  { id: 'jax', name: 'Jaguars',    city: 'Jacksonville', conf: 'AFC', div: 'South', primary: '#006778', secondary: '#D7A22A', tertiary: '#101820' },
  { id: 'ten', name: 'Titans',     city: 'Tennessee',    conf: 'AFC', div: 'South', primary: '#0C2340', secondary: '#4B92DB', tertiary: '#C8102E' },

  /* --- AFC West --- */
  { id: 'den', name: 'Broncos',    city: 'Denver',       conf: 'AFC', div: 'West',  primary: '#FB4F14', secondary: '#002244' },
  { id: 'kc',  name: 'Chiefs',     city: 'Kansas City',  conf: 'AFC', div: 'West',  primary: '#E31837', secondary: '#FFB81C' },
  { id: 'lv',  name: 'Raiders',    city: 'Las Vegas',    conf: 'AFC', div: 'West',  primary: '#000000', secondary: '#A5ACAF' },
  { id: 'lac', name: 'Chargers',   city: 'Los Angeles',  conf: 'AFC', div: 'West',  primary: '#0080C6', secondary: '#FFC20E', tertiary: '#002A5E' },

  /* --- NFC East --- */
  { id: 'dal', name: 'Cowboys',    city: 'Dallas',       conf: 'NFC', div: 'East',  primary: '#003594', secondary: '#869397' },
  { id: 'nyg', name: 'Giants',     city: 'New York',     conf: 'NFC', div: 'East',  primary: '#0B2265', secondary: '#A71930', tertiary: '#A5ACAF' },
  { id: 'phi', name: 'Eagles',     city: 'Philadelphia', conf: 'NFC', div: 'East',  primary: '#004C54', secondary: '#A5ACAF', tertiary: '#000000' },
  { id: 'was', name: 'Commanders', city: 'Washington',   conf: 'NFC', div: 'East',  primary: '#5A1414', secondary: '#FFB612' },

  /* --- NFC North --- */
  { id: 'chi', name: 'Bears',      city: 'Chicago',      conf: 'NFC', div: 'North', primary: '#0B162A', secondary: '#C83803' },
  { id: 'det', name: 'Lions',      city: 'Detroit',      conf: 'NFC', div: 'North', primary: '#0076B6', secondary: '#B0B7BC', tertiary: '#000000' },
  { id: 'gb',  name: 'Packers',    city: 'Green Bay',    conf: 'NFC', div: 'North', primary: '#203731', secondary: '#FFB612' },
  { id: 'min', name: 'Vikings',    city: 'Minnesota',    conf: 'NFC', div: 'North', primary: '#4F2683', secondary: '#FFC62F' },

  /* --- NFC South --- */
  { id: 'atl', name: 'Falcons',    city: 'Atlanta',      conf: 'NFC', div: 'South', primary: '#A71930', secondary: '#000000', tertiary: '#A5ACAF' },
  { id: 'car', name: 'Panthers',   city: 'Carolina',     conf: 'NFC', div: 'South', primary: '#0085CA', secondary: '#101820', tertiary: '#BFC0BF' },
  { id: 'no',  name: 'Saints',     city: 'New Orleans',  conf: 'NFC', div: 'South', primary: '#D3BC8D', secondary: '#101820' },
  { id: 'tb',  name: 'Buccaneers', city: 'Tampa Bay',    conf: 'NFC', div: 'South', primary: '#D50A0A', secondary: '#FF7900', tertiary: '#34302B' },

  /* --- NFC West --- */
  { id: 'ari', name: 'Cardinals',  city: 'Arizona',      conf: 'NFC', div: 'West',  primary: '#97233F', secondary: '#FFB612', tertiary: '#000000' },
  { id: 'lar', name: 'Rams',       city: 'Los Angeles',  conf: 'NFC', div: 'West',  primary: '#003594', secondary: '#FFA300' },
  { id: 'sf',  name: '49ers',      city: 'San Francisco',conf: 'NFC', div: 'West',  primary: '#AA0000', secondary: '#B3995D' },
  { id: 'sea', name: 'Seahawks',   city: 'Seattle',      conf: 'NFC', div: 'West',  primary: '#002244', secondary: '#69BE28', tertiary: '#A5ACAF' }
];

const DIVISIONS = [
  'AFC East', 'AFC North', 'AFC South', 'AFC West',
  'NFC East', 'NFC North', 'NFC South', 'NFC West'
];

if (typeof module !== 'undefined') { module.exports = { TEAMS, DIVISIONS }; }
