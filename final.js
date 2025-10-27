let groceryList = [] //array of items
let filters = {none: 0, purchased: 1, unpurchased: 2}
let currentFilter = filters.none;
let containerElement = document.getElementsByTagName("main")[0]
let templateHTML = `<p class=item-text></p><button class="remove-item" onclick="removeItem(this)">Remove</button>` //maybe needs more work?
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
        //removes the item from the parent container
        this.element.remove()
    }

    createHTML()
    {
    //creates element with defualt HTML
    //includes onclick function
    this.element = document.createElement("div");
    this.element.className = "item"
    this.element.innerHTML = templateHTML
    this.element.onclick= () => {itemClicked(this)} //hopefully passes the object, needs tested

    }

    updateInnerText()
    {
        //sets the innerText of the html
        let textP = this.element.getElementsByClassName("item-text")[0];
        textP.innerText = this.name;
    }
}

function addItem() {
    let item = prompt("What item do you want to add?")
    item = item.trimStart();
    if(item !== "")
    {
        if(getIndex(item) !== -1)
        {
            window.alert("Item already exists!!!");
            return;
        }
        groceryList.push(new Item(item))
    }
}

function itemClicked(item) {
    if (item.purchased === false) {
        item.purchased = true
        item.element.style.textDecoration = "line-through"
    } else {
        item.purchased = false
        item.element.style.textDecoration = "none"
    }
}

function filterItems(btn)
{
    if(btn.id === "purchased-filter")
    {
        if(btn.className.includes("active"))
        {
            currentFilter = filters.none;
            btn.className = btn.className.replace(" active", ""); // removes the "active" class without removing any other classes
        }
        else
        {
            currentFilter = filters.purchased;
            btn.className += " active";
        }
        if (document.getElementById("unpurchased-filter").className.includes("active")) {
             document.getElementById("unpurchased-filter").className = document.getElementById("unpurchased-filter").className.replace(" active", "")
        }
    }
    else if(btn.id === "unpurchased-filter")
    {
        if(btn.className.includes("active"))
        {
            currentFilter = filters.none;
            btn.className = btn.className.replace(" active", ""); // removes the "active" class without removing any other classes
        }
        else
        {
            currentFilter = filters.unpurchased;
            btn.className += " active";
        }
        if (document.getElementById("purchased-filter").className.includes("active")) {
             document.getElementById("purchased-filter").className = document.getElementById("purchased-filter").className.replace(" active", "")
        }
    }

    if (btn.id === "all-filter") {
        currentFilter = filters.none
        if (document.getElementById("unpurchased-filter").className.includes("active")) {
             document.getElementById("unpurchased-filter").className = document.getElementById("unpurchased-filter").className.replace(" active", "")
        }
        
        if (document.getElementById("purchased-filter").className.includes("active")) {
             document.getElementById("purchased-filter").className = document.getElementById("purchased-filter").className.replace(" active", "")
        }
    }
    updateList();
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
        }
        else if(currentFilter === filters.purchased)
        {
            if(groceryList[i].purchased)
            {
                parentContainer.appendChild(groceryList[i].element);
            }
        }
        else if(currentFilter === filters.unpurchased)
        {
            if(!groceryList[i].purchased)
                parentContainer.appendChild(groceryList[i].element);
        }
    }
}


function getIndex(listElement)
{

    let text = "";
    if (typeof(listElement) === "string")
    {
        text = listElement
    }
    else
    {
        text = listElement.getElementsByClassName("item-text")[0].innerText
    }
    for(let index=0; index < groceryList.length; index++)
    {
        if (parentContainer.getElementsByClassName("item-text")[index].innerText === text)
        {
            return index;
        }
    }

    return -1; //if the item doesnt exist
}

function getItem(listElement)
{
    return groceryList[getIndex(listElement)];
}

function removeItem(item)
{
    groceryList.splice(getIndex(item.parentElement), 1);
    updateList()
}
