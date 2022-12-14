window.onload=function(){
  let indexList = [];
  const btn = document.getElementById('btn');

  function collectIndex(){
    const allSelects = document.getElementsByTagName('select')
    for (let element of allSelects) {
      elemIndex = element.selectedIndex
      indexList.push(elemIndex)
    }
    return false;
  }

  function currentSelection(evt){
    let jsCount = 0;
    let pythonCount = 0;
    let cSharpCount = 0;
    let result = ""
    collectIndex();

    indexList.forEach(element => {
      if (element === 0)
        jsCount ++;
      else if (element === 1)
        pythonCount ++;
      else 
        cSharpCount ++;
    });
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

  btn.addEventListener('click',currentSelection);
};