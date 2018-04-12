// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:



/*
Notes: 
//input: object with different types of values? 
//output: the object converted to a string
Steps: 
    --cannot put quotes around values - shows double quotes
	-need to check each type of value to see how to convert to a string
		- array --> Add quotes on each side of brackets
			need to loop through values...could use recursions here. 
		if the object is an actual obj- need to iterate through this - could use recursions here
-Once object and arrays are iterated, I can look at simple values and convert to strings: 
		- string --> use double quotation marks
		- numbers --> add ("" + ) before value 
		- true/false booleans ---> same as numbers
		-undefined/null --> same as numbers
 

*/
var stringifyJSON = function(obj) {
   
       var  valuesArray = []
       var  keys = []
       var propertyValues = []
   
    if (typeof obj === 'number' || typeof obj === 'boolean'|| typeof obj ==='undefined' ||  obj === null)
        return '' + obj;
    else if (typeof obj === 'string')
        return '"' + obj + '"';

   
    else if (Array.isArray(obj)) {
        //check for empty array
        if (!obj[0])
            return '[]';
        else {
            obj.forEach(function(el) {
                 valuesArray.push(stringifyJSON(el));
            });
            return '[' +  valuesArray + ']';
        }
    }
    
    else if (typeof obj === 'object') {
        //get object keys
        for (var key in obj) {
        	keys.push(key)
        }
        
       keys.forEach(function(keyValue) {
            if (typeof obj[keyValue] === 'string')
                propertyValues.push('"' + keyValue + '":"' + obj[keyValue] + '"');
            else if (typeof obj[keyValue] === 'boolean' || typeof keValOut === 'number' || obj[keyValue] === null)
                propertyValues.push('"' + keyValue + '":' + obj[keyValue]);
           else if (typeof obj[keyValue] === 'object') {
                propertyValues.push('"' + keyValue + '":' + stringifyJSON(obj[keyValue]));
            }
        });
        return '{' + propertyValues + '}';
    }
};