var fs = require('fs');

fs.appendFile('mynewfile1.txt', 'This is my text.', function (err) {
   if (err) throw err;
   console.log('Updated!');
});


/*
You can also use '.writeFile()' to update an existing file as well.
it completely replaces the content.
*/

/*
fs.writeFile('mynewfile3.txt', 'This is my text', function (err) {
    if (err) throw err;
    console.log('Replaced!');
});
*/