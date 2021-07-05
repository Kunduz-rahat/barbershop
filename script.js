// let num = 5
// console.log(num)
//
// / let a = 10
// let b = 2
// let c = 5
// console.log( a + b + c )

// let a = 100
// let b = 2
// console.log( a * b )


// let a = 67
// let b = 7
// console.log(  a % b )

// let a = 10
// let b = 2
// console.log( a + b )
// console.log( a - b )
// console.log( a * b )
// console.log( a / b )


// let c = 15
// let d = 2
// let result = c + d
// console.log(result)

// let a = 30
// let b = 15
// let c = a + b
// let d = 4
// console.log( c % d )


// let a = 17
// let b = 10
// let c = a - b
// let d = 5
// let result = c + d
// console.log(result)


// let a = "10"
// let b = "99"
// let result = a + b
// console.log(result)


// let name = "Аскар"
// let number = 10
// let result = name + number
// console.log( result )

// let a = 20
// let b = 10
// a = a + b
// console.log( a )


// let a = 20
// let b = 10
// b = a - b
// console.log(b)

// let a = 90
// let b = 2
// a = a + b
// console.log(a)

// let a = 50
// let b = 5
// a = a * b
// console.log( a )


// let a = 660
// let b = 2
// a = a / b
// console.log( a )


// let a = 999
// let b = 9
// console.log( a % b )


// let a = 104
// let b = 10
// console.log( a % b )


// let a = 23
// let b = 5
// console.log( a % b )

//
// let a = 20
// let b = 21
// console.log( a > b )

// let a = 20
// let b = 21
// console.log( a < b )

// Интерполяция и конкатенация


// let name = "Kunduz"
// console.log( name
//
//     )

//
// let age = 30
// console.log( age )


// let str = " Привет, мир!"
// console.log( str )


// let str1 = "Привет,"
// let str2 = "мир!"
// console.log( str1 + " " + str2)


// let name = "Kunduz"
// console.log( "Привет, " + name)

// let age = 30
// console.log( "Мне " + age + "лет")

// let a = "Земля"
// let b = 365
// let c = "7 млдр"
// let d =  "Солнце"
// console.log( `В нашем году ${b} дней.  Днем у нас светит ${d}. Население планеты ${a} составляет ${c} человек.`)


// let a = "Welcome"
// let b = "Ivan"
// console.log( a + "," +" " + b + "!")

// let a = 50
// console.log( typeof a)
// //
// let a = 10
// let b = 35
// let result = a + b + ""
// console.log(typeof result)

// let a = "10"
// console.log(typeof a)

//
// let a = "Kunduz"
// console.log(typeof a)

// let a = 67
// console.log(typeof a)

// let a = 56
// let b = 45
// console.log( a > b )
// console.log( a < b )


// let str = "информатика"
// console.log(str.length)


// let str = "Мы выполняем домашнее задание"
// console.log(str.split(" ")[2].length)
//
//
// split применяется только к строкам, разбивая строку на массив
//

// 1. if / else
// if (условие) {
//     // код, который будет запущен, только если условие истинно
// } else {
//     // иначе этот код будет запущен
// }
// if( 1===7 ){
//     console.log(4)
//
// } else if (0===5){
//
//     console.log(8)
// }
// else {
//     console.log(90)
// }

// console.log(false&&false)

//
// 1. Вам дана переменная a. Если переменная a равна 10, то выведите 'Верно', иначе выведите 'Неверно'.
// let a = 24
// if( a === 10){
//  console.log( 'Верно')
// } else {
//  console.log( 'Неверно')
// }

//
// 2.Вам даны две переменные a=50, b=100. Составьте условие, по которому в консоль будет выводиться
// 'a больше b', 'a меньше b'.
// let a = 50
// let b = 100
//  if ( a < b){
//   console.log('a меньше b')
//  }else {
//   console.log('a больше b')
//  }
//
// 3. Вам дана переменная a=-2. Составьте условие, по которому в консоль будет выводиться 'positive' -
// если число больше 0, 'равно' если число равно 0, "negative" если число меньше 0.
// let a = -2
// if( a > 0 ){
//     console.log('positive')
// } else if( a < 0){
//     console.log('negative')
// }else if (a === 0){
//     console.log('равно')
// }

