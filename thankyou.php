<?php

// Get posted variables
	
$modalType = $_POST['ModalType'];
$clientName = $_POST['ClientName'];
$clientBusiness = $_POST['ClientBusiness'];
$clientPhone = $_POST['ClientPhone'];
$clientEmail = $_POST['ClientEmail'];
$clientMessage = $_POST['ClientMessage'];	

$message = 'Type: '.$modalType."\nName: ".$clientName."\nBusiness:".$clientBusiness."\nPhone: ".$clientPhone."\nEmail: ".$clientEmail."\nMessage:\n".$clientMessage;

$headers = 'From: '.$clientEmail."\r\n".'Reply-To: '.$clientEmail."\r\n".'X-Mailer: PHP/'. phpversion();

mail('daniel@danieltait.com.au', $modalType.' Submission', $message, $headers);

?>

<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->

	<title>Daniel Tait | Web Solutions</title>
    <link rel="icon" href="favicon.ico" type="image/x-icon">
	
    <!-- Bootstrap -->
    <link href="css/bootstrap.min.css" rel="stylesheet">

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
	
	<style>
	
		#logo {
			margin-top: -10px;
			margin-left: 30px;
		}
		
		.center {
			text-align: center;
		}
		
		.left {
			text-align: left;
		}
			
		#topContainer {
			background-image:url("images/background2.jpg");
			background-size: cover;
			width: 100%;
			margin-top: 50px;
			color: #F8F8FF;
		}
		
		.padding {
			padding: 20px;
		}
		
		.icon {
			font-size:350%; 		
		}
		
		.title {
			font-size: 500%;
		}
		
		.subTitle {
			font-size: 300%;
		}
		
		.backgroundBox {
			border: 2px solid #F8F8FF;
			border-style: inset;
			background-color: black;
			opacity: 0.6;
			margin: 0px;


		}
		
		.backgroundBox a {
			color: inherit;
			text-decoration: none;		
		}
		
		.landingLinks {
			font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
		}
		
		.info {
			padding: 0px 30px 0px 30px;
			height: 290px;
		}
		
		#websiteDevelopment {
			width: 100%;
			background-color: #EDEDED;
			color: gray;
		}
		
		#websiteHosting {
			width: 100%;
			background-color: gray;
			color: #EDEDED;
		}
		
		#websiteMaintenance {
			width: 100%;
			background-color: #EDEDED;
			color: gray;
		}
		
		#portfolio {
			width: 100%;
			background-color: gray;
			color: #EDEDED;
		}
		
		#devImg {
			border: 2px solid #464646;			
		}
		
		.price {
			font-weight: bold;
			font-size: 130%;
			color: #32CD32;
		}
		
		.paddingBottomLP {
			padding-bottom: 100px;
		}
		
		.paddingBottom {
			padding-bottom: 50px;
		}
		
		.paddingTop {
			padding-top: 40px;
		}
		
		p {
			font-size: 1.2em;
		}
		
		.cta {
			position: relative;
			bottom: 0px;
		}
		
	</style>
	
  </head>
  
  <body data-spy="scroll" data-target=".navbar" data-offset="60">
  
  
		<!-- Navbar -->
		
  
		<div class="navbar navbar-inverse navbar-fixed-top"> 
		
			<div class="container">
			
				<div class="navbar-header">
				
					<a href="http://www.danieltait.com.au" class="navbar-brand"><img src="images/dtLogo.png" id="logo"></a>
					<br />
					<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
					<span class="sr-only">Toggle Navigation</span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					
				</div>
			
				<div class="collapse navbar-collapse">
				
					<ul class="nav navbar-nav">
						<li><a href="http://www.danieltait.com.au/#home">Home</a></li>
						<li><a href="http://www.danieltait.com.au/#websiteDevelopment">Website Development</a></li>
						<li><a href="http://www.danieltait.com.au/#websiteHosting">Website Hosting</a></li>
						<li><a href="http://www.danieltait.com.au/#websiteMaintenance">Website Maintenance</a></li>
						<li><a href="http://www.danieltait.com.au/#portfolio">Portfolio</a>
					</ul>
					
				</div>
				
			</div>
	
		</div>
		
		<div class="container contentContainer" id="topContainer">
		
			<div class="center  paddingTop" id="home">
			
				<div class= "row paddingBottomLP">
				
					<div class="col-md-6 col-md-offset-3">
					
						<h2 class="title">Thank you, <?php echo $clientName ?>!</h1>
						<h3 class="title">Your enquiry about our <?php echo $modalType ?> was succesful.</h3>
						<h3 class="title">Daniel will contact you ASAP.</h3>
						
					</div>
					
				</div>
				
			</div>
		
		</div>
		
		<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
		<!-- Include all compiled plugins (below), or include individual files as needed -->
		<script src="js/bootstrap.min.js"></script>
		
		<script>
	
			//.contentContainer makes that div the window height if all the content can fit
		
			$(".contentContainer").css("min-height",$(window).height());
			
		</script>
		
		</body>
</html>
