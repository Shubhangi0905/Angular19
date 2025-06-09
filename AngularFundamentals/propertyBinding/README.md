📁 Property Binding in Angular
This directory contains Angular examples that demonstrate the concept of Property Binding, including its usage with various HTML elements and a comparison with interpolation.

🧠 Key Concepts
Interpolation ({{ }})
Used to bind component data to the template.

Automatically converts data to strings.

Example:

html
Copy
Edit
<p>{{ userName }}</p>
Property Binding ([ ])
Binds component data to DOM properties.

Maintains the original data type (e.g., boolean, number).

Example:

html
Copy
Edit
<button [disabled]="isDisabled">Submit</button>
Binding with <img> Tags
Demonstrates dynamic binding of image sources.

Example:

html
Copy
Edit
<img [src]="imageUrl" alt="Dynamic Image">
❓ Interview Questions & Answers
1. What is the difference between interpolation and property binding?
Answer:

Interpolation ({{ }}) is used to bind data to the template and always converts the data to a string. Property binding ([ ]) binds data to DOM properties and preserves the data type. For instance, binding a boolean value should use property binding to maintain its boolean nature.

2. Can you bind a DOM element's attribute using property binding?
Answer:

Yes. You can bind attributes using the attr. prefix in property binding.

Example:

html
Copy
Edit
<button [attr.aria-label]="ariaLabelText">Click me</button>
This binds the aria-label attribute to the ariaLabelText property in the component.

3. What happens if you use interpolation instead of property binding for a boolean attribute?
Answer:

Using interpolation for boolean attributes converts the value to a string, which may not have the desired effect.

Incorrect:

html
Copy
Edit
<!-- 'true' is a string -->
<button disabled="{{ isDisabled }}">Submit</button>
Correct:

html
Copy
Edit
<!-- isDisabled is a boolean -->
<button [disabled]="isDisabled">Submit</button>
In the incorrect example, the button may not behave as expected because the disabled attribute receives a string instead of a boolean.

4. Can you bind multiple properties at once? If so, how?
Answer:

While you can't bind multiple properties simultaneously in a single statement, you can bind multiple properties individually on the same element.

Example:

html
Copy
Edit
<input [value]="userName" [disabled]="isDisabled" [attr.maxlength]="maxLength" />
Each property is bound separately, allowing for dynamic and flexible templates.

code

📌 Upcoming Topics
Event binding

Two-way data binding

Directives and structural bindings

Component communication

Routing and lazy loading

