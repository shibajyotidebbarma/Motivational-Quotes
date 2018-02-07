var data={ "notes": [
  {
    "title": "The Two Towers",
    "author": 'J.R.R. Tolkien',
    "quote": "There is some good in this world, and it’s worth fighting for."
  },
  {
    "title" : "P.S. I Love You",
    "author": " H.Jackson Brown Jr.",
    "quote": "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do."
  },
  {
    "title" : "Autumn Leaves",
    "author": "André Gide",
    "quote": "It is better to be hated for what you are than to be loved for what you are not."
  }
  
 ]
};

function randomize() {
  var range = data.notes.length;
  var random_index = Math.floor((Math.random() * range));
   // console.log(random_index);
  var item = data.notes[random_index];
  
  $('.quote-content').html(item.quote); 
  $('.quote-book').html(item.title);
  $('.quote-author').html(item.author);
}

function getQuote() {
  var $button = $('.next'); //jQuery var $button

  $button.on('click', randomize);
}

$(document).ready(function() {
  randomize();
  getQuote();
});
