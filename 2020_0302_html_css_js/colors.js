var Links =
{
  SetColor:function (color){
    // var alist = document.querySelectorAll('a');
    // var i = 0;
    // while(i < alist.length){
    //   console.log(alist[i]);
    //   alist[i].style.color = color;
    //   i++;
    // }
    $('a').css('color', color);
  }
}

var Body =
{
  SetColor:function(color){
    // document.querySelector('body').style.color = color;
    $('body').css('color', color);
  },
  SetBackGroundColor:function(color){
    // document.querySelector('body').style.backgroundColor= color;
    $('body').css('background-color', color);
  }
}

function nigthDayHander(self){
  var target = document.querySelector('body');
  if(self.value === 'night')
  {
    Body.SetBackGroundColor('black');
    Body.SetColor('white');
    self.value = 'day';

    Links.SetColor('powderblue');
  }
  else
  {
    Body.SetBackGroundColor('white');
    Body.SetColor('black');
    self.value =  'night';

    Links.SetColor('blue');
  }
}
