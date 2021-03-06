/**
 *.
 *
 * Difficulty: Easy Good for teaching: TDD, BabySteps
 *
 * Problem Description
 *
 * Imagine the scene. You are eleven years old, and in the five minutes before the end of the lesson,
 * your Maths teacher decides he should make his class more "fun" by introducing a "game". He explains
 * that he is going to point at each pupil in turn and ask them to say the next number in sequence, starting from one.
 * The "fun" part is that if the number is divisible by three, you instead say "Fizz" and if it is divisible
 * by five you say "Buzz". So now your maths teacher is pointing at all of your classmates in turn,
 * and they happily shout "one!", "two!", "Fizz!", "four!", "Buzz!"... until he
 * very deliberately points at you, fixing you with a steely gaze... time stands still, your mouth dries up,
 * your palms become sweatier and sweatier until you finally manage to croak "Fizz!". Doom is avoided, and
 * the pointing finger moves on.
 * So of course in order to avoid embarassment infront of your whole class, you have to get the full list printed
 * out so you know what to say. Your class has about 33 pupils and he might go round three times before the bell rings for breaktime. Next maths lesson is on Thursday. Get coding!
 * Write a program that prints the numbers from 1 to 100. But for multiples of three print "Fizz" instead of
 * the number and for the multiples of five print "Buzz".
 For numbers which are multiples of both three and five print "FizzBuzz?"*/

// idea 1
var idea1 = [];
for( var i = 0 ; i <= 30 ; i++ ){
  idea1[i] = '';

  if( i%3===0 ){
    idea1[i] = idea1[i] + 'Fizz';
  }

  if( i%5===0 ){
    idea1[i] = idea1[i] + 'Buzz';
  }

  if( i%3!==0 && i%5!==0 ){
    idea1[i] = idea1[i] +=i;
  }
}
console.log( idea1.join(', ') );

// idea 2
var idea2 = Array.apply( null, Array( 31 ) ).map( function ( x, i ) { return i } ).map( function( i ) {
  var result = '';
  if( i%3===0 ){
    result +='Fizz';
  }

  if( i%5===0 ){
    result +='Buzz';
  }

  if( i%3!==0 && i%5!==0 ){
    result +=i;
  }
  return result;
});
console.log( idea2.join(', ') );

// idea 3
var idea3 = Array.apply( null, Array( 31 ) ).map( function ( x, i ) { return i } )
.map( function( i ) {
  if( i%3===0 ){
    return [i ,'Fizz'];
  }
  return [i, ''];
})
.map( function( i ) {
  if( i[0]%5===0 ){
    return i[1]+'Buzz';
  }
  return i[1] === '' ? i[0] : i[1];
});
console.log( idea3.join(', ') );
