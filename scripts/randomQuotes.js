$(document).ready(function() {
  getQuotes();

    $( "#getquotes" ).click(function() {
      getQuotes();

    });
    $('#tweet').click(function(){
      tweetQuotes();

    });

    $('#closemodal').click(function(){
      closeModal();
    });
    $(document).ajaxStart(function(){
        $("#spinner").css("display", "block");
    });
    $(document).ajaxComplete(function(){
        $("#spinner").css("display", "none");
    });

function getQuotes(){
  let quotesUrl = "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1"
  $.ajax({url:quotesUrl , success: function(quotes){
  $("#quotetitle").html("-"+quotes[0].title);
  $("#quotes").html(quotes[0].content);

},dataType: "json"});
}
function tweetQuotes(){
  let quotesText = (document.getElementsByTagName('p')[0].textContent);
  if (quotesText.length > 140) {
    $('#tweet').attr({
      'data-toggle':"modal" ,
      'data-target':"#myModal"
    });
  }
  else{
    window.open("https://twitter.com/intent/tweet?text="+quotesText, 'Share', 'width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0');
  }
}

function closeModal(){

  $('#tweet').removeAttr('data-toggle data-target')

}

});
