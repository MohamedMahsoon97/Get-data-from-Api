var myData = [];

function getData() {
    var myRequest = new XMLHttpRequest();
    var myContent = document.getElementById("my-data");
    var myBtn = document.getElementById("btn");
    myRequest.onreadystatechange = function(){
        if(myRequest.readyState === 4 && myRequest.status === 200){
            myData = JSON.parse(myRequest.response);
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

function showData(myId) {
    myId = myId - 1;
    console.log(myId);
    var name = myData[myId].login;
    var myRequest = new XMLHttpRequest();
    myRequest.onreadystatechange = function(){
        if(myRequest.readyState === 4 && myRequest.status === 200){
            var myNewData = JSON.parse(myRequest.response);
            
        }
        myPopup.innerHTML = 
        `
        <img src="${myNewData.avatar_url}">
        <h2><span>Name</span>   ${myNewData.login}</h2>
        <p><span>Profile</span>  ${myNewData.html_url}</p>
        <p><span>Repos</span>  ${myNewData.repos_url}</p>
        <p><span>Location</span>   ${myNewData.location}</p>
        <i id="close" class="far fa-times-circle"></i>
        `
        myPopup.style.display = "block";
        
    }
    
    myRequest.open("GET" , "https://api.github.com/users/" + name);
    myRequest.send();
};

// var closePopup = document.getElementById("close");
// closePopup.onclick = function(){
//     myPopup.style.display = "none";
// };