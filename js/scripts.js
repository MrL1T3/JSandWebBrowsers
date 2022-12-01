let jsCount = 0;
let pythonCount = 0;
let cSharpCount = 0;
let result = ""

window.onload=function(){
  let indexList = [];
  // const qOne = document.getElementById('questionOne');
  // const qTwo = document.getElementById('questionTwo');
  // const qThree = document.getElementById('questionThree');
  // const qFour = document.getElementById('questionFour');
  // const qFive = document.getElementById('questionFive');
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
    // indexList.push(qOne.selectedIndex)
    console.log(indexList);
    evt.preventDefault();
    return false;
  }

  function currentSelection(evt){
    // let indexList = [];
    // const elem1 = qOne;
    // const elem2 = qTwo;
    // const elem3 = qThree;
    // const elem4 = qFour;
    // const elem5 = qFive;
    // let sel_index1 = elem1.selectedIndex;
    // let sel_index2 = elem2.selectedIndex;
    // let sel_index3 = elem3.selectedIndex;
    // let sel_index4 = elem4.selectedIndex;
    // let sel_index5 = elem5.selectedIndex;
    // console.log(sel_index1, sel_index2, sel_index3, sel_index4, sel_index5);
    // indexList.push(sel_index1, sel_index2, sel_index3, sel_index4, sel_index5);
    // console.log(indexList);
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

  // function displayResult(evt) {
  //   if (jsCount > pythonCount && jsCount > cSharpCount)
  //     result = "JavaScript is your Language!"
  //   else if (pythonCount > jsCount && pythonCount > cSharpCount)
  //     result = "Python is your language!"
  //   else if (cSharpCount > jsCount && cSharpCount > pythonCount)
  //     result = "C# is your language!"
  //   else 
  //     result = "Please try again with a little more thought, we didn't get enough specifics"
  //   console.log(result);
  //   evt.preventDefault();
  //   return false;
  // }


  // qOne.addEventListener('change', function() {console.log(this.value);}, false);
  // qOne.addEventListener('change', function () {answerCount();});
  collect.addEventListener('click', collectIndex);
  btn.addEventListener('click',currentSelection);
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
