import{_ as s,c as n,o as a,a as p}from"./app.4feed8ca.js";const l="/klein/1216172.png",o="/klein/1216173.png",e="/klein/1216174.png",_=JSON.parse('{"title":"css控制单行或者多行文本超出显示省略号","description":"css控制单行或者多行文本超出显示省略号","frontmatter":{"title":"css控制单行或者多行文本超出显示省略号","description":"css控制单行或者多行文本超出显示省略号","aside":false,"date":"2023-01-28T00:00:00.000Z","tags":["css"]},"headers":[{"level":2,"title":"1.单行文本","slug":"_1-单行文本","link":"#_1-单行文本","children":[]},{"level":2,"title":"2.多行文本显示省略号，省略号在段尾","slug":"_2-多行文本显示省略号-省略号在段尾","link":"#_2-多行文本显示省略号-省略号在段尾","children":[]}],"relativePath":"posts/css控制单行或者多行文本超出显示省略号.md"}'),t={name:"posts/css控制单行或者多行文本超出显示省略号.md"},c=p(`<h2 id="_1-单行文本" tabindex="-1">1.单行文本 <a class="header-anchor" href="#_1-单行文本" aria-hidden="true">#</a></h2><p>使用text-overflow：ellipsis属性</p><p>text-overflow: clip|ellipsis|string;</p><p>clip：修剪文本。</p><p>ellipsis：显示省略符号来代表被修剪的文本。</p><p>string：使用给定的字符串来代表被修剪的文本。</p><p>示例： css:</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">p</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">overflow</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">hidden</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;">/*超出部分隐藏*/</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">text</span><span style="color:#89DDFF;">-</span><span style="color:#FFCB6B;">overflow</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">ellipsis</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;">/* 超出部分显示省略号 */</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">white</span><span style="color:#89DDFF;">-</span><span style="color:#FFCB6B;">space</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">nowrap</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;">/*规定段落中的文本不进行换行 */</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">width</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> 250</span><span style="color:#A6ACCD;">px</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;">/*需要配合宽度来使用*/</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">border</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> 1</span><span style="color:#A6ACCD;">px</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">solid</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">red</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">font</span><span style="color:#89DDFF;">-</span><span style="color:#FFCB6B;">size</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> 30</span><span style="color:#A6ACCD;">px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>html:</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">单行文本超出部分显示省略号我是mdzz</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>效果图： <img src="`+l+`" alt=""></p><h2 id="_2-多行文本显示省略号-省略号在段尾" tabindex="-1">2.多行文本显示省略号，省略号在段尾 <a class="header-anchor" href="#_2-多行文本显示省略号-省略号在段尾" aria-hidden="true">#</a></h2><p>方法一：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">p</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">　</span><span style="color:#FFCB6B;">display</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">webkit</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">box</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">　</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">webkit</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">box</span><span style="color:#89DDFF;">-</span><span style="color:#FFCB6B;">orient</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">vertical</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">　</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">webkit</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">line</span><span style="color:#89DDFF;">-</span><span style="color:#FFCB6B;">clamp</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">　</span><span style="color:#FFCB6B;">overflow</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">hidden</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">　</span><span style="color:#FFCB6B;">width</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> 250</span><span style="color:#A6ACCD;">px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">　</span><span style="color:#FFCB6B;">border</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> 1</span><span style="color:#A6ACCD;">px</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">solid</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">red</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">　</span><span style="color:#A6ACCD;">font</span><span style="color:#89DDFF;">-</span><span style="color:#FFCB6B;">size</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> 30</span><span style="color:#A6ACCD;">px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>因使用了WebKit的CSS扩展属性，该方法适用于WebKit浏览器及移动端；</p><p>注：<br> 1、-webkit-line-clamp用来限制在一个块元素显示的文本的行数。 为了实现该效果，它需要组合其他的WebKit属性。常见结合属性：<br> 2、display: -webkit-box; 必须结合的属性 ，将对象作为弹性伸缩盒子模型显示 。<br> 3、-webkit-box-orient 必须结合的属性 ，设置或检索伸缩盒对象的子元素的排列方式 。</p><p>效果图： <img src="`+o+`" alt=""></p><p>方法二：省略号在中间，根据伪类来设置背景遮挡文字 适用范围：<br> 该方法适用范围广，但文字未超出行的情况下也会出现省略号,可结合js优化该方法。 注：</p><p>1.将height设置为line-height的整数倍，防止超出的文字露出。</p><p>2.给p::after添加渐变背景可避免文字只显示一半。</p><p>3.由于ie6-7不显示content内容，所以要添加标签兼容ie6-7（如：<code>&lt;span&gt;…&lt;span/&gt;</code>）；兼容ie8需要将::after替换成:after。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">p</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">　</span><span style="color:#FFCB6B;">position</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">relative</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">　</span><span style="color:#A6ACCD;">line</span><span style="color:#89DDFF;">-</span><span style="color:#FFCB6B;">height</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> 20</span><span style="color:#A6ACCD;">px</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;">//可变</span></span>
<span class="line"><span style="color:#F07178;">　</span><span style="color:#A6ACCD;">max</span><span style="color:#89DDFF;">-</span><span style="color:#FFCB6B;">height</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> 80</span><span style="color:#A6ACCD;">px</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;">//可变</span></span>
<span class="line"><span style="color:#F07178;">　</span><span style="color:#FFCB6B;">overflow</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">hidden</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">　</span><span style="color:#FFCB6B;">width</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> 240</span><span style="color:#A6ACCD;">px</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;">//可变</span></span>
<span class="line"><span style="color:#F07178;">　</span><span style="color:#FFCB6B;">border</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> 1</span><span style="color:#A6ACCD;">px</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">solid</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">red</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#FFCB6B;">p</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">:after</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">　</span><span style="color:#FFCB6B;">content</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">...</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">　</span><span style="color:#FFCB6B;">position</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">absolute</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">　</span><span style="color:#FFCB6B;">bottom</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">　</span><span style="color:#A6ACCD;">font</span><span style="color:#89DDFF;">-</span><span style="color:#FFCB6B;">size</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> 18</span><span style="color:#A6ACCD;">px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">　</span><span style="color:#FFCB6B;">right</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> 7</span><span style="color:#A6ACCD;">px</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;">//可变</span></span>
<span class="line"><span style="color:#F07178;">　</span><span style="color:#A6ACCD;">padding</span><span style="color:#89DDFF;">-</span><span style="color:#FFCB6B;">right</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> 124</span><span style="color:#A6ACCD;">px</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;">//可变</span></span>
<span class="line"><span style="color:#F07178;">　　</span><span style="color:#676E95;">//兼容性处理</span></span>
<span class="line"><span style="color:#F07178;">　</span><span style="color:#FFCB6B;">background</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">webkit</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">linear</span><span style="color:#89DDFF;">-</span><span style="color:#82AAFF;">gradient</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">left</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">transparent</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> #</span><span style="color:#A6ACCD;">fff</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">%</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">　</span><span style="color:#FFCB6B;">background</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">o</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">linear</span><span style="color:#89DDFF;">-</span><span style="color:#82AAFF;">gradient</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">right</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">transparent</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> #</span><span style="color:#A6ACCD;">fff</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">%</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">　</span><span style="color:#FFCB6B;">background</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">moz</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">linear</span><span style="color:#89DDFF;">-</span><span style="color:#82AAFF;">gradient</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">right</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">transparent</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> #</span><span style="color:#A6ACCD;">fff</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">%</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">　</span><span style="color:#FFCB6B;">background</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">linear</span><span style="color:#89DDFF;">-</span><span style="color:#82AAFF;">gradient</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">to</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">right</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">transparent</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> #</span><span style="color:#A6ACCD;">fff</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">%</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>效果图： <img src="`+e+'" alt=""></p>',23),r=[c];function F(y,D,C,i,A,d){return a(),n("div",null,r)}const g=s(t,[["render",F]]);export{_ as __pageData,g as default};
