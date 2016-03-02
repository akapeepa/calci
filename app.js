var calci  = {
  handleInput : function(input){
    if(input == "AC"){
      this.preview = "";
      $(".result").empty();
      $(".preview").empty();
    }else if(input == "="){
      $(".result").empty();
      this.preview = this.preview.replace(/x/g,"*");
      var result = eval(this.preview);
      $(".result").append(result);
      this.preview = "";
    } else {
      $(".preview").append(input);
      this.preview = $(".preview").html();
    }
  },
  operators : [".","/","+","x","-"],
  preview : ""
};
// $(document).ready(function () {
//   $(document).bind('keyup', '0', function() { calci.handleInput("0"); });
//   $(document).bind('keyup', '1', function() { calci.handleInput("1"); });
//   $(document).bind('keyup', '2', function() { calci.handleInput("2"); });
//   $(document).bind('keyup', '3', function() { calci.handleInput("3"); });
//   $(document).bind('keyup', '4', function() { calci.handleInput("4"); });
//   $(document).bind('keyup', '5', function() { calci.handleInput("5"); });
//   $(document).bind('keyup', '6', function() { calci.handleInput("6"); });
//   $(document).bind('keyup', '7', function() { calci.handleInput("7"); });
//   $(document).bind('keyup', '8', function() { calci.handleInput("8"); });
//   $(document).bind('keyup', '9', function() { calci.handleInput("9"); });
//   $(document).bind('keyup', '.', function() { calci.handleInput("."); });
//   $(document).bind('keyup', '+', function() { calci.handleInput("+"); });
//   $(document).bind('keyup', '-', function() { calci.handleInput("-"); });
//   $(document).bind('keyup', 'shift+8', function() { calci.handleInput("X"); });
//   $(document).bind('keyup', '/', function() { calci.handleInput("/"); });
//   $(document).bind('keyup', 'return', function() { calci.handleInput("="); });

  $(document).ready(function (){
    $(".key").click(function() {
      var key = $(this).html();
      calci.handleInput(key);
    })
  })
