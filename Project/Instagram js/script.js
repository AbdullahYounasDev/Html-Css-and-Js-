// All js code for log-in sign-up page
let mobImggO = document.getElementById("mob_img1");
let mobImggT = document.getElementById("mob_img2");
let mobImggTh = document.getElementById("mob_img3");
let mobImggF = document.getElementById("mob_img4");
let signIn = document.getElementById("signIn");
let logSignCont = document.getElementById("log_sign_cont");
let LoginFormControlInput1 = document.getElementById("LoginFormControlInput1");
let signFormControlInput1 = document.getElementById("signFormControlInput1");
let signFormControlInput2 = document.getElementById("signFormControlInput2");
let signFormControlInput3 = document.getElementById("signFormControlInput3");
let LogininputPassword = document.getElementById("LogininputPassword");
let signPassword = document.getElementById("signPassword");
let logBtn = document.getElementById("logBtn");
let upImg = document.getElementById("up_img");
let upPimg = document.getElementById("up_p_img");
let chFile = document.getElementById("ch_file");
let currentIndex = 0;

const images = [mobImggO, mobImggT, mobImggTh, mobImggF];
function showImage(index) {
  images.forEach((img, i) => {
    if (i === index) {
      img.style.display = "block";
    } else {
      img.style.display = "none";
    }
  });
}
function cycleImages() {
  showImage(currentIndex);
  currentIndex = (currentIndex + 1) % images.length;
}
cycleImages(); // Initial call to display the first image
setInterval(cycleImages, 3000);

let replaceLogIn = () => {
  signIn.style.display = "block";
  logSignCont.style.display = "none";
};
let replaceSign = () => {
  signIn.style.display = "none";
  logSignCont.style.display = "flex";
};

let logInNow = () => {
  if (LoginFormControlInput1.value == "" || LogininputPassword.value == "") {
    alert("Fill all Fields");
  } else if (
    LoginFormControlInput1.value == signFormControlInput1.value ||
    LoginFormControlInput1.value == signFormControlInput2.value ||
    (LoginFormControlInput1.value == signFormControlInput3.value &&
      LogininputPassword.value == signPassword.value)
  ) {
    alert("Welcome");
    signIn.style.display = "none";
    logSignCont.style.display = "none";
    mainSec.style.display = "flex";
    profUseName.textContent = signFormControlInput3.value;
    profEImg.src = URL.createObjectURL(chFile.files[0]);
  } else {
    alert("You need to Sign Up");
  }
};
let moveNext = () => {
  if (
    signFormControlInput1.value == "" ||
    signFormControlInput2.value == "" ||
    signFormControlInput3.value == "" ||
    signPassword.value == ""
  ) {
    alert("Fill all Fields");
  } else {
    signIn.style.display = "none";
    upPimg.style.display = "flex";
  }
};
let signInNow = () => {
  alert("Your Account is Created. You can Login Now");
  upPimg.style.display = "none";
  logSignCont.style.display = "flex";
};

let logOut = () => {
  mainSec.style.display = "none";
  logSignCont.style.display = "flex";
};

chFile.addEventListener("change", () => {
  upImg.style.display = "block";
  upImg.src = URL.createObjectURL(chFile.files[0]);
  edImg.src = URL.createObjectURL(chFile.files[0]);
});

// ------------end (login-signup)----------->

// main-section code---
let mainSec = document.getElementById("main_sec");
// ------end(main-sec)----

// home
let home = document.getElementById("home");
homeDis = () => {
  create.style.display = "none";
  profile.style.display = "none";
  home.style.display = "flex";
  searchCont.style.display = "none";
};

// ----end (home)----

// create
let create = document.getElementById("create");
let crFile = document.getElementById("cr_file");
let crImg = document.getElementById("cr_img");
let postId = document.getElementById("post_id");
let descriptionId = document.getElementById("description_id");
let createMe = () => {
  create.style.display = "flex";
  searchCont.style.display = "none";
};

crFile.addEventListener("change", () => {
  crImg.style.display = "block";
  crImg.src = URL.createObjectURL(crFile.files[0]);
});

