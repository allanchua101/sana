import{_ as s,o as a,c as i,R as e}from"./chunks/framework.2uT2EpQr.js";const u=JSON.parse('{"title":"Global Flags","description":"","frontmatter":{},"headers":[],"relativePath":"global-flags.md","filePath":"global-flags.md"}'),t={name:"global-flags.md"},n=e('<h1 id="global-flags" tabindex="-1">Global Flags <a class="header-anchor" href="#global-flags" aria-label="Permalink to &quot;Global Flags&quot;">​</a></h1><p>This page describes the default flags that could be used to alter sana&#39;s behavior.</p><h3 id="profile-p" tabindex="-1"><code>--profile</code>, <code>-p</code> <a class="header-anchor" href="#profile-p" aria-label="Permalink to &quot;`--profile`, `-p`&quot;">​</a></h3><p>By default, <code>sana</code> utilizes a machine&#39;s default <code>aws-cli</code> profile. To use a <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html#cli-configure-files-using-profiles" target="_blank" rel="noreferrer">named profile</a> instead of the default one, you can use the <code>--profile</code> flag to specify the named profile you&#39;d like to use.</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sana</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> lambda</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --profile</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> foo</span></span></code></pre></div><h3 id="region-r" tabindex="-1"><code>--region</code>, <code>r</code> <a class="header-anchor" href="#region-r" aria-label="Permalink to &quot;`--region`, `r`&quot;">​</a></h3><p>By default, <code>sana</code> scans all the regions enabled in an AWS account to provide an account-wide analysis report. To target particular region/regions of interest, you can pass in the <code>--region</code> flag to reduce the time required by sana to produce an analysis.</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Runs a single-region scan against Singapore region</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sana</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> lambda</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --region</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ap-southeast-1</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Runs multi-region scan</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sana</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> lambda</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --region</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ap-southeast-1,us-east-1,us-east-2</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># You can also use the -r flag</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># as a shorthand syntax for this</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sana</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> lambda</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -r</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ap-southeast-1,us-east-1,us-east-2</span></span></code></pre></div><h3 id="o-chart" tabindex="-1"><code>-o chart</code> <a class="header-anchor" href="#o-chart" aria-label="Permalink to &quot;`-o chart`&quot;">​</a></h3><p>For distribution queries, you can pass the -o chart flag to get the results printed in horizontal charts</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sana</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> lambda-runtime-distribution</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -o</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> chart</span></span></code></pre></div><h3 id="no-progress-bar" tabindex="-1"><code>--no-progress-bar</code> <a class="header-anchor" href="#no-progress-bar" aria-label="Permalink to &quot;`--no-progress-bar`&quot;">​</a></h3><p>You can use the <code>--no-progress-bar</code> flag to disable the progress bar. This flag is often used in build servers.</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sana</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> lambda-count</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --no-progress-bar</span></span></code></pre></div><h3 id="silent-mode" tabindex="-1"><code>--silent-mode</code> <a class="header-anchor" href="#silent-mode" aria-label="Permalink to &quot;`--silent-mode`&quot;">​</a></h3><p>You can use the <code>--silent-mode</code> mode flag to prevent non-critical logs from getting displayed</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sana</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> lambda-avg-package-size</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --silent-mode</span></span></code></pre></div>',17),l=[n];function o(h,p,r,d,c,k){return a(),i("div",null,l)}const F=s(t,[["render",o]]);export{u as __pageData,F as default};
