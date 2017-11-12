function lookup(inputString) {
	if(inputString.length == 0) {
		// Hide the suggestion box.
		$('#suggestions').hide();
	} else {
		$.post("/autocomplete/search", {queryString: ""+inputString+""}, function(data){
			if(data.length >0) {
				$('#suggestions').show();
				$('#autoSuggestionsList').html(data);
			}
		});
	}
} // lookup

function fill(thisValue) {
	$('#inputString').val(thisValue);
	setTimeout("$('#suggestions').hide();", 200);
}


$(function() {
	function format(mail) {
		//if (mail.to != '') suggest = mail.name + " <br />(voir la fiche : " + mail.to + ")";
		//else suggest = mail.name;
		suggest = mail.to;
		return suggest;
	}

	urlSearch = '/autocomplete/search';
	
/*	$("#oni_nom_metier").autocomplete(urlSearch, {
		scrollHeight: 400,
		multiple: false,
		dataType: "json",
		parse: function(data) {
			return $.map(data, function(row) {
				if (row.to != '') fiche = row.to;
				else fiche = row.name;
				return {
					data: row,
					value: row.name,
					result: fiche
				}
			});
		},
		formatItem: function(item) {
			return format(item);
		}
	}).result(function(e, item) {});
	
	$("#oni_nom_etablissement").autocomplete(urlSearch, {
		scrollHeight: 400,
		multiple: false,
		dataType: "json",
		parse: function(data) {
		return $.map(data, function(row) {
			if (row.to != '') fiche = row.to;
			else fiche = row.name;
			return {
				data: row,
				value: row.name,
				result: fiche
			}
		});
	},
	formatItem: function(item) {
		return format(item);
	}
	}).result(function(e, item) {});
	
	$("#oni_formation_F").autocomplete(urlSearch, {
		scrollHeight: 400,
		multiple: false,
		dataType: "json",
		parse: function(data) {
		return $.map(data, function(row) {
			if (row.to != '') fiche = row.to;
			else fiche = row.name;
			return {
				data: row,
				value: row.name,
				result: fiche
			}
		});
	},
	formatItem: function(item) {
		return format(item);
	}
	}).result(function(e, item) {});
	
	$("#oni_organisme").autocomplete(urlSearch, {
		scrollHeight: 400,
		multiple: false,
		dataType: "json",
		parse: function(data) {
			return $.map(data, function(row) {
				if (row.to != '') fiche = row.to;
				else fiche = row.name;
				return {
					data: row,
					value: row.name,
					result: fiche
				}
			});
		},
		formatItem: function(item) {
			return format(item);
		}
	}).result(function(e, item) {});
	
	$("#oni_nom_handicap").autocomplete(urlSearch, {
		scrollHeight: 400,
		multiple: false,
		dataType: "json",
		parse: function(data) {
			return $.map(data, function(row) {
				if (row.to != '') fiche = row.to;
				else fiche = row.name;
				return {
					data: row,
					value: row.name,
					result: fiche
				}
			});
		},
		formatItem: function(item) {
			return format(item);
		}
	}).result(function(e, item) {});
*/
	$("#SearchTextTransverse").autocomplete(urlSearch, {
		scrollHeight: 400,
		multiple: false,
		dataType: "json",
		parse: function(data) {
			return $.map(data, function(row) {
				if (row.to != '') fiche = row.to;
				else fiche = row.name;
				return {
					data: row,
					value: row.name,
					result: fiche
				}
			});
		},
		formatItem: function(item) {
			return format(item);
		}
	}).result(function(e, item) {});
	
});
