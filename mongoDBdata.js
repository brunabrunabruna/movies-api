db.movies.updateOne(
  { _id: ObjectId("64e5d9e679ededeb513f7591") },
  {
    $set: {
      Description:
        "A young FBI cadet must receive the help of an incarcerated and manipulative cannibal killer.",
    },
  }
);
///// MOVIES

let movie1 = {
  title: "Spirited Away",
  description:
    "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches and spirits, a world where humans are changed into beasts.",
  genre: {
    name: "Adventure",
    Description:
      "Setting plays an important role in an adventure film, sometimes itself acting as a character in the narrative. They are typically set in far away lands, such as lost continents or other exotic locations. They may also be set in a period background and may include adapted stories of historical or fictional adventure heroes within the historical context. Such struggles and situations that confront the main characters include things like battles, piracy, rebellion, and the creation of empires and kingdoms.",
  },
  director: {
    name: "Hayao Miyazaki",
    bio: "Hayao Miyazaki is 1 of Japan's greatest animation directors. The entertaining plots, compelling characters & breathtaking animation in his films have earned him international renown from critics as well as public recognition within Japan.",
    birth: "05-01-1941",
    death: "",
  },
  imagepath:
    "https://www.imdb.com/title/tt0245429/mediaviewer/rm4207852801/?ref_=tt_ov_i",
  featured: true,
};

let movie2 = {
  title: "The Wind Rises",
  description:
    "A look at the life of Jiro Horikoshi, the man who designed Japanese fighter planes during World War II.",
  genre: {
    name: "Biography",
    Description:
      "A biographical film or biopic is a film that dramatizes the life of a non-fictional or historically-based person or people. Such films show the life of a historical person and the central character's real name is used.[2] They differ from docudrama films and historical drama films in that they attempt to comprehensively tell a single person's life story or at least the most historically important years of their lives.",
  },
  director: {
    name: "Hayao Miyazaki",
    bio: "Hayao Miyazaki is 1 of Japan's greatest animation directors. The entertaining plots, compelling characters & breathtaking animation in his films have earned him international renown from critics as well as public recognition within Japan.",
    birth: "05-01-1941",
    death: "",
  },
  imagepath:
    "https://www.imdb.com/title/tt2013293/mediaviewer/rm2695221760/?ref_=tt_ov_i",
  featured: false,
};

let movie3 = {
  title: "My Neighbour Totoro",
  description:
    "When two girls move to the country to be near their ailing mother, they have adventures with the wondrous forest spirits who live nearby.",
  genre: {
    name: "Fantasy",
    Description:
      "Fantasy is a genre of speculative fiction involving magical elements, typically set in a fictional universe and usually inspired by mythology or folklore. The term 'fantasy' can also be used to describe a 'work of this genre'usually literary.",
  },
  director: {
    name: "Hayao Miyazaki",
    bio: "Hayao Miyazaki is 1 of Japan's greatest animation directors. The entertaining plots, compelling characters & breathtaking animation in his films have earned him international renown from critics as well as public recognition within Japan.",
    birth: "05-01-1941",
    death: "",
  },
  imagepath:
    "https://www.imdb.com/title/tt0245429/mediaviewer/rm4207852801/?ref_=tt_ov_i",
  featured: true,
};

let movie4 = {
  title: "Tales from Earthsea",
  description:
    "In a mythical land, a man and a young boy investigate a series of unusual occurrences.",
  genre: {
    name: "Adventure",
    Description:
      "Setting plays an important role in an adventure film, sometimes itself acting as a character in the narrative. They are typically set in far away lands, such as lost continents or other exotic locations. They may also be set in a period background and may include adapted stories of historical or fictional adventure heroes within the historical context. Such struggles and situations that confront the main characters include things like battles, piracy, rebellion, and the creation of empires and kingdoms.",
  },
  director: {
    name: "Gorô Miyazaki",
    bio: "Graduated from Shinshu University, Faculty of Agriculture, Goro Miyazaki started his career as a construction consultant, and he designed parks and public institutions. To avoid to be compared to his father, the world-famous filmmaker Hayao Miyazaki, he initially didn't want to work on anything related to animation. However, the turning point came in 1990s when he got involved in the construction of the Studio Ghibli Museum in Mitaka, Tokyo.",
    birth: "21-01-1967",
    death: "",
  },
  imagepath:
    "https://www.imdb.com/title/tt0495596/mediaviewer/rm601537793/?ref_=tt_ov_i",
  featured: false,
};

