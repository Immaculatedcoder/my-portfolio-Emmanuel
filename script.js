function addRecommendation() {
    let recommendation = document.getElementById("new_recommendation");

    if (recommendation.value != null && recommendation.value.trim() != "") {
        console.log("New recommendation added");
        showPopup(true);
        var element = document.createElement("div");
        element.setAttribute("class","recommendation");
        element.innerHTML = `\<span\>&#8220;\</span\> ${recommendation.value} \<span\>&#8221;\</span\>`;

        // Put this html in the appropate html
        document.getElementById("all_recommendations").appendChild(element);

        // Reset the text area
        recommendation.value = "";
    }
}

function showPopup(bool) {
    if (bool) {
        document.getElementById('popup').style.visibility = 'visible'
    } else {
        document.getElementById('popup').style.visibility = 'hidden'
    }

}