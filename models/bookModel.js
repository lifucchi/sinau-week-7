const books = [
  {
    id: "1",
    title: "Omniscient Reader's Viewpoint",
    author: "Sing-Shong",
    genre: "Fantasy",
    year: 2018,
    description: "Kim Dokja finds himself in the world of a web novel he loved, trying to survive and change its events.",
  },
  {
    id: "2",
    title: "Solo Leveling",
    author: "Chugong",
    genre: "Action",
    year: 2016,
    description: "Sung Jin-Woo, a weak hunter, transforms into the world's strongest through a mysterious leveling system.",
  },
  {
    id: "3",
    title: "The Second Coming of Gluttony",
    author: "Ro Yu-jin",
    genre: "Fantasy",
    year: 2017,
    description: "Seol Jihu is reborn with memories of a tragic life and becomes a key player in a multidimensional war.",
  },
  {
    id: "4",
    title: "Trash of the Count's Family",
    author: "Yoo Ryeo Han",
    genre: "Fantasy",
    year: 2018,
    description: "Cale Henituse wakes up in the body of a side character in a novel and decides to live a peaceful life.",
  },
  {
    id: "5",
    title: "The Beginning After the End",
    author: "TurtleMe",
    genre: "Fantasy",
    year: 2017,
    description: "King Grey, reincarnated in a magical world, seeks a new purpose and confronts his past.",
  },
  {
    id: "6",
    title: "Overgeared",
    author: "Park Saenal",
    genre: "Gaming",
    year: 2014,
    description: "Shin Youngwoo, once unlucky in a virtual reality game, becomes a legendary blacksmith and hero.",
  },
  {
    id: "7",
    title: "Reincarnation of the Strongest Sword God",
    author: "Lucky Old Cat",
    genre: "Gaming",
    year: 2012,
    description: "Shi Feng dominates the virtual gaming world using his past life’s experience and skills.",
  },
  {
    id: "8",
    title: "Leveling With the Gods",
    author: "Black Ajin",
    genre: "Fantasy",
    year: 2018,
    description: "Kim Yuwon faces gods and mythical beings to reverse a catastrophic apocalypse.",
  },
  {
    id: "9",
    title: "I'm the Max-Level Newbie",
    author: "Maslow",
    genre: "Gaming",
    year: 2021,
    description: "Kang Jin-Hyuk becomes the strongest player in a game he mastered after it turns into reality.",
  },
  {
    id: "10",
    title: "Return of the Mount Hua Sect",
    author: "Biga",
    genre: "Martial Arts",
    year: 2019,
    description: "Chung Myung, a reincarnated martial artist, seeks to restore the glory of the Mount Hua Sect.",
  },
];

exports.getAllBooks = () => books;

exports.getBookById = (id) => books.find((book) => book.id === id);

exports.addBook = (bookData) => {
  const newBook = { id: (books.length + 1).toString(), ...bookData };
  books.push(newBook);
  return newBook;
};
