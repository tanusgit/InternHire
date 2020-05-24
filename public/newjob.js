function c() {
    //getting input values from form 
    var name = document.getElementById("name").value;
    var email = document.getElementById("mail").value;
    var jobtitle = document.getElementById("jobtitle").value;
    var result = name + " " +  " " + email +" " +  jobtitle;
    //creating <p>
    var post = document.createElement("p");
   //getting the empty div where we want to put the value
    var element = document.getElementById("makejob");
     //attaching p to div
    element.appendChild(post);
     //putting text inside <p>
    var text = document.createTextNode(result);
    //attaching text to div
    element.appendChild(text);

    
}
