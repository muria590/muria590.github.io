var date = new Date();

function updateTime() {
  date = new Date();
  $('#time-gmt').html( date.toGMTString() );
  $('#time-seconds').html( date.getTime() );
}

$(function() {
  updateTime();
  setInterval(updateTime, 50);

  $('#month').html( date.getMonth()+ 1 );
  $('#day').html( date.getDate() );
  $('#year').html( date.getUTCFullYear() );
});
