function timeDifference(previous) {
    
    var current = new Date();
    var msPerMinute = 60 * 1000;
    var msPerHour = msPerMinute * 60;
    var msPerDay = msPerHour * 24;
    var msTwoDays = msPerDay * 2;
    var msPerMonth = msPerDay * 30;
    var msPerYear = msPerDay * 365;
    
    var elapsed = current - previous;
    
    if (elapsed < msPerMinute) {
         //return Math.round(elapsed/1000) + ' seconds ago';   
         return 'Few seconds ago';
    }
    
    else if (elapsed < msPerHour) {
             var minTemp = Math.round(elapsed/msPerMinute);
         if (minTemp == 1) {
                return '1 minute ago'
         }
         else {
                return minTemp + ' minutes ago';   
         }
    }
    
    else if (elapsed < msPerDay ) {
             var hourTemp = Math.round(elapsed/msPerHour);
         if (hourTemp == 1) {
                return '1 hour ago'
         }
         else {
                return hourTemp + ' hours ago';   
         }   
    }

    
    else if (elapsed < msTwoDays ) {
         return 'Yesterday';   
    }
    else if (elapsed < msPerMonth) {
         return Math.floor(elapsed/msPerDay) + ' days ago';   
    }
    /*
    else if (elapsed < msPerYear) {
         return 'approximately ' + Math.round(elapsed/msPerMonth) + ' months ago';   
    }
    */
    else {
         //return 'approximately ' + Math.round(elapsed/msPerYear ) + ' years ago'; 
         return previous.toDateString();
    }
}


// TESTS
//var current= new Date(2011, 04, 24, 13, 30, 30, 30);
//get all elements with class name postTime
var postTimeElements = document.getElementsByClassName("postTime");
for (var i = postTimeElements.length - 1; i >= 0; i--) {
    var previous = new Date(postTimeElements[i].innerHTML);
    //console.log(previous);
    postTimeElements[i].innerHTML = "- " + timeDifference(previous);
}
/*
var previous = new Date("2016-12-25T00:00:00");
alert(previous);
alert(timeDifference(previous));
alert(timeDifference(current, new Date(2011, 04, 24, 12, 00, 00, 00)));
alert(timeDifference(current, new Date(2011, 04, 24, 11, 00, 00, 00)));
alert(timeDifference(current, new Date(2011, 04, 23, 12, 00, 00, 00)));
alert(timeDifference(current, new Date(2011, 03, 24, 12, 00, 00, 00)));
alert(timeDifference(current, new Date(2010, 03, 24, 12, 00, 00, 00)));
*/


