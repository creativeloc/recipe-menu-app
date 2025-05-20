import { useState } from "react"
import menu from "./data.js"
import Menu from "./Menu"
import Title from "./Title"
import Categories from "./Categories.jsx"

// Step bu Step approach
// const tempCategories = menu.map((item) => item.category)
// const tempSet = new Set(tempCategories)
// const tempItems = ["all", ...tempSet]

// console.log(tempItems)

// Single line approach
const allCategories = ["all", ...new Set(menu.map((item) => item.category))]
// console.log(allCategories)

const App = () => {
  const [menuItems, setMenuItems] = useState(menu)
  const [categories, setCategories] = useState(allCategories)
  // console.log(categories)

  const filteredItems = (category) => {
    console.log(category)
    if (category === "all") {
      setMenuItems(menu)
      return
    }
    const newItems = menu.filter((item) => item.category === category)
    setMenuItems(newItems)
  }

  return (
    <main>
      <section className="menu">
        <Title text="Our Menu" />
        <Categories categories={categories} filteredItems={filteredItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  )
}
export default App
