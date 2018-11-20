---
layout: post
title:  "What is Open Graph"
date:   2018-11-20 16:05:00 +0100
categories: technology
author: Marcus Kjerner
image: og.png
---
### What is Open Graph? 

Open Graph is an API(application programming interface) which allows anyone to connect their application to facebook. You can then tell the open graph what kind of information about the users interaction with the specific web services you want it to track. It could for example connect to a music streaming service and see what songs you have listened to the most. But in this case we only use the meta tags, they provide more information when linking the page in web apps using the Graph API.


### How did I use it?

To make social sharing easier i provided the OG Meta Tags for images, title, URL & tags within an include. The Meta are then wrapped within Liquid if blocks to check if needed for the specific page. The images needed to be refactored. I provided the name of the image in the front matter at the top of each page to host an image. This meant i could use the front matter variable name to link the same file to the Open Graph meta tag.