// # Перебираючі методи масиву

// # HEROES

//!=========================================

// const sum = (x, y) => {
//   return x + y;
// };

// const foo1 = value => {
//   return value * 2;
// };

// const foo2 = value => value * 2;
// const foo3 = x => x * 2;
//!=========================================

// map - створює новий масив - змінює кожен елемент
// filter - створює новий масив - видаляє зайві елементи, залишає лише ті що підійшли
// find - повертає шуканий елемент який відповідає умові
// findIndex - повертає шуканий елемент який відповідає умові
// some - перевіряє наявність одного елементу який відповідає умові
// every - перевіряє чи всі елементи відповідають умові
// reduce - робить все що хоч
// toSorted - сортує

// const arr = [];

// arr.filter((elem)=>{});
// arr.find((elem, index, arr) => {});
// arr.findIndex((elem, index, arr) => {});
// arr.map((elem, index, arr) => {});
// arr.some((elem, index, arr) => {});
// arr.every((elem, index, arr) => {});
// arr.reduce((elem, index, arr) => {});

//!=========================================

// const numbers = [1, 3, 6, 1, 2, 3, 5, 2, 1, 3, 5, 4, 1, 1];

// numbers.filter(el => el % 2 === 0);
// numbers.filter(el => el > 5);
// numbers.filter(el => el * 2 < 10);

//!=========================================

