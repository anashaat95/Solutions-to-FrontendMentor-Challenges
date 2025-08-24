const USER_AVATAR_KEY = "user-avatar";

// Element Selectors
const fullnameInHeaderEl = document.querySelector(".fullname");
const emailInHeaderEl = document.querySelector(".email");
const ticketEl = document.querySelector(".ticket");

const params = new URLSearchParams(window.location.search);
const fullname = params.get("fullname");
const email = params.get("email");
const githubUsername = params.get("github-username");
const randomNumber = Math.floor(100000 + Math.random() * 900000);

fullnameInHeaderEl.textContent = fullname;
emailInHeaderEl.textContent = email;

ticketEl.innerHTML = `
    <img class="ticket--template" src="./assets/images/pattern-ticket.svg" alt="Ticket" />
    <div class="ticket--header">
      <img class="logo" src="./assets/images/logo-full.svg" alt="Coding Conf Logo" />
      <p class="date-location">Jan 31, 2025 / Austin, TX</p>
    </div>
    <div class="ticket--details">
      <img class="ticket--avatar" src="./assets/images/image-avatar.jpg" alt="${fullname}" />
      <div class="ticket--user-data">
        <p class="ticket--fullname">${fullname}</p>
        <div class="ticket--github">
          <img src="./assets/images/icon-github.svg" alt="Github icon" class="icon" />
          <p class="ticket--github-username">${githubUsername}</p>
        </div>
      </div>
    </div>
    <p class="ticket--id">#${randomNumber}</p>
`;
