let btnDOM = document.querySelector("#liveToastBtn") 
let listDOM = document.querySelector("#list") 
let taskDOM = document.querySelector("#task") 
let ullength = document.getElementsByTagName("li");

for(let i=0; i < ullength.length;i++){ 
    let closeButton = document.createElement("span"); 
    closeButton.textContent = "\u00D7"; // çarpı işareti oluşturuldu.
    closeButton.classList.add("close");
    closeButton.onclick = removeButton; // çarpı işaretinin ne işlemi yapılacağı söylendi.
    ullength[i].append(closeButton); 
    ullength[i].onclick = check; 
}

btnDOM.addEventListener('click', elemanEkle) 
function check(){
  this.classList.toggle("checked"); //maddeye tıklanıldığında üzeri çizilip tik işareti getirildi. 
}

function removeButton(){
  this.parentElement.remove(); //çarpı işaretinin silme fonk.
}

function elemanEkle() {
    if (taskDOM.value == "")  {  
    $(".error").toast("show"); //boş karakter eklendiğinde verilen hata mesajı
  } 
    else {
    $(".success").toast("show"); //eklendi mesajı

    let liDOM = document.createElement('li') 
    listDOM.appendChild(liDOM); //yeni eklenen madde en sona eklenir
    liDOM.innerHTML = task.value;
    taskDOM.value = "";
  
   //silme işlemi için işlem tekrarı
    liDOM.onclick = check;
        
    let closeButton = document.createElement("span");
        closeButton.textContent = "\u00D7";
        closeButton.classList.add("close");
        closeButton.onclick = removeButton;
        
        liDOM.append(closeButton);
        listDOM.append(liDOM);
        inputElement.value = (""); 
    }
}    