const heroes = [
  {
    appearance: {
      eyeColor: 'Brown',
      gender: 'Male',
      hairColor: 'Auburn',
      height: ["6'2'", '188 cm'],
      race: null,
      weight: ['200 lb', '90 kg'],
    },
    biography: {
      aliases: ['Stargod', 'Vanwolf', 'Skywolf'],
      alignment: 'good',
      alterEgos: 'No alter egos found.',
      firstAppearance:
        'AMAZING SPIDER-MAN #1, (as Man-Wolf) AMAZING SPIDER-MAN #124',
      fullName: 'John Jameson',
      placeOfBirth: 'New York, New York',
      publisher: 'Marvel Comics',
    },
    connections: {
      groupAffiliation:
        'Ravencroft Insitute Staff, Avengers Support Crew, NASA, USAF',
      relatives:
        'J. Jonah (father), Joan (mother, deceased), Marla Madison (stepmother), David (paternal grandfather, presumed deceased), Betty (paternal grandmother, presumed deceased)',
    },
    id: 429,
    images: {
      lg: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/429-man-wolf.jpg',
      md: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/429-man-wolf.jpg',
      sm: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/429-man-wolf.jpg',
      xs: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/429-man-wolf.jpg',
    },
    name: 'Man-Wolf',
    powerstats: {
      combat: 70,
      durability: 42,
      intelligence: 63,
      power: 45,
      speed: 35,
      strength: 44,
    },
    slug: '429-man-wolf',
    work: {
      base: 'Queens',
      occupation:
        'Employed by Dept. of Social Services, Queens; former astronaut, test pilot, security chief for Ravenscroft Institute',
    },
  },
  {
    appearance: {
      eyeColor: 'White',
      gender: 'Female',
      hairColor: 'Orange',
      height: ["6'4", '193 cm'],
      race: 'Alien',
      weight: ['218 lb', '98 kg'],
    },
    biography: {
      aliases: ['-'],
      alignment: 'good',
      alterEgos: 'No alter egos found.',
      firstAppearance: 'The Order #4',
      fullName: 'Ardina',
      placeOfBirth: '-',
      publisher: 'Marvel Comics',
    },
    connections: {
      groupAffiliation: '-',
      relatives: 'Norrin Radd (Silver Surfer, clonal source), Clea (creator)',
    },
    id: 42,
    images: {
      lg: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/42-ardina.jpg',
      md: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/42-ardina.jpg',
      sm: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/42-ardina.jpg',
      xs: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/42-ardina.jpg',
    },
    name: 'Ardina',
    powerstats: {
      combat: 25,
      durability: 80,
      intelligence: 63,
      power: 100,
      speed: 100,
      strength: 100,
    },
    slug: '42-ardina',
    work: {
      base: '-',
      occupation: '-',
    },
  },
  {
    appearance: {
      eyeColor: 'Blue',
      gender: 'Male',
      hairColor: 'Black',
      height: ["5'5", '165 cm'],
      race: 'Human',
      weight: ['125 lb', '56 kg'],
    },
    biography: {
      aliases: ['Alvin Draper', 'Batman', 'Robin', 'Timothy Wayne'],
      alignment: 'good',
      alterEgos: 'Red Robin',
      firstAppearance: 'Batman #436 (August, 1989)',
      fullName: 'Tim Drake',
      placeOfBirth: '-',
      publisher: 'Red Robin',
    },
    connections: {
      groupAffiliation:
        'Teen Titans, Batman Family, Batman Inc., Wayne Enterprises; formerly Young Justice',
      relatives:
        'Jack Drake (father, deceased), Janet Drake (mother, deceased), Dana Winters Drake (step-mother, status unknown), Bruce Wayne (Batman, adoptive father), Damian Wayne (Robin V, adoptive brother), Dick Grayson (Robin I, adoptive brother), Jason Todd (Robin II, adoptive brother), Cassandra Cain (Batgirl IV, adoptive sister)',
    },
    id: 563,
    images: {
      lg: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/563-robin-iii.jpg',
      md: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/563-robin-iii.jpg',
      sm: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/563-robin-iii.jpg',
      xs: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/563-robin-iii.jpg',
    },
    name: 'Robin III',
    powerstats: {
      combat: 85,
      durability: 28,
      intelligence: 81,
      power: 29,
      speed: 27,
      strength: 11,
    },
    slug: '563-robin-iii',
    work: {
      base: 'Gotham City; Titans Tower, San Francisco',
      occupation: 'High School Student',
    },
  },
  {
    appearance: {
      eyeColor: '-',
      gender: 'Female',
      hairColor: 'Blond',
      height: ['-', '0 cm'],
      race: null,
      weight: ['- lb', '0 kg'],
    },
    biography: {
      aliases: ['-'],
      alignment: 'good',
      alterEgos: 'No alter egos found.',
      firstAppearance: 'No Ordinary Family S01E01 (2010)',
      fullName: 'Stephanie Powell',
      placeOfBirth: '-',
      publisher: 'ABC Studios',
    },
    connections: {
      groupAffiliation: '-',
      relatives:
        'Jim Powell (husband), Daphne Powell (daughter), JJ Powell (son)',
    },
    id: 636,
    images: {
      lg: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/636-stephanie-powell.jpg',
      md: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/636-stephanie-powell.jpg',
      sm: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/636-stephanie-powell.jpg',
      xs: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/636-stephanie-powell.jpg',
    },
    name: 'Stephanie Powell',
    powerstats: {
      combat: 10,
      durability: 10,
      intelligence: 69,
      power: 24,
      speed: 54,
      strength: 10,
    },
    slug: '636-stephanie-powell',
    work: {
      base: '-',
      occupation: 'Executive Vice President of Research at Global Tech',
    },
  },
  {
    appearance: {
      eyeColor: 'Blue',
      gender: 'Male',
      hairColor: 'Black',
      height: ["5'9", '175 cm'],
      race: 'Human',
      weight: ['165 lb', '74 kg'],
    },
    biography: {
      aliases: ['Captain Marvel Jr.', 'CM3'],
      alignment: 'good',
      alterEgos: 'No alter egos found.',
      firstAppearance:
        'Current incarnation: (As Freddy Freeman) The Power of Shazam #3 (May, 1995)',
      fullName: 'Frederick Christopher Freeman',
      placeOfBirth: '-',
      publisher: 'DC Comics',
    },
    connections: {
      groupAffiliation: 'Marvel Family, formerly Outsiders and Teen Titans.',
      relatives:
        'parents, deceased, Jacob Freeman (granfather, deceased), Timothy Karnes (Sabbac, foster brother, deceased)',
    },
    id: 158,
    images: {
      lg: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/158-captain-marvel-ii.jpg',
      md: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/158-captain-marvel-ii.jpg',
      sm: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/158-captain-marvel-ii.jpg',
      xs: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/158-captain-marvel-ii.jpg',
    },
    name: 'Captain Marvel II',
    powerstats: {
      combat: 56,
      durability: 90,
      intelligence: 75,
      power: 34,
      speed: 27,
      strength: 81,
    },
    slug: '158-captain-marvel-ii',
    work: {
      base: 'Primarily Fawcett City.',
      occupation: 'Adventurer',
    },
  },
  {
    appearance: {
      eyeColor: 'Brown',
      gender: 'Male',
      hairColor: 'Grey',
      height: ["6'4", '193 cm'],
      race: 'Cyborg',
      weight: ['395 lb', '178 kg'],
    },
    biography: {
      aliases: ['Demolisher'],
      alignment: 'good',
      alterEgos: 'No alter egos found.',
      firstAppearance: 'Astonishing Tales #25 (August, 1974)',
      fullName: 'Luther Manning',
      placeOfBirth: '-',
      publisher: 'Marvel Comics',
    },
    connections: {
      groupAffiliation:
        "Former member of the CIA, Project: Alpha-Mech, US Army, ally of Godwulf's Redeemers",
      relatives: 'Janice (Wife, seperated), Richard (son)',
    },
    id: 215,
    images: {
      lg: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/215-deathlok.jpg',
      md: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/215-deathlok.jpg',
      sm: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/215-deathlok.jpg',
      xs: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/215-deathlok.jpg',
    },
    name: 'Deathlok',
    powerstats: {
      combat: 60,
      durability: 70,
      intelligence: 69,
      power: 40,
      speed: 30,
      strength: 32,
    },
    slug: '215-deathlok',
    work: {
      base: 'New York area',
      occupation: '-',
    },
  },
  {
    appearance: {
      eyeColor: '-',
      gender: 'Male',
      hairColor: '-',
      height: ['-', '0 cm'],
      race: null,
      weight: ['- lb', '0 kg'],
    },
    biography: {
      aliases: ['Cape'],
      alignment: 'good',
      alterEgos: 'No alter egos found.',
      firstAppearance: 'The Cape S01E01 (2011)',
      fullName: 'Vince Faraday',
      placeOfBirth: '-',
      publisher: null,
    },
    connections: {
      groupAffiliation: '-',
      relatives: 'Trip Faraday (son), Dana Thompson-Faraday (wife)',
    },
    id: 656,
    images: {
      lg: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/656-the-cape.jpg',
      md: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/656-the-cape.jpg',
      sm: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/656-the-cape.jpg',
      xs: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/656-the-cape.jpg',
    },
    name: 'The Cape',
    powerstats: {
      combat: 64,
      durability: 32,
      intelligence: 38,
      power: 22,
      speed: 23,
      strength: 10,
    },
    slug: '656-the-cape',
    work: {
      base: '-',
      occupation: '-',
    },
  },
  {
    appearance: {
      eyeColor: 'Blue',
      gender: 'Female',
      hairColor: 'Blond',
      height: ["5'5", '165 cm'],
      race: 'Human',
      weight: ['125 lb', '56 kg'],
    },
    biography: {
      aliases: ['Spider-Woman'],
      alignment: 'good',
      alterEgos: 'No alter egos found.',
      firstAppearance: 'Edge of Spider-Verse #2',
      fullName: 'Gwen Stacy',
      placeOfBirth: '-',
      publisher: 'Marvel Comics',
    },
    connections: {
      groupAffiliation:
        'Warriors of the Great Web; formerly Mary Janes, Spider-Army',
      relatives: 'George Stacy (father), Helen Stacy (mother, deceased)',
    },
    id: 619,
    images: {
      lg: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/619-spider-gwen.jpg',
      md: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/619-spider-gwen.jpg',
      sm: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/619-spider-gwen.jpg',
      xs: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/619-spider-gwen.jpg',
    },
    name: 'Spider-Gwen',
    powerstats: {
      combat: 70,
      durability: 70,
      intelligence: 75,
      power: 66,
      speed: 63,
      strength: 55,
    },
    slug: '619-spider-gwen',
    work: {
      base: '-',
      occupation: '-',
    },
  },
  {
    appearance: {
      eyeColor: 'Grey',
      gender: 'Male',
      hairColor: 'Black',
      height: ["6'2", '188 cm'],
      race: 'Human',
      weight: ['180 lb', '81 kg'],
    },
    biography: {
      aliases: [
        'Sorcerer Supreme',
        'Master of the Mystic Arts',
        'Stephen Sanders',
        'Captain Universe',
        'Vincent Stevens',
      ],
      alignment: 'good',
      alterEgos: 'No alter egos found.',
      firstAppearance: 'Strange Tales #110 (July, 1963)',
      fullName: 'Stephen Strange',
      placeOfBirth: 'Philadelphia, Pennsylvania',
      publisher: 'Marvel Comics',
    },
    connections: {
      groupAffiliation:
        'Defenders, underground Avengers; formerly the Order, Midnight Sons; former disciple of the Ancient One',
      relatives:
        'Eugene (father, deceased), Beverly (mother, deceased), Victor (Khiron, brother, apparently deceased), Donna (sister, deceased), Clea (wife, estranged), Umar (mother-in-law), Orini (father-in-law), Dormammu (uncle-in-law)',
    },
    id: 226,
    images: {
      lg: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/226-doctor-strange.jpg',
      md: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/226-doctor-strange.jpg',
      sm: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/226-doctor-strange.jpg',
      xs: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/226-doctor-strange.jpg',
    },
    name: 'Doctor Strange',
    powerstats: {
      combat: 60,
      durability: 84,
      intelligence: 100,
      power: 100,
      speed: 12,
      strength: 10,
    },
    slug: '226-doctor-strange',
    work: {
      base: '-',
      occupation: 'Sorcerer Supreme, retired neurosurgeon',
    },
  },
  {
    appearance: {
      eyeColor: 'Bown',
      gender: 'Male',
      hairColor: 'Black',
      height: ['-', '0 cm'],
      race: 'Human',
      weight: ['- lb', '0 kg'],
    },
    biography: {
      aliases: ['Green Lantern', 'White Lantern'],
      alignment: 'good',
      alterEgos: 'No alter egos found.',
      firstAppearance: 'The New 52: FCBD Special Edition #1 (June, 2012)',
      fullName: 'Simoon Baz',
      placeOfBirth: 'Dearborn, Michigan',
      publisher: 'DC Comics',
    },
    connections: {
      groupAffiliation: '-',
      relatives:
        'Sira Baz (sister), Farid Amar (nephew), Nazir Amar (brother in-law)',
    },
    id: 600,
    images: {
      lg: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/600-simon-baz.jpg',
      md: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/600-simon-baz.jpg',
      sm: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/600-simon-baz.jpg',
      xs: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/600-simon-baz.jpg',
    },
    name: 'Simon Baz',
    powerstats: {
      combat: 60,
      durability: 55,
      intelligence: 56,
      power: 100,
      speed: 42,
      strength: 90,
    },
    slug: '600-simon-baz',
    work: {
      base: '-',
      occupation: '-',
    },
  },
  {
    appearance: {
      eyeColor: '-',
      gender: 'Female',
      hairColor: '-',
      height: ['-', '0 cm'],
      race: null,
      weight: ['- lb', '0 kg'],
    },
    biography: {
      aliases: ['-'],
      alignment: 'good',
      alterEgos: 'No alter egos found.',
      firstAppearance: 'Heroes S02E04 - The Kindness of Strangers',
      fullName: 'Monica Dawson',
      placeOfBirth: '-',
      publisher: 'NBC - Heroes',
    },
    connections: {
      groupAffiliation: '-',
      relatives:
        'Nana Dawson (Grandmother), Damon (brother), DL Hawkins (cousin), Niki Sanders (cousin-in-law once removed), Micah Sanders (second cousin)',
    },
    id: 469,
    images: {
      lg: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/469-monica-dawson.jpg',
      md: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/469-monica-dawson.jpg',
      sm: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/469-monica-dawson.jpg',
      xs: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/469-monica-dawson.jpg',
    },
    name: 'Monica Dawson',
    powerstats: {
      combat: 90,
      durability: 14,
      intelligence: 50,
      power: 48,
      speed: 35,
      strength: 10,
    },
    slug: '469-monica-dawson',
    work: {
      base: 'New Orleans, LA',
      occupation: 'Fast food service',
    },
  },
  {
    appearance: {
      eyeColor: 'Brown',
      gender: 'Male',
      hairColor: 'Brown',
      height: ["6'1", '185 cm'],
      race: 'Human',
      weight: ['180 lb', '81 kg'],
    },
    biography: {
      aliases: ['Bucket-Head', 'Edge-Man', 'Powell'],
      alignment: 'good',
      alterEgos: 'No alter egos found.',
      firstAppearance: 'Darkhawk #1 (March, 1991)',
      fullName: 'Christopher Powell',
      placeOfBirth: 'Queens, New York',
      publisher: 'Marvel Comics',
    },
    connections: {
      groupAffiliation:
        'formerly Loners, New Warriors, Avengers West Coast (reservist), Secret Defenders (founder)',
      relatives:
        'Michael Powell (father), Grace Powell (mother), Jonathon and Jason Powell (brothers)',
    },
    id: 202,
    images: {
      lg: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/202-darkhawk.jpg',
      md: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/202-darkhawk.jpg',
      sm: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/202-darkhawk.jpg',
      xs: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/202-darkhawk.jpg',
    },
    name: 'Darkhawk',
    powerstats: {
      combat: 64,
      durability: 70,
      intelligence: 50,
      power: 74,
      speed: 33,
      strength: 32,
    },
    slug: '202-darkhawk',
    work: {
      base: 'Los Angeles, California; formerly New York City and Avengers Compound',
      occupation: 'Retired Superhero',
    },
  },
  {
    appearance: {
      eyeColor: 'Brown',
      gender: 'Male',
      hairColor: 'Brown',
      height: ["5'4", '163 cm'],
      race: null,
      weight: ['124 lb', '56 kg'],
    },
    biography: {
      aliases: ['Max'],
      alignment: 'good',
      alterEgos: 'No alter egos found.',
      firstAppearance: 'New X-Men: Academy X #1',
      fullName: 'Maxwell Jordan',
      placeOfBirth: '-',
      publisher: 'Marvel Comics',
    },
    connections: {
      groupAffiliation: 'Corsairs',
      relatives: '-',
    },
    id: 537,
    images: {
      lg: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/537-quill.jpg',
      md: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/537-quill.jpg',
      sm: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/537-quill.jpg',
      xs: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/537-quill.jpg',
    },
    name: 'Quill',
    powerstats: {
      combat: 14,
      durability: 14,
      intelligence: 38,
      power: 23,
      speed: 12,
      strength: 10,
    },
    slug: '537-quill',
    work: {
      base: 'X-Mansion',
      occupation: '-',
    },
  },
  {
    appearance: {
      eyeColor: '-',
      gender: 'Male',
      hairColor: '-',
      height: ['-', '0 cm'],
      race: null,
      weight: ['- lb', '0 kg'],
    },
    biography: {
      aliases: ['-'],
      alignment: 'good',
      alterEgos: 'No alter egos found.',
      firstAppearance: 'Darkman (August 24, 1990)',
      fullName: 'Peyton Westlake',
      placeOfBirth: '-',
      publisher: 'Universal Studios',
    },
    connections: {
      groupAffiliation: '-',
      relatives: 'Julie Hastings (girlfriend)',
    },
    id: 203,
    images: {
      lg: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/203-darkman.jpg',
      md: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/203-darkman.jpg',
      sm: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/203-darkman.jpg',
      xs: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/203-darkman.jpg',
    },
    name: 'Darkman',
    powerstats: {
      combat: 28,
      durability: 85,
      intelligence: 75,
      power: 12,
      speed: 23,
      strength: 14,
    },
    slug: '203-darkman',
    work: {
      base: '-',
      occupation: 'Scientist',
    },
  },
  {
    appearance: {
      eyeColor: 'Green',
      gender: 'Female',
      hairColor: 'Blond',
      height: ["5'10", '178 cm'],
      race: 'Human',
      weight: ['120 lb', '54 kg'],
    },
    biography: {
      aliases: ['Felicity Harmon'],
      alignment: 'good',
      alterEgos: 'No alter egos found.',
      firstAppearance: 'Amazing Spider-Man #194 (July, 1979)',
      fullName: 'Felicia Hardy',
      placeOfBirth: 'Queens, New York',
      publisher: 'Marvel Comics',
    },
    connections: {
      groupAffiliation: 'Formerly Heroes for Hire',
      relatives: 'Walter Hardy (father, deceased), Lydia Hardy (mother)',
    },
    id: 99,
    images: {
      lg: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/99-black-cat.jpg',
      md: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/99-black-cat.jpg',
      sm: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/99-black-cat.jpg',
      xs: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/99-black-cat.jpg',
    },
    name: 'Black Cat',
    powerstats: {
      combat: 70,
      durability: 10,
      intelligence: 75,
      power: 23,
      speed: 33,
      strength: 16,
    },
    slug: '99-black-cat',
    work: {
      base: '-',
      occupation:
        "Cat burglar; Private investigator, founder of Cat's Eye Investigations.",
    },
  },
  {
    appearance: {
      eyeColor: 'Blue',
      gender: 'Male',
      hairColor: 'Blond',
      height: ['-', '0 cm'],
      race: 'Human',
      weight: ['- lb', '0 kg'],
    },
    biography: {
      aliases: [
        'Time Lord',
        'Time Master',
        'Boppy',
        'Dr. Hunter',
        'Mr',
        'Hunter',
        'Carter',
      ],
      alignment: 'good',
      alterEgos: 'No alter egos found.',
      firstAppearance: 'Showcase #20',
      fullName: 'Richard Hunter',
      placeOfBirth: '-',
      publisher: 'DC Comics',
    },
    connections: {
      groupAffiliation:
        'Formerly leader of the Time Masters; former member of the Forgotten Heroes; former member of the Linear Men, Booster Gold International (BGI)',
      relatives:
        'Michael Carter, (Booster Gold, father), Unknown (mother), Jonar Carter (grandfather), Ellen Carter (grandmother, deceased), Michelle Carter (Goldstar) (aunt), Daniel Carter (21st century ancestor), Rose Levin (ancestor), Dan Hunter (cousin),',
    },
    id: 559,
    images: {
      lg: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/559-rip-hunter.jpg',
      md: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/559-rip-hunter.jpg',
      sm: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/559-rip-hunter.jpg',
      xs: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/559-rip-hunter.jpg',
    },
    name: 'Rip Hunter',
    powerstats: {
      combat: 25,
      durability: 10,
      intelligence: 100,
      power: 100,
      speed: 8,
      strength: 8,
    },
    slug: '559-rip-hunter',
    work: {
      base: 'Time Lab, Arizona',
      occupation: '-',
    },
  },
  {
    appearance: {
      eyeColor: 'Black',
      gender: 'Female',
      hairColor: 'Black',
      height: ["5'8", '173 cm'],
      race: 'Talokite',
      weight: ['120 lb', '54 kg'],
    },
    biography: {
      aliases: ['-'],
      alignment: 'good',
      alterEgos: 'No alter egos found.',
      firstAppearance: 'Adventure Comics #365',
      fullName: 'Tasmia Mallor',
      placeOfBirth: 'Talok VIII',
      publisher: 'DC Comics',
    },
    connections: {
      groupAffiliation: '-',
      relatives: '-',
    },
    id: 585,
    images: {
      lg: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/585-shadow-lass.jpg',
      md: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/585-shadow-lass.jpg',
      sm: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/585-shadow-lass.jpg',
      xs: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/585-shadow-lass.jpg',
    },
    name: 'Shadow Lass',
    powerstats: {
      combat: 80,
      durability: 20,
      intelligence: 63,
      power: 79,
      speed: 67,
      strength: 10,
    },
    slug: '585-shadow-lass',
    work: {
      base: '-',
      occupation: '-',
    },
  },
  {
    appearance: {
      eyeColor: 'Yellow',
      gender: 'Male',
      hairColor: 'Indigo',
      height: ["5'9'", '175 cm'],
      race: null,
      weight: ['195 lb', '88 kg'],
    },
    biography: {
      aliases: ['-'],
      alignment: 'good',
      alterEgos: 'No alter egos found.',
      firstAppearance: 'GIANT-SIZE X-MEN #1',
      fullName: 'Kurt Wagner',
      placeOfBirth: 'Somewhere in the Bavarian Alps',
      publisher: 'Marvel Comics',
    },
    connections: {
      groupAffiliation: 'X-Men, formerly Excalibur',
      relatives:
        'Eric Wagner (father, deceased), Margali Szardos (foster mother), Jimaine Szardos (Daytripper, alias Amanda Sefton, foster sister), Stefan Szardos (foster brother, deceased), Mystique (mother), Graydon Creed (half-brother, deceased).',
    },
    id: 490,
    images: {
      lg: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/490-nightcrawler.jpg',
      md: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/490-nightcrawler.jpg',
      sm: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/490-nightcrawler.jpg',
      xs: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/490-nightcrawler.jpg',
    },
    name: 'Nightcrawler',
    powerstats: {
      combat: 80,
      durability: 14,
      intelligence: 50,
      power: 76,
      speed: 47,
      strength: 10,
    },
    slug: '490-nightcrawler',
    work: {
      base: 'Xavier Institute for Higher Learning, Salem Center, Westchester County, New York (former) Muir Island, Scotland; Braddock Lighthouse',
      occupation: 'Adventurer, Teacher',
    },
  },
  {
    appearance: {
      eyeColor: 'Green',
      gender: 'Female',
      hairColor: 'Brown',
      height: ['-', '0 cm'],
      race: 'Human',
      weight: ['- lb', '0 kg'],
    },
    biography: {
      aliases: ['Green Lantern', 'Power Ring'],
      alignment: 'good',
      alterEgos: 'No alter egos found.',
      firstAppearance: 'Green Lantern Vol 5 #20 (July, 2013)',
      fullName: 'Jessica Cruz',
      placeOfBirth: '-',
      publisher: 'DC Comics',
    },
    connections: {
      groupAffiliation: '-',
      relatives: 'Sara Cruz (sister)',
    },
    id: 360,
    images: {
      lg: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/360-jessica-cruz.jpg',
      md: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/360-jessica-cruz.jpg',
      sm: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/360-jessica-cruz.jpg',
      xs: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/360-jessica-cruz.jpg',
    },
    name: 'Jessica Cruz',
    powerstats: {
      combat: 55,
      durability: 50,
      intelligence: 56,
      power: 100,
      speed: 46,
      strength: 90,
    },
    slug: '360-jessica-cruz',
    work: {
      base: '-',
      occupation: '-',
    },
  },
  {
    appearance: {
      eyeColor: 'Blue',
      gender: 'Male',
      hairColor: 'No Hair',
      height: ["6'1", '185 cm'],
      race: 'Ungaran',
      weight: ['200 lb', '90 kg'],
    },
    biography: {
      aliases: ['Lagzia'],
      alignment: 'good',
      alterEgos: 'No alter egos found.',
      firstAppearance: 'Showcase #22 (October, 1959)',
      fullName: '',
      placeOfBirth: 'Ungara',
      publisher: 'DC Comics',
    },
    connections: {
      groupAffiliation: 'Green Lantern Corps, Black Lantern Corps',
      relatives:
        'Amon Sur (son), Arin Sur (sister), Thaal Sinestro (brother-in-law), Soranik Natu (niece)',
    },
    id: 3,
    images: {
      lg: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/3-abin-sur.jpg',
      md: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/3-abin-sur.jpg',
      sm: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/3-abin-sur.jpg',
      xs: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/3-abin-sur.jpg',
    },
    name: 'Abin Sur',
    powerstats: {
      combat: 65,
      durability: 64,
      intelligence: 50,
      power: 99,
      speed: 53,
      strength: 90,
    },
    slug: '3-abin-sur',
    work: {
      base: 'Oa',
      occupation: 'Green Lantern, former history professor',
    },
  },
];
// 1. Напиши функцію, яка приймає масив героїв та повертає масив імен усіх героїв.
// 1. Напиши функцію, яка приймає масив героїв та повертає масив героїв, у яких
//    gender дорівнює 'Male'.

