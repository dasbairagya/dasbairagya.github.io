$(function(){

 function check_email() {
                  var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);

                  if (!pattern.test($('#login_username').val())) {
              document.getElementById('login_username').style.borderColor = "red"; 
			  $('#msg-log').addClass('error').html('<div class="alert alert-danger alert-dismissable fade in">'+
			    '<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>'+
			    '<strong>*</strong> Invalid email address</div> ');
			  
                  }

            } 


	    $('#login_username').focusout(function(){
	  document.getElementById('login_username').style.borderColor = "";
	   check_email();
	});
		$('#login_password').focusout(function(){
	  document.getElementById('login_password').style.borderColor = "";
	});

/*Reset Password*/
$('#wp-submit').click(function(){

  var lost_email = $('#lost_email').val();
  var action = $('#action').val();
   if(lost_email==""||lost_email=="undefined"){
    document.getElementById('login_username').style.borderColor = "red"; 
    $('#msg-log').addClass('error').html('<div class="alert alert-danger alert-dismissable fade in">'+
      '<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>'+
      '<strong>*</strong> Username is required</div> ');
    return false;
   }
   else{
  $('#msg-log').html('');
  var datas =   'user_login='+lost_email+
                '&action='+action;               
                console.log(datas);
       on();//show loader
    $.ajax({
    type:'POST',
    url: 'https://site.goigi.co/egates/password-reset/',
    data: datas,
    catch: false,
    dataType : 'json',
    success: function(response){

    console.log('return=  '+response['return']+' msg= '+response['msg']+'result='+response['results']);
// return false;
      if(response['return']=='ok'){
        //show login faild error
        $('#msg-log').html(response['msg']);
        //window.location = "http://www.serenitea.com.au/demo/wp-admin/";
      }
      else if(response['return']=='invalid'){
        //login successfull and redirect.....
        $('#msg-log').html(response['msg']);
         
      }
      else{
          $('#msg-log').html(response['msg']);
      }
      off();
    },
    error: function (response) {
                      $('#msg-log').addClass('error').html(response);
                    setTimeout(off, 3000);//hide loader
                    off();
                }

  });
  return false;

 }
})





/*loging validation*/
  $('#log_btn_sub').click(function(){
   
	 var login_username = $('#login_username').val();
	 var login_password = $('#login_password').val();
	 var remember_me_checkbox = $('#remember_me_checkbox').val();

 if(login_username==""||login_username=="undefined"){
	  document.getElementById('login_username').style.borderColor = "red"; 
	  $('#msg-log').addClass('error').html('<div class="alert alert-danger alert-dismissable fade in">'+
	    '<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>'+
	    '<strong>*</strong> Username is required</div> ');
	  return false;
	 }
	 // else if(login_username!=""){
	 // 	check_email();
	 // 	return false;
	 // }
 else if(login_password==""||login_password=="undefined"){
   document.getElementById('login_password').style.borderColor = "red"; 
      $('#msg-log').addClass('error').html('<div class="alert alert-danger alert-dismissable fade in">'+
    '<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>'+
    '<strong>*</strong> Password is required.</div> ');
  return false;
 }
 else{
  $('#msg-log').html('');
  var datas =   'login_username='+login_username+
                '&login_password='+login_password+
                '&remember_me_checkbox='+remember_me_checkbox;
                console.log(datas);
       on();//show loader
    $.ajax({
    type:'POST',
    url: 'https://site.goigi.co/egates/log-in/',
    data: datas,
    catch: false,
    dataType : 'json',
    success: function(response){
        //console.log(response);
        //  console.log('return=  '+response['return']+' msg= '+response['msg']+'result='+response['results']);
// return false;
      if(response['return']=='true'){
        //show login faild error
      	$('#msg-log').html(response['msg']);
        window.location = "https://site.goigi.co/egates/profile/";
      }
      else if(response['return']=='not_activated' || response['return']=='inactive'){
        //account has not been activated yet.
        $('#msg-log').html(response['msg']);

      }
      else if(response['return']=='invalid'){
        //login successfull and redirect.....
      	$('#msg-log').html(response['msg']);
      	 
      }
      else{
          $('#msg-log').html(response['msg']);
      }
      off();
    },
    error: function (response) {
                      $('#msg-log').addClass('error').html(response);
                    $("#login-form")[0].reset()
                    setTimeout(off, 3000);//hide loader
                    off();
                }

  });
  return false;

 }

});
});
