var jsf = require('json-schema-faker')
var fs = require('fs');

var childrenSchema = JSON.parse(fs.readFileSync('children.schema.json', 'utf8'));

jsf.extend('faker', () => require('faker'));

var childrenData = jsf.generate(childrenSchema);

console.log(JSON.stringify(childrenData))

// Using the names generated in the above, we need now generate the santa letters