let user = document.getElementById("name")
let password = document.getElementById("pass")


const validate = (redirect) => {
    if(user.value=="admin" && password.value=="12345")
    {
       redirect();
       
    }
    else{
        alert("Enter the correct username and password")
        return false;
    }
}


const redirect = ()=>{
    window.location.replace("./todolisthome.html");
    
 
}

const logoutonclick = ()=>{
    window.location.replace("./index.html");
}

const todolistfun= ()=>{
    fetch('https://jsonplaceholder.typicode.com/todos').then((data)=>
        {
            return data.json();

        }).then((ObjectData)=>{
        console.log(ObjectData);
        let tableData="";
        console.log(tableData);
        ObjectData.map((value)=>{
            let disabled = ""
            let checked = ""
            if(value.completed){
                disabled = 'disabled'
                checked = 'checked'
            }

            tableData+=`  <tr>
            <th scope="row">${value.id}</th>
            <td>${value.title}</td>
            <td><input name="checkbox" type="checkbox" onclick="onclickchecked()" ${disabled} ${checked} /></td>
            </tr>
            `;

        });
        document.getElementById("apifet").innerHTML=tableData;
        })
}



   

    function onclickchecked() {

    const promis = new Promise(function (resolve, reject) {


        let count = 0;
        document.getElementsByName("checkbox").forEach((checkbox) => {
            if(!checkbox.disabled){
                if(checkbox.checked){
                    count ++;
                }
            }
        })
console.log(count);
        if (count == 5) {
      
          
          resolve(" success ")
        }
        else {
     
          reject("reject")
        }
      
      })
     
      promis.then(function () {
      
        alert("Successfully clicked 5 checkbox")
     
      }).catch(function () {
      
        console.log("not succesfull")
      })
      
    }













