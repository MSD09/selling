let user=[]
function getData(){
    axios({
        method:'get',
        url:'https://crudcrud.com/api/dcd5e9ca6b734f2799f7963479e5a73f/users'
}).then(
     data=> {
        console.log(data);
        users=data.data;
        showData(users)

     }
    )
}

function showData(user){
    let ul=document.getElementById('ul');
    ul.innerHTML=null;
    users.forEach(user=>{
        let li=document.createElement('li');
        li.innerHTML=user.name + " | " + user.age;
        ul.appendChild(li);
    });
}
function submitform(){
    let input_name=document.getElementById('name').value;
    let input_age=document.getElementById('age').value;
    let body={
        name:input_name,
        age:input_age
    }
    axios({
        method:'post',
        url:'https://crudcrud.com/api/dcd5e9ca6b734f2799f7963479e5a73f/users',
        data: body
    }).then(
        data=>{
            console.log(data);
            document.getElementById('name').value=null;
            document.getElementById('age').value=null;
            getData();
        }
    )
}
getData();