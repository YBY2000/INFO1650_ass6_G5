<div align="center">
    <h1>INFO 1650 Assignment 6</h1>
    <h3>Group 4</h3>
    <p>Leader: Kun Li<br>Member: Boyuan Ye, Qiang Jiang, Liangshun Dong, Jinming Zhang</p><br><br>
</div>

## Introduce to This Project
The WeTours Web Application is designed to help users discover and explore various attractions. It provides detailed information about different locations, allowing users to filter and search for destinations based on their preferences. Users can also login to view personalized content.


### Purpose of the website


### Introduce to the website



## Introduce to Project Structure
### resources folder
    All resources includes images, icons, etc. which been used in this project were put in this folder.

### scss folder
    This folder contains all the scss files that used to style the website.
#### Detail style sheet
1. _detail_bootstrap_modification.sass  
This file contains all style modification of bootstrap components in the detail page.
2. _detail_container.sass  
This file contains style created for container dividers in the detail page. It mainly controls attributes including margin, padding, display, width and height.
3. _detail_original_style.sass  
This file contains style created for original elements like span, h1-h6 and textarea in the detail page.
4. _detail_test_border.sass  
This file contains border style for all the elements in the detail page. The border style is mainly used for test.
5. detail_main.sass  
This file aggregates all the style in sass files mentioned above. 

### css folder
    This folder contains all the css files that generated from scss files.

### scripts folder
    This folder contains all the javascript files that used in this project.



## Bootstrap Component been Used

### Home Page

#### Used Components:

1. **Navbar**: 
   - File: `homepage.html`
   - Purpose: For main navigation.

2. **Dropdown**:
   - File: `homepage.html`
   - Purpose: For additional menu options in the navbar.

3. **Form Control**:
   - File: `homepage.html`
   - Purpose: For the search input box.

4. **Buttons**:
   - File: `homepage.html`
   - Purpose: For various action buttons like Search, LOGIN/SIGNUP, etc.

5. **Alert**:
   - File: `homepage.html`
   - Purpose: To show important alerts under the Navbar.

6. **Spinner**:
   - File: `homepage.html`
   - Purpose: As a loading indicator for lazy-loaded content.

7. **Card**:
   - File: `homepage.html`
   - Purpose: To display attractions.


### Detail Page
1. Accordion  
This component is used for showing and hide detail introduction to an attraction.
2. Navbar  
This component is used for navigation which stays in the top of the page.
3. Breadcrumb  
   This component is used for showing homepage navigation.
4. Button  
This component is used for comment submission. 
5. Carousel  
This component is used for showing attraction images. 
6. List group  
This component is used for showing basic information of the attraction. 
7. Pagination  
   This component is used for showing comments in different pages.
8. Spinners  
   This component is used for creating a waiting animation when comments are  being loaded.