// 4. Вам дана переменная number=45. Составьте условие, по которому будет выводиться в консоль
// "Четное число", "Нечетное число".
// let a = 45
// // if ( a %2 ===0 ){
// //     console.log('Четное число')
// // } else{
// //     console.log('Нечетное число')
// // }
// 5.Вам даны две переменные a=10, b=2. Составьте условие, по которому, остаток деления a на b, будет
// выводиться консоль "Четное число", "Нечетное число".

// let a = 10
// let b = 2
// if ( a%b ===0){
//     console.log('Четное число')
// } else {
//     console.log('Нечетное число')
// }

// 6. Вам дана переменная s. Составьте условие, по которому в консоль будет выводится тип этой переменной -
// "boolean", "number", "string".
//
// let s = 'kunduz'
// if (typeof s === 'number'){
//     console.log('number' )
// }else if (typeof s === 'boolean'){
//     console.log('boolean')
// }else if (typeof s === 'string'){
//     console.log('string')
// }

// 7.Вам дана переменная а. Если переменная a больше одного и меньше 9-ти, то выведите
// 'Верно', иначе выведите 'Неверно'.

// let a = 3
// if ( a > 1 && a< 9){
//     console.log('Верно')
// }else {
//     console.log('Неверно')
// }
// 8.Вам дана переменная а. Если переменная a равна трем или равна семи, то прибавьте к ней 7,
//     иначе поделите ее на 10. Выведите новое значение переменной в консоль.

// let a = 4
// if (a ===3 || a===7){
//     console.log( a+ 7)
// }else {
//     console.log( a/10)
// }
//
// 9. Вам даны переменные а , b. Если переменная a равна или меньше 0, а переменная b больше или равна 5,
//     то выведите сумму этих переменных, иначе выведите их разность (результат вычитания).
// let a = 1
// let b = 6
// if (a<=0 && b>=5){
//     console.log(a+b)
// }else {
//     console.log(a-b)
// }

// 10. Вам даны переменные a , b. Если переменная a больше 4-х и меньше 10-ти, или переменная b больше или равна
// 7-ми и меньше 17-ти, то выведите 'Верно', в противном случае выведите 'Неверно'.

// let a = 3
// let b = 8
// if (a>4 && a<10 || b>=7 && b>17){
//     console.log('Верно')
// }else {
//     console.log('Неверно')
// }
// 11. дана переменная month. В ней лежит какое-то число из интервала от 1 до 12. Определите в какую пору года
// попадает этот месяц (зима, лето, весна, осень).
//    let month = 11
// if (month >=1 && month<=2 && month === 12){
//     console.log('зима')
// }else if (month>=3 && month <=5){
//     console.log('весна')
// }
// else if (month>+6 && month <=8){
//     console.log('лето')
// }
// else if (month>=9 && month <=11){
//     console.log('осень')
// }
// 12. Вам дана переменная day. В ней лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца
// попадает это число (в первую, вторую или третью).

// let a = 31
// if (a>=1 && a <= 10){
//     console.log('Первая декада')
// }else if( a>=11 && a<=20){
//     console.log('Вторая декада')
// }else if (a>=21 && a<=31){
//     console.log('Третья декада')
// }else{
//     console.log('Неверное число')
// }
// 13. Вам дана переменная a='12345'. Проверьте, что первым символом этой переменной является цифра 1, 2 или 3. Если это так
// – выведите ‘да’, в противном случае выведите ‘нет’.
// let a = '12345'
// if (a[])

// 14. Вам дана переменная age=*любое двузначное число*. Составьте условие, по которому, в консоль будет выводиться "Мне ** год",
//     "Мне ** лет", в зависимости от возраста. Наример мне 21 год, мне 20 лет.

