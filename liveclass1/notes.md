`window` is a global object attached to every document
`documentElement` gives all the elements inside the document
`document.body.children` gives all the children inside the body in an array
`an array is a collection of data displayed in square bracket seperated with commas`

`document.body.firstChild` gives #text as a result
`document.body.firstElementChild` gives first child of the body

to get innterHTML = `document.getElementById("js").innerHTML`

`document.getElementById("js").innerText` gives only the text inside the element not tag inside the element

to target list items

```javascript
let val = document.getElementsByClassName("tech");
console.log(val);
```

to target the first index ot the list

```javaScript
let val = document.getElementsByClassName("tech")[0];
      console.log(val);
```

to target the innerText of list

```javascript
let val = document.getElementsByClassName("tech")[0].innerHTML;
console.log(val);
```

to target innerText of h1

```javascript
let val = document.getElementsByTagName("h1")[0].innerText;
console.log(val);
```

# QuerySelector

```javascript
let value = document.querySelectorAll("p");
console.log(value);
```

```Javascript
 let value = document.querySelectorAll("p");
      console.log(value[2]);
```

to cange bgc

```javascript
document.body.style.backgroundColor = "Blue";
```

DOM works on three thins => method, subobject, onjects
