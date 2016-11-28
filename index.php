<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="referrer" content="origin">
	<title>CenterData research</title>
	<link rel="stylesheet" href="css/bootstrap.min.css">
	<link rel="stylesheet" href="css/custom.css">
	<script src="js/jquery.min.js"></script>
	<script src="js/jquery.transit.min.js"></script>
	<script src="js/bootstrap.min.js"></script>
</head>
<body>
	<div id="main" class="container">
		<div class="row" style="position: relative;">
			<div id="payment-reminder" class="text-center">
				<div id="payment-reminder-image" class="center-block"></div>
				<p id="payment-reminder-text" class="lead"></p>
			</div>
			<div class="col-sm-12 vertical-center">
				<div id="introduction-frame" class="center-block">
					<div id="general-intro">
						<div id="general-intro-nl" class="text-center">
							<h1>Welkom</h1>
							<p class="lead">
							Wij zijn in dit onderzoek geïnteresseerd in uw winkelgedrag.
							Dit onderzoek gaat over keuzes bij het inkopen van winkelwaren, 
							en wat Nederlanders prefereren aan producten in de supermarkt.
							<br/><br/>
							Beeldt u zichzelf in dat u op dit moment boodschappen aan 
							het doen bent. U ziet straks enkele producten, die u in de 
							schappen zou kunnen vinden. Overigens gaat dit onderzoek niet over deze
							precieze producten – het hadden ook andere kunnen zijn.
							<br/><br/>
							Uw taak is simpel. U geeft aan of u het product zou kopen,
							of zou laten liggen wanneer u echt boodschappen doet.
							U krijgt één voor één 20 voedselproducten achter elkaar te zien.
							Als u het product wilt kopen, dan drukt u op

							<strong>Neem mee</strong>.

							Als u het product niet wilt kopen, druk dan op

							<strong>Laat liggen</strong>.
							</p>

							<a class="continue-intro btn btn-lg btn-primary">Ga verder</a>
						</div>
						<div id="general-intro-en" class="text-center">
							<h1>Welcome</h1>
							<p class="lead">
							We are interested in your shopping habits. Specifically, 
							this study looks into choices when buying groceries, and 
							the general preferences of Dutch people when buying 
							products in supermarkets.
							<br/><br/>
							Imagine you are in a grocery store now! You will see 
							several food items that are available in the food isle.
							<br/><br/> 
							Your task is simple; you just have to indicate whether 
							you would buy this product if you were shopping now.
							You will see about 20 food items, one at a time. 
							If you want to buy the item, click on
							
							<strong>Add to cart</strong>.

							If you do not want to buy the item, click on 

							<strong>Continue shopping</strong>.
							</p>

							<a class="continue-intro btn btn-lg btn-primary">Continue</a>
						</div>
					</div>
					<div id="payment-intro">
						<div class="row">
							<div id="payment-image" class="center-block"></div>
						</div>
						<div class="row">
							<p id="payment-intro-text" class="lead text-center"></p>
							<div class="text-center">
								<a id="start-button" href="#" class="btn btn-primary btn-lg"></a>
							</div>
						</div>
					</div>
				</div>
				<div id="article-frame" class="center-block">
					<div id="article-display" class="row">
						<div class="col-xs-12">
							<div id="article"></div>
						</div>
					</div>
					<div id="price-row" class="row">
						<div class="col-xs-12 text-center">
							<p class="lead" id="article-name"></p>
							<h1 id="article-price">&euro; <span id="price">3,99</span></h1>
						</div>
					</div>
					<div id="buttons" class="row">
						<div class="col-sm-6 col-xs-12">
							<a id="buy" href="#" class="btn btn-primary btn-block btn-lg">
								<span class="glyphicon glyphicon-shopping-cart"></span> 
							</a>
						</div>
						<div class="col-sm-6 col-xs-12">
							<a id="skip" href="#" class="btn btn-default btn-block btn-lg">
								<span class="glyphicon glyphicon-hand-right"></span>
							</a>
						</div>
					</div>
				</div>
				<div id="finished-frame" class="center-block">
					<div class="col-xs-12 text-center">
						<h1 id="finished-text"></h1>
					</div>
				</div>
			</div>
		</div>
    </div>
</body>
<?php
// Check for data passed by CenterData. This is usually the case if an entry named
// 'sh' is present. Store the passed data in a variable to post back later.
if(count($_POST)){	
	if( isset($_POST["sh"]) ){ 
		echo "<script>var data_to_submit=" . json_encode($_POST) . ";</script>";
	}
}
?>
<script src="js/data.js"></script>
<script src="js/main.js"></script>
</html>