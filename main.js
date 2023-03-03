 // console.log(100); console.log() - выводит информацию в консоль браузера

 // 8 типов данных
 // string - текстовые строки (строки)
 // записываются в ковычках '' / ""
 // number - числа
 // Infinity (бесконечность) / NaN (Not a number)
 // boolean - логические (булевы) значения (true / fasle)


    // console.log('Первый урок по js');
    // console.log(10);
    // console.log(true);
    // console.log(false);

    // (+) = оператор склеивания

    

    /* var myAge = 'Руслан';
    var age = 29


    console.log('Меня зовут ' + myAge + ' мне ' + age + ' лет.');
    */


    // + перед функцией тлт переменной преобразует наш элемент в числовой тип данных

  /*   var word = +prompt('Введите слово');

    alert(word); */

/*     console.log('10 + 5 = ' + (10+5));
    console.log('10 - 5 = ' + (10-5));
    console.log('10 * 5 = ' + 10*5);
    console.log('10 / 5 = ' + 10/5);
    console.log('10 % 5 = ' + 10%5); */



var myName = prompt ('Введите свое имя');
var myAge = +prompt ('Введите свой возвраст');


console.log('Меня зовут '+ myName);
console.log('Мне ' + myAge + ' лет');

var myPrimer = prompt ('Решите пример 7+7= ?')
console.log('Пример 1: 7+7 = ' +(7+7) + ' Ваш ответ '+myPrimer);

var myPrimer1 = prompt ('Решите пример 132-34= ?')
console.log('Пример 2: 132-34= ' + (132-34) + ' Ваш ответ '+myPrimer1);

var myPrimer2 = prompt ('Решите пример 24524/54 = ?')
console.log('Пример 3: 24524/54 = ' + 24524/54 + ' Ваш ответ '+myPrimer2);

var myPrimer3 = prompt ('Решите пример 154*85 = ?')
console.log('Пример 4: 154*85 = ' + 154*85 + ' Ваш ответ '+myPrimer3);

var myPrimer4 = prompt ('Решите пример 132%34= ?')
console.log('Пример 5: 132%34= ' + 132%34 + ' Ваш ответ '+myPrimer4);


alert ('Откройте консоль для проверки');


var X = +prompt ('Введите первое число')
console.log();
var Y = +prompt ('Введите второе число')
console.log();
var Z = +prompt ('Введите третье число')
console.log();
alert ((X+Y+Z) / 3)























