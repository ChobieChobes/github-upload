var jsf = require('json-schema-faker')
var fs = require('fs');
var faker = require('faker');

faker.locale = "en_GB";

var childrenSchema = JSON.parse(fs.readFileSync('children.schema.json', 'utf8'));
var lettersSchema = JSON.parse(fs.readFileSync('letters.schema.json', 'utf8'));

jsf.extend('faker', () => faker);
jsf.format('nl-address', () => `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.zipCodeByState()}`);

var childrenData = jsf.generate(childrenSchema);

console.log(JSON.stringify(childrenData))

var lettersData = jsf.generate(lettersSchema);

// Overwrite letters names with names from children
for (var i = 0; i < lettersData.length && i < childrenData.length; i++)
{
    lettersData[i].firstName = childrenData[i].firstName;
    lettersData[i].familyName = childrenData[i].familyName;
}

console.log(JSON.stringify(lettersData))

// TODO childrenData and lettersData now ready to be pushed to S3 bucket.