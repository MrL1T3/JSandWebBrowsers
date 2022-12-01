let jsCount = 0;
let pythonCount = 0;
let cSharpCount = 0;
let result = ""

window.onload=function(){
  let indexList = [];
  const btn = document.getElementById('btn');
  const collect = document.getElementById('collect-answers');

  function answerCount() {
    const question = document.activeElement;
    if (question.selectedIndex === 0)
      jsCount ++;
    else if (question.selectedIndex === 1)
      pythonCount ++;
    else 
      cSharpCount ++;
    console.log(jsCount, pythonCount, cSharpCount);
  };

  function collectIndex(evt){
    const allSelects = document.getElementsByTagName('select')
    for (let element of allSelects) {
      elemIndex = element.selectedIndex
      console.log(elemIndex)
      indexList.push(elemIndex)
    }
    console.log(indexList);
    evt.preventDefault();
    return false;
  }

  function currentSelection(evt){
    indexList.forEach(element => {
      if (element === 0)
      jsCount ++;
    else if (element === 1)
      pythonCount ++;
    else 
      cSharpCount ++;
    });
    console.log(jsCount, pythonCount, cSharpCount);
    if (jsCount > pythonCount && jsCount > cSharpCount)
      result = "JavaScript is your Language!"
    else if (pythonCount > jsCount && pythonCount > cSharpCount)
      result = "Python is your language!"
    else if (cSharpCount > jsCount && cSharpCount > pythonCount)
      result = "C# is your language!"
    else 
      result = "Please try again with a little more thought, we didn't get enough specifics"
    document.getElementById('result-space').innerHTML = result;
    indexList.splice(0, indexList.length);
    jsCount = 0;
    pythonCount = 0;
    cSharpCount = 0;
    evt.preventDefault();
    return false;
    
  }

  collect.addEventListener('click', collectIndex);
  btn.addEventListener('click',currentSelection);
};