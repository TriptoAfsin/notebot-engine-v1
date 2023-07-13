window.addEventListener("load", () => {
  const submitBtn = document.getElementById("submitFacebookProfile");

  submitBtn.addEventListener("click", async () => {
    event.preventDefault();

    //rewrite in fetch
    try {
      const response = await fetch(
        `${window.location.origin}/set-up-user-fb-profile`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: {},
        }
      );
      const result = await response.json();
      if (result) {
        alert("Setup success 😀");
        console.log("Success:", result);
      }
    } catch (error) {
      alert("Setup failed 🤔");
      console.log(error);
    }

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
