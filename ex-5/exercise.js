



function loadBooks(books) {
    
      books.forEach(function(item){

        var a = document.createElement("p");
        var b = document.createTextNode(item.title);
        a.appendChild(b);

        var c = document.createElement("p");
        var d = document.createTextNode(item.author);
        c.appendChild(d);

        
         document.getElementsByTagName("body")[0].appendChild(a);
         document.getElementsByTagName("body")[0].appendChild(c);
    

    
      })

}

// Paste here your array
var books = [
    { title: 'The Design of EveryDay Things',  author: 'Don Norman', alreadyRead: false }, { title: 'The power of now', author: 'Ekhart Tolle', alreadyRead: true }, { title: 'The Three Body Problem', author: 'Liu Cixin', alreadyRead: true }
  ];

// This function will execute when the window loads
window.onload = loadBooks(books);
