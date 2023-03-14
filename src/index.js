import "./style/main.css";
import { getTags } from "./helper/api-helper";

getTags().then((tags) => {
  const selectTag = document.getElementById("select-tag");
  if (tags.length > 0) {
    selectTag.classList.remove("hidden");
    let option = "";
    tags.forEach((item) => {
      option += `<option value="${item}">${item}</option>`;
    });
    selectTag.innerHTML += option;

    if (!selectTag.tomselect) {
      new TomSelect(selectTag, {
        maxItems: 5,
      });
    }
  } else {
    selectTag.classList.add("hidden");
  }
});
