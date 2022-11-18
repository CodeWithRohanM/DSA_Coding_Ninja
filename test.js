
let arr = [10,1,7,6,14,9];

function swapValues(i, j)
{
    let temp;
    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function BubbleSort()
{
    for(let i=arr.length-1; i>0 ; i--)
    {
        for(let j=0; j<i;j++)
        {
            if(arr[j] < arr[j+1])
            {
                swapValues(j, j+1);
            }
            console.log(arr);
        }
        console.log("Round = "+arr);
    }
}

BubbleSort();

console.log("The Bubble Sorted Array is = "+arr);























// let arr = [6,5,20,32,12];
// let min = -1, index = -1;

// function swapValues(i,j)
// {
//     let temp;
//     temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
// }

// function selectionSort()
// {
//     for(let i = 0; i<arr.length-1;i++)
//     {
//         min = arr[i];
//         index = i;
//         for(let j=i+1;j<arr.length;j++)
//         {
//             if(arr[j] < min)
//             {
//                 index = j;
//                 min = arr[j];
//             }
//         }
//         swapValues(i, index);
//         console.log(arr);
//     }
// }

// selectionSort();
// console.log("The New Array After Selection Sort Is = "+arr);
















// let arr = [2, 3, 5, 9, 12, 20];

// let key = 900;

// let arr2 = [];

// for (let i = 0; i < 900; i++) {
//     arr2[i] = i;
// }


// let first = 0, last = arr2.length - 1, store = -1;
// let mid = Math.floor((last + first) / 2);

// function findSquareRoot(key) {

//     while (first <= last) 
//     {

//         if (mid * mid == key)
//             return mid;
//         else if (mid * mid > key) {
//             last = mid;
//             store = mid;
//             console.log("Store = " + last);
//         }
//         else {
//             first = mid;
//             last = store;
//             console.log("first = " + first);
//             console.log("Last = " + last);
//         }
//         mid = Math.floor((last + first) / 2);
//         console.log("Mid - " + mid);
//     }



// }


// let element = findSquareRoot(key);
// console.log("Square Root = "+element);







// function findPivotElement() {
//     let first = 0;
//     let last = arr.length - 1;
//     let mid = Math.floor(first + (last - first) / 2);
//     while (first < last) {
//         if (arr[mid] < arr[last]) {
//             last = mid;
//         }
//         else {
//             first = mid + 1;
//         }

//         mid = Math.floor(first + (last - first) / 2);
//     }
//     return first;
// }

// const pivotElement = findPivotElement();



// function findElementInPivot(value) {
//     let first = 0;
//     let last = arr.length - 1;
//     let mid = Math.floor(first + (last - first) / 2);


//     if (arr[pivotElement] == value) {
//         return pivotElement;
//     }

//     else if (value > arr[last]) {
//         last = pivotElement - 1;
//         let mid = Math.floor(first + (last - first) / 2);

//         while (first <= last) {
//             if (arr[mid] == value) {
//                 return mid;
//             }
//             else if (value > arr[mid]) {
//                 first = mid + 1;
//             }
//             else {
//                 last = mid - 1;
//             }
//             mid = Math.floor(first + (last - first) / 2);
//         }
//     }
//     else if(value <= arr[last]){
//         first = pivotElement;
//         let mid = Math.floor(first + (last - first) / 2);

//         while (first <= last) {
//             if (arr[mid] == value) {
//                 return mid;
//             }
//             else if (value > arr[mid]) {
//                 first = mid + 1;
//             }
//             else {
//                 last = mid - 1;
//             }
//             mid = Math.floor(first + (last - first) / 2);
//         }
//     }
// }

// let searchValue = 9;
// const elementInPivot = findElementInPivot(searchValue);
// console.log("The element " + searchValue + " is present at position " + elementInPivot);


















// function getPivotElement() {
//     while (first < last) {
//         if (arr[mid] <= arr[last]) {
//             last = mid;
//         }
//         else {
//             first = mid + 1;
//         }

//         mid = Math.floor(first + (last - first) / 2);
//     }
//     return first;
// }

// const pivotElement = getPivotElement();
// console.log("The Pivot Element is : " + arr[pivotElement]);
















// function getPeakElement() {
//     while (first < last) {
//         if (arr[mid] < arr[mid + 1]) {
//             first = mid + 1;
//         }
//         else {
//             last = mid;
//         }

//         mid = Math.floor(first + (last - first) / 2);
//     }
//     return first;
// }

// const peakEle = getPeakElement();
// console.log("The Peak Element is : "+arr[peakEle]);














// function getFirstOccurance(key) {
// let first = 0
// let last = arr.length - 1;
// let mid = Math.floor(first + (last - first) / 2);

//     while (first <= last) {
//         if (arr[mid] == key) {
//             ans1 = mid;
//             last = mid - 1;
//         }
//         else if (key > arr[mid]) {
//             first = mid + 1;
//         }
//         else {
//             last = mid - 1;
//         }

//         mid = Math.floor((first + (last - first) / 2));
//     }
//     return ans1;
// }



// function getLastOccurance(key) {
// let first = 0
// let last = arr.length - 1;
// let mid = Math.floor(first + (last - first) / 2);

//     while (first <= last) {
//         if (arr[mid] == key) {
//             ans2 = mid;
//             first = mid + 1;
//         }
//         else if (key > arr[mid]) {
//             first = mid + 1;
//         }
//         else {
//             last = mid - 1;
//         }

//         mid = Math.floor(first + ((last - first) / 2));
//     }
//     return ans2;
// }

// const firstOccu = getFirstOccurance(key);
// const lastOcuu = getLastOccurance(key);
// const totalOccu = (lastOcuu - firstOccu) + 1;

// console.log("First Occurance of " + key + " is at position " + firstOccu);
// console.log("Last Occurance of " + key + " is at position " + lastOcuu);
// console.log("Total Occurances of " + key + " are " + totalOccu);










