var books = [
    { title: 'The Design of EveryDay Things',  author: 'Don Norman', alreadyRead: false , img : "https://upload.wikimedia.org/wikipedia/en/thumb/0/00/Princess_Bubblegum.png/100px-Princess_Bubblegum.png"},
    { title: 'The power of now', author: 'Ekhart Tolle', alreadyRead: true , img: "https://upload.wikimedia.org/wikipedia/en/thumb/0/00/Princess_Bubblegum.png/100px-Princess_Bubblegum.png"}, 
    { title: 'The Three Body Problem', author: 'Liu Cixin', alreadyRead: true, img:"https://upload.wikimedia.org/wikipedia/en/thumb/0/00/Princess_Bubblegum.png/100px-Princess_Bubblegum.png" },
  ];



  books.forEach(function(item){
      let titleTag = document.createElement("p");
      let b = document.createElement("p");
      let x = document.createTextNode(item.title);
      let y = document.createTextNode(item.author);
      let image = document.createElement("img");
      image.setAttribute("src",item.img);
      titleTag.appendChild(x);
      b.appendChild(y);
    //   document.getElementsByTagName("body")[0].appendChild(titleTag);
    //   document.getElementsByTagName("body")[0].appendChild(b);

      item.alreadyRead == true ?  titleTag.style.backgroundColor = "yellow": titleTag.style.backgroundColor = "red"
     var bookList = document.createElement("ul");
     var listItem1 = document.createElement("li");
     var listItem2 = document.createElement("li");
     var listItem3 = document.createElement("li");
     listItem1.appendChild(titleTag);
     listItem2.appendChild(b);
     listItem3.appendChild(image);
     bookList.appendChild(listItem1);
     bookList.appendChild(listItem2);
     bookList.appendChild(listItem3);
     document.getElementsByTagName("body")[0].appendChild(bookList);

     //console.log(bookList.createElement("li"));




    //   if(item.alreadyRead == true){
    //       titleTag.style.backgroundColor = "yellow";
    //   } else {
    //     titleTag.style.backgroundColor = "red";
    //   }
  })


