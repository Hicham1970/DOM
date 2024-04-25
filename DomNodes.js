/**DOM Nodes:
 * le document html est un node, le header est un node, the body en est un, la tag h1, h2, ..h4 est aussi  des nodes.
 * Il y'a plusieurs types de nodes: on utilise node type pour  déterminer le type du node
 */
// on sélectionne le bannière du document, celle qui a le id = "page-banner":

let banner = document.querySelector("#page-banner");
console.log("The page-banner Node type is ", banner.nodeType); // afficher le type du noeud. Le type est égal à 1 (ElementNode) car c'est un élément HTML.
console.log("The page-banner Node Name is ", banner.nodeName); //  The page-banner Node Name is DIV.
console.log(
  "The page-banner Node possède des enfants? ",
  banner.hasChildNodes()
); // cette méthode  renvoie true si l'élément possède des enfants.

//----------------------------------------//
// How to clone a node??
const clonedBanner = banner.cloneNode(false);
console.log(clonedBanner);

// console.log(clonedBanner);
//pour la method .cloneNode() si on  met en paramètre true cela signifie que les sous-arbres seront également copiés,
// Et si  vous voulez uniquement copier uniquement l'element avec la id "page_banner"  ===> .cloneNode(false). les données (les attributs et les balises children ) ne seront pas copiés.
