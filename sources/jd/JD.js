/**
 * Created by shijiayi on 2016/6/2.
 */
function show(id,dp){
    document.getElementById(id).style.display=dp;
}
function getByClass(oParent,sClass){
    var aEle=document.getElementsByTagName("*");
    var aResult=[];
    for(i=0;i<aEle.length;i++){
        if(aEle[i].className==sClass){
            aResult.push(aEle[i]);
        }
    }
    return aResult;
}
window.onload=function() {
    var oDiv1 = document.getElementById("guide");
    var Lis = oDiv1.getElementsByTagName("li");
    for(i = 0; i < Lis.length; i++) {
        Lis[i].index = i;
        Lis[i].onmouseover = function () {
            Lis[this.index].className = "demo";
        };
        Lis[i].onmouseout = function () {
            Lis[this.index].className = "";
        }
    }
//           var aAcemenu=cemenu.getElementsByTagName("a");
//           var aAname=["服饰","美妆","手机","家电","数码", "运动", "居家", "母婴", "食品", "图书","车品", "服务"];
    var oDiv2 = document.getElementById("pics");
    var oBtnPrev = getByClass(oDiv2, "prev")[0];
    var oBtnNext = getByClass(oDiv2, "next")[0];
    var oMarkLeft = getByClass(oDiv2, "mark_left")[0];
    var oMarkRight = getByClass(oDiv2, "mark_right")[0];
    var oBigUl = getByClass(oDiv2, "big_pic")[0];
    var oBigLi = oBigUl.getElementsByTagName("li");
    var picsIndex=document.getElementById("pic_index");
    var picsIndexLi=picsIndex.getElementsByTagName("li");
    var iNow = 0;
    var iMinzIndex = 2;
    var backtop=document.getElementById("huidaotop");
    var oTopshow=document.getElementById("backtotop").getElementsByTagName("span")[0];

    backtop.onclick= function () {
        timer1=setInterval(function () {
            var pagescroll=document.body.scrollTop;
            var scrollspeed=pagescroll/5;
            document.body.scrollTop=pagescroll-scrollspeed;
            if(pagescroll==0){
                clearInterval(timer1)
            }
        },30)
    };
    oTopshow.onmouseover=backtop.onmouseover= function () {
        startMove(oTopshow,"right",35)
    };
    oTopshow.onmouseout=backtop.onmouseout= function () {
        startMove(oTopshow,"right",-50)
    };
    //上面的左右按钮
    oBtnPrev.onmouseover = oMarkLeft.onmouseover = function () {
        startMove(oBtnPrev, "opacity", 100)
    };
    oBtnPrev.onmouseout = oMarkLeft.onmouseout = function () {
        startMove(oBtnPrev, "opacity", 0)
    };
    oBtnNext.onmouseover = oMarkRight.onmouseover = function () {
        startMove(oBtnNext, "opacity", 100)
    };
    oBtnNext.onmouseout = oMarkRight.onmouseout = function () {
        startMove(oBtnNext, "opacity", 0)
    };
    for(i=0;i<picsIndexLi.length;i++){
       picsIndexLi[i].style.backgroundColor="#6A666F"
    }
    picsIndexLi[iNow].style.backgroundColor="red";
    for(j=0;j<picsIndexLi.length;j++){
        picsIndexLi[j].index=j;
        picsIndexLi[j].onmouseover= function () {
            iNow=this.index;
            tab();
        }
    }
    oBtnPrev.onclick = function () {
        iNow--;
        if(iNow<0){
            iNow=oBigLi.length-1;
        }
        tab();
    };
    oBtnNext.onclick = function () {
        iNow++;
        if(iNow>=oBigLi.length){
            iNow=0;
        }
        tab();
    };
    timer2=setInterval(function () {
        iNow++;
        if(iNow>=oBigLi.length){
            iNow=0;
        }
        tab();
    },3000);
    oBigUl.onmouseover= function () {
        clearInterval(timer2)
    };
    function tab() {
        oBigLi[iNow].style.zIndex = iMinzIndex++;
        for(i=0;i<picsIndexLi.length;i++){
            picsIndexLi[i].style.backgroundColor="#6A666F"
        }
        picsIndexLi[iNow].style.backgroundColor="red";
    }

    var oDiv3 = document.getElementById("container");
    var fushi1 = getByClass(oDiv3, "item")[0];
    var fushipic = getByClass(oDiv3, "fushi_pics")[0];
    var fushi_Ul = fushi1.getElementsByTagName("ul")[0];
    var fushipic_Ul = fushipic.getElementsByTagName("ul")[0];
    var fushi_aLi = fushi_Ul.getElementsByTagName("li");
    var fushipic_aLi = fushipic_Ul.getElementsByTagName("li");
    var iCount = 0;
    var fushizIndex = 2;
    for (i = 0; i < fushi_aLi.length; i++) {
        fushi_aLi[i].index = i;
        fushi_aLi[i].onmouseover = function () {
            this.className = "li_hover";
            if (iCount == this.index)return;
            iCount = this.index;
            tab2();
        };
        fushi_aLi[i].onmouseout= function () {
            this.className="";
        };
        function tab2() {
            fushipic_aLi[iCount].style.zIndex = fushizIndex++;
        }
    }
    window.onscroll= function () {
        var cemenu=document.getElementById("cebianmenu");
        var pagelookheight=document.documentElement.clientHeight;
        var cscrolltop=document.body.scrollTop;
        //var items=$("#container").find(".item");
        //var currentId="";
        if(cscrolltop>pagelookheight){
            cemenu.style.display="block";
        }else{
            cemenu.style.display="none";
        }
        //items.each(function(){
        //    var m=$(this);
        //    var itemtop= m.offset().top;
        //    if(cscrolltop>itemtop){
        //        currentId="#"+ m.attr("id");
        //    }else{
        //        return false;
        //    }
        //});
        //var currentLink=cemenu.find(".current");
        //if(currentId&&currentLink.attr("href")!=currentId){
        //    currentLink.removeClass("current");
        //    cemenu.find("[href="+currentId+"]").addClass("current");
        //}
    }
};
