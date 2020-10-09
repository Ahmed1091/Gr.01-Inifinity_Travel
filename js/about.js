let data= [
    {
        "id": 1,
        "title": "Idea",
        "content": `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem architecto quas aliquam incidunt laboriosam! Laudantium quisquam nostrum mollitia, rerum accusamus porro excepturi quia doloremque rem qui ea nesciunt alias aperiam.`,
        "list":"Lorem ipsum dolor sit amet consectetur",
        "img": "images/slider-header/08.jpg"
      
    },
    {
        "id": 2,
        "title": "Mission",
        "content": `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem architecto quas aliquam incidunt laboriosam! Laudantium quisquam nostrum mollitia, rerum accusamus porro excepturi quia doloremque rem qui ea nesciunt alias aperiam.`,
        "list":"Lorem ipsum dolor sit amet consectetur",
        "img": "images/slider-header/07.jpg"
      
    },
    {
        "id": 3,
        "title": "Vision",
        "content": `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem architecto quas aliquam incidunt laboriosam! Laudantium quisquam nostrum mollitia, rerum accusamus porro excepturi quia doloremque rem qui ea nesciunt alias aperiam.`,
        "list":"Lorem ipsum dolor sit amet consectetur",
        "img": "images/slider-header/06.jpg"
      
    },
    {
        "id": 4,
        "title": "History Timeline",
        "content": `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem architecto quas aliquam incidunt laboriosam! Laudantium quisquam nostrum mollitia, rerum accusamus porro excepturi quia doloremque rem qui ea nesciunt alias aperiam.`,
        "list":"Lorem ipsum dolor sit amet consectetur",
        "img": "images/slider-header/09.jpg"
      
    },
    

]


let content1 = "";

for (let item of data) {
    content1 += `
    <div class="row mb-5 py-5 bg-light">
    <div class="col-md-6">
      <img src="${item.img}" class="img-fluid" alt="">
    </div>
    <div class="col-md-6 mt-md-0 mt-sm-4">
      <div class="info">
        <h4>${item.title}</h4>
        <p>${item.content}</p>
        <ul>
          <li><i class="fas fa-check"></i>${item.list}</li>
          <li><i class="fas fa-check"></i>${item.list}</li>
          <li><i class="fas fa-check"></i>${item.list}</li>
          <li><i class="fas fa-check"></i>${item.list}</li>
          <li><i class="fas fa-check"></i>${item.list}</li>
        </ul>
      </div>
    </div>
  </div>
    `
}


// document.getElementsByClassName("about-card")[0].innerHTML = content1;



let team=[
    {
        "id": 1,
        "fb": "fab fa-facebook-f",
        "tw": "fab fa-twitter",
        "insta": "fab fa-instagram",
        "img": "images/ourteam/01.jpg",
        "job": "SEO",
        "name":"person-1",
    },
    {
        "id": 2,
        "fb": "fab fa-facebook-f",
        "tw": "fab fa-twitter",
        "insta": "fab fa-instagram",
        "img": "images/ourteam/02.jpg",
        "job": "SEO",
        "name":"person-2",
    },
    {
        "id": 3,
        "fb": "fab fa-facebook-f",
        "tw": "fab fa-twitter",
        "insta": "fab fa-instagram",
        "img": "images/ourteam/03.jpg",
        "job": "SEO",
        "name":"person-3",
    },
    {
        "id": 4,
        "fb": "fab fa-facebook-f",
        "tw": "fab fa-twitter",
        "insta": "fab fa-instagram",
        "img": "images/ourteam/04.jpg",
        "job": "SEO",
        "name":"person-4",
    },

]

let content2 = "";

for (let item of team) {
    content2 += `
    <div class="col-md-6 col-lg-3 mb-5">
    <div class="box">
      <div class="image">
        <div class="overlay">
          <div class="links">

            <a href="#"> <i class='${item.fb}'></i></a>
            <a href="#"> <i class='${item.tw}'></i></a>
            <a href="#"> <i class='${item.insta}'></i></a>
          </div>
        </div>
        <img src="${item.img}" alt="">
      </div>
      <div class="info text-center p-3">
        <h5>${item.name}</h5>
        <span>${item.job}</span>
      </div>
    </div>
  </div>
    `
}
// document.getElementsByClassName("row_team")[0].innerHTML = content2;
