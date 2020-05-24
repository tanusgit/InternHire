joblist = [
    {
        Name: "Foo",
        Email: "foo@gmail.com",
        JobTitle: "Software"
    },
    {
        Name: "Bar",
        Email: "foo@gmail.com",
        JobTitle: "Software"
    }
]

function c() {
    //getting input values from form 
    var name = document.getElementById("name").value;
    var email = document.getElementById("mail").value;
    var jobtitle = document.getElementById("jobtitle").value;
    //var result = name + " " +  " " + email +" " +  jobtitle;
    var result = {
        "Name": name,
        "Email": email,
        "JobTitle": jobtitle
    };
    console.log(result);
    console.log("joblist from c()", joblist);
    joblist.push(result);
    window.location.href = "joblisted.html";
    /*//creating <p>
    var post = document.createElement("p");
    //getting the empty div where we want to put the value
    var element = document.getElementById("joblisted");
    //attaching p to div
    //element.appendChild(post);
     //putting text inside <p>
    var text = document.createTextNode(result);
    //attaching text to div
    element.appendChild(text);*/
}

function clear(){
    var name = document.getElementById("name").value = "";
    var email = document.getElementById("mail").value = "";
    var jobtitle = document.getElementById("jobtitle").value ="";
}



//    document.querySelector("#r").addEventListener('click',() => { window.location.href="https://www.youtube.com/watch?v=Swzem9EdFhw"; });


