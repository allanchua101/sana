import{_ as s,o as i,c as a,R as n}from"./chunks/framework.KK7BHIzh.js";const r=JSON.parse('{"title":"sana lambda-logging-kpis","description":"","frontmatter":{},"headers":[],"relativePath":"lambda/concepts/logging-kpis.md","filePath":"lambda/concepts/logging-kpis.md"}'),l={name:"lambda/concepts/logging-kpis.md"},p=n(`<h1 id="sana-lambda-logging-kpis" tabindex="-1"><code>sana lambda-logging-kpis</code> <a class="header-anchor" href="#sana-lambda-logging-kpis" aria-label="Permalink to &quot;\`sana lambda-logging-kpis\`&quot;">​</a></h1><p>Use the this command to get a quick overview of Logging-related metrics in your target account/region:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sana</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> lambda-logging-kpis</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  ___</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  __</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> _</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> _</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> __</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   __</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> _</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> /</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> __</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> _\` </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> &#39;_ \\ / _\` |</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> \\__ \\ (_| | | | | (_| |</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> |___/\\__,_|_| |_|\\__,_|</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Running the following command(s) using the default profile ☕...</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">- lambda-logging-kpis</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Scanning Lambda Functions from account regions |████████████████████████████████████████| 100% | ETA: 0s | 17/17</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Lambda Distribution by Log Format</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">JSON: 6 functions.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Text: 12 functions.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">--------------------------------------------</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Lambda Distribution by Application Log Level</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">DEBUG: 1 functions.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ERROR: 1 functions.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">FATAL: 1 functions.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">INFO: 1 functions.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">TRACE: 1 functions.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">WARN: 1 functions.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">null: 12 functions.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">--------------------------------------------</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Lambda Distribution by System Log Level</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">DEBUG: 1 functions.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">INFO: 4 functions.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">WARN: 1 functions.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">null: 12 functions.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">--------------------------------------------</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Done!</span></span></code></pre></div>`,3),t=[p];function e(h,k,F,g,c,o){return i(),a("div",null,t)}const _=s(l,[["render",e]]);export{r as __pageData,_ as default};
