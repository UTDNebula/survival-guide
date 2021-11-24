const express = require("express");
const app = express();
const pug = require("pug");
const fs = require("fs");
const helper = require("./helper.js");

// set express to parse JSON data in POST requests:
app.use(express.json({limit: '40mb'}));

//app.use(express.urlencoded({extended: true}));

app.use("*", function(req, res, next) {
  // for all pages, set content-security-policy to disallow inline scripting and styling:
  res.setHeader("content-security-policy", "default-src 'self'");
  // for all pages, disable content sniffing:
  res.setHeader("x-content-type-options", "nosniff");
  next();
});

// Look in public folder for content by default:
app.use(express.static("public"));

// Page data:
const data = require("./content.json");
let pages = data.pages;
let tags = data.tags;
const guidepage = pug.compileFile("backend/templates/pages/guide.pug");
const guideeditorpage = pug.compileFile("backend/templates/pages/guideeditor.pug");

app.post("/page", function(req, res, next) {
  let b = req.body;
  for (let i = 0; i < pages.length; i++) {
    if (b.id === pages[i].id) {
      if (b.title && /^(\/[a-z0-9\-]+)+$/.test(b.path)) {
        if (b.tags.every(tag => tags.includes(tag))) {
          pages[i] = {...b, content: []};

          for (let content of b.content) {
            if (content.type === "image") {
              let file = content.file;
              if (content.file.slice(0, 10) === "data:image") {
                file = "/images/placeholder.png";
                const type = content.file.slice(11, content.file.indexOf(';'));
                if (type === "png" || type === "jpeg" || type === "gif") {
                  const encodeddata = content.file.slice(content.file.indexOf(','));
                  file = `/images/${data.images++}.${type}`;
                  fs.promises.writeFile("public" + file, encodeddata, {encoding: "base64"}).catch(err => console.log(err));
                }
              }
              pages[i].content.push({
                type: "image",
                file: file,
                alt: content.alt,
                width: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].includes(content.width) ? content.width : 3,
                position: ["mx-auto", "float-left", "float-right"].includes(content.position) ? content.position : "float-right"
              });
            } else if (content.type === "heading" || content.type === "subheading" || content.type === "paragraph") {
              pages[i].content.push({type: content.type, text: helper.purge(content.text)});
            }
          }

          fs.promises.writeFile("backend/content.json", JSON.stringify(data));

        }
      }
    }
  }
  setTimeout(() => res.send("Done"), 100);
});

app.get(/^\/.*\/?$/, function(req, res, next) {
  const url = req.url[req.url.length - 1] === '/' ? req.url.slice(0, -1) : req.url;
  for (let p of pages) {
    if (url === "/" + p.id || url === p.path) {
      res.send(guidepage({data: p}));
      return 0;
    }
  }
  next();
});

app.get(/^\/.*\/edit\/?$/, function(req, res, next) {
  // The edit page must allow for users to select images on their filesystem and view them on the page
  // For that, we can convert the images to data: URL's, but we need to update the CSP policy
  res.setHeader("content-security-policy", "default-src 'self'; img-src 'self' data:");
  const url = req.url[req.url.length - 1] === '/' ? req.url.slice(0, -6) : req.url.slice(0, -5);
  for (let p of pages) {
    if (url === "/" + p.id || url === p.path) {
      res.send(guideeditorpage({data: p, tags}));
      return 0;
    }
  }
  next();
});

app.get("*", function(req, res) {
  const adminpage = pug.compileFile("backend/templates/pages/admin.pug");
  res.send(adminpage({data: pages}));
  /*
  let links = "";
  for (let page of data.pages) {
    links += `<a href="${page.path}">${page.title}</a>&nbsp;&nbsp;<a href="${page.path}/edit">[edit]</a><br>`;
  }
  res.send(links);*/
});

app.listen(4000, () => console.log("Server running on 4000"));
