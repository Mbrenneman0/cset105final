let groceryList = [] //array of items
let filters = {none: 0, purchased: 1, unpurchased: 2}
let currentFilter = filters.none;
let containerElement = document.getElementsByTagName("main")[0]
let templateHTML = "<p class=item-text></p>" //maybe needs more work?
let parentContainer = document.getElementById("parentContainer")


class Item
{
    constructor(name)
    {
        this.name = name;
        this.createHTML();
        this.updateInnerText();
        this.addToDisplay();
    }
    
    addToDisplay()
    {
        parentContainer.appendChild(this.element)
    }

    removeFromDisplay()
    {
        //TODO: removes the item from the parent container
    }

    createHTML()
    {
    //TODO: create element with defualt HTML
    //include onclick function
    console.log("createHTML()")
    this.element = document.createElement("div");
    this.element.innerHTML = templateHTML
    this.element.onclick= () => {itemClicked(this)} //hopefully passes the object, needs tested

    }

    updateInnerText()
    {
        //TODO: sets the innerText of the html
        console.log("updateInnerText()")
        let textP = this.element.getElementsByClassName("item-text")[0];
        textP.innerText = this.name;
        console.log(textP);
    }

}

function addItem() {
    let item = prompt("What item do you want to add?")
    if(item !== "")
    {
        groceryList.push(new Item(item))
    }
}

itemClicked(item)
{
    // put line through then delete line
}