// let age= 56
// if (age >=10 && age<=20 ){
//     console.log(`Мне ${age} лет`)
// } else if (age % 10===1){
//     console.log(`Мне ${age} год`)
// }else if (age % 10===2 || age % 10===3 || age % 10===4 ){
//     console.log(`Мне ${age} года`)
// }else {
//     console.log(`Мне ${age} лет`)
// }
// 15. Вам дана переменная time= *любое чило от 1 до 59*. Составьте условие, по
// которому время будет делиться на четверти. Пример: time = 12 -
//     Первая четверть. Если число больше 60, то в консоли будет выдаваться "Неверное число".

// let time = 6
// if (time>=0 && time<=15){
//     console.log('Первая четрверь')
// } else if (time >16 && time<=30){
//     console.log('Вторая четверть')
// }else if (time>30 && time<=45){
//     console.log('Третья четверть')
// }else if (time >45 && time<=60){
//     console.log('Четвертая четверть')
// }else {
//     console.log(' Неверное число')
// }

// 16. Вам дана переменная num. Если переменная a равна
// // 110, то выведите 'Верно', иначе выведите 'Неверно'.
//  let a = 110
// if (a ===110){
//     console.log('Верно')
// }else {
//     console.log('Неверно')
// }

// 17. Вам дана переменная а. Если переменная a больше 40 и меньше
// 60, то выведите 'Верно', иначе выведите 'Неверно'
//
// let a = 56
// if (a > 40 && a < 60){
//     console.log('Верно')
// }else {
//     console.log('Неверно')
// }

// 18. Даны переменные a и b. Проверьте, что a делится без остатка на b. Если это так -
// выведите 'Делится' и результат деления, иначе выведите 'Делится с остатком' и остаток от деления.

// let a = 35
// let b = 8
// if (a%b===0){
//     console.log(a/b)
// }else (console.log(a%b))
// 19.Найдите квадратный корень из 77.
// console.log(Math.sqrt(77))

// 20.возведите 3 в 10 степень. Результат запишите в переменную a.
// let a = 3
// console.log(Math.pow(a,10))

// 21. .переводите число в строку 11. (3 способа)
// let a = 5
// a = String(a)
// console.log(typeof a)
//
// let s = 7
// s = s.toString()
// console.log(typeof s)
//
// let w= 56
// w =w+''
// console.log(typeof w)

// 22.переводите строку в число 33. (3 способа)

// let d = '33'
// d = Number(d)
// console.log(typeof d)

// let d = '33'
// d = parseInt(d)
// console.log(typeof d)


// let d = '33'
// d =+d
// console.log(typeof d)


// 23. округлите число в большую сторону, в меньшую сторону и до ближайшего целого.
//  console.log(Math.ceil(23.4))
// console.log(Math.floor(25.2))
// console.log(Math.round(67.8))
// console.log(Math.round(67.2))

// 24. создайте условие если в переменной age будет число меньше 18 то выведите
// 'вы должны быть старше 18', если больше 18 то выведите 'добро пожаловать!'.

// let age = 16
// if (age >=18){
//     console.log('добро пожаловать!')
// }else {
//     console.log('вы должны быть старше 18')
// }
// 25. выведете рандомные числа от 0 до 200.
// console.log(Math.random()*200)

// 26. создайте две переменные, today = сегодняшнее число, birthday = число вашего день рождения, и пропишите
// условие если сегодняшнее число равно вашему дню рождения то выведете “happy birthday” если нет “not today”.

// let today = 4
// let birthday = 14
// if (today===birthday){
//     console.log('happy birthday')
// }else {
//     console.log('not today')
// }
//
// 27. создайте условие если переменная light равна green то выведете «можете ехать» если yellow
// то «немного подождите»
// если red то «остановитесь» если любой другой то «неизвестно».
//
// let light = 'green'
// if (light==='green'){
//     console.log('можете ехать')
// }else if ( light ==='yellow'){
//     console.log('немного подождите')
// }else if (light=== 'red'){
//     console.log( 'остановитесь')
// }else {
//     console.log('неизвестно')
// }

