var images = document.getElementsByClassName('image'),
 imagess = document.querySelector('.images'),
 app = document.querySelector('.app-container');
 var left = document.querySelector('.left');
 var right = document.querySelector('.right');
var dots = document.getElementsByClassName('dot');
 var allPics = document.querySelector('.all-pics');

//when an image is clicked, open slide show😎
function show_slide() {
    for (let img in images){
        images[img].onclick = () => {

            app.style.display = 'block';
            document.body.style.height = '100vh'
            //remove the eventlistener from all images
            for(var i = 0; i < images.length; i++)
                images[i].onclick = clearInterval();
            
            
            for(var i = 0; i < images.length; i++){
                imagess.appendChild(images[i])
                images[i].style.display = 'none';
                dots[i].className = dots[i].className.replace(" active", "")
                 
                images[img].style.display = 'flex';

                right.onclick = () => {
                    images[img].style.display = 'none';
                    dots[img].className = dots[img].className.replace(" active", "")
                    img = Number(img) + 1
                    if(img > images.length - 1)
                        img = 0;
                    if(img < 0)
                        img = images.length - 1;                    
                    righ(img);
  
                }



                left.onclick = () => {
                    images[img].style.display = 'none';
                    dots[img].className = dots[img].className.replace(" active", "")
                    img = Number(img) - 1
                    if(img > images.length - 1)
                        img = 0;
                    if(img < 0)
                        img = images.length - 1;                    
                    lef(img);
  
                }
          
            
                  }              
                dots[img].className += " active";
                 }
        }
    }        
    
    function righ(i){
        var ri = 0;
        ri = i;
        images[ri].style.display = 'flex';
        dots[ri].className += " active";

    } 
    function lef(i){
        var le = 0;
        le = i;
        images[le].style.display = 'flex';
        dots[le].className += " active";

    } 

//go back to homepage when clicked
document.querySelector('.close-btn').addEventListener('click', () => {
    app.style.display = 'none';
    allImg();
})

//display all images as window loads
window.addEventListener('onload',   allImg()) 

function allImg() {
    document.body.style.overflow = 'visible'
    show_slide();
    for(var i = 0; i < images.length; i++){
        allPics.appendChild(images[0]);
        images[0].style.display = 'flex';
     
    } 
    
    
}    







