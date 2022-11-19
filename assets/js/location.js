
    function ajaxCall() {
        this.send = function(data, url, method, success, type) {
          type = type||'json';
          var successRes = function(data) {
              success(data);
          };

          var errorRes = function(e) {
              console.log(e);
              alert("Error found \nError Code: "+e.status+" \nError Message: "+e.statusText);
          };
            $.ajax({
                url: url,
                type: method,
                data: data,
                success: successRes,
                error: errorRes,
                dataType: type,
                timeout: 60000
            });

          }

        }

function locationInfo() {
    // var rootUrl = "http://localhost/egates/wp-content/themes/egates_theme/api.php";
      var rootUrl = "https://site.goigi.co/egates/wp-content/themes/egates_theme/api.php";
    var call = new ajaxCall();
    this.getPostcode = function(id) {
        $(".suburb option:gt(0)").remove();
        var url = rootUrl+'?type=getPostcode&cityId=' + id;
        var method = "post";
        var data = {};
        //alert(url);

        //$('.suburb').find("option:eq(0)").html("Please wait..");

        call.send(data, url, method, function(data) {
            // alert('pin = '+data['result']);
            // return false;
            console.log(data);
            
            if(data.tp == 1){
                var list = new Array();
                $.each(data['result'], function(key, val) {
                    list.push(val);
                });

               $(".suburb").val(list);
                $(".suburb").prop("disabled",false);
            }
            else{
                 alert(data.msg);
            }
        });
    };
   this.getCities = function(id) {
        $(".cities option:gt(0)").remove();
        var url = rootUrl+'?type=getCities&stateId=' + id;
        var method = "post";
        var data = {};
        //alert(url);

        $('.cities').find("option:eq(0)").html("Please wait..");

        call.send(data, url, method, function(data) {
            // alert('url = '+data);
            // return false;
            console.log(data);
            //$('#fade').editableSelect('destroy');
            $('.cities').find("option:eq(0)").html("Select City");
            if(data.tp == 1){
                console.log(data['result']);
                $.each(data['result'], function(key, val) {
                    var option = $('<option />');
                    option.attr('value', key).text(val);
                    $('.cities').append(option);   
                });
                $(".cities").prop("disabled",false);
                $('.es-list li').remove();
                $('#fade').editableSelect({  effects: 'default' });
            }
            else{
                 alert(data.msg);
            }
        });
    };

    this.getStates = function(id) {

        $(".states option:gt(0)").remove(); 
        $(".cities option:gt(0)").remove(); 
        var url = rootUrl+'?type=getStates';
        var method = "post";
        var data = {};
        $('.states').find("option:eq(0)").html("Please wait..");
        call.send(data, url, method, function(data) {
            $('.states').find("option:eq(0)").html("Select State");
            if(data.tp == 1){
                $.each(data['result'], function(key, val) {
                    var option = $('<option />');
                    option.attr('value', key).text(val);
                    $('.states').append(option);
                });
                $(".states").prop("disabled",false);
            }
            else{
                alert(data.msg);
            }
        }); 
    };

    this.getCountries = function() {
        var url = rootUrl+'?type=getCountries';
        var method = "post";
        var data = {};
        $('.countries').find("option:eq(0)").html("Please wait..");
        call.send(data, url, method, function(data) {
            $('.countries').find("option:eq(0)").html("Select Country");
            console.log(data);
            if(data.tp == 1){
                $.each(data['result'], function(key, val) {
                    var option = $('<option />');
                    option.attr('value', key).text(val);
                    $('.countries').append(option);
                });
                $(".countries").prop("disabled",false);
            }
            else{
                alert(data.msg);
            }
        }); 
    };

}

$(function() {
var loc = new locationInfo();
//loc.getCountries();
loc.getStates();
 $(".countries").on("change", function(ev) {
        var countryId = $(this).val();
        if(countryId != ''){
        loc.getStates(countryId);
        }
        else{
            $(".states option:gt(0)").remove();
        }
    });

 $(".states").on("change", function(ev) {
        var stateId = $(this).val();
        if(stateId != ''){

        loc.getCities(stateId);
        }
        else{
            $(".cities option:gt(0)").remove();
        }
    });
 $(".cities").on("change", function(ev) {
        var cityId = $(this).val();
        if(cityId != ''){
        loc.getPostcode(cityId);
        }
        else{
            $(".cities option:gt(0)").remove();
        }
    });

});