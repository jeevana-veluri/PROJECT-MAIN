
const imageUrls = [
    
    {src:"backinmainpage1.webp", text:"WINGS"},
    {src:"backinmainpage.2.webp",text:"WE HELP YOU TO FLY "}
  ];
  
  
  const imageElement = document.getElementById("img1");
  const imageTextElement=document.getElementById("p1");
  
  let currentImageIndex = 0;
  
  
  function changeImage() {
    imageElement.src = imageUrls[currentImageIndex].src;
    imageTextElement.textContent = imageUrls[currentImageIndex].text;
  
    currentImageIndex++;
    
    
    if (currentImageIndex === imageUrls.length) {
      currentImageIndex = 0;
    }
  }
  
  
  setInterval(changeImage, 3000);
  
  var n=document.getElementById('v1');
 var m=document.getElementById('b1')
  function handleHover() {
    
    changeDiv.style.display = "block";
    n.textContent = "Div changed!";
  }
  function handleMouseLeave() {
    
    changeDiv.style.display = "none";
    n.textContent = "";
  }
  m.addEventListener("mouseenter", handleHover);
m.addEventListener("mouseleave", handleMouseLeave);
  

  
