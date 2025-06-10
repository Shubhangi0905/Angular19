## 📁 Event Binding in Angular

Just like we saw in **Property Binding**, where we bind different properties on an HTML element,  
**Event Binding** is an approach where we bind different **events** for an HTML element.

---

### 🧠 What is Event Binding?

In the HTML DOM, there are several events that allow JavaScript to register event handlers on elements in an HTML document.

An **event** is basically an action performed by the user on a particular element — for example, a button click.

There are several types of events in the DOM:

- Mouse events (e.g., `click`, `mouseover`)
- Keyboard events (e.g., `keydown`, `keyup`)
- Input events (e.g., `input`, `change`)
  
These user actions are what we refer to as **events**.

---

### 💡 How Event Binding Works

Events are generally used in combination with functions.  
A function is executed **only when** the event occurs.

For example, let’s define a method `display()` in the component, and bind it to a button’s `click` event to show an alert.

---

### 🧪 Example 1: Basic Click Event Binding

#### `app.component.ts`
```ts
export class AppComponent {
  display() {
    alert('Click event is triggered!');
  }
}
## ❓ Interview Questions & Answers

### Q1. Explain the data flow in event binding.
**Answer**:  
In **event binding**, the data flows **from the DOM to the component**.  
For example, when a `click` event is triggered on an element, the bound method from the component gets called and any passed value flows to it.

---

### Q2. Explain the difference between event binding and property binding.

| Feature            | Event Binding               | Property Binding              |
|--------------------|-----------------------------|-------------------------------|
| **Data Flow Direction** | DOM ➝ Component              | Component ➝ DOM              |
| **Syntax**         | `(event)="expression"`       | `[property]="expression"`     |
| **Purpose**        | Listen to user actions/events| Set element or directive properties |
| **Example**        | `(click)="onClick()"`        | `[disabled]="isDisabled"`     |

---

## 📌 Upcoming Topics

- Two-way data binding (`[(ngModel)]`)
- Built-in directives (`*ngIf`, `*ngFor`)
- Component communication
- Routing and navigation
