function shoppinglist() {
    var item=document.getElementById("shoppingInput").value
    var text=document.createTextNode(item)
    var newItem=document.createElement("li")
    newItem.appendChild(text)
    document.getElementById("shoppinglist").appendChild(newItem)
}