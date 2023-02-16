const newFormHandler = async (event) => {
    event.preventDefault();
    const profile = document.querySelector("#profile-login").value.trim();
    const Name = document.querySelector("#name-login").value.trim();
    const email = document.querySelector("#email-login").value.trim();
  
  
    console.log(profile && Name && email);
    if (dashboard) {
      const response = await fetch(`/api/post`, {
        method: "POST",
        body: JSON.stringify({ profile }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response);
      if (response.ok) {
        document.location.replace("/profile");
      } else {
        alert("Failed to create post");
      }
    }
  };
  
  document.querySelector(".new-post-form");
  document.addEventListener("submit", newFormHandler);