/* main JavaScript file */
// IIFE - Immediately Invoked Function Expression
(function(){
    "use strict";
    
    var paragraphOne = document.getElementById("paragraphOne");
    var paragraphTwo = document.getElementById("paragraphTwo");
    var paragraphThree = document.getElementById("paragraphThree");
    //define your paragraphs array;
    var paragraphs = [];
    //data for my pages 
    paragraphs[0] = "Hello welcome to comp123. We will be learning javascript in this course with professor Tom Tsiliopoulos";
    paragraphs[1] = "JavaScript is the programming language of HTML and the Web. Programming makes computers do what you want them to do. JavaScript is easy to learn.JavaScript is also used in environments that are not Web-based, such as PDF documents, site-specific browsers, and desktop widgets. Newer and faster JavaScript virtual machines (VMs) and platforms built upon them have also increased the popularity of JavaScript for server-side Web applications. On the client side, JavaScript has been traditionally implemented as an interpreted language, but more recent browsers perform just-in-time compilation. It is also used in game development, the creation of desktop and mobile applications, and server-side network programming with runtime environments such as Node.js.";
    paragraphs[2] = "JavaScript  is a high-level, dynamic, untyped, and interpreted programming language. It has been standardized in the ECMAScript language specification. Alongside HTML and CSS, it is one of the three core technologies of World Wide Web content production; the majority of websites employ it and it is supported by all modern Web browsers without plug-ins. JavaScript is prototype-based with first-class functions, making it a multi-paradigm language, supporting object-oriented, imperative, and functional programming styles. It has an API for working with text, arrays, dates and regular expressions, but does not include any I/O, such as networking, storage, or graphics facilities, relying for these upon the host environment in which it is embedded.";
    //second way to define an array;
    //var paragraphs = new Array();
    
    if (paragraphOne){
        paragraphOne.textContent = paragraphs[0];
    }
    if(paragraphTwo){
        paragraphTwo.textContent = paragraphs[1];
    }if(paragraphThree){
         paragraphThree.textContent = paragraphs[2];
    }
})();