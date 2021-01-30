function StartXChange() {
  let value = (<HTMLInputElement>document.getElementById("startX")).value;
  try {
    parseInt(value);
  } catch {
    $("startX").addClass("is-invalid");
    return;
  }
}
function StartYChange() {
  let value = (<HTMLInputElement>document.getElementById("startY")).value;
    try {
        parseInt(value);
    } catch {
        $("startX").addClass("is-invalid");
        return;
    }
}
function EndXChange() {
  let value = (<HTMLInputElement>document.getElementById("endX")).value;
    try {
        parseInt(value);
    } catch {
        $("startX").addClass("is-invalid");
        return;
    }
}
function EndYChange() {
  let value = (<HTMLInputElement>document.getElementById("endY")).value;
    try {
        parseInt(value);
    } catch {
        $("startX").addClass("is-invalid");
        return;
    }
}
