import { projects } from "./utils/projectData.js";

document.addEventListener("DOMContentLoaded", () => {
  const projectContainer = document.getElementById("projects");

  const projectGrid = document.createElement("div");
  projectGrid.classList.add("project-grid");

  projects.forEach((project) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const title = document.createElement("h2");
    title.classList.add("card-title");
    title.textContent = project.title;

    const img = document.createElement("img");
    img.classList.add("card-img");
    img.src = project.image;
    img.alt = project.title;

    const description = document.createElement("p");
    description.classList.add("card-description");
    description.textContent = project.description;

    const githubLink = document.createElement("a");
    githubLink.href = project.github;
    githubLink.target = "_blank";
    githubLink.rel = "noreferrer noopener";

    const githubIcon = document.createElement("i");
    githubIcon.classList.add(
      "fa-brands",
      "fa-github",
      "card-link",
      "github-icon"
    );
    githubLink.appendChild(githubIcon);

    const liveLink = document.createElement("a");
    liveLink.classList.add("card-link");
    liveLink.href = project.live;
    liveLink.textContent = "Live Site";
    liveLink.target = "_blank";
    liveLink.rel = "noreferrer noopener";

    const linksContainer = document.createElement("div");
    linksContainer.classList.add("links-container");
    linksContainer.appendChild(githubLink);
    // linksContainer.appendChild(document.createTextNode(" | "));
    linksContainer.appendChild(liveLink);

    const flexContainerCard = document.createElement("div");
    flexContainerCard.classList.add("flex-container-card");

    flexContainerCard.appendChild(title);
    flexContainerCard.appendChild(description);
    flexContainerCard.appendChild(linksContainer);

    card.appendChild(img);
    card.appendChild(flexContainerCard);

    projectGrid.appendChild(card);
  });

  projectContainer.appendChild(projectGrid);
});
