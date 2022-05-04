function addList() {
    
    let description = document.getElementById('Description').value;
    let date = document.getElementById('Date').value;
    let status = document.getElementById('Status').value;

    let tabel = document.getElementById('list');


    tabel.innerHTML += "<div class = 'tContainer' >"  +  
    "<input class = 'subjectName' type='text' value='" + description + "'>" + "</input>" +
    "<input class = 'subjectName' type='text' value='" + date + "'>"+"</input>" + 
    "<input class = 'subjectName' type='text' value='" + status + "'>"+"</input>" +
    "<button class = 'subjectName' onclick='remove(this)'>Remove</button>"
    "</div>"

}


function remove(el){
  let element = el;
  el.parentNode.remove();

}