function task2() {
  const res = heroes.filter(hero => hero.appearance.gender === 'Male');
}

// 1. Напиши функцію, яка приймає масив героїв та повертає масив героїв, у яких
//    eyeColor дорівнює 'Blue'.
function task3(color) {
  const res = heroes.filter(hero => hero.appearance.eyeColor === color);
  return res;
}
task3('Green');
// 1. Напиши функцію, яка приймає масив героїв та повертає масив героїв, у яких
//    hairColor дорівнює 'Black'.
function task4(color) {
  const res = heroes.some(hero => hero.appearance.hairColor === color);
  return res;
}
// 1. Напиши функцію, яка приймає масив героїв та повертає масив героїв, у яких
//    race дорівнює 'Human'.
// 1. Напиши функцію, яка приймає масив героїв та повертає масив героїв, у яких
//    publisher дорівнює 'Marvel Comics'.
// 1. Напиши функцію, яка приймає масив героїв та повертає масив героїв, у яких
//    powerstats.power більше ніж 80.
// 1. Напиши функцію, яка приймає масив героїв та повертає масив героїв, у яких
//    powerstats.intelligence менше ніж 50.
// 1. Напиши функцію, яка приймає масив героїв та повертає героя з name рівним
//    'Doctor Strange'.
// 1. Напиши функцію, яка приймає масив героїв та повертає героя з максимальним
//    значенням powerstats.strength.
// 1. Напиши функцію, яка приймає масив героїв та повертає героя з мінімальним
//    значенням powerstats.speed.
// 1. Напиши функцію, яка приймає масив героїв та повертає масив героїв, у яких
//    appearance.weight[1] менше 75 кг.
// 1. Напиши функцію, яка приймає масив героїв та повертає масив героїв, у яких
//    appearance.height[1] більше 180 см.
// 1. Напиши функцію, яка приймає масив героїв та повертає масив назв
//    biography.firstAppearance усіх героїв.
// 1. Напиши функцію, яка приймає масив героїв та повертає масив назв
//    work.occupation усіх героїв.
// 1. Напиши функцію, яка приймає масив героїв та сортує його за зростанням
//    powerstats.intelligence.
// 1. Напиши функцію, яка приймає масив героїв та сортує його за спаданням
//    powerstats.power.
// 1. Напиши функцію, яка приймає масив героїв та сортує його за алфавітом по name.
// 1. Напиши функцію, яка приймає масив героїв та перевіряє, чи є хоча б один герой
//    з alignment рівним 'bad'.
// 1. Напиши функцію, яка приймає масив героїв та перевіряє, чи всі герої мають
//    alignment рівним 'good'.
// 1. Напиши функцію, яка приймає масив героїв та перевіряє, чи є хоча б один герой
//    з powerstats.intelligence рівним 100.
// 1. Напиши функцію, яка приймає масив героїв та перевіряє, чи всі герої мають
//    race, відмінний від null.
// 1. Напиши функцію, яка приймає масив героїв та перевіряє, чи є хоча б один герой
//    вагою більше ніж 150 кг.
// 1. Напиши функцію, яка приймає масив героїв та повертає індекс героя з id
//    рівним 226.
// 1. Напиши функцію, яка приймає масив героїв та повертає масив довжин масиву
//    aliases кожного героя.
// 1. Напиши функцію, яка приймає масив героїв та повертає героя, у якого найбільше
//    aliases.
// 1. Напиши функцію, яка приймає масив героїв та повертає масив героїв, у яких
//    кількість aliases більше ніж 3.
// 1. Напиши функцію, яка приймає масив героїв та повертає масив героїв, у яких в
//    полі work.occupation значення дорівнює "-".
// 1. Напиши функцію, яка приймає масив героїв та повертає масив героїв, які мають
//    у groupAffiliation згадку про 'Avengers'.
// 1. Напиши функцію, яка приймає масив героїв та повертає масив, де кожен елемент
//    — рядок виду: "NAME has POWER power".

