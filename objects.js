console.log('hello from console')
// 1) Create an object that contains the names of 3 friends as keys, with each key pointing to that friend's age. (It is ok to guess your friends' ages.) Assign this object to a variable called friends.
let friends = {
    jesse: 25,
    jason: 40,
    roland: 28
}
// 2) Add a fourth friend to the friends object.
friends['jackson'] = 22;
// 3) Access the age of your oldest friend. Save it to a variable, and print it
let oldMan = friends['jason']
console.log(`${oldMan} is getting old`)
// 4) Loop through your friends object, and for each key-value pair, print "<name> is <age> years old"
for (friend in friends) {
    console.log(friend + ' is ' + friends[friend] + ' years old')
}