# Login Page README

## Overview

This README provides an overview of the login page built using HTML, CSS, and JavaScript, with special attention to Bootstrap components used to create the page.

## Bootstrap Components Used

1. **Responsive Meta Tag**: Ensures that the webpage is rendered correctly across all device sizes.
   ```html
   <meta name="viewport" content="width=device-width, initial-scale=1">
   ```

2. **Bootstrap CSS and JS**: Links to the Bootstrap CSS and JS library files from the CDN.
   ```html
   <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
   <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
   ```

3. **Form**: Bootstrap's form layout and classes are utilized to create a structured form. The form includes various elements like input fields and a button.
   ```html
   <form class="needs-validation" novalidate> ... </form>
   ```

4. **Input Fields**: Bootstrap styles for input fields are used to achieve a consistent look and feel.
   ```html
   <input type="email" class="form-control" ... >
   <input type="password" class="form-control" ... >
   ```

5. **Buttons**: Bootstrap button components are used for actions like submitting the form.
   ```html
   <button type="submit" class="btn btn-primary">Log in</button>
   ```

6. **SVG Icon**: A Bootstrap SVG icon is utilized for the back button.
   ```html
   <svg xmlns="http://www.w3.org/2000/svg" ... class="bi bi-arrow-left-short" ... ></svg>
   ```

7. **Alert**: Bootstrap's alert component is dynamically created and appended to the page to display messages to the user. For instance, to show an error when login fails.
   ```javascript
   const wrapper = document.createElement('div');
   wrapper.innerHTML = [
       '<div class="alert alert-' + type + ' alert-dismissible" role="alert">',
       ...
   ];
   ```

## Other Libraries Used

1. **jQuery**: jQuery is a fast, small, and feature-rich JavaScript library. It's used in various places in the code, and its main script is imported as:
   ```html
   <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
   ```

## Additional Notes

The login system fetches a list of users from a mock JSON (`../mock/user.json`). It checks the provided email and password against this list to authenticate the user. Successful authentication stores the user data in the local storage and redirects the user to a different page (`test.html`). If authentication fails, an alert is shown on the webpage.

For any more detailed information or clarifications, please refer to the code or contact the developer.