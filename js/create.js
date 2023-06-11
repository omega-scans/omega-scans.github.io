var ldDates = ["3-June-2023", "18-February-2023", "29-December-2022", "29-December-2022", "29-December-2022", "18-November-2022", "4-November-2022", "18-September-2022"]
//dates are in decending order of chapters
var ipualtDates = ["14-April-2023", "14-April-2023", "13-April-2023", "25-March-2023", "25-March-2023", "1-March-2023", "22-February-2023", "22-February-2023", "18-February-2023", "17-February-2023", "17-February-2023", "22-January-2023", "10-January-2023", "10-January-2023", "29-December-2022"];
var chsele;
let ipualtchno = 15;
let tsdchno = 19;
let ldchno = 8;
// var series = document.getElementById('series');
// var chnos = document.getElementById('chnos');
if(info.series =="ld")
{
  if(info.chnos == ldchno)
  {
    var lddt = new Date(info.date);
  }

}
if(info.series =="ipualt")
{
  if(info.chnos == ipualtchno)
  {
    var lddt = new Date(info.date);
  }

}
// if(info.series =="nno")
// {
//   if(info.chnos == ldchno)
//   {
//     var lddt = new Date(info.date);
//   }
//
// }

function chselector() {
  var chno;
  if (info.series == "ld") {
    chno = ldchno;

    seleCreate(chno, info.chnos);
  } else if (info.series == "tsd") {
    chno = tsdchno;
    seleCreate(chno, cnos);
  } else if (info.series == "ipualt") {
    chno = ipualtchno;
    seleCreate(chno, info.chnos);

  }

}

function seleCreate(chno, cnos) {
  if (info.pageType == "ch") {
    chsele = document.getElementsByClassName("nwhspidey");
  }
  for (let j = 0; j < chsele.length; j++) {
    var para = document.createElement("select");
    para.setAttribute("class", "chapters-opt");
    para.setAttribute("id", "chapterselector");
    para.setAttribute("name", "chapterslist");
    para.setAttribute("onChange", "window.location.href=this.value");


    para.innerHTML = '<option value="" disabled>Select Chapter</option>';


    for (var i = 0; i < chno; i++) {

      var opt = document.createElement("option");
      opt.innerHTML = 'Chapter ' + (i + 1);
      opt.setAttribute("value", "https://omega-scans.github.io/light-dragon/chapter-" + (i + 1) + ".html");
      if ((i + 1) == cnos) {
        opt.setAttribute("selected", true);
      }
      para.appendChild(opt);
    }

    chsele[j].appendChild(para);



  }
}

function nextprev() {
  var nextprev = document.getElementsByClassName('nextandprev');

  if (info.series == "ld") {

    if (info.chnos == 1) {
      for (i in nextprev) {
        nextprev[i].innerHTML = '<a href="https://omega-scans.github.io/light-dragon/chapter-' + (info.chnos + 1) + '" rel="next"> Next > </a>';
      }
    } else if (info.chnos < ldchno) {
      for (i in nextprev) {
        nextprev[i].innerHTML = '<a href="https://omega-scans.github.io/light-dragon/chapter-' + (info.chnos - 1) + '" rel="prev"> < Previous </a><a href="https://omega-scans.github.io/light-dragon/chapter-' + (info.chnos + 1) + '" rel="next"> Next > </a>';
      }
    } else {
      for (i in nextprev) {
        nextprev[i].innerHTML = '<a href="https://omega-scans.github.io/light-dragon/chapter-' + (info.chnos - 1) + '" rel="prev"> < Previous </a>';
      }

    }
  }
  if (info.series == "ipualt") {

    if (info.chnos == 1) {
      for (i in nextprev) {
        nextprev[i].innerHTML = '<a href="https://omega-scans.github.io/i-picked-up-a-lamp-today/chapter-' + (info.chnos + 1) + '" rel="next"> Next > </a>';
      }
    } else if (info.chnos < ipualtchno) {
      for (i in nextprev) {
        nextprev[i].innerHTML = '<a href="https://omega-scans.github.io/i-picked-up-a-lamp-today/chapter-' + (info.chnos - 1) + '" rel="prev"> < Previous </a><a href="https://omega-scans.github.io/i-picked-up-a-lamp-today/chapter-' + (info.chnos + 1) + '" rel="next"> Next > </a>';
      }
    } else {
      for (i in nextprev) {
        nextprev[i].innerHTML = '<a href="https://omega-scans.github.io/i-picked-up-a-lamp-today/chapter-' + (info.chnos - 1) + '" rel="prev"> < Previous </a>';
      }

    }
  }

}

function ulList() {
  chsele = document.querySelector('.listch');
  var ul = document.createElement('ul');
  if (info.series == "ld") {
    for (let i = 0; i < ldchno; i++) {
      var lis = document.createElement("li");
      lis.innerHTML = '<div class="lichbox"><div class="lichnum"><a href="light-dragon/chapter-' + (ldchno - i) + ' " ' + '> <span>Chapter ' + (ldchno - i) + '</span> <span class="release-datech">' + (ldDates[i]) + '</span></a></div></div>';
      lis.setAttribute('value', ldchno - i);
      lis.setAttribute('styles', "background-image: url('images/7791.png');");
      ul.appendChild(lis);
    }
  }
  if (info.series == "ipualt") {
    for (let i = 0; i < ipualtchno; i++) {
      var lis = document.createElement("li");
      lis.innerHTML = '<div class="lichbox"><div class="lichnum"><a href="i-picked-up-a-lamp-today/chapter-' + (ipualtchno - i) + ' " ' + '> <span>Chapter ' + (ipualtchno - i) + '</span> <span class="release-datech">' + (ipualtDates[i]) + '</span></a></div></div>';
      lis.setAttribute('value', ipualtchno - i);
      lis.setAttribute('styles', "background-image: url('images/7791.png');");
      ul.appendChild(lis);
    }
  }

  chsele.appendChild(ul);
}

