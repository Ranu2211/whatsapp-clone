var sidenav = document.getElementsByClassName("sidenav")[0];
var leftnav = document.getElementsByClassName("leftnav")[0]
var rightbtn = document.getElementById("rightbtn");
sidenav.style.right="-168px";
rightbtn.onclick = function(){
       if(sidenav.style.right=="-168px"){
        sidenav.style.right="4px";
       
       }
       else{
           sidenav.style.right="-168px";
           <i id="rightnav" class="fa fa-ellipsis-v"></i>;

       }
     
   
    }

