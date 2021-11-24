/*
  guideeditor.js: Goal of this file is to handle all aspects of guide editing functionality and to do it fast
  - depends on templates.js

  The design of this file uses "Event Delegation", the idea of not setting event listeners on target elements directly, but rather
    their ancestors and using bubbling and matching to work with them
*/

// TODO: Finish adding proper comments

const leftpane = $("#leftpane");
const content = $("#content");

function publish() {
  const page = {
    "title": $(content, "#title")?.textContent,
    "path": $(leftpane, "[name=path]:valid")?.value,
    "id": parseInt($(leftpane, "[name=id]").value),
    "lastupdated": new Date().toLocaleString("en-US", {timeZone: "America/Chicago", month: 'long', weekday: 'long', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit'}),
    "tags": [],
    "contributors": $$(content, "contributor-editor span").map(s => s.textContent),
    "content": []
  };
  $$($(leftpane, "#tagselector"), "button").forEach(function(b) {
    if (b.classList.contains("bg-blue-100")) page.tags.push(b.textContent);
  });
  let imagesvalid = true;
  $$(leftpane, "content-editor").forEach(function(s) {
    let section = {
      "type": $(s, "[name=name]").textContent.toLowerCase()
    };
    if (section.type === "image") {
      section.file = $(s, "img").src;
      section.alt = $(s, "img").alt;
      if (!section.alt) imagesvalid = false;
      section.width = parseInt($(s, "[name=size]").value);
      section.position = $(s, "[name=position]").value;
    } else {
      let elem = $(content, "#" + s.getAttribute("id"));
      if (section.type === "heading") elem = elem.children[1];
      section.text = elem.innerHTML;
    }
    page.content.push(section);
  });
  if (!page.title) {alert("Page must have title to publish"); return;}
  if (!page.path) {alert("Page must have a valid URL path set to publish"); return;}
  if (!page.contributors.length) {alert("Page must have at least one contributor to publish"); return;}
  if (!page.content.length) {alert("Cannot publish empty page"); return;}
  if (!imagesvalid) {alert("Every image on page must have an alt text before publishing"); return;}
  const string = JSON.stringify(page);
  if (string.length > 40_000_000) {alert("ERROR 413: Payload Too Large (reduce content size before publishing)"); return;}
  fetch("/page", {
    method: "post",
    headers: {"content-type": "application/json"},
    body: string
  }).then(res => window.location.href = $(leftpane, "[name=path]").value).catch(err => console.log(err));
}

let eid = 1000;
leftpane.addEventListener("click", function(event) {
  let t = event.target;

  if (t.matches("#modifiers *")) { // If target is one of the text modifiers (bold, italics, etc)
    if (t.matches("button *")) t = t.parentNode;
    const selection = window.getSelection();
    // Only modify text if selection length is not 0 and selection not inside top elements (ie. don't style title and contributors)
    if (selection.anchorOffset - selection.focusOffset && !($("#top").contains(selection.anchorNode))) {
      if (t.value === "createLink") { // If modification is to create link
        document.execCommand("unlink");
        const input = $(leftpane, "[name=link]:valid");
        // Only add link if current text in link input is valid (matches good pattern)
        if (input) {
          document.execCommand(t.value, undefined, input.value);
          input.value = ""; // reset link text to empty string on success
        }
      } else { // If modifiction is anything but link, just execute command
        document.execCommand(t.value);
      }
    }
  } else if (t.matches("#tagselector button")) { // If target is a tag selector button, add or remove its highlight status
    t.classList.toggle("bg-blue-100");
  } else if (t.matches("button")) { // If target is any other button
    const editor = t.parentNode.parentNode.parentNode;
    const partner = $(content, "#" + editor.getAttribute("id"));
    const name = t.getAttribute("name");

    switch (name) {
      case "remove": // If remove action, get rid of content-editor and its associated content
        editor.remove();
        partner.remove();
        break;

      case "up": // If up action and element not already on top, move it up 1
        if (editor.previousSibling) {
          editor.parentNode.insertBefore(editor, editor.previousSibling);
          partner.parentNode.insertBefore(partner, partner.previousSibling);
          editor.scrollIntoView({block: "nearest", inline: "nearest"});
        }
        break;

      case "down": // If down action and element not already at bottom, move it down 1
        if (editor.nextSibling) {
          editor.parentNode.insertBefore(editor.nextSibling, editor);
          partner.parentNode.insertBefore(partner.nextSibling, partner);
          editor.scrollIntoView({block: "nearest", inline: "nearest"});
        }
        break;

      case "minimize": // If minimize action, toggle zero height and between [-]/[+]
        t.parentNode.parentNode.classList.toggle("h-0");
        t.textContent = t.textContent[1] === "+" ? "[-]" : "[+]";
        break;

      case "minimizeall": // If minimize all, do likewise but for all content-editor elements
        t.textContent = t.textContent[1] === "+" ? "[-]" : "[+]";
        $$(leftpane, "fieldset").forEach(f => {
          if (t.textContent === "[-]") f.classList.remove("h-0");
          else f.classList.add("h-0");
        });
        $$(leftpane, "[name=minimize]").forEach(m => {
          m.textContent = t.textContent;
        });
        break;

      case "publish": // If publish, perform publishing checks and submission
        publish();
        break;

      case "add": // If add, insert heading/subheading/paragraph/image, both the content and editor
        const con = $(leftpane, "#contenteditorcontainer");
        // use "e" + eid for unique content indexing
        const cetext = `<content-editor class='w-full py-1 block' id='e${eid}'>`;

        switch (t.value) {
          case "heading":
            con.insertAdjacentHTML("beforeend", `${cetext}<span slot="name">Heading</span><span slot="element">h2</span><p class="font-bold text-sm"></p></content-editor>`);
            content.insertAdjacentHTML("beforeend", `<div class="mt-8 relative" id="e${eid}"><a class="absolute text-lg -left-4 text-blue-500 underline" href="#e${eid}">#</a><h2 class="text-lg" contenteditable></h2></div>`);
            break;
          case "subheading":
            con.insertAdjacentHTML("beforeend", `${cetext}<span slot="name">Subheading</span><span slot="element">h4</span><p class="font-bold text-sm"></p></content-editor>`);
            content.insertAdjacentHTML("beforeend", `<h4 class="mt-3" id="e${eid}" contenteditable></h4>`);
            break;
          case "paragraph":
            con.insertAdjacentHTML("beforeend", `${cetext}<span slot="name">Paragraph</span><span slot="element">p</span><p class="text-sm"></p></content-editor>`);
            content.insertAdjacentHTML("beforeend", `<p class="text-sm my-2" id="e${eid}" contenteditable></p>`);
            break;
          case "image":
            con.insertAdjacentHTML("beforeend", `${cetext}<span slot="name">Image</span><span slot="element">img</span><div><image-editor class="w-full my-2"></image-editor></div></content-editor>`);
            content.insertAdjacentHTML("beforeend", `<img id="e${eid}" src="/images/placeholder.png" draggable="false" class="h-auto m-2 z-30 relative w-3/12 float-left">`);
            break;
        }
        eid++; // incremement element index count
        break;
    }
  }
});

leftpane.addEventListener("input", function(event) {
  const t = event.target;
  const name = t.getAttribute("name");

  if (t.matches("image-editor *")) {
    const editor = t.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
    const partner = $(content, "#" + editor.getAttribute("id"));
    const img = t.parentNode.previousSibling;
    const imgclass = partner.getAttribute("class");

    switch (name) {
      case "position":
        partner.setAttribute("class", imgclass.replace(/(mx-auto)|(float-\w+)/, t.value));
        break;

      case "alttext":
        partner.setAttribute("title", t.value);
        partner.setAttribute("alt", t.value);
        img.setAttribute("title", t.value);
        img.setAttribute("alt", t.value);
        break;

      case "size":
        partner.setAttribute("class", imgclass.replace(/w-\d+\/12/, `w-${t.value}/12`));
        break;

      case "filename":
        const fr = new FileReader();
        fr.addEventListener("load", function() {
          img.setAttribute("src", fr.result);
          partner.setAttribute("src", fr.result);
        });
        fr.readAsDataURL(t.files[0]);
        break;
    }

  } else if (t.matches("[name=path]:valid")) {
    const breadcrumbs = $(content, "#breadcrumbs");
    breadcrumbs.innerHTML = "";
    const sections = t.value.split('/').slice(1, -1);
    let pstring = "";
    for (let s of sections) {
      pstring += `/${s}`;
      breadcrumbs.insertAdjacentHTML("beforeend", `<a href="${pstring}">${s.replace(/-/g, " ").toUpperCase()}</a><span>&nbsp;&gt;&nbsp;</span>`);
    }
  }
});

let dragged = null;
let draggedpartner = null;
leftpane.addEventListener("dragstart", function(event) {
  const t = event.target;
  if (t.matches("content-editor legend")) {
    dragged = t.parentNode.parentNode;
    draggedpartner = $(content, "#" + dragged.getAttribute("id"));
  }
});

leftpane.addEventListener("dragover", function(event) {
  event.preventDefault();
});

leftpane.addEventListener("drop", function(event) {
  event.preventDefault();
  if (dragged) {
    let t = event.target;
    if (t.matches("#contenteditorcontainer")) {
      t.appendChild(dragged);
      draggedpartner.parentNode.appendChild(draggedpartner);
    } else if (t.matches("#contenteditorcontainer *")) {
      while (!t.matches("#contenteditorcontainer")) {
        if (t.parentNode.matches("#contenteditorcontainer")) {
          t.parentNode.insertBefore(dragged, t);
          const droppartner = $(content, "#" + t.getAttribute("id"));
          draggedpartner.parentNode.insertBefore(draggedpartner, droppartner);
        }
        t = t.parentNode;
      }
    }
    dragged = null;
    draggedpartner = null;
  }
}, true);

content.addEventListener("input", function(event) {
  const t = event.target;
  $$(t, "br").forEach(function(br) {
    if (!t.textContent || br.nextSibling !== null) br.remove();
  });
  $$(t, ":not(b, u, i, sub, sup, strike, a, br)").forEach(e => e.remove());

  if (t.matches("#title")) {
    $(leftpane, "#title").textContent = t.textContent;
    $("title").textContent = t.textContent;
  } else if (t.matches("h2")) {
    $(leftpane, `#${t.parentNode.getAttribute("id")} p`).textContent = t.textContent;
  } else if (t.matches("h4")) {
    $(leftpane, `#${t.getAttribute("id")} p`).textContent = t.textContent;
  } else if (t.matches("p")) {
    const text = t.textContent.length > 100 ? t.textContent.slice(0, 100) + "..." : t.textContent;
    $(leftpane, `#${t.getAttribute("id")} p`).textContent = text;
  }
});

content.addEventListener("click", function(event) {
  let t = event.target;
  const name = t.getAttribute("name");

  switch (name) {
    case "add":
      t.insertAdjacentHTML("beforebegin", "<contributor-editor><span contenteditable>Name</span></contributor-editor>");
      break;

    case "remove":
      t.parentNode.remove();
      break;
  }
});
