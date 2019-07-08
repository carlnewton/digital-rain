class DigitalRain{constructor(){this.c=document.getElementById("canvas"),this.ctx=this.c.getContext("2d"),this.setDimensions(),this.settings=new Settings(this),this.glyphs=new Glyphs(this),this.grid=new Grid(this),this.ctx.fillStyle=this.settings.backgroundColour,this.ctx.fillRect(0,0,this.c.width,this.c.height),this.generateGlyphs();var s=this;this.grid.drawGlyphs(!0),this.loop=setInterval(function(){s.tick()},s.settings.frameRate)}generateGlyphs(){for(var s=Math.ceil(this.c.height/this.settings.glyphHeight),t=0;t<s;t++)for(var i=0;i<this.settings.columns;i++)this.grid.addGlyph(t,i)}tick(){this.grid.drawGlyphs()}setDimensions(){this.c.height=this.c.clientHeight,this.c.width=this.c.clientWidth}}class Settings{constructor(s){this.rain=s,this.glyphColour="rgb(51,204,51,1)",this.backgroundColour="rgb(0,0,0,1)",this.columns=75,this.glyphHeightRatio=50,this.changingGlyphPercent=5,this.frameRate=100,this.calculateGlyphSize()}calculateGlyphSize(){this.glyphWidth=this.rain.c.width/this.columns,this.glyphHeight=this.glyphWidth+this.glyphWidth/100*this.glyphHeightRatio}}class Glyphs{constructor(s){this.rain=s,this.svgRect='data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="94" height="140" viewBox="0 0 94 140"><rect x="{x}" y="{y}" width="{w}" height="{h}" rx="{rx}" ry="{ry}" style="fill:{colour}"/></svg>',this.svgPath='data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="94" height="140" viewBox="0 0 94 140"><path d="{path}" fill="{colour}"/></svg>',this.list={0:"M67,4H32C8.667,4,6,21,6,34v77c0,16.667,15.667,23,25,24s30,0,30,0,28,1.667,28-31V27S87.667,4,67,4ZM59,28L36,68s-1-24.667-1-38,5-14,11-14S59,16,59,28Zm1,39v43s1,12-12,12-11-12-11-12v-7Z",1:"M68,137V3H39S20,9.667,20,18s15,5,15,19V138Z",2:"M6,137V125H61C61,86.333,4,73.667,4,42S19.667,4,48,4s38,8.667,38,18-6,13.667-12,8S67.667,20,56,20,34,22.333,34,41c0,33.667,56,38.481,56,95Z",3:"M3,139V126H53L15,94s-4-9,6-9c21,0,38,4,38-31S42.667,24,37,24s-18.333-2-19,6S4,40.667,5,29,9.333,7,45,7,89,9.667,89,55s-32,45-32,45l32,26v12Z",4:"M90,139V1H61L4,67V90H59v49H90ZM51,33s3-4.808,5-4c3.714,1.5,3,6,3,6V65s-0.459,5.205-3,8c-2.458,2.7-7,3-7,3H30s-4.885.888-7-3c-2.322-4.268,2-8,2-8Z",5:"M11,5H81s8,0.667,8,10V57c0,6-6,7-6,7H42c-8.333,0-12.167,53.478,0,57,12.667,3.667,26,4.667,28,0s10-12.667,16-9,3,15.667-5,20-31.333,9.667-58,2S-1,65.667,18,55s39-3,39-3,7-16.333,0-32H11S3.667,13,11,5Z",6:"M91,65V20S94,2,48,2,4,22,4,22V86c0,31.333,31,53.333,70,48,0,0,5-6.333,1-11,0,0-39,3.333-38-33H73C85.667,90,91,75,91,65ZM47,18c10.333,0,14,7,14,28S56.667,73,49,73,34,65.667,34,46,36.667,18,47,18Z",7:"M4,9H88V36c0,10-29,64.5-29,84v19H28V115c0-19.5,30.308-63,30-79C57.75,23,48,24,48,24H4V9Z",8:"M19,0H73S85,6.5,85,33A40.15,40.15,0,0,1,71,64s15,9.167,15,36c0,15.167-15,27-24,27H23c-8.5,0-21-14.5-21-31S12,63,19,63c0,0-16-6-16-33S19,0,19,0ZM43,13c-6.333,0-14,5.333-14,20s5.333,21,13,21,14-5.667,14-21S49.333,13,43,13Zm1,59c-10,0-15,8.667-15,23s6.667,17,12,17,16-2,16-18S54,72,44,72Z",asterisk:"M50.568,98H34.432V75.289L15.068,86.644,7,73.667,26.364,60.689,8.614,49.333l6.455-12.978L34.432,47.711V25H50.568V47.711L69.932,36.356,78,50.956,58.636,60.689,78,72.044l-8.068,14.6L50.568,75.289V98Z","broken-bar":"M82,1h3a5,5,0,0,1,5,5V47a5,5,0,0,1-5,5H82a5,5,0,0,1-5-5V6A5,5,0,0,1,82,1Zm0,72h2a5,5,0,0,1,5,5v49a5,5,0,0,1-5,5H82a5,5,0,0,1-5-5V78A5,5,0,0,1,82,73Z",colon:"M41,27h9A10,10,0,0,1,60,37v9A10,10,0,0,1,50,56H41A10,10,0,0,1,31,46V37A10,10,0,0,1,41,27Zm0,74h9a10,10,0,0,1,10,10v9a10,10,0,0,1-10,10H41a10,10,0,0,1-10-10v-9A10,10,0,0,1,41,101Z","double-quote":"M47,44L27,41,21,93l19,6S49.333,69,47,44Zm34,2L61,43,55,95l19,6S83.333,71,81,46Z",e:"M9,50V30l75-1V49H59v71H87v19H6V120H34V49Z",equals:"M30,38H70a5,5,0,0,1,5,5V57a5,5,0,0,1-5,5H30a5,5,0,0,1-5-5V43A5,5,0,0,1,30,38Zm0,41H70a5,5,0,0,1,5,5V98a5,5,0,0,1-5,5H30a5,5,0,0,1-5-5V84A5,5,0,0,1,30,79Z",ha:"M19,11S8,67,1,133H24A986.177,986.177,0,0,1,46,12Zm32,9s-2,81,37,110l6-13S73,62,72,16Z",han:"M91,21V137H5V21H91ZM25,39V69H70V39H25Zm0,45v33H70V84H25Z",hi:"M59,57V95s-1.667,16-24,16H4v20l25,1s56,6.333,56-42c0-36.667-2-84-2-84H58V32H5V57H59Z",ho:"M57,2L36,1,35,17H7L6,37l31,1v96H59V38l29-1L87,19,59,18ZM11,56l15,2s3,46.5-12,76L1,131S7,90.5,11,56Zm69,0s-8,1.5-14,11c0,0,.5,42.5,22,57l5-10S86,85.5,80,56Z",ka:"M44,123H33s-4-1-4-6-3-40-3-52,1.5-14.5,25-8c0,0-3.5,66,37,80,0,0,5.5-4.5,3-15,0,0-20-27-18-64,0,0,18.5-9,16-24,0,0-13-3-15-20L53,13s2,18-14,18S5,26,5,41s-1,80,0,88,4.5,10,38,9C43,138,47,133,44,123Z",ke:"M84,135s-48.667-7.333-36-77c0,0,11.667-6.333,36,22,0,0,3.667-1.667,5-9,0,0-19-36-13-66H48s4,14.667,2,24c0,0-9.333,9.667-42,3,0,0-2.667,7-2,12A56.83,56.83,0,0,1,22,60S9,151.667,84,135Z",ki:"M37,31l3-18H62l1,18H90l1,25L65,55,62,90H89v22l-30,1-3,25-23,1-5-24L5,113,7,91l24-2,5-32L8,54,9,31H37Z","less-than":"M70,20L81,32,42,67l40,34L71,114,15,67Z","long-vowel":{x:6,y:51,w:82,h:23},ma:"M88,21l1,19s-27,2.667-57,3c0,0-14.667,36,9,50,0,0-3-15.333,4-29,0,0,10.333-3.333,19,2,0,0-4.667,49.333,25,72,0,0-25.333,5.333-52-33,0,0-29-.667-31-21S4.333,50.667,11,23A602.255,602.255,0,0,1,88,21Z",me:"M46,23L22,26a90.151,90.151,0,0,0,4,43L8,81s-2.667,15.667,3,25l21-9s15,39.333,57,42a6.386,6.386,0,0,0,0-6S58,119,58,84L87,64s0.667-11-5-16L55,58S48.333,49.333,46,23Z",mi:"M11,48L9,29S31.333,14,86,19l1,19S43.333,38.333,11,48ZM85.223,58.7l1.928,18.54S65.625,91.873,12.934,86.994L11.97,68.453S54.058,68.128,85.223,58.7Zm2.824,45.219,2.082,18.4S66.881,136.844,9.975,132L8.934,113.6S54.389,113.277,88.047,103.914Z",mo:"M5,29V13l83,2,1,13S77.5,29.5,76,52l14,1L89,70,76,75l-1,35s2,28-22,28H7L5,118l43-2s8.667-24-2-42c-4,2.667-40,0-40,0V55l44-4L49,31Z","more-than":"M31,19L20,31,59,66,19,100l11,13L86,66Z",mu:"M40,63L16,62,1,136l24-6,68,8L69,23,41,19l25,95-35-7Z",na:"M50,5H25V31H7V56H21s0.5,79,66,79V122s-42-.5-33-65H87V32H50V5Z",ne:"M63,136H40s1.333-20.667-4-34c0,0-16.333,1-26,13L7,93s8.667-6.333,16-11l1-11S4.667,54,7,20H36L41,4,57,3l1,15H89V39L46,40S22.667,62.333,89,97v13a49.721,49.721,0,0,1-25-5S60.333,121,63,136Z",ni:"M11,38L9,19s23.333-6,78-1l1,19S43.745,34.922,11,38Zm74.047,70.914,2.082,19.4S65.881,134.844,8.975,130L7.934,110.6S51.389,118.277,85.047,108.914Z",nu:"M85,122s-28.5-6.5-41-33L67,74s3-7-1-18L38,70S28,53,32,34c0,0,16.5-7.5,53-4V9S50-1,4,12c0,0-5.5,31,9,69L2,90s-2,13.5,5,20l18-7s11.5,21.5,61,27Z",o:"M12,2H60L48,11V32H89V52H54s-6.5,51.5,34,75l-3,12s-22.5-1.5-41-29L34,139H21l-6-17s7-31.5,7-63L7,51,5,33H21l1-14Z",period:{x:31,y:101,w:29,h:29,rx:10,ry:10},plus:"M55,26H36V50H17V74H36V98H55V74H75V51H55V26Z",ra:"M7,38V21H84V37ZM88,56L5,54s-17.667,96,78,83c0,0,3-5.333,1-10,0,0-55.333,5.667-53-48V74H88V56Z",ri:"M27,12L4,9S-11.667,146.667,82,139l1-11S25,127.667,27,12ZM69,6L92,9S91,44,80,75L63,73S59.667,51.667,69,6Z",sa:"M69,127s-48-1.5-38-65H49l4,27,19-1,5-27h6l1-22H76L72,15H56L54,38,30,39l3-24S22.5,6.5,9,14L7,40H3S0,58,9,62c0,0-14,74.5,57,76Z",se:"M45,100S21,86,30,57H59s8.837,42.228-6,59c-7.667,8.667-42,1-42,1s-5.333,11-3,20c0,0,53.333,4,65,1s12.667-14.333,13-21,0-64,0-64l4-2,1-16-4-1L85,5H61V30H6V69C6,87.333,19.333,104.667,45,100Z",shi:"M5,49h9s5,72,73,61v29S5,155.5,5,49Zm41,7,1,17,41-1L87,53Zm0-39,1,17,41-1L87,14Z",su:"M7,136s3-24.5,19-44c0,0-8-22-9-70,0,0,34.5-5.5,72,1V41L49,43s-14.5,59,40,86c0,0,1.5,7.5-2,10,0,0-27-8-46-23,0,0-11,5.5-15,21Z",ta:"M86,128s-34,1-43-28L74,78,62,63,36,77s-8-16.5-4-39l25-4A109.365,109.365,0,0,0,88,72l5-5L77,14,6,17S-9.5,145,86,137v-9Z",te:"M8,31V10L88,9V32ZM8,72L7,51l82-1V71L53,72s-3.5,40.5,34,52l-5,11s-43.5-4-56-62Z",tsu:"M5,7H26V63s2.5,39,62,60v9S4,131.5,4,61Zm57,6H42L38,66l17,2Zm30,0H72L68,66l17,2Z",u:"M77,130s-47.5,2.5-48-37V54H67V82H88V33H58L61,5H35l4,28H4V86s3,65.5,72,52Z",underscore:"M9,116H36a5,5,0,0,1,5,5v10a5,5,0,0,1-5,5H9a5,5,0,0,1-5-5V121A5,5,0,0,1,9,116Zm49,0H85a5,5,0,0,1,5,5v10a5,5,0,0,1-5,5H58a5,5,0,0,1-5-5V121A5,5,0,0,1,58,116Z","vertical-bar":{x:40,y:5,w:16,h:129,rx:5,ry:5},wa:"M73,123s-45.5-.5-48-45V31H71V66H89V15H5V74s-2,70.5,67,57Z",yu:"M92,137V124H20V47H81V29H3V138Z",Z:"M9,18V6H74c11.667,0,19.667,8,13,21s-53.333,86.333-56,90,6,5,6,5H89v13H21C9,135-.333,114.333,8,101S52.667,30,55,27s2.333-9-2-9H9Z"}}get(s=null){null===s&&(s=this.getName());var t=new Image;return"object"==typeof this.list[s]?t.src=this.svgRect.replace("{x}",this.list[s].x).replace("{y}",this.list[s].y).replace("{w}",this.list[s].w).replace("{h}",this.list[s].h).replace("{rx}",this.list[s].rx).replace("{ry}",this.list[s].ry).replace("{colour}",this.rain.settings.glyphColour):t.src=this.svgPath.replace("{path}",this.list[s]).replace("{colour}",this.rain.settings.glyphColour),t}getName(){var s=Object.keys(this.list);return s[Math.floor(Math.random()*s.length)]}}class Grid{constructor(s){this.rain=s,this.grid=[]}addGlyph(s,t){var i=this.rain.glyphs.getName();Math.random()<this.rain.settings.changingGlyphPercent/100&&(i="changing"),this.grid[s]||(this.grid[s]=[]),this.grid[s][t]=i}drawGlyphs(s=!1){var t=this.rain.c.width/this.rain.settings.columns,i=t+t/100*this.rain.settings.glyphHeightRatio,h=0;for(let r of this.grid){var l=0;for(let c of r){if("changing"===c)var e=this.rain.glyphs.get();else e=this.rain.glyphs.get(c);if(1==s||"changing"===c){e.left=t*l,e.top=i*h;var a=this;e.onload=function(){a.rain.ctx.fillStyle=a.rain.settings.backgroundColour,a.rain.ctx.fillRect(this.left,this.top,a.rain.settings.glyphWidth,a.rain.settings.glyphHeight),a.rain.ctx.drawImage(this,this.left,this.top,a.rain.settings.glyphWidth,a.rain.settings.glyphHeight)}}l++}h++}}}var rain=new DigitalRain;window.onresize=function(s){rain.setDimensions()};