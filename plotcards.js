
$(document).on('click', '.deletebutton', function(){
     $(this).parent().parent().fadeOut(500, function() { $(this).remove(); });
  });
  
$(document).on('click', '.addafter', function(){
    var addedCard = '<div class = "col-sm-3 col-xs-6"><div class = "added-card"><textarea class = "cardtitlebox savebox">Title</textarea><textarea class = "cardtext autoExpand"></textarea><button type="button" class = "btn btn-xs deletebutton">Delete</button><button type="button" class="btn btn-default btn-sm addafter" onclick="addCard()">Add Event <span class="glyphicon glyphicon-arrow-right"></span></button></div></div>';
     $(this).parent().parent().after($(addedCard).fadeIn(1000));
  });

$(document)
    .one('focus.autoExpand', 'textarea.autoExpand', function(){
        var savedValue = this.value;
        this.value = '';
        this.baseScrollHeight = this.scrollHeight;
        this.value = savedValue;
    })
    .on('input.autoExpand', 'textarea.autoExpand', function(){
        var minRows = this.getAttribute('data-min-rows')|0, rows;
        this.rows = minRows;
        rows = Math.ceil((this.scrollHeight - this.baseScrollHeight) / 17);
        this.rows = minRows + rows;
    });

