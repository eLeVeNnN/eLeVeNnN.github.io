$(function () {
  $("#fullpage").fullpage({
    verticalCentered:false,
    scrollingSpeed:1000,
    navigation: true,
    navagationPosition:"right",
    anchors: ['page1', 'page2', 'page3', 'page4'],
    afterLoad: function (anchorLink, index) {
      if(index>1){
        $("nav").addClass("min");
        $(".box").show();
      }else{
        $("nav").removeClass("min");
        $(".box").hide();
      }
      var m=$("nav ul").offset().left;
      if(index==2){
        var t1=$("nav ul li").eq(1).offset().left;
        $(".box").stop().animate({
          left:t1-m
        })
      }
      if(index==3){
        var t2=$("nav ul li").eq(2).offset().left;
        $(".box").stop().animate({
          left:t2-m
        })
      }
      if(index==4){
        var t3=$("nav ul li").eq(3).offset().left;
        $(".box").stop().animate({
          left:t3-m
        })
      }
    }
  });
  $("nav li").hover(function () {
    var m=$("nav ul").offset().left;
    var t=$(this).offset().left;
    var n=$(".box").offset().left;
    var b=$(".box>div");
    if((n-m)>(t-m)){
      b.removeClass().addClass("moveL")
    }else if((n-m)<(t-m)){
      b.removeClass().addClass("moveR")
    }
    $(".box").stop().animate({
      left:t-m
    },400, function () {
      b.removeClass();
    });
//                var r=t-m;
//                if(n>r){
//                    $(".box div").removeClass().addClass(".moveR")
//                }else if(n<r){
//                    $(".box div").removeClass().addClass(".moveL")
//                }
//                $(".box").stop().animate({
//                    left:r
//                })
  })
});
function showBig(name){
  var oDiv=document.createElement("div");
  oDiv.className="bigImg";
  $(".section").eq(2).append(oDiv);
  var oWrap=document.createElement("div");
  var oDel=document.createElement("span");
  var oImg=document.createElement("img");
  oWrap.className="bigImg-wrap";
  oDiv.appendChild(oWrap);
  oWrap.appendChild(oDel);
  oWrap.appendChild(oImg);
  oImg.src='img/'+name.id+'.png';
  oDel.innerText="X";
  oDel.id="del";
  oDel.onclick= function () {
    document.getElementsByClassName("section")[2].removeChild(oDiv);
  }
}
