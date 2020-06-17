
const btn_save = document.querySelector('.btn-save');
const content_container = document.querySelector('.content');
const home = document.querySelector('.home');
const container = document.querySelector('.files');
const file_name = document.getElementById('fileName');
const file_content = document.getElementById('content');

btn_save.addEventListener('click' , CreateContent);

var name = file_content.value,
 contentAll = file_name.value;

function CreateContent(){
    //Set data in firebase database
    if(file_content.value === "" || file_name.value === ""){
        $('.content').append('<tr class="last-child"><td><p>There is not anything you added please try again.</p></td></tr>');
        // const parent_childrens = document.querySelectorAll('.last-child');
        // for (var i =0; i < parent_childrens.length; i++){
        //     parent_childrens[i].remove();
        // }
        setTimeout(function(){
            $('.last-child').remove();
        }, 1000);
    }else{
$('.files table').append("<tr><td><div><h1>" + file_name.value + "</h1><p>" + file_content.value + "</p></div></td></tr>");
    firebase.database().ref('user').push().set({
        name: file_name.value,
        content: file_content.value 
    });
    location.reload();
}

}
document.querySelector('.not').addEventListener('click' ,  function(){
content_container.style.display = "none";
container.style.display = "block";
});
document.querySelector('.btn-back').addEventListener('click' ,  function(){
    content_container.style.display = "block";
    container.style.display = "none";
});

