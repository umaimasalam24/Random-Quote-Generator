let quotes = ['"Our greatest glory is not in never falling, but in rising every time we fall." - Confucius ' ,
     '"The only way to do great work is to love what you do." - Steve Jobs ' , 
     'Believe you can and you are halfway there. - Theodore Roosevelt' ,
      'Every Master was once a beginner. - Sheikh Hafsa Nadeem' , 
      ' "Learning is not attained by chance, it must be sought for with ardor and attended to with diligence" - Abigail Adams' , 
      " Education is not the learning of facts, but the training of the mind to think - Albert Einstein" , 
      "Learning is a treasure that will follow you everywhere - Chinese Proverb", 
      '"Success is not final, failure is not fatal: It is the courage to continue that counts." – Winston Churchill']
function button (){
    let data = quotes[Math.floor(Math.random()*quotes.length)];
document.getElementById("code").innerHTML=data;
}
button()
