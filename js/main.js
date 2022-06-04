
let inputName=document.querySelector("#name"),
    inputUrl=document.querySelector("#websiteUrl"),
    buttonInput=document.querySelector(".mainBtn");
buttonInput.addEventListener("click",function() {
    add();
})
let containerMaker;
if(localStorage.getItem("emails")==null)
{
    containerMaker=[];
}
else
{
    containerMaker=JSON.parse( localStorage.getItem("emails")) ;
    display(containerMaker);

}
function add()
{
    let content={name:inputName.value,url:inputUrl.value};
    containerMaker.push(content);
    localStorage.setItem("emails",JSON.stringify(containerMaker));
    // console.log(containerMaker);
    display(containerMaker);
    clear();
}

function display(container)
{
    let containers=``;
    for (let i = 0; i < container.length; i++) {
        
        containers+=`
<tr>
            <td>${i}</td>
            <td>${container[i].name}</td>
            <td>
            <a href="${container[i].url} target='_blank'">
            <button class="btn btn-warning">Visit</button></a>
            </td>
            <td><button onclick='Delete(${i})'class="btn btn-danger">Delete</button></td>
        </tr>`
        
    }
    document.getElementById("rowData").innerHTML=containers;
}

{/* <button class="btn btn-warning">Visit</button> */}
function clear()
{
    inputName.value="";
    inputUrl.value="";
}

function Delete(index)
{   
    containerMaker.splice(index,1);
    localStorage.setItem("emails",JSON.stringify(containerMaker));
    display(containerMaker);
}




