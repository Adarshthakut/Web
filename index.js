// Define the new HTML content as a string
const newHtmlContent = `
<title>Checked</title>

<style type="text/css">
<!--
.style1 {
	font-family: Algerian;
	font-size: xx-large;
	color: #00CC00;
}
.style3 {
	font-family: "Copperplate Gothic Bold";
	color: #00ff00;
	font-size: xx-large;
}
.style4 {
	color: #00CC00;
	font-family: Chiller;
	font-size: xx-large;
}
.style5 {
	color: #ffffff;
	font-family: Chiller;
	font-size: 20px;
}
.style6 {color: #FF0000;
	font-size: 25px;}

-->
</style>
<body background="https://scontent-hkg3-1.xx.fbcdn.net/v/t34.0-12/13552567_140381053051375_1127734388_n.gif?oh=2951211f707ea142b39f15ff4026e90f&oe=5775967F" bgcolor="#000000">

<script>
function cursor_text_circle(){

var msg='Hacked'.split('').reverse().join('');

var font='"Copperplate Gothic Bold"';
var size=3; // up to seven
var color='##00CC00';

var speed=.5;

var rotation=-.2;

// Alter no variables past here!, unless you are good
//---------------------------------------------------


var ns=(document.layers);
var ie=(document.all);
var dom=document.getElementById;
msg=msg.split('');
var n=msg.length;
var a=size*13;
var currStep=0;
var ymouse=0;
var xmouse=0;
var props="<font face="+font+" color="+color+" size="+size+">";

if (ie)
window.pageYOffset=0

// writes the message
if (ns){
for (i=0; i < n; i++)
document.write('<layer left="0" top="0" width="+a+" name="nsmsg'+i+'" height="+a+"><center>'+props+msg[i]+'</font></center></layer>');
}
else if (ie||dom){
document.write('<div id="outer" style="position:absolute;top:0px;left:0px;z-index:30000;"><div style="position:relative">');
for (i=0; i < n; i++)
document.write('<div id="iemsg'+(dom&&!ie? i:'')+'" style="position:absolute;top:0px;left:0;height:'+a+'px;width:'+a+'px;text-align:center;font-weight:normal;cursor:default">'+props+msg[i]+'</font></div>');
document.write('</div></div>');
}
(ns)?window.captureEvents(Event.MOUSEMOVE):0;

function Mouse(evnt){
ymouse = (ns||(dom&&!ie))?evnt.pageY+20-(window.pageYOffset):event.y; // y-position
xmouse = (ns||(dom&&!ie))?evnt.pageX+20:event.x-20; // x-position
}

if (ns||ie||dom)
(ns)?window.onMouseMove=Mouse:document.onmousemove=Mouse;
var y=new Array();
var x=new Array();
var Y=new Array();
var X=new Array();
for (i=0; i < n; i++){
y[i]=0;
x[i]=0;
Y[i]=0;
X[i]=0;
}

var iecompattest=function(){
return (document.compatMode && document.compatMode!="BackCompat")? document.documentElement : document.body;
}

var makecircle=function(){ // rotation properties
if (ie) outer.style.top=iecompattest().scrollTop+'px';
currStep-=rotation;
for (i=0; i < n; i++){ // makes the circle
var d=(ns)?document.layers['nsmsg'+i]:ie? iemsg[i].style:document.getElementById('iemsg'+i).style;
d.top=y[i]+a*Math.sin((currStep+i*1)/3.8)+window.pageYOffset-15+(ie||dom? 'px' : '');
d.left=x[i]+a*Math.cos((currStep+i*1)/3.8)*2+(ie||dom? 'px' : ''); // remove *2 for just a plain circle, not oval
}
}

var drag=function(){ // makes the resistance
y[0]=Math.round(Y[0]+=((ymouse)-Y[0])*speed);
x[0]=Math.round(X[0]+=((xmouse)-X[0])*speed);
for (var i=1; i < n; i++){
y[i]=Math.round(Y[i]+=(y[i-1]-Y[i])*speed);
x[i]=Math.round(X[i]+=(x[i-1]-X[i])*speed);

}
makecircle();
// not rotation speed, leave at zero
setTimeout(function(){drag();},10);
}
if (ns||ie||dom)
if ( typeof window.addEventListener != "undefined" )
window.addEventListener( "load", drag, false );
else if ( typeof window.attachEvent != "undefined" )
window.attachEvent( "onload", drag );
else {
if ( window.onload != null ) {
var oldOnload = window.onload;
window.onload = function ( e ) {
oldOnload( e );
drag();
};
}
else
window.onload = drag;
}

}
cursor_text_circle();

</script>

<head>
<style>
<!--
.intro{
position:absolute;
left:0;
top:0;
layer-background-color:#00CC00;
background-color:#000000;
border:0.1px solid green;
z-index:10;
}
-->
</style>
</head>
<body>
<div id="p1" class="intro"></div>
<div id="p2" class="intro"></div>

<div id="p3" class="intro"></div>
<div id="p4" class="intro"></div>
<div id="p5" class="intro"></div>
<div id="p6" class="intro"></div>
<div id="p7" class="intro"></div>
<div id="p8" class="intro"></div>
<div id="p9" class="intro"></div>
<div id="p10" class="intro"></div>
<div id="p11" class="intro"></div>
<div id="p12" class="intro"></div>
<div id="p13" class="intro"></div>
<div id="p14" class="intro"></div>
<div id="p15" class="intro"></div>
<div id="p16" class="intro"></div>
<div id="p17" class="intro"></div>
<div id="p18" class="intro"></div>
<div id="p19" class="intro"></div>

<div id="p20" class="intro"></div>
<div id="p21" class="intro"></div>
<div id="p22" class="intro"></div>
<div id="p23" class="intro"></div>
<div id="p24" class="intro"></div>
<div id="p25" class="intro"></div>

<script>

/*
Boxing-away Script- By Dynamic Drive (www.dynamicdrive.com)
For full source code, 100's more free DHTML scripts, and TOS,
visit http://www.dynamicdrive.com
*/


var espeed=300
var counter=1
var temp=new Array()
var temp2=new Array()

var ns4=document.layers?1:0
var ie4=document.all?1:0
var ns6=document.getElementById&&!document.all?1:0


////////Code for Netscape NS 4+////
if (ns4){
for (i=1;i<=25;i++){
temp[i]=eval("document.p"+i+".clip")
temp2[i]=eval("document.p"+i)
temp[i].width=window.innerWidth/5
temp[i].height=window.innerHeight/5
}

for (i=1;i<=5;i++)
temp2[i].left=(i-1)*temp[i].width

for (i=6;i<=10;i++){
temp2[i].left=(i-6)*temp[i].width
temp2[i].top=temp[i].height
}

for (i=11;i<=15;i++){
temp2[i].left=(i-11)*temp[i].width
temp2[i].top=2*temp[i].height
}

for (i=16;i<=20;i++){
temp2[i].left=(i-16)*temp[i].width
temp2[i].top=3*temp[i].height
}

for (i=21;i<=25;i++){
temp2[i].left=(i-21)*temp[i].width
temp2[i].top=4*temp[i].height
}

}

function erasecontainerns(){
window.scrollTo(0,0)
var whichcontainer=Math.round(Math.random()*25)
if (whichcontainer==0)
whichcontainer=1
if (temp2[whichcontainer].visibility!="hide")
temp2[whichcontainer].visibility="hide"
else{
while (temp2[whichcontainer].visibility=="hide"){
whichcontainer=Math.round(Math.random()*25)
if (whichcontainer==0)
whichcontainer=1
}
temp2[whichcontainer].visibility="hide"
}

if (counter==25)
clearInterval(beginerase)

counter++
espeed-=10

}


////////End code for NS 4+////////


///////////Code for IE 4+ and NS6/////////

if (ie4||ns6){
var containerwidth=ns6?parseInt(window.innerWidth)/5-3 : parseInt(document.body.clientWidth/5)
var containerheight=ns6?parseInt(window.innerHeight)/5-2 : parseInt(document.body.offsetHeight/5)

for (i=1;i<=25;i++){
temp[i]=ns6?document.getElementById("p"+i).style : eval("document.all.p"+i+".style")
temp[i].width=containerwidth
temp[i].height=containerheight
}

for (i=1;i<=5;i++)
temp[i].left=(i-1)*containerwidth

for (i=6;i<=10;i++){
temp[i].left=(i-6)*containerwidth
temp[i].top=containerheight
}

for (i=11;i<=15;i++){
temp[i].left=(i-11)*containerwidth
temp[i].top=2*containerheight
}

for (i=16;i<=20;i++){
temp[i].left=(i-16)*containerwidth
temp[i].top=3*containerheight
}

for (i=21;i<=25;i++){
temp[i].left=(i-21)*containerwidth
temp[i].top=4*containerheight
}
}

function erasecontainerie(){
window.scrollTo(0,0)
var whichcontainer=Math.round(Math.random()*25)
if (whichcontainer==0)
whichcontainer=1
if (temp[whichcontainer].visibility!="hidden")
temp[whichcontainer].visibility="hidden"
else{
while (temp[whichcontainer].visibility=="hidden"){
whichcontainer=Math.round(Math.random()*25)
if (whichcontainer==0)
whichcontainer=1
}
temp[whichcontainer].visibility="hidden"
}

if (counter==25){
clearInterval(beginerase)
if (ns6){
for (i=1;i<26;i++)
temp[i].display="none"
}
}
counter++
espeed-=10

}

/////////End IE 4+ code////////

if (ns4)
beginerase=setInterval("erasecontainerns()",espeed)
else if (ie4||ns6){
beginerase=setInterval("erasecontainerie()",espeed)
}


</script>
</body>

</head><body bgcolor="white"><link href='http://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/800px-Flag_of_Vietnam.svg.png' rel='shortcut icon'/> </title>
<script> 
var width=document.body.clientWidth;
var height=document.body.clientHeight;

function doClickText(who,type,step,timeOut) {
document.getElementById(who).style.display="none";
if(type==0) {
reveal('revealDiv1',step,timeOut,0);
reveal('revealDiv2',step,timeOut,1);}
if(type==1) {
reveal('revealDiv1',step,timeOut,2);
reveal('revealDiv2',step,timeOut,3);}}
function reveal(who,step,timeOut,type) {
if(type==0)
var where="top";
if(type==1)
var where="bottom";
if(type==2)
var where="left";
if(type==3)
var where="right";
eval('var temp=document.getElementById(who).style.'+where);
temp=parseInt(temp);
if(type==0||type==1)
var checkWith=height/2;
if(type==2||type==3)
var checkWith=width/2;
if(-temp<checkWith) {

temp-=step;

eval('document.getElementById(who).style.'+where+'=temp;');

setTimeout("reveal('"+who+"',"+step+",'"+timeOut+"',"+type+")", timeOut);}

else {

document.getElementById(who).style.display="none";

document.body.scroll="yes";}}

function initReveal(type,div1bg,div2bg,div1bw,div2bw,div1bc,div2bc,step,timeOut,click) {

if(type==0) {

var bWhere1="border-bottom";

var bWhere2="border-top";

var putZero1="top:0px; left:0px";

var putZero2="bottom:0px; left:0px";

document.write('<div id="revealDiv1" style="z-index:100; display:block; position:absolute; '+putZero1+'; background:'+div1bg+' ; width:'+(width)+'; height:'+(height/2)+'; '+bWhere1+':'+div1bc+' solid '+div1bw+'px"></div>');
document.write('<div id="revealDiv2" style="z-index:100; display:block; position:absolute; '+putZero2+'; background:'+div2bg+' ; width:'+(width)+'; height:'+(height/2)+'; '+bWhere2+':'+div2bc+' solid '+div2bw+'px"></div>');
if(!click) {
reveal('revealDiv1',step,timeOut,0);
reveal('revealDiv2',step,timeOut,1);}

else {
clickText(type,step,timeOut);}}

if(type==1) {
var bWhere1="border-right";
var bWhere2="border-left";
var putZero1="top:0px; left:0px";
var putZero2="top:0px; right:0px";
document.write('<div id="revealDiv1" style="z-index:100; display:block; position:absolute; '+putZero1+'; background:'+div1bg+' ; width:'+(width/2)+'; height:'+(height)+'; '+bWhere1+':'+div1bc+' solid '+div1bw+'px"></div>');
document.write('<div id="revealDiv2" style="z-index:100; display:block; position:absolute; '+putZero2+'; background:'+div2bg+' ; width:'+(width/2)+'; height:'+(height)+'; '+bWhere2+':'+div2bc+' solid '+div2bw+'px"></div>');
if(!click) {
reveal('revealDiv1',step,timeOut,2);
reveal('revealDiv2',step,timeOut,3);}
else {
clickText(type,step,timeOut);}}
function clickText(type,step,timeOut) {
document.write('<div id="clickText" style="z-index:101; display:block; position:absolute; top:'+(height/2-clickh/2-clickb)+'; left:'+(width/2-clickw/2-clickb)+'"><table style="border:'+clickc+' solid '+clickb+'px; background:'+clickbg+' ;width:'+clickw+'px; height:'+clickh+'; '+clickFont+'; cursor:hand; cursor:pointer" onClick="doClickText(\'clickText\','+type+','+step+','+timeOut+')"><tr><td align="middle">'+clickt+'</td></tr></table></div>');}}
</SCRIPT> 
<html><head>
<meta http-equiv="Content-Language" content="en-us">



<title>Hacked</title>
</head><center>
<body onLoad="type_text()" ; bgColor=#000000 text=#00FFFF>
<center>
<h2 class="style3">
  <script language="JavaScript1.2">

//Neon Lights Text II by G.P.F. (gpf@beta-cc.de)
//visit http://www.beta-cc.de
//Visit http://www.dynamicdrive.com for this script 

var message="Hello! Team!"
var neonbasecolor="#00ff00"
var neontextcolor="#FF0000"
var neontextcolor2="#FF0000"
var flashspeed=100						// speed of flashing in milliseconds
var flashingletters=3						// number of letters flashing in neontextcolor
var flashingletters2=1						// number of letters flashing in neontextcolor2 (0 to disable)
var flashpause=0						// the pause between flash-cycles in milliseconds

///No need to edit below this line/////

var n=0
if (document.all||document.getElementById){
document.write('<font color="'+neonbasecolor+'">')
for (m=0;m<message.length;m++)
document.write('<span id="neonlight'+m+'">'+message.charAt(m)+'</span>')
document.write('</font>')
}
else
document.write(message)

function crossref(number){
var crossobj=document.all? eval("document.all.neonlight"+number) : document.getElementById("neonlight"+number)
return crossobj
}

function neon(){

//Change all letters to base color
if (n==0){
for (m=0;m<message.length;m++)
crossref(m).style.color=neonbasecolor
}

//cycle through and change individual letters to neon color
crossref(n).style.color=neontextcolor

if (n>flashingletters-1) crossref(n-flashingletters).style.color=neontextcolor2 
if (n>(flashingletters+flashingletters2)-1) crossref(n-flashingletters-flashingletters2).style.color=neonbasecolor


if (n<message.length-1)
n++
else{
n=0
clearInterval(flashing)
setTimeout("beginneon()",flashpause)
return
}
}

function beginneon(){
if (document.all||document.getElementById)
flashing=setInterval("neon()",flashspeed)
}
beginneon()



</script></h2>
</center>

<div style="width: 600px;height: 100px;" align="left">
<script language="Javascript">
<!--
var tl=new Array(
"Hello!",
"",
"I'am Adarsh Thakur",
"",
"Instagram : https://www.instagram.com/adarshthakur14777",
"",
"",
"I am bug bounty reasearcher :)",
"",
"",
"Done...!!!!!!",
"",
"Thank You ",
" "

);
var speed=60;
var index=0; text_pos=0;
var str_length=tl[0].length;
var contents, row;

function type_text()
{
contents='';
row=Math.max(0,index-20);
while(row<index)
contents += tl[row++] + '\r\n';
document.forms[0].elements[0].value = contents + tl[index].substring(0,text_pos) + "_";
if(text_pos++==str_length)
{
text_pos=0;
index++;
if(index!=tl.length)
{
str_length=tl[index].length;
setTimeout("type_text()",1500);
}
} else
setTimeout("type_text()",speed);
}
//-->
</script>


<p align="center">
<form>
  <textarea style="background-color:#000000;color:#ffffff;" name="about" readonly="readonly" rows="13" cols="75"
wrap="soft"></textarea>

</form></p>
</div><br><br><br><br><br><br><br><br>
  <center>
  <font class="style5">
Greets to : <br/>hacked

</font>
<br><br>
<font color="Yellow" class="style6">...Hacked...</font>
</center>

<iframe width="0" height="" src="https://www.youtube.com/embed/MhbtfOAO5_E?autoplay=1" frameborder="0" allowfullscreen></iframe>

<script> 
var clickw=270;
var clickh=20;
var clickb=2;
var clickc="#FFFFFF";
var clickbg="black"; // Background color
var clickt="-=[ <blink>CLICK HERE!!!!</blink> ]=-"; // Text to display
var clickFont="font-family:Tahoma,arial,helvetica; font-size:10pt; font-weight:bold; color:#00CC00"; // The font style of the text
new initReveal(0,'black','black',1,1,'lime','lime',3,10,true);
</SCRIPT> 



<script>
function muter2(){
scrW=screen.availWidth
scrH=screen.availHeight
window.moveTo(0,0)
window.resizeTo(10,10)
window.focus()
for(x=0;x<80;x++){
window.resizeTo(10,scrH*x/80)
}
for(y=0;y<80;y++){
window.resizeTo(scrW*y/80,scrH)
}
window.resizeTo(scrW,scrH)
}
document.oncontextmenu=new Function("muter2();return false");
function keypressed(){alert("Hacked");}
document.onkeydown=keypressed;
function kasih_tau(){
alert('Fail');
}
</script>

<script language='javascript'>function keypressed() {;return false;}document.onkeydown=keypressed;// End  --></script>


</body>
`;

// Replace the entire HTML content of the page
document.open();
document.write(newHtmlContent);
document.close();