// 28. создайте три переменные с числами, и создайте условие если все три
// равны то выведете «все равны» если хоть одна не равна выведете «не равны».

// let a = 4
// let b = 4
// let c = 4
// if (a === b && b ===c && c ===a){
//     console.log('все равны')
// }else {
//     console.log('не равны')
// }
// 29. создайте две переменные, today = сегодняшнее число, birthday = число вашего день рождения, и пропишите
// условие если сегодняшнее число равно вашему дню рождения
// то выведете “happy birthday” , если число меньше чем ваше день рождения то выведете «ещё рано» а если больше то выведете «уже поздно».

// let today = 17
// let birthday = 14
// if (today===birthday){
//     console.log('happy birthday')
// }else if (today<birthday){
//     console.log('ещё рано')
// }else if(today>birthday){
//     console.log('уже поздно')
// }
// 30.вам дана строка из 3-х цифр. Найдите сумму этих цифр. То есть сложите как числа первый символ строки, второй и третий.??????????????
// let f = '123'
// let sum = Number(f[0])+Number(f[1])+Number(f[2])
// console.log(sum)

// 31. создайте переменную внутри будет строка из 6 цифр. Проверьте, что сумма первых трех цифр равняется сумме вторых трех цифр.
// //     Если это так - выведите 'да', в противном случае выведите 'нет'.

// let num = '123456'



// // класнная работа 5 июля 2021 года
// let a = 43
// if (a % 3===0 && a % 5===0){
//     console.log('fizzbuzz')
// }else if( a % 3 ===0) {
//     console.log('fizz')
// } else if (a % 5 ===0){
//     console.log('buzz')
// }else {
//     console.log(a)
// }


// let a = 34
// if (a%2===0){
//     console.log('Четное число')
// }else {
//     console.log('Нечетное число')
// }
// let a = 34
// console.log (a % 2 === 0 ? 'Четное число' : 'Нечетное число')




// Массивы - набор данных

//
// let numbers = [32, 45, 56, 67,87]
// let emptyArray = []
//
// let users = ["Aigerim", "Bilai", "Kunduz", "Dima"]
// users[4]="Ivan"
// users[1]="Fika"
// console.log(users)
// console.log(users.length)
// console.log(users[0])

//
// let str = 'Lorem ipsum, deolor sit amet'
// let srt2= 'Olan'
// console.log(str)
// console.log(str.length)
// console.log(str.toLowerCase())
// console.log(str.toUpperCase())
// console.log(str.split("")) // разделение по буквам
// console.log(str.split(" ")) // разделение по словам
// console.log(str.split(",")) // разделение по запятам и так далее
//
// console.log(str.substr(1, 4)) // от 1 индекса берет 4 индекса
// console.log(str.substring(2, 4)) // от 2 индекса  до 4 индекса аналогично методу substr () выше, за исключением того,
// // что конечный индекс не включается в возвращаемую строку.
//
// console.log(str.concat(srt2, "Misha"))
// console.log(str.indexOf('e'))
// console.log(str.indexOf('E'))
// console.log(str.lastIndexOf('e'))
// console.log(str.includes('amet'))
// console.log(str.lastIndexOf(','))
// console.log(str.lastIndexOf(','))
//
// let example = ' ivanov '
// console.log(example.length)
// console.log(example.trim().length) // убирает пробелы в начале и в конце
//
// let letter = 'lorem ipsum dolor'
// console.log(letter.replace('o', '*')) // заменяет значение
// console.log(letter.replace(/o/g, '*')) // заменяет все значение

// Home work 3==================
// 1. Вам дана переменная str = 'Nevis ITDB TECH'. Выведите в консоль длину первого слова.
// let str ='Nevis ITDB TECH'
// console.log(str.split(" ")[0].length)

