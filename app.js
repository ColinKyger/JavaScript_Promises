/**
 *
 * @returns A promise that is designed to resolve with a list of hobbits, or potentially fail with an failure object. The failure object includes a boolean success property and a string message property.
 */
 function getList() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let potentialFail = Math.round(Math.random() * 100) < 10;
      if (potentialFail) {
        reject({ success: false, message: "Failed to get list of hobbits." });
      } else {
        resolve(["Bilbo", "Frodo", "Sam", "Merry", "Pippin"]);
      }
    }, 10);
  });
}

const error = document.querySelector("#error")
const ul = document.querySelector("#list")

let promise = getList();

function handleList(list) {
  list.forEach((hobbit) => {
    let li = document.createElement("li")
    li.textContent = hobbit;
    ul.appendChild(li)
  })
}
function handleError(errors) {
  console.log(errors)
  error.textContent = errors.message
}

promise.then(handleList).catch(handleError)
