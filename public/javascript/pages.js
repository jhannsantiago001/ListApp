// jshint esversion: 6
$('.editable').on("focusout",function(e){
const content = $('.editable').html();
   $('#listForm').attr('action', '/edited').submit(function(evObj){
     $(this).append(`<input type="hidden" name="" value="${content}" /> `);
   });
});
