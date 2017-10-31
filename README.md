# Code Institute Stream One Project
 
This is a project website for Code Institute Full Stack Development course Stream One. It is a sample website for a walking group based in the south-west of England, a small group which organises monthly walks in Devon and Cornwall both on moorland and along the coast path. 

The website provides information for both existing and potential group members, covering future events and past walks as well as information about the hobby of walking itself. The site also gives links to the group's social media accounts in the footer of each page.

## Responsive Design

There is currently one breakpoint set which is activated when the page width exceeds 800px. This switches from a horizontal menu to a vertical menu and also changes the header and footer text from left to centre aligned.

On the Home Page, Flexbox is used to arrange the information boxes and a minimum width of 200 pixels is set to ensure that the boxes do not become too narrow. Should the page width be such that the boxes would drop below 200 pixels, the further box to the right will drop below the others. Flexbox is also used in the membership form to show the two fieldsets alongside each other in the desktop display.

On the Upcoming Walks and Photo Galleries pages, the flex direction is initially set to column, in order to display two sections of content one above the other. In the desktop stylesheet, the direction is altered to row in order to show the two sections side by side.

## JavaScript Functionality

JavaScript is used on the Home Page to run the image switcher on the header image. A very basic validation script is used for both the quick contact form on the Home Page and the membership form on the Join the Group page.

Further use of JavaScript is made on the Photo Galleries page by the inclusion of a content switcher. That script loads up the details of the most recent walk. There are links provided which when clicked, use a JavaScript function to display the details of the chosen walk while hiding all the others.

The Photo Galleries page also features a lightbox script which allows a user to click a thumbnail image and display it at a larger size in the centre of the viewport. The script includes 'previous' and 'next' links to enable navigation between images and a 'close' link to remove the lightbox.

External scripts are used in the context of the OS Openspace API on both the Home Page and the Upcoming Walks page.

## File Structure

All image files, CSS files and JavaScript files are separated into different directories for clarity and simplicity. Images are further separated depending upon where in the site they are used.

## Site Content

### Home Page

The Home Page shows a header image of a past walk above a brief introductory paragraph. The header image uses JavaScript to rotate between a selection of images. Below the introduction are three information boxes.

* The first of these shows the date of the next walk and a brief description of the route, along with a small map showing the starting point. There is a link to the Future Walks page where full details can be found.

* The second information box gives information about the most recent walk and a preview photo, with a link to the Photo Galleries page where more pictures are available.

* The final information box includes a simple contact form, for people who may not wish to join the group but who have an enquiry to send to the group organisers. The form just gives fields for basic contact information and a textbox for the message.

### Upcoming Walks

The page detailing upcoming walks shows a brief description of the next schedule walk, along with a map of the route created using OS Openspace Map Builder and embedded using the Openspace API. There are then short description of planned walks up to six months ahead.

### Photo Galleries

The galleries page gives a brief recap of the most recent walk, along with a short gallery of photos taken along the route. There is a menu identical to that on the Upcoming Walks page, enabling the user to switch between all the available galleries. By default, the most recent walk will load first. There is a lightbox script which enables photos to be viewed at a larger size.

### Walking Advice

The Walking Advice page is primarily aimed at people who are new to the hobby. It simply provides a basic introduction to walking, explaining what clothing and equipment might be needed in order to ensure a safe and comfortable day out.

### Join the Group

There is a specific page on the site for people who wish to join the group, which features a more detailed membership form. The form collects e-mail, telephone and postal contact details as well as asking about people's experiences of and preferences for walking. Such information can then be used to plan both the schedule of walks and the arrangement of transport to and from the starting point.

## Deployment

The site was deployed to GitHub pages very early in its development. The chief reason for this was to enable testing on other devices, specifically tablet and mobile, as development was being done on a PC.

## Testing

The site was tested on a variety of devices and on a number of different browsers. Forms were tested without input in the required fields in order to ensure that the validation message would not be displayed, and then with the required fields filled in to ensure that the message was displayed. 

During the testing process, an issue was encountered whereby white space was showing below the month switcher menu on the Photo Galleries page. This was only happening on the mobile stylesheet on Chrome for Android, and only when either there were more than two month links above or the explanatory paragraph appeared below. The testing process did not produce any explanation for this white space and so it is currently assumed to be a bug in the browser.