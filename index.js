let countEl = document.getElementById("countNos");
let saveEl = document.getElementById("SaveData");

let count = 0;

function inc() {
  count += 1;
  countEl.innerText = count;
}

function dec() {
  if (count > 0) {
  count -= 1;
  countEl.innerText = count;
}
}

function save() {
    let countStr = count + " - "
    // 2. Create a variable t+hat contains both the count and the dash separator, i.e. "12 - "
    // 3. Render the variable in the saveEl using innerText
    saveEl.innerText += countStr;
    count = 0;
    countEl.innerText = 0;

}
