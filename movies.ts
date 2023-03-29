/* This data is taken from this repo: https://gist.github.com/saniyusuf/406b843afdfb9c6a86e25753fe2761f4 */

export type MovieType = typeof movies_data[0];

export const movies_data = [
  {
    title: "Avatar",
    plot: "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    image:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjEyOTYyMzUxNl5BMl5BanBnXkFtZTcwNTg0MTUzNA@@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
    lang: "English, Spanish",
    type: "movie",
    rating: "7.9",
    genre: "Action, Adventure, Fantasy",
  },
  {
    title: "I Am Legend",
    plot: "Years after a plague kills most of humanity and transforms the rest into monsters, the sole survivor in New York City struggles valiantly to find a cure.",
    image:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTI0NTI4NjE3NV5BMl5BanBnXkFtZTYwMDA0Nzc4._V1_.jpg",
    lang: "English",
    type: "movie",
    rating: "7.2",
    genre: "Drama, Horror, Sci-Fi",
  },
  {
    title: "300",
    plot: "King Leonidas of Sparta and a force of 300 men fight the Persians at Thermopylae in 480 B.C.",
    image:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMwNTg5MzMwMV5BMl5BanBnXkFtZTcwMzA2NTIyMw@@._V1_SX1777_CR0,0,1777,937_AL_.jpg",
    lang: "English",
    type: "movie",
    rating: "7.7",
    genre: "Action, Drama, Fantasy",
  },
  {
    title: "The Avengers",
    plot: "Earth's mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity.",
    image:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTA0NjY0NzE4OTReQTJeQWpwZ15BbWU3MDczODg2Nzc@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
    lang: "English, Russian",
    type: "movie",
    rating: "8.1",
    genre: "Action, Sci-Fi, Thriller",
  },
  {
    title: "The Wolf of Wall Street",
    plot: "Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.",
    image:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNDIwMDIxNzk3Ml5BMl5BanBnXkFtZTgwMTg0MzQ4MDE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
    lang: "English, French",
    type: "movie",
    rating: "8.2",
    genre: "Biography, Comedy, Crime",
  },
  {
    title: "Interstellar",
    plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    image:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA3NTEwOTMxMV5BMl5BanBnXkFtZTgwMjMyODgxMzE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
    lang: "English",
    type: "movie",
    rating: "8.6",
    genre: "Adventure, Drama, Sci-Fi",
  },
  {
    title: "Game of Thrones",
    plot: "While a civil war brews between several noble families in Westeros, the children of the former rulers of the land attempt to rise up to power. Meanwhile a forgotten race, bent on destruction, plans to return after thousands of years in the North.",
    image:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNDc1MGUyNzItNWRkOC00MjM1LWJjNjMtZTZlYWIxMGRmYzVlXkEyXkFqcGdeQXVyMzU3MDEyNjk@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
    lang: "English",
    type: "series",
    rating: "9.5",
    genre: "Adventure, Drama, Fantasy",
  },
  {
    title: "Vikings",
    plot: "The world of the Vikings is brought to life through the journey of Ragnar Lothbrok, the first Viking to emerge from Norse legend and onto the pages of history - a man on the edge of myth.",
    image:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjM5MTM1ODUxNV5BMl5BanBnXkFtZTgwNTAzOTI2ODE@._V1_.jpg",
    lang: "English, Old English, Norse, Old, Latin",
    type: "series",
    rating: "8.6",
    genre: "Action, Drama, History",
  },
  {
    title: "Gotham",
    plot: "The story behind Detective James Gordon's rise to prominence in Gotham City in the years before Batman's arrival.",
    image:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNDI3ODYyODY4OV5BMl5BanBnXkFtZTgwNjE5NDMwMDI@._V1_SY1000_SX1500_AL_.jpg",
    lang: "English",
    type: "series",
    rating: "8.0",
    genre: "Action, Crime, Drama",
  },
  {
    title: "Power",
    plot: 'James "Ghost" St. Patrick, a wealthy New York night club owner who has it all, catering for the city\'s elite and dreaming big, lives a double life as a drug kingpin.',
    image:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc2ODg0MzMzM15BMl5BanBnXkFtZTgwODYxODA5NTE@._V1_SY1000_SX1500_AL_.jpg",
    lang: "English",
    type: "series",
    rating: "8.0",
    genre: "Crime, Drama",
  },
  {
    title: "Narcos",
    plot: "A chronicled look at the criminal exploits of Colombian drug lord Pablo Escobar.",
    image:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTk2MDMzMTc0MF5BMl5BanBnXkFtZTgwMTAyMzA1OTE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
    lang: "English, Spanish",
    type: "series",
    rating: "8.9",
    genre: "Biography, Crime, Drama",
  },
  {
    title: "Breaking Bad",
    plot: "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's financial future.",
    image:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTgyMzI5NDc5Nl5BMl5BanBnXkFtZTgwMjM0MTI2MDE@._V1_SY1000_CR0,0,1498,1000_AL_.jpg",
    lang: "English, Spanish",
    type: "series",
    rating: "9.5",
    genre: "Crime, Drama, Thriller",
  },
  {
    title: "Doctor Strange",
    plot: "After his career is destroyed, a brilliant but arrogant and conceited surgeon gets a new lease on life when a sorcerer takes him under her wing and trains him to defend the world against evil.",
    image:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjM3ODc1ODI5Ml5BMl5BanBnXkFtZTgwODMzMDY3OTE@._V1_.jpg",
    lang: "English",
    type: "movie",
    rating: "7.3",
    genre: "Action, Adventure, Fantasy",
  },
  {
    title: "Rogue One: A Star Wars Story",
    plot: "The Rebellion makes a risky move to steal the plans to the Death Star, setting up the epic saga to follow.",
    image:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjE3MzA4Nzk3NV5BMl5BanBnXkFtZTgwNjAxMTc1ODE@._V1_SX1777_CR0,0,1777,744_AL_.jpg",
    lang: "English",
    type: "movie",
    rating: "8.1",
    genre: "Action, Adventure, Sci-Fi",
  },
  {
    title: "Assassin's Creed",
    plot: "When Callum Lynch explores the memories of his ancestor Aguilar and gains the skills of a Master Assassin, he discovers he is a descendant of the secret Assassins society.",
    image:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BN2EyYzgyOWEtNTY2NS00NjRjLWJiNDYtMWViMjg5MWZjYjgzXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_.jpg",
    lang: "English",
    type: "movie",
    rating: "9.4",
    genre: "Action, Adventure, Fantasy",
  },
  {
    title: "Luke Cage",
    plot: "Given superstrength and durability by a sabotaged experiment, a wrongly accused man escapes prison to become a superhero for hire.",
    image:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjMxNjc1NjI0NV5BMl5BanBnXkFtZTgwNzA0NzY0ODE@._V1_SY1000_CR0,0,1497,1000_AL_.jpg",
    lang: "English",
    type: "series",
    rating: "6.9",
    genre: "Action, Crime, Drama",
  },
];