// 1. Напиши функцію, яка повертає масив імен лише тих супергероїв, яким більше 20
//    років. Масив має бути відсортований за алфавітом.
// 1. Напиши функцію, яка повертає масив об'єктів з властивостями name та age лише
//    тих супергероїв, яким менше 20 років. Масив має бути відсортований за віком
//    супергероя (від меншого до більшого).
// 1. Напиши функцію, яка повертає масив імен супергероїв, у яких
//    powerstats.strength більше 80. Відсортуй результат за зменшенням сили
//    (strength).
// 1. Напиши функцію, яка повертає масив імен супергероїв, у яких race === "Human"
//    та intelligence більше 70. Результат має бути відсортований за зростанням
//    intelligence.
// 1. Напиши функцію, яка повертає масив об'єктів типу { name, publisher }, але
//    лише для героїв, у яких alignment === 'good' і intelligence більше 60.
//    Відсортуй масив за ім'ям.
// 1. Напиши функцію, яка повертає масив назв першої появи (firstAppearance) лише
//    унікальних коміксів, де вперше з'явились герої з publisher === 'Marvel
//    Comics' та powerstats.speed більше 60. Результат відсортуй алфавітно.
// 1. Напиши функцію, яка повертає масив { name, aliasesCount } — кількість
//    псевдонімів для кожного героя, де aliasesCount > 3. Відсортуй результат за
//    спаданням кількості псевдонімів.
// 1. Напиши функцію, яка повертає масив імен героїв, чия вага (у kg) менша за 80
//    кг та сила (strength) більше 60. Результат відсортуй за зростанням ваги.
// 1. Напиши функцію, яка повертає масив з імен та довжиною рядка occupation для
//    кожного героя. Відфільтруй лише тих, у кого occupation довше ніж 10 символів.
//    Відсортуй результат за довжиною occupation.
// 1. Напиши функцію, яка повертає масив імен героїв, які входять до складу груп
//    (groupAffiliation містить не порожній рядок), та мають alignment === 'good'.
//    Відсортуй результат за алфавітом.

//?===================================================================
//?===================================================================
//?===================================================================

// # Books

