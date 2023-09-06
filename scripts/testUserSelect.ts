const hasStyle = (obj): obj is HTMLDivElement => Object.hasOwn(obj, "style")
setTimeout(function () {
  const all = document.getElementsByTagName("*")
  for (let i = 0; i < all.length; i++) {
    const el = all[i] as HTMLDivElement
    if (el.style) {
      const computed = getComputedStyle(el)
      const userSelect = computed.getPropertyValue("user-select")

      if (userSelect === "none") {
        el.style.userSelect = "text"
        el.style.border = "1px solid red"
      }
    }
  }
}, 3000)
