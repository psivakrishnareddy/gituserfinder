// init github
const github = new Github();

// init ui class
const ui = new UI();
// Search input

const searchUser = document.getElementById("searchUser");

// Search event listner
searchUser.addEventListener("keyup", function(e) {
  //get user input
  const userText = e.target.value;
  //Check if empty
  if (userText !== "") {
    // Make Http Call
    github.getUser(userText).then(data => {
      if (data.profile.message == "Not Found") {
        //Show Alert
        ui.showAlert("User Not Found", "alert alert-danger");
      } else {
        //Show profile
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
		
      }
    });
  } else {
    // Clear the profiles
    ui.clearProfile();
  }
});
