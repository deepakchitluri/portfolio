import pro1 from "../assets/imagebg1.png"
import pro2 from "../assets/imagebg2.jpeg"
import pro3 from "../assets/jarvis.jpg"


const WorkCardData=[
    {
        imgsrc:pro1,
        title:"Wordler game using Python",
        text:"The rules are very simple: You need to guess the hidden word (from 4 to 11 letters) in 6 tries. To get started, just type any word on the first line. If the letter is guessed correctly and is in the correct place, it will be highlighted in green, if the letter is in the word, but in the wrong place - in yellow, and if the letter is not in the word, it will remain gray. Can you guess the hidden word in 6 tries?",
        view:"https://www.google.co.in",
        source:"https://github.com/deepakchitluri/wordler"
    },
    {
        imgsrc:pro2,
        title:"ChatByMe",
        text:`Private chat app is mainly built to chat with our friends privately and the people who enter into the page can chat with others. chats wont be stored in the database so no problem of privacy.Technologies that includes HTML, CSS, JAVASCRIPT, NODE.JS, EXPRESS, SOCKET.IO are used for the project. this project is useful for private chat with your buddies and chill.`,
        view:"https://www.google.co.in",
        source:"https://github.com/deepakchitluri/chatbyme"
    },
    {
        imgsrc:pro3,
        title:"Jarvis Personal Assistant",
        text:`Jarvis assistant is a personal assistant and takes command through voice using speech recognition module and can do many tasks such as searching in internet,playing songs,opening files It can send emails on your behalf. It can play music for you. It can do Wikipedia searches for you. It is capable of opening your code editor or IDE with a single voice command.`,
        view:"https://www.google.co.in",
        source:"https://github.com/deepakchitluri/jarvis"
    }
]
export default WorkCardData;