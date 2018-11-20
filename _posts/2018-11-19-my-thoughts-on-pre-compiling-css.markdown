---
layout: post
title:  "My thoughts on pre-compiling CSS."
date:   2018-11-19 22:21:00 +0100
categories: technology
author: Marcus Kjerner
---
### What do you think of pre-compiling your CSS? <br><br>


#### **Compare to regular CSS**
 Compared to regular CSS when using the pre-compiler can make you're code DRYer. By using nesting, variables, _mixins_ & creating a folder structure with the use of imports.
<br><br>
#### **Which techniques did you use?**
For this project I used SCSS. Which is natively supported by Jekyll.
<br><br>
**_Pros_**
  * Easier to set up a module like folder structure. Which means the project files are easier to navigate.
  * With the use of _mixins_ you can create functions that both helps with making DRY code & making more advanced functionality. Like setting the text color based on background color.
  * Variables makes setting up color schemes & fonts a brief.
  * Nesting makes the code faster to type, dryer & a lot simpler to understand & read.  
  
<br><br>
**_Cons_**
  * For smaller projects, if not used wisely, I think the risks of making the projects bigger & more complicated then necessary is big. 
  * Longer time to set up a new project.
  * You can't edit the final code directly instead you have to compile the code before each publish. Which means you always need to have access to the source code.