function indexch() {

  if (document.getElementById('ipualtind').id == "ipualtind") {
    var index;
    var ul = document.createElement("ul");
    index = document.getElementById('ipualtind');
    for (let i = 0; i < 2; i++) {
      var li = document.createElement('li');
      li.innerHTML = '<a href="https://omega-scans.github.io/i-picked-up-a-lamp-today/chapter-' + (ipualtchno - i) + '"' + '>Chapter ' + (ipualtchno - i) + '</a> <span class="release-date">' + (ipualtDates[i]) + '</span>';
      ul.appendChild(li);
    }
    index.appendChild(ul);
  }
  if (document.getElementById('ldind').id == "ldind") {
    var index;
    var ul = document.createElement("ul");
    index = document.getElementById('ldind');
    for (let i = 0; i < 2; i++) {
      var lis = document.createElement('li');
      lis.innerHTML = '<a href="https://omega-scans.github.io/light-dragon/chapter-' + (ldchno - i) + '"' + '>Chapter ' + (ldchno - i) + '</a> <span class="release-date">' + (ldDates[i]) + '</span>';
      ul.appendChild(lis);
    }
    index.appendChild(ul);
  }

}

function imgGen() {
  var read = document.getElementById('readingarea');
  if (info.ifnew == 1) {
    if (info.series == "ld") {
      var para = document.createElement("p");
      for (let i = 0; i < info.pgNo; i++) {
        var para = document.createElement("p");

        var p = document.createElement("img");

        if (i == 0) {
          p.setAttribute("loading", "eager");
          p.setAttribute("src", 'https://omega-scans-images.github.io/light-dragon/chapter-' + (info.chnos) + '/-' + (i + 1) + '.jpg');
          p.setAttribute("alt", "Page-" + (i + 1));
          para.appendChild(p);
          read.appendChild(para);

        } else {
          p.setAttribute("src", 'https://omega-scans-images.github.io/light-dragon/chapter-' + (info.chnos) + '/-' + (i + 1) + '.jpg');
          p.setAttribute("loading", "lazy");
          p.setAttribute("alt", "Page-" + (i + 1));
          para.appendChild(p);
          read.appendChild(para);

        }

      }
      var para = document.createElement("p");
      var p = document.createElement("img");
      var scpt = document.createElement("script");
      scpt.setAttribute("async", true);
      scpt.setAttribute("src", "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1601431267706393");
      scpt.setAttribute("crossorigin", "anonymous");
      para.appendChild(scpt);
      var ins = document.createElement("ins");
      ins.setAttribute("class", "adsbygoogle");
      ins.setAttribute("style", "display:block");
      ins.setAttribute("data-ad-client", "ca-pub-1601431267706393");
      ins.setAttribute("data-ad-slot", "9130805434");
      ins.setAttribute("data-ad-format", "auto");
      ins.setAttribute("data-full-width-responsive", "true");
      para.appendChild(ins);
      var scpt2 = document.createElement("script");
      scpt2.innerHTML = '         (adsbygoogle = window.adsbygoogle || []).push({});';
      para.appendChild(scpt2);

      if (info.patron == 1) {
        var f = document.createElement("img");

        f.setAttribute("loading", "lazy");
        f.setAttribute("src", 'https://omega-scans-images.github.io/patrons/patrons' + (info.month) + '.png');
        f.setAttribute("alt", "Patrons");
        para.appendChild(f);


      }
      if (info.collab == 1) {
        var z = document.createElement("img");

        z.setAttribute("src", 'https://omega-scans-images.github.io/100.png');
        z.setAttribute("alt", 'page-' + (info.pgNo + 1));
        para.appendChild(z);
        read.appendChild(para);

      }
      p.setAttribute("src", 'https://omega-scans-images.github.io/INFOREQ.png');
      p.setAttribute("alt", 'page-' + (info.pgNo + 2));
      para.appendChild(p);

      read.appendChild(para);
    }

  }
}

function firstLatest() {
  var eleFir = document.getElementById("firstcha");
  var eleLst = document.getElementById("lastcha");
  var eleFirSp = document.getElementById("firstch");
  var eleLstSp = document.getElementById("lastch");

  if (info.series == "ipualt") {
    eleFir.setAttribute("href", "https://omega-scans.github.io/i-picked-up-a-lamp-today/chapter-" + (ipualtchno - (ipualtchno - 1)));
    eleFirSp.innerHTML = "Chapter " + (ipualtchno - (ipualtchno - 1));
    eleLst.setAttribute("href", "https://omega-scans.github.io/i-picked-up-a-lamp-today/chapter-" + (ipualtchno));
    eleLstSp.innerHTML = "Chapter " + (ipualtchno);
  }
  if (info.series == "ld") {
    eleFir.setAttribute("href", "https://omega-scans.github.io/light-dragon/chapter-" + (ldchno - (ldchno - 1)));
    eleFirSp.innerHTML = "Chapter " + (ldchno - (ldchno - 1));
    eleLst.setAttribute("href", "https://omega-scans.github.io/light-dragon/chapter-" + (ldchno));
    eleLstSp.innerHTML = "Chapter " + (ldchno);
  }


}




if (info.pageType == "info") {
  // firstLatest();
  ulList();
  firstLatest();
} else if (info.pageType == "index") {
  indexch();
} else if (info.pageType == "ch") {
  nextprev();
  chselector();
  imgGen();
}
