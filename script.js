const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch(
        "https://avzimaaf36onnnyqivzq7btwvq0hnlof.lambda-url.ap-south-1.on.aws/"
    );
    let data = await response.json();
    counter.innerHTML = `Views: ${data}`;
}
updateCounter();
//there are things that