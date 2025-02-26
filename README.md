# Juan Liao Portfolio

**React + Vite Project**

---

## Resources

### Design:

- **Figma Project**: [JL](https://www.figma.com/design/GcaCmmqIlHGm63d8NbpoYX/portfolio?node-id=0-1&p=f&t=ygJrSI6sgyDbd5rS-0)

---

## Setup Instructions

### github: [JL](https://github.com/blueberryliaojuan/bloomie.git)

### Dependencies:

- CSS: [tailwindcss](https://tailwindcss.com/)
- Router: [react-router-dom]（https://www.npmjs.com/package/react-router-dom）
<!-- - classname: [classnames](https://www.npmjs.com/package/classnames) -->
- Font Awesome：[ionicons](https://docs.fontawesome.com/web/use-with/react)
- JSON Server: [typicode/json-server](https://github.com/typicode/json-server)

### Installation Steps:

1. Install project dependencies: npm i
2. Set up the JSON Server:
   npm db
3. Start the development server: npm run dev

---

## Challenges and what I Learned:

1. It took me some time to get used the tailwind, as I did not use it before. I tried to use customised css variables but failed to use className like "color-primary", then I used inline style instead
   (eg. {
   color: favorite ? "var(--primary-color)" : "var(--secondary-color)",
   })
2. I learned that the higher verion of react-router-dom uses RouterProvider, so I tried in this project
3. learned about the way to use ionIcons in the react, I made some mistakes on how to import css, finally found that I can use them as components, like <IonIcon icon={heartOutline} className="text-lg" />
4. the state management of react is very similar to Vue, so I got used to it quickly
5. I tried to use JSON server to store my data, but run out of time, I will try in next assignment
