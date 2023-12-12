import{_ as a,o as s,c as i,R as t}from"./chunks/framework.2uT2EpQr.js";const k=JSON.parse('{"title":"sana lambda-vpc-distribution","description":"","frontmatter":{},"headers":[],"relativePath":"lambda/distribution/lambda-vpc-distribution.md","filePath":"lambda/distribution/lambda-vpc-distribution.md"}'),n={name:"lambda/distribution/lambda-vpc-distribution.md"},e=t(`<h1 id="sana-lambda-vpc-distribution" tabindex="-1"><code>sana lambda-vpc-distribution</code> <a class="header-anchor" href="#sana-lambda-vpc-distribution" aria-label="Permalink to &quot;\`sana lambda-vpc-distribution\`&quot;">​</a></h1><p>is used to get the Lambda function distribution by VPC ID</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sana</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> lambda-vpc-distribution</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Lambda Distribution by VPC</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> vpc-xxxxx: 1 functions.</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> No VPC:    15 functions.</span></span></code></pre></div><h2 id="use-cases" tabindex="-1">Use-cases <a class="header-anchor" href="#use-cases" aria-label="Permalink to &quot;Use-cases&quot;">​</a></h2><ul><li>Useful for measuring percentile of Lambda functions running inside and outside VPCs</li><li>Useful for security and compliance related reporting</li></ul>`,5),l=[e];function d(o,r,p,c,h,u){return s(),i("div",null,l)}const m=a(n,[["render",d]]);export{k as __pageData,m as default};
