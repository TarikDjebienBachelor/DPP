// JavaScript Document
// PNG fix

// ajouter la fonction hasAttr(attribute)
hasAttr = function(attr) {
	return this.attr(attr) !== undefined;
};
$.fn.changerClass = function(c1, c2) {
	return this.filter(c1).removeClass(c1).addClass(c2).end();
};
$(document).ready(function() {
	/*
	// Chargement des pubs
	$('<iframe width="728" scrolling=no height="90" />').prependTo("div.oni_container div#oni_wrapper div.oni_pub-center:first").attr('src', '/index.php/pubs/header');
	$('<iframe width="728" scrolling=no height="90" />').prependTo("div.oni_container div#oni_wrapper div.oni_pub-center:last").attr('src', '/index.php/pubs/bottom');
	$('<iframe width="120" scrolling=no height="600" />').prependTo("div#oni_pub-right").attr('src', '/index.php/pubs/right');
	*/
	var isIe6 = ($.browser.msie && ($.browser.version == "6.0")) ? true : false;
	var isIE = ($.browser.msie)? true : false;

//	if(isIe6 == true) {
//		DD_belatedPNG.fix('.oni_png');
//	}

	function maskSelect () {
		if(isIe6 == true) {
			$("select").css("visibility", "hidden");
		}
	}

	function affSelect () {
		if(isIe6 == true) {
			$("select").css("visibility", "visible");
		}
	}
/*******************Navigation********************/
	$("ul.oni_menu1 li.oni_menu1Li > div.oni_blockSubnav").hide();
	$('#oni_content').css('z-index', 1);
	$("ul.oni_menu1 li.oni_menu1Li").hover(function() {
		$(this).children("a.oni_navRubr").addClass("actif");
		$(this).children("div.oni_blockSubnav").show();
		$(this).children("div.oni_blockSubnav").find(".oni_subNavInnerBlock").hide();
		$(this).children("div.oni_blockSubnav").find(".oni_subNavInnerBlock:first").show();
		$(this).children("div.oni_blockSubnav").find(".oni_subNav li a").removeClass("oni_active");
		$(this).children("div.oni_blockSubnav").find(".oni_subNav li:first a").addClass("oni_active");
		if(isIe6 == true) {
			maskSelect();
		}
	},
	function() {
		$(this).children("a.oni_navRubr").removeClass("actif");
		$(this).children("div.oni_blockSubnav").hide();
		if(isIe6 == true) {
			affSelect();
		}
	});

	$(".oni_subNavInner").each(function() {
		$(this).children(".oni_subNavInnerBlock").not(":first").hide();
	});

	var indexThis = $(".oni_subNav li a").hover(function(){
		$("ul.oni_menu1 li.oni_menu1Li .oni_blockSubnav .oni_subNavInner .oni_subNavInnerBlock").hide();
		$(".oni_subNav li a").removeClass("oni_active");
		$(this).addClass("oni_active");
		$(".oni_subNavInner .oni_subNavInnerBlock").eq(indexThis.index(this)).show();
	}, function() {});


/*******************Formulaire recherche sidebar********************/
	$("div.oni_subMenu:not('.oni_open-at-load')").hide();
	$(".oni_toggleSubMenu span").each( function () {
		var TexteSpan = $(this).text();
		$(this).replaceWith('<a href="" title="Afficher le sous-menu"><div>' + TexteSpan + '</div></a>') ;
	} ) ;
	$('.oni_open-at-load').prev("a").attr("title", "Masquer le sous-menu");
	$("li.oni_toggleSubMenu > a").bind('click', function () {
		if ($(this).next("div.oni_subMenu:visible").length != 0) {
			$(this).next("div.oni_subMenu").slideUp("slow", function() {
				$(this).parent().removeClass("oni_open");
				$(this).prev("a").attr("title", "Afficher le sous-menu");
			});
			$(".oni_open a").attr("title", "Masquer le sous-menu");
		}
		else {
			$("div.oni_subMenu").slideUp("slow", function () { $(this).parent().removeClass("oni_open") } );
			$(this).next("div.oni_subMenu").slideDown("slow", function () {
				$(this).parent().addClass("oni_open");
				$(this).prev("a").attr("title", "Masquer le sous-menu");
			});
			$(".oni_open a").attr("title", "Afficher le sous-menu");
		}
		return false;
	});

	/* Resultat de recherche */
	$("div.oni_subFilter:not('.oni_open-at-load')").hide();
	$(".oni_toggleFilter:gt(0)").find("div.oni_subFilter").hide();
	$(".oni_toggleFilter:gt(0)").removeClass("oni_open");
	$(".oni_toggleFilter h4 span").each( function () {
		var TexteSpan = $(this).text();
		$(this).replaceWith('<a href="" title="Afficher le sous-menu"><div>' + TexteSpan + '</div></a>') ;
	} ) ;
	$('.oni_open-at-load').prev("h4").children("a").attr("title", "Masquer le sous-menu");
	$(".oni_toggleFilter > h4 > a").bind('click', function () {
		if ($(this).parent().next("div.oni_subFilter:visible").length != 0) {
			$(this).parent().next("div.oni_subFilter").slideUp("slow", function() {
				$(this).parent().removeClass("oni_open");
				$(this).prev("h4").children("a").attr("title", "Afficher le sous-menu");
			});
			$(".oni_open > h4 > a").attr("title", "Masquer le sous-menu");
		}
		else {
			$(this).parent().next("div.oni_subFilter").slideDown("slow", function () {
				$(this).parent().addClass("oni_open");
				$(this).prev("h4").children("a").attr("title", "Masquer le sous-menu");
			});
			$(".oni_open > h4 > a").attr("title", "Afficher le sous-menu");
		}
		return false;
	});

	$(".oni_subFilter dl dd:not('.oni_open-at-load')").hide();
	$(".oni_subFilter dl dt a").bind('click', function () {
		if ($(this).parent().next("dd:visible").length != 0) {
			$(this).parent().next("dd").slideUp("slow", function() {
				$(this).parent().removeClass("oni_open");
			});
			$(this).parent().addClass("oni_linkOpen").removeClass("oni_linkClose");
		}
		else {
			$(this).parent().next("dd").slideDown("slow", function () {
				$(this).parent().addClass("oni_open");
			});
			$(this).parent().removeClass("oni_linkOpen").addClass("oni_linkClose");
		}
		return false;
	});

/**********************Zoom Avant/Arriere************************/
	Cpt = 3;
	var Ech = new Array("20%", "30%", "40%", "50%", "60%", "70%", "80%", "90%", "100%", "110%", "120%", "130%", "140%", "150%", "160%", "170%", "180%");

	$("#oni_dec-font").click(function(){
		if(Cpt > -2) {
			Cpt--;
			document.getElementById("oni_zoom-block").style.fontSize = Ech[Cpt+4];
		}
		return(false);
	});

	$("#oni_inc-font").click(function(){
		if(Cpt < (Ech.length-1)) {
			Cpt++;
			document.getElementById("oni_zoom-block").style.fontSize = Ech[Cpt+5];
		}
		return(false);
	});


/*************Onglets ideo fiche*************************/
    $(".oni_div-nav-in .oni_onglet").hide();

    if($(".oni_nav-in-ul li:first").hasClass("oni_li-map")){
		$(".oni_div-nav-in .oni_onglet:eq(1)").show();
	}else {
		$(".oni_div-nav-in .oni_onglet:eq(0)").show();
	}

	$(".onglet_lien:eq(0)").addClass('oni_li-on');

    $(".oni_nav-in-ul li a").click(function(){
		 // $('.oni_nav-in-ul li a').removeClass('oni_li-on');
			$(this).parents('.oni_nav-in-ul').find("a").removeClass('oni_li-on');
			$(this).addClass('oni_li-on');
      $(".oni_div-nav-in .oni_onglet").hide();
     $(this.hash).show();
      this.blur();
      return false;
    });

	$(".oni_nav-in-ul li").hover(function(){
		$(this).addClass("oni_li_nav_ul_hover");
    }, function() {
		$(this).removeClass("oni_li_nav_ul_hover");
	});



/*******************Formulaire recherche filter resultats********************/
	$("div.oni_subMenuFilter:not('.oni_open-at-loadFilter')").hide();
	$("li.oni_toggleSubMenuFilter span").each( function () {
		var TexteSpan = $(this).text();
		$(this).replaceWith('<a href="" title="Afficher le sous-menu"><div>' + TexteSpan + '</div></a>') ;
	} ) ;
	$('.oni_open-at-loadFilter').prev("a").attr("title", "Masquer le sous-menu");
	$("li.oni_toggleSubMenuFilter > a").click( function () {
		if ($(this).next("div.oni_subMenuFilter:visible").length != 0) {
			$(this).next("div.oni_subMenuFilter").slideUp("slow", function() {
				$(this).parent().removeClass("oni_openFilter");
				$(this).prev("a").attr("title", "Afficher le sous-menu");
			});
			$(".oni_openFilter a").attr("title", "Masquer le sous-menu");
		}
		else {
			//$("div.oni_subMenuFilter").slideUp("slow", function () { $(this).parent().removeClass("oni_openFilter") } );
			$(this).next("div.oni_subMenuFilter").slideDown("slow", function () {
				$(this).parent().addClass("oni_openFilter");
				$(this).prev("a").attr("title", "Masquer le sous-menu");
			});
			$(".oni_openFilter a").attr("title", "Afficher le sous-menu");
		}
		return false;
	});



/******************Open close select************************/
	$("div.oni_bloc-hide").hide();

	var valueNE = $('#select-etablissement').find('option:selected').attr('value');
	var valueTE = $('#oni_type-etablissement').find('option:selected').attr('value');
	if ( valueNE  != '') {
		var valeur = $("#oni_select-Zone option:selected").attr('value');
		$('#oni_nom_etablissement').removeAttr('disabled');
		switch( valeur ) {
				case '1':
				case '2':
				case '3':
					$("div.oni_bloc-hide > div").hide();
					$("div.oni_bloc-hide > div select").attr('disabled', 'disabled');
					$('#selection_'+valeur).show();
					$('#selection_'+valeur+' select').removeAttr('disabled');
					$('#oni_select-Zone').parent().next("div.oni_bloc-hide").slideDown("slow", function () {});
					break;
				default: break;
		}
	}
	if (valueNE == ''){
		$("#oni_select-Zone").parent("div").hide();
		$("#oni_nom_etablissement").parent("div").hide();
		$("#oni_type-etablissement").parent("div").hide();
	}
	switch( valueNE ) {
		case 'college':
			$("#oni_nom_etablissement").addClass('colleges');
			break;
		case 'lycee':
			$("#oni_nom_etablissement").addClass('lycees');
			break;
		case 'universite':
			if (valueTE == '20') $("#oni_nom_etablissement").addClass('universites');
			break;
		case 'postbac':
			if (valueTE != '20') $("#oni_nom_etablissement").addClass('postbacs');
			break;
		default: break;
	}
	//RG : Quand « Après le bac » est sélectionné , on génère un champ « type d'établissement » qui apparait sous le champ niveau
	if ( valueNE == 'universite' || valueNE == 'postbac') {
		$("#oni_type-etablissement").parent("div").show();
		$("#oni_type-etablissement").removeAttr('disabled');
	} else if( $('#oni_type-etablissement').css("visibility", "visible") ){
		$("#oni_type-etablissement").attr('disabled', 'disabled');
		$("#oni_type-etablissement").parent("div").hide();
	}

	$("#select-etablissement").change( function () {
		var valueNE = $(this).find('option:selected').attr('value');
		$("#oni_nom_etablissement").attr('value', '');
		$("#oni_nom_etablissement").flushCache();
		switch(valueNE) {
			case 'college':
				$("#oni_nom_etablissement").removeClass('lycees');
				$("#oni_nom_etablissement").removeClass('universites');
				$("#oni_nom_etablissement").removeClass('postbacs');
				$("#oni_nom_etablissement").addClass('colleges');
				break;
			case 'lycee':
				$("#oni_nom_etablissement").removeClass('colleges');
				$("#oni_nom_etablissement").removeClass('universites');
				$("#oni_nom_etablissement").removeClass('postbacs');
				$("#oni_nom_etablissement").addClass('lycees');
				break;
			case 'universite':
				if (valueTE == '20') {
					$("#oni_nom_etablissement").addClass('universites');
					$("#oni_nom_etablissement").removeClass('postbacs');
					$("#oni_nom_etablissement").removeClass('colleges');
					$("#oni_nom_etablissement").removeClass('lycees');
				}break;
			case 'postbac':
				if (valueTE != '20') {
					$("#oni_nom_etablissement").addClass('postbacs');
					$("#oni_nom_etablissement").removeClass('universites');
					$("#oni_nom_etablissement").removeClass('colleges');
					$("#oni_nom_etablissement").removeClass('lycees');
				}break;
		}
		switch( valueNE ) {
			case '':
				var valeur = $("#oni_select-Zone option:selected").attr('value');
				$('#oni_nom_etablissement').attr('disabled', 'disabled');
				$("#oni_select-Zone").attr('disabled', 'disabled');
				$("#oni_type-etablissement").attr('disabled', 'disabled');
				$("#oni_select-Zone, #oni_nom_etablissement, #oni_type-etablissement").parent("div").slideUp("slow", function () {});
				$('#selection_'+valeur+' select').attr('disabled', 'disabled');
				$('#selection_'+valeur).hide();
				$("#oni_select-Zone").parent().next("div.oni_bloc-hide").slideUp("slow", function () {});
				$("#oni_select-Zone").parent().next("div.oni_bloc-hide").find("select").attr('disabled', 'disabled');
				break;
			default:
				var valeur = $("#oni_select-Zone option:selected").attr('value');
				$('#oni_nom_etablissement').removeAttr('disabled');
				$('#oni_select-Zone').removeAttr('disabled');
				$('#oni_type-etablissement').removeAttr('disabled');
				if ( valueNE == 'universite' || valueNE == 'postbac') {
					$('#oni_type-etablissement').removeAttr('disabled');
					$("#oni_type-etablissement").parent("div").slideDown("slow", function () {});
				} else if( $('#oni_type-etablissement').css("visibility", "visible") ){
					$("#oni_type-etablissement").attr('disabled', 'disabled');
					$("#oni_type-etablissement").parent("div").slideUp("slow", function () {});
				}
				$("#oni_select-Zone").parent("div").slideDown("slow", function () {});
				$("#oni_nom_etablissement").parent("div").slideDown("slow", function () {});
				$('#selection_'+valeur+' select').slideDown("slow", function () {});
				$('#selection_'+valeur+' select').removeAttr('disabled');
				switch( valeur ) {
					case '0':
						$("#oni_select-Zone").parent().next("div.oni_bloc-hide select").hide();
						$("#oni_select-Zone").parent().next("div.oni_bloc-hide").find("select").attr('disabled', 'disabled');
						$("#oni_select-Zone").parent().next("div.oni_bloc-hide").slideUp("slow", function () {});
						break;
					default:
						$("div.oni_bloc-hide > div").hide();
						$("div.oni_bloc-hide select").attr('disabled', 'disabled');
						$('#selection_'+valeur).show();
						$('#selection_'+valeur+' select').removeAttr('disabled');
						$("#oni_select-Zone").parent().next("div.oni_bloc-hide").slideDown("slow", function () {});
						break;
				}
		}
	});
	$("#oni_select-Zone").change( function () {
		var valeur = $(this).find('option:selected').attr('value');
		switch( valeur ) {
			case '0':
				$(this).parent().next("div.oni_bloc-hide select").hide();
				$(this).parent().next("div.oni_bloc-hide").find("select").attr('disabled', 'disabled');
				$(this).parent().next("div.oni_bloc-hide").slideUp("slow", function () {});
				break;
			default:
				$("div.oni_bloc-hide > div").hide();
				$("div.oni_bloc-hide select").attr('disabled', 'disabled');
				$('#selection_'+valeur).show();
				$('#selection_'+valeur+' select').removeAttr('disabled');
				$(this).parent().next("div.oni_bloc-hide").slideDown("slow", function () {});
				break;
		}
	});
	if(valueNE == 'postbac' || valueNE == 'universite') {
		switch( valueTE ) {
			case '20':
				$("#select-etablissement").find('option:selected').attr('value', 'universite');
				break;
			default:
				$("#select-etablissement").find('option:selected').attr('value', 'postbac');
				break;
		}
	}
	$("#oni_type-etablissement").change( function () {
		var valueTE = $(this).find('option:selected').attr('value');
		switch( valueTE ) {
			case '20':
				$("#select-etablissement").find('option:selected').attr('value', 'universite');
				$("#oni_nom_etablissement").removeClass('postbacs');
				$("#oni_nom_etablissement").addClass('universites');
				break;
			default:
				$("#select-etablissement").find('option:selected').attr('value', 'postbac');
				$("#oni_nom_etablissement").removeClass('universites');
				$("#oni_nom_etablissement").addClass('postbacs');
				break;
		}
	});

	/* Sélection métiers */
	$("div.oni_bloc_metier").hide();

		var valeur = $("input[name=tri_metiers]:checked").val();
		if( valeur ) {
			switch( valeur ) {
					default:
						$("div.oni_bloc_metier > div").hide();
						$("div.oni_bloc_metier > div select").attr('disabled','disabled');
						$('#tri_metiers_'+valeur).show();
						$('#tri_metiers_'+valeur+' select').removeAttr('disabled');
						$('#oni_select-tri_metiers_1').parent().next("div.oni_bloc_metier").slideDown("slow", function () {});
						break;
			}
		}
		$("#oni_select-tri_metiers_1").click( function () {
			var valeur = $(this).val();
			$("div.oni_bloc_metier > div").hide();
			$("div.oni_bloc_metier select").attr('disabled', 'disabled');
			$('#tri_metiers_'+valeur).show();
			$('#tri_metiers_'+valeur+' select').removeAttr('disabled');
			$(this).parent().next("div.oni_bloc_metier").slideDown("slow", function () {});
		});
		$("#oni_select-tri_metiers_2").click( function () {
			var valeur = $(this).val();
			$("div.oni_bloc_metier > div").hide();
			$("div.oni_bloc_metier select").attr('disabled', 'disabled');
			$('#tri_metiers_'+valeur).show();
			$('#tri_metiers_'+valeur+' select').removeAttr('disabled');
			$(this).parent().next("div.oni_bloc_metier").slideDown("slow", function () {});
		});

		$("#oni_nom_metier").keyup( function () {
			$("div.oni_bloc_metier > div").hide();
			$("div.oni_bloc_metier select").attr('disabled', 'disabled');
		});
		$("#oni_select-secteurs_professionnels").change( function () {
			if($('#oni_select-secteurs_professionnels :selected').val()!="") {
				//$("#oni_nom_metier").attr('value', '');
			}
		});

/** Abdelkader RHOUATI  date : 14/01/2010	description : [Moteur droit formation] Gesion de Regle de gestion d'affichage des champs**/

	$("div.oni_hide_F").hide();
	$("div.oni_bloc_formation").hide();
	$("#oni_formation_F").attr('disabled', 'disabled');
	$("#oni_formation_F").parent("div").hide();

	// récuperer la valeur selectionner de la liste niveau d'étude
	var valeur = $('#oni_niveau_etude_F').find('option:selected').attr('value');

	if ( valeur == 5 ) {
		$("#oni_formation_F").addClass('lycee');
	}
	else if ( valeur == 8 ) {
		$("#oni_formation_F").addClass('sup');
	}

	if(isIE == true) {
		var listTypeF = $("#oni_type_formation_F option");
		var count_listTypeF = listTypeF.length-1;
		var lsitDepartementF = $("#oni_departement_F option");
	}

	if( valeur != '' ){
		$("div.oni_hide_F").show();
		$("#oni_formation_F").removeAttr('disabled');
		$("#oni_formation_F").parent("div").show();
		var valeur_zone_geo = $("#oni_select-Zone_F").find('option:selected').attr('value');
		if (valeur_zone_geo != '') {
			$("div.oni_bloc_formation").show('slow');
			if ( valeur_zone_geo == '1' || valeur_zone_geo == 'toute_la_france_F' ) {
				$("#F_selection_2").hide('slow');
			}
			if ( valeur_zone_geo == '2' || valeur_zone_geo == 'toute_la_france_F' ) {
				$("#F_selection_1").hide('slow');
			}
			$("#F_selection_1 > select, #F_selection_2 > select").attr("disabled", "disabled");
			$('#F_selection_'+valeur_zone_geo).show();
			$('#F_selection_'+valeur_zone_geo+" > select").removeAttr('disabled');
		}
		if(isIE == true) {
			$("#oni_type_formation_F option:gt(0)").remove();
			listTypeF.each(function(){
				if($(this).hasClass("niveau_type_"+valeur))
					$("#oni_type_formation_F").append($(this));
			});
			$("#oni_type_formation_F").append(listTypeF[count_listTypeF]);
		}else{
			// afficher que les types de foramtion correspondants au niveau selectionné
			$("#oni_type_formation_F option:gt(0)").hide();
			$("#oni_type_formation_F option.niveau_type_"+valeur).show();
			$("#oni_type_formation_F option:last").show();

		}
	}

	// gestion du changement de la valeur selectionnée de la liste niveau d'étude
	$('#oni_niveau_etude_F').change( function () {

		var valeur = $(this).find('option:selected').attr('value');
		$("#oni_formation_F").attr('value', '');
		$("#oni_formation_F").flushCache();

		if ( valeur == 5 ) {
			$("#oni_formation_F").removeClass('sup');
			$("#oni_formation_F").addClass('lycee');
		}
		else if ( valeur == 8 ) {
			$("#oni_formation_F").removeClass('lycee');
			$("#oni_formation_F").addClass('sup');
		}

		if( valeur != '' ){
			$("div.oni_hide_F").show("slow");
			var valeur_zone_geo = $("#oni_select-Zone_F").find('option:selected').attr('value');
			if (valeur_zone_geo != 'toute_la_france_F') {
				$("div.oni_bloc_formation").show();
				$("div.oni_bloc_formation > select").hide();
				if ( valeur_zone_geo == '1' || valeur_zone_geo == 'toute_la_france_F' ) {
					$("#F_selection_2").hide('slow');
				}
				if ( valeur_zone_geo == '2' || valeur_zone_geo == 'toute_la_france_F' ) {
					$("#F_selection_1").hide('slow');
				}
				$('#F_selection_'+valeur_zone_geo).show();
				$('#F_selection_'+valeur_zone_geo).removeAttr('disabled');
			}else{
				$("div.oni_bloc_formation").hide();
				$("div.oni_bloc_formation").find("select").attr('disabled', 'disabled');
			}
			$("#oni_formation_F").removeAttr('disabled');
			$("#oni_formation_F").parent("div").show("slow");

			if(isIE == true) {
				// afficher que les types de foramtion correspondants au niveau selectionné
				$("#oni_type_formation_F option:gt(0)").remove();
				listTypeF.each(function(){
					if($(this).hasClass("niveau_type_"+valeur))
						$("#oni_type_formation_F").append($(this));
				});
				$("#oni_type_formation_F").append(listTypeF[count_listTypeF]);

			}else{
				// afficher que les types de formation correspondants au niveau selectionné
				$("#oni_type_formation_F option:gt(0)").hide();
				$("#oni_type_formation_F option.niveau_type_"+valeur).show();
				$("#oni_type_formation_F option:last").show();
				$("#oni_type_formation_F option[value='']").attr('selected', 'selected');
			}

		}else{
			$("div.oni_hide_F, div.oni_bloc_formation").hide("slow");
			$("#oni_formation_F").attr('disabled', 'disabled');
			$("#oni_formation_F").parent("div").hide("slow");

			if(isIE == true) {
				// afficher tous les types de formation
				$("#oni_type_formation_F option").remove();
				listTypeF.each(function(){
					$("#oni_type_formation_F").append($(this));
				});
			}else{
				// afficher tous les types de formation
				$("#oni_type_formation_F option:gt(0)").show();
			}
		}

	});
/** MA KASMI  date : 09/03/2010 description :  [Moteur droit formation]
					 								Gesion de Regle de gestion d'affichage
					 								des champs departement et regions en relation avec la zone geo selectionné
**/

	$("#oni_select-Zone_F").change( function () {
		var valeur = $(this).find('option:selected').attr('value');
		switch( valeur ) {
			case 'toute_la_france_F':
				$(this).parent().next("div.oni_bloc_formation select").hide();
				$(this).parent().next("div.oni_bloc_formation").find("select").attr('disabled', 'disabled');
				$(this).parent().next("div.oni_bloc_formation").slideUp("slow", function () {});
				break;
			default:
				$("div.oni_bloc_formation > div").hide();
				$("div.oni_bloc_formation select").attr('disabled', 'disabled');
				$('#F_selection_'+valeur).show();
				$('#F_selection_'+valeur+' select').removeAttr('disabled');
				$(this).parent().next("div.oni_bloc_formation").slideDown("slow", function () {});
				break;
		}

	});

/** MAK (10-03-2010) [Univers Formation]garder le domaine initialement choisi lors du lancmenet de la recherche aprés avoir choisi d'autres dans les filtres **/

	/** Correction de l'anomalie 914 : ZONE GEOGRAPHIQUE bug region departement MOTEUR DROITE
	 * mettre en commentaire tout le traitement
	 * **/
	// récuperer la valeur selectionner de la liste des regions
	/*var valeur = $('#oni_region_F').find('option:selected').attr('value');

	if( valeur != '' ){
		if(isIE == true) {
			$("#oni_departement_F option:gt(0)").remove();
			lsitDepartementF.each(function(){
				if($(this).hasClass("dep_region_"+valeur))
					$("#oni_departement_F").append($(this));
			});
		}else{
			$("#oni_departement_F option:gt(0)").hide();
			$("#oni_departement_F option.dep_region_"+valeur).show();
		}
	}

	// gestion du changement de la valeur selectionnée de la liste des regions :
	//     - restreindre la liste de departements
	$('#oni_region_F').change( function () {

		var valeur = $(this).find('option:selected').attr('value');

		if( valeur != '' ){
			if(isIE == true) {
				$("#oni_departement_F option:gt(0)").remove();
				lsitDepartementF.each(function(){
					if($(this).hasClass("dep_region_"+valeur))
						$("#oni_departement_F").append($(this));
				});
			}else{
				$("#oni_departement_F option:gt(0)").hide();
				$("#oni_departement_F option.dep_region_"+valeur).show();
			}
		}else{
			if(isIE == true) {
				// afficher tous les types de formation
				$("#oni_departement_F option").remove();
				lsitDepartementF.each(function(){
					$("#oni_departement_F").append($(this));
				});
			}else{
				$("#oni_departement_F option:gt(0)").show();
			}
		}

	});*/
/** Fin modification date : 05/01/2010 **/

/* Tooltip */
   // By suppling no content attribute, the library uses each elements title attribute by default
   if($('a.oni_tooltip[title]').length) {
   	$('a.oni_tooltip[title]').qtip();
   }
   if($('map.oni_tooltip').length) {
   	$('.oni_tooltip > area').each(function() {

		$(this).qtip(
		  {
			 content: $(this).attr('alt'), // Use the ALT attribute of the area map
			 position: {
			  corner: {
				 target: 'topMiddle',
				 tooltip: 'bottomMiddle'
			  }
			 },
			 hide: {
				fixed: true
			 }
		  });

	});

   }

/* Carousel */
	if($('#oni_blockNavDiapo').length) {
		$('#oni_blockNavDiapo').jcarousel({
			scroll: 4
		});
	}

    $("#oni_diaporama .oni_diaporamaOnglet").hide();
    $("#oni_diaporama .oni_diaporamaOnglet:eq(0)").show();

    $("#oni_diaporama #oni_blockNavDiapo a").click(function(){
		$('"#oni_diaporama #oni_blockNavDiapo li').removeClass('oni_active');
		$(this).parent().addClass('oni_active');
        $("#oni_diaporama .oni_diaporamaOnglet").hide();
        $(this.hash).show();
        this.blur();
        return false;
    });

/** Mohammed amine KASMI  Date : 03/02/2009 **/
	//Réinitialiser la recherche
    var resetSearch = function(idForm) {
       $("#btn_resetSearch").click(function() {
			$("#formResultat .oni_subMenuFilter input:checked").removeAttr( "checked" );
			$(idForm).submit();
	   });
    };

   //Masquer la carte
   $("#oni_hideMap").click(function() {
	   if(this.checked == true){
	   		$(".oni_contentGMaps").hide();
	   		$(this).next('label').html('Afficher la carte');
	   }else{
	   		$(".oni_contentGMaps").show();
	   		$(this).next('label').html('Masquer la carte');
	   }
   });

/** Modification : Mohammed amine Kasmi
 * Description : evenement sur le clik sur les cases à  cocher dans le bloc EDD [Filtres Univers Lycées]
 * Date : 17/03/2010
 */
	$("div.oni-edd").find("input[type=checkbox]").click(function(){
		$(this).toggleClass('lookingfor-liste-01-liens-item');
		if($(this).is(':checked'))
		{
			//$("div.oni-edd").find("input[type=checkbox]").removeAttr('checked');
			//$(this).attr('checked', 'checked');
			return false;
		}
		else {
			$(this).removeClass('lookingfor-liste-01-liens-item');
			$(this).removeAttr('rel');
			$("input[type=hidden][name='filters[attr_edds_t][]']").remove();
			$('.offset-reset').attr('value', '');
			$('#formResultat').submit();
		}
	});
/* Popin */
	if ($("a.oni_popin").length) {
		$("a.oni_popin").popin({
			width:685,
			height:400,
			className: "oni_pagePopin",
			onStart: maskSelect,
			onExit: affSelect
		});
	}
	/* pour les établissement par dominantess*/
	if ($("a.oni_popin_dominante").length) {
		$("a.oni_popin_dominante").popin({
			width:685,
			height:400,
			className: "oni_pagePopin",
			onStart: maskSelect,
			onExit: affSelect,
			method: 'POST',
			formData: 'etablissementTouteFrance'
		});
	}
	var hideOngletPopin = function(){
		if ($(".popin .oni_div-nav-in .oni_onglet").length) {
			$(".popin .oni_div-nav-in .oni_onglet").hide();
			$(".popin .oni_div-nav-in .oni_onglet:eq(0)").show();
		}
	};

	if ($("a.oni_popin-organisme").length) {
		$("a.oni_popin-organisme").popin({
			width:685,
			height:400,
			className: "oni_pagePopin",
			onStart: maskSelect,
			onExit: affSelect,
			method: 'POST',
			formData: 'formResultat'
		});
	}

	if ($("a.oni_popin-concours").length || $("a.oni_popin-services").length ) {
		$("a.oni_popin-concours, a.oni_popin-services").popin({
			width:685,
			height:400,
			className: "oni_pagePopin",
			onStart: maskSelect,
			onExit: affSelect,
			onComplete: hideOngletPopin,
			method: 'POST',
			formData: 'formResultat'
		});
	}

	if ($("a.lookingfor-liste-01-liens-item").length) {
		$("a.lookingfor-liste-01-liens-item").popin({
			width:610,
			height:400,
			className: "oni_pagePopin oni_pageOption",
			onStart: maskSelect,
			onExit: affSelect,
			method: 'POST',
			formData: 'formResultat'
		});
	}
	if ($("input.lookingfor-liste-01-liens-item").length) {
		$("input.lookingfor-liste-01-liens-item").popin({
			width:610,
			height:400,
			className: "oni_pagePopin oni_pageOption",
			onStart: maskSelect,
			onExit: affSelect,
			method: 'POST',
			formData: 'formResultat'
		});
	}
	if ($("a.oni_resultatFormation").length) {
		$("a.oni_resultatFormation").popin({
			width:710,
			height:400,
			className: "oni_pagePopin oni_pageOption",
			onStart: maskSelect,
			onComplete: checkedThis,
			onExit: affSelect,
			method: 'POST',
			formData: 'formResultat'
		});
	}

	if ($("a.oni_info_org").length) {
		$("a.oni_info_org").popin({
			width:610,
			height:250,
			className: "oni_pagePopin oni_pageOrganisme",
			onStart: maskSelect,
			onExit: affSelect
		});
	}

    $(".popin .oni_nav-in-ul li a").bind("click", function() {
		$('.popin .oni_nav-in-ul li a').removeClass('oni_li-on');
		$(this).addClass('oni_li-on');
		$(".popin .oni_div-nav-in .oni_onglet").hide();
		$(this.hash).show();
		this.blur();
		return false;
    });

    $(".oni_div-nav-in .oni_onglet").hide();
    if($(".oni_nav-in-ul li:first").hasClass("oni_li-map") && $(".oni_nav-in-ul li").length!=1){
		$(".oni_div-nav-in .oni_onglet:eq(1)").show();
	}else {
		$(".oni_div-nav-in .oni_onglet:eq(0)").show();
	}
    $(".oni_nav-in-ul li a").click(function(){
	 // $('.oni_nav-in-ul li a').removeClass('oni_li-on');
	 /*Modifie par MA KASMI : Eviter de supprimer la classe dans la popin concours*/
    	$(this).parents('.oni_nav-in-ul').find("a").removeClass('oni_li-on');
    	$(this).addClass('oni_li-on');
    	$(".oni_div-nav-in .oni_onglet").hide();
    	$(this.hash).show();
    	this.blur();
    	return false;
    });

	$(".oni_nav-in-ul li").hover(function(){
		$(this).addClass("oni_li_nav_ul_hover");
    }, function() {
		$(this).removeClass("oni_li_nav_ul_hover");
	});

/* + et - des resultats de recherche */
	$(".oni_linkCat").hide();
	$(".oni_linkCat:eq(0)").show();
	$(".oni_linkClose a").bind("click", function() {
		$this = $(this);
		$this.parent().removeClass("oni_linkClose").addClass("oni_linkOpen").parent().next(".oni_linkCat").hide();
		return false;
	});
	$(".oni_linkOpen a").bind("click", function() {
		$this = $(this);
		$this.parent().removeClass("oni_linkOpen").addClass("oni_linkClose").parent().next(".oni_linkCat").show();
		return false;
	});
/* systeme d'onglet : +2 */
	if ($(".oni_nav-in-ul").length) {
		var sizeOnglets = $(".oni_nav-in-ul li").size();
		var typeOnglet;
		if (sizeOnglets > 6) {

			 if(sizeOnglets > 7 && $(".oni_nav-in-ul li:first").hasClass("oni_li-map")) {
				typeOnglet = 7;
				$(".oni_nav-in-ul").css("margin", "0 0 0 2px").children("li:eq(6)").after('<li class="oni_li-more"><a href="#" title="Plus d\'options">Plus d\'options</a></li>').siblings("li:last").after('<li class="oni_li-less" style=""><a href="#" title="Plus d\'options">Plus d\'options</a></li>');
				$(".oni_inner_nav-in-ul_container").css({width:$(".oni_nav-in").width()});
				$(".oni_nav-in-ul").css({position:"absolute", width:"1000em"});
			} else if(sizeOnglets > 7 && $(".oni_nav-in-ul li:first").not(".oni_li-map")) {
				typeOnglet = 6;
				$(".oni_nav-in-ul").children("li:eq(5)").after('<li class="oni_li-more"><a href="#" title="Plus d\'options">Plus d\'options</a></li>').siblings("li:last").after('<li class="oni_li-less" style=""><a href="#" title="Plus d\'options">Plus d\'options</a></li>');
				$(".oni_inner_nav-in-ul_container").css({width:$(".oni_nav-in").width()});
				$(".oni_nav-in-ul").css({position:"absolute", width:"1000em"});
			}
			$(".oni_li-more").css({marginRight:"100em"});
		}
		$(".oni_li-more a").bind("click", function() {
			var widthLirestants = 0;
			$(".oni_nav-in-ul li:gt("+typeOnglet+")").each(function(){
				widthLirestants += $(this).width();
			});
			$(".oni_nav-in-ul").animate({
				left:"-"+(widthLirestants-21)+"px"
			}, "fast").children("li.oni_li-more").remove();
			return false;
		});
		$(".oni_li-less a").bind("click", function() {
			$(".oni_nav-in-ul").animate({
				left:"0px"
			}, "fast").children("li:eq("+(typeOnglet-1)+")").after('<li class="oni_li-more"><a href="#" title="Plus d\'options">Plus d\'options</a></li>');
			$(".oni_li-more").css({marginRight:"100em"});
			return false;
		});
	}

/* Tous les themes */
	if ($(".oni_themes")) {
		$(".oni_themes > ul").hide();
	}
	$(".oni_themes h2 a").click(
		function () {
			if($(this).parent().next("ul").is(":hidden")) {
				$(this).parent().next("ul").slideDown("fast");
				$(this).blur();
			} else {
				$(this).parent().next("ul").slideUp("fast");
				$(this).blur();
			}
			return false;
		});
	$(".oni_themes").hover(
		function () {}, function() {
			$(this).children("ul").slideUp("fast");
		});


/* Flux RSS */
	if ($(".oni_rssList")) {
		$(".oni_rssList .oni_rssSubList > ul").hide();
	}
	$(".oni_rssList .oni_rssSubList > div > a").click(
		function () {
			if($(this).parent().next("ul").is(":hidden")) {
				$(this).parent().addClass("oni_rssSubListOn").next("ul").slideDown("fast");
				$(this).blur();
			} else {
				$(this).parent().removeClass("oni_rssSubListOn").next("ul").slideUp("fast");
				$(this).blur();
			}
			return false;
		});


/* Toggle Contact */
	/* Modif Vincent car un formulaire peut etre visible au chargement de la page
	 * if ($(".oni_contactList")) {
		$(".oni_contactList > dd").hide();
	}*/
	$(".oni_contactList > dt > a").click(
		function () {
			if($(this).parent().next("dd").is(":hidden")) {
				$(".oni_contactList > dt").removeClass("oni_open").next("dd").slideUp("fast");
				$(this).parent().addClass("oni_open").next("dd").slideDown("fast");
			} else {
				$(this).parent().addClass('oni_close'); // ajout Vincent car problème sur le formulaire ouvert par défaut après
				$(this).parent().removeClass("oni_open").next("dd").slideUp("fast");
			}
			return false;
		});

/******* Modif Kevin pour tri volet de regroupements *******/
/* Tri oni_filter */
	function assignItemList () {
		idItemList=0;
		$(".oni_filter").parent().children(".oni_contentFilter").each(function () {
			$(this).append(itemList[idItemList].content);
			idItemList++;
		});
	}

	if($(".oni_filter").length && $(".oni_contentFilter").length) {
		itemList = [];
		$(".oni_filter").parent().children(".oni_contentFilter").each(function () {
			var contentFilter = $(this).contents();
			var titleFilter = $(this).children("h4").children("a").text();
			toPush = {title: titleFilter, content: contentFilter};
			itemList.push(toPush);
		});
		$(".oni_filter a").bind('click', function() {
			//$(".oni_contentFilter").removeClass("oni_open");
			if($(this).parent().hasClass("oni_desc")) {
				$(this).parent().removeClass("oni_desc");
				itemList = itemList.objSort("title",-1);
				assignItemList ();
			}else {
				$(this).parent().addClass("oni_desc");
				itemList = itemList.objSort("title");
				assignItemList ();
			}
			return false;
		});
	}

/* afficher les blocs masquer pour l'impression pour IE */
	window.onbeforeprint=function(){
		$("#oni_content-page *").show();
	}
	window.onafterprint=function(){
		setTimeout("window.location.reload()",50)
	}

/* afficher les blocs masquer pour l'impression en detectant la combinaison de touche ctrl + p */
	var isCtrl = false;
	$(document).keyup(
		function (e) {
			if(e.which == 17)
				isCtrl=false;
		}).keydown(
		function (e) {
			if(e.which == 17)
				isCtrl=true;
			if(e.which == 80 && isCtrl == true) {
				$("#oni_content-page *").show();
			}
		});

/** Ajouter Par Mezzat Youssef Date : 25/01/10  Univers Oragnisme information **/
	//  description : Tri des resultats en javascript
	if($(".oni_tableSearchResults").length){
		$.tablesorter.defaults.widgets = ['zebra'];
		$.tablesorter.defaults.sortList = [[0,0]];
	}
	// gestion du changement de la valeur selectionné de la liste des organismes :

	var valeur = $("#oni_type_organisme").find('option:selected').attr('value');
	var zone_geo = $('#oni_select-Zone_O').find('option:selected').attr('value');

	if ( valeur == 'public' ) {
		$("#oni_organisme").addClass('orientation');
	}
	else if ( valeur == 'handicap' ) {
		$("#oni_organisme").addClass('handicap');
	}

	$("div.oni_organisme-hide").hide();
	$("#oni_select-Zone_O, #oni_organisme").parent("div").hide();
	$("#div-oni-organisme-public, #div-oni-organisme-handicap").hide();
	$("#div-oni-organisme-public select, #div-oni-organisme-handicap select").attr('disabled', 'disabled');
	if( zone_geo ) {
		switch( zone_geo ) {
			case 'r':
			case 'd':
			case 'a':
				$("div.oni_organisme-hide > div").hide();
				$("div.oni_organisme-hide > div select").attr('disabled', 'disabled');
				if( valeur != '' ){
					$('#selection_'+zone_geo).show();
					$('#selection_'+zone_geo+' select').removeAttr('disabled');
				}
				$('#oni_select-Zone_O').parent().next("div.oni_organisme-hide").slideDown("slow", function () {});
				break;
			default: break;
		}
	}

	if( valeur != '' ){
		// afficher que les types des organismes correspondants au niveau selectionné
		$("#oni_organisme").removeAttr('disabled');
		$("#oni_select-Zone_O, #oni_organisme").parent("div").show();
		$('#oni_select-Zone_O').removeAttr('disabled');
		$("#div-oni-organisme-"+valeur).show();
		$("#div-oni-organisme-"+valeur+" select").removeAttr('disabled');
	}

	$("#oni_type_organisme").change( function () {
		$("#select-departement_o").prev('label').removeAttr('style');
		$("#select-region_o").prev('label').removeAttr('style');
		$("#select-academie_o").prev('label').removeAttr('style');
		$("#select-departement_o> option:first ").removeAttr('style');
		$("#select-region_o > option:first ").removeAttr('style');
		$("#select-academie_o > option:first ").removeAttr('style');
		$("#oni_type_handicap").prev('label').removeAttr('style');
		$("#oni_type_handicap > option:first ").removeAttr('style');
		var valeur = $(this).find('option:selected').attr('value');
		$("#oni_organisme").attr('value', '');
		$("#oni_organisme").flushCache();

		if ( valeur == 'public' ) {
			$("#oni_organisme").removeClass('handicap');
			$("#oni_organisme").addClass('orientation');

		}
		else if ( valeur == 'handicap' ) {
			$("#oni_organisme").removeClass('orientation');
			$("#oni_organisme").addClass('handicap');
		}

		$("#div-oni-organisme-public select, #div-oni-organisme-handicap select").attr('disabled', 'disabled');
		$("#div-oni-organisme-public, #div-oni-organisme-handicap").hide();

		if( valeur != '' ) {
			$("#oni_organisme").removeAttr('disabled');
			$('#oni_select-Zone_O').removeAttr('disabled');
			$("#oni_select-Zone_O, #oni_organisme").parent("div").show('slow');
			$("#div-oni-organisme-"+valeur).show('slow');
			$("#div-oni-organisme-"+valeur+" select").removeAttr('disabled');

			var zone_geo = $("#oni_select-Zone_O").find('option:selected').attr('value');
			switch( zone_geo ) {
				case 'f':
					$("#oni_select-Zone_O").parent().next("div.oni_organisme-hide select").hide();
					$("#oni_select-Zone_O").parent().next("div.oni_organisme-hide").find("select").attr('disabled', 'disabled');
					$("#oni_select-Zone_O").parent().next("div.oni_organisme-hide").slideUp("slow", function () {});
					break;
				default:
					$("div.oni_organisme-hide > div").hide();
					$("div.oni_organisme-hide select").attr('disabled', 'disabled');
					$('#selection_'+zone_geo).show();
					$('#selection_'+zone_geo+' select').removeAttr('disabled');
					$("#oni_select-Zone_O").parent().next("div.oni_organisme-hide").slideDown("slow", function () {});
					break;
			}

		} else {
			$("#oni_organisme").attr('disabled', 'disabled');
			$('#oni_select-Zone_O').attr('disabled', 'disabled');
			$(".oni_organisme-hide").hide('slow');
			$("#oni_select-Zone_O, #oni_organisme").parent("div").hide('slow');
 		}
	});

	$("#oni_select-Zone_O").change( function () {

		var zone_geo = $(this).find('option:selected').attr('value');
		switch( zone_geo ) {
			case 'f':
				$(this).parent().next("div.oni_organisme-hide select").hide();
				$(this).parent().next("div.oni_organisme-hide").find("select").attr('disabled', 'disabled');
				$(this).parent().next("div.oni_organisme-hide").slideUp("slow", function () {});
				break;
			default:
				$("div.oni_organisme-hide > div").hide();
				$("div.oni_organisme-hide select").attr('disabled', 'disabled');
					$('#selection_'+zone_geo).show();
					$('#selection_'+zone_geo+' select').removeAttr('disabled');
				$(this).parent().next("div.oni_organisme-hide").slideDown("slow", function () {});
				break;
		}
	});

	/*** Univers Handicap ***/
	// gestion du changement de la valeur selectionné de la liste des handicap :

	var type_structure = $("#type_structure").find('option:selected').attr('value');
	var type_handicap = $("#type_handicap").find('option:selected').attr('value');
	var zone_geo_h = $('#oni_select_zone_h').find('option:selected').attr('value');
	var listTypeH = $("#type_handicap option");
	$("#oni_select_zone_h,#oni_nom_handicap,#type_handicap").attr('disabled','disabled');
	$("div.oni_handicap-hide").hide();

	if ( type_structure == 'college' ) {
		$("#oni_nom_handicap").addClass('college');
	}
	else if ( type_structure == 'lycee' ) {
		$("#oni_nom_handicap").addClass('lycee');
	}
	else if ( type_structure == 'ems' ) {
		$("#oni_nom_handicap").addClass('ems');
	}
	else if ( type_structure == 'organisme_information' ) {
		$("#oni_nom_handicap").addClass('organismes');
	}

	// afficher que la liste des handicap correspondants au structures
	if (  type_structure != '') {

		$("#type_handicap , #oni_select_zone_h").removeAttr('disabled');

		if (type_structure == 'organisme_information' ) {
			$("#type_handicap option[value='7']").show();
			if(isIE == true) {
				listTypeH.each(function(){
					$("#type_handicap").append($(this));
				});
			}
		}else{
			if(isIE == true) {
				$("#type_handicap option[value='7']").remove();
				$("#type_handicap option[value='']").attr('selected', 'selected');
			}
			$("#type_handicap option[value='7']").hide();
		}

		//if (type_handicap != '') {
			$("#oni_nom_handicap").removeAttr('disabled');
		//}
	}else {
		$("#type_handicap").attr('disabled','disabled');
		$("#oni_select_zone_h").attr('disabled','disabled');
		$("#oni_nom_handicap").attr('disabled','disabled');
		$("#select-r_h").attr('disabled','disabled');
		$("#type_handicap, #oni_select_zone_h, #oni_nom_handicap, #select-r_h").parent("div").hide();
	}

	if( zone_geo_h ) {
		switch( zone_geo_h ) {
			case 'r_h':
			case 'd_h':
				$("div.oni_handicap-hide > div").hide();
				$("div.oni_handicap-hide > div select").attr('disabled', 'disabled');
				if ( type_structure != '') {
					$('#selection_'+zone_geo_h).show();
					$('#selection_'+zone_geo_h+' select').removeAttr('disabled');
				}
				$('#oni_select_zone_h').parent().next("div.oni_handicap-hide").slideDown("slow", function () {});
				break;
			default: break;
		}
	}
	// afficher que les la liste des handicap correspondants au structures
	$("#type_structure").change( function () {
		var type_structure = $(this).find('option:selected').attr('value');
		$("#type_handicap,#oni_select_zone_h").removeAttr('disabled');
		$("#type_handicap, #oni_select_zone_h, #oni_nom_handicap").parent("div").slideDown("slow", function () {});
		$("#oni_nom_handicap").attr('value', '');
		$("#oni_nom_handicap").flushCache();

		if ( type_structure == 'college' ) {
			$("#oni_nom_handicap").removeClass('lycee');
			$("#oni_nom_handicap").removeClass('ems');
			$("#oni_nom_handicap").removeClass('organismes');
			$("#oni_nom_handicap").addClass('college');
		}
		else if ( type_structure == 'lycee' ) {
			$("#oni_nom_handicap").removeClass('college');
			$("#oni_nom_handicap").removeClass('ems');
			$("#oni_nom_handicap").removeClass('organismes');
			$("#oni_nom_handicap").addClass('lycee');
		}
		else if ( type_structure == 'ems' ) {
			$("#oni_nom_handicap").removeClass('lycee');
			$("#oni_nom_handicap").removeClass('college');
			$("#oni_nom_handicap").removeClass('organismes');
			$("#oni_nom_handicap").addClass('ems');
		}
		else if ( type_structure == 'organisme_information' ) {
			$("#oni_nom_handicap").removeClass('lycee');
			$("#oni_nom_handicap").removeClass('college');
			$("#oni_nom_handicap").removeClass('ems');
			$("#oni_nom_handicap").addClass('organismes');
		}
		if (  type_structure != ''){
			if( type_structure == 'organisme_information' ) {
				$("#type_handicap option[value='7']").show();
				if(isIE == true) {
					listTypeH.each(function(){
						$("#type_handicap").append($(this));
					});
				}
			}else{
				if(isIE == true) {
					$("#type_handicap option[value='7']").remove();
				}
				else {
					$("#type_handicap option[value='7']").hide();
				}
				$("#type_handicap option[value='']").attr('selected', 'selected');
			}

			$("#type_handicap , #oni_select_zone_h , #oni_nom_handicap").removeAttr('disabled');

			var zone_geo_h = $("#oni_select_zone_h").find('option:selected').attr('value');

			switch( zone_geo_h ) {
				case 'f_h':
					$("#oni_select_zone_h").parent().next("div.oni_handicap-hide select").hide();
					$("#oni_select_zone_h").parent().next("div.oni_handicap-hide").find("select").attr('disabled', 'disabled');
					$("#oni_select_zone_h").parent().next("div.oni_handicap-hide").slideUp("slow", function () {});
					break;
				default:
					$("div.oni_handicap-hide > div").hide();
					$("div.oni_handicap-hide select").attr('disabled', 'disabled');
					$('#selection_'+zone_geo_h).show();
					$('#selection_'+zone_geo_h+' select').removeAttr('disabled');
					$("#oni_select_zone_h").parent().next("div.oni_handicap-hide").slideDown("slow", function () {});
					break;
			}

		}else{
			$("#type_handicap").attr('disabled','disabled');
			$("#oni_select_zone_h").attr('disabled','disabled');
			$("#oni_nom_handicap").attr('disabled','disabled');
			$("#type_handicap, #oni_select_zone_h, #oni_nom_handicap").parent("div").slideUp("slow", function () {});
			$("#oni_select_zone_h").parent().next("div.oni_handicap-hide").hide();
		}
	});

	// afficher le champ de recherche libre
	$("#type_handicap").change( function () {
		var type_handicap = $(this).find('option:selected').attr('value');
		var type_structure = $(this).find('option:selected').attr('value');
	});

	// afficher les zone geo suivant la valeur selectioné

	$("#oni_select_zone_h").change( function () {

		var zone_geo_h = $(this).find('option:selected').attr('value');

		switch( zone_geo_h ) {
			case 'f_h':
				$(this).parent().next("div.oni_handicap-hide select").hide();
				$(this).parent().next("div.oni_handicap-hide").find("select").attr('disabled', 'disabled');
				$(this).parent().next("div.oni_handicap-hide").slideUp("slow", function () {});
				break;
			default:
				$("div.oni_handicap-hide > div").hide();
				$("div.oni_handicap-hide select").attr('disabled', 'disabled');
				$('#selection_'+zone_geo_h).show();
				$('#selection_'+zone_geo_h+' select').removeAttr('disabled');
				$(this).parent().next("div.oni_handicap-hide").slideDown("slow", function () {});
				break;
		}
	});

/****** Filtre type structure de l'univers handicap ******/
	function countChecked(cls) {
		return  $(cls).children("input:checked").length;
	}
	function countCheckbox(cls) {
		return $(cls).children("input:checkbox").length;
	}

     $(".tChild_1 > input").click( function(){
    	 if( countChecked(".tChild_1") == countCheckbox(".tChild_1") ) {
    		$(".tChild_1").parent().children("input").attr("checked","checked");
    	 } else {
    		$(".tChild_1").parent().children("input").removeAttr("checked");
    	 }
     });

     $(".tChild_2 > input:checkbox").click( function(){
	     if( countChecked(".tChild_2") == countCheckbox(".tChild_2") ) {
	    	$(".tChild_2").parent().children("input").attr("checked","checked");
	   	 } else {
	   		$(".tChild_2").parent().children("input").removeAttr("checked");
	   	 }
     });

 /** Fiche lycée+postbac  ajout de la classe open Voir RG15 **/
     $(".treeView").children("li").each(function(){
 		var compteUL = $(this).children('ul').length;
 		if (compteUL == 1) {
 			var compteEscL = $(this).children('ul').children('li').children('ul').length;
 			if ( compteEscL == 1){
 				$(this).addClass("open");
 				$(this).children('ul').children('li').addClass("open");
 				$(this).children('ul').children('li').children("ul").children("li").addClass("open");
 				$(this).children('ul').children('li').children("ul").children("li").children("ul").children("li").addClass("open");
 			}
 		}
 	});
 	/**  gestion du +/- **/
    $(".aRubrique").treeview({
 		animated: "slow",
 		collapsed: true,
 		persist: "location"
 	});
    $(".treeView").children("li").each(function(){
 		var compteUL = $(this).children('ul').length;
 		if (compteUL == 1) {
 			var compteEscL = $(this).children('ul').children('li').children("ul").length;
 			if ( compteEscL == 1){
 				$(this).children('div').removeClass('expandable-hitarea').addClass('collapsable-hitarea');
 				$(this).children('ul').children('li').children('div').removeClass('expandable-hitarea').addClass('collapsable-hitarea');
	 			$(this).children('ul').children('li').children('ul').children('li').children('div').removeClass('expandable-hitarea').addClass('collapsable-hitarea');
	 			$(this).children('ul').children('li').children('ul').children('li').children('ul').children('li').children('div').removeClass('expandable-hitarea').addClass('collapsable-hitarea');
 			}
 		}
 	});

/**Section Linguistique + Section Sportive **/
	$("div.oni-options_sportives").find("input:checkbox").click(function(){
		$(this).parent().siblings().find("input:checked").removeAttr('checked');
		$('.offset-reset').attr('value', '');
		$('#formResultat').submit();
	});
	$("div.oni_sections-linguistiques").find("input:checkbox").click(function(){
		$(this).parent().siblings().find("input:checked").removeAttr('checked');
  		$('.offset-reset').attr('value', '');
  		$('#formResultat').submit();
     });

/** Abdelkader RHOUATI
 * date : 05/01/2010
 * description : [fiche etablissement] affichage
				d'action pour les formations de
				l'onglet section particulier d'ensegnement
**/
	$("div.oni_subMenu_onglet").hide();
	$("li.oni_toggleSubMenu_onglet > a").toggle(
		function () {
			$(this).next("div.oni_subMenu_onglet").slideDown("slow", function() {
				$(this).parent().removeClass("oni_open");
			});
			return false;
		},
		function (){
			$(this).next("div.oni_subMenu_onglet").slideUp("slow", function () {
				$(this).parent().addClass("oni_open");
			});
			return false;
		}
	);
/** Fin modification date : 05/01/2010 **/
/** MA KASMI
 * date : 25/01/2010
 * description : [filtre domaines de l'univers formation]
				 cocher le checkbox du domaines lorsque tous ses sous
				 domaines le sont et le decocher dans le cas inverse
 **/

	/* check toutes les checkbox enfant dans la popin formation */
	function checkedThis (){
		$(".oni_result_formContainer_innerContent input:checkbox").bind("click", function() {
			if(!$(this).parent().hasClass("oni_ssChamps")) {
				if($(this).is(":checked")) {
					$(this).parents("div:eq(1)").find('.oni_ssChamps input:checkbox').each(function(){
						if($(this).attr("disabled") != true) $(this).attr("checked","checked");
					});
				} else {
					$(this).parents("div:eq(1)").find('input:checkbox').removeAttr("checked");
				}
			}
		});
	}
	$(".oni_ssChamps > input:checkbox").click(function () {
		$(this).parents('div.blockFlt').children('input').attr('checked', 'checked');
		if($(this).parents('div:eq(2)').find('input:checked').length == $(this).parents('div:eq(2)').find('input:checkbox').length){
			$(this).parents('div.blockFlt').children('input').attr('checked', 'checked');
		}
		else if($(this).parents('div:eq(2)').find('input:checked').length == 0){
			$(this).parents('div.blockFlt').children('input').attr('checked', '');
		}
		$('.offset-reset').attr('value', '');
		$('#formResultat').submit();
	});

     if($("div.oni_content-top-filter li:eq(1)").find("input:checkbox:eq(0)").attr('checked')){
     	if( $('div.oni_content-top-filter li:eq(1)').find(".oni_ssChamps > input:checked").length == 0){
     		$("div.oni_content-top-filter li:eq(1)").find(".oni_ssChamps > input:checkbox").attr('checked', 'checked');
     	}
      }

/**
 * Ajouter par Amine BETARI & Youssef date : 04/03/2010
 * description : [fiche handicap] affichage d'action pour les formations
 **/
	$("div.dispS").hide();
	$("div.Format_dip").hide();
	$("a.dispositif_scol").toggle(
		function () {
			$(this).next("div.dispS").slideDown("slow");
			return false;
		},function (){
			$(this).next("div.dispS").slideUp("slow");
			return false;
		}
	);
	$("p.FormatD").toggle(
		function () {
			$(this).next("div.Format_dip").slideDown("slow");
			return false;
		},function (){
			$(this).next("div.Format_dip").slideUp("slow");
			return false;
		}
	);

/** Ajouter par Amine BETARI
 * date: 08/03/2010
 * description : [fiche Handicap]: Les actions de formations doivent toute etre ouvertes par defaut.
 **/
	$("div.oni_subMenu_ongletenseignement").hide();
	$("li.oni_toggleSubMenu_ongletenseignement > a").toggle(
		function () {
			$(this).next("div.oni_subMenu_ongletenseignement").slideDown("slow", function() {
				$(this).parent().removeClass("oni_open");
			});
			return false;
		},
		function (){
			$(this).next("div.oni_subMenu_ongletenseignement").slideUp("slow", function () {
				$(this).parent().addClass("oni_open");
			});
			return false;
		}
	);
/** MAK : si un dept ou une region est selectionnée on dechode toute la france **/
    if (($("input:checkbox[name='filters[attr_region_t][]']:checked").length !=0 ) || ($("input:checkbox[name='filters[attr_departement_t][]']:checked").length != 0 )) {
    	if ( $("#attr_regions_toute_la_france").is(":checked") ){
    		$("#attr_regions_toute_la_france").removeAttr("checked");
    	}
    }
    $('#attr_regions_toute_la_france,  #attr_regions_toute_la_france_F , #attr_regions_toute_la_france_org_info').click(function(){
		if($(this).is(':checked')) {
			$("input:checkbox[name='filters[attr_region_t][]']").removeAttr('checked');
			$("input:checkbox[name='filters[attr_departement_t][]']").removeAttr('checked');
			$("input:checkbox[name='filters[attr_academie_t][]']").removeAttr('checked');
			//Univers formartions
			$("input[type=checkbox][name='filters[attr_regions_t][]']").removeAttr('checked');
			$("input[type=checkbox][name='filters[attr_departements_t][]']").removeAttr('checked');
		}
		$('#formResultat').submit();
	});

/** Gestion du  choix "Toute la france" dans l'univers Post Bac **/
    $('#attr_regions_toute_la_france_postbac').click(function(){
		if($(this).is(':checked')) {
			$(this).attr("value", "0");
			if ($("input:checkbox[name='filters[attr_region_t][]']:checked").length == 0) {
				$("input:checkbox[name='filters[attr_region_t][]']").removeAttr('checked', 'checked');
				$("input[type=hidden][name='filters[attr_region_t][]']").removeAttr('disabled', 'disabled');
				$("input:checkbox[name='filters[attr_departement_t][]']").removeAttr('checked', 'checked');
				$("input:checkbox[name='filters[attr_academie_t][]']").removeAttr('checked', 'checked');
			}
			else {
				//$("input:checkbox[name='filters[attr_region_t][]']").attr('disabled', 'disabled');
				$("input:checkbox[name='filters[attr_departement_t][]']").removeAttr('checked', 'checked');
				$("input:checkbox[name='filters[attr_academie_t][]']").removeAttr('checked', 'checked');
				$("input[type=hidden][name='filters[attr_region_t][]']").removeAttr('disabled', 'disabled');
			}
		}
		else {
			$(this).attr("value", "");
			$("input[type=checkbox][name='filters[attr_region_t][]']").removeAttr('checked');
			$("input[type=hidden][name='filters[attr_region_t][]']").attr('disabled', 'disabled');
			$("input[type=checkbox][name='filters[attr_departement_t][]']").removeAttr('checked');
			$("input[type=checkbox][name='filters[attr_academie_t][]']").removeAttr('checked');
		}
		$('#formResultat').submit();
	});

/** MAK : si un dept ou une region est selectionnée on dechode toute la france **/
    $("input[type=checkbox][name='filters[attr_region_t][]']").click(function(){
    	if ( $(this).is(":checked") && $("#attr_regions_toute_la_france_postbac").is(":checked") ){
    		$("#attr_regions_toute_la_france_postbac").removeAttr("checked");
			$("input[type=hidden][name='filters[attr_region_t][]']").removeAttr('disabled');
			$("input[type=hidden][name='filters[attr_region_t][]']").attr('disabled', 'disabled');
    	}

    });

/** MAK : Decocher Toute la france dans le bloc de filtre Régions dans le cas ou on a précisé une région **/
	$("input:checkbox[name='filters[attr_region_t][]'], input:checkbox[name='filters[attr_regions_t][]'], input:checkbox[name='filters[attr_departement_t][]'], input:checkbox[name='filters[attr_departements_t][]'],input:checkbox[name='filters[attr_academie_t][]']").click(function(){
		if ($(this).is(':checked')){
			$("#attr_regions_toute_la_france").removeAttr("checked");
			$("#attr_regions_toute_la_france").attr('value', '');
			$("#attr_regions_toute_la_france_F").removeAttr("checked");
			$("#attr_regions_toute_la_france_F").attr('value', '');
			$("#attr_regions_toute_la_france_postbac").removeAttr("checked");
			$("#attr_regions_toute_la_france_postbac").attr('value', '');
			$("#attr_regions_toute_la_france_org_info").removeAttr("checked");
			$("#attr_regions_toute_la_france_org_info").attr('value', '');
		}
	});

	$("popin .oni-options_facultatives_lycee").find("input[type=checkbox]").click(function(){
		var parent_is_checked = $(this).attr('checked');
		var valeur = $(this).attr('value');
		$(".oni-options_facultatives_lycee > input[type=checkbox]").each(function() {
			if($(this).attr('value')==valeur) {
				if(parent_is_checked ) {
					$(this).attr('checked', 'checked');
				}
				else {
					$(this).removeAttr('checked');
				}
			}
		});
	});

/** My : Nouveau comportements filtres geographiques  **/
	//formations
  $("input[type='checkbox'][name='filters[attr_regions_t][]']").click(function(){
      if($(this).is(':checked')){
	    $(".departements").removeAttr( "checked");
	    $("input[type='checkbox'][name='filters[attr_departements_t][]']").attr('value', '');
      }
     $('.offset-reset').attr('value', '');
     $('#formResultat').submit();
  });
  $("input[type='checkbox'][name='filters[attr_departements_t][]']").click(function(){
      if($(this).is(':checked')){
	        $(".regions").removeAttr("checked");
	        $("input[type='checkbox'][name='filters[attr_regions_t][]']").attr('value', '');
      }
     $('.offset-reset').attr('value', '');
     $('#formResultat').submit();
  });
  //etablissement
  $("input[type='checkbox'][name='filters[attr_region_t][]']").click(function(){
      if($(this).is(':checked')){
      	$(".academie").removeAttr( "checked");
	        $(".departement").removeAttr( "checked");
	        $("input[type='checkbox'][name='filters[attr_departement_t][]']").attr('value', '');
	        $("input[type='checkbox'][name='filters[attr_academie_t][]']").attr('value', '');
      }
     $('.offset-reset').attr('value', '');
     $('#formResultat').submit();
  });
  $("input[type='checkbox'][name='filters[attr_departement_t][]']").click(function(){
      if($(this).is(':checked')){
	        $(".academie").removeAttr("checked");
	        $(".region").removeAttr("checked");
	        $("input[type='checkbox'][name='filters[attr_region_t][]']").attr('value', '');
	        $("input[type='checkbox'][name='filters[attr_academie_t][]']").attr('value', '');
      }
     $('.offset-reset').attr('value', '');
     $('#formResultat').submit();
  });
  $("input[type='checkbox'][name='filters[attr_academie_t][]']").click(function(){
      if($(this).is(':checked')){
    	  	$(".departement").removeAttr("checked");
	        $(".region").removeAttr("checked");
	        $("input[type='checkbox'][name='filters[attr_departement_t][]']").attr('value', '');
	        $("input[type='checkbox'][name='filters[attr_region_t][]']").attr('value', '');
      }
     $('.offset-reset').attr('value', '');
     $('#formResultat').submit();
  });

  //enlever les espaces vide
  $("div.tChild_1,div.tChild_2").each(function(){
	  if($.trim($(this).html()) == '') $(this).hide();
  });

  //Cas d'une seule region le volet est ouvert par default
	$(".oni_subFilter dl > dt:odd").addClass("oni_odd");
	if($('dl#tri').children('dd').length == 1 ){
		$("dl#tri > dt").replaceClass('oni_filter','oni_reg');
		$("dl#tri > dd").addClass('oni_open');
		$("dl#tri > dd").children('div').addClass("oni_open-at-load").attr('style','');
	}

  //** Image Loading
  $("img.LoadImg").hide();
  $("div.oni_submit-Form >input").click(function(){
	  if(document.getElementById('oni_niveau_etude_F').options[document.getElementById('oni_niveau_etude_F').selectedIndex].value == '')
		  return false;
	  var domaine =  $('#oni_domaine_F').find('option:selected').attr('value');
	  var zone_geo = $('#oni_select-Zone_F').find('option:selected').attr('value');
	  var reg = $('#oni_region_F').find('option:selected').attr('value');
	  var dept = $('#oni_departement_F').find('option:selected').attr('value');

	  if (domaine == '')
	  {
		  $("#oni_domaine_F").prev('label').css('color','red');
		  $("#oni_domaine_F > option:first ").css('color','red');
		  return false;
	  }
	  else
	  {
		  $("#oni_domaine_F").prev('label').removeAttr('style');
		  $("#oni_domaine_F > option:first ").removeAttr('style');

		  if(zone_geo == '1' && reg == '')
		  {
			$("#oni_region_F").prev('label').css('color','red');
			$("#oni_region_F > option:first ").css('color','red');
			return false;
		  }
		  else if(zone_geo == '2' && dept == '')
		  {
			$("#oni_departement_F").prev('label').css('color','red');
			$("#oni_departement_F > option:first ").css('color','red');
			return false;
		  }
		  else
		  {
			$("#oni_region_F").prev('label').removeAttr('style');
			$("#oni_region_F > option:first ").removeAttr('style');
			$("#oni_departement_F").prev('label').removeAttr('style');
			$("#oni_departement_F > option:first ").removeAttr('style');

			if($('#oni_formation_F').attr('value')=='(ex : Licence anglais, diplôme sage femme...)')
				  $('#oni_formation_F').attr('value', '');
			$(this).hide();
			$(this).next(".LoadImg").show();
		  }
	  }

  });
  $("div.oni_submit-Etab >input").click(function(){
	  if(document.getElementById('etablissement').class_id.options[document.getElementById('etablissement').class_id.selectedIndex].value=='')
		  	return false;
	  var zone_geo = $('#oni_select-Zone').find('option:selected').attr('value');
	  var reg = $('#select-region').find('option:selected').attr('value');
	  var dept = $('#select-departement').find('option:selected').attr('value');
	  var acad = $('#select-academie').find('option:selected').attr('value');

	  if(zone_geo == '1' && reg == '')
	  {
		$("#select-region").prev('label').css('color','red');
		$("#select-region > option:first ").css('color','red');
		return false;
	  }
	  else if(zone_geo == '2' && dept == '')
	  {
		$("#select-departement").prev('label').css('color','red');
		$("#select-departement > option:first ").css('color','red');
		return false;
	  }
	  else if(zone_geo == '3' && acad == '')
	  {
		$("#select-academie").prev('label').css('color','red');
		$("#select-academie > option:first ").css('color','red');
		return false;
	  }
	  else
	  {
		$("#select-region").prev('label').removeAttr('style');
		$("#select-departement").prev('label').removeAttr('style');
		$("#select-academie").prev('label').removeAttr('style');
		$("#select-region > option:first ").removeAttr('style');
		$("#select-departement > option:first ").removeAttr('style');
		$("#select-academie > option:first ").removeAttr('style');

		if($('#oni_nom_etablissement').attr('value')=='Collège Françoise Dolto')
			$('#oni_nom_etablissement').attr('value', '');
		$(this).hide();
		$(this).next(".LoadImg").show();
	  }
  	});

  $("div.oni_submit-Hand  >input").click(function(){
	  var type_handicap = $("#type_handicap").find('option:selected').attr('value');
	  if(document.getElementById('handicap').class_id.options[document.getElementById('handicap').class_id.selectedIndex].value == '')
		  return false;
	  if( type_handicap == '')
	  {
		  $("#type_handicap").prev('label').css('color','red');
		  $("#type_handicap > option:first ").css('color','red');
		  return false;
	  }
	  else
	  {
		  $("#type_handicap").prev('label').removeAttr('style');
		  $("#type_handicap > option:first ").removeAttr('style');
		  if($('#oni_nom_handicap').attr('value')=='UPI, SEGPA, CLIS…')
			  $('#oni_nom_handicap').attr('value', '');
		  $(this).hide();
		  $(this).next(".LoadImg").show();
	  }
  });
  $("div.oni_submit-Met >input").click(function(){
	  if($('#oni_nom_metier').attr('value')=='exemple de métier')
		  $('#oni_nom_metier').attr('value', '');
	  $(this).hide();
	  $(this).next(".LoadImg").show();
  });
  $("div.oni_submit-Org >input").click(function(){
	  if(document.getElementById('oni_type_organisme').options[document.getElementById('oni_type_organisme').selectedIndex].value=='')
		  return false;

	  var zone_geo = $('#oni_select-Zone_O').find('option:selected').attr('value');
	  var type_orga = $('#oni_type_organisme').find('option:selected').attr('value');
	  if ( type_orga == 'public' )
	  {
		  var reg = $('#select-region_o').find('option:selected').attr('value');
		  var dept = $('#select-departement_o').find('option:selected').attr('value');
		  var acad = $('#select-academie_o').find('option:selected').attr('value');
		  if(zone_geo == 'r' && reg == '')
		  {
			$("#select-region_o").prev('label').css('color','red');
			$("#select-region_o > option:first ").css('color','red');
			return false;
		  }
		  else if(zone_geo == 'd' && dept == '')
		  {
			$("#select-departement_o").prev('label').css('color','red');
			$("#select-departement_o>option:first ").css('color','red');
			return false;
		  }
		  else if(zone_geo == 'a' && acad == '')
		  {
			$("#select-academie_o").prev('label').css('color','red');
			$("#select-academie_o>option:first ").css('color','red');
			return false;
		  }
		  else
		  {
			$("#select-departement_o").prev('label').removeAttr('style');
			$("#select-region_o").prev('label').removeAttr('style');
			$("#select-academie_o").prev('label').removeAttr('style');
			$("#select-departement_o> option:first ").removeAttr('style');
			$("#select-region_o > option:first ").removeAttr('style');
			$("#select-academie_o > option:first ").removeAttr('style');

			if($('#oni_organisme').attr('value')=='(ex : ASSOC PH...)')
				$('#oni_organisme').attr('value', '');
			$(this).hide();
			$(this).next(".LoadImg").show();
		  }
	  }
	  else if ( type_orga == 'handicap' )
	  {
		  var type_hand = $('#oni_type_handicap').find('option:selected').attr('value');
		  if ( type_hand == '' )
		  {
			  $("#oni_type_handicap").prev('label').css('color','red');
			  $("#oni_type_handicap>option:first ").css('color','red');
			  return false;
		  }
		  else
		  {
			  $("#oni_type_handicap").prev('label').removeAttr('style');
			  $("#oni_type_handicap > option:first ").removeAttr('style');
		  }
		  if($('#oni_organisme').attr('value')=='(ex : ASSOC PH...)')
			$('#oni_organisme').attr('value', '');
		  $(this).hide();
		  $(this).next(".LoadImg").show();
	  }
	  else
	  {
		  if($('#oni_organisme').attr('value')=='(ex : ASSOC PH...)')
			$('#oni_organisme').attr('value', '');
		  $(this).hide();
		  $(this).next(".LoadImg").show();
	  }
  });
  $("img.LoadImgGrey").hide();
  $('#searchTransverse').submit(function() {
	  if ( $('#SearchTextTransverse').attr('value') == '' ){
		  return false;
	  }
	  else {
		  $("#oni_submit-transverse").hide();
		  $("img.LoadImgGrey").show();
	  }
  });

  $('#oni_formRegions').submit(function() {
	  var newAction = $('#oni_select-region').find('option:selected').attr('id');
	  $(this).attr('action',newAction);
  });

  $('#spellcheck').click(function(){
	  var SearchSpellcheck = $('#SearchSpellcheck').attr('value');
	  $('input.SearchTextTransverse').attr('value',SearchSpellcheck);
	  $('#formResultat').submit();
  });

  $('#oni_linkRegion').click(function(){
	  var oni_linkRegion = $('#linkRegion').attr('value');
	  $('#oni_select-region').attr('value',oni_linkRegion);
	  $('#oni_formRegions').submit();
  });

  $("a").click(function(){
	  if ( $(this).attr('href') == '#' ) {
		  return false;
	  }
  });

});

/** fonction a appeller pour imprimer **/
function printPage () {
	$("#oni_content-page *").show();
	window.print();
}

