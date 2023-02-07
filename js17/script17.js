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
    //celebritity dating site function2
    $("#form-two").submit(function (event) {
      event.preventDefault()
      let job = $("input:radio[name=job]:checked").val();
      let food = $("input:radio[name=food]:checked").val();
      let hobbies = $("input:radio[name=hobbies]:checked").val();

      if (job === 'celeb1' && food === 'celeb4' && hobbies === 'celeb7' || job === 'celeb3' && food === 'celeb5' && hobbies === 'celeb9' || job === 'celeb2' && food === 'celeb6' && hobbies === 'celeb8') {
        $("div#one").show();
        $(".female").hide();
      } else if (job === 'celeb2' && food === 'celeb5' && hobbies === 'celeb8' || job === 'celeb1' && food === 'celeb6' && hobbies === 'celeb9' || job === 'celeb3' && food === 'celeb4' && hobbies === 'celeb7') {
        $("div#two").show();
        $(".female").hide();
      }
      else if (job === 'celeb3' && food === 'celeb6' && hobbies === 'celeb9' || job === 'celeb2' && food === 'celeb4' && hobbies === 'celeb8' || job === 'celeb1' && food === 'celeb5' && hobbies === 'celeb7') {
        $("div#three").show();
        $(".female").hide();
      }
      else {
        $("div#four").show();
        $(".female").hide();
      }

    });
  });
});


