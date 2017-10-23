var isLocalStorageWorking = false;

/* this try/catch makes ChakraCore unhappy */
try {
   window.localStorage.getItem("testkey");
   isLocalStorageWorking = true
} catch (e) {
   console.log("localStorage error: " + e)
}

export function save(key, val) {
   if (isLocalStorageWorking) {
      window.localStorage.setItem(key, val);
   } else {
      // use cookie or whatever
   }
}