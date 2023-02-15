let quotes = [
  {
    id: 1,
    quote: "Life isn’t about getting and having, it’s about giving and being.",
    author: "Kevin Kruse",
  },
  {
    id: 8,
    quote:
      "The most difficult thing is the decision to act, the rest is merely tenacity.",
    author: "Amelia Earhart",
  },
  {
    id: 9,
    quote: "Every strike brings me closer to the next home run.",
    author: "Babe Ruth",
  },
  {
    id: 10,
    quote: "Definiteness of purpose is the starting point of all achievement.",
    author: "W. Clement Stone",
  },
  {
    id: 11,
    quote: "We must balance conspicuous consumption with conscious capitalism.",
    author: "Kevin Kruse",
  },
  {
    id: 12,
    quote: "Life is what happens to you while you’re busy making other plans.",
    author: "John Lennon",
  },
  {
    id: 13,
    quote: "We become what we think about.",
    author: "Earl Nightingale",
  },
  {
    id: 14,
    quote:
      "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover.",
    author: "Mark Twain",
  },
  {
    id: 15,
    quote: "Life is 10% what happens to me and 90% of how I react to it.",
    author: "Charles Swindoll",
  },
  {
    id: 16,
    quote:
      "The most common way people give up their power is by thinking they don’t have any.",
    author: "Alice Walker",
  },
  {
    id: 17,
    quote: "The mind is everything. What you think you become.",
    author: "Buddha",
  },
  {
    id: 18,
    quote:
      "The best time to plant a tree was 20 years ago. The second best time is now.",
    author: "Chinese Proverb",
  },
  {
    id: 19,
    quote: "An unexamined life is not worth living.",
    author: "Socrates",
  },
  {
    id: 20,
    quote: "Eighty percent of success is showing up.",
    author: "Woody Allen",
  },
  {
    id: 21,
    quote:
      "Your time is limited, so don’t waste it living someone else’s life.",
    author: "Steve Jobs",
  },
  {
    id: 22,
    quote: "Winning isn’t everything, but wanting to win is.",
    author: "Vince Lombardi",
  },
  {
    id: 23,
    quote:
      "I am not a product of my circumstances. I am a product of my decisions.",
    author: "Stephen Covey",
  },
  {
    id: 24,
    quote:
      "Every child is an artist.  The problem is how to remain an artist once he grows up.",
    author: "Pablo Picasso",
  },
  {
    id: 25,
    quote:
      "You can never cross the ocean until you have the courage to lose sight of the shore.",
    author: "Christopher Columbus",
  },
  {
    id: 26,
    quote:
      "I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
    author: "Maya Angelou",
  },
  {
    id: 27,
    quote: "Either you run the day, or the day runs you.",
    author: "Jim Rohn",
  },
  {
    id: 28,
    quote: "Whether you think you can or you think you can’t, you’re right.",
    author: "Henry Ford",
  },
  {
    id: 29,
    quote:
      "The two most important days in your life are the day you are born and the day you find out why.",
    author: "Mark Twain",
  },
  {
    id: 30,
    quote:
      "Whatever you can do, or dream you can, begin it.  Boldness has genius, power and magic in it.",
    author: "Johann Wolfgang von Goethe",
  },
];

let generateQuoteButton = document.querySelector(".generator-btn");
let quoteContainer = document.querySelector(".quote-container");
// console.log(quoteContainer);

function injectQuoteIntoContainer(object) {
  // create the elements
  let pQuote = document.createElement("p");
  let spanDash = document.createElement("span");
  let spanAuthor = document.createElement("span");
  // put content into the created elements
  pQuote.textContent = object.quote;
  spanDash.innerHTML = "&mdash;";
  spanAuthor.textContent = object.author;
  //add attributes to the elements
  pQuote.classList.add("quote");
  spanAuthor.classList.add("author");
  // clear quote container
  quoteContainer.innerHTML = "";
  // add/inject/append the elements to the container
  quoteContainer.append(pQuote);
  quoteContainer.append(spanDash);
  quoteContainer.append(spanAuthor);
}

generateQuoteButton.addEventListener("click", function () {
  console.log("btn clicked");
  let chosenQuote = quotes[Math.floor(Math.random() * quotes.length - 1)];
  injectQuoteIntoContainer(chosenQuote);
});

console.log(Math.floor(Math.random() * quotes.length - 1));

// console.log(Math.floor(Math.random() * 29));

// window.addEventListener("resize", function () {
//   document.body.style.backgroundColor = "green";
//   console.log("Resizing window........");
// });

// this keyword in js
