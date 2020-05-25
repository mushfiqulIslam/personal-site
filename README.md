<!DOCTYPE html>
{% load static %}
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- fonts -->
    <link href="https://fonts.googleapis.com/css?family=Libre+Baskerville|Libre+Caslon+Text|Roboto+Mono|Vesper+Libre&display=swap" rel="stylesheet">
    <!-- Bootstrap  -->
	  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">

    <link rel="stylesheet" href="{% static 'css/style.css'%}">

    <title>Mushfiqul Islam Chowdhury</title>
  </head>
  <body>
    <!-- navigation -->
    <nav class="navbar navbar-default navbar-fixed-top topbar" role="navigation">
      <li class="topbar-top navbar-name">
        <a  href="{% url 'home' %}">Mushfiqul Islam Chowdhury</a>
      </li>
      <ul class="topbar-top navbar-nav ml-auto nav-li">
        <li>
          <a  href="{% url 'project_list' %}">Portfolio</a>
        </li>
        <li>
          <a  href="{% url 'contact' %}">Contact</a>
        </li>
      </ul>
    </nav>
    <!-- /navigation -->

    {% block content %}
    {% endblock %}

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
  </body>
</html>