// 2. Вам дана переменная str = 'Максимально УЖАСНО'. Выведите в консоль слово УЖАСНО,
//     только нижним регистром.
//
// let str = 'Максимально УЖАСНО'
// console.log(str.split(" ")[1].toLowerCase())
//
// 3. Вам дана переменная str = 'максимально УЖАСНО'. Выведите в консоль слово
// максимально, только верхним регистром.
// let str = 'максимально УЖАСНО'
// console.log(str.split(' ')[0].toUpperCase())

// 4. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль каждый символ этой
// строки, используя метод split.
//     Пример : [ 'C','o','d','i','n','g',' ','i','s',' ','t','h','e',' ', 'L','O','V','E',
//     ' ','o','f',' ','m','y',' ','L','I','F','E','!' ]
// let str = 'Максимально Ужасно'
// console.log(str.split(''))

// 5. Вам дана переменная str = 'Максимально Ужасно, переделывай'. Выведите в консоль все слова этой строки,
//     используя метод split. Пример: [ 'Максимально' 'ужасно', 'переделывай'. ]
// let str = 'Максимально Ужасно, переделывай'
// console.log(str.split(' ,'))

// 6. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль
// 'мально Ужасно', используя метод slice.

// let str = 'Максимально Ужасно'
// console.log(str.slice(5,18))

// 7. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль букву У, использую метод charAt.
// let str = 'Максимально Ужасно'
// console.log(str.charAt(12))

// 8. Вам даны переменные str = 'Максимально', str2 = 'Ужасно'. Выведите в консоль
// соединенные строки, используя метод concat.

// let str = 'Максимально'
// let str2 = 'Ужасно'
// console.log(str.concat(str2))

// 9. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль индекс слова 'Ужасно'.
// let str = 'Максимально Ужасно'
// console.log(str.indexOf('Ужасно'))

// 10. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль "встречается более 1 раза",
//     если букв 'a' встречается более 1 раза, иначе "встречается менее одного раза"


// let str = 'Максимально Ужасно'
// console.log(str.indexOf('а')===str.lastIndexOf('а')? 'встречается менее одного раза': 'встречается более 1 раза')

// 12. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль индекс последней буквы а.
// let str = 'Максимально Ужасно'
//     console.log(str.lastIndexOf('а'))

// 13. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль индекс первой буквы о.
// let str = 'Максимально Ужасно'
// console.log(str.indexOf('о'))

// 14. Вам дана переменная str = 'aaa bbb ccc'. Вырежите из нее слово 'bbb' тремя разными способами
// (через substr, substring, slice) и выведите в консоль.
// let str = 'aaa bbb ccc'
// console.log(str.substr(4,3))
// console.log(str.substring(4,7))
// console.log(str.slice(4,7))

// 15. Вам дана переменная str = '17-02-2021'. Преобразуйте эту дату в формат '31/12/2025' и выведите в консоль.
// let str = '17-02-2021'
// console.log(str.replace('17-02-2021', '31/12/2025'))

// 16. Вам дана переменная str = 'Максимально Ужасно'. Проверьте, есть ли буква "в" в данной строке, если да,
//     то выведите "Да", иначе - "нет".

// let str = 'Максимально Ужасно'
// console.log(str.includes('в')? 'Да':'нет')

// 17. Вам дана переменная str = 'АаааааА'. Проверьте, если первая буква в строке совпадает с последней,
//     если да, то выведите в консоль "Совпадает", иначе - "Не совпадает".
//
// let str = 'АаааааА'
// console.log(str.indexOf('0')===str.lastIndexOf('6')? 'Совпадает':'Не совпадает')

//
// 18. Вам дана переменная str = 'Максимально'. Проверьте, если буква л, встречается в первой половине
// строки, или последней.
//     Если в первой, то выведите в консоль - "В первой половине", иначе - "Во второй половине".

// let str = 'Максимально'
// console.log(str.includes('л')< str.length/2 ? 'Во второй половине': 'В первой половине')