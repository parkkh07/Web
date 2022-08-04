const quotes = [
    {
        quote : "Nobody can make you feel inferior without your permission.",
        author : "Eleanor Roosevelt"

    },
    {
        quote : "You can never plan the future by the past.",
        author : "Edmund Burke"
    },
    {
        quote : "Take into account that great love and great achievements involve great risk.",
        author : "Dalai Lama"
    },
    {
        quote : "Lost time is never found again.",
        author : "Benjamin Franklin"
    },
    {
        quote : "He that respects himself is safe from others.",
        author : "Henry Wadsworth Longfellow"
    },
    {
        quote : "Your time is limited, so don’t waste it living someone else’s life.",
        author : "Steve Jobs"
    },
    {
        quote : "Don’t let the noise of others’ opinions drown out your own inner voice.",
        author : "Steve Jobs"
    },
    {
        quote : "In three words I can sum up everything I’ve learned about life: it goes on.",
        author : "Robert Frost"
    },
    {
        quote : "Don’t take life too seriously. You’ll never get out of it alive.",
        author : "Elbert Hubbard"
    },
    {
        quote : "The biggest risk is not taking any risk.",
        author : "Mark Zuckerberg"
    },
    {
        quote : "Educating the mind without educating the heart is no education at all.",
        author : "Aristotle"
    },
    {
        quote : "In the end, it’s not the years in your life that count. It’s the life in your years.",
        author : "Abraham Lincoln"
    },
    {
        quote : "There is more to life than increasing its speed.",
        author : "Mahatma Gandhi"
    },
    {
        quote : "Only a life lived for others is a life worthwhile.",
        author : "Albert Einstein"
    },
    {
        quote : "Each person must live their life as a model for others.",
        author : "Rosa Parks"
    },
    {
        quote : "The biggest adventure you can take is to live the life of your dreams.",
        author : "Oprah Winfrey"
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