const books = [
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    year: 1960,
    genre: 'Fiction',
    price: 10.99,
    rating: 4.9,
  },
  {
    title: '1984',
    author: 'George Orwell',
    year: 1949,
    genre: 'Dystopian',
    price: 8.99,
    rating: 4.8,
  },
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    year: 1925,
    genre: 'Classic',
    price: 7.99,
    rating: 4.7,
  },
  {
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    year: 1951,
    genre: 'Fiction',
    price: 6.99,
    rating: 4.6,
  },
  {
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    year: 1813,
    genre: 'Romance',
    price: 5.99,
    rating: 4.9,
  },
  {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    year: 1937,
    genre: 'Fantasy',
    price: 12.99,
    rating: 4.8,
  },
  {
    title: 'Moby Dick',
    author: 'Herman Melville',
    year: 1851,
    genre: 'Adventure',
    price: 9.99,
    rating: 4.5,
  },
  {
    title: 'War and Peace',
    author: 'Leo Tolstoy',
    year: 1869,
    genre: 'Historical',
    price: 14.99,
    rating: 4.9,
  },
  {
    title: 'Crime and Punishment',
    author: 'Fyodor Dostoevsky',
    year: 1866,
    genre: 'Philosophical',
    price: 11.99,
    rating: 4.8,
  },
  {
    title: 'The Brothers Karamazov',
    author: 'Fyodor Dostoevsky',
    year: 1880,
    genre: 'Philosophical',
    price: 13.99,
    rating: 4.9,
  },
  {
    title: 'Brave New World',
    author: 'Aldous Huxley',
    year: 1932,
    genre: 'Dystopian',
    price: 9.99,
    rating: 4.7,
  },
  {
    title: 'Jane Eyre',
    author: 'Charlotte Brontë',
    year: 1847,
    genre: 'Romance',
    price: 7.99,
    rating: 4.8,
  },
  {
    title: 'Wuthering Heights',
    author: 'Emily Brontë',
    year: 1847,
    genre: 'Romance',
    price: 8.99,
    rating: 4.7,
  },
  {
    title: 'The Picture of Dorian Gray',
    author: 'Oscar Wilde',
    year: 1890,
    genre: 'Gothic',
    price: 6.99,
    rating: 4.6,
  },
  {
    title: 'Frankenstein',
    author: 'Mary Shelley',
    year: 1818,
    genre: 'Science Fiction',
    price: 7.99,
    rating: 4.7,
  },
  {
    title: 'Dracula',
    author: 'Bram Stoker',
    year: 1897,
    genre: 'Horror',
    price: 6.99,
    rating: 4.5,
  },
  {
    title: 'The Odyssey',
    author: 'Homer',
    year: -800,
    genre: 'Epic',
    price: 10.99,
    rating: 4.9,
  },
  {
    title: 'The Iliad',
    author: 'Homer',
    year: -750,
    genre: 'Epic',
    price: 9.99,
    rating: 4.8,
  },
  {
    title: 'Les Misérables',
    author: 'Victor Hugo',
    year: 1862,
    genre: 'Historical',
    price: 11.99,
    rating: 4.9,
  },
  {
    title: 'The Count of Monte Cristo',
    author: 'Alexandre Dumas',
    year: 1844,
    genre: 'Adventure',
    price: 12.99,
    rating: 4.9,
  },
  {
    title: 'The Grapes of Wrath',
    author: 'John Steinbeck',
    year: 1939,
    genre: 'Fiction',
    price: 8.99,
    rating: 4.7,
  },
  {
    title: 'Of Mice and Men',
    author: 'John Steinbeck',
    year: 1937,
    genre: 'Fiction',
    price: 7.99,
    rating: 4.6,
  },
  {
    title: 'A Tale of Two Cities',
    author: 'Charles Dickens',
    year: 1859,
    genre: 'Historical',
    price: 9.99,
    rating: 4.8,
  },
  {
    title: 'Great Expectations',
    author: 'Charles Dickens',
    year: 1861,
    genre: 'Fiction',
    price: 8.99,
    rating: 4.7,
  },
  {
    title: 'The Secret Garden',
    author: 'Frances Hodgson Burnett',
    year: 1911,
    genre: 'Children',
    price: 6.99,
    rating: 4.7,
  },
  {
    title: 'Little Women',
    author: 'Louisa May Alcott',
    year: 1868,
    genre: 'Fiction',
    price: 7.99,
    rating: 4.8,
  },
  {
    title: 'Anna Karenina',
    author: 'Leo Tolstoy',
    year: 1877,
    genre: 'Romance',
    price: 10.99,
    rating: 4.9,
  },
  {
    title: 'The Adventures of Sherlock Holmes',
    author: 'Arthur Conan Doyle',
    year: 1892,
    genre: 'Mystery',
    price: 9.99,
    rating: 4.8,
  },
  {
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    year: 1954,
    genre: 'Fantasy',
    price: 20.99,
    rating: 4.9,
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: 'J.K. Rowling',
    year: 1997,
    genre: 'Fantasy',
    price: 10.99,
    rating: 4.8,
  },
];

// 1. Знайти всі книги жанру 'Fantasy'.// filter
// 1. Знайти всі книги, видані після 2000 року.
// 1. Знайти всі книги, автором яких є 'Fyodor Dostoevsky'.
// 1. Знайти всі книги з ціною меншою ніж 10 доларів.
// 1. Знайти всі книги з рейтингом 4.8 і вище.
// 1. Знайти всі книги жанру 'Romance' та з ціною меншою ніж 8 доларів.
// 1. Знайти всі книги, видані до 1900 року.
// 1. Знайти всі книги, що містять слово 'and' у назві.
// 1. Знайти всі книги, автором яких є 'J.R.R. Tolkien'.
// 1. Знайти всі книги жанру 'Historical' з рейтингом вище 4.7.

// ---

/* 

{
    title: "Harry Potter and the Sorcerer's Stone",
    author: 'J.K. Rowling',
    year: 1997,
    genre: 'Fantasy',
    price: 10.99,
    rating: 4.8,
  },
  
  */

// 1. Знайти першу книгу жанру 'Fantasy'.

function task5(genre) {
  const res = books.find(book => book.genre === genre);
  return res;
}
// 1. Знайти першу книгу, видану після 2000 року.

function task6(year, genre) {
  const res = books.find(book => {
    const validYear = book.year > year;
    const validGenre = book.genre === genre;
    return validYear && validGenre;
  });

  return res;
}

// 1. Знайти першу книгу, автором якої є 'Fyodor Dostoevsky'.
// 1. Знайти першу книгу з ціною меншою ніж 10 доларів.
// 1. Знайти першу книгу з рейтингом 4.8 і вище.
// 1. Знайти першу книгу жанру 'Romance' з ціною меншою ніж 8 доларів.
// 1. Знайти першу книгу, видану до 1900 року.
// 1. Знайти першу книгу, що містить слово 'and' у назві.
// 1. Знайти першу книгу, автором якої є 'J.R.R. Tolkien'.
// 1. Знайти першу книгу жанру 'Historical' з рейтингом вище 4.7.

// ---

// 1. Чи є в масиві хоча б одна книга жанру 'Fantasy'?some
// 1. Чи є в масиві хоча б одна книга, видана після 2000 року?
// 1. Чи є в масиві хоча б одна книга, автором якої є 'Fyodor Dostoevsky'?
// 1. Чи є в масиві хоча б одна книга з ціною меншою ніж 10 доларів?
// 1. Чи є в масиві хоча б одна книга з рейтингом 4.8 і вище?
// 1. Чи є в масиві хоча б одна книга жанру 'Romance' з ціною меншою ніж 8 доларів?
function task7(genre, cost) {
  const res = books.some(book => {
    const isValidGenre = book.genre === genre;
    const isValidCost = book.price < cost;
    return isValidCost && isValidGenre;
  });
  return res;
}

// 1. Чи є в масиві хоча б одна книга, видана до 1900 року?
// 1. Чи є в масиві хоча б одна книга, що містить слово 'and' у назві?
function task8(word) {
  const res = books.some(book => book.title.includes(word));
  return res;
}
// 1. Чи є в масиві хоча б одна книга, автором якої є 'J.R.R. Tolkien'?
// 1. Чи є в масиві хоча б одна книга жанру 'Historical' з рейтингом вище 4.7?

// ---

// 1. Чи всі книги в масиві мають рейтинг 4.5 і вище?// every
// 1. Чи всі книги в масиві коштують менше 20 доларів?
// 1. Чи всі книги в масиві видані після 1950 року?
// 1. Чи всі книги в масиві є жанру 'Fiction'?
// 1. Чи всі книги в масиві мають автора з ім'ям, що починається на 'J'?
// 1. Чи всі книги в масиві є жанру 'Romance' з ціною меншою ніж 15 доларів?
// 1. Чи всі книги в масиві видані до 2000 року?
// 1. Чи всі книги в масиві мають слово 'the' у назві?
// 1. Чи всі книги в масиві мають рейтинг вище 4.0?
// 1. Чи всі книги в масиві є жанру 'Adventure'?

// ---

// 1. Отримати масив назв всіх книжок.
// 1. Отримати масив авторів всіх книжок.
books.map(book => book.author);
// 1. Створити масив об'єктів, які містять лише назву та автора кожної книжки.
books.map(book => {
  return { name: book.title, author: book.author };
});
// 1. Створити масив цін всіх книжок з подвоєною вартістю.
books.map(book => book.price * 2);
// 1. Створити масив років видання всіх книжок з доданими 5 роками до кожного.
books.map(book => book.year + 5);
// 1. Створити масив об'єктів, які містять назву книжки та її рейтинг у відсотках
//    (помножений на 10).

books.map(book => {
  return { name: book.title, rating: book.rating * 10 };
});

// 1. Створити масив об'єктів, де назва книжки буде в верхньому регістрі.

// [title, title, title]
books.map(book => {
  const res = { ...book };
  res.title = book.title.toUpperCase();
  return res;
});
// 1. Створити масив рядків, що містять інформацію про кожну книжку в форматі
//    "назва - автор".
books.map(book => {
  const res = `${book.title} - ${book.author}. `;
  return res;
});

// 1. Створити масив об'єктів, де кожна книжка буде мати нове поле `discountPrice`,
//    що дорівнює ціні зі знижкою 10%.

books.map(book => {
  const res = { ...book, discountPrice: book.price * 0.9 };
  return res;
});

