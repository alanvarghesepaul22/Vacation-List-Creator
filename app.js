(function () {
  const detailsForm = document.querySelector("#dest_det_form");

  detailsForm.addEventListener("submit", handleFormSubmit);

  function handleFormSubmit(e) {
    e.preventDefault();

    let destName = e.target.elements["name"].value;
    let destLocation = e.target.elements["location"].value;
    let destPhoto = e.target.elements["photo"].value;
    let destDesc = e.target.elements["desc"].value;

    for (let i = 0; i < detailsForm.length; i++) {
      detailsForm.elements[i].value = " ";
    }

    let destCard = createDestinationCard(
      destName,
      destLocation,
      destPhoto,
      destDesc
    );

    let wishListContainer = document.getElementById("dest_det");

    if (wishListContainer.children.length === 0) {
      document.getElementById("title").innerHTML = "My Wish List";
    }
    document.querySelector("#dest_det").appendChild(destCard);
  }

  function createDestinationCard(name, location, photoUrl, description) {
    const card = document.createElement("div");
    card.className = "card";

    let image = document.createElement("img");
    image.setAttribute("alt", name);

    let constantPhoto = "./assets/dest_img.jpg";

    if (photoUrl.length === 0) {
      image.src = constantPhoto;
    } else {
      image.src = photoUrl;
    }
    card.appendChild(image);

    const cardBody = document.createElement("div");
    cardBody.className = "card-body";

    const cardTitle = document.createElement("h3");
    cardTitle.innerText = name;
    cardBody.appendChild(cardTitle);

    const cardSubtitle = document.createElement("h4");
    cardSubtitle.innerText = location;
    cardBody.appendChild(cardSubtitle);

    if (description.length != 0) {
      let cardText = document.createElement("p");
      cardText.className = "card-text";
      cardText.innerText = description;
      cardBody.appendChild(cardText);
    }
    const cardDeleteButton = document.createElement("button");
    cardDeleteButton.innerText = "Remove";
    cardDeleteButton.addEventListener("click", removeDestination);
    cardBody.appendChild(cardDeleteButton);

    card.appendChild(cardBody);
    return card;
  }

  function removeDestination(e) {
    let card = e.target.parentElement.parentElement;
    card.remove();
    document.getElementById("title").innerHTML = "Enter Destination Details";
  }
})();
