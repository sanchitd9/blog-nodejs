import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.get("/posts", (req, res) => {
    res.render("posts.ejs");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

const lorem_ipsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Senectus et netus et malesuada fames ac turpis. Quisque non tellus orci ac auctor augue mauris. Orci nulla pellentesque dignissim enim. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Elit at imperdiet dui accumsan sit amet nulla facilisi morbi. Feugiat sed lectus vestibulum mattis ullamcorper velit. Facilisi etiam dignissim diam quis enim. Blandit cursus risus at ultrices mi tempus imperdiet. At augue eget arcu dictum varius duis at. Etiam non quam lacus suspendisse. Nulla malesuada pellentesque elit eget gravida cum. Ac turpis egestas maecenas pharetra convallis posuere morbi leo. Eget felis eget nunc lobortis. Sit amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus. Nisl pretium fusce id velit ut tortor. Nibh sit amet commodo nulla facilisi nullam vehicula ipsum."
const posts = [
    {
        image: "image_1.jpg",
        content: lorem_ipsum
    },
    {
        image: "image_2.jpg",
        content: lorem_ipsum
    },
    {
        image: "image_3.jpg",
        content: lorem_ipsum
    },
    {
        image: "image_4.jpg",
        content: lorem_ipsum
    },
    {
        image: "image_5.jpg",
        content: lorem_ipsum
    },
    {
        image: "image_6.jpg",
        content: lorem_ipsum
    }
]

const featured_posts = posts.slice(0, 4);