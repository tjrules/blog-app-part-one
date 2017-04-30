# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Project #2: Building Your First Full-stack Application

## Overview of `Wiki.app`

Henrietta is a business magnate and wants to create a internally facing wiki for 
her organization. She wants her employees to be able to write articles in order 
to inform colleagues about their insights.

## Project Details

### Necessary features

A basic implementation of this project must include:

1. All articles should be editable - Henrietta's is a collaborative workplace
1. If an article is changed, the time of that change should be shown so that 
users can know how up-to-date an article is
1. Henrietta wants the articles to be written in markdown so that the content is 
visually appealing
1. Henrietta wants users to be able to add a category to an article so that 
articles can be organized
1. Henrietta doesn't mind who authors / edits the wikis (Meaning no User model)
1. Dealer's Choice: Henrietta wants the wiki to either
    - Option A: Be styled with a CSS Framework such as Skeleton, Materialize, Boostrap, or any other framework that looks interesting
    - Option B: Offer an advanced feature that displays live updated Markdown text as a user is typing

###  Advanced features

Going above and beyond the basic implementation is very desirable, should you 
have the time.

Feel free to enhance your project with any of the following features:

1. Employees feel that there should be some accountability so Henrietta is going 
back on her no authors choice
1. Employees have complained that they feel constrained by a single category and 
have suggested using multiple tags.
1. Articles should be browsable by tag.
1. The dev team is interested in consuming the web app's information via a REST 
API.  They've asked for end points that return data formatted as JSON.

## Tips

Disavowing pizza and red bull (the stereotypical food choice of developers) you 
have decided to explore New York City's salad offerings.

- While at Chopt, you overheard two developers chatting about how 
[marked](https://www.npmjs.com/package/marked) is a great module for rendering markdown.

## Implementation

### Technologies

You will be expected to use the following technologies to implement this project:

- **HTML / EJS**
  Your HTML should be semantic and valid.

- **Node and Express**
  Your app will need to have its own server.

- **SQL / PG-PROMISE**
  Your app will need to persist data.

This project is focused on server side scripting and persistence, so that should 
be your focus. That being said, once you've got the server side MVP established, 
you should turn some attention to the client side.

- **CSS**
  Your app should be pleasing to look at. Your design should take usability into 
  account. E.G. if an element is meant to be clicked, give it the appropriate 
  cursor, and perhaps have its appearance change slightly.

- **JavaScript & jQuery**
  Your app should have some interactivity