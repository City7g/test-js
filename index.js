let testData = [
  1,
  2,
  1990,
  85,
  24,
  'Vasya',
  'colya@example.com',
  'Rafshan',
  'ashan@example.com',
  true,
  false,
]
let testData2 = [1, 2, 1990, 85, 24, 5, 7, 8.1]
let testData3 = [
  {
    name: 'Vasya',
    email: 'vasya@example.com',
    age: 20,
    skills: {
      php: 0,
      js: -1,
      madness: 10,
      rage: 10,
    },
  },
  {
    name: 'Dima',
    email: 'dima@example.com',
    age: 34,
    skills: {
      php: 5,
      js: 7,
      madness: 3,
      rage: 2,
    },
  },
  {
    name: 'Colya',
    email: 'colya@example.com',
    age: 46,
    skills: {
      php: 8,
      js: -2,
      madness: 1,
      rage: 4,
    },
  },
  {
    name: 'Misha',
    email: 'misha@example.com',
    age: 16,
    skills: {
      php: 6,
      js: 6,
      madness: 5,
      rage: 2,
    },
  },
  {
    name: 'Ashan',
    email: 'ashan@example.com',
    age: 99,
    skills: {
      php: 0,
      js: 10,
      madness: 10,
      rage: 1,
    },
  },
  {
    name: 'Rafshan',
    email: 'rafshan@example.com',
    age: 11,
    skills: {
      php: 0,
      js: 0,
      madness: 0,
      rage: 10,
    },
  },
]
let testData4 = [
  {
    name: 'Vasya',
    email: 'vasya@example.com',
    age: 20,
  },
  {
    name: 'Dima',
    email: 'dima@example.com',
    age: 34,
  },
  {
    name: 'Colya',
    email: 'colya@example.com',
    age: 46,
  },
  {
    name: 'Misha',
    email: 'misha@example.com',
    age: 16,
  },
  {
    name: 'Ashan',
    email: 'ashan@example.com',
    age: 99,
  },
  {
    name: 'Rafshan',
    email: 'rafshan@example.com',
    age: 11,
  },
  1,
  2,
  1990,
  85,
  24,
  'Vasya',
  'colya@example.com',
  'Rafshan',
  'ashan@example.com',
  true,
  false,
  [
    [
      [
        [
          1,
          2,
          1990,
          85,
          24,
          'Vasya',
          'colya@example.com',
          'Rafshan',
          'ashan@example.com',
          true,
          false,
          [
            {
              name: 'Rafshan',
              email: 'rafshan@example.com',
              age: 11,
            },
          ],
        ],
      ],
    ],
  ],
]

// Task 1 fifty fifty
function array_find(arr, value) {
  if (typeof value === 'object') {
    return arr.filter(c => {
      return value.test(c)
    })
  } else {
    return arr.filter(c => {
      return c === value
    })
  }
}

let result1 = array_find(testData, /^raf.*/i) // ["Rafshan"]
let result2 = array_find(testData, 'Rafshan') // ["Rafshan"]

// console.log(result1)
// console.log(result2)

// Task 2 done
function array_avg(arr, skipNaN = false) {
  let sum = 0
  let count = 0

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      sum += arr[i]
      count++
    } else if (skipNaN) {
      count++
    }
  }

  return sum / count
}

let result3 = array_avg(testData2) // ~265
let result4 = array_avg(testData) // ~420
let result5 = array_avg(testData, true) // ~191

// console.log(result3)
// console.log(result4)
// console.log(result5)

// Task 3 done
function array_chunk(arr, count) {
  let oldArr = [...arr]
  let newArr = []

  while (oldArr.length > 0) {
    newArr.push(oldArr.splice(0, count))
  }

  return newArr
}

let result6 = array_chunk(testData2, 2) // [[1, 2], [1990, 85], [24, 5], [7, 8.1]]

// console.log(result6)

// Task 4 done
function array_skip_until(arr, value) {
  let oldArr = [...arr]
  const idx = oldArr.findIndex(c => c === value)
  return oldArr.slice(idx === -1 ? oldArr.length : idx, oldArr.length)
}

let result7 = array_skip_until(testData, 2) // [2, 1990, 85, 24, "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", true, false]
let result8 = array_skip_until(testData, 'Rafshan') // ["Rafshan", "ashan@example.com", true, false]
let result9 = array_skip_until(testData, 'asd') // []

// console.log(result7)
// console.log(result8)
// console.log(result9)

// Task 8 done
function array_combine(keys, values) {
  let newObj = {}
  for (let i = 0; i < keys.length; i++) {
    if (typeof keys[i] === 'string' || typeof keys[i] === 'number') {
      newObj[keys[i]] = values[i]
    }
  }
  return newObj
}

let result17 = array_combine(testData, testData2) // {1: 1, 2: 2, 1990: 1990, 85: 85, 24: 24, "Vasya": 5, "colya@example.com": 7, "Rafshan": 8.1, "ashan@example.com": undefined}

// console.log(result17)

// Task 10 only 22
function array_pluck(arr, path) {
  const newArr = []
  for(let i = 0; i < arr.length; i++) {
    newArr.push(arr[i][path])
  }
  return newArr
}

let result22 = array_pluck(testData3, 'name') // ["Vasya", "Dima", "Colya", "Misha", "Ashan", "Rafshan"]
let result23 = array_pluck(testData3, 'skills.php') // [0, 5, 8, 6, 0, 0]

// console.log(result22)
// console.log(result23)