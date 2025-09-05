// 1 => WAP to implements Create singly Linked list, adding a new Elements, and Delete node from singly linked list (Without any pre-defined function)

// class Node {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null;
//   }

//   addNode(value) {
//     let newNode = new Node(value);

//     if (this.head === null) {
//       this.head = newNode;
//     } else {
//       let temp = this.head;
//       while (temp.next !== null) {
//         temp = temp.next;
//       }
//       temp.next = newNode;
//     }
//   }

//   deleteNode(value) {
//     let temp = this.head;
//     let prev = null;

//     if (temp !== null && temp.data === value) {
//       this.head = temp.next;
//       return;
//     }

//     while (temp !== null && temp.data !== value) {
//       prev = temp;
//       temp = temp.next;
//     }

//     if (temp === null) {
//       console.log(`Value ${value} not found in the list.`);
//       return;
//     }

//     prev.next = temp.next;
//   }

//   displayList() {
//     let temp = this.head;
//     let output = "Linked List: ";
//     while (temp !== null) {
//       output += temp.data + " -> ";
//       temp = temp.next;
//     }
//     console.log(output + "NULL");
//   }
// }

// let list = new LinkedList();
// list.addNode(10);
// list.addNode(20);
// list.addNode(30);
// list.displayList();

// list.deleteNode(20);
// list.displayList();

// OUTPUT

// Linked List: 10 -> 20 -> 30 -> NULL
// Linked List: 10 -> 30 -> NULL

// 2 => WAP to implements Selection Sort using JavaScript DSA without any pre-defined function.

// function selectionSort(arr) {
//   let n = arr.length;

//   for (let i = 0; i < n - 1; i++) {
//     let minIndex = i;

//     for (let j = i + 1; j < n; j++) {
//       if (arr[j] < arr[minIndex]) {
//         minIndex = j;
//       }
//     }

//     if (minIndex !== i) {
//       let temp = arr[i];
//       arr[i] = arr[minIndex];
//       arr[minIndex] = temp;
//     }
//   }

//   return arr;
// }

// let data = [60, 20, 22, 12, 31];
// console.log("Unsorted Array:", data);

// let sorted = selectionSort(data);
// console.log("Sorted Array:", sorted);

//  OUTPUT

// 3 => WAP to implements Stack using JavaScript without any functions?

// let stack = [];
// let top = -1;  

// top++;
// stack[top] = 5;

// top++;
// stack[top] = 10;

// top++;
// stack[top] = 15;

// console.log("Stack after PUSH operations:", stack);

// let popped = stack[top];
// top--;
// console.log("Popped element:", popped);

// let peek = stack[top];
// console.log("Top element after pop:", peek);

// console.log("Final Stack:", stack);


// OUTPUT

// Stack after PUSH operations: [ 5, 10, 15 ]
// Popped element: 15
// Top element after pop: 10
// Final Stack: [ 5, 10, 15 ]


// 4 => WAP to implement binary Search using JavaScript with DSA?


// let myArray = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
// let myTarget = 19 ;
// let left = 0;
// let right = myArray.length -1;

// while(true){
//     if(right < 0 || left >= myArray.length){

//         console.log("value does not found");
//         break;
//     }

//     let mid = Math.floor((left + right) / 2);

//     if(myArray[mid] == myTarget){
//         console.log("Target value is ",mid);
//         break;
//     }
//     if(myArray[mid]< myTarget){
//         left = mid +1;
//     }else{
//         right = mid -1;
//     }
// }

//  OUTPUT

// Target value is  9

// 5 => WAP to implement Merge sort using JavaScript without any function?


// let arr = [20, 35, 4, 6, 19, 75];

// function merge(left, right) {
//     let result = [];

//     while (left.length && right.length) {
//         if (left[0] < right[0]) {
//             result.push(left.shift());
//         } else {
//             result.push(right.shift());
//         }
//     }

//     return [...result, ...left, ...right];
// }

// function Merge(arr) {
//     if (arr.length <= 1) return arr;

//     let mid = Math.floor(arr.length / 2);
//     let left = arr.slice(0, mid);
//     let right = arr.slice(mid);

//     return merge(Merge(left), Merge(right));
// }

// console.log(Merge(arr));



//  OUTPUT

// [ 4, 6, 19, 20, 35, 75 ]

