export interface IWord {
  _id: string
  word: string
  phonetic: string
  partOfSpeech: string
  definition: string
  vietnamese: string
  example: string
  url: string
}

export interface IVocabularyTopic {
  _id: string
  name: string
  ordexIndex: number
  isUnlock: boolean
  url: string
  words: IWord[]
  progress: number
}

// Dữ liệu từ vựng với link ảnh chính xác
export const vocabularyTopics: IVocabularyTopic[] = [
  {
    _id: "family-001",
    name: "Gia đình",
    ordexIndex: 1,
    isUnlock: true,
    url: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&h=400&fit=crop",
    progress: 100,
    words: [
      {
        _id: "word-001",
        word: "family",
        phonetic: "/ˈfæm.ə.li/",
        partOfSpeech: "noun",
        definition: "A group of people who are related to each other",
        vietnamese: "gia đình",
        example: "My family is very close-knit.",
        url: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=300&fit=crop"
      },
      {
        _id: "word-002",
        word: "parents",
        phonetic: "/ˈpeə.rənts/",
        partOfSpeech: "noun",
        definition: "A person's father and mother",
        vietnamese: "cha mẹ",
        example: "My parents are very supportive.",
        url: "https://images.unsplash.com/photo-1511895424838-6b1d0b0b0b0b?w=400&h=300&fit=crop"
      },
      {
        _id: "word-003",
        word: "siblings",
        phonetic: "/ˈsɪb.lɪŋz/",
        partOfSpeech: "noun",
        definition: "Brothers and sisters",
        vietnamese: "anh chị em",
        example: "I have three siblings.",
        url: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=300&fit=crop"
      },
      {
        _id: "word-004",
        word: "grandparents",
        phonetic: "/ˈɡræn.peə.rənts/",
        partOfSpeech: "noun",
        definition: "The parents of your parents",
        vietnamese: "ông bà",
        example: "My grandparents live in the countryside.",
        url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
      },
      {
        _id: "word-005",
        word: "cousin",
        phonetic: "/ˈkʌz.ən/",
        partOfSpeech: "noun",
        definition: "The child of your aunt or uncle",
        vietnamese: "anh chị em họ",
        example: "I'm going to visit my cousin this weekend.",
        url: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=300&fit=crop"
      }
    ]
  },
  {
    _id: "food-002",
    name: "Thực phẩm",
    ordexIndex: 2,
    isUnlock: true,
    url: "https://images.unsplash.com/photo-1504674900240-9c9c0c1d0b0b?w=800&h=400&fit=crop",
    progress: 100,
    words: [
      {
        _id: "word-006",
        word: "breakfast",
        phonetic: "/ˈbrek.fəst/",
        partOfSpeech: "noun",
        definition: "The first meal of the day",
        vietnamese: "bữa sáng",
        example: "I usually have eggs for breakfast.",
        url: "https://images.unsplash.com/photo-1494859802809-d069c3b71a8a?w=400&h=300&fit=crop"
      },
      {
        _id: "word-007",
        word: "lunch",
        phonetic: "/lʌntʃ/",
        partOfSpeech: "noun",
        definition: "A meal eaten in the middle of the day",
        vietnamese: "bữa trưa",
        example: "Let's go out for lunch.",
        url: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop"
      },
      {
        _id: "word-008",
        word: "dinner",
        phonetic: "/ˈdɪn.ər/",
        partOfSpeech: "noun",
        definition: "The main meal of the day",
        vietnamese: "bữa tối",
        example: "We're having pasta for dinner tonight.",
        url: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&h=300&fit=crop"
      },
      {
        _id: "word-009",
        word: "vegetables",
        phonetic: "/ˈvedʒ.tə.bəlz/",
        partOfSpeech: "noun",
        definition: "Plants that are eaten as food",
        vietnamese: "rau củ",
        example: "Eat more vegetables for better health.",
        url: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=300&fit=crop"
      },
      {
        _id: "word-010",
        word: "fruits",
        phonetic: "/fruːts/",
        partOfSpeech: "noun",
        definition: "Sweet and fleshy products of plants",
        vietnamese: "trái cây",
        example: "I love eating fresh fruits.",
        url: "https://images.unsplash.com/photo-1619566636858-adf3ef4644b9?w=400&h=300&fit=crop"
      }
    ]
  },
  {
    _id: "animals-003",
    name: "Động vật",
    ordexIndex: 3,
    isUnlock: false,
    url: "https://images.unsplash.com/photo-1456926631375-92c8ce872def?w=800&h=400&fit=crop",
    progress: 0,
    words: [
      {
        _id: "word-011",
        word: "dog",
        phonetic: "/dɒɡ/",
        partOfSpeech: "noun",
        definition: "A domesticated carnivorous mammal",
        vietnamese: "con chó",
        example: "My dog loves to play in the park.",
        url: "https://images.unsplash.com/photo-1547407139-3c921a66005c?w=400&h=300&fit=crop"
      },
      {
        _id: "word-012",
        word: "cat",
        phonetic: "/kæt/",
        partOfSpeech: "noun",
        definition: "A small domesticated carnivorous mammal",
        vietnamese: "con mèo",
        example: "The cat is sleeping on the sofa.",
        url: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&h=300&fit=crop"
      },
      {
        _id: "word-013",
        word: "bird",
        phonetic: "/bɜːd/",
        partOfSpeech: "noun",
        definition: "A warm-blooded egg-laying vertebrate",
        vietnamese: "con chim",
        example: "Birds are singing in the trees.",
        url: "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=400&h=300&fit=crop"
      },
      {
        _id: "word-014",
        word: "fish",
        phonetic: "/fɪʃ/",
        partOfSpeech: "noun",
        definition: "A cold-blooded vertebrate living in water",
        vietnamese: "con cá",
        example: "There are many colorful fish in the aquarium.",
        url: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop"
      },
      {
        _id: "word-015",
        word: "horse",
        phonetic: "/hɔːs/",
        partOfSpeech: "noun",
        definition: "A large domesticated hoofed mammal",
        vietnamese: "con ngựa",
        example: "She loves riding horses.",
        url: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=400&h=300&fit=crop"
      }
    ]
  },
  {
    _id: "colors-004",
    name: "Màu sắc",
    ordexIndex: 4,
    isUnlock: false,
    url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop",
    progress: 0,
    words: [
      {
        _id: "word-016",
        word: "red",
        phonetic: "/red/",
        partOfSpeech: "noun",
        definition: "The color of blood or fire",
        vietnamese: "màu đỏ",
        example: "The rose is bright red.",
        url: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop"
      },
      {
        _id: "word-017",
        word: "blue",
        phonetic: "/bluː/",
        partOfSpeech: "noun",
        definition: "The color of the sky on a clear day",
        vietnamese: "màu xanh dương",
        example: "The ocean is deep blue.",
        url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"
      },
      {
        _id: "word-018",
        word: "green",
        phonetic: "/ɡriːn/",
        partOfSpeech: "noun",
        definition: "The color of grass and leaves",
        vietnamese: "màu xanh lá",
        example: "The trees are green in spring.",
        url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop"
      },
      {
        _id: "word-019",
        word: "yellow",
        phonetic: "/ˈjel.əʊ/",
        partOfSpeech: "noun",
        definition: "The color of lemons and bananas",
        vietnamese: "màu vàng",
        example: "The sunflowers are bright yellow.",
        url: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400&h=300&fit=crop"
      },
      {
        _id: "word-020",
        word: "purple",
        phonetic: "/ˈpɜː.pəl/",
        partOfSpeech: "noun",
        definition: "A color between red and blue",
        vietnamese: "màu tím",
        example: "Grapes can be purple or green.",
        url: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop"
      }
    ]
  },
  {
    _id: "numbers-005",
    name: "Số đếm",
    ordexIndex: 5,
    isUnlock: false,
    url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop",
    progress: 0,
    words: [
      {
        _id: "word-021",
        word: "one",
        phonetic: "/wʌn/",
        partOfSpeech: "number",
        definition: "The number 1",
        vietnamese: "số một",
        example: "I have one apple.",
        url: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop"
      },
      {
        _id: "word-022",
        word: "two",
        phonetic: "/tuː/",
        partOfSpeech: "number",
        definition: "The number 2",
        vietnamese: "số hai",
        example: "There are two cats in the garden.",
        url: "https://images.unsplash.com/photo-1547407139-3c921a66005c?w=400&h=300&fit=crop"
      },
      {
        _id: "word-023",
        word: "three",
        phonetic: "/θriː/",
        partOfSpeech: "number",
        definition: "The number 3",
        vietnamese: "số ba",
        example: "I have three brothers.",
        url: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&h=300&fit=crop"
      },
      {
        _id: "word-024",
        word: "four",
        phonetic: "/fɔːr/",
        partOfSpeech: "number",
        definition: "The number 4",
        vietnamese: "số bốn",
        example: "There are four seasons in a year.",
        url: "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=400&h=300&fit=crop"
      },
      {
        _id: "word-025",
        word: "five",
        phonetic: "/faɪv/",
        partOfSpeech: "number",
        definition: "The number 5",
        vietnamese: "số năm",
        example: "I need five minutes to get ready.",
        url: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop"
      }
    ]
  },
  {
    _id: "weather-006",
    name: "Thời tiết",
    ordexIndex: 6,
    isUnlock: false,
    url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop",
    progress: 0,
    words: [
      {
        _id: "word-026",
        word: "sunny",
        phonetic: "/ˈsʌn.i/",
        partOfSpeech: "adjective",
        definition: "Bright with sunlight",
        vietnamese: "nắng",
        example: "It's a sunny day today.",
        url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"
      },
      {
        _id: "word-027",
        word: "rainy",
        phonetic: "/ˈreɪ.ni/",
        partOfSpeech: "adjective",
        definition: "Characterized by rain",
        vietnamese: "mưa",
        example: "Don't forget your umbrella, it's rainy.",
        url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"
      },
      {
        _id: "word-028",
        word: "cloudy",
        phonetic: "/ˈklaʊ.di/",
        partOfSpeech: "adjective",
        definition: "Covered with clouds",
        vietnamese: "nhiều mây",
        example: "The sky is cloudy today.",
        url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"
      },
      {
        _id: "word-029",
        word: "windy",
        phonetic: "/ˈwɪn.di/",
        partOfSpeech: "adjective",
        definition: "Characterized by wind",
        vietnamese: "gió",
        example: "It's very windy today.",
        url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"
      },
      {
        _id: "word-030",
        word: "snowy",
        phonetic: "/ˈsnəʊ.i/",
        partOfSpeech: "adjective",
        definition: "Covered with snow",
        vietnamese: "tuyết",
        example: "The mountains are snowy in winter.",
        url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"
      }
    ]
  },
  {
    _id: "jobs-007",
    name: "Nghề nghiệp",
    ordexIndex: 7,
    isUnlock: false,
    url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop",
    progress: 0,
    words: [
      {
        _id: "word-031",
        word: "teacher",
        phonetic: "/ˈtiː.tʃər/",
        partOfSpeech: "noun",
        definition: "A person who teaches",
        vietnamese: "giáo viên",
        example: "My mother is a teacher.",
        url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"
      },
      {
        _id: "word-032",
        word: "doctor",
        phonetic: "/ˈdɒk.tər/",
        partOfSpeech: "noun",
        definition: "A person who practices medicine",
        vietnamese: "bác sĩ",
        example: "The doctor examined the patient.",
        url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"
      },
      {
        _id: "word-033",
        word: "engineer",
        phonetic: "/ˌen.dʒɪˈnɪər/",
        partOfSpeech: "noun",
        definition: "A person who designs and builds things",
        vietnamese: "kỹ sư",
        example: "My brother is a software engineer.",
        url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"
      },
      {
        _id: "word-034",
        word: "chef",
        phonetic: "/ʃef/",
        partOfSpeech: "noun",
        definition: "A professional cook",
        vietnamese: "đầu bếp",
        example: "The chef prepared a delicious meal.",
        url: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop"
      },
      {
        _id: "word-035",
        word: "artist",
        phonetic: "/ˈɑː.tɪst/",
        partOfSpeech: "noun",
        definition: "A person who creates art",
        vietnamese: "nghệ sĩ",
        example: "She is a talented artist.",
        url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"
      }
    ]
  },
  {
    _id: "transport-008",
    name: "Giao thông",
    ordexIndex: 8,
    isUnlock: false,
    url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop",
    progress: 0,
    words: [
      {
        _id: "word-036",
        word: "car",
        phonetic: "/kɑːr/",
        partOfSpeech: "noun",
        definition: "A road vehicle with four wheels",
        vietnamese: "xe hơi",
        example: "I drive my car to work every day.",
        url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"
      },
      {
        _id: "word-037",
        word: "bus",
        phonetic: "/bʌs/",
        partOfSpeech: "noun",
        definition: "A large vehicle for carrying passengers",
        vietnamese: "xe buýt",
        example: "I take the bus to school.",
        url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"
      },
      {
        _id: "word-038",
        word: "train",
        phonetic: "/treɪn/",
        partOfSpeech: "noun",
        definition: "A series of connected railway cars",
        vietnamese: "tàu hỏa",
        example: "The train arrives at 3 PM.",
        url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"
      },
      {
        _id: "word-039",
        word: "bicycle",
        phonetic: "/ˈbaɪ.sɪ.kəl/",
        partOfSpeech: "noun",
        definition: "A two-wheeled vehicle powered by pedals",
        vietnamese: "xe đạp",
        example: "I ride my bicycle in the park.",
        url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"
      },
      {
        _id: "word-040",
        word: "airplane",
        phonetic: "/ˈeə.pleɪn/",
        partOfSpeech: "noun",
        definition: "A powered flying vehicle with fixed wings",
        vietnamese: "máy bay",
        example: "The airplane took off smoothly.",
        url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"
      }
    ]
  }
]

export default vocabularyTopics