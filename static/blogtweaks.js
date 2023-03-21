var todaysDay = new Date(); //Date object
//Store current year, month and day
var year = String(todaysDay.getFullYear());
var month = String(todaysDay.getMonth() + 1);
var day = String(todaysDay.getDate());

//Checks if the month or day is below 10 and if so adds a 0 since the single digit numbers do not get a 0 assigned to them
if(month < 10){
    month = '0'.concat(month);
}
if(day < 10){
    day = '0'.concat(day);
}

var maxDate = year.concat("-", month, "-", day);

document.getElementById("maxdate").setAttribute("max", maxDate);   //Finds the element by ID and sets the max atribute

//Set the max date for the edit modal
var dates = document.querySelectorAll(".maxdateblogs");
for(let i = 0; i<dates.length; i++){
    dates[i].setAttribute("max", maxDate);
}



//Get all of the pop up modals, edit buttons to enter those popups and close buttons to close the same popups
var modalCollection = document.getElementsByClassName('bg-modal');
var editbtnCollection = document.getElementsByClassName('editbtn');
var closebtnCollection = document.getElementsByClassName('closebtn');


for (let i = 0; i < editbtnCollection.length; i++){
    editbtnCollection[i].addEventListener('click', function(){  //Opens the popup
        modalCollection[i].style.display = 'flex';
    })
}


for(let i = 0; i < closebtnCollection.length; i++){
    closebtnCollection[i].addEventListener('click', function(){   //Closes the edit popup
        modalCollection[i].style.display = 'none';
    })
}

//Set current year by default, in this case 2022
var todaysDateSet = document.getElementById('2022').innerHTML = year;




//Takes the values from the drop down and compares them to the blog dates
function searchFilter(){
    let selectedYear = document.getElementById('year-filter').value;
    const blogs = document.getElementsByClassName('main-block2');
    const blogYears = document.querySelectorAll('.blog-date');
    
    for (let i = 0; i < blogs.length; i++){
        var blogYear = blogYears[i].textContent.slice(0,4); //Trim the date month and day part

        //If the selected year off the drop down equates to the blog div display it other wise do not
        if(blogYear == selectedYear){
            blogs[i].style.display = 'flex'
        }
        else{
            blogs[i].style.display = 'none'
        }

    }
    
}
searchFilter();  //To make sure to filter the 2022 posts on the initial page come up




