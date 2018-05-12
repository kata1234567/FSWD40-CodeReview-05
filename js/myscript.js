var Persons = [
{
	name:"John",
	surname:"Doe",
	favoritePerformers: ["Justin Timberlake", "Ed Sheeran", "Rolling Stones"],
	age: 25,
	myPhoto: "img/john.png",
	likes: 0
	
}, 
{
	name:"Brian",
	surname:"Davis",
	favoritePerformers: ["Justin Timberlake", "Ed Sheeran", "Sabre"],
	age: 28,
	myPhoto: "img/brian.png",
	likes: 0
	
},

{
	name:"Claire",
	surname:"Hicks",
	favoritePerformers: ["Justin Timberlake", "Django3000", "Ed Sheeran"],
	age: 23,
	myPhoto: "img/claire.png",
	likes: 0
	
},
{
	name:"Harald",
	surname:"Drews",
	favoritePerformers: ["Vivaldi", "Ed Sheeran", "Rolling Stones"],
	age: 75,
	myPhoto: "img/harald.png",
	likes: 0
	
},

];


var tree = document.createDocumentFragment();
for (var i= 0; i< Persons.length; i++){
	var container = document.createElement("div");
	container.setAttribute("class", "container");
	
	var profile = document.createElement("div");
	profile.setAttribute("class", "profile");
	container.appendChild(profile);
	

	var picture = document.createElement("div");
	picture.setAttribute("class", "picture");
	profile.appendChild(picture);
	
	var img = document.createElement("img");
	img.setAttribute("src", Persons[i].myPhoto);
	picture.appendChild(img);
	
	var details = document.createElement("div");
	details.setAttribute("class", "details");
	profile.appendChild(details);
	
	var nameSpan = document.createElement("span");
	nameSpan.setAttribute("class", "large");
	nameSpan.appendChild(document.createTextNode("Name:   "));
	details.appendChild(nameSpan);
	
	var nameSpanValue = document.createElement("span");
	nameSpanValue.setAttribute("class", "x-large");
	nameSpanValue.appendChild(document.createTextNode(Persons[i].name));
	details.appendChild(nameSpanValue);
	details.appendChild(document.createElement("br"));
	
	var surnameSpan = document.createElement("span");
	surnameSpan.setAttribute("class", "large");
	surnameSpan.appendChild(document.createTextNode("Surname:   "));
	details.appendChild(surnameSpan);
	
	var surnameSpanValue = document.createElement("span");
	surnameSpanValue.setAttribute("class", "x-large");
	surnameSpanValue.appendChild(document.createTextNode(Persons[i].surname));
	details.appendChild(surnameSpanValue);
	details.appendChild(document.createElement("br"));
	
	var ageSpan = document.createElement("span");
	ageSpan.setAttribute("class", "large");
	ageSpan.appendChild(document.createTextNode("Age:   "));
	details.appendChild(ageSpan);
	
	var ageSpanValue = document.createElement("span");
	ageSpanValue.setAttribute("class", "x-large");
	ageSpanValue.appendChild(document.createTextNode(Persons[i].age));
	details.appendChild(ageSpanValue);
	details.appendChild(document.createElement("br"));
	details.appendChild(document.createElement("br"));
	
	var like = document.createElement("div");
	like.setAttribute("class", "like");
	details.appendChild(like);
	
	
	var buttonWrapper = document.createElement("span");
	buttonWrapper.setAttribute("class", "buttonWrapper");
	like.appendChild(buttonWrapper);
	
	var likeButton = document.createElement("button");
	likeButton.setAttribute("type", "button");
	likeButton.setAttribute("onclick", "incrementLikes(" + i + ", Persons[" + i + "])");
	likeButton.appendChild(document.createTextNode("Like"));
	buttonWrapper.appendChild(likeButton);
	
	var nrOfLikes = document.createElement("span");
	nrOfLikes.setAttribute("id", "person" + i + "_likes");
	nrOfLikes.appendChild(document.createTextNode(Persons[i].likes));
	like.appendChild(nrOfLikes);
	
	var heart = document.createElement("span");
	like.appendChild(heart);
	
	var heartImage = document.createElement("img");
	heartImage.setAttribute("src", "img/like.png");
	heart.appendChild(heartImage);
	
	tree.appendChild(container);
	}
document.getElementById("profiles").appendChild(tree);

function incrementLikes(index, person){
	person.likes++;
	document.getElementById("person" + index + "_likes").innerHTML = person.likes;
};

//sortfunction -- problems with placing in html correctly... tried another way..

document.write("<button class='sort-button' onclick='return sortarray()'>Sort Persons By Likes</button>");

 function sortarray(){
 	Persons.sort(function(a, b) {
  var likeA = a.likes;
  var likeB = b.likes;
  if (likeA > likeB) {
    return -1;
  }
  if (likeA < likeB) {
    return 1;
  }
  return 0;
});

 	document.write("<div class='Persons' style='width: 100%;display: flex;flex-wrap: wrap;justify-content: space-around;font-size: 100%;height:300px;'>");
for (var i=0;i<Persons.length;i++){
	document.write("<div class='persons"+i+"' style='padding-top: 20px;display: flex;justify-content: space-around;background-color: #DBEDF3; width: 620px;height: 230px;margin: 20px 10px;'>");
	document.write("<img src='"+Persons[i].myPhoto+"' width='150' height='150'>");
	document.write("Name : "+Persons[i].name+"<br>");
	document.write("Surname : "+Persons[i].surname+"<br>");
	document.write("Age : "+Persons[i].age+"<br>");
	document.write("<button style='width: 100px;height: 50px;background-color: #DBEDF3 ;border-radius: 10px;align-self: flex-end;margin-bottom: 10px;font-size: 25px;' onclick=''>Like</button><br>");
	document.write("<img id='like' src='img/like.png' style='align-self: flex-end;width: 35px;height: 35px;margin-bottom: 10px;'>");
	document.write("<p id='person"+i+"' style='align-self: flex-end;margin-bottom: 10px;}'>"+Persons[i].likes+"</p><br>");
	document.write("</div>");
}
document.write("</div>");
return false ;
};

