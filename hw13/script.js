const user__list = document.getElementById("user__list");

const userArray = [1,2,[1,2,3],3,2,2,[1,2,3]];

function generateList(array) {
    for (i = 0; i < array.length ; i++){
        if(!isNaN(array[i])){
            const node = document.createElement("li")
            const textnode = document.createTextNode(array[i]);
            node.appendChild(textnode)
            user__list.appendChild(node)
        } else if(Array.isArray(array[i])){
            for (j = 0; j < array[i].length ; j++){
                const node = document.createElement("ul")
                const childNode = document.createElement("li")
                const textNode = document.createTextNode(array[i][j]);
                node.appendChild(childNode)
                childNode.appendChild(textNode)
                user__list.appendChild(node)
            }
        }
    }
}

generateList(userArray)
