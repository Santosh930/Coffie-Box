// Add the coffee to local storage with key "coffee"

// console.log(4);

let url=`https://masai-mock-api.herokuapp.com/coffee/menu`;

fetch(url)
  .then(function (res) {
    // Readable + Stream( data in chunks )
    // Collect the stream
    return res.json(); // res.collect()
  })
  .then(function (res) {
    console.log(res);
  })
  .catch(function (err) {
    console.log(err);
  });

append(data);
  

function append(data) {
  let container = document.getElementById("menu");
  data.forEach(function (el) {
    let img = document.createElement("img");
    img.src = el.image;

    let price= document.createElement("h2");
    price.innerText = el.price;

    let type = document.createElement("p");
    type.innerText = el.type;

    let div = document.createElement("div");
    div.append(img, type, price);

    container.append(div);
  });
}

