let blogs = [
    {
        "id": 1,
        "img": "images/blogs/image_1.jpg",
        "title": "Card title",
        "text":`This is a longer card with supporting text below as a natural lead-in to additional content.`,
    },
    {
        "id": 2,
        "img": "images/blogs/image_2.jpg",
        "title": "Card title",
        "text":`This is a longer card with supporting text below as a natural lead-in to additional content.`,
    },
    {
        "id": 3,
        "img": "images/blogs/image_3.jpg",
        "title": "Card title",
        "text":`This is a longer card with supporting text below as a natural lead-in to additional content.`,
    },
    {
        "id": 4,
        "img": "images/blogs/image_4.jpg",
        "title": "Card title",
        "text":`This is a longer card with supporting text below as a natural lead-in to additional content.`,
    },
    {
        "id": 5,
        "img": "images/blogs/image_5.jpg",
        "title": "Card title",
        "text":`This is a longer card with supporting text below as a natural lead-in to additional content.`,
    },
    {
        "id": 6,
        "img": "images/blogs/image_6.jpg",
        "title": "Card title",
        "text":`This is a longer card with supporting text below as a natural lead-in to additional content.`,
    },
    {
        "id": 7,
        "img": "images/blogs/image_7.jpg",
        "title": "Card title",
        "text":`This is a longer card with supporting text below as a natural lead-in to additional content.`,
    },
    {
        "id": 8,
        "img": "images/blogs/image_8.jpg",
        "title": "Card title",
        "text":`This is a longer card with supporting text below as a natural lead-in to additional content.`,
    },   


]


let content = "";

for (let item of blogs) {
    content += `
    <div class="col mb-4">
    <div class="card">
      <img src="${item.img}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${item.title}</h5>
        <p class="card-text txt">${item.text}</p>
        <a href='blog-single.html' class="more">Read more...</a>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
    `
}


document.getElementsByClassName("row")[0].innerHTML = content;