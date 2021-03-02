function insert_Row() {
    let theTable = document.getElementById("sampleTable");
    let newrow = document.createElement("tr");
    let cell1 = newrow.insertCell(0);
    cell1.innerHTML="New Cell1"
    let cell2 = newrow.insertCell(1);
    cell2.innerHTML="New Cell1"
    theTable.appendChild(newrow);


}
