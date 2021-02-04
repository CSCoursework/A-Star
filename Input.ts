let inputs = document.querySelectorAll(".coordinate");
inputs.forEach(function (temp) {
  addEventListener("change", function () {
    const input = temp as HTMLInputElement;
    let value: number = parseInt(input.value);
    if (!isNaN(value) && value >= 1 && value <= 8) {
      $(temp).removeClass("is-invalid");

      let startX = document.getElementById("startX") as HTMLInputElement;
      let startY = document.getElementById("startY") as HTMLInputElement;

      let endX = document.getElementById("endX") as HTMLInputElement;
      let endY = document.getElementById("endY") as HTMLInputElement;

      if (
        !(
          $(startX).hasClass("is-invalid") ||
          $(startY).hasClass("is-invalid") ||
          $(endX).hasClass("is-invalid") ||
          $(endY).hasClass("is-invalid")
        )
      ) {
        start.x = parseInt(startX.value);
        start.y = parseInt(startY.value);
        end.x = parseInt(endX.value);
        end.y = parseInt(endY.value);
      }
    } else {
      $(temp).addClass("is-invalid");
      console.log(
        "input must be a number between 1 and 8, you wrote " + input.value
      );
      return;
    }
  });
});
