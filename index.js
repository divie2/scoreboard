

function home(num){
  let score = document.getElementById("home")
  

  console.log(typeof(Number(score.textContent)))
  
  total = Number(score.textContent) + num
  
  score.textContent = total
}

function guest(num){
  let score = document.getElementById("guest")
  
  console.log(typeof(Number(score.textContent)))
  
  total = Number(score.textContent) + num
  
  score.textContent = total
}

