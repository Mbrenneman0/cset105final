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
        this.purchased = false;
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
        this.element.remove()
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

function itemClicked(item) {
    if (item.purchased = false) {
        item.purchased = true
        item.templateHTML.style.textDecoration = "line-through"
    } else {
        item.purchased = false
        templateHTML.style.textDecoration = "none";
    }
}

function filterItems(btn)
{
    console.log(btn)
    if(btn.id === "purchased-filter")
    {
        if(btn.class.contains("active"))
        {
            currentFilter = filters.none;
            btn.class = btn.class.replace(" active", ""); // removes the "active" class without removing any other classes
        }
        else
        {
            currentFilter = filters.purchased;
            btn.class += " active";
        }
    }
    else if(btn.id === "unpurchased-filter")
    {
        if(btn.class.contains("active"))
        {
            currentFilter = filters.none;
            btn.class = btn.class.replace(" active", ""); // removes the "active" class without removing any other classes
        }
        else
        {
            currentFilter = filters.unpurchased;
            btn.class += " active";
        }
    }
}

function updateList()
{
    //checks filters and displays each item based on whether it passes the filter
    
    //first, delete all elements from the parent container
    for(let i = parentContainer.getElementsByTagName("div").length-1; i >= 0; i--)
    {
        parentContainer.getElementsByTagName("div")[i].remove();
    }


    for(let i = 0; i < groceryList.length; i++)
    {
        if(currentFilter === filters.none)
        {
            parentContainer.appendChild(groceryList[i].element);
            console.log(`${groceryList[i].name} added`);
        }
        else if(currentFilter === filters.purchased)
        {
            if(groceryList[i].purchased)
            {
                parentContainer.appendChild(groceryList[i].element);
                console.log(`${groceryList[i].name} added`);
            }
        }
        else if(currentFilter === filters.unpurchased)
        {
            if(!groceryList[i].purchased)
                parentContainer.appendChild(groceryList[i].element);
                console.log(`${groceryList[i].name} added`); 
        }
    }
}


function getIndex(listElement)
{
    for(let index=0; index < groceryList.length; index++)
    {
        if(listElement.getElementsByClassName("item-text")[0].innerText === groceryList[index].name)
        {
            return index;
        }
    }
}

function getItem(listElement)
{
    return groceryList[getIndex(listElement)];
}