// 1. Створити масив об'єктів, що містять назву книжки та її ціну з доданим
//    податком 15%.
// 1. Створити масив назв книжок, які видані після 2000 року.
// 1. Створити масив об'єктів, де кожна книжка буде мати нове поле `isClassic`, що
//    дорівнює `true`, якщо книжка видана до 1950 року.
// 1. Отримати масив жанрів всіх книжок у верхньому регістрі.
// 1. Створити масив назв книжок, де всі слова в назві починаються з великої
//    літери.
// 1. Створити масив об'єктів, що містять лише автора та рік видання кожної книжки.
// 1. Створити масив цін книжок, конвертованих з доларів у євро (курс 1 долар =
//    0.85 євро).
// 1. Створити масив назв книжок з доданим в кінці рядком "(Special Edition)".
// 1. Створити масив об'єктів, де кожна книжка буде мати нове поле `shortTitle`, що
//    містить тільки перше слово з назви.
// 1. Створити масив об'єктів, де кожна книжка буде мати нове поле `description`,
//    що містить рядок "Ця книга від автора [author] була видана у [year] році".
// 1. Створити масив об'єктів, що містять лише назву та жанр кожної книжки, де жанр
//    записаний у нижньому регістрі.

// ---

const numbers = [1, 5, 10, 2, 4, 5, 1, 2, 5, 5, 1];

numbers.toSorted((right, left) => {
  return right - left;
});

// 1. Відсортувати книги за роком видання від найдавнішого до найновішого.
books.toSorted((b, a) => {
  return a.year - b.year;
});
// 1. Відсортувати книги за ціною від найнижчої до найвищої.

books.toSorted((b, a) => {
  return a.price - b.price;
});

// 1. Відсортувати книги за рейтингом від найнижчого до найвищого.
// 1. Відсортувати книги за назвою у алфавітному порядку (від А до Я).

books.toSorted((b, a) => {
  return a.title.localeCompare(b.title);
});

// 1. Відсортувати книги за автором у зворотньому алфавітному порядку (від Z до A).
// 1. Відсортувати книги за жанром у алфавітному порядку, але книги одного жанру за
//    назвою у зворотньому алфавітному порядку.
// 1. Відсортувати книги за назвою у алфавітному порядку, але книги з однаковою
//    назвою за автором у зворотньому алфавітному порядку.
// 1. Відсортувати книги за ціною, але спочатку розташувати ті, які коштують менше
//    10 доларів, потім решту.
// 1. Відсортувати книги за рейтингом, але спочатку розташувати ті, які мають
//    рейтинг 4.8 і вище, потім решту.
// 1. Відсортувати книги спочатку за жанром, а потім за роком видання.

// ---

// 1. Отримати всі книги, видані після 2000 року та відсортувати їх за рейтингом
//    від найвищого до найнижчого, повернути лише назви.

const res1 = books
  .filter(book => book.year > 2000)
  .toSorted((b, a) => {
    return a.rating - b.rating;
  })
  .map(book => {
    return book.title;
  });

// 1. Отримати всі книги, автором яких є 'Fyodor Dostoevsky', відсортувати їх за
//    роком видання від найдавнішого до найновішого та вивести перші 5 книг.
// 1. Отримати всі книги з ціною меншою ніж 10 доларів, відсортувати їх за ціною
//    від найнижчої до найвищої та вивести назви книг.
// 1. Отримати всі книги з рейтингом 4.8 і вище, відсортувати їх за автором у
//    зворотньому алфавітному порядку та вивести авторів унікальних книг.
// 1. Отримати всі книги жанру 'Romance' з ціною меншою ніж 8 доларів та
//    відсортувати їх за рейтингом від найвищого до найнижчого.
// 1. Отримати всі книги, видані до 1900 року, відсортувати їх за рейтингом від
//    найвищого до найнижчого та вивести першу книгу.
// 1. Отримати всі книги, що містять слово 'and' у назві, відсортувати їх за роком
//    видання від найдавнішого до найновішого та вивести останню книгу.
// 1. Отримати всі книги, автором яких є 'J.R.R. Tolkien', відсортувати їх за
//    рейтингом від найвищого до найнижчого та вивести середній рейтинг.
// 1. Отримати всі книги жанру 'Historical' з рейтингом вище 4.7, відсортувати їх
//    за роком видання від найдавнішого до найновішого та вивести останні 3 книги.

//?===================================================================
//?===================================================================
//?===================================================================

// # CARS

const cars = [
  {
    brand: 'Toyota',
    model: 'Camry',
    year: 2019,
    color: 'Silver',
    price: 25000,
    amount: 3,
    isSportCar: false,
    type: 'Sedan',
  },
  {
    brand: 'Honda',
    model: 'Accord',
    year: 2020,
    color: 'White',
    price: 28000,
    amount: 5,
    isSportCar: false,
    type: 'Sedan',
  },
  {
    brand: 'Ford',
    model: 'Mustang',
    year: 2021,
    color: 'Red',
    price: 50000,
    amount: 2,
    isSportCar: true,
    type: 'Coupe',
  },
  {
    brand: 'Chevrolet',
    model: 'Camaro',
    year: 2018,
    color: 'Black',
    price: 45000,
    amount: 1,
    isSportCar: true,
    type: 'Coupe',
  },
  {
    brand: 'BMW',
    model: 'M5',
    year: 2022,
    color: 'Blue',
    price: 70000,
    amount: 2,
    isSportCar: true,
    type: 'Sedan',
  },
  {
    brand: 'Mercedes-Benz',
    model: 'E-Class',
    year: 2020,
    color: 'Silver',
    price: 60000,
    amount: 3,
    isSportCar: false,
    type: 'Sedan',
  },
  {
    brand: 'Audi',
    model: 'A4',
    year: 2021,
    color: 'Gray',
    price: 45000,
    amount: 0,
    isSportCar: false,
    type: 'Sedan',
  },
  {
    brand: 'Lamborghini',
    model: 'Huracan',
    year: 2023,
    color: 'Yellow',
    price: 300000,
    amount: 1,
    isSportCar: true,
    type: 'Coupe',
  },
  {
    brand: 'Ferrari',
    model: '488 GTB',
    year: 2022,
    color: 'Red',
    price: 350000,
    amount: 1,
    isSportCar: true,
    type: 'Coupe',
  },
  {
    brand: 'Porsche',
    model: '911',
    year: 2021,
    color: 'White',
    price: 120000,
    amount: 2,
    isSportCar: true,
    type: 'Coupe',
  },
  {
    brand: 'Toyota',
    model: 'Golf',
    year: 2020,
    color: 'Black',
    price: 20000,
    amount: 6,
    isSportCar: false,
    type: 'Hatchback',
  },
  {
    brand: 'Subaru',
    model: 'Forester',
    year: 2021,
    color: 'Green',
    price: 30000,
    amount: 3,
    isSportCar: false,
    type: 'SUV',
  },
  {
    brand: 'Jeep',
    model: 'Wrangler',
    year: 2022,
    color: 'Orange',
    price: 35000,
    amount: 0,
    isSportCar: false,
    type: 'SUV',
  },
  {
    brand: 'Mazda',
    model: 'CX-5',
    year: 2020,
    color: 'Red',
    price: 28000,
    amount: 5,
    isSportCar: false,
    type: 'SUV',
  },
  {
    brand: 'Kia',
    model: 'Soul',
    year: 2021,
    color: 'Yellow',
    price: 20000,
    amount: 4,
    isSportCar: false,
    type: 'Hatchback',
  },
  {
    brand: 'Toyota',
    model: 'Tucson',
    year: 2022,
    color: 'White',
    price: 30000,
    amount: 3,
    isSportCar: false,
    type: 'SUV',
  },
  {
    brand: 'Nissan',
    model: 'Sentra',
    year: 2019,
    color: 'Silver',
    price: 22000,
    amount: 3,
    isSportCar: false,
    type: 'Sedan',
  },
  {
    brand: 'Volvo',
    model: 'XC60',
    year: 2020,
    color: 'Blue',
    price: 40000,
    amount: 2,
    isSportCar: false,
    type: 'SUV',
  },
  {
    brand: 'Lexus',
    model: 'RX',
    year: 2021,
    color: 'Black',
    price: 50000,
    amount: 2,
    isSportCar: false,
    type: 'SUV',
  },
  {
    brand: 'Land Rover',
    model: 'Range Rover Evoque',
    year: 2022,
    color: 'Gray',
    price: 60000,
    amount: 0,
    isSportCar: false,
    type: 'SUV',
  },
];

// 1. Знайти авто заданого кольору
// 2. Знайти усі спорткари
// 3. Знайти авто 2022 року
// 4. Знайти авто певної марки
// 5. Знайти авто дорожче заданої ціни
// 6. Знайти авто заданого типу
// 7. Знайти авто з кількістю більше ніж задане значення
// 8. Знайти авто, випущені після 2018 року
// 9. Знайти авто, випущені до 2015 року
// 10. Знайти авто, ціна яких в межах від 20000 до 40000
// 11. Знайти всі авто, які не є спортивними
// 12. Знайти всі авто чорного кольору
// 13. Знайти всі автомобілі марки 'BMW'
// 14. Знайти всі авто типу 'SUV'
// 15. Знайти всі авто, що мають ціну менше ніж 30000
// 16. Знайти всі авто, що мають ціну більше ніж 50000
// 17. Знайти всі авто, випущені після 2021 року
// 18. Знайти всі авто марки 'Audi'
// 19. Знайти всі авто, що мають кількість більше 2
// 20. Знайти всі авто червоного кольору
// 21. Знайти всі авто, які є седанами
// 22. Знайти всі авто марки 'Mercedes'
// 23. Знайти всі авто, які не є седанами
// 24. Знайти всі авто, випущені в 2020 році
// 25. Знайти всі авто марки 'Tesla'
// 26. Знайти всі авто, що мають кількість менше 5
// 27. Знайти всі авто, що мають ціну більше ніж 25000
// 28. Знайти всі авто марки 'Lexus'
// 29. Знайти всі авто, випущені до 2017 року
// 30. Знайти всі авто білого кольору

