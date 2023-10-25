# Login Page README

## Overview

This README offers a comprehensive overview of the login page, focusing on the Bootstrap components that have been incorporated.

## Bootstrap Components Used

3. **Form with Validation**: Bootstrap's form and validation classes combined with HTML5 attributes enrich the user input experience with clear feedback on the validity of their inputs.
   ```html
   <form class="needs-validation" novalidate> ... </form>
   ```

4. **Form with  Layout**: Utilizing Bootstrap's layout classes, the design achieves a responsive and aesthetically pleasing alignment and distribution of elements.
   ```html
   <div class="mb-3">
      <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
      <input type="email" class="form-control" id="inputEmail3" placeholder="xxx@xx.xxx" required
         pattern="^[a-zA-Z0-9._\\u002D]+@[a-zA-Z0-9._\\u002D]+\.[a-zA-Z]+">
   </div>
   ```

5. **Input Fields**: Designed with Bootstrap classes to ensure a cohesive visual style.
   ```html
   <input type="email" class="form-control" ... >
   <input type="password" class="form-control" ... >
   ```

6. **Buttons**: Adopting Bootstrap's button classes for user actions.
   ```html
   <button type="submit" class="btn btn-primary">Log in</button>
   ```

7. **SVG Icon**: An icon integrated from Bootstrap's icon library utilized for the back button.
   ```html
   <svg xmlns="http://www.w3.org/2000/svg" ... class="bi bi-arrow-left-short" ... ></svg>
   ```

8. **Alert**: This dynamic component is used to convey messages to users, such as login errors.
   ```javascript
   const wrapper = document.createElement('div');
   wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">...</div>';
   ```
