<div align="center">
    <h1>INFO 1650 Assignment 6</h1>
    <h3>Group 4</h3>
    <p>Leader: Kun Li<br>Member: Boyuan Ye, Qiang Jiang, Liangshun Dong, Jinming Zhang</p><br><br>
</div>

## Introduce to This Project
The WeTours Web Application is designed to help users discover and explore various attractions. It provides detailed information about different locations, allowing users to filter and search for destinations based on their preferences. Users can also login to view personalized content.


### Introduce to the website
   This website contains 3 main pages, Login page, Homepage, Detail page.
#### Login page
   This login page is designed to offer an enhanced user experience by harnessing the power of Bootstrap's components, particularly the validation and layout systems. Prompt visual feedback ensures that users can swiftly correct any discrepancies in their inputs, simplifying the login procedure. For an in-depth understanding or queries, please consult the source code or contact the development team.

#### Home page
   There is a header in both home page and detail page. It includes a logo at the left, a navigation bar next to the logo, a search bar at the middel of header and a login button on the right (it will be replaced by an avatar which can display a dropdown menu once it was clicked). Input the key words in the search bar and click search button will filter the cards that meets the keyword and shows in the page.
   A list of attraction cards which include a sample image, its name and a brief description will shows at the main body of home page. While the content of cards are loading, the placeholder will display and will be replaced once the loading is down. Click each card will jump to the detail page of specify attraction.
   At the bottom of home page is the footer that declare the copyright of the website.

#### Detail page
   In detail page, there is a header same as the one in home page at the top.
   A breadcrumb is at the topleft of the main body that allows the user to go back to homepage.
   At the main body of this page is a carousel that contains three images on the left and the introduction of the attraction on the right. Following is the detail information that hidden in the accordion.
   At the bottom of this page is the comment area. The publishers' avatar, nickname and comment content will list here. The comments has been divided into different pages if is more than five. User can edit there own comment with title and content in the input area, rate the attraction by selecting stars, then click the submit button to submit.



## Introduce to Project Structure
### img folder
    All resources includes images, icons, etc. which been used in this project were put in this folder.

### scss folder
    This folder contains all the scss files that used to style the website.

### sass folder
    This folder contains all the sass files that used to style the website.

### mock
    This folder contains all the json data that used for creating the website.

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

#### login style sheet
1. login.scss
This SCSS file is provides custom styling for the login page.
2. _mobile.scss
This SCSS file is designed to adjust the styles when the viewport width is 800px or below, which typically corresponds to mobile devices.

### css folder
    This folder contains all the css files that generated from scss and sass files.

### js folder
    This folder contains all the javascript files that used in this project.



## Bootstrap Component been Used

### Login Page (File: login.html)

1. **Form with Validation**: Bootstrap's form and validation classes combined with HTML5 attributes enrich the user input experience with clear feedback on the validity of their inputs.
   ```html
   <form class="needs-validation" novalidate> ... </form>
   ```

2. **Form with  Layout**: Utilizing Bootstrap's layout classes, the design achieves a responsive and aesthetically pleasing alignment and distribution of elements.
   ```html
   <div class="mb-3">
      <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
      <input type="email" class="form-control" id="inputEmail3" placeholder="xxx@xx.xxx" required
         pattern="^[a-zA-Z0-9._\\u002D]+@[a-zA-Z0-9._\\u002D]+\.[a-zA-Z]+">
   </div>
   ```

3. **Input Fields**: Designed with Bootstrap classes to ensure a cohesive visual style.
   ```html
   <input type="email" class="form-control" ... >
   <input type="password" class="form-control" ... >
   ```

4. **Buttons**: Adopting Bootstrap's button classes for user actions.
   ```html
   <button type="submit" class="btn btn-primary">Log in</button>
   ```

5. **SVG Icon**: An icon integrated from Bootstrap's icon library utilized for the back button.
   ```html
   <svg xmlns="http://www.w3.org/2000/svg" ... class="bi bi-arrow-left-short" ... ></svg>
   ```

6. **Alert**: This dynamic component is used to convey messages to users, such as login errors.
   ```javascript
   const wrapper = document.createElement('div');
   wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">...</div>';
   ```


### Home Page (File: homepage.html)
1. **Navbar**: 
   - File: both `homepage.html` and `detail.html`
   - Purpose: For main navigation.

2. **Dropdown**:
   - File: both `homepage.html` and `detail.html`
   - Purpose: For additional menu options in the navbar.

3. **Form Control**:
   - File: both `homepage.html` and `detail.html`
   - Purpose: For the search input box.

4. **Buttons**:
   - File: both `homepage.html` and `detail.html`
   - Purpose: For various action buttons like Search, LOGIN/SIGNUP, etc.

5. **Alert**:
   - File: both `homepage.html` and `detail.html`
   - Purpose: To show important alerts under the Navbar.

6. **Placeholder**:
   - Purpose: Used to indicate that the content in cards are still loading.

7. **Spinner**:
   - Purpose: Used to indicate that the image of each card is still loading.

8. **Card**:
   - Purpose: To display attractions that include an image, its name and a brief description.


### Detail Page (File: detail.html)
1. **Accordion**
This component is used for showing and hide detail introduction to an attraction.
2. **Navbar**  
This component is used for navigation which stays in the top of the page.
3. **Breadcrumb**  
   This component is used for showing homepage navigation.
4. **Button**  
This component is used for comment submission. 
5. **Carousel**  
This component is used for showing attraction images. 
6. **List group**  
This component is used for showing basic information of the attraction. 
7. **Pagination**  
   This component is used for showing comments in different pages.
8. **Spinners**  
   This component is used for creating a waiting animation when comments are  being loaded.
9. **Modal**  
   This component is used for confirmation before submitting review.
