

function showEdit(selectedPlaythrough){
    document.getElementById("editPlaythrough").style.display = "block";
    document.getElementById("selectGame").value = selectedPlaythrough;
    document.getElementById("selectStart").value = selectedPlaythrough;
    document.getElementById("selectFinish").value = selectedPlaythrough;
    document.getElementById("selectPlaythroughUsername").value = selectedPlaythrough;
    document.getElementById("edit-user").value = selectedPlaythrough;
    document.getElementById("edit-playthrough-game").value = selectedPlaythrough;
  
    // Pre-fill select menus
    selectValue(document.getElementById("selectPlaythroughUsername"), document.getElementById("edit-user"));
    selectValue(document.getElementById("selectGame"), document.getElementById("edit-playthrough-game"));

    // Pre-fill timestamps
    let start_timestamp = document.getElementById("selectStart");
    let startInput = document.getElementById('selectStart').options[start_timestamp.selectedIndex].text;
    document.getElementById("edit-start-time").value = startInput;

    let finish_timestamp = document.getElementById("selectFinish");
    let finishInput = document.getElementById('selectFinish').options[finish_timestamp.selectedIndex].text;
    document.getElementById("edit-finish-time").value = finishInput;

}

/**
 * Used to pre-fill select menus containing the correct ID
 * @param {HTMLSelectElement} hiddenElement The select element that contains the current Playthrough ID and is not shown.
 * @param {HTMLSelectElement} shownElement The select element that contains the ID for the displayed entity.
 */
function selectValue (hiddenElement, shownElement) {
    const textToMatch = hiddenElement.options[hiddenElement.selectedIndex].text;
    for (option of shownElement.options) {
        if (option.text === textToMatch) {
            option.selected = true;
            break
        }
    }
}

function showDelete(){
    document.getElementById("deletePlaythrough").style.display = "block";
}

function addNew(){
    document.getElementById("addPlaythrough").style.display = "block";
}

function showFinish(playthroughId){
    document.getElementById("finishPlaythrough").style.display= "block";
    document.getElementById("finishPlaythroughId").value = playthroughId;
   

}


document.getElementById("canceladdplaythroughBtn").addEventListener("click", function(e){
    e.preventDefault();
    document.getElementById("addPlaythrough").style.display = "none";
})

document.getElementById("cancelBtn").addEventListener("click",function(e){
    e.preventDefault();
    document.getElementById("deletePlaythrough").style.display = "none";
})

document.getElementById("canceleditBtn").addEventListener("click",function(e){
    e.preventDefault();
    document.getElementById("editPlaythrough").style.display = "none";
})
document.getElementById("cancelfinishBtn").addEventListener("click",function(e){
    e.preventDefault();
    document.getElementById("finishPlaythrough").style.display = "none";
})



function generateDateTime(element) {
    /* 
    Code for converting date to proper format sourced from John Au-Yeung
    at https://thewebdev.info/2022/01/11/how-to-set-datetime-on-a-datetime-local-input-with-javascript/.
    */ 
   now = new Date();
   let dateVal = new Date( now.getTime() - now.getTimezoneOffset()*60000).toISOString();
   dateVal = dateVal.slice(0, -5);
   element.value = dateVal;
}


// Get current timestamp for Start TimeStamp
const startTime = document.getElementById("input-start-time");
setInterval( ()=>{generateDateTime(startTime)}, 1000);


// Get finish timestamp for Finish Timestamp
const finishTime = document.getElementById("finishPlaythroughTime");
setInterval( ()=>{generateDateTime(finishTime)}, 1000);

/*
 Adapted Source Code for code lines 107-113 from StackOverflow user Brian 
 https://stackoverflow.com/questions/43940850/how-to-iterate-through-table-tr-and-get-the-value-for-first-td-javascript

*/


const table = document.getElementById('playthrough-table');
var finishCol = table.querySelectorAll('tr > td:nth-child(3)');
var finishBtns = table.querySelectorAll('tr > td:nth-child(8)');


for (var i = 0; i < finishCol.length; i++) {
    var finishTimes = finishCol[i];
    if(finishTimes.innerHTML !== ""){
        finishBtns[i].style.pointerEvents = 'none';
        finishBtns[i].style.opacity = '0.1';
       
    }else{
        finishBtns[i].style.pointerEvents = 'initial';
        finishBtns[i].style.opacity = '1';
    }
}
