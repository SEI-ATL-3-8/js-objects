# Objects in Javascript

## Goals
1. What is an object? How is it similar to an array? How is it different?
1. How do I create an object?
1. How do I access the values stored inside an object?
1. How do I put new values into an object?
1. How do I loop through the values in an object?

## Objects vs arrays
An object is similar to an array in that they both contain collections of data. Both can contain any number of pieces of data, and any types of data.

The difference comes in how we tell which piece of data is which. In this array:
```js
const stooges = ['Moe', 'Curly', 'Larry']
```

<details>
  <summary>How could you access 'Moe' specifically? How about 'Larry', or 'Curly'?</summary>
  Using their order, or in other words, their index position.
</details>

In an object, the data is stored not based on order, but by associating it with a _key_. The key is a string that lets us choose which piece of data we access in the object.

Here's how to build an object; note the curly braces instead of the square brackets.
```js
const pete = {
  name: 'Pete',
  age: 32,
  city: 'Atlanta',
  hasBeard: true
}
```
The string before the `:` is a _key_, and the data after the `:` is a _value_. Values can be any data type, but keys can only be strings.

## Reading and writing in objects
If we want to pull a certain piece of data out of the `pete` object, we need to access it using its key.
```js
console.log(pete['age']) // logs just pete's age
console.log(pete['city']) // logs just pete's city
```

What if we want to insert a new key-value pair into the object?
```js
pete['hometown'] = 'Tampa'
```
Now if we `console.log` the pete variable, we'll see that it has a new key-value pair. Note that you can use this to overwrite existing keys too!

There is a shortcut for reading and writing in objects using its key strings:
```js
console.log(pete['age'])
// is exactly the same as
console.log(pete.age)


pete['hometown'] = 'Tampa'
// is exactly the same as
pete.hometown = 'Tampa'
```

## Looping through objects
We can loop through objects very similarly to how we loop through arrays.
```js
for (key in pete) {
  console.log('the current key is: ', key)
  console.log('the current value is: ', ???) // how can we complete this?
}
```

## Objects lab!
`open index.html` to get started!

## Object-ception
An object can have any data type within its values, including more objects:
```js
const advancedPete = {
  name: 'Pete',
  age: 32,
  address: {
    city: 'Atlanta',
    state: 'GA'
  }
}
```
<details>
  <summary>How can we access the street Pete lives on?</summary>
  advancedPete['address']['city']
  OR
  advancedPete.address.city
</details>

<details>
  <summary>How can we add a new key-value pair to Pete's address?</summary>
  advancedPete['address']['zip'] = '30032'
  OR
  advancedPete.address.zip = '30032'
</details>
