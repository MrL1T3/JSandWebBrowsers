window.onload=function(){
  let jsCount = 0;
  let pythonCount = 0;
  let cSharpCount = 0;
  let answer = "";
  let result = "";

  function questionOne() {
      if (document.getElementById("questionOne").selectedIndex = "0")
      jsCount ++;
      else if (document.getElementById("questionOne").selectedIndex = "1")
      pythonCount ++;
      else
      cSharpCount ++;
      
      if (jsCount > pythonCount || jsCount > cSharpCount)
        answer = "JavaScript is your Language"
      else if (pythonCount > jsCount || pythonCount > cSharpCount)
        answer = "Python is your language"
      else if (cSharpCount > jsCount || cSharpCount > pythonCount)
        answer = "C# is your language"
      else 
        answer = "Try again with a little more thought, we didn't get enough specifics"
      result = answer
    };

  let a = document.getElementById('questionOne');
  a.addEventListener('change', function() {console.log(this.value);}, false);
  document.getElementById('btn').addEventListener('click', resultCounter);
};  
  // const btn = document.querySelector('btn');
  // document.querySelectorAll('select').addEventListener('click', function(){alert(result);});
  // document.getElementById('btn').addEventListener('click', function(){(result);});
  // function questionOne() {
  //   if (document.getElementById("questionOne").selectedIndex = "0")
  //   jsCount ++;
  //   else if (document.getElementById("questionOne").selectedIndex = "1")
  //   pythonCount ++;
  //   else
  //   cSharpCount ++;
    
  //   if (jsCount > pythonCount || jsCount > cSharpCount)
  //     answer = "JavaScript is your Language"
  //   else if (pythonCount > jsCount || pythonCount > cSharpCount)
  //     answer = "Python is your language"
  //   else if (cSharpCount > jsCount || cSharpCount > pythonCount)
  //     answer = "C# is your language"
  //   else 
  //     answer = "Try again with a little more thought, we didn't get enough specifics"
  //   result = answer
  // };
