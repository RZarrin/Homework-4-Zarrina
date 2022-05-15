var a = Number (prompt ('Введите первое число'));
var b = Number (prompt ('Введите второе число'));
var c = Number (prompt ('Введите третье число'));
//сработает если будет числовое значение
if((c < a && a < b) || (c > a && a > b)){
    console.log(a + ' первое число среднее');
}else if((a < c && c < b) || (a > c && c > b)){
    console.log(c + ' второе число среднее');
}else if((a < b && b < c) || (a > b && b > c)){
    console.log(b +' третье число среднее');
}else{
    console.log('Error!!!');
    alert('Error!!!');
}  


// || - оператор ИЛИ (or)
// && - оператор И (and)
// ! - оператор НЕ (not) - ставиться перед значением или функцией - возвращает противоположное значение
// isNaN() - функция проверяет на NaN если внутри NaN то отдаст true иначе false
// var a = +prompt('Введите первое число');
// var b = +prompt('Введите второе число');

// if (a > b && !isNaN(a) && !isNaN(b)) {
//     console.log(a + ' больше ' + b);
// } else if (b > a && !isNaN(a) && !isNaN(b)) {
//     console.log(b + ' больше ' + a);
// } else if (a == b && !isNaN(a) && !isNaN(b)) {
//     console.log(a + ' равно ' + b);
// } else {
//     console.log('Error!!!');
//     alert('Error!!!');
// }
//if(a > b < c ) {
//}if (a > c ) {
//    console.log(c + ' среднее число ');
//}else if (a < c ) {
//    console.log(a + ' среднее число' );
