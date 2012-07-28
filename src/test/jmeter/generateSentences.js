function qrand(n) {

    RandSeed = (RandMultiplier * RandSeed + RandIncrement) % 0x7fffffff;
    return (RandSeed >> 16) % n;
}

function qinit() {

    RandMultiplier = 0x015a4e35;
    RandIncrement = 1;
    // Initialize using the computer's date and time...
    var now = new Date();
    RandSeed = now.getTime() % 0xffffffff;
    FirstSentence = 1;
    FirstAmerica = 1;
}

function GenRandomSentenceTemplate() {

    // code key:
    // 0 = lone noun
    // 1 = noun phrase
    // 2 = transitive verb phrase (present tense, singular, third person)
    // 3 = conjunction
    // 4 = intransitive verb phrase
    // 5 = transitive verb phrase (infinitive, singular)
    // 6 = adjective
    // 7 = adverb
    var w = "";
    var n = 17;
    var r = qrand(n + 5);
    if (r > n){ w = "1 2 1."; }
    else if (r == 1){ w = "1 2 1, 3 1 2 1."; }
    else if (r == 2){ w = "When 1 4, 1 4."; }
    else if (r == 3){ w = "If 1 2 1, then 1 4."; }
    else if (r == 4){ w = "Sometimes 1 4, but 1 always 2 1!"; }
    else if (r == 5){ w = "Most people believe that 1 2 1, but they need to remember how 7 1 4."; }
    else if (r == 6) {

        if (FirstAmerica) {

            FirstAmerica = 0;
            w = "1, 1, and 1 are what made America great!";
        } else {

            w = "1 2 1.";
        }

    }

    else if (r == 7){ w = "1 4, 3 1 2 1."; }
    else if (r == 8){ w = "Now and then, 1 2 1."; }
    else if (r == 9){ w = "1 4, and 1 4; however, 1 2 1."; }
    else if (r == 10) {

        if (FirstSentence) {

            w = "1 2 1.";
        } else {

            w = "Indeed, 1 2 1.";
        }

    }

    else if (r == 11) {

        if (FirstSentence) {

            w = "1 2 1.";
        } else {

            w = "Furthermore, 1 4, and 1 2 1.";
        }

    }

    else if (r == 12) {

        if (FirstSentence) {

            w = "1 2 1.";
        } else {

            w = "For example, 1 indicates that 1 2 1.";
        }

    }

    else if (r == 13){ w = "When you see 1, it means that 1 4."; }
    else if (r == 14){ w = "Any 0 can 5 1, but it takes a real 0 to 5 1."; }
    else if (r == 15){ w = "1 is 6."; }
    else if (r == 16){ w = "When 1 is 6, 1 2 1."; }
    FirstSentence = 0;
    return w;
}

