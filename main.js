import { save } from "./utils.js";

if (typeof window !== "undefined" && window.document) {
   document.body.appendChild(document.createTextNode("modules loaded"))
} else {
   console.log("modules loaded")
}
