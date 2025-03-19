let apiData = null;
const generateButton = document.querySelector("#generateButton");
const errorMessage = document.querySelector(".errorMessage");
const qoute = document.querySelector(".qoute");
const quoteBy = document.querySelector(".quoteBy");
const copyQoute = document.querySelector(".copyQoute");
const shareOnTwitter = document.querySelector(".shareOnTwitter");
const toastPopUp = document.querySelector(".toastPopUp");

const setDataToDom = ({ data }) => {
  qoute.innerText = data.content;
  quoteBy.innerText = data.author;
};

const fetchData = async function () {
  try {
    const apiRes = await fetch(
      "https://api.freeapi.app/api/v1/public/quotes/quote/random"
    );
    const result = await apiRes.json();
    if (result.success) {
      setDataToDom({ data: result?.data });
    }
    return data;
  } catch (error) {
    throw new Error("Unable to fetch qoutes", error);
  }
};
copyQoute.addEventListener("click", () => {
  navigator.clipboard.writeText(qoute.innerText).then(() => {
    toastPopUp.style.display = "flex";
    setTimeout(() => {
      toastPopUp.style.display = "none"; 
    }, 3000);
  });
});
shareOnTwitter.addEventListener("click", () => {
  window.open(
    `https://twitter.com/intent/tweet?text=${qoute.innerText}`,
    "_blank"
  );
});

window.addEventListener("DOMContentLoaded", fetchData);
generateButton.addEventListener("click", fetchData);
