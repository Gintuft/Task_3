//1.1 В цикле вывести в консоль все элементы массива, используя 2 разных цикла: for-of и for со счетчиком.

const arr = [2,5,9,7,8,10,15]

function getArrelement(array){
    let arrayLenght = array.length
    for (let i = 0; i < arrayLenght; i++){
        console.log(array[i])
        }
}
let result = getArrelement(arr)
console.log(result)

const arr1 = [2,5,9,7,8,10,15,25,27]

function getArrayelement(array){
    for(let item of array){
        console.log(item)
    }        
}

let result1 = getArrelement(arr1)
console.log(result1)



//1.2 Посчитать и вывести в консоль сумму элементов в массиве из чисел.

const arr = [2,5,9,7,8,10,15]

function getSumOfElement(array){
    let sum = 0
    for(let item of arr){
        sum += item
    }
    console.log(sum)
}
let result = getSumOfElement(arr)
console.log(result)


//1.3 Посчитать и вывести в консоль сумму четных элементов в массиве из чисел.


const arr = [2,5,9,7,8,10,15]

function getSumOfEvenElement(array){
    let sum = 0
    for(let item of arr){
        if(item%2 == 0){
            sum = sum + item
        }
    }    
    console.log(sum)
}

let result = getSumOfEvenElement(arr)
console.log(result)



// 2. Определить массив, например let arr = [5, 4, 3, -3, -10, -1, 8, -20, 0];
// В цикле создать новый массив из элементов массива arr, но в новом должны содержаться только положительные элементы.

// Подсказка. Сразу нужно объявить пустой массив-хранилище (например, let newArr = []). Потом пройтись в цикле по массиву arr, и в каждой итерации, если элемент положительный, добавлять его в массив newArr (сделать это можно при помощи newArr.push(item). 

const arr = [5, 4, 3, -3, -10, -1, 8, -20, 0]
function getNewArrayOfPositiveNumbers(array){
    const newArr = []
    for (let item of array){
        if (item > 0){
            newArr.push(item)
        }
    }
    console.log(newArr)
    }
let result = getNewArrayOfPositiveNumbers(arr)
console.log(result)


// 3. Определить массив, например let arr = [5, 4, 3, 8, 0]; и переменную let limit = 5;
// Создать новый пустой массив. В цикле наполнить его элементами arr, но в новом должны содержаться элементы больше и равные (>=) значения переменной limit.


const arr = [5, 4, 3, 8, 0]
let limit = 5

function getNewArray(array, mean){
    const newArr = []
    let arrayLength = array.length
    for (let i = 0; i < arrayLength; i++){
        if (array[i] >= mean){
            newArr.push(array[i])
        }
    }
    console.log(newArr)
}
let result = getNewArray(arr, limit)
console.log(result)



// 4. Описать массив из объектов с двумя полями: строковым и числовым. Пройти в цикле по массиву и вывести строковое поле каждого объекта, если его числовое поле больше 10.

const arr = [
    {name: 'Ivan', age: 25},
    {name: 'Vasia', age: 28},
    {name: 'Katia', age: 7},
    {name: 'Kolya', age: 70},
    {name: 'Sasha', age: 17},
    {name: 'Polina', age: 37},
    {name: 'Dima', age: 37},
    {name: 'Sofia', age: 47}
]

function getArrayOSstringField (array){
    let arrayLength = array.length
    for (let i = 0; i < arrayLength; i++){
        for (let item of array){
            if(array[i]['age'] > 10){
                console.log(array[i]['name'])
            }
        }
    }
}

let result = getArrayOSstringField (arr)
console.log(result)

// 5. Задать массив слов. В цикле сформировать массив объектов с ключами word (само слово), length (длина слова)

const arr = ['masha', 'kolya', 'vadim', 'misha', 'vitaliy']

function getNewArr(array){
    const newArr = []
    for (let item of array){
        newArr.push({word: item, length: item.length})          
    }
    return newArr
}

let result = getNewArr(arr)
console.log(result)



// 5.1 Пройтись по полученному массиву объектов и вывести в консоль строки вида "слово - длина_слова", например "картошка - 8"


function getNewArrOfStrings(newArray){
    for (let item of newArray){
        console.log(item['word'] + '-' + item['length'])
    }
}
let result1 = getNewArrOfStrings(result)
console.log(result1)


// 2) Создать функцию findPositiveNumbers().
// 2.1) Внутри функции должен определяться массив, например let arr = [5, 4, 3, -3, -10, -1, 8, -20, 0] .
// Функция должна вывести в консоль все положительные числа по одному.

function findPositiveNumbers(){
    const arr = [5, 4, 3, -3, -10, -1, 8, -20, 0]
    for (let item of arr){
        if (item > 0){
            console.log(item)
        }
    }
}
findPositiveNumbers()



// 2.2) Функция должна не выводить числа в консоль, а составить из них новый массив. В самом конце тела функции - вывести новый массив в консоль.


function getNewArrayOfPositiveElements(){
    const arr = [5, 4, 3, -3, -10, -1, 8, -20, 0]
    const newArr = []
    for(let item of arr){
        if(item > 0){
            newArr.push(item)      
        }
    }
    console.log(newArr)
}    
getNewArrayOfPositiveElements()   


// 2.3) Функция должна не выводить массив в консоль,а вернуть новый массив из положительных элементов arr.

function getNewArrayOfPositiveElements(){
    const arr = [5, 4, 3, -3, -10, -1, 8, -20, 0]
    const newArr = []
    for(let item of arr){
        if(item > 0){
            newArr.push(item)      
        }
    }
    return newArr
}    




// 2.4) Изначальный массив arr должен не описываться внутри функции, а поступать в нее как параметр

const arr = [5, 4, 3, -3, -10, -1, 8, -20, 0]

function getNewArrayOfPositiveElements(array){    
    const newArr = []
    for(let item of array){
        if(item > 0){
            newArr.push(item)      
        }
    }
    return newArr
}    



// 3) Определить массив, например let arr = [5, 4, 3, 8, 0];

// Создать функцию filterFor(arr, a). Функция должна вернуть новый массив из элементов arr, но в нем должны содержаться элементы, которые больше или равны (>=) значения переменной a.

// например запуск функции filterFor(arr, 5) дает результат [5,8], а запуск функции filterFor(arr, 10) дает результат [],  а запуск функции filterFor(arr, 3.11) дает результат [4,5,8]

const array = [5, 4, 3, 8, 0]

function filterFor(arr, a) {
    const newArr = []
    for (let item of arr){
        if (item >= a){
            newArr.push (item)
        }
    }
    return newArr
}


