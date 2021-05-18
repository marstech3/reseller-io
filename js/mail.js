window.onload = function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      // generate a five digit number for the contact_number variable
      this.contact_number.value = (Math.random() * 100000) | 0;
      // these IDs from the previous steps
      emailjs.sendForm("email_service", "contact_form", this).then(
        function () {
          $("#contact_form_fields").hide();
          $("#success_message").show();
          $("#failure_message").hide();
          console.log("SUCCESS!");
        },
        function (error) {
            $("#contact_form_fields").hide();
          $("#success_message").hide();
          $("#failure_message").show();
          console.log("FAILED...", error);
        }
      );
    });
};
