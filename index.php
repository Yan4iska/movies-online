<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="styles.css">
    <title>test</title>
</head>
<body>


<header>
<div class="logo">
<nav class="navbar">
        <div class="container">
            <a href="index.php" class="navbar-brand"><h1>MovieLab</h1></a>
        </div>
    </nav>
</div>

<div class="top-menu">
<ul>
<li><a class="clickMenu" href="#">Темы</a></li>
<li><a href="#">Об авторах</a></li>
<li><a href="#">Обратная связь</a></li>
</ul>
</div>

<div class="block-top-auth">
<?php
          if($_COOKIE['user'] == ''):
        ?>
<p><a href="login/sig.php">Вход/Регистрация</a></p>
<?php else: ?>
        <p>Пользователь <?=$_COOKIE['user']?>. <br> <a href="/login/php/exit.php">выйти</a></p>
    <?php endif; ?>
</div>

</header>
    
    <div class="container top">
            <h3 class="text-center">поиск фильмов</h3>
            <form id="searchForm">
                <input type="text" class="form-control" id="searchText"  placeholder="Введите название...">
            </form>

    </div>

    <div class="container">
        <div class="row" id="movies">

        </div>
    </div>

    <footer id="footer" class="footer-1">
<div class="main-footer widgets-dark typo-light">
<div class="container">
<div class="row">
   
<div class="col-xs-12 col-sm-6 col-md-3">
<div class="widget subscribe no-box">
<h5 class="widget-title">Тестовый проект<span></span></h5>
<p>Создан студентами fefu </p>
</div>
</div>

<div class="col-xs-12 col-sm-6 col-md-3">
<div class="widget no-box">
<h5 class="widget-title">Ссылки<span></span></h5>
<ul class="thumbnail-widget">
<li>
<div class="thumb-content"><a href="#.">MovieDB</a></div>  
</li>
<li>
<div class="thumb-content"><a href="#.">Кинопоиск</a></div>  
</li>


</ul>
</div>
</div>

<div class="col-xs-12 col-sm-6 col-md-3">
<div class="widget no-box">
<h5 class="widget-title">О проекте<span></span></h5>
<p>подробности по номеру <br> +7 (999)-777-44-99</p>
</div>
</div>

<div class="col-xs-12 col-sm-6 col-md-3">

<div class="widget no-box">
<h5 class="widget-title">Наши контакты<span></span></h5>

<p><a href="#" title="glorythemes">SomeoneLinks.com</a></p>
<ul class="social-footer2">
<li class=""><a title="youtube" target="_blank" href="/"><img alt="youtube" width="30" height="30" src=""></a></li>
<li class=""><a href="/" target="_blank" title="Facebook"><img alt="Facebook" width="30" height="30" src=""></a></li>
<li class=""><a href="/" target="_blank" title="Twitter"><img alt="Twitter" width="30" height="30" src=""></a></li>
<li class=""><a title="instagram" target="_blank" href="/"><img alt="instagram" width="30" height="30" src=""></a></li>
</ul>
</div>
</div>

</div>
</div>
</div>
   
<div class="footer-copyright">
<div class="container">
<div class="row">
<div class="col-md-12 text-center">
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui aliquid sapiente inventore pariatur possimus temporibus, libero neque provident aut eaque fuga necessitatibus quis, unde corporis ad nulla doloremque delectus! Maxime.</p>
</div>
</div>
</div>
</div>
</footer>

    <script src="./script.js"></script>
</body>
</html>