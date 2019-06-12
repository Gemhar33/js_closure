
// **********nonsense***************//
function nonsense(string) {
    var blab = function(){
        alert(string);
      };
      blab();
      setTimeout(blab, 200);

      return blab;
}

let karenLater = nonsense("Damn it Karen!!!");

let tobiLater = nonsense("Toby is the worst!!!");

console.log(karenLater());
console.log(tobiLater());


// **********lastNameTrier***************//
var lastNameTrier = function(firstName){
    //does stuff

     var innerFunction = function(lastName) {
         //does stuff
         console.log(`${firstName} ${lastName}`);
     };
     //maybe returns something here
     return innerFunction;
 };
 var firstNameFarmer = lastNameTrier('Farmer'); //logs nothing
 firstNameFarmer('Brown'); //logs 'Farmer Brown
 firstNameFarmer('Jane'); //logs 'Farmer Jane'
 firstNameFarmer('Lynne'); //logs 'Farmer Lynne'

 // **********storyWriter***************//

 function storyWriter() {
    let story = '';
    let storyObj = {};
    storyObj['addWords'] = function(line) {
        story += line;
        console.log(story);
        return story;
    }
    storyObj['erase'] = function() {
        story = '';
        console.log(story);
        return story;
    }
    return storyObj;
 }

 var farmLoveStory = storyWriter();
 farmLoveStory.addWords('There was once a lonely cow.'); // 'There was once a lonely cow.'
 farmLoveStory.addWords('It saw a friendly face.'); //'There was once a lonely cow. It saw a friendly face.'

 var storyOfMyLife = storyWriter();
 storyOfMyLife.addWords('My code broke.'); // 'My code broke.'
 storyOfMyLife.addWords('I ate some ice cream.'); //'My code broke. I ate some ice cream.'
 storyOfMyLife.erase(); // ''


 // **********Toaster***************//
 var Toaster = function(){
    //some private methods and properties
    let time;
    let isSwitched = false;
    let timerControl = function(time){
        console.log(`This is the ${time} control`);
    }

    return {
      //some public methods and properties, etc

      setTime: function(setTime) {
        time = setTime;
      },
      start: function() {
        this.isSwitched = true;
      },
      stop: function() {
        this.isSwitched = false;
      }
    };
};

// **********Super Mario game***************//




 // **********BUG FIX***************//
 /*
    Reason: The var 'i' in the for loop makes it function scoped and in the closure it will have 3 as its value;
    let 'i' will be block scoped and it will retain the values 0, 1, 2 in the closure

 	var checkAttendanceFunc = function(nameArr){
		var resultArr = [];
		for(var i = 0; i < nameArr.length; i++){
			resultArr.push(function(){ console.log('Is', nameArr[i], 'present?', i)})
		};
		return resultArr;
	};
 */
var checkAttendanceFunc = function(nameArr){
    var resultArr = [];
    for(let i = 0; i < nameArr.length; i++){
        resultArr.push(function(){ console.log('Is', nameArr[i], 'present?', i)})
    };
    return resultArr;
};

// **********called one time***************//

function once(callback){
    let called = 0;
    function closureFunc(){
        if(called){
            callback();
            called = false;
        }else{
            console.log('can be called only once');
        }
    }
    return closureFunc;
}

let callingOnce = once( () => console.log("called me once"));

callingOnce();
callingOnce();