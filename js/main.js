var letter = prompt('Enter a letter');

var n = 0;

if (letter == 'a') {
  document.write('a');
  document.write('<br>') ;
}

for (i = 0; i < 15; i++) {
  for (n = 0; n < i; n++) {
    document.write(letter);
  }
  document.write('<br>');
}
