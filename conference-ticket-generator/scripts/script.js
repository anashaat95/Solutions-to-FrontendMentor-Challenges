const USER_AVATAR_KEY = "user-avatar";

// Element Selectors
const fileUploadBoxEl = document.querySelector(".form--upload-file");
const formGroupBoxNotesEl = document.querySelector(".form-group--notes");
const avatarInputEl = document.getElementById("user-avatar");
const bookingFormEl = document.querySelector(".booking-form");
const submitBtnEl = document.querySelector(".btn-submit");
const fullNameInputEl = document.getElementById("fullname");
const emailInputEl = document.getElementById("email");
const githubUsernameInputEl = document.getElementById("github-username");

// Functions
const resetFileUpload = () => {
  formGroupBoxNotesEl.style.opacity = "1";
  formGroupBoxNotesEl.style.height = "100%";
  formGroupBoxNotesEl.classList.remove("error");
  formGroupBoxNotesEl.querySelector("p").innerText = "Upload your photo (JPG or PNG, max size: 500KB).";

  fileUploadBoxEl.classList.remove("dragover");
  fileUploadBoxEl.classList.remove("error");
};

const renderFileNotSupportedError = () => {
  fileUploadBoxEl.classList.add("error");
  formGroupBoxNotesEl.classList.add("error");
  formGroupBoxNotesEl.querySelector("p").innerText = "File is not supported file type";
};

const renderTooLargeError = () => {
  formGroupBoxNotesEl.classList.add("error");
  if (localStorage.getItem(USER_AVATAR_KEY)) {
    avatarInputEl.value = localStorage.getItem(USER_AVATAR_KEY);
    formGroupBoxNotesEl.querySelector("p").innerText = "File is too large. So, the old avatar is not changed yet.";
  } else {
    fileUploadBoxEl.classList.add("error");
    formGroupBoxNotesEl.querySelector("p").innerText = "File is too large. Please upload a photo under 500KB";
  }
};

const handleUploadFile = (file) => {
  resetFileUpload();

  if (!file) return;

  if (!file.type.startsWith("image/")) {
    renderFileNotSupportedError();
    return;
  }

  if (file.size / 1024 > 500) {
    renderTooLargeError();
    return;
  }

  formGroupBoxNotesEl.style.opacity = "0";
  formGroupBoxNotesEl.style.height = "0";

  const objectUrl = URL.createObjectURL(file);

  const fileUploadBoxNewHtml = `
            <img class="avatar" src=${objectUrl} alt="Photo of User" />
            <div class="btns-control-avatar">
              <button class="btn btn--remove">Remove</button>
              <button class="btn btn--change">Change</button>
            </div>`;

  fileUploadBoxEl.innerHTML = fileUploadBoxNewHtml;

  localStorage.removeItem(USER_AVATAR_KEY);
  localStorage.setItem(USER_AVATAR_KEY, objectUrl);
};

const handleRemoveFile = () => {
  resetFileUpload();

  fileUploadBoxEl.innerHTML = `
    <input id="user-avatar" type="file" />
        <img class="icon icon--upload" src="./assets/images/icon-upload.svg" alt="Upload icon" />
    <p>Drag and drop or click to upload</p>
  `;

  avatarInputEl.value = "";
  localStorage.removeItem(USER_AVATAR_KEY);
};

function isValidEmail(email) {
  // Simple email regex
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const checkFullNameInput = () => {
  const notesEl = fullNameInputEl.closest(".form-group").querySelector(".form-group--notes");
  if (fullNameInputEl.value.length < 4) {
    notesEl.classList.add("error");
    notesEl.style.display = "flex";
  } else {
    notesEl.classList.remove("error");
    notesEl.style.display = "none";
  }
};

const checkEmailInput = () => {
  const notesEl = emailInputEl.closest(".form-group").querySelector(".form-group--notes");
  const emailValue = emailInputEl.value;
  if (emailValue.length === 0) {
    notesEl.classList.add("error");
    notesEl.style.display = "flex";
    notesEl.querySelector("p").innerText = "Email is empty";
  } else if (!isValidEmail(emailValue)) {
    notesEl.classList.add("error");
    notesEl.style.display = "flex";
    notesEl.querySelector("p").innerText = "Invalid email format";
  } else {
    notesEl.classList.remove("error");
    notesEl.style.display = "none";
  }
};

const checkGithubUsernameInput = () => {
  const notesEl = githubUsernameInputEl.closest(".form-group").querySelector(".form-group--notes");
  const value = githubUsernameInputEl.value;
  if (!value.startsWith("@")) {
    notesEl.classList.add("error");
    notesEl.style.display = "flex";
    notesEl.querySelector("p").innerText = "Username should start with @symbol";
  } else if (value.length < 5) {
    notesEl.classList.add("error");
    notesEl.style.display = "flex";
    notesEl.querySelector("p").innerText = "Username length should be at least 5 characters";
  } else {
    notesEl.classList.remove("error");
    notesEl.style.display = "none";
  }
};

const checkFileUploaded = () => {
  if (avatarInputEl.files.length === 0) {
    fileUploadBoxEl.classList.add("error");
    formGroupBoxNotesEl.classList.add("error");
    formGroupBoxNotesEl.querySelector("p").innerText = "Please upload an image";
  } else {
    fileUploadBoxEl.classList.remove("error");
    formGroupBoxNotesEl.classList.remove("error");
    formGroupBoxNotesEl.display = "none";
  }
};

// Event Listeners
fileUploadBoxEl.addEventListener("click", (e) => {
  if (avatarInputEl.value === "" || avatarInputEl.files[0].size / 1024 > 500) avatarInputEl.click();
  else e.preventDefault();

  if (e.target.classList.contains("btn--remove")) {
    handleRemoveFile();
  } else if (e.target.classList.contains("btn--change")) {
    avatarInputEl.click();
  }
});

avatarInputEl.addEventListener("change", () => handleUploadFile(avatarInputEl.files[0]));

fileUploadBoxEl.addEventListener("dragover", (e) => {
  e.preventDefault();
  fileUploadBoxEl.classList.add("dragover");
});

fileUploadBoxEl.addEventListener("dragleave", (e) => {
  e.preventDefault();
  fileUploadBoxEl.classList.remove("dragover");
});

fileUploadBoxEl.addEventListener("drop", (e) => {
  e.preventDefault();
  handleUploadFile(e.dataTransfer.files[0]);
});

fullNameInputEl.addEventListener("input", checkFullNameInput);

emailInputEl.addEventListener("input", checkEmailInput);

githubUsernameInputEl.addEventListener("input", checkGithubUsernameInput);

bookingFormEl.addEventListener("submit", function (e) {
  e.preventDefault();

  checkFileUploaded();
  checkFullNameInput();
  checkEmailInput();
  checkGithubUsernameInput();

  const formData = new FormData(this);
  const query = new URLSearchParams(formData).toString();

  window.location.href = `/conference-card.html?${query}`;
});
