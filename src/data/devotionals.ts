export type DevotionalTheme =
  | "secret-place"
  | "unity"
  | "excellence"
  | "hope";

export interface ScriptureVerse {
  /** Verse number, or a range label like "6–7" when TPT combines verses */
  number: number | string;
  text: string;
}

export interface ScripturePassage {
  reference: string;
  verses: ScriptureVerse[];
}

export interface Devotional {
  slug: string;
  date: string;
  displayDate: string;
  weekLabel: string;
  title: string;
  themeLabel: string;
  meditation: string;
  scriptures: ScripturePassage[];
  consider: string[];
  pullQuote: string;
  reflectionQuestions: string[];
  prayer: string;
  liveIt: string[];
  carryThis: string;
  estimatedMinutes: number;
  theme: DevotionalTheme;
}

/** The Passion Translation® */
export const SCRIPTURE_TRANSLATION = "The Passion Translation";

export const devotionals: Devotional[] = [
  {
    slug: "august-5",
    date: "2026-08-05",
    displayDate: "Wednesday, August 5, 2026",
    weekLabel: "Week 1",
    title: "Fresh Fire Starts in Secret",
    themeLabel: "Personal intimacy with God",
    meditation:
      "Before God changes what comes through us, He often changes what happens within us.",
    scriptures: [
      {
        reference: "Psalm 63:1–8",
        verses: [
          {
            number: 1,
            text: "O God of my life, I’m lovesick for you in this weary wilderness. I thirst with the deepest longings to love you more, with cravings in my heart that can’t be described. Such yearning grips my soul for you, my God!",
          },
          {
            number: 2,
            text: "I’m energized every time I enter your heavenly sanctuary to seek more of your power and drink in more of your glory.",
          },
          {
            number: 3,
            text: "For your tender mercies mean more to me than life itself. How I love and praise you, God!",
          },
          {
            number: 4,
            text: "Daily I will worship you passionately and with all my heart. My arms will wave to you like banners of praise.",
          },
          {
            number: 5,
            text: "I overflow with praise when I come before you, for the anointing of your presence satisfies me like nothing else. You are such a rich banquet of pleasure to my soul.",
          },
          {
            number: "6–7",
            text: "I lie awake each night thinking of you and reflecting on how you help me like a father. I sing through the night under your splendor-shadow, offering up to you my songs of delight and joy!",
          },
          {
            number: 8,
            text: "With passion I pursue and cling to you. Because I feel your grip on my life, I keep my soul close to your heart.",
          },
        ],
      },
      {
        reference: "Matthew 6:5–6",
        verses: [
          {
            number: 5,
            text: "“Whenever you pray, be sincere and not like the pretenders who love the attention they receive while praying before others in the meetings and on street corners. Believe me, they’ve already received their reward.",
          },
          {
            number: 6,
            text: "But whenever you pray, go into your innermost chamber and be alone with Father God, praying to him in secret. And your Father, who sees all you do, will reward you openly.”",
          },
        ],
      },
    ],
    consider: [
      "Have you ever been in a season where God felt out of reach? A season where your prayers felt dry, your worship felt forced, or His presence seemed distant? A lot of people call those wilderness seasons.",
      "If you think about it, a wilderness does not naturally have a secret place. It is exposed, open, and uncomfortable. That is what makes David’s words in Psalm 63 so remarkable.",
      "David wrote this psalm while he was in the wilderness of Judah. He was not writing from the comfort of the palace or from a quiet prayer room. He was running for his life. Yet in the middle of a place that offered no privacy, no comfort, and no obvious place to meet with God, David found one anyway.",
      "Then Jesus says in Matthew 6 to go into your room, close the door, and pray to your Father who is unseen.",
      "The secret place is not ultimately about a location. It is about intention.",
      "David created what the wilderness could not provide.",
      "I think that is especially important for us as worship leaders.",
      "Every week we sing. We lift our hands. We play. We cry. We praise. We worship in front of people. If we are not careful, we can begin to believe that our public worship is enough to sustain our private relationship with God.",
      "It is not.",
      "Leading worship is not a substitute for being a worshiper.",
      "Our Sunday expression should be an overflow of what happened long before anyone else was watching.",
      "The confidence David carries throughout Psalm 63 did not appear overnight. It was built through a relationship cultivated in the secret place. That is why even in the wilderness he could still say, “My soul thirsts for You.” Not because he had everything figured out, but because he knew where to go when he did not.",
      "Fresh fire rarely falls on busy people.",
      "It falls on surrendered people.",
      "As we begin this fast together, do not just ask God to make you a better singer, musician, engineer, or leader. Ask Him to rebuild your hunger for His presence.",
      "The greatest thing we will carry onto the platform this month will not be tighter harmonies or cleaner transitions.",
      "It will be hearts that have been with Jesus.",
    ],
    pullQuote: "Leading worship is not a substitute for being a worshiper.",
    reflectionQuestions: [
      "Have I allowed public ministry to replace private intimacy with God?",
      "What has been competing for my attention when God has been inviting me into the secret place?",
      "If Sunday disappeared for a month, what would my relationship with Jesus look like?",
      "What intentional change can I make this week to prioritize time alone with God?",
    ],
    prayer:
      "Father, renew my hunger for Your presence. Teach me to seek You in secret before I ever stand in public. Forgive me for the times I have allowed ministry activity to replace real intimacy with You. Meet me in the wilderness places and remind me that there is nowhere I can go where You are out of reach. Rebuild my desire for prayer, worship, and Your Word. Let everything I offer publicly be the overflow of a private life that has been with You. Keep my heart tender, my motives pure, and my attention fixed on Jesus. I do not only want to sing about You. I want to know You. I do not only want to lead others into Your presence. I want to live there myself. In Jesus’ name, amen.",
    liveIt: [
      "Before today ends, spend at least 15 uninterrupted minutes alone with God.",
      "No rehearsing.",
      "No planning.",
      "No preparing for Sunday.",
      "No agenda beyond simply being with Him.",
      "If it helps, leave the music off. Let your worship begin in the quiet before it ever reaches a platform.",
    ],
    carryThis:
      "The platform can amplify your worship, but it can never replace your secret place.",
    estimatedMinutes: 12,
    theme: "secret-place",
  },
  {
    slug: "august-12",
    date: "2026-08-12",
    displayDate: "Wednesday, August 12, 2026",
    weekLabel: "Week 2",
    title: "One Sound Begins with One Heart",
    themeLabel: "Unity and intentional relationship",
    meditation:
      "Every great sound begins with people who choose one another before they need one another.",
    scriptures: [
      {
        reference: "Psalm 133:1–3",
        verses: [
          {
            number: 1,
            text: "How truly wonderful and delightful it is to see brothers and sisters living together in sweet unity!",
          },
          {
            number: 2,
            text: "It’s as precious as the sacred scented oil flowing from the head of the high priest Aaron, dripping down upon his beard and running all the way down to the hem of his priestly robes.",
          },
          {
            number: 3,
            text: "This harmony can be compared to the dew dripping from Mount Hermon, which flows down upon the hills of Zion. Indeed, that is where Yahweh has decreed his blessings.",
          },
        ],
      },
      {
        reference: "Philippians 2:1–5",
        verses: [
          {
            number: 1,
            text: "Look at how much encouragement you’ve found in your relationship with the Anointed One! You are filled to overflowing with his comforting love. You have experienced a deepening friendship with the Holy Spirit and have felt his tender affection and mercy.",
          },
          {
            number: 2,
            text: "So I’m asking you, my friends, that you be joined together in perfect unity—with one heart, one passion, and united in one love. Walk together with one harmonious purpose and you will fill my heart with unbounded joy.",
          },
          {
            number: 3,
            text: "Be free from pride-filled opinions, for they will only harm your cherished unity. Don’t allow self-promotion to hide in your hearts, but in authentic humility put others first and view others as more important than yourselves.",
          },
          {
            number: 4,
            text: "Abandon every display of selfishness. Possess a greater concern for what matters to others instead of your own interests.",
          },
          {
            number: 5,
            text: "And consider the example that Jesus, the Anointed One, has set before us. Let his mindset become your motivation.",
          },
        ],
      },
    ],
    consider: [
      "I have been thinking a lot about what actually creates unity.",
      "Honestly, I do not think it is shared talent. I do not think it is serving on the same team. I do not even think it is agreeing on everything.",
      "I think unity is built the same way you would build a healthy marriage, a close group of friends, or even your relationship with God.",
      "Through intentional time.",
      "Time with no agenda.",
      "Time where the goal is not to accomplish something, but simply to be together.",
      "Marriages do not grow because two people happen to share a house. They grow because those people intentionally share life. Friends do not become family simply because they have known one another for a long time. They become family because they have spent meaningful time together.",
      "Worship teams are no different.",
      "There is a reason sports teams have preseason. They are getting back into shape and learning the playbook, but something just as important is happening. They are getting acquainted and reacquainted. They are eating together, laughing together, and learning one another’s personalities again.",
      "They are building trust before the games start to matter.",
      "Because when pressure comes, chemistry matters.",
      "The same is true for us.",
      "The more time we spend together praying, worshiping, talking, eating, laughing, encouraging one another, and simply sharing life, the more we stop thinking like individuals and start thinking like one body.",
      "That is when the jokes land.",
      "That is when someone walks into rehearsal a little quieter than usual and somebody notices.",
      "That is when correction can be received as love rather than criticism because relationship has already built trust.",
      "That is when we do not just serve beside one another.",
      "We carry one another.",
      "Paul tells the Philippians to be like-minded, having the same love, being one in spirit and of one mind. He does not tell them to think exactly alike. He points them toward humility, encouragement, and putting others before themselves.",
      "Psalm 133 says unity is good and pleasant. It is compared to oil flowing down Aaron’s head and dew covering the mountain. Unity is not dry. It refreshes. It makes room for life.",
      "Do not only pray for unity.",
      "Invest in it.",
      "One conversation.",
      "One prayer.",
      "One meal.",
      "One encouragement.",
      "One shared moment at a time.",
      "That is how one sound begins.",
      "With one heart.",
    ],
    pullQuote: "Time decreases the “I” and increases the “we.”",
    reflectionQuestions: [
      "Am I building real relationships on this team, or am I only showing up to serve?",
      "Who on this team do I know the least?",
      "How can I help create a culture where people feel seen, encouraged, and cared for?",
      "Do my teammates experience me as someone they can trust and lean on?",
    ],
    prayer:
      "Father, thank You for placing each of us on this team. Thank You that You never intended for us to serve beside strangers, but alongside brothers and sisters. Teach us to value relationship as much as responsibility. Help us make time for one another, celebrate one another, and carry one another’s burdens. Remove anything in us that competes with unity, whether pride, insecurity, comparison, offense, or independence. Replace it with the heart of Christ. Make us one in spirit, one in purpose, and one in love. Let our unity speak as loudly as our music. Teach us to choose relationship before pressure forces us to need it. Build trust among us that can hold difficult conversations, celebrate great moments, and carry one another through hard seasons. In Jesus’ name, amen.",
    liveIt: [
      "Intentionally connect with one person from the team outside of rehearsal or Sunday.",
      "Grab coffee.",
      "Share a meal.",
      "Jump on a video call.",
      "Play a game.",
      "Go for a walk.",
      "Ask how they are really doing.",
      "The activity does not matter.",
      "The relationship does.",
    ],
    carryThis:
      "Unity is not built on the platform. It is built in the moments no one else sees.",
    estimatedMinutes: 12,
    theme: "unity",
  },
  {
    slug: "august-19",
    date: "2026-08-19",
    displayDate: "Wednesday, August 19, 2026",
    weekLabel: "Week 3",
    title: "Presence Is the Pursuit",
    themeLabel: "Excellence as worship",
    meditation:
      "God deserves our best, not because He demands perfection, but because He is worthy of wholehearted worship.",
    scriptures: [
      {
        reference: "Romans 12:1–2",
        verses: [
          {
            number: 1,
            text: "Beloved friends, what should be our proper response to God’s marvelous mercies? To surrender yourselves to God to be his sacred, living sacrifices. And live in holiness, experiencing all that delights his heart. For this becomes your genuine expression of worship.",
          },
          {
            number: 2,
            text: "Stop imitating the ideals and opinions of the culture around you, but be inwardly transformed by the Holy Spirit through a total reformation of how you think. This will empower you to discern God’s will as you live a beautiful life, satisfying and perfect in his eyes.",
          },
        ],
      },
      {
        reference: "Colossians 3:23–24",
        verses: [
          {
            number: 23,
            text: "Put your heart and soul into every activity you do, as though you are doing it for the Lord himself and not merely for others.",
          },
          {
            number: 24,
            text: "For we know that we will receive a reward, an inheritance from the Lord, as we serve the Lord Yahweh, the Anointed One!",
          },
        ],
      },
    ],
    consider: [
      "If we are called to be living sacrifices, and if we are supposed to throw ourselves wholeheartedly into whatever work we do, then excellence cannot be optional.",
      "It is already baked into what Scripture asks of us.",
      "Throughout Scripture, God did not ask Israel to bring Him whatever was left over. He asked for the firstfruits. He required sacrifices without defect. The offering mattered because of the One receiving it.",
      "That should challenge us.",
      "If our lives are the sacrifice, what does it mean to offer God an excellent one?",
      "If our work is truly being done unto the Lord, what does excellent work look like?",
      "Excellence begins with a simple truth:",
      "God deserves our best.",
      "Not because He is insecure.",
      "Not because His love must be earned.",
      "Not because a mistake makes us unacceptable.",
      "We give God our best because He is worthy of it.",
      "The quality of the offering says something about how we view the One receiving it.",
      "That means our preparation matters.",
      "Learning the music matters.",
      "Arriving on time matters.",
      "Practicing the transition matters.",
      "Checking the microphone matters.",
      "Proofing the lyrics matters.",
      "Preparing the stream matters.",
      "Knowing our assignment matters.",
      "Not because production is the point, but because all of it is part of what we are offering back to God.",
      "Excellence also protects the offering from being contaminated by what could have been prevented.",
      "Under the old covenant, an offering brought before God was not supposed to be careless or defective. In the same way, when we prepare thoroughly, we remove unnecessary distractions from the work God has entrusted to us.",
      "A wrong note does not block the presence of God.",
      "A late cue does not cancel the anointing.",
      "Perfection is not the standard.",
      "But carelessness can pull attention away from the moment.",
      "When our work is prepared and our hearts are surrendered, people are freer to focus on God rather than what went wrong around them.",
      "Excellence clears the path.",
      "It allows the work to serve the encounter instead of competing with it.",
      "That is the balance we have to protect.",
      "Preparation without presence becomes production.",
      "Presence without preparation can become disorder.",
      "But when surrendered hearts meet prepared hands, excellence becomes worship.",
      "Our desire for excellence is not driven by fear of embarrassment or obsession with perfection.",
      "It is driven by love.",
      "Jesus deserves the best of us.",
      "Our hearts.",
      "Our gifts.",
      "Our preparation.",
      "Our work.",
      "The pursuit is not perfection.",
      "The pursuit is Jesus.",
    ],
    pullQuote: "Excellence is our offering. Presence is our pursuit.",
    reflectionQuestions: [
      "Have I treated preparation as part of my worship, or only as a task?",
      "Where have I been offering God what is convenient instead of what is wholehearted?",
      "Is my pursuit of excellence driven by love for Jesus or fear of how I will look?",
      "What preventable distraction can I remove before I serve again?",
    ],
    prayer:
      "Father, You are worthy of more than what is left over. You deserve the first, the best, and the whole of who I am. Teach me to offer my life to You with a surrendered heart and to approach every assignment with care. Purify my motives so that excellence never becomes pride, performance, or a need to impress people. Let my preparation be worship. Let my discipline be worship. Let the work no one sees be as sincere as the moments everyone sees. Help me remove every preventable distraction so that nothing about my carelessness competes with what You want to do. Keep me hungry for Your presence and faithful with the gift You placed in my hands. I offer You my heart, my work, and my best because You alone are worthy. In Jesus’ name, amen.",
    liveIt: [
      "Choose one area of your responsibility that you normally leave until rehearsal or Sunday.",
      "Prepare it fully before the week ends.",
      "While you work, do not treat it like a chore.",
      "Pray over it as an offering to God.",
    ],
    carryThis:
      "Preparation is not the enemy of presence. When offered to God, preparation becomes worship.",
    estimatedMinutes: 12,
    theme: "excellence",
  },
  {
    slug: "august-26",
    date: "2026-08-26",
    displayDate: "Wednesday, August 26, 2026",
    weekLabel: "Week 4",
    title: "Anchored in the Dream",
    themeLabel: "Hope, alignment, purpose, and the future of the team",
    meditation:
      "Hope is the anchor. Music is one of the ways we help people find it.",
    scriptures: [
      {
        reference: "Hebrews 6:19–20",
        verses: [
          {
            number: 19,
            text: "We have this certain hope like a strong, unbreakable anchor holding our souls to God himself. Our anchor of hope is fastened to the mercy seat in the heavenly realm beyond the sacred threshold,",
          },
          {
            number: 20,
            text: "and where Jesus, our forerunner, has gone in before us. He is now and forever our royal Priest like Melchizedek.",
          },
        ],
      },
      {
        reference: "Hebrews 10:23–25",
        verses: [
          {
            number: 23,
            text: "So now wrap your heart tightly around the hope that lives within us, knowing that God always keeps his promises!",
          },
          {
            number: 24,
            text: "Discover creative ways to encourage others and to motivate them toward acts of compassion, doing beautiful works as expressions of love.",
          },
          {
            number: 25,
            text: "This is not the time to pull away and neglect meeting together, as some have formed the habit of doing. In fact, we should come together even more frequently, eager to encourage and urge each other onward as we anticipate that day dawning.",
          },
        ],
      },
    ],
    consider: [
      "Over the last four Wednesdays, we have prayed together, worshiped together, fasted together, and hopefully drawn closer, not only to each other, but to Christ.",
      "My prayer is not simply that we become a better worship team.",
      "It is that we become better worshipers.",
      "That our relationship with Jesus grows deeper.",
      "That our commitment to one another grows stronger.",
      "That together we become more aligned with the vision God has given this house.",
      "Because when we are aligned, we can move together.",
      "I have often said that excellence removes distractions.",
      "Unity removes disjointedness.",
      "When every person is pulling in a different direction, even the most gifted team eventually loses momentum. But when we are submitted to one vision, moving with one heart and one purpose, there is a strength larger than any individual gift.",
      "The sound becomes unified because the people are unified.",
      "That is what I have been praying God builds in us.",
      "Our theme this month has been Anchored in the Dream.",
      "I love that phrase because of the picture it paints.",
      "Long before the word dream came to mean aspiration or ambition, it was connected with music, joy, and celebration. Whether or not we use the word that way today, it gives us a beautiful picture of what we have been called to carry.",
      "Every week we carry music.",
      "But we also carry hope.",
      "Hebrews tells us that our hope in Christ is a strong and trustworthy anchor for our souls.",
      "That is the anchor.",
      "Not our talent.",
      "Not our plans.",
      "Not our ministry.",
      "Not the platform.",
      "Christ.",
      "Our music becomes one of the ways we point people toward that hope.",
      "Every Sunday, someone walks into the room carrying fear, disappointment, grief, anxiety, or questions they do not know how to answer.",
      "Before a sermon is preached, before announcements are made, we have the privilege of reminding them that hope is still alive.",
      "That is a sacred responsibility.",
      "As we finish this fast, do not let these four Wednesdays become a spiritual high that fades into another busy season.",
      "Carry them with you.",
      "Keep protecting your secret place.",
      "Keep investing in your teammates.",
      "Keep offering God your very best.",
      "Keep choosing presence over performance.",
      "Keep choosing progress over perfection.",
      "The harvest is still plentiful.",
      "People are still searching.",
      "God is still looking for worshipers who will faithfully point people toward Him.",
      "My hope is that six months from now, we may not remember every sentence in this guide.",
      "But we will remember this:",
      "We are anchored in the sound that points people toward the hope we have found in Christ.",
    ],
    pullQuote: "Our music is not the destination. It is the invitation.",
    reflectionQuestions: [
      "What has God grown in me during these four Wednesdays?",
      "How can I continue protecting the habits God has been building?",
      "How can I better align my gift with the vision of this house?",
      "Who needs the hope of Christ, and how can I point them toward Him?",
    ],
    prayer:
      "Father, thank You for meeting us throughout this month. Thank You for every conversation, every prayer, every quiet moment in Your presence, and every reminder that You are still at work in us. Anchor our hearts in Christ so that no circumstance, distraction, or season can pull us away from You. As we serve this house, let our music always point beyond ourselves and toward the hope only You can give. Keep us united in spirit, faithful in our calling, joyful in our service, and aligned with the vision You have given this ministry. May we never lose our wonder, gratitude, or hunger for Your presence. Continue shaping us into the worshipers You have called us to be. Let every note we sing, every chord we play, every cue we execute, and every act of service help someone take one step closer to You. In Jesus’ name, amen.",
    liveIt: [
      "Write down:",
      "One way God has grown you this month",
      "One habit you want to continue",
      "One commitment you are making to the team",
      "Then share one encouragement in the team group chat about what this journey has meant to you.",
    ],
    carryThis:
      "Our hope is anchored in Christ, and our sound exists to help others find Him.",
    estimatedMinutes: 15,
    theme: "hope",
  },
];

export function getDevotionalBySlug(slug: string): Devotional | undefined {
  return devotionals.find((d) => d.slug === slug);
}

export function getDevotionalIndex(slug: string): number {
  return devotionals.findIndex((d) => d.slug === slug);
}
