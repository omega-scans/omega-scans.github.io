

  var chsele;



  let ipualtchno = 15;
  let tsdchno = 19;
  let ldchno = 7;
// var series = document.getElementById('series');
// var chnos = document.getElementById('chnos');
function chselector(){
  var chno;
  if( info.series == "ld"){
    chno = ldchno;

    seleCreate(chno, info.chnos);
  }
  else if (info.series =="tsd") {
    chno = tsdchno;
    seleCreate(chno, cnos);
  }
  else if (info.series == "ipualt") {
    chno = ipualtchno;
    seleCreate(chno, info.chnos);

  }

}
chselector();
function seleCreate(chno, cnos)
{
  if(info.pageType == "ch")
  {
  chsele  = document.getElementsByClassName("nwhspidey");
  }
  for(let j=0; j<chsele.length; j++)
  {
    var para = document.createElement("select");
    para.setAttribute("class", "chapters-opt");
    para.setAttribute("id", "chapterselector");
    para.setAttribute("name", "chapterslist");
    para.setAttribute("onChange","window.location.href=this.value");


    para.innerHTML = '<option value="" disabled>Select Chapter</option>';


    for (var i = 0; i <chno ; i++) {

         var opt = document.createElement("option");
         opt.innerHTML = 'Chapter '+ (i+1);
         opt.setAttribute("value", "https://omega-scans.github.io/light-dragon/chapter-"+(i+1)+".html");
         if((i+1)==cnos)
         {
           opt.setAttribute("selected", true);
         }
    para.appendChild(opt);
  }

  chsele[j].appendChild(para);



  }
}

function nextprev()
{
var nextprev = document.getElementsByClassName('nextandprev');

  if(info.series == "ld")
  {

    if(info.chnos == 1)
    {
      for(i in nextprev)
      {
        nextprev[i].innerHTML = '<a href="https://omega-scans.github.io/light-dragon/chapter-'+(info.chnos+1)+'" rel="next"> Next > </a>';
      }
    }
    else if (info.chnos< ldchno) {
      for(i in nextprev)
      {
        nextprev[i].innerHTML = '<a href="https://omega-scans.github.io/light-dragon/chapter-'+(info.chno - 1)+'" rel="prev"> < Previous </a><a href="https://omega-scans.github.io/light-dragon/chapter-'+(info.chnos+1)+'" rel="next"> Next > </a>';
      }
    }
    else {
      for(i in nextprev)
      {
        nextprev[i].innerHTML = '<a href="https://omega-scans.github.io/light-dragon/chapter-'+(info.chnos -1)+'" rel="prev"> < Previous </a>';
      }

    }
  }
  if(info.series == "ipualt")
  {

    if(info.chnos == 1)
    {
      for(i in nextprev)
      {
        nextprev[i].innerHTML = '<a href="https://omega-scans.github.io/i-picked-up-a-lamp-today/chapter-'+(info.chnos+1)+'" rel="next"> Next > </a>';
      }
    }
    else if (info.chnos< ipualtchno) {
      for(i in nextprev)
      {
        nextprev[i].innerHTML = '<a href="https://omega-scans.github.io/i-picked-up-a-lamp-today/chapter-'+(info.chno - 1)+'" rel="prev"> < Previous </a><a href="https://omega-scans.github.io/i-picked-up-a-lamp-today/chapter-'+(info.chnos+1)+'" rel="next"> Next > </a>';
      }
    }
    else {
      for(i in nextprev)
      {
        nextprev[i].innerHTML = '<a href="https://omega-scans.github.io/i-picked-up-a-lamp-today/chapter-'+(info.chnos -1)+'" rel="prev"> < Previous </a>';
      }

    }
  }

}
if(info.pageType == "ch")
{
  nextprev();
}
