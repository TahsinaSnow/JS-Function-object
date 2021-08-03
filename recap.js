// variable declare

var favouriteBook = " 4 hour work week";

// array
var bookList = ['positioning', 'hooked','start with why', 'shoe dog'];
var shoeDogIndex = bookList.indexOf('shoe dog');
bookList[1] = 'story brand';

bookList.push('small giants');
bookList.pop();

// conditionals
if(bookList[1] == 'hooked'){
    console.log('i am hooked');
}
else{
    console.log('i am not hooked');   
}


// while loop
var i = 0;
while(i < 15){
    console.log(i);
    console.log('looping looping looping');
    i++;
}

// for loop
for(var i = 0; i < 15; i++){
    console.log(i);
    console.log('looping looping looping');
}