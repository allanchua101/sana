import{_ as a,o as s,c as e,R as i}from"./chunks/framework.2uT2EpQr.js";const b=JSON.parse('{"title":"Full Service Analysis","description":"","frontmatter":{},"headers":[],"relativePath":"full-service-analysis.md","filePath":"full-service-analysis.md"}'),l={name:"full-service-analysis.md"},n=i('<h1 id="full-service-analysis" tabindex="-1">Full Service Analysis <a class="header-anchor" href="#full-service-analysis" aria-label="Permalink to &quot;Full Service Analysis&quot;">​</a></h1><p>You can use the service-level commands to run all supported analysis for particular a service.</p><h2 id="lambda-functions" tabindex="-1">Lambda Functions <a class="header-anchor" href="#lambda-functions" aria-label="Permalink to &quot;Lambda Functions&quot;">​</a></h2><p><code>sana lambda</code> is used to run all analysis supported by sana.</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sana</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> lambda</span></span></code></pre></div><p>To learn more about lambda-specific commands, visit the <a href="/sana/lambda.html">lambda-specific command page</a>.</p><h2 id="dynamodb-tables" tabindex="-1">DynamoDB Tables <a class="header-anchor" href="#dynamodb-tables" aria-label="Permalink to &quot;DynamoDB Tables&quot;">​</a></h2><p><code>sana ddb</code> is used to run all analysis supported by sana.</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sana</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ddb</span></span></code></pre></div><h2 id="analyzing-multiple-services" tabindex="-1">Analyzing Multiple Services <a class="header-anchor" href="#analyzing-multiple-services" aria-label="Permalink to &quot;Analyzing Multiple Services&quot;">​</a></h2><p>If you want to scan multiple services using a single command, use comma-separated syntax to support scanning of several services in a single shot. (EG. <code>sana svc1,svc2,svc3,etc)</code>)</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sana</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> lambda,ddb</span></span></code></pre></div>',12),t=[n];function c(o,d,p,r,h,u){return s(),e("div",null,t)}const k=a(l,[["render",c]]);export{b as __pageData,k as default};
