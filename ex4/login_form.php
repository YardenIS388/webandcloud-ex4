<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    

<section>
    Welcome 
    <?php 
          $staticPassword ="awesome";
          echo $_GET["fullName"];
          
          if($_GET["password"] == $staticPassword){
              echo "<h1> Awesom! You Entered The Correct Password</h1>";
          }else { 
              echo "<h1> Try Again, The Password you entered is incorrect.</h1>";
          }

          if($_GET["awesome"]){
              echo "<h1>So You Think You Awesome, So Do we !</h1>";
          }else {
              echo "<h1>You May Not Think You Are Awesome But Trust Me, You Are! </h1>";
          }

          
    ?>
</section>


</body>
</html>