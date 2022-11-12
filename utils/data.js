const usernames = [
    "Topslugger",
    "Thrillseeker",
    "Muscleman",
    "Ruggedman",
    "LoneWolf",
    "Mindbender",
    "Powerpixel",
    "Mysticlover",
    "Outlawking",
    "Princecharming",
    "Daredevil",
    "Dragonlord",
    "CutiePatootie",
    "Dollface",
    "SugarLips",
    "SugarAndSpice",
    "SweetiePie",
    "CupcakeCutie",
    "GirlNextDoor",
    "BubblyBlonde",
  ];

const thoughts = [
    "You can regret a lot of things but you'll never regret being kind.",
    "Do whatever makes you happiest.",
    "Having the dream is easy, making it come true is hard.",
    "If I were rich, I'd pull a Netflix and spend $100 million on my Friends.",
    "Look for the magic in every moment.",
    "Stress less and enjoy the best.",
    "Whatever is good for your soul, do that",
    "But first, let me take a selfie.",
    "It wasn't always easy but it's worth it.",
    "Sometimes relationships end so love stories can begin.",
    "I would never let my best friend do anything stupid…alone.",
    "Yes or No?",
    "Miss me?",
    "Don't trust everything you see, even salt can look like sugar.",
    "Life's a beach."
];

const possibleReactions = [
    "Like",
    "Love",
    "Care",
    "Haha",
    "Wow",
    "Sad",
    "Angry",
    "Comment",
    "Share",
    "Report",
    "Save",
];

const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const getRandomUsernames = () =>
`${getRandomArrItem(usernames)}`

const getRandomThoughts = (int) => {
    const results = [];
    for (let i = 0; i < int; i++) {
        results.push({
            thoughtText: getRandomArrItem(thoughts),
            username: getRandomUsernames(),
            reactions: [...getThoughtReactions(3)],
        });
    }
    return results;
};

const getThoughtReactions = (int) => {
    if (int === 1) {
        return getRandomArrItem(possibleReactions);
      }
    const results = [];
    for (let i = 0; i < int; i++) {
        results.push({
            reactionBody: getRandomArrItem(possibleReactions),
            username: getRandomUsernames(),
        })
    }
    return results;
}

module.exports = { getRandomUsernames, getRandomThoughts, getThoughtReactions};