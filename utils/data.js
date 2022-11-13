const usernames = [
    "Topslugger",
    "Thrillseeker",
    "Muscleman",
    "Ruggedman",
    "LoneWolf",
  ];

  const emails = [
    "Topslugger@gmail.com",
    "Thrillseeker@123.com",
    "Muscleman@bbc.com",
    "Ruggedman@111.com",
    "LoneWolf@yyy.com",
  ]

const thoughtsText = [
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

const getUsers = () => {
    const users=[];
    for (let i = 0; i < usernames.length; i++) {
    const name = usernames[i];
    const email = emails[i];
    const user = {username: name, email: email};
    users.push(user);
}
return users;
}

const getThoughts = () =>{
    const thoughts =[];

    for (let i=0; i < usernames.length; i++) {
    const username = usernames[i];
    let thought1 = thoughtsText[i];
    let thought2 = thoughtsText[i + 1];
    let thought3 = thoughtsText[i + 2];

        thoughts.push({thoughtText: thought1, username: username})
        thoughts.push({thoughtText: thought2, username: username})
        thoughts.push({thoughtText: thought3, username: username})
    
    }
    return thoughts;
}

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

module.exports = { getUsers, getRandomThoughts, getThoughtReactions};