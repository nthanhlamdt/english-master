import { IGrammarLesson } from "@/types/grammar";

export const grammarLessonData: IGrammarLesson[] = [
  {
    _id: "1a2b3c4d-5e6f-7g8h-9i0j-k1l2m3n4o5p",
    title: "Present Simple Tense",
    description: "Learn how to use the present simple tense to describe habits, routines, and general facts.",
    icon: "calendar",
    level: "A1",
    story: {
      title: "A Day in Anna's Life",
      story: "Anna wakes up at 7 AM every day. She eats breakfast and goes to school. At school, she studies math and English. After school, she plays soccer with her friends. In the evening, she does her homework and watches TV.",
      grammarPoints: ["Subject + verb (base form)", "Add -s for third person singular"],
      questions: [
        "What time does Anna wake up?",
        "What does Anna do after school?",
        "What subjects does Anna study?",
        "When does Anna do her homework?"
      ]
    },
    structure: {
      title: "Structure of Present Simple",
      description: "The present simple tense is used for habits, routines, and facts that are always or generally true.",
      patterns: [
        {
          pattern: "Subject + verb (base form)",
          explanation: "Used for I, you, we, they.",
          examples: ["I walk to school.", "They play football."]
        },
        {
          pattern: "Subject + verb + -s/-es",
          explanation: "Used for he, she, it.",
          examples: ["She walks to school.", "He watches TV."]
        }
      ]
    },
    usage: {
      title: "When to Use Present Simple",
      description: "Use the present simple for routines, habits, facts, and schedules.",
      contexts: [
        {
          title: "Daily Routines",
          description: "Describing what someone does regularly.",
          examples: ["I brush my teeth twice a day.", "He goes to work at 8 AM."]
        },
        {
          title: "General Facts",
          description: "Stating things that are always true.",
          examples: ["The sun rises in the east.", "Water boils at 100°C."]
        }
      ]
    },
    interactive: {
      title: "Practice Scenarios",
      description: "Identify correct and incorrect uses of the present simple tense.",
      scenarios: [
        {
          title: "Daily Routine",
          description: "Choose the correct sentence for a daily routine.",
          examples: [
            { text: "She go to school every day.", isCorrect: false },
            { text: "She goes to school every day.", isCorrect: true }
          ]
        }
      ]
    },
    tips: {
      title: "Tips for Using Present Simple",
      description: "Helpful hints to master the present simple tense.",
      tips: [
        {
          title: "Third Person Singular",
          description: "Add -s or -es to verbs for he, she, it.",
          examples: ["He plays.", "She watches."]
        },
        {
          title: "Negative Sentences",
          description: "Use do/does + not + base verb.",
          examples: ["I don't like coffee.", "She doesn't play tennis."]
        }
      ]
    },
    quizz: [
      {
        assignment: "Điền từ phù hợp vào chỗ trống",
        question: "She _ _ _ _ _ to school every day.",
        answer: "goes",
        type: "fill-in-the-blanks",
        explanation: "For third person singular (she), add -s to the base verb 'go' in the present simple tense."
      },
      {
        assignment: "Chọn đáp án đúng",
        question: "I _ _ _ _ _ coffee every morning.",
        options: ["drink", "drinks", "drinking", "am drink"],
        answer: "drink",
        type: "multiple-choice",
        explanation: "For the subject 'I', use the base verb 'drink' in the present simple tense."
      },
      {
        assignment: "Điền từ phù hợp vào chỗ trống",
        question: "He _ _ _ _ _ TV in the evening.",
        answer: "watches",
        type: "fill-in-the-blanks",
        explanation: "For third person singular (he), add -es to the verb 'watch' in the present simple tense."
      },
      {
        assignment: "Chọn đáp án đúng",
        question: "They _ _ _ _ _ football on weekends.",
        options: ["play", "plays", "playing", "are play"],
        answer: "play",
        type: "multiple-choice",
        explanation: "For the subject 'they', use the base verb 'play' in the present simple tense."
      },
      {
        assignment: "Điền từ phù hợp vào chỗ trống",
        question: "The sun _ _ _ _ _ in the east.",
        answer: "rises",
        type: "fill-in-the-blanks",
        explanation: "For third person singular (the sun), add -es to the verb 'rise' in the present simple tense."
      },
      {
        assignment: "Chọn đáp án đúng",
        question: "She _ _ _ _ _ to music every night.",
        options: ["listen", "listens", "listening", "is listen"],
        answer: "listens",
        type: "multiple-choice",
        explanation: "For third person singular (she), add -s to the verb 'listen' in the present simple tense."
      },
      {
        assignment: "Điền từ phù hợp vào chỗ trống",
        question: "We _ _ _ _ _ to the park on Sundays.",
        answer: "go",
        type: "fill-in-the-blanks",
        explanation: "For the subject 'we', use the base verb 'go' in the present simple tense."
      },
      {
        assignment: "Chọn đáp án đúng",
        question: "He _ _ _ _ _ his homework after dinner.",
        options: ["do", "does", "doing", "is do"],
        answer: "does",
        type: "multiple-choice",
        explanation: "For third person singular (he), use 'does' in the present simple tense."
      },
      {
        assignment: "Điền từ phù hợp vào chỗ trống",
        question: "They _ _ _ _ _ English every day.",
        answer: "study",
        type: "fill-in-the-blanks",
        explanation: "For the subject 'they', use the base verb 'study' in the present simple tense."
      },
      {
        assignment: "Chọn đáp án đúng",
        question: "The shop _ _ _ _ _ at 9 AM.",
        options: ["open", "opens", "opening", "is open"],
        answer: "opens",
        type: "multiple-choice",
        explanation: "For third person singular (the shop), add -s to the verb 'open' in the present simple tense."
      }
    ]
  },
  {
    _id: "2b3c4d5e-6f7g-8h9i-0j1k-l2m3n4o5p6",
    title: "Past Simple Tense",
    description: "Learn how to use the past simple tense to describe completed actions in the past.",
    icon: "history",
    level: "A2",
    story: {
      title: "Tom's Weekend Adventure",
      story: "Last weekend, Tom visited his grandparents. He helped them in the garden and played chess with his grandfather. They ate homemade cookies and watched a movie together. Tom enjoyed his time and returned home happy.",
      grammarPoints: ["Subject + verb (past form)", "Regular verbs: add -ed", "Irregular verbs: learn forms"],
      questions: [
        "Where did Tom go last weekend?",
        "What did Tom do in the garden?",
        "What did they eat?",
        "How did Tom feel when he returned home?"
      ]
    },
    structure: {
      title: "Structure of Past Simple",
      description: "The past simple tense is used for actions completed in the past at a specific time.",
      patterns: [
        {
          pattern: "Subject + verb (past form)",
          explanation: "Used for all subjects with regular or irregular verbs.",
          examples: ["I walked to school.", "She ate breakfast."]
        },
        {
          pattern: "Subject + did not + verb (base form)",
          explanation: "Used for negative sentences.",
          examples: ["I didn't go to the park.", "He didn't play soccer."]
        }
      ]
    },
    usage: {
      title: "When to Use Past Simple",
      description: "Use the past simple for completed actions, past habits, and sequences of events.",
      contexts: [
        {
          title: "Completed Actions",
          description: "Actions that happened and finished in the past.",
          examples: ["She visited Paris last summer.", "We watched a movie yesterday."]
        },
        {
          title: "Past Habits",
          description: "Habits or routines that happened in the past.",
          examples: ["He played football every weekend.", "They lived in London."]
        }
      ]
    },
    interactive: {
      title: "Practice Scenarios",
      description: "Identify correct and incorrect uses of the past simple tense.",
      scenarios: [
        {
          title: "Past Event",
          description: "Choose the correct sentence for a past event.",
          examples: [
            { text: "She go to the zoo yesterday.", isCorrect: false },
            { text: "She went to the zoo yesterday.", isCorrect: true }
          ]
        }
      ]
    },
    tips: {
      title: "Tips for Using Past Simple",
      description: "Helpful hints to master the past simple tense.",
      tips: [
        {
          title: "Regular Verbs",
          description: "Add -ed to most verbs for the past tense.",
          examples: ["walk → walked", "play → played"]
        },
        {
          title: "Irregular Verbs",
          description: "Learn the past forms of irregular verbs.",
          examples: ["go → went", "eat → ate"]
        }
      ]
    },
    quizz: [
      {
        assignment: "Điền từ phù hợp vào chỗ trống",
        question: "She _ _ _ _ _ to Paris last summer.",
        answer: "went",
        type: "fill-in-the-blanks",
        explanation: "The verb 'go' is irregular, and its past simple form is 'went'."
      },
      {
        assignment: "Chọn đáp án đúng",
        question: "They _ _ _ _ _ a movie yesterday.",
        options: ["watch", "watched", "watching", "are watch"],
        answer: "watched",
        type: "multiple-choice",
        explanation: "For regular verbs like 'watch', add -ed to form the past simple tense."
      },
      {
        assignment: "Điền từ phù hợp vào chỗ trống",
        question: "He _ _ _ _ _ football last weekend.",
        answer: "played",
        type: "fill-in-the-blanks",
        explanation: "For regular verbs like 'play', add -ed to form the past simple tense."
      },
      {
        assignment: "Chọn đáp án đúng",
        question: "I _ _ _ _ _ to the park yesterday.",
        options: ["go", "went", "going", "am go"],
        answer: "went",
        type: "multiple-choice",
        explanation: "The verb 'go' is irregular, and its past simple form is 'went'."
      },
      {
        assignment: "Điền từ phù hợp vào chỗ trống",
        question: "We _ _ _ _ _ pizza last night.",
        answer: "ate",
        type: "fill-in-the-blanks",
        explanation: "The verb 'eat' is irregular, and its past simple form is 'ate'."
      },
      {
        assignment: "Chọn đáp án đúng",
        question: "She _ _ _ _ _ her homework last night.",
        options: ["do", "did", "doing", "is do"],
        answer: "did",
        type: "multiple-choice",
        explanation: "The verb 'do' is irregular, and its past simple form is 'did'."
      },
      {
        assignment: "Điền từ phù hợp vào chỗ trống",
        question: "They _ _ _ _ _ to the beach last summer.",
        answer: "went",
        type: "fill-in-the-blanks",
        explanation: "The verb 'go' is irregular, and its past simple form is 'went'."
      },
      {
        assignment: "Chọn đáp án đúng",
        question: "He _ _ _ _ _ TV last evening.",
        options: ["watch", "watched", "watching", "is watch"],
        answer: "watched",
        type: "multiple-choice",
        explanation: "For regular verbs like 'watch', add -ed to form the past simple tense."
      },
      {
        assignment: "Điền từ phù hợp vào chỗ trống",
        question: "I _ _ _ _ _ my friend yesterday.",
        answer: "called",
        type: "fill-in-the-blanks",
        explanation: "For regular verbs like 'call', add -ed to form the past simple tense."
      },
      {
        assignment: "Chọn đáp án đúng",
        question: "We _ _ _ _ _ in London last year.",
        options: ["live", "lived", "living", "are live"],
        answer: "lived",
        type: "multiple-choice",
        explanation: "For regular verbs like 'live', add -ed to form the past simple tense."
      }
    ]
  },
  {
    _id: "3c4d5e6f-7g8h-9i0j-1k2l-m3n4o5p6q7",
    title: "Present Perfect Tense",
    description: "Learn how to use the present perfect tense to describe experiences and actions with present relevance.",
    icon: "check-circle",
    level: "B1",
    story: {
      title: "Maria's Adventures",
      story: "Maria has traveled to many countries. She has visited Japan, Italy, and Brazil. She has learned to speak three languages. Her favorite experience was when she has eaten sushi in Tokyo.",
      grammarPoints: ["Subject + have/has + past participle", "Use for experiences and recent actions"],
      questions: [
        "How many countries has Maria visited?",
        "What languages has Maria learned?",
        "What was Maria's favorite experience?",
        "Where has Maria eaten sushi?"
      ]
    },
    structure: {
      title: "Structure of Present Perfect",
      description: "The present perfect tense connects past actions to the present.",
      patterns: [
        {
          pattern: "Subject + have/has + past participle",
          explanation: "Used for all subjects with regular or irregular verbs.",
          examples: ["I have finished my homework.", "She has eaten lunch."]
        },
        {
          pattern: "Subject + have/has + not + past participle",
          explanation: "Used for negative sentences.",
          examples: ["I haven't seen that movie.", "He hasn't been to Paris."]
        }
      ]
    },
    usage: {
      title: "When to Use Present Perfect",
      description: "Use the present perfect for experiences, recent actions, and unfinished time periods.",
      contexts: [
        {
          title: "Life Experiences",
          description: "Talking about things you have done in your life.",
          examples: ["I have traveled to Europe.", "She has met a celebrity."]
        },
        {
          title: "Recent Actions",
          description: "Actions that happened recently with present relevance.",
          examples: ["He has just finished his work.", "They have already left."]
        }
      ]
    },
    interactive: {
      title: "Practice Scenarios",
      description: "Identify correct and incorrect uses of the present perfect tense.",
      scenarios: [
        {
          title: "Travel Experience",
          description: "Choose the correct sentence for a travel experience.",
          examples: [
            { text: "I have go to France.", isCorrect: false },
            { text: "I have gone to France.", isCorrect: true }
          ]
        }
      ]
    },
    tips: {
      title: "Tips for Using Present Perfect",
      description: "Helpful hints to master the present perfect tense.",
      tips: [
        {
          title: "Past Participle",
          description: "Use the past participle form of verbs.",
          examples: ["go → gone", "eat → eaten"]
        },
        {
          title: "Time Expressions",
          description: "Use with words like ever, never, just, already.",
          examples: ["Have you ever been to London?", "She has just finished."]
        }
      ]
    },
    quizz: [
      {
        assignment: "Điền từ phù hợp vào chỗ trống",
        question: "I _ _ _ _ _ to France.",
        answer: "have been",
        type: "fill-in-the-blanks",
        explanation: "Use 'have' + past participle 'been' for the verb 'be' in present perfect tense."
      },
      {
        assignment: "Chọn đáp án đúng",
        question: "She _ _ _ _ _ sushi before.",
        options: ["eat", "has eaten", "eating", "is eat"],
        answer: "has eaten",
        type: "multiple-choice",
        explanation: "For third person singular (she), use 'has' + past participle 'eaten' in present perfect tense."
      },
      {
        assignment: "Điền từ phù hợp vào chỗ trống",
        question: "They _ _ _ _ _ their homework.",
        answer: "have finished",
        type: "fill-in-the-blanks",
        explanation: "Use 'have' + past participle 'finished' for the verb 'finish' in present perfect tense."
      },
      {
        assignment: "Chọn đáp án đúng",
        question: "He _ _ _ _ _ to Paris.",
        options: ["go", "has gone", "going", "is go"],
        answer: "has gone",
        type: "multiple-choice",
        explanation: "For third person singular (he), use 'has' + past participle 'gone' in present perfect tense."
      },
      {
        assignment: "Điền từ phù hợp vào chỗ trống",
        question: "We _ _ _ _ _ a movie this week.",
        answer: "have watched",
        type: "fill-in-the-blanks",
        explanation: "Use 'have' + past participle 'watched' for the verb 'watch' in present perfect tense."
      },
      {
        assignment: "Chọn đáp án đúng",
        question: "I _ _ _ _ _ that book yet.",
        options: ["read", "have read", "reading", "am read"],
        answer: "have read",
        type: "multiple-choice",
        explanation: "Use 'have' + past participle 'read' for the verb 'read' in present perfect tense."
      },
      {
        assignment: "Điền từ phù hợp vào chỗ trống",
        question: "She _ _ _ _ _ three languages.",
        answer: "has learned",
        type: "fill-in-the-blanks",
        explanation: "For third person singular (she), use 'has' + past participle 'learned' in present perfect tense."
      },
      {
        assignment: "Chọn đáp án đúng",
        question: "They _ _ _ _ _ to the party yet.",
        options: ["go", "have gone", "going", "are go"],
        answer: "have gone",
        type: "multiple-choice",
        explanation: "Use 'have' + past participle 'gone' for the verb 'go' in present perfect tense."
      },
      {
        assignment: "Điền từ phù hợp vào chỗ trống",
        question: "He _ _ _ _ _ his keys.",
        answer: "has lost",
        type: "fill-in-the-blanks",
        explanation: "For third person singular (he), use 'has' + past participle 'lost' in present perfect tense."
      },
      {
        assignment: "Chọn đáp án đúng",
        question: "We _ _ _ _ _ in this city for five years.",
        options: ["live", "have lived", "living", "are live"],
        answer: "have lived",
        type: "multiple-choice",
        explanation: "Use 'have' + past participle 'lived' for the verb 'live' in present perfect tense."
      }
    ]
  },
  {
    _id: "4d5e6f7g-8h9i-0j1k-2l3m-n4o5p6q7r8",
    title: "Conditional Sentences (Type 1)",
    description: "Learn how to use first conditional sentences to talk about real possibilities in the future.",
    icon: "if",
    level: "B2",
    story: {
      title: "Planning a Picnic",
      story: "If it doesn't rain tomorrow, we will have a picnic in the park. If we go, we will bring sandwiches and drinks. If Sarah comes, she will bring her guitar. If the weather is nice, we will play games.",
      grammarPoints: ["If + present simple, will + base verb"],
      questions: [
        "What will happen if it doesn't rain tomorrow?",
        "What will we bring if we go to the picnic?",
        "Who will bring a guitar?",
        "What will happen if the weather is nice?"
      ]
    },
    structure: {
      title: "Structure of First Conditional",
      description: "The first conditional is used for real possibilities in the future.",
      patterns: [
        {
          pattern: "If + present simple, will + base verb",
          explanation: "Describes a condition and its possible result.",
          examples: ["If it rains, we will stay home.", "If you study, you will pass."]
        }
      ]
    },
    usage: {
      title: "When to Use First Conditional",
      description: "Use the first conditional for real and possible situations.",
      contexts: [
        {
          title: "Future Plans",
          description: "Talking about plans that depend on a condition.",
          examples: ["If I have time, I will visit you.", "If she calls, I will answer."]
        },
        {
          title: "Warnings or Promises",
          description: "Expressing consequences of actions.",
          examples: ["If you don't hurry, you will be late.", "If you help me, I will help you."]
        }
      ]
    },
    interactive: {
      title: "Practice Scenarios",
      description: "Identify correct and incorrect uses of the first conditional.",
      scenarios: [
        {
          title: "Future Plan",
          description: "Choose the correct sentence for a future plan.",
          examples: [
            { text: "If it rain, we will stay home.", isCorrect: false },
            { text: "If it rains, we will stay home.", isCorrect: true }
          ]
        }
      ]
    },
    tips: {
      title: "Tips for Using First Conditional",
      description: "Helpful hints to master the first conditional.",
      tips: [
        {
          title: "Present Simple in If-Clause",
          description: "Use present simple in the if-clause, not future.",
          examples: ["If I see her, I will tell her.", "Not: If I will see her..."]
        },
        {
          title: "Comma Usage",
          description: "Use a comma when the if-clause comes first.",
          examples: ["If you study, you will pass.", "You will pass if you study."]
        }
      ]
    },
    quizz: [
      {
        assignment: "Điền từ phù hợp vào chỗ trống",
        question: "If it _ _ _ _ _, we will stay home.",
        answer: "rains",
        type: "fill-in-the-blanks",
        explanation: "Use present simple 'rains' in the if-clause of the first conditional."
      },
      {
        assignment: "Chọn đáp án đúng",
        question: "If you _ _ _ _ _, you will pass the exam.",
        options: ["study", "studies", "studying", "will study"],
        answer: "study",
        type: "multiple-choice",
        explanation: "Use present simple 'study' in the if-clause, not the future tense."
      },
      {
        assignment: "Điền từ phù hợp vào chỗ trống",
        question: "If she _ _ _ _ _, she will bring her guitar.",
        answer: "comes",
        type: "fill-in-the-blanks",
        explanation: "Use present simple 'comes' for third person singular in the if-clause."
      },
      {
        assignment: "Chọn đáp án đúng",
        question: "If we _ _ _ _ _ time, we will visit the museum.",
        options: ["have", "has", "having", "will have"],
        answer: "have",
        type: "multiple-choice",
        explanation: "Use present simple 'have' in the if-clause for the first conditional."
      },
      {
        assignment: "Điền từ phù hợp vào chỗ trống",
        question: "If he _ _ _ _ _, he will be late.",
        answer: "hurries",
        type: "fill-in-the-blanks",
        explanation: "Use present simple 'hurries' for third person singular in the if-clause."
      },
      {
        assignment: "Chọn đáp án đúng",
        question: "If they _ _ _ _ _, they will win the game.",
        options: ["play", "plays", "playing", "will play"],
        answer: "play",
        type: "multiple-choice",
        explanation: "Use present simple 'play' in the if-clause for the first conditional."
      },
      {
        assignment: "Điền từ phù hợp vào chỗ trống",
        question: "If I _ _ _ _ _ time, I will call you.",
        answer: "have",
        type: "fill-in-the-blanks",
        explanation: "Use present simple 'have' in the if-clause for the first conditional."
      },
      {
        assignment: "Chọn đáp án đúng",
        question: "If it _ _ _ _ _, we will go hiking.",
        options: ["is", "be", "being", "will be"],
        answer: "is",
        type: "multiple-choice",
        explanation: "Use present simple 'is' in the if-clause for the first conditional."
      },
      {
        assignment: "Điền từ phù hợp vào chỗ trống",
        question: "If we _ _ _ _ _, we will have fun.",
        answer: "go",
        type: "fill-in-the-blanks",
        explanation: "Use present simple 'go' in the if-clause for the first conditional."
      },
      {
        assignment: "Chọn đáp án đúng",
        question: "If she _ _ _ _ _, she will join us.",
        options: ["arrive", "arrives", "arriving", "will arrive"],
        answer: "arrives",
        type: "multiple-choice",
        explanation: "Use present simple 'arrives' for third person singular in the if-clause."
      }
    ]
  },
  {
    _id: "5e6f7g8h-9i0j-1k2l-3m4n-o5p6q7r8s9",
    title: "Passive Voice",
    description: "Learn how to use the passive voice to focus on the action or the object receiving the action.",
    icon: "swap",
    level: "C1",
    story: {
      title: "The Museum Project",
      story: "A new museum was opened in the city last month. It was designed by a famous architect. Many artifacts were displayed, and the event was attended by hundreds of people. The museum is visited by tourists every day.",
      grammarPoints: ["Subject + be + past participle", "Use to focus on the action or object"],
      questions: [
        "When was the new museum opened?",
        "Who designed the museum?",
        "What was displayed in the museum?",
        "Who visits the museum every day?"
      ]
    },
    structure: {
      title: "Structure of Passive Voice",
      description: "The passive voice shifts focus to the action or the object receiving it.",
      patterns: [
        {
          pattern: "Subject + be + past participle",
          explanation: "The verb 'be' changes according to tense.",
          examples: ["The book was read.", "The house is being painted."]
        },
        {
          pattern: "Subject + be + not + past participle",
          explanation: "Used for negative sentences.",
          examples: ["The room wasn't cleaned.", "The letter hasn't been sent."]
        }
      ]
    },
    usage: {
      title: "When to Use Passive Voice",
      description: "Use the passive voice when the doer is unknown, unimportant, or to emphasize the action.",
      contexts: [
        {
          title: "Unknown Doer",
          description: "When we don't know who performed the action.",
          examples: ["The window was broken.", "The car was stolen."]
        },
        {
          title: "Emphasizing the Action",
          description: "Focusing on what happened rather than who did it.",
          examples: ["The book was published last year.", "The room is cleaned daily."]
        }
      ]
    },
    interactive: {
      title: "Practice Scenarios",
      description: "Identify correct and incorrect uses of the passive voice.",
      scenarios: [
        {
          title: "Event Description",
          description: "Choose the correct sentence for a passive voice description.",
          examples: [
            { text: "The cake was eat by the children.", isCorrect: false },
            { text: "The cake was eaten by the children.", isCorrect: true }
          ]
        }
      ]
    },
    tips: {
      title: "Tips for Using Passive Voice",
      description: "Helpful hints to master the passive voice.",
      tips: [
        {
          title: "Correct Form of 'Be'",
          description: "Use the correct tense of 'be' (is, was, has been, etc.).",
          examples: ["The house is painted.", "The house was painted."]
        },
        {
          title: "Optional By-Phrase",
          description: "Include 'by' only when the doer is important.",
          examples: ["The book was written by J.K. Rowling.", "The room was cleaned."]
        }
      ]
    },
    quizz: [
      {
        assignment: "Điền từ phù hợp vào chỗ trống",
        question: "The book _ _ _ _ _ by J.K. Rowling.",
        answer: "was written",
        type: "fill-in-the-blanks",
        explanation: "Use 'was' + past participle 'written' for past simple passive voice."
      },
      {
        assignment: "Chọn đáp án đúng",
        question: "The room _ _ _ _ _ every day.",
        options: ["clean", "is cleaned", "cleaning", "is clean"],
        answer: "is cleaned",
        type: "multiple-choice",
        explanation: "Use 'is' + past participle 'cleaned' for present simple passive voice."
      },
      {
        assignment: "Điền từ phù hợp vào chỗ trống",
        question: "The car _ _ _ _ _ yesterday.",
        answer: "was stolen",
        type: "fill-in-the-blanks",
        explanation: "Use 'was' + past participle 'stolen' for past simple passive voice."
      },
      {
        assignment: "Chọn đáp án đúng",
        question: "The letter _ _ _ _ _ yet.",
        options: ["send", "has sent", "has been sent", "sending"],
        answer: "has been sent",
        type: "multiple-choice",
        explanation: "Use 'has been' + past participle 'sent' for present perfect passive voice."
      },
      {
        assignment: "Điền từ phù hợp vào chỗ trống",
        question: "The house _ _ _ _ _ last year.",
        answer: "was built",
        type: "fill-in-the-blanks",
        explanation: "Use 'was' + past participle 'built' for past simple passive voice."
      },
      {
        assignment: "Chọn đáp án đúng",
        question: "The movie _ _ _ _ _ by thousands of people.",
        options: ["watch", "is watched", "watching", "is watch"],
        answer: "is watched",
        type: "multiple-choice",
        explanation: "Use 'is' + past participle 'watched' for present simple passive voice."
      },
      {
        assignment: "Điền từ phù hợp vào chỗ trống",
        question: "The cake _ _ _ _ _ by the chef.",
        answer: "was baked",
        type: "fill-in-the-blanks",
        explanation: "Use 'was' + past participle 'baked' for past simple passive voice."
      },
      {
        assignment: "Chọn đáp án đúng",
        question: "The windows _ _ _ _ _ yesterday.",
        options: ["clean", "were cleaned", "cleaning", "are clean"],
        answer: "were cleaned",
        type: "multiple-choice",
        explanation: "Use 'were' + past participle 'cleaned' for past simple passive voice."
      },
      {
        assignment: "Điền từ phù hợp vào chỗ trống",
        question: "The song _ _ _ _ _ by a famous band.",
        answer: "was sung",
        type: "fill-in-the-blanks",
        explanation: "Use 'was' + past participle 'sung' for past simple passive voice."
      },
      {
        assignment: "Chọn đáp án đúng",
        question: "The project _ _ _ _ _ next month.",
        options: ["complete", "is completed", "will be completed", "completing"],
        answer: "will be completed",
        type: "multiple-choice",
        explanation: "Use 'will be' + past participle 'completed' for future passive voice."
      }
    ]
  }
];
