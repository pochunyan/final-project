$(document).ready(function()
    {
       $('.entrance').click(function()     //switch the page
          {
            $('.switchscreen').animate(
                {
                  'left':'0px', 
                  'top':'0px',
                   'width':'100%',
                   'height':'100%'
                },
                100,
               function()
               {
                 window.location.assign("./letter/letter1.html"); 
                });
          });
           $(".box").click(function(){      //the animate of open the box
         $("#chgicon").attr("src","picture/box_open.png");
       });
           $('.small_person').click(function()     //switch to profile
               {
                 $('.change_to_profile').animate(
                     {
                     'left':'0px',
                     'top':'0px',
                     'width':'100vw',
                     'height':'100vh'
                     },
                     100,

                     );
                     });
    });
