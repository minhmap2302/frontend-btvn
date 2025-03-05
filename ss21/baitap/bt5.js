let num = 0;
for(let i = 1; i <= 100; i++){
    num++;
    document.write("Số thứ " +i+ " là: " + num + " ");
    if (num % 3 == 0 && num % 5 == 0){
        document.write( "FizzBuzz <br>");
    } else if (num % 3 == 0 && num % 5 != 0){
        document.write( "Fizz <br>");
    } else if (num % 5 == 0 && num % 3 != 0){
        document.write( "Buzz <br>");
    } else {
        document.write( "<br>");
    }
}