let movie5 = {
  title: "Kiki's Delivery Service",
  description:
    "A young witch, on her mandatory year of independent life, finds fitting into a new community difficult while she supports herself by running an air courier service.",
  genre: {
    name: "Fantasy",
    Description:
      "Fantasy is a genre of speculative fiction involving magical elements, typically set in a fictional universe and usually inspired by mythology or folklore. The term 'fantasy' can also be used to describe a 'work of this genre'usually literary.",
  },
  director: {
    name: "Hayao Miyazaki",
    bio: "Hayao Miyazaki is 1 of Japan's greatest animation directors. The entertaining plots, compelling characters & breathtaking animation in his films have earned him international renown from critics as well as public recognition within Japan.",
    birth: "05-01-1941",
    death: "",
  },
  imagepath:
    "https://www.imdb.com/title/tt0097814/mediaviewer/rm315211009/?ref_=tt_ov_i",
  featured: true,
};

let movie6 = {
  title: "Princess Mononoke",
  description:
    "On a journey to find the cure for a Tatarigami's curse, Ashitaka finds himself in the middle of a war between the forest gods and Tatara, a mining colony. In this quest he also meets San, the Mononoke Hime.",
  genre: {
    name: "Adventure",
    Description:
      "Setting plays an important role in an adventure film, sometimes itself acting as a character in the narrative. They are typically set in far away lands, such as lost continents or other exotic locations. They may also be set in a period background and may include adapted stories of historical or fictional adventure heroes within the historical context. Such struggles and situations that confront the main characters include things like battles, piracy, rebellion, and the creation of empires and kingdoms.",
  },
  director: {
    name: "Hayao Miyazaki",
    bio: "Hayao Miyazaki is 1 of Japan's greatest animation directors. The entertaining plots, compelling characters & breathtaking animation in his films have earned him international renown from critics as well as public recognition within Japan.",
    birth: "05-01-1941",
    death: "",
  },
  imagepath:
    "https://www.imdb.com/title/tt0119698/mediaviewer/rm2697706753/?ref_=tt_ov_i",
  featured: false,
};

let movie7 = {
  title: "Howl's Moving Castle",
  description:
    "When an unconfident young woman is cursed with an old body by a spiteful witch, her only chance of breaking the spell lies with a self-indulgent yet insecure young wizard and his companions in his legged, walking castle.",
  genre: {
    name: "Fantasy",
    Description:
      "Fantasy is a genre of speculative fiction involving magical elements, typically set in a fictional universe and usually inspired by mythology or folklore. The term 'fantasy' can also be used to describe a 'work of this genre'usually literary.",
  },
  director: {
    name: "Hayao Miyazaki",
    bio: "Hayao Miyazaki is 1 of Japan's greatest animation directors. The entertaining plots, compelling characters & breathtaking animation in his films have earned him international renown from critics as well as public recognition within Japan.",
    birth: "05-01-1941",
    death: "",
  },
  imagepath:
    "https://www.imdb.com/title/tt0347149/mediaviewer/rm2426685696/?ref_=tt_ov_i",
  featured: false,
};

let movie8 = {
  title: "When Marnie Was There",
  description:
    "Due to 12-year-old Anna's asthma, she's sent to stay with relatives of her guardian in the Japanese countryside. She likes to be alone, sketching. She befriends Marnie. Who is the mysterious, blonde Marnie?",
  genre: {
    name: "Drama",
    Description:
      "The term 'drama' comes from a Greek word meaning 'deed' or 'act' (Classical Greek: δρᾶμα, drâma), which is derived from 'I do' (Classical Greek: δράω, dráō). The two masks associated with drama represent the traditional generic division between comedy and tragedy.",
  },
  director: {
    name: "Hiromasa Yonebayashi",
    bio: "Hiromasa Yonebayashi was born on 10 July 1973 in Nonoichi, Japan. He is a director and writer, known for When Marnie Was There (2014), Arrietty (2010) and Mary and the Witch's Flower (2017).",
    birth: "10-07-1973",
    death: "",
  },
  imagepath:
    "https://www.imdb.com/title/tt3398268/mediaviewer/rm2969050624/?ref_=tt_ov_i",
  featured: true,
};

