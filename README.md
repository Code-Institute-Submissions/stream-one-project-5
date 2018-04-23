# Code Institute Stream One Project
 
This is a project website for Code Institute Full Stack Development course Stream One. It is a sample website for a walking group based in the south-west of England, a small group which organises monthly walks in Devon and Cornwall both on moorland and along the coast path. The available version of the site presents a snapshot as it would have looked on 10 November 2017, the date which marked the end of the major development process.

## Contents
1. [Preparation](#preparation)
2. [Responsive Design](#responsive-design)
3. [JavaScript Functionality](#javascript-functionality)
    * [External JavaScript Code](#external-javascript-code)
4. [File Structure](#file-structure)
5. [Site Content](#site-content)
    * [Home Page](#home-page)
    * [Upcoming Walks](#upcoming-walks)
    * [Photo Galleries](#photo-galleries)
    * [Walking Advice](#walking-advice)
    * [Join the Group](#join-the-group)
6. [Deployment](#deployment)
7. [Testing](#testing)

## Preparation

Before the design process got underway, a number of user stories were devised in order to consider suitable content for the site. It was determined that visitors to the site would be a mixture of existing group members and potential members, with the potential members being further divided into those who were already experienced walkers and those who were new to the hobby.

With these users in mind, it was important to include information for existing members in terms of detailing upcoming events and giving the ability to look back at photos from past walks. Such information may also be of interest to non-members, but there was additional information required for those users. Those who were unfamiliar with the hobby may have been looking for advice on what they may need to purchase ahead of joining the group, so an advice page was an important element.

The ability to contact the group was essential. Some users who were only considering joining the group may have just had a general enquiry for the group organisers, while those who had decided to become members would require a separate means of contact whereby they could join the group. It was also important to tailor the information requested from a potential new member to be helpful to group organisers.

Once the required content had been determined, wireframes were created using the software 'Pencil'. These consisted of two mock-ups for each intended page, one for narrower devices such as mobile phones and tablets and another for wider devices such as laptops and desktop computers.

## Responsive Design

There is one major breakpoint set which is activated when the page width exceeds 800px. This switches from a horizontal menu to a vertical menu and also changes the header and footer text from left to centre aligned. In order to prevent the site being stretched too wide, a maximum width of 1200px is set on the body. A media query is used to add left and right borders to the body should the width of the viewport exceed 1200px.

On the Home Page, Flexbox is used to arrange the information boxes and a minimum width of 250 pixels is set to ensure that the boxes do not become too narrow. Should the page width be such that the boxes would drop below 250 pixels, the furthest box to the right will drop below the others. Flexbox is also used in the membership form to show the two fieldsets alongside each other in the desktop display.

On the Upcoming Walks and Photo Galleries pages, the flex direction is initially set to column, in order to display two sections of content one above the other. In the desktop stylesheet, the direction is altered to row in order to show the two sections side by side. Links to switch content between the available months appear larger in the desktop view, while a media query is used to make them larger still on viewports wider than 1000 pixels. This is done to ensure a consistent layout of three rows containing two links each, while making best use of the available space on larger displays.

The CSS for the default site layout (viewport maximum 800 pixels wide) is contained in one file, while the alternative styling for wider displays is contained in a separate file.

## JavaScript Functionality

JavaScript is used on the Home Page to run the image fader on the header image. A validation script is used for both the quick contact form on the Home Page and the membership form on the Join the Group page. These provide the user with a message when they attempt to submit the form, either a warning message if a required field has been left empty or a success message if the form submission is valid.

Further use of JavaScript is made on the Upcoming Walks and Photo Galleries pages by the inclusion of a content switcher. That script loads by default the details of the next or most recent walk. There are links provided which when clicked, call a JavaScript function which displays the details of the chosen walk while hiding all the others. The function is also used to call one of two other functions, displaying either a route map (Upcoming Walks page, see section on External JavaScript Code) or a selection of photos (Photo Galleries page).

The Photo Galleries page also features a lightbox-style script which allows a user to click a thumbnail image and display it at a larger size in the centre of the viewport. The script includes a function to allow the user to move to either the previous or next image in the current gallery and a 'close' function to remove the image viewer.

In consideration of users who may not have JavaScript enabled, some steps have been taken to ensure usability without JavaScript. Forms have a message requesting the user to enable JavaScript before attempting to submit. On the Upcoming Walks and Photo Galleries page details of the first available month are shown, while there is a message explaining that the other months are only available with JavaScript enabled.

### External JavaScript Code

External scripts are used in the context of the OS Openspace API on both the Home Page and the Upcoming Walks page. Using these maps in the website requires the inclusion of one external JavaScript file, hosted by OS Openspace, which generates the maps and also code generated using [OS Openspace Map Builder](https://www.ordnancesurvey.co.uk/business-and-government/help-and-support/web-services/os-openspace/web-map-builder.html).

The Openspace Map Builder generates JavaScript code which sets the centre point of the map and if required displays the planned route as a line on the map. Once generated, this code needs to be stored on the website server in a separate JavaScript file. The generated code has been edited to improve functionality, primarily because a number of different maps are being utilised on a single page, and the resultant code is stored with the site's other JavaScript files.

For the maps on the Upcoming Walks page, part of the generated code was rewritten to enable six different maps to be created from within a single JavaScript function. The grid references for the centre point, starting position and route on each map were placed inside an object and the data for the chosen map inserted into the script when the function was called.

Further to that, a loop was introduced to push the grid references for the route line into an array, rather than inserting each one separately as the generated code did. Because the inclusion of route lines on maps requires a considerable number of grid references to be stored in JavaScript objects, the data for the maps is stored in a separate file from the function which generates the maps.

## File Structure

All image files, CSS files and JavaScript files are separated into different directories for clarity and simplicity. Images are further separated depending upon where in the site they are used, with the thumbnail images for each indivdual gallery placed in the same directory as their full sized equivalent. The only files within the default directory are the HTML files for the pages of the site and this README.md file.

## Site Content

### Home Page

The Home Page shows a header image of a past walk above a brief introductory paragraph. The header image uses JavaScript to rotate between a selection of images. The file size of these images has been reduced with the intention of improving the loading time of the page while not compromising the quality of the photographs. Below the introductory paragraph are three information boxes.

* The first of these shows the date of the next walk and a brief description of the route, along with a small map showing the starting point. There is a link to the Future Walks page where full details can be found.

* The second information box gives information about the most recent walk and a preview photo, with a link to the Photo Galleries page where more pictures are available.

* The final information box includes a simple contact form, for people who may not wish to join the group but who have an enquiry to send to the group organisers. The form just gives fields for basic contact information and a textbox for the message. As the scope of this project is front end only, the form does not submit but displays a validation message when the 'Send Message' button is clicked. This message either gives a warning if a required field has been left empty or confirms successful submission of the form.

At the bottom of the page, as on all other pages, there are links to the group's social media accounts in the footer. Because these accounts do not exist, the links simply direct to the home page of the relevant site.

### Upcoming Walks

The page detailing upcoming walks shows a brief description of the next route, along with a map of the route created using Ordnance Survey (OS) Openspace Map Builder and embedded using the OS Openspace API. The next scheduled walk is displayed by default, with a menu to enable the user to switch between the routes planned for the next six months. The menu links feature a background image from along the planned route, giving the user a preview of one place which they would visit should they decide to go on that walk.

Enabling this functionality proved tricky to begin with so a separate GitHub branch was utilised until such time as the script was working satisfactorily.

### Photo Galleries

The galleries page gives a brief recap of the most recent walk, along with a short gallery of photos taken along the route. By default, the most recent walk will load first. Thumbnail versions of the full images are used to improve the loading time of the page. There is a menu identical to that on the Upcoming Walks page, enabling the user to switch between all the available galleries. The menu links again feature a background image, this time the first image from the gallery for that month.

There is also a lightbox script which enables photos to be viewed at a larger size. When the script is activated, the larger image loads over the page. There are 'previous' and 'next' links to navigate between the pictures in the current gallery and a link to close the viewer. The 'previous' and 'next' links are disabled on the first and last pictures in a gallery respectively.

### Walking Advice

The Walking Advice page is primarily aimed at people who are new to the hobby. It is the most static page on the website and simply provides a basic introduction to walking. The text explains what clothing and equipment might be needed in order to ensure a safe and comfortable day out walking.

### Join the Group

There is a specific page on the site for people who wish to join the group, which features a more detailed membership form. The form collects e-mail, telephone and postal contact details as well as asking about people's experiences of and preferences for walking. Such information can then be used to plan both the schedule of walks and the arrangement of transport to and from the starting point.

As with the contact form on the Home Page, the form does not submit as the scope of this project is front end only. It gives the same validation message when the button is clicked, either giving a warning if a required field has been left empty or confirming successful submission of the form. Additionally, some further messages are set which will be shown if a particular option has been chosen in the form. This allows group organisers to provide information which may be of interest to the person who is joining. Only the first applicable message will be shown in order to prevent the alert from being excessively large.

## Deployment

The site was deployed to [GitHub pages](https://andrewhstead.github.io/stream-one-project/) using a 'gh-pages' branch in the respository. This deployment was done very early in the development process. The chief reason for this was to enable easy testing on a range of other devices, specifically tablet and mobile, as development was being done on a PC. Once a new piece of functionality had been added and tested on a variety of browsers, a new commit was made to GitHub ensuring that the 'gh-pages' branch was up to date at all times.

## Testing

The site was tested on a variety of devices and on a number of different browsers. Testing of the site in a browser was done primarily using Chrome on a Windows 10 PC, making use of the Developer Tools provided. Further testing was done on the PC using Firefox and Microsoft Edge. The site was also tested on smaller devices, both tablet and mobile phone, both running Android operating systems.

Testing on mobile devices included using the Android versions of both Chrome and Firefox. In testing the site on very narrow devices, it was noted that the minumum width on the Home Page information boxes began to cause a problem when the width of the viewport dropped below 310 pixels. Should a user visit the site on a device narrower than this, some horizontal scrolling may be needed to see the entirety of the information boxes.

In the context of the functionality of the site, both the simple contact form on the Home Page and the membership form on the Join the Group page required testing to ensure that the correct validation message would be displayed. Both were tested with and without input in the required fields. This was done to ensure that the failure message would be shown if any one of the required fields was left blank, while the success message would be shown if all required fields had input. The membership form was further tested with a variety of inputs in the 'Walking Details' fieldset, to ensure that the first applicable information message would be displayed if the user selected any of the inputs which had a message attached.

Both the Upcoming Walks and Photo Galleries pages were tested to ensure that the correct section of content was displayed by default on page load. This was either the next scheduled walk (Upcoming Walks page) or the most recent past walk (Photo Galleries page). The switcher menus on both pages were tested by navigating between the different sections of content, ensuring that the correct text was displayed on the screen each time and that the correct map or photo gallery was loaded.

The lightbox script on the Photo Galleries page was extensively tested by selecting each image in turn on a gallery and navigating through the images from it. This was done to ensure that the image changing function was working correctly, especially in terms of hiding the previous and next links on the first and last images in the gallery.

All pages on the site were tested with JavaScript disabled. This was done to ensure that there was still an adequate degree of usability without scripts running, and also that the information messages regarding the lack of JavaScript were clear and understandable.

During the testing process, an issue was encountered whereby white space was showing below the month switcher menu on the Upcoming Walks and Photo Galleries pages. This problem was only occurring on the mobile stylesheet on a tablet running Chrome for Android, and even then only intermittently and in particular circumstances. Commenting out sections of the HTML code and refreshing the page appeared to indicate that the problem was present only when either there were more than two month links or the explanatory paragraph appeared below. The testing process did not produce any explanation for this white space and so it is currently assumed to be a bug in the browser.