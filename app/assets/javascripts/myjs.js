$("document").ready(function () {
  if ($("#bookList").length) {
    var mybookList = document
      .getElementById("bookList")
      .getElementsByTagName("a");
    var show = document.getElementById("#pk");
    for (i = 0; i < mybookList.length; i++) {
      mybookList[i].addEventListener("click", activeItem);
    }
  }
  function activeItem() {
    alert(this.current_url);
    var company = this.childNodes[5].innerHTML;
    var position = this.childNodes[7].childNodes[0].innerHTML;
    document.getElementById("exampleModalLabel").innerHTML = company;
    document.getElementById("myModalBody").innerHTML = position;
  }
});
