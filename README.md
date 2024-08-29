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
- Then I also had trouble with outer__second SVGs again when I wanted to use flex to place items center or to the start based on screensize.
  I found a stackoverflow post that explained it was because my svg has no internal width/height. I added a wrapper element to fix this (see link 1)
- I had trouble getting the images in outer__third to be the same height, even though the heights are all specified to 400px in img. 
  I remembered using aspect-ratio before with images, and thought I'd try it on img and it worked.
- I also had some trouble (when I used flex) to get the columns to be the same width, so decided to try with grid instead.
  (see link 4)
 
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

