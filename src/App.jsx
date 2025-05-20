import { useState } from "react"
import menu from "./data.js"
import Menu from "./Menu"
import Title from "./Title"

// const tempCategories = menu.map((item) => item.category)
// const tempSet = new Set(tempCategories)
// const tempItems = ["all", ...tempSet]

// console.log(tempItems)

const allCategories = ["all", ...new Set(menu.map((item) => item.category))]
// console.log(allCategories)

const App = () => {
  const [menuItems, setMenuItems] = useState(menu)
  const [categories, setCategories] = useState(allCategories)
  console.log(categories)

  return (
    <main>
      <section className="menu">
        <Title text="Our Menu" />
        <Menu items={menuItems} />
      </section>
    </main>
  )
}
export default App
