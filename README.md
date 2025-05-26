![Logo](./public/logo.png)

# Juan Liao Portfolio

**React + Vite Project**

---

## Resources

### Design:

- **Figma Project**: [JL](https://www.figma.com/design/GcaCmmqIlHGm63d8NbpoYX/portfolio?node-id=0-1&p=f&t=ygJrSI6sgyDbd5rS-0)

---

## Setup Instructions

### github: [JL](https://github.com/blueberryliaojuan/jlportfolio)

### Dependencies:

- CSS: [tailwindcss](https://tailwindcss.com/)
- Router: [react-router-dom]（https://www.npmjs.com/package/react-router-dom）
- Icon：[Font Awesome](https://fontawesome.com/)
<!-- - JSON Server: [typicode/json-server](https://github.com/typicode/json-server) -->

### Installation Steps:

1. Install project dependencies: npm i
<!-- 2. Set up the JSON Server:
   npm db -->
2. Start the development server: npm run dev

---

### some challenges

Initially, I used react-burger-menu, which added a transparent layer (like a <button>) to capture click events. This transparent layer would cover the rest of the page, so when you clicked anywhere on the page, the menu would open, preventing other interactions. Even adding disableOverlayClick didn’t help. I spent a lot of time trying to fix this bug, and in the end, I had to abandon it and write the hamburger menu from scratch using pure React.

I used Swiper and SwiperSlide, but when the screen size was smaller than 640px, the Swiper suddenly became excessively wide, making the page unreadable. So, I tried wrapping the Swiper with a div with max-w-full and overflow-x-hidden, and it finally resolved the issue.
