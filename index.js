// code your solution here
function saturdayFun(activity = "roller-skate") {
    console.log(`This Saturday I want to ${activity}!`);
}

saturdayFun();

function mondayWork(toDo = "go to the office") {
    console.log(`On Monday I have to do ${toDo}...`);
}

mondayWork();

function wrapAdjective(flair = "*") {
    return function (adj = "special") {
        return "You are " + flair + adj + flair;
    }
}

console.log(wrapAdjective("!")("magnificent beast"));