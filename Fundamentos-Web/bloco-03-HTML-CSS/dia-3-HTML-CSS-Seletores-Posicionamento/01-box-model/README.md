# DIA 3 HTML & CSS


### CSS - Box Model

index.html
```javascript
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Exercício de Fixação: box model</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="caixa width-and-height" style="background: #036b52">A</div>
  <div class="caixa width-and-height padding" style="background: #41197f;">B</div>
  <div class="caixa width-and-height padding margin" style="background: #444955">C</div>
  <div class="caixa width-and-height padding margin border" style="background: #3898EC">D</div>
</body>
</html>
```

style.css
```javascript
.caixa {
  color: white;
  display: inline-block;
  line-height: 50px;
  text-align: center;
  vertical-align: top;
}

.width-and-height {
  height: 50px;
  width: 50px;
}

.padding {

}

.margin {

}

.border {
  
}
```

1 - Insira na classe .padding um padding de 20px para aplicá-lo aos itens B, C e D.

2 - Insira na classe .margin uma margem de 30px para aplicá-la aos itens C e D.

3 - Insira na classe .border uma borda com valor '5px solid black' para aplicá-la ao item D.
