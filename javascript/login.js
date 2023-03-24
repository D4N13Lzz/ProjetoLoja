/* ========== User Form =========== */
const formWrapper = document.querySelector(".form-wrapper");
const inputs = document.querySelectorAll(".form-box input[type = 'password']");
const icons = [...document.querySelectorAll(".form-icon")];
const spans = [...document.querySelectorAll(".form-box .top span")];
const userForm = document.querySelector(".user-form");
const registerBtn = document.querySelector(".register-btn");
const fundoLogin = document.getElementById('fundo-login');

document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    userForm.classList.remove("show");
    body.classList.remove('body-sem-scroll');
    document.querySelector(".form-wrapper.active").classList.remove("active");
  }
});

registerBtn.addEventListener("click", () => {
  userForm.classList.add("show");
  body.classList.add('body-sem-scroll');
  formWrapper.classList.add("active");
});

document.querySelectorAll(".user-icon").forEach((p) => {
  p.onclick = () => {
    userForm.classList.add("show");
    body.classList.add('body-sem-scroll');
    navList.classList.remove("show");
    document.querySelector(".form-wrapper.active").classList.remove("active");

  };
});

fundoLogin.addEventListener('click', function() {
  userForm.classList.remove("show");
  body.classList.remove('body-sem-scroll');
  document.querySelector(".form-wrapper.active").classList.remove("active");

});

document.querySelector(".close-form").onclick = () => {
  userForm.classList.remove("show");
  body.classList.remove('body-sem-scroll');
  document.querySelector(".form-wrapper.active").classList.remove("active");

};

spans.map((span) => {
  span.addEventListener("click", (e) => {
    const color = e.target.dataset.id;
    formWrapper.classList.toggle("active");
    userForm.classList.toggle("active");
  });
});

Array.from(inputs).map((input) => {
  icons.map((icon) => {
    icon.innerHTML = `<img src="./images/eye.svg" alt="" />`;

    icon.addEventListener("click", () => {
      const type = input.getAttribute("type");
      if (type === "password") {
        input.setAttribute("type", "text");
        icon.innerHTML = `<img src="./images/hide.svg" alt="" />`;
      } else if (type === "text") {
        input.setAttribute("type", "password");
        icon.innerHTML = `<img src="./images/eye.svg" alt="" />`;
      }
    });
  });
});