function GenNoun() {

    var n = 125;
    var r = qrand(n);
    var w = "";
    if (r === 0){ w = "cocker spaniel"; }
    else if (r == 1){ w = "roller coaster"; }
    else if (r == 2){ w = "abstraction"; }
    else if (r == 3){ w = "pine cone"; }
    else if (r == 4){ w = "microscope"; }
    else if (r == 5){ w = "bottle of beer"; }
    else if (r == 6){ w = "bowling ball"; }
    else if (r == 7){ w = "grain of sand"; }
    else if (r == 8){ w = "wheelbarrow"; }
    else if (r == 9){ w = "pork chop"; }
    else if (r == 10){ w = "bullfrog"; }
    else if (r == 11){ w = "squid"; }
    else if (r == 12){ w = "tripod"; }
    else if (r == 13){ w = "girl scout"; }
    else if (r == 14){ w = "light bulb"; }
    else if (r == 15){ w = "hole puncher"; }
    else if (r == 16){ w = "carpet tack"; }
    else if (r == 17){ w = "submarine"; }
    else if (r == 18){ w = "diskette"; }
    else if (r == 19){ w = "tape recorder"; }
    else if (r == 20){ w = "anomaly"; }
    else if (r == 21){ w = "insurance agent"; }
    else if (r == 22){ w = "mortician"; }
    else if (r == 23){ w = "fire hydrant"; }
    else if (r == 24){ w = "photon"; }
    else if (r == 25){ w = "line dancer"; }
    else if (r == 26){ w = "paper napkin"; }
    else if (r == 27){ w = "stovepipe"; }
    else if (r == 28){ w = "graduated cylinder"; }
    else if (r == 29){ w = "hydrogen atom"; }
    else if (r == 30){ w = "garbage can"; }
    else if (r == 31){ w = "reactor"; }
    else if (r == 32){ w = "power drill"; }
    else if (r == 33){ w = "scooby snack"; }
    else if (r == 34){ w = "freight train"; }
    else if (r == 35){ w = "ocean"; }
    else if (r == 36){ w = "bartender"; }
    else if (r == 37){ w = "senator"; }
    else if (r == 38){ w = "mating ritual"; }
    else if (r == 39){ w = "briar patch"; }
    else if (r == 40){ w = "jersey cow"; }
    else if (r == 41){ w = "chain saw"; }
    else if (r == 42){ w = "prime minister"; }
    else if (r == 43){ w = "cargo bay"; }
    else if (r == 44){ w = "buzzard"; }
    else if (r == 45){ w = "polar bear"; }
    else if (r == 46){ w = "tomato"; }
    else if (r == 47){ w = "razor blade"; }
    else if (r == 48){ w = "ball bearing"; }
    else if (r == 49){ w = "fighter pilot"; }
    else if (r == 50){ w = "support group"; }
    else if (r == 51){ w = "fundraiser"; }
    else if (r == 52){ w = "cowboy"; }
    else if (r == 53){ w = "football team"; }
    else if (r == 54){ w = "cab driver"; }
    else if (r == 55){ w = "nation"; }
    else if (r == 56){ w = "ski lodge"; }
    else if (r == 57){ w = "mastadon"; }
    else if (r == 58){ w = "recliner"; }
    else if (r == 59){ w = "minivan"; }
    else if (r == 60){ w = "deficit"; }
    else if (r == 61){ w = "food stamp"; }
    else if (r == 62){ w = "wedding dress"; }
    else if (r == 63){ w = "fairy"; }
    else if (r == 64){ w = "globule"; }
    else if (r == 65){ w = "movie theater"; }
    else if (r == 66){ w = "tornado"; }
    else if (r == 67){ w = "rattlesnake"; }
    else if (r == 68){ w = "CEO"; }
    else if (r == 69){ w = "corporation"; }
    else if (r == 70){ w = "plaintiff"; }
    else if (r == 71){ w = "class action suit"; }
    else if (r == 72){ w = "judge"; }
    else if (r == 73){ w = "defendant"; }
    else if (r == 74){ w = "dust bunny"; }
    else if (r == 75){ w = "vacuum cleaner"; }
    else if (r == 76){ w = "lover"; }
    else if (r == 77){ w = "sandwich"; }
    else if (r == 78){ w = "hockey player"; }
    else if (r == 79){ w = "avocado pit"; }
    else if (r == 80){ w = "fruit cake"; }
    else if (r == 81){ w = "turkey"; }
    else if (r == 82){ w = "sheriff"; }
    else if (r == 83){ w = "apartment building"; }
    else if (r == 84){ w = "industrial complex"; }
    else if (r == 85){ w = "inferiority complex"; }
    else if (r == 86){ w = "salad dressing"; }
    else if (r == 87){ w = "short order cook"; }
    else if (r == 88){ w = "pig pen"; }
    else if (r == 89){ w = "grand piano"; }
    else if (r == 90){ w = "tuba player"; }
    else if (r == 91){ w = "traffic light"; }
    else if (r == 92){ w = "turn signal"; }
    else if (r == 93){ w = "paycheck"; }
    else if (r == 94){ w = "blood clot"; }
    else if (r == 95){ w = "earring"; }
    else if (r == 96){ w = "blithe spirit"; }
    else if (r == 97){ w = "customer"; }
    else if (r == 98){ w = "warranty"; }
    else if (r == 99){ w = "grizzly bear"; }
    else if (r == 100){ w = "cyprus mulch"; }
    else if (r == 101){ w = "pit viper"; }
    else if (r == 102){ w = "crank case"; }
    else if (r == 103){ w = "oil filter"; }
    else if (r == 104){ w = "steam engine"; }
    else if (r == 105){ w = "chestnut"; }
    else if (r == 106){ w = "chess board"; }
    else if (r == 107){ w = "pickup truck"; }
    else if (r == 108){ w = "cheese wheel"; }
    else if (r == 109){ w = "eggplant"; }
    else if (r == 110){ w = "umbrella"; }
    else if (r == 111){ w = "skyscraper"; }
    else if (r == 112){ w = "dolphin"; }
    else if (r == 113){ w = "asteroid"; }
    else if (r == 114){ w = "parking lot"; }
    else if (r == 115){ w = "demon"; }
    else if (r == 116){ w = "tabloid"; }
    else if (r == 117){ w = "particle accelerator"; }
    else if (r == 118){ w = "cloud formation"; }
    else if (r == 119){ w = "cashier"; }
    else if (r == 120){ w = "burglar"; }
    else if (r == 121){ w = "spider"; }
    else if (r == 122){ w = "cough syrup"; }
    else if (r == 123){ w = "satellite"; }
    else if (r == 124){ w = "scythe"; }
    return w;
}

