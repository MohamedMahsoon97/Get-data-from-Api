var myData = [];
function getData() {
    var myRequest = new XMLHttpRequest();
    var myContent = document.getElementById("my-data");
    var myBtn = document.getElementById("btn");
    myRequest.onreadystatechange = function(){
        if(myRequest.readyState === 4 && myRequest.status === 200){
            var myData = JSON.parse(myRequest.response);
            console.log(myData)
            for(var i = 0; i < myData.length; i++){
                myContent.innerHTML += 
                `
                    <div>
                        <img src="${myData[i].avatar_url}" onclick="showData(${myData[i].id})">
                        <h2>${myData[i].login}</h2>
                    </div>
                `
                myBtn.style.display = "none";
            }
        };
    }
    myRequest.open("GET" , "https://api.github.com/users");
    myRequest.send();
};

var myPopup = document.getElementById("myPopup");

function showData(x) {
    x = x - 1;
    var name = myData[x].login;
    var myRequest = new XMLHttpRequest();
    myRequest.onreadystatechange = function(){
        if(myRequest.readyState === 4 && myRequest.status === 200){
            var myNewData = JSON.parse(myRequest.response);
            
        }
        myPopup.innerHTML += 
        `
        <img src="${myNewData.avatar_url}">
        <h2>${myNewData.login}</h2>
        <p><h6>Profile</h6>${myNewData.html_url}</p>
        <p><h6>Repos links</h6>${myNewData.repos_url}</p>
        <p><h6>Repos links</h6>${myNewData.location}</p>
        `
        myPopup.style.display = "block";
    }
    myRequest.open("GET" , "https://api.github.com/users/" + name);
    myRequest.send();
}