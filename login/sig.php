<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- CSS only -->
    <link rel="stylesheet" href="./css/style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <title>login</title>
</head>
<body>
    <div class="container mt-4">
        <?php
          if($_COOKIE['user'] == ''):
        ?>
        <div class="row">
            <div class="col">
    <h1>sign up</h1>
    <form action="php/check.php" method="post">
        <input type="text" class="form-control" name="login" id="login" placeholder="введите логин" ><br>
        <input type="text" class="form-control" name="name" id="name" placeholder="введите имя" ><br>
        <input type="password" class="form-control" name="pass" id="pass" placeholder="введите пароль" ><br>
        <button class="btn btn-success" type="submit">Зарегистрировать</button>
    </form>
    </div>
    <div class="col">
        <h1>login in</h1>
    <form action="php/auth.php" method="post">
        <input type="text" class="form-control" name="login" id="login" placeholder="введите логин" ><br>
        <input type="password" class="form-control" name="pass" id="pass" placeholder="введите пароль" ><br>
        <button class="btn btn-success" type="submit">Авторизоваться</button>
    </form>
    </div>

    <?php else: ?>
        <p>Привет <?=$_COOKIE['user']?>. чтобы выйти нажмите <a href="./php/exit.php">здесь</a></p>
    <?php endif; ?>
</div>
</div>
</body>
</html>