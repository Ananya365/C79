list=["Chicken Tandoori Pizza","Veg Magreta Pizza","Veg Supreme Pizza","Panner Tikka Pizza","Deluxe Veggie Pizza","Veg Extra Vaganza Pizza"]
function function1(){
     htmldata="";
     list.sort();
     for (i=0;i<list.lenght;i++){
          console.log(list[i]);
          htmldata=htmldata+list[i]+"<br>";
     }
     document.getElementById("display_menu").innerHTML=htmldata;
}
function add_item(){
     var htmldata;
     var img_tags='<img id="qwerty" src="images/pizzaImg.png">';
     var item=document.getElementById("add_item").value;
     list.sort();
     htmldata="";
     for (i=0;i<list.lenght;i++){
          console.log(list[i]);
          htmldata=htmldata+img_tags+list[i]+"<br>";
     }
     document.getElementById("display_addedmenu").innerHTML=htmldata;
}
function add_top(){
     var item=document.getElementById("add_item").value;
     list.push(item);
     add_item();
}