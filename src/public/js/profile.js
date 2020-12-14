
window.addEventListener('load', ()=> {
    const submitBtn = document.getElementById("submitFacebookProfile");

    submitBtn.addEventListener("click", ()=> {
        event.preventDefault();
        
        $.ajax({
            url: `${window.location.origin}/set-up-user-fb-profile`,
            method: "POST",
            data: {},
            success: function(data){
                alert("Setup success");
                console.log(data);
            },
            error: function(error){
                console.log(error);
            }
        })
    })
})
