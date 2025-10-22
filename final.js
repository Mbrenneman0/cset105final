let groceryList = [] //array of items
let filters = {none: 0, purchased: 1, unpurchased: 2}
let currentFilter = filters.none;
let containerElement = document.getElementsByTagName("main")[0]
let templateHTML = "<p></p>" //maybe needs more work?

class Item
{
    constructor(name)
    {
        this.name = name;
        createHTML();
        updateInnerText();
    }
    
    addToDisplay()
    {
        //TODO: adds the item to the parent container
    }

    removeFromDisplay()
    {
        //TODO: removes the item from the parent container
    }

    createHTML()
    {
    //TODO: create element with defualt HTML
    //include onclick function
    this.element = document.createElement("div");
    this.element.innerHTML = templateHTML
    this.element.onclick= () => {itemClicked(this)} //hopefully passes the object, needs tested

    }

    updateInnerText()
    {
        //TODO: sets the innerText of the html
    }

}

itemClicked(item)
{
    //TODO: the onclick function of each item
    //puts linethrough over item text and marks it as purchased or unpurchased.

}