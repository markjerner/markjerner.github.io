---
layout: post
title:  "How I implemented comments to Posts."
date:   2018-11-19 23:02:00 +0100
categories: technology
author: Marcus Kjerner
---
To implement blog comments i used the _Disqus_ service. 
<br><br>
I started by creating an account at Disqus and configuring the settings. This was done after the deployment to GitHub Pages. I then copied the _Universal Code_  from disqus and set i up in an __include_ named _disqus.html_. I desided to remove the if statement checking for comments, mostly because I couln't get it to work, but I found the use of the if statement to be low. The comments __include_ would only be used on the post layout. 