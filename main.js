import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.locals = {
        "featured_content": featured_posts
    };
    res.render("index.ejs");
});

app.get("/posts", (req, res) => {
    res.locals = {
        "all_posts": posts
    };
    res.render("posts.ejs");
});

app.get("/post_:id", (req, res) => {
    const result = posts.filter((post) => post.id === parseInt(req.params.id));
    res.locals = {
      "post": result[0]
    };
    res.render("post.ejs");
});

app.get("/create", (req, res) => {
   res.render("create_post.ejs");
});

app.post("/create_post", (req, res) => {
    var new_id = posts.length + 1;
    var new_title = req.body["post-title"]
    var new_content = req.body["blog-content"];
    posts.push({
        id: new_id,
        image: "image_1.jpg",
        title: new_title,
        content: new_content
    });
    res.redirect("/posts");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

const lorem_ipsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Senectus et netus et malesuada fames ac turpis. Quisque non tellus orci ac auctor augue mauris. Orci nulla pellentesque dignissim enim. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Elit at imperdiet dui accumsan sit amet nulla facilisi morbi. Feugiat sed lectus vestibulum mattis ullamcorper velit. Facilisi etiam dignissim diam quis enim. Blandit cursus risus at ultrices mi tempus imperdiet. At augue eget arcu dictum varius duis at. Etiam non quam lacus suspendisse. Nulla malesuada pellentesque elit eget gravida cum. Ac turpis egestas maecenas pharetra convallis posuere morbi leo. Eget felis eget nunc lobortis. Sit amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus. Nisl pretium fusce id velit ut tortor. Nibh sit amet commodo nulla facilisi nullam vehicula ipsum."
const posts = [
    {
        id: 1,
        image: "image_1.jpg",
        title: "Title",
        content: lorem_ipsum
    },
    {
        id: 2,
        image: "image_2.jpg",
        title: "Title",
        content: lorem_ipsum
    },
    {
        id: 3,
        image: "image_3.jpg",
        title: "Title",
        content: lorem_ipsum
    },
    {
        id: 4,
        image: "image_4.jpg",
        title: "Title",
        content: lorem_ipsum
    },
    {
        id: 5,
        image: "image_5.jpg",
        title: "Title",
        content: lorem_ipsum
    },
    {
        id: 6,
        image: "image_6.jpg",
        title: "Title",
        content: lorem_ipsum
    }
]

const featured_posts = posts.slice(0, 4);