# Jekyll

Do you want to build your own site from scratch or generate one for your project? This guide could help you with **Jekyll** and **GitHub Pages**.

## Jekyll

## GitHub Pages

Before we start build our Jekyll site, we should do as follows in GitHub:

- Create a new **empty** repository, **name** is *username*.github.io; For example, my repository named chenweigao.github.io.
- In your home folder, clone this repository, using `git clone`
- If you have any questions about **Git** ,see my another post [Git - To Use Git More Easily: Config, Branch and Rebase](https://chenweigao.github.io/2018/01/12/git.html)

## Install

Take Ubuntu system as an example:

```bash
# Install 
sudo apt-get install ruby jekyll
```

or this [guide](https://jekyllrb.com/docs/installation/#ubuntu):

```bash
sudo apt-get install ruby ruby-dev build-essential
echo '# Install Ruby Gems to ~/gems' >> ~/.bashrc
echo 'export GEM_HOME=$HOME/gems' >> ~/.bashrc
echo 'export PATH=$HOME/gems/bin:$PATH' >> ~/.bashrc
source ~/.bashrc
gem install jekyll bundler
```

change the gem source:

```bash
gem sources --add https://gems.ruby-china.org/ --remove https://rubygems.org/
```



## Build Site

```bash
# After you install jekyll
jekyll new ~/username.github.io/
```

After you do this, you will see a directory `blog`, then:

```
cd username.github.io
jekyll server
```

Then your site could be seen at: `http://localhost:4000`, open your browser and type it, you'll see your new site.

```bash
# build site in local
bundle exec jekyll build
bundle exec jekyll server --incremental
```

## Blog Directory Structure

If you `ls` in your *blog* directory, you will see many files, an overview of what will be used for you does:

**_config.yml**:  your configuration data

In this file, you could do many things to your site, this is my _confg.yml file, you can edit as soon as you like.

```ruby
#_config.yml
title: Nerche Note
email: weigao1024@foxmail.com
description: > # this means to ignore newlines until "baseurl:"
  Welcome to my profile pages!
baseurl: "" # the subpath of your site, e.g. /blog
url: "" # the base hostname & protocol for your site
github_username:  chenweigao
```


**_posts**:  this is where your article stored, when you want to publish a new blog, to **CREATE** a new file here, the naming convention of these files is important, and must follow the format:`YEAR-MONTH-DAY-title.md`, such as: `2018-02-02-myblog.md`, please remember this, it is very **important**. 

## Add Post

We create a new markdown file named `2018-02-02-test.md`:

```html
---
layout: article
title:  "This is a test blog"
tags:
  - blog
modify_date: 2017-01-01
---
## You will see me at [https://localhost:4000](https://localhost:4000)
The head is **required** in every post
which tells the system your post's title, layout, time and so on...
```

Then you need to open your `terminal`, and type: 

```bash
jekyll build
jekyll server
```

Then you open your browser, and type `https://localhost:4000` ,you will find the blog's update.

## Publish Blog

Now it is time to publish your blog in GitHub Pages, you need to:

```bash
git add .
git commit -m "my frist blog"
git push
```

Then you can see your blog at *username*.github.io, such as [chenweigao.github.io](chenweigao.github.io)

## Highlight Code

Sometimes, especially for a coder, you may want to highlight your code:

```html
{% raw %}
{% highlight c linonos %}

int mian(){
  printf("Hello Jekyll!\n");
  return 0;
}

{% endhighlight %}
{% endraw %}
```

::: tip
`raw` and `endraw` make the code not parsed by Jekyll.
:::

## Including Images and resources

Chance are, at some points, you'll want to include images, downloads, or other digital assets along with your text content. There are a number of ways to include digital assets in Jekyll, one common solution is to create a folder in the root of the project directory call something like `assets`, into which any images, files or  other resources are placed.

Including an image assets in a post:

```bash
![My helpful screenshot]({{ site.url }}/assets/screenshot.jpg)
```

or:

```bash
![My helpful screenshot]({{ "/assets/screenshot.jpg" | absolute_url }})
```

linking to a PDF for readers to download:

```bash
[get the PDF]({{ site.url }}/assets/mydoc.pdf)
```

see at the official guide,[Writing Post](https://jekyllrb.com/docs/posts/).

## Add HTTPS

When you want to add HTTPS, it is really a big work, see [this guide](https://zhuanlan.zhihu.com/p/22667528), that is helpful. The tool we use is [cloudflare](https://www.cloudflare.com/).

There is an auto tool can help you add https, [Netlify](https://app.netlify.com/), which helps you set your site here, and make it faster, more importantly, it is free, ***highly recommend***.

## highlight.js

using  [highlight.js](https://highlightjs.org/), downloads the package and select  a `.css`, then in `header.html`:

```html
<link rel="stylesheet" href="{{ site.url }}/assets/css/default.css">
<script src="{{ site.url }}/assets/css/highlight.pack.js"></script>
<script>hljs.initHighlightingOnLoad();</script>
```