window.addEventListener("load", () => {
  const submitBtn = document.getElementById("submitFacebookProfile");

  submitBtn.addEventListener("click", async () => {
    event.preventDefault();

    //rewrite in fetch
    fetch(`${window.location.origin}/set-up-user-fb-profile`, {
      method: "POST",
      body: JSON.stringify({}),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Setup failed 😥");
        }
      })
      .then(data => {
        alert("Setup success 😀");
        console.log(data);
      })
      .catch(error => {
        alert("Setup failed 😥");
        console.log(error);
      });

    // $.ajax({
    //     url: `${window.location.origin}/set-up-user-fb-profile`,
    //     method: "POST",
    //     data: {},
    //     success: function(data){
    //         alert("Setup success");
    //         console.log(data);
    //     },
    //     error: function(error){
    //         console.log(error);
    //     }
    // })
  });
});
