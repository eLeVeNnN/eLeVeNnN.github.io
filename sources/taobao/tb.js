/**
 * Created by shijiayi on 2016/6/13.
 */
function show(id,bn){
    document.getElementById(id).style.display=bn;
}
window.onload= function () {
    var lunbo1 = document.getElementById("pics-one");
    var lunboUl1 = lunbo1.getElementsByTagName("ul")[0];
    var lunboLi1 = lunboUl1.getElementsByTagName("li");
    var lunbo2 = document.getElementById("pics-three");
    var lunboUl2 = lunbo2.getElementsByTagName("ul")[0];
    var lunboLi2 = lunboUl2.getElementsByTagName("li");
    var tabI1 = lunbo1.getElementsByTagName("i")[0];
    var tabI2 = lunbo1.getElementsByTagName("i")[1];
    var tabI3 = lunbo2.getElementsByTagName("i")[0];
    var tabI4 = lunbo2.getElementsByTagName("i")[1];
    var iNow = 0;
    var iCurr=0;
    var opicsCount=document.getElementById("picsCount");
    var timer2=null;
    lunboUl1.style.width = lunboLi1[0].offsetWidth * lunboLi1.length + "px";
    lunboUl2.style.width = lunboLi2[0].offsetWidth * lunboLi2.length + "px";
    var timer1=null;
    timer1 = setInterval(function () {
        iNow++;
        if (iNow >= lunboLi1.length) {
            iNow = 0;
        }
        tab();
    }, 2000);
    lunboUl1.onmouseover = tabI1.onmouseover = tabI2.onmouseover = function () {
        tabI1.style.display = "block";
        tabI2.style.display = "block";
        clearInterval(timer1);
    };
    lunboUl1.onmouseout = function () {
        tabI1.style.display = "none";
        tabI2.style.display = "none";
        timer1 = setInterval(function () {
            iNow++;
            if (iNow >= lunboLi1.length) {
                iNow = 0;
            }
           tab()
        }, 4000);
    };
    tabI1.onclick = function () {
        iNow--;
        if (iNow < 0) {
            iNow = lunboLi1.length - 1;
        }
        tab()
    };
        tabI2.onclick = function () {
            iNow++;
            if (iNow >= lunboLi1.length) {
                iNow = 0;
            }
           tab()
        };
    //ÏÂÃæµÄÂÖ²¥
    lunboUl2.onmouseover = tabI3.onmouseover = tabI4.onmouseover = function () {
        tabI3.style.display = "block";
        tabI4.style.display = "block";
        clearInterval(timer2);
    };
    lunboUl2.onmouseout = function () {
        tabI3.style.display = "none";
        tabI4.style.display = "none";
        timer2 = setInterval(function () {
            iCurr++;
            if (iCurr >= lunboLi2.length) {
                iCurr = 0;
            }
            tab2()
        }, 4000);
    };
    tabI3.onclick = function () {
        iCurr--;
        if (iCurr < 0) {
            iCurr = lunboLi2.length - 1;
        }
        tab2()
    };
    tabI4.onclick = function () {
        iCurr++;
        if (iCurr >= lunboLi2.length) {
            iCurr = 0;
        }
        tab2()
    };
    function tab(){
        lunboUl1.style.left=-iNow*lunboLi1[0].offsetWidth+"px";
    }
    function tab2(){
        lunboUl2.style.left=-iCurr*lunboLi2[0].offsetWidth+"px";
        opicsCount.innerHTML=iCurr+1;
    }
    var oTab_title=document.getElementById("tab_title");
    var oTab_select=oTab_title.getElementsByTagName("li");
    var oTab_content=document.getElementById("tab_content");
    var oTab_div=oTab_content.getElementsByTagName("div");
    for(i=0;i<oTab_select.length;i++){
        oTab_select[i].index=i;
        oTab_select[i].onmouseover=function(){
            for(j=0;j<oTab_select.length;j++){
            oTab_select[j].className="";
             oTab_div[j].style.display="none";
            }
           this.className="tab_title_select";
            oTab_div[this.index].style.display="block";
        }
    }
    var oMove=document.getElementById("move");
    var oAlist=oMove.getElementsByTagName("a");
    var oMovecont=document.getElementById("movecontent");
    var oMovetab=oMovecont.getElementsByTagName("div");
    var oMovedel=oMove.getElementsByTagName("span");
    for(i=0;i<4;i++){
        oAlist[i].index=i;
        oMovedel[i].index=i;
        //oAlist[i].style.borderBottomColor="red";
        //oAlist[0].style.borderBottomColor="#fff";
        oMovedel[i].onclick= function () {
            for(z=0;z<4;z++){
                oAlist[z].className="";
                oAlist[z].style.borderBottomColor="#E4E4E4";
                oAlist[3].style.borderRight="none";
            }
            oMovetab[this.index].style.display="none";
        };
        oAlist[i].onmouseover= function () {
            for(j=0;j<4;j++){
                oAlist[j].index=j;
                oMovetab[j].style.display="none";
                oAlist[j].className="";
                oAlist[j].style.borderBottomColor="red";
                oAlist[this.index].style.borderBottomColor="#fff";
            }  if(this.index==3){
                oAlist[this.index].style.borderRight="1px solid red";
                oAlist[this.index].style.paddingRight="3px";
            }
            oMovetab[this.index].style.display="block";
            oAlist[this.index].className="right_content_foot_aover"
        }
    }
    var osearchList=document.getElementById("search-list");
    var osearchBox=document.getElementById("search-box");
    var osearchBtn=document.getElementById("submit-box");
    var osearchTab=osearchList.getElementsByTagName("span");
        osearchTab[0].onclick=function(){
            for(i=0;i<osearchTab.length;i++){
                osearchTab[i].className="";
                osearchBox.className="";
                osearchBtn.className="";
            }
                osearchTab[0].className="search_style";
            osearchBox.className="searchbox";
            osearchBtn.className="submitbox";
        };
        osearchTab[1].onclick=function(){
            for(i=0;i<osearchTab.length;i++){
                osearchTab[i].className="";
                osearchBox.className="";
                osearchBtn.className="";
            }
                osearchTab[1].className="another_search_style";
            osearchBox.className="searchbox";
            osearchBtn.className="submitbox";
                 osearchBox.style.borderColor="red";
                 osearchBtn.style.backgroundColor="red";
        };
        osearchTab[2].onclick=function(){
            for(i=0;i<osearchTab.length;i++){
                osearchTab[i].className="";
                osearchBox.className="";
                osearchBtn.className="";
        }
            osearchTab[2].className="search_style";
            osearchBox.className="searchbox";
            osearchBtn.className="submitbox";
        };
    }