// ---

// 1. Знайти авто заданого кольору
// 1. Знайти усі спорткари
// 1. Порахувати кількість авто заданого року
// 1. Знайти всі машини з ціною вище вказаної.
// 1. Порахувати кількість машин вказаного року.
// 1. Відсортувати машини за роком випуску (від найстарішого до найновішого).
// 1. Знайти найдорожчу машину.
// 1. Знайти всі машини заданої марки (наприклад, Toyota).
// 1. Порахувати загальну кількість машин.
// 1. Відсортувати машини за ціною (від найдешевшої до найдорожчої).
// 1. Знайти всі машини певного типу (наприклад, SUV).
// 1. Знайти всі машини певного кольору та року випуску.
// 1. Порахувати середню ціну всіх машин.
// 1. Знайти всі машини, у яких кількість на складі більша за 0.
// 1. Знайти всі машини з ціною менше 30000 та роком випуску після 2020 року.
// 1. Порахувати сумарну кількість всіх машин заданої марки.
// 1. Відсортувати машини за кількістю на складі (від найбільшої до найменшої).
// 1. Знайти всі машини, які не є спортивними та доступні для продажу.
// 1. Порахувати загальну вартість всіх машин складі.
// 1. Знайти всі машини певного типу та кольору.
// 1. Відсортувати машини за брендом та моделлю в алфавітному порядку.
// 1. Перевірити, чи є хоч одна машина певного кольору.
// 1. Перевірити, чи є хоч одна машина певного року.
// 1. Перевірити, чи є всі авто є спроткарами.
// 1. Перевірити, чи є всі новіші за вказаний рік.
// 1. Створити новий масив, що містить лише назви моделей усіх машин.
// 1. Створити масив, що містить розмітку кожної машини.
// 1. Знайти індекс першої машини з роком випуску 2022 року.
// 1. Сортувати за ціною

// ---

// 1. Знайти всі машини з ціною вище 50000 і відсортувати їх за роком випуску від
//    нових до старих.
// 1. Створити новий масив, що містить лише моделі доступних для продажу машин.
// 1. Знайти першу машину, яка не є спортивною та має кількість на на складі більше
//    0, потім повернути її колір.
// 1. Порахувати загальну вартість всіх машин з кількістю на складі більше 2 і
//    ціною менше 40 000.
// 1. Знайти всі машини певного типу (наприклад, SUV), відсортувати їх за роком
//    випуску від старих до нових і повернути масив тільки зі своїми моделями.
// 1. Знайти всі спортивні машини з ціною вище 60000, відсортувати їх за спаданням
//    ціни і повернути масив, що містить лише бренди та моделі цих машин.
// 1. Знайти всі машини заданого кольору (наприклад, "Blue") та року випуску після
//    2020, відсортувати їх за зростанням ціни та повернути масив, що містить лише
//    моделі цих машин та ціну.
// 1. Повернути масив, що містить лише кольори доступних для прродажу машин, та
//    зробити щоб колір не повторювався дівчі.
// 1. Знайти індекс першої машини з ціною менше 20000 та повернути масив, що
//    містить тільки бренди та моделі машин після знайденої.
// 1. Знайти всі машини з ціною між 40000 та 60000, відсортувати їх за роком
//    випуску від нових до старих і повернути масив, що містить тільки моделі цих
//    машин.
// 1. Перевірити, чи є хоч одна машина з кількістю на складі більше 5 і ціною вище
//    70 000.
// 1. Знайти всі машини, у яких кількість на складі більша за 0, відсортувати їх по
//    спаданню кількості та повернути масив, що містить тільки бренди та моделі цих
//    машин.

//?===================================================================
//?===================================================================
//?===================================================================

// # USERS

const users = [
  {
    firstName: 'Alice',
    lastName: 'Johnson',
    age: 28,
    email: 'alice@gmail.com',
    isActive: true,
    gender: 'Female',
  },
  {
    firstName: 'Bob',
    lastName: 'Smith',
    age: 42,
    email: 'bob@example.com',
    isActive: false,
    gender: 'Male',
  },
  {
    firstName: 'Eva',
    lastName: 'Williams',
    age: 35,
    email: 'eva@example.com',
    isActive: true,
    gender: 'Female',
  },
  {
    firstName: 'David',
    lastName: 'Brown',
    age: 22,
    email: 'david@gmail.com',
    isActive: true,
    gender: 'Male',
  },
  {
    firstName: 'Sophia',
    lastName: 'Davis',
    age: 29,
    email: 'sophia@gmail.com',
    isActive: false,
    gender: 'Female',
  },
  {
    firstName: 'Michael',
    lastName: 'Miller',
    age: 50,
    email: 'michael@example.com',
    isActive: true,
    gender: 'Male',
  },
  {
    firstName: 'Olivia',
    lastName: 'Wilson',
    age: 19,
    email: 'olivia@gmail.com',
    isActive: true,
    gender: 'Female',
  },
  {
    firstName: 'Daniel',
    lastName: 'Thompson',
    age: 31,
    email: 'daniel@example.com',
    isActive: false,
    gender: 'Male',
  },
  {
    firstName: 'Ava',
    lastName: 'Harris',
    age: 27,
    email: 'ava@gmail.com',
    isActive: true,
    gender: 'Female',
  },
  {
    firstName: 'James',
    lastName: 'Jackson',
    age: 38,
    email: 'james@example.com',
    isActive: true,
    gender: 'Male',
  },
  {
    firstName: 'Emma',
    lastName: 'Taylor',
    age: 23,
    email: 'emma@example.com',
    isActive: false,
    gender: 'Female',
  },
  {
    firstName: 'William',
    lastName: 'Anderson',
    age: 45,
    email: 'william@gmail.com',
    isActive: true,
    gender: 'Male',
  },
  {
    firstName: 'Mia',
    lastName: 'Martin',
    age: 29,
    email: 'mia@poshta.com',
    isActive: true,
    gender: 'Female',
  },
  {
    firstName: 'Joseph',
    lastName: 'Clark',
    age: 33,
    email: 'joseph@poshta.com',
    isActive: false,
    gender: 'Male',
  },
  {
    firstName: 'Charlotte',
    lastName: 'Rodriguez',
    age: 26,
    email: 'charlotte@poshta.com',
    isActive: true,
    gender: 'Female',
  },
  {
    firstName: 'John',
    lastName: 'Lopez',
    age: 31,
    email: 'john@example.com',
    isActive: true,
    gender: 'Male',
  },
  {
    firstName: 'Amelia',
    lastName: 'Lee',
    age: 20,
    email: 'amelia@example.com',
    isActive: false,
    gender: 'Female',
  },
  {
    firstName: 'Benjamin',
    lastName: 'Gonzalez',
    age: 40,
    email: 'benjamin@example.com',
    isActive: true,
    gender: 'Male',
  },
  {
    firstName: 'Chloe',
    lastName: 'Hernandez',
    age: 24,
    email: 'chloe@example.com',
    isActive: true,
    gender: 'Female',
  },
  {
    firstName: 'Daniel',
    lastName: 'Young',
    age: 37,
    email: 'daniel@example.com',
    isActive: false,
    gender: 'Male',
  },
  {
    firstName: 'Olivia',
    lastName: 'Miller',
    age: 38,
    email: 'olivia@example.com',
    isActive: false,
    gender: 'Female',
  },
  {
    firstName: 'James',
    lastName: 'Jones',
    age: 29,
    email: 'james@poshta.com',
    isActive: true,
    gender: 'Male',
  },
  {
    firstName: 'Sophia',
    lastName: 'Davis',
    age: 31,
    email: 'sophia@example.com',
    isActive: true,
    gender: 'Female',
  },
  {
    firstName: 'William',
    lastName: 'Wilson',
    age: 52,
    email: 'william@poshta.com',
    isActive: false,
    gender: 'Male',
  },
  {
    firstName: 'Ava',
    lastName: 'Taylor',
    age: 19,
    email: 'ava@example.com',
    isActive: true,
    gender: 'Female',
  },
  {
    firstName: 'Michael',
    lastName: 'Clark',
    age: 40,
    email: 'michael@example.com',
    isActive: true,
    gender: 'Male',
  },
  {
    firstName: 'Emma',
    lastName: 'Lee',
    age: 27,
    email: 'emma@poshta.com',
    isActive: false,
    gender: 'Female',
  },
  {
    firstName: 'Daniel',
    lastName: 'Martinez',
    age: 35,
    email: 'daniel@example.com',
    isActive: true,
    gender: 'Male',
  },
  {
    firstName: 'Isabella',
    lastName: 'Hernandez',
    age: 42,
    email: 'isabella@poshta.com',
    isActive: false,
    gender: 'Female',
  },
  {
    firstName: 'Liam',
    lastName: 'Garcia',
    age: 26,
    email: 'liam@example.com',
    isActive: true,
    gender: 'Male',
  },
  {
    firstName: 'Mia',
    lastName: 'Rodriguez',
    age: 30,
    email: 'mia@poshta.com',
    isActive: true,
    gender: 'Female',
  },
  {
    firstName: 'Noah',
    lastName: 'Lopez',
    age: 24,
    email: 'noah@example.com',
    isActive: false,
    gender: 'Male',
  },
  {
    firstName: 'Charlotte',
    lastName: 'Perez',
    age: 29,
    email: 'charlotte@example.com',
    isActive: true,
    gender: 'Female',
  },
  {
    firstName: 'Ethan',
    lastName: 'Turner',
    age: 37,
    email: 'ethan@example.com',
    isActive: true,
    gender: 'Male',
  },
  {
    firstName: 'Amelia',
    lastName: 'White',
    age: 23,
    email: 'amelia@poshta.com',
    isActive: true,
    gender: 'Female',
  },
  {
    firstName: 'Alexander',
    lastName: 'Jackson',
    age: 41,
    email: 'alexander@example.com',
    isActive: false,
    gender: 'Male',
  },
  {
    firstName: 'Sofia',
    lastName: 'Brown',
    age: 33,
    email: 'sofia@example.com',
    isActive: true,
    gender: 'Female',
  },
];

