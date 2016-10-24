$( document ).ready(function() {
    $(".addafter").click(function(){
        var addedCard = '<div class = "col-sm-3 col-xs-6"><div class = "added-card"><textarea class = "cardtitlebox">Title</textarea><button type="button" class = "btn btn-xs deletebutton">Delete</button><textarea class = "cardtext"></textarea><button type="button" class="btn btn-default btn-sm"><span class="glyphicon glyphicon-ok"></span> Save</button><button type="button" class="btn btn-default btn-sm addafter2" onclick="addCard()">Add Event <span class="glyphicon glyphicon-arrow-right"></span> </button></div></div>';
        $(this).parent().parent().after($(addedCard).fadeIn(1000));
        $(".deletebutton").click(function(){
            $(this).parent().parent().fadeOut(1000);
        });        
        $(".addafter2").click(function(){ $(this).parent().parent().after($(addedCard).fadeIn(1000));
          $(".deletebutton").click(function(){
            $(this).parent().parent().fadeOut(1000);
        });
                                        });
        });
    });
