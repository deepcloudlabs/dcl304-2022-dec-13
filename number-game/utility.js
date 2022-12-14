const emptyElement = (element) => {
    var node = element;
    while (element.hasChildNodes()) {
        if (node.hasChildNodes()) {
            node = node.lastChild;
        } else {
            node = node.parentNode;
            node.removeChild(node.lastChild);
        }
    }
} ;

export function fun(){}
export default emptyElement;
