---
slug: "/blog/what-is-green-software"
date: "2022-04-25"
title: "What is 'green' software?"
featuredImage: coding.jpg
featuredImgAlt: "Code written on the screen of a Macbook"
tags: ["tech", "green code"]
author: ["Danielle Subject"]
description: "Green software is an umbrella term for a ton of concepts and ideologies, but to make things simple I'm going to break some concepts down for you by using something we are all familiar with — websites, or web applications."
---

I started researching green software in December, and have since been trying to work out a way to define and also teach the concept to others. Being a new discipline, resources on the topic are limited, specifically when it comes to available data. Figuring out how to measure the exact carbon impact of an application is still in question, though there is a lot of research and work being done to answer that question, specifically by the <a href="https://greensoftware.foundation/" target="_blank">Green Software Foundation</a> (GSF).

What is green software?

As defined by the GSF, green software engineering is "an emerging discipline at the intersection of climate science, software practices and architectures, electricity markets, hardware and data center design." In a nutshell, green software refers to computer software that can be developed and consumed with minimal to no impact on the environment. 

Green software is an umbrella term for a ton of concepts and ideologies, but to make things simple I'm going to break some concepts down for you by using something we are all familiar with — websites, or web applications. 

If you're reading this, you might already know how websites are built (and if you don't you're about to). In a very simplified explanation, we have your HTML (Hypertext markup language), CSS (cascading stylesheets), and JavaScript that come together to form what you see when you surf the web. The HTML serves as the underlying structure, CSS — which has grown to be so much more than just the "design" of a webpage — builds a user interface, user experience design, accessibility, etc., and JavaScript adds your functionality and makes otherwise static elements dynamic. 

When you type in a URL and hit "enter," all of those files that contain the HTML, CSS, and JS code are delivered from a web server to your browser (aka the client). Every time these files are sent between the server and the browser, energy is consumed.

Web servers wait for client request messages (requests from your browser), process them, and respond with an HTTP response message. The response contains a status code such as "200 OK" or "404 Not Found" etc., as well as a body that includes HTML forms. When an HTML form is returned, the web browser builds the web page according to what's in that file. This may include discovering links to other resources, such as JavaScript and CSS files, as well as custom fonts, images, videos, and other media. Each of these resources equals a <b>new</b> HTTP request that is sent in order to download more files. 

For every HTTP request that is made, energy is consumed. This might not seem like a big deal at first, but when you think about how many people are on the internet browsing at any given moment, you can imagine how many requests are being sent between web servers and browsers every second. Each of these requests is energy spent. 

Location matters, too. The further the files have to transfer (let's say the web server is located in Australia and the web page is being loaded in Canada) the slower your site will be and the more power is consumed transferring your site's files. Additionally, if the server is located in an area that has a high grid intensity, the carbon footprint of that web page transfer will be larger. 

Browsers already do a few things to lighten the load. One is called "caching." This is when browsers remember content that has been downloaded so it's not downloaded all over again throughout the same web application. An example of this is the header of a webpage, which is usually repeated across the site. Instead of fetching the header on every page load, the browser downloads it once and remembers it. 

Something that developers can do to help is incorporate CDNs (Content Delivery Networks) where possible. CDNs deliver content through their own network of global servers. It works by caching a copy of your site's files on multiple servers around the world, so when a user visits your site, these files are delivered to their browser from the nearest server. 

So, where do we as developers/designers/architects come in? We need to reduce the weight of the data that needs to be delivered to build an application. Some examples of how development teams can do this:

1. Limit the use of media like images or videos. When you add an image or other media, ask yourself how it adds value to the user. If you can't answer this question, you likely don't need it. 

2. Limit the use of custom fonts and use system fonts where applicable.

<code>
/* System Fonts as used by GitHub */ <br>
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}
</code>

Above is an example of how Github incorporates system fonts, sourced from <a href="https://css-tricks.com/snippets/css/system-font-stack/" target="_blank">CSS-Tricks' System Font Stack</a> article (highly recommended read for CSS lovers).

3. Optimize images and implement "lazy loading," which is the practice of delaying the initialization of resources until the user actually needs them. For an easy-to-use image optimization tool, I recommend checking out <a href="https://tinypng.com/" target="_blank">tinyPNG</a>.

4. Limit the use of JavaScript. JavaScript can be hard on performance — JS processing consumes a large chunk of CPU. Removing redundant code and doing a memory sweep to track down leaks such as accidentally defining global variables or cyclical callbacks can make a huge difference not only in your site's performance but also in the energy your site consumes.

5. If possible, consider using a query language like GraphQL instead of a RESTful API service. RESTful services often return large amounts of unneeded data. GraphQL reduces the number of endpoints needed by sending all queries to one endpoint. There is a time and a place for RESTful APIs, but I encourage devs to be more critical with the frameworks and services that they choose. Just because something is trendy doesn't mean it's necessary. For example, do you need ReactJS to build your one-page portfolio site? Or can you use a static site generator such as GatsbyJS instead? 

In addition to reducing the file transfer size in web applications, there are many more things developers and architects can take into account when trying to implement green code practices. 

1. Implementing offline mode and adjusting network capabilities for those living in areas that tend to have network outages due to climate disasters.

2. Removing any unnecessary processes that may be running in the background and draining battery, such as unnecessary loops or HTTP requests to dead servers.

3. Writing clean and concise code that is reusable, scalable, and easy to maintain. Everybody hates legacy code, which typically refers to the original code that was written in an application that is extremely difficult to refactor. This causes a lot of workarounds that contribute to code bloat, and you end up with an application that is a nightmare to keep up with package upgrades. Additionally, when we write apps that are easy for future development teams to pick up, we reduce the risk of the application becoming obsolete in 5 years and just wasting space on a server.

4. Practicing good SEO to reduce the time it takes users to find what they want. The less time someone spends searching, the less energy is consumed.

5. Following accessibility standards — accessible applications improve both SEO and user experience.

You might notice that a lot of these tips I've provided can also improve performance and speed. The crux of green software practices lies in writing good, clean, maintainable code. If you're already doing this, then congratulations, you've helped reduce the carbon load of the Internet. 

However, green software doesn't begin with code. Its practices start even before developers sit down and start building. In my next article, I will expand more on this and how we can implement green software practices at our workstations. Stay tuned!

<em>For more information on green software, check out my list of <a href="https://daniellesubject.com/resources/" target="_blank">resources.</a></em>