const users2 = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough',
      zipcode: '92998-3874',
      geo: {
        lat: '-37.3159',
        lng: '81.1496',
      },
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
      name: 'Romaguera-Crona',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets',
    },
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
    address: {
      street: 'Victor Plains',
      suite: 'Suite 879',
      city: 'Wisokyburgh',
      zipcode: '90566-7771',
      geo: {
        lat: '-43.9509',
        lng: '-34.4618',
      },
    },
    phone: '010-692-6593 x09125',
    website: 'anastasia.net',
    company: {
      name: 'Deckow-Crist',
      catchPhrase: 'Proactive didactic contingency',
      bs: 'synergize scalable supply-chains',
    },
  },
  {
    id: 3,
    name: 'Clementine Bauch',
    username: 'Samantha',
    email: 'Nathan@yesenia.net',
    address: {
      street: 'Douglas Extension',
      suite: 'Suite 847',
      city: 'McKenziehaven',
      zipcode: '59590-4157',
      geo: {
        lat: '-68.6102',
        lng: '-47.0653',
      },
    },
    phone: '1-463-123-4447',
    website: 'ramiro.info',
    company: {
      name: 'Romaguera-Jacobson',
      catchPhrase: 'Face to face bifurcated interface',
      bs: 'e-enable strategic applications',
    },
  },
  {
    id: 4,
    name: 'Patricia Lebsack',
    username: 'Karianne',
    email: 'Julianne.OConner@kory.org',
    address: {
      street: 'Hoeger Mall',
      suite: 'Apt. 692',
      city: 'South Elvis',
      zipcode: '53919-4257',
      geo: {
        lat: '29.4572',
        lng: '-164.2990',
      },
    },
    phone: '493-170-9623 x156',
    website: 'kale.biz',
    company: {
      name: 'Robel-Corkery',
      catchPhrase: 'Multi-tiered zero tolerance productivity',
      bs: 'transition cutting-edge web services',
    },
  },
  {
    id: 5,
    name: 'Chelsey Dietrich',
    username: 'Kamren',
    email: 'Lucio_Hettinger@annie.ca',
    address: {
      street: 'Skiles Walks',
      suite: 'Suite 351',
      city: 'Roscoeview',
      zipcode: '33263',
      geo: {
        lat: '-31.8129',
        lng: '62.5342',
      },
    },
    phone: '(254)954-1289',
    website: 'demarco.info',
    company: {
      name: 'Keebler LLC',
      catchPhrase: 'User-centric fault-tolerant solution',
      bs: 'revolutionize end-to-end systems',
    },
  },
  {
    id: 6,
    name: 'Mrs. Dennis Schulist',
    username: 'Leopoldo_Corkery',
    email: 'Karley_Dach@jasper.info',
    address: {
      street: 'Norberto Crossing',
      suite: 'Apt. 950',
      city: 'South Christy',
      zipcode: '23505-1337',
      geo: {
        lat: '-71.4197',
        lng: '71.7478',
      },
    },
    phone: '1-477-935-8478 x6430',
    website: 'ola.org',
    company: {
      name: 'Considine-Lockman',
      catchPhrase: 'Synchronised bottom-line interface',
      bs: 'e-enable innovative applications',
    },
  },
  {
    id: 7,
    name: 'Kurtis Weissnat',
    username: 'Elwyn.Skiles',
    email: 'Telly.Hoeger@billy.biz',
    address: {
      street: 'Rex Trail',
      suite: 'Suite 280',
      city: 'Howemouth',
      zipcode: '58804-1099',
      geo: {
        lat: '24.8918',
        lng: '21.8984',
      },
    },
    phone: '210.067.6132',
    website: 'elvis.io',
    company: {
      name: 'Johns Group',
      catchPhrase: 'Configurable multimedia task-force',
      bs: 'generate enterprise e-tailers',
    },
  },
  {
    id: 8,
    name: 'Nicholas Runolfsdottir V',
    username: 'Maxime_Nienow',
    email: 'Sherwood@rosamond.me',
    address: {
      street: 'Ellsworth Summit',
      suite: 'Suite 729',
      city: 'Aliyaview',
      zipcode: '45169',
      geo: {
        lat: '-14.3990',
        lng: '-120.7677',
      },
    },
    phone: '586.493.6943 x140',
    website: 'jacynthe.com',
    company: {
      name: 'Abernathy Group',
      catchPhrase: 'Implemented secondary concept',
      bs: 'e-enable extensible e-tailers',
    },
  },
  {
    id: 9,
    name: 'Glenna Reichert',
    username: 'Delphine',
    email: 'Chaim_McDermott@dana.io',
    address: {
      street: 'Dayna Park',
      suite: 'Suite 449',
      city: 'Bartholomebury',
      zipcode: '76495-3109',
      geo: {
        lat: '24.6463',
        lng: '-168.8889',
      },
    },
    phone: '(775)976-6794 x41206',
    website: 'conrad.com',
    company: {
      name: 'Yost and Sons',
      catchPhrase: 'Switchable contextually-based project',
      bs: 'aggregate real-time technologies',
    },
  },
  {
    id: 10,
    name: 'Clementina DuBuque',
    username: 'Moriah.Stanton',
    email: 'Rey.Padberg@karina.biz',
    address: {
      street: 'Kattie Turnpike',
      suite: 'Suite 198',
      city: 'Lebsackbury',
      zipcode: '31428-2261',
      geo: {
        lat: '-38.2386',
        lng: '57.2232',
      },
    },
    phone: '024-648-3804',
    website: 'ambrose.net',
    company: {
      name: 'Hoeger LLC',
      catchPhrase: 'Centralized empowering task-force',
      bs: 'target end-to-end models',
    },
  },
];

// 1. Знайти користувачів віком від 25 до 40 років.
// 1. Знайти всіх користувачів із активним статусом.
// 1. Порахувати кількість користувачів молодше 30 років.
// 1. Відсортувати користувачів віком від старшого до молодшого.
// 1. Знайти користувачів з електронною поштою на домені gmail.com.
// 1. Знайти всіх жінок серед користувачів.
// 1. Порахувати кількість неактивних користувачів.
// 1. Відсортувати користувачів на прізвище в алфавітному порядку.
// 1. Знайти користувача з найбільшим віком.
// 1. Перевірити, чи є хоча б один користувач із прізвищем "Johnson".
// 1. Створити новий масив, який містить лише імена користувачів.
// 1. Створити масив з інформацією про користувачів у форматі JSON.
// 1. Знайти індекс першого користувача під назвою "Jane".
// 1. Знайти всіх користувачів чоловічої статі віком від 30 до 50 років.
// 1. Порахувати загальну кількість користувачів.
// 1. Знайти всіх користувачів з активним статусом та віком старше 25 років.
// 1. Знайти користувачів із прізвищем, що починається на букву "S".
// 1. Відсортувати користувачів за віком (від молодшого до старшого).
// 1. Знайти всіх користувачів електронної пошти на домені yahoo.com.
// 1. Знайти користувача з найменшим віком.
// 1. Перевірити, чи є хоча б один користувач з ім'ям John.
// 1. Створити новий масив, що містить лише прізвища користувачів.
// 1. Створити масив з інформацією про користувачів як рядкових описів.
// 1. Знайти індекс користувача з активним статусом і віком більшим або рівним 40
//    років.