function GenPreposition() {

    var n = 14;
    var r = qrand(n);
    var w = "";
    if (r === 0){ w = "of"; }
    else if (r == 1){ w = "from"; }
    else if (r == 2){ w = "near"; }
    else if (r == 3){ w = "about"; }
    else if (r == 4){ w = "around"; }
    else if (r == 5){ w = "for"; }
    else if (r == 6){ w = "toward"; }
    else if (r == 7){ w = "over"; }
    else if (r == 8){ w = "behind"; }
    else if (r == 9){ w = "beyond"; }
    else if (r == 10){ w = "related to"; }
    else if (r == 11){ w = "defined by"; }
    else if (r == 12){ w = "inside"; }
    else if (r == 13){ w = "living with"; }
    return w;
}

function GenNounPhrase(depth) {

    var phraseKind = qrand(3);
    var s = "";
    if (phraseKind === 0 || depth > 0) {

        s = GenNoun();
    } else if (phraseKind == 1) {

        s = GenAdjective() + " " + GenNoun();
    } else if (phraseKind == 2) {

        s = GenNoun() + " " + GenPreposition() + " " + GenNounPhrase(depth + 1);
    }

    var r = qrand(100);
    if (r < 30) {

        s = "the " + s;
    } else if (r < 35) {

        s = "another " + s;
    } else if (r < 40) {

        s = "some " + s;
    } else {

        var c = s.substring(0, 1).toLowerCase();
        if ((s.substring(0, 8) != "Eurasian") &&
        (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u')) {

            s = "an " + s;
        } else {

            s = "a " + s;
        }

    }

    return s;
}

function GenAdverb() {

    var n = 28;
    var r = qrand(n);
    var s = "";
    if (r === 0){ s = "knowingly"; }
    else if (r == 1){ s = "slyly"; }
    else if (r == 2){ s = "greedily"; }
    else if (r == 3){ s = "hesitantly"; }
    else if (r == 4){ s = "secretly"; }
    else if (r == 5){ s = "carelessly"; }
    else if (r == 6){ s = "thoroughly"; }
    else if (r == 7){ s = "barely"; }
    else if (r == 8){ s = "ridiculously"; }
    else if (r == 9){ s = "non-chalantly"; }
    else if (r == 10){ s = "hardly"; }
    else if (r == 11){ s = "eagerly"; }
    else if (r == 12){ s = "feverishly"; }
    else if (r == 13){ s = "lazily"; }
    else if (r == 14){ s = "inexorably"; }
    else if (r == 15){ s = "accurately"; }
    else if (r == 16){ s = "accidentally"; }
    else if (r == 17){ s = "completely"; }
    else if (r == 18){ s = "usually"; }
    else if (r == 19){ s = "single-handledly"; }
    else if (r == 20){ s = "underhandedly"; }
    else if (r == 21){ s = "almost"; }
    else if (r == 22){ s = "wisely"; }
    else if (r == 23){ s = "ostensibly"; }
    else if (r == 24){ s = "somewhat"; }
    else if (r == 25){ s = "overwhelmingly"; }
    else if (r == 26){ s = "seldom"; }
    else if (r == 27){ s = "often"; }
    return s;
}

function GenAdjective() {

    var n = 105;
    var r = qrand(n);
    var w = "";
    if (r === 0){ w = "slow"; }
    else if (r == 1){ w = "surly"; }
    else if (r == 2){ w = "gentle"; }
    else if (r == 3){ w = "optimal"; }
    else if (r == 4){ w = "treacherous"; }
    else if (r == 5){ w = "loyal"; }
    else if (r == 6){ w = "smelly"; }
    else if (r == 7){ w = "ravishing"; }
    else if (r == 8){ w = "annoying"; }
    else if (r == 9){ w = "burly"; }
    else if (r == 10){ w = "raspy"; }
    else if (r == 11){ w = "moldy"; }
    else if (r == 12){ w = "blotched"; }
    else if (r == 13){ w = "federal"; }
    else if (r == 14){ w = "phony"; }
    else if (r == 15){ w = "magnificent"; }
    else if (r == 16){ w = "alleged"; }
    else if (r == 17){ w = "crispy"; }
    else if (r == 18){ w = "gratifying"; }
    else if (r == 19){ w = "elusive"; }
    else if (r == 20){ w = "revered"; }
    else if (r == 21){ w = "spartan"; }
    else if (r == 22){ w = "righteous"; }
    else if (r == 23){ w = "mysterious"; }
    else if (r == 24){ w = "worldly"; }
    else if (r == 25){ w = "cosmopolitan"; }
    else if (r == 26){ w = "college-educated"; }
    else if (r == 27){ w = "bohemian"; }
    else if (r == 28){ w = "statesmanlike"; }
    else if (r == 29){ w = "stoic"; }
    else if (r == 30){ w = "hypnotic"; }
    else if (r == 31){ w = "dirt-encrusted"; }
    else if (r == 32){ w = "purple"; }
    else if (r == 33){ w = "infected"; }
    else if (r == 34){ w = "shabby"; }
    else if (r == 35){ w = "tattered"; }
    else if (r == 36){ w = "South American"; }
    else if (r == 37){ w = "Alaskan"; }
    else if (r == 38){ w = "overripe"; }
    else if (r == 39){ w = "self-loathing"; }
    else if (r == 40){ w = "frustrating"; }
    else if (r == 41){ w = "rude"; }
    else if (r == 42){ w = "pompous"; }
    else if (r == 43){ w = "impromptu"; }
    else if (r == 44){ w = "makeshift"; }
    else if (r == 45){ w = "so-called"; }
    else if (r == 46){ w = "proverbial"; }
    else if (r == 47){ w = "molten"; }
    else if (r == 48){ w = "wrinkled"; }
    else if (r == 49){ w = "psychotic"; }
    else if (r == 50){ w = "foreign"; }
    else if (r == 51){ w = "familiar"; }
    else if (r == 52){ w = "pathetic"; }
    else if (r == 53){ w = "precise"; }
    else if (r == 54){ w = "moronic"; }
    else if (r == 55){ w = "polka-dotted"; }
    else if (r == 56){ w = "varigated"; }
    else if (r == 57){ w = "mean-spirited"; }
    else if (r == 58){ w = "false"; }
    else if (r == 59){ w = "linguistic"; }
    else if (r == 60){ w = "temporal"; }
    else if (r == 61){ w = "fractured"; }
    else if (r == 62){ w = "dreamlike"; }
    else if (r == 63){ w = "imaginative"; }
    else if (r == 64){ w = "cantankerous"; }
    else if (r == 65){ w = "obsequious"; }
    else if (r == 66){ w = "twisted"; }
    else if (r == 67){ w = "load bearing"; }
    else if (r == 68){ w = "orbiting"; }
    else if (r == 69){ w = "radioactive"; }
    else if (r == 70){ w = "unstable"; }
    else if (r == 71){ w = "outer"; }
    else if (r == 72){ w = "nearest"; }
    else if (r == 73){ w = "most difficult"; }
    else if (r == 74){ w = "Eurasian"; }
    else if (r == 75){ w = "hairy"; }
    else if (r == 76){ w = "flabby"; }
    else if (r == 77){ w = "soggy"; }
    else if (r == 78){ w = "muddy"; }
    else if (r == 79){ w = "salty"; }
    else if (r == 80){ w = "highly paid"; }
    else if (r == 81){ w = "greasy"; }
    else if (r == 82){ w = "fried"; }
    else if (r == 83){ w = "frozen"; }
    else if (r == 84){ w = "boiled"; }
    else if (r == 85){ w = "incinerated"; }
    else if (r == 86){ w = "vaporized"; }
    else if (r == 87){ w = "nuclear"; }
    else if (r == 88){ w = "paternal"; }
    else if (r == 89){ w = "childlike"; }
    else if (r == 90){ w = "feline"; }
    else if (r == 91){ w = "fat"; }
    else if (r == 92){ w = "skinny"; }
    else if (r == 93){ w = "green"; }
    else if (r == 94){ w = "financial"; }
    else if (r == 95){ w = "frightened"; }
    else if (r == 96){ w = "fashionable"; }
    else if (r == 97){ w = "resplendent"; }
    else if (r == 98){ w = "flatulent"; }
    else if (r == 99){ w = "mitochondrial"; }
    else if (r == 100){ w = "overpriced"; }
    else if (r == 101){ w = "snooty"; }
    else if (r == 102){ w = "self-actualized"; }
    else if (r == 103){ w = "miserly"; }
    else if (r == 104){ w = "geosynchronous"; }
    if (qrand(10) > 7) {

        w = GenAdverb() + " " + w;
    }

    return w;
}

// 'tense' is one of the following:
// 0 = infinitive
// 1 = present tense, third person singular

function GenTransitiveVerbPhrase(tense) {

    var n = 56;
    var r = qrand(n);
    var s = "";
    if (r === 0){ s = "eat$"; }
    else if (r == 1){ s = "conquer$"; }
    else if (r == 2){ s = "figure$ out"; }
    else if (r == 3){ s = "know$"; }
    else if (r == 4){ s = "teach*"; }
    else if (r == 5){ s = "require$ assistance from"; }
    else if (r == 6){ s = "pour$ freezing cold water on"; }
    else if (r == 7){ s = "find$ lice on"; }
    else if (r == 8){ s = "seek$"; }
    else if (r == 9){ s = "ignore$"; }
    else if (r == 10){ s = "dance$ with"; }
    else if (r == 11){ s = "recognize$"; }
    else if (r == 12){ s = "compete$ with"; }
    else if (r == 13){ s = "reach* an understanding with"; }
    else if (r == 14){ s = "negotiate$ a prenuptial agreement with"; }
    else if (r == 15){ s = "assimilate$"; }
    else if (r == 16){ s = "bestow$ great honor upon"; }
    else if (r == 17){ s = "derive$ perverse satisfaction from"; }
    else if (r == 18){ s = "steal$ pencils from"; }
    else if (r == 19){ s = "tr& to seduce"; }
    else if (r == 20){ s = "go* deep sea fishing with"; }
    else if (r == 21){ s = "find$ subtle faults with"; }
    else if (r == 22){ s = "laugh$ and drink$ all night with"; }
    else if (r == 23){ s = "befriend$"; }
    else if (r == 24){ s = "make$ a truce with"; }
    else if (r == 25){ s = "give$ secret financial aid to"; }
    else if (r == 26){ s = "brainwash*"; }
    else if (r == 27){ s = "trade$ baseball cards with"; }
    else if (r == 28){ s = "sell$ " + GenNounPhrase(0) + " to"; }
    else if (r == 29){ s = "caricature$"; }
    else if (r == 30){ s = "sanitize$"; }
    else if (r == 31){ s = "satiate$"; }
    else if (r == 32){ s = "organize$"; }
    else if (r == 33){ s = "graduate$ from"; }
    else if (r == 34){ s = "give$ lectures on morality to"; }
    else if (r == 35){ s = "^ a change of heart about"; }
    else if (r == 36){ s = "play$ pinochle with"; }
    else if (r == 37){ s = "give$ a pink slip to"; }
    else if (r == 38){ s = "share$ a shower with"; }
    else if (r == 39){ s = "buy$ an expensive gift for"; }
    else if (r == 40){ s = "cook$ cheese grits for"; }
    else if (r == 41){ s = "take$ a peek at"; }
    else if (r == 42){ s = "pee$ on"; }
    else if (r == 43){ s = "write$ a love letter to"; }
    else if (r == 44){ s = "fall$ in love with"; }
    else if (r == 45){ s = "avoid$ contact with"; }
    else if (r == 46){ s = ") a big fan of"; }
    else if (r == 47){ s = "secretly admire$"; }
    else if (r == 48){ s = "borrow$ money from"; }
    else if (r == 49){ s = "operate$ a small fruit stand with"; }
    else if (r == 50){ s = "throw$ " + GenNounPhrase(0) + " at"; }
    else if (r == 51){ s = "bur&"; }
    else if (r == 52){ s = "can be kind to"; }
    else if (r == 53){ s = "learn$ a hard lesson from"; }
    else if (r == 54){ s = "plan$ an escape from " + GenNounPhrase(0); }
    else if (r == 55){ s = "make$ love to"; }
    vt = "";
    var i;
    for (i = 0; i < s.length; i++) {

        var c = s.substring(i, i + 1);
        var w = c;
        if (c == '$') {

            if (tense === 0){ w = ""; }
            else if (tense == 1){ w = "s"; }
        }

        else if (c == '*') {

            if (tense === 0){ w = ""; }
            else if (tense == 1){ w = "es"; }
        }

        else if (c == ')') {

            if (tense === 0){ w = "be"; }
            else if (tense == 1){ w = "is"; }
        }

        else if (c == '^') {

            if (tense === 0){ w = "have"; }
            else if (tense == 1){ w = "has"; }
        }

        else if (c == '&') {

            if (tense === 0){ w = "y"; }
            else if (tense == 1){ w = "ies"; }
        }

        vt += w;
    }

    if (qrand(10) < 3) {

        vt = GenAdverb() + " " + vt;
    }

    return vt;
}

function GenIntransitiveVerbPhrase() {

    var n = 28;
    var r = qrand(n);
    var s = "";
    if (r === 0){ s = "leaves"; }
    else if (r == 1){ s = "goes to sleep"; }
    else if (r == 2){ s = "takes a coffee break"; }
    else if (r == 3){ s = "hibernates"; }
    else if (r == 4){ s = "reads a magazine"; }
    else if (r == 5){ s = "self-flagellates"; }
    else if (r == 6){ s = "meditates"; }
    else if (r == 7){ s = "starts reminiscing about lost glory"; }
    else if (r == 8){ s = "flies into a rage"; }
    else if (r == 9){ s = "earns frequent flier miles"; }
    else if (r == 10){ s = "sweeps the floor"; }
    else if (r == 11){ s = "feels nagging remorse"; }
    else if (r == 12){ s = "returns home"; }
    else if (r == 13){ s = "rejoices"; }
    else if (r == 14){ s = "prays"; }
    else if (r == 15){ s = "procrastinates"; }
    else if (r == 16){ s = "daydreams"; }
    else if (r == 17){ s = "ceases to exist"; }
    else if (r == 18){ s = "hides"; }
    else if (r == 19){ s = "panics"; }
    else if (r == 20){ s = "beams with joy"; }
    else if (r == 21){ s = "laughs out loud"; }
    else if (r == 22){ s = "gets stinking drunk"; }
    else if (r == 23){ s = "wakes up"; }
    else if (r == 24){ s = "hesitates"; }
    else if (r == 25){ s = "trembles"; }
    else if (r == 26){ s = "ruminates"; }
    else if (r == 27){ s = "dies"; }
    return s;
}

function GenConjunction() {

    var n = 4;
    var r = qrand(n);
    var s = "";
    if (r === 0){ s = "and"; }
    else if (r == 1){ s = "or"; }
    else if (r == 2){ s = "but"; }
    else if (r == 3){ s = "because"; }
    return s;
}

function CapFirst(s) {

    return s.substring(0, 1).toUpperCase() + s.substring(1, s.length);
}

function GenRandomSentence() {

    var stemp = GenRandomSentenceTemplate();
    var i;
    var s = "";
    for (i = 0; i < stemp.length; i++) {

        var c = stemp.substring(i, i + 1);
        var w = "";
        if (c == '0'){ w = GenNoun(); }
        else if (c == '1'){ w = GenNounPhrase(0); }
        else if (c == '2'){ w = GenTransitiveVerbPhrase(1); }
        else if (c == '3'){ w = GenConjunction(); }
        else if (c == '4'){ w = GenIntransitiveVerbPhrase(); }
        else if (c == '5'){ w = GenTransitiveVerbPhrase(0); }
        else if (c == '6'){ w = GenAdjective(); }
        else if (c == '7'){ w = GenAdverb(); }
        else {w = c;}
        s += w;
    }

    return CapFirst(s);
}

qinit();
// document.write ( "RandSeed = ", RandSeed )
var r = qrand(10000);
//document.write ( "<br>r = ", r )
 for (i = 0; i < r; i++) {
	 	var s= GenRandomSentence();
	 	if(s !="")
        document.write(s, "<br/>");
    }
/*
document.write("<h2>Introduction</h2>");
for (i = 0; i < 5; i++) {

    document.write(GenRandomSentence(), " ");
}

for (j = 0; j < 3; j++) {

    document.write("<h2>", CapFirst(GenNounPhrase(0)), "</h2>");
    for (i = 0; i < 5; i++) {

        document.write(GenRandomSentence(), " ");
    }

}

document.write("<h2>Conclusions</h2>");
for (i = 0; i < 5; i++) {

    document.write(GenRandomSentence(), " ");
}
*/