let movie9 = {
  title: "Nausicaä of the Valley of the Wind",
  description:
    "Warrior and pacifist Princess Nausicaä desperately struggles to prevent two warring nations from destroying themselves and their dying planet.",
  genre: {
    name: "Adventure",
    Description:
      "Setting plays an important role in an adventure film, sometimes itself acting as a character in the narrative. They are typically set in far away lands, such as lost continents or other exotic locations. They may also be set in a period background and may include adapted stories of historical or fictional adventure heroes within the historical context. Such struggles and situations that confront the main characters include things like battles, piracy, rebellion, and the creation of empires and kingdoms.",
  },
  director: {
    name: "Hayao Miyazaki",
    bio: "Hayao Miyazaki is 1 of Japan's greatest animation directors. The entertaining plots, compelling characters & breathtaking animation in his films have earned him international renown from critics as well as public recognition within Japan.",
    birth: "05-01-1941",
    death: "",
  },
  imagepath:
    "https://www.imdb.com/title/tt0087544/mediaviewer/rm2150611969/?ref_=tt_ov_i",
  featured: false,
};

let movie10 = {
  title: "The Cat Returns",
  description:
    "After helping a cat, a seventeen-year-old girl finds herself involuntarily engaged to a cat Prince in a magical world where her only hope of freedom lies with a dapper cat statuette come to life.",
  genre: {
    name: "Adventure",
    Description:
      "After helping a cat, a seventeen-year-old girl finds herself involuntarily engaged to a cat Prince in a magical world where her only hope of freedom lies with a dapper cat statuette come to life.",
  },
  director: {
    name: "Hiroyuki Morita",
    bio: "  Hiroyuki Morita was born on 26 June 1964 in Fukuoka, Japan. He is a director, known for The Cat Returns (2002), Akira (1988) and Perfect Blue (1997).",
    birth: "  26-06-1964",
    death: "",
  },
  imagepath:
    "https://www.imdb.com/title/tt0347618/mediaviewer/rm4040736001/?ref_=tt_ov_i",
  featured: false,
};

db.movies.insertMany([
  movie2,
  movie3,
  movie4,
  movie5,
  movie6,
  movie7,
  movie8,
  movie9,
  movie10,
]);
db.movies.insertOne({
  title: "Spirited Away",
  description:
    "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches and spirits, a world where humans are changed into beasts.",
  genre: {
    name: "Adventure",
    Description:
      "Setting plays an important role in an adventure film, sometimes itself acting as a character in the narrative. They are typically set in far away lands, such as lost continents or other exotic locations. They may also be set in a period background and may include adapted stories of historical or fictional adventure heroes within the historical context. Such struggles and situations that confront the main characters include things like battles, piracy, rebellion, and the creation of empires and kingdoms.",
  },
  director: {
    name: "Hayao Miyazaki",
    bio: "Hayao Miyazaki is 1 of Japan's greatest animation directors. The entertaining plots, compelling characters & breathtaking animation in his films have earned him international renown from critics as well as public recognition within Japan.",
    birth: "05-01-1941",
    death: "",
  },
  imagepath:
    "https://www.imdb.com/title/tt0245429/mediaviewer/rm4207852801/?ref_=tt_ov_i",
  featured: true,
});
/// USERS
let user1 = {
  username: "bruna123",
  password: "djsflks",
  email: "bruna@email.com",
  birthday: new Date("2000-01-21"),
  favoriteMovies:[]
};
let user2 = {
  username: "flix",
  password: "fsdssdfks",
  email: "flix@email.com",
  birthday: new Date("1950-03-02"),
  favoriteMovies:[]
};
let user3 = {
  username: "yo123",
  password: "28743hz",
  email: "drlgjg@email.com",
  birthday: new Date("2007-11-21"),
  favoriteMovies:[]
};
let user4 = {
  username: "testuser",
  password: "KHKSJFH",
  email: "tetstttt@email.com",
  birthday: new Date("1963-07-07"),
  favoriteMovies:[]
};
let user5 = {
  username: "nonamee",
  password: "112jk3",
  email: "floooo@email.com",
  birthday: new Date("1980-03-25"),
  favoriteMovies:[]
};


db.users.insertMany([user2,user3,user4,user5])

db.movies.find({ title: "Spirited Away" });
db.movies.find({ title: "Spirited Away" });
db.movies.insertMany({
  movie1,
  movie2,
  movie3,
  movie4,
  movie5,
  movie6,
  movie7,
  movie8,
  movie9,
  movie10,
});

db.movies.find({
  director: { name: "Hayao Miyazaki" },
  genre: { name: "Adventure" },
});

db.movies.find({
  "director.name": "Hayao Miyazaki",
  "genre.name": "Adventure",
});



Finally, write a "DELETE" query to delete a certain user, by username.


db.movies.updateMany({"director.name":"Hayao Miyazaki"},{$set: {"director.bio": "Hayao Miyazaki is one of Japan's greatest animation directors. The entertaining plots, compelling characters & breathtaking animation in his films have earned him international renown from critics as well as public recognition within Japan"}})