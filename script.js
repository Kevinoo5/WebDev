async function getData() {
  //const url = "https://api.npoint.io/984c4547167dd9d93396";
  const url = "posts.json";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error.message);
  }
}

function createpost(postjson) {
  const post = document.createElement("article");
  post.className = "post";

  const head = document.createElement("header");
  head.className = "post-head"

  const name = document.createElement("h2");
  name.className = "name";
  name.textContent = postjson.author.name;

  const time = document.createElement("time");
  time.dateTime = postjson.creation_time;
  time.textContent = new Date(postjson.creation_time).toLocaleString("et-EE", {
    dateStyle: "medium",
    timeStyle: "short",
  });
  name.append(document.createElement("br"));
  name.append(time);

  head.append(name);

  const content = document.createElement("p");
  content.className = "post-text"
  content.textContent = postjson.content;

  const like = document.createElement("button");
  like.className="like";
  like.type="button";
  like.textContent="👍";

  post.append(head, content);

  if (postjson.media) {
    const meedia = getMeedia(postjson.media);
    if (meedia) post.append(meedia);
  }

  post.append(like);

  return post;
}

function getMeedia(media) {
    const pic = document.createElement("img");
    pic.src = media.reference;
    pic.alt = media.alt_text || "";
    pic.loading = "lazy";
    return pic;
}


async function makepage() {
  const page = await getData();
  const posts = document.getElementById("posts");
  posts.innerHTML = "";

  for (const post of page) {
    posts.append(createpost(post));
  }
}

makepage();