signPassword.onchange = () => {
  follow.style.display = "block";
};
let follow = document.createElement("h4");
follow.innerText = "Follow";
follow.id = "followMe";
follow.addEventListener("click", () => {
  p = p + 1;
  follow.style.display = "none";
  followers.innerText = p;
});
let s = 0;
let p = 0;
function createNone() {
  let hH3 = document.createElement("h2");
  let hImg = document.createElement("img");
  let hImage = document.createElement("div");
  let hP = document.createElement("p");
  let profImg = document.createElement("img");
  let profHeading = document.createElement("h4");
  let profBox = document.createElement("div");
  let profBox1 = document.createElement("div");
  let myImages = document.createElement("img");

  hH3.id = "h_h3";
  hImg.id = "h_img";
  hImage.id = "h_image";
  hP.id = "h_p";
  profImg.id = "prof_img";
  profHeading.id = "prof_heading";
  profBox.id = "prof_box";
  profBox1.id = "prof_box1";
  myImages.id = "my_images";

  hImg.style.display = "block";
  hImage.style.display = "flex";
  hImg.src = URL.createObjectURL(crFile.files[0]);
  create.style.display = "none";
  hH3.innerText = postId.value;
  hP.innerText = descriptionId.value;
  profHeading.innerText = signFormControlInput3.value;
  profImg.src = URL.createObjectURL(chFile.files[0]);
  myImages.src = URL.createObjectURL(crFile.files[0]);

  profBox1.appendChild(profImg);
  profBox1.appendChild(profHeading);
  profBox1.appendChild(follow);
  profBox.appendChild(profBox1);
  hImage.appendChild(profBox);
  hImage.appendChild(hImg);
  hImage.appendChild(hH3);
  hImage.appendChild(hP);
  yourImages.appendChild(myImages);

  home.appendChild(hImage);

  searchFunc();

  myImages.ondblclick = (e) => {
    if (s > 0) {
      myImages.style.display = "none";
      s = s - 1;
      posts.innerText = s; // Update the value displayed on the page

      function hideChild(event) {
        const clickedElement = event.target;
        clickedElement.style.display = "none";

        // Find the corresponding element in the second div and hide it
        const index = Array.from(yourImages.children).indexOf(clickedElement);
        const correspondingElement = home.children[index];
        const searchres = searchResult.children[index];
        correspondingElement.style.display = "none";
        searchres.style.display = "none";
      }

      // Attach a click event listener to the first div
      yourImages.addEventListener("dblclick", function (event) {
        // Check if the clicked element is a child of the first div
        if (event.target !== yourImages) {
          hideChild(event);
        }
      });
    }
  };

  if (
    (descriptionId.value == "" && postId.value == "") ||
    descriptionId.value !== "" ||
    postId.value !== ""
  ) {
    s = s + 1;
    posts.innerText = s;
  }
}
// -------end (create)------

// -------Profile-----
let profile = document.getElementById("profile");
let profEImg = document.getElementById("prof_img");
let profUseName = document.getElementById("prof_useName");
let followers = document.getElementById("followers");
let posts = document.getElementById("posts");
let yourImages = document.getElementById("your_images");
let editProf = document.getElementById("edit_prof");
let updateUser = document.getElementById("updateUser");
let updatePhone = document.getElementById("updatePhone");
let updateEmail = document.getElementById("updateEmail");
let updatePas = document.getElementById("updatePas");
let eiFile = document.getElementById("ei_file");
let edImg = document.getElementById("ed_img");
let profDis = () => {
  home.style.display = "none";
  create.style.display = "none";
  profile.style.display = "flex";
};
let editMyProf = () => {
  editProf.style.display = "flex";
};
eiFile.onchange = () => {
  edImg.src = URL.createObjectURL(eiFile.files[0]);
};
let UpdateProfile = () => {
  editProf.style.display = "none";
  if (updateUser.value !== "") {
    signFormControlInput3.value = updateUser.value;
    profUseName.innerText = updateUser.value;
  } else if (updatePhone.value !== "") {
    signFormControlInput2.value = updatePhone.value;
  } else if (updateEmail.value !== "") {
    signFormControlInput1.value = updateEmail.value;
  }
  upImg.src = URL.createObjectURL(eiFile.files[0]);
  profEImg.src = URL.createObjectURL(eiFile.files[0]);
};
// some portion of profile is written in login-section

// search Bar
let searchCont = document.getElementById("search_container");
let searchResult = document.getElementById("search_result");
let searchBar = document.getElementById("searchBar");
let searchMe = () => {
  searchCont.style.display = "flex";
  create.style.display = "none";
  editProf.style.display = "none";
};

// this part is come from createNone function
function searchFunc() {
  const srcImageUrl = URL.createObjectURL(crFile.files[0]);
  const srcHeading = postId.value;

  if (srcImageUrl && srcHeading) {
    appendChildElement(srcImageUrl, srcHeading);
  }
}
function appendChildElement(srcImageUrl, srcHeading) {
  let searchResCont = document.createElement("div");
  searchResCont.classList.add("child");

  let searchImg = document.createElement("img");
  searchImg.src = srcImageUrl;

  let searchTitle = document.createElement("h3");
  searchTitle.innerText = srcHeading;

  searchResCont.appendChild(searchImg);
  searchResCont.appendChild(searchTitle);
  searchResult.appendChild(searchResCont);

  searchImg.id = "search_img";
  searchTitle.id = "search_title";
}
searchBar.addEventListener("input", () => {
  const searchTerm = searchBar.value.toLowerCase();

  // Filter child elements based on the search term
  const childElements = searchResult.getElementsByClassName("child");

  for (const childElement of childElements) {
    const imgHeading = childElement.querySelector("h3");

    if (imgHeading) {
      const headingText = imgHeading.textContent.toLowerCase();

      if (headingText.includes(searchTerm)) {
        childElement.style.display = "block";
      } else {
        childElement.style.display = "none";
      }
    }
  }
});
// end of this part
