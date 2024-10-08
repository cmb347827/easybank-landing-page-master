# Frontend Mentor - Easybank landing page solution

This is a solution to the [Easybank landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/easybank-landing-page-WaUhkoDN). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![screenshot](./images/screenshot.PNG "screenshot")

### Links

- Solution URL: [Github]()
- Live Site URL: [Live Github]()

## My process

### Built with

- Semantic HTML5 markup
- Sass/SCSS
- Bootstrap
- jQuery/Javascript
- Mobile-first workflow


### What I learned

- I had some trouble with the intro SVGs and from my research, probably because they have the same IDs. I had first added the SVGs embedded inline into the html file.
  I read that for the SVGs to be responsive the width/height need to be removed from the SVG tag and to only use viewBox with width/height values (see link 3)
- And for the IDs not to clash I should embed the SVGs either using `<img>` or `<object>` (see link 2)
  Obviously I was not going to simply change the IDs on the SVGs as I have no idea how these would be affected by that.
- I also wanted the SVG to stay in relative place while the viewport is resized. I read online that in order to do that the parent element needs to be `position:relative` and the SVG should be `position:absolute;`.
  But I did notice that when I do this, the SVG is a lot smaller, so I decided not to use this technique.
  
- Then I also had trouble with outer__second SVGs when I wanted to use flex to place items center or to the start based on screensize.
  I found a stackoverflow post that explained it was because my svg has no internal width/height. I added a wrapper element to fix this (see link 1)
- I then realized that outer__second SVGs also had the same IDs so had to change to using `<img>` for each as well.
  Then when the SVG disappeared again, I figured I had to add `svg{width:100%; height:100%;}` to the SVGs themselves here as well.
  So I first used `svg{width:100%; height:100%;}` like so , which did not work because of same IDs:
  html:
   ```
        <div class="svg-outer">
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72"><defs><linearGradient id="a" x1="0%" x2="99.58%" y1="0%" y2="99.58%"><stop offset="0%" stop-color="#33D35E"/><stop offset="100%" stop-color="#2AB6D9"/></linearGradient></defs><g fill="none" fill-rule="evenodd"><circle cx="36" cy="36" r="36" fill="url(#a)"/><path fill="#FFF" fill-rule="nonzero" d="M36 16a4.522 ... 17.29z"/></g></svg>
        </div>
  ```
  scss:
  ```
    svg{
      width:100%;
      height:100%;
    }
  ```
- I had trouble getting the images in outer__third to be the same height in desktop view, even though the heights are all specified to 400px in the `<img>` tag. I remembered using aspect-ratio before with images, and thought I'd try it on img in scss and it worked.
   But then I noticed that the widths were not the same still in mobile . I had to explicitly set the width/height for `<img>` in scss and that together with img-fluid works. Until I realized that the images looked distored in desktop view. I remembered about `object-fit: cover;` and after applying that the images no longer look distored.
- I also had some trouble (when I used flex) to get the columns to be the same width, so decided to try with grid instead.
  (see link 4)
- I paid more attention to font-sizes and how it affects readability at different screen widths.
  I used `font-size:clamp( 1.1rem, 1.4rem, 3rem);` for `<p>` as well as all headers, and  `font-size:max(0.9rem, 1.6vw);` for navigation.
 
### Continued development

- Daily tutorials and projects in HTML5, CSS3, Javascript, Bootstrap, Sass/SCSS. For now, in time I will go re-learn React ect.

### Useful resources

 [Svg dissapears when parent is displayed flex](https://stackoverflow.com/questions/46922999/inline-svg-disappears-with-flexbox)

 [Multiple svgs with same id](https://stackoverflow.com/questions/37000385/multiple-svg-with-same-ids)

 [Scaling svgs](https://css-tricks.com/scale-svg/)

 [Equal width with flexbox is more complicated](https://css-tricks.com/equal-columns-with-flexbox-its-more-complicated-than-you-might-think/)

 [Equal width with grid ](https://stackoverflow.com/questions/47601564/equal-width-columns-in-css-grid)

## Author

- Website - [One of my latest codepens](https://codepen.io/cynthiab72/pen/oNybYON)
- Frontend Mentor - [@cmb347827](https://www.frontendmentor.io/profile/cmb347827)

