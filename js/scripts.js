let jsCount = 0;
let pythonCount = 0;
let cSharpCount = 0;
let result = ""

window.onload=function(){

  function AnswerCount() {
    const question = document.activeElement;
    if (question.selectedIndex === 0)
      jsCount ++;
    else if (question.selectedIndex === 1)
      pythonCount ++;
    else 
      cSharpCount ++;
    console.log(jsCount, pythonCount, cSharpCount);
    };

  function currentSelection(){
    let elem = document.activeElement;
    let sel_index = elem.selectedIndex;
    console.log(sel_index);
  }

  function displayResult(evt) {
    if (jsCount > pythonCount && jsCount > cSharpCount)
      result = "JavaScript is your Language"
    else if (pythonCount > jsCount && pythonCount > cSharpCount)
      result = "Python is your language"
    else if (cSharpCount > jsCount && cSharpCount > pythonCount)
      result = "C# is your language"
    else 
      result = "Try again with a little more thought, we didn't get enough specifics"
    console.log(result);
    evt.preventDefault();
    return false;
  }

  let qOne = document.getElementById('questionOne');
  let btn = document.getElementById('btn')
  qOne.addEventListener('change', function() {console.log(this.value);}, false);
  qOne.addEventListener('change', function () {AnswerCount();});
  btn.addEventListener('click', displayResult);
  //document.getElementById('result-space').innerHTML = result;
};  

// function handleSelections() {
//   let elem1 = document.getElementById("questionOne");
//   let sel_index = elem1.selectedIndex;
//   let sel_text = elem1.options[sel_index].text;
//   console.log(`selected index is ${sel_index} text is ${sel_text}`);
// }


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
