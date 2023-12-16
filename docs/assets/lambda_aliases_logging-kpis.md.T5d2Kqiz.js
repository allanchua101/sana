import{_ as s,o as i,c as a,R as n}from"./chunks/framework.KK7BHIzh.js";const c=JSON.parse('{"title":"sana lambda-logging-kpis","description":"","frontmatter":{},"headers":[],"relativePath":"lambda/aliases/logging-kpis.md","filePath":"lambda/aliases/logging-kpis.md"}'),l={name:"lambda/aliases/logging-kpis.md"},t=n(`<h1 id="sana-lambda-logging-kpis" tabindex="-1"><code>sana lambda-logging-kpis</code> <a class="header-anchor" href="#sana-lambda-logging-kpis" aria-label="Permalink to &quot;\`sana lambda-logging-kpis\`&quot;">​</a></h1><p>Use this command to get a quick overview of logging-related metrics for Lambda functions in the target account/region.</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sana</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> lambda-logging-kpis</span></span>
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
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Done!</span></span></code></pre></div><h2 id="combined-commands" tabindex="-1">Combined Commands <a class="header-anchor" href="#combined-commands" aria-label="Permalink to &quot;Combined Commands&quot;">​</a></h2><p>This alias combines the following commands:</p><ul><li><a href="/sana/lambda/distribution/lambda-app-log-lvl-distribution.html">lambda-app-log-lvl-distribution</a></li><li><a href="/sana/lambda/distribution/lambda-log-format-distribution.html">lambda-log-format-distribution</a></li><li><a href="/sana/lambda/distribution/lambda-sys-log-lvl-distribution.html">lambda-sys-log-lvl-distribution</a></li></ul>`,6),p=[t];function e(h,k,o,d,g,r){return i(),a("div",null,p)}const m=s(l,[["render",e]]);export{c as __pageData,m as default};
