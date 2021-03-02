function getAttributes() {
 
 let a = document.getElementsByTagName("a")[0].getAttribute("id");
 let b = document.getElementsByTagName("a")[0].getAttribute("type");
 let c = document.getElementsByTagName("a")[0].getAttribute("hreflang");
 let d = document.getElementsByTagName("a")[0].getAttribute("rel");
 let e = document.getElementsByTagName("a")[0].getAttribute("taregt");
 let f = document.getElementsByTagName("a")[0].getAttribute("href");
 document.getElementsByTagName("p")[1].innerHTML = `The value of id attribute of the link is: ${a}`;
 document.getElementsByTagName("p")[2].innerHTML = `The value of type attribute of the link is: ${b}`;
 document.getElementsByTagName("p")[3].innerHTML = `The value of hreflang attribute of the link is: ${c}`;
 document.getElementsByTagName("p")[4].innerHTML = `The value of rel attribute of the link is: ${d}`;
 document.getElementsByTagName("p")[5].innerHTML = `The value of target attribute of the link is: ${e}`;
 document.getElementsByTagName("p")[6].innerHTML = `The value of href attribute of the link is: ${f}`;
 
}
