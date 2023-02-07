//celebritity dating site function1
$(document).ready(function () {
  $("#form-one").submit(function (event) {
    event.preventDefault();
    const age = parseInt($("input#age").val());
    const gender = $("select#gender").val();
    const name = $("input#name").val();

    if (gender === 'female' && age <= 45) {
      $(".name").text(name);
      $(".female").show();
      $(".id").hide();
      $("#form-one").hide();
    }
    else if (gender === 'male' && age <= 45) {
      $(".name").text(name);
      $(".female").show();
      $(".sorry").hide();
      $(".id").hide();
      $("#form-one").hide();
    }
    else {
      alert("you are to old");
    }

    
  });
});


