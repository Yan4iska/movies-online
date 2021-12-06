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
    <style>
        h1, h2, h3, h4, h5{
            color:aliceblue;
        }

        body{
            background-color: rgb(51, 37, 37);
        }
        p{
            color:aliceblue;
        }

        img{
            max-width: 100%;
        }
        .item{
            margin: 15px 0;
            text-align: center;
            
        }
        .spinner{
            margin: 0 auto;
            width: 100px;
            height: 100px;
            border: 10px solid ;/*dashed - вместо solid это полосочки*/
            border-radius: 50%;
            border-left-color: transparent;
            border-top-color: #aaa;
            border-right-color: #555;
            border-bottom-color: #000;
            animation: spin 500ms infinite linear;
        }
        @keyframes spin {
            100%{
                transform: rotate(360deg);
            }
        }
        
        .img_poster {
            height: 360px;
        }

        .top {
            margin-bottom: 50px;
        }
        .movie{
            width: 400px;
            height: 400px;
        }
    </style>

    <header></header>

    <nav class="navbar">
        <div class="container">
            <a href="index.php" class="navbar-brand">Document</a>
        </div>
    </nav>
    
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

    <footer></footer>

    <script src="./script.js"></script>
</body>
</html>
