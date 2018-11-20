---
layout: post
title:  "Robots & Humans.txt"
date:   2018-11-20 14:59:00 +0100
categories: technology
author: Marcus Kjerner
---
### Robots.txt

The robots.txt is a file that tells the different types of web crawl or scrape services, like search engines, what it's allowed to scan/scrape. A Robots.txt file is recommended to use by Google, some eaven say google doesn't Index sites without them.

### Humans.txt
Humans.txt is a file for, you guessed it, humans to read. In the humans.txt you can give information about who worked on the project, credits for different types of media used & the software used to produce the website. This off course isn't necessary but it's a nice & elegant way to give credit.

### My implementation

The **_robots.txt_** includes the a sitemap in XML. But it's not blocking any files or folders. But it's prepared to just enter a block for all user-agents, with User-agent: *;


~~~ 
Sitemap: https://markjerner.github.io/sitemap.xml

User-agent: * 
~~~

The **_humans.txt_** is used to show which software has been used to produce the web page. No credit for neither images or styling. Everything is done ny me.