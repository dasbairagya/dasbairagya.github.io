//************* form submit check ************
$(function () {

    $(document.body).on('blur', '.required', function () {
        //console.log(this.id);
        if ($(this).val() != null && $(this).val().trim() != "") {
            $(this).css('border-color', '');
        }
        else {
            $(this).css('border-color', 'red');
        }
    });
    $(document.body).on('keyup', '.required', function ()
      {
        if ($(this).val() != null && $(this).val().trim() != "") {
            $(this).css('border-color', '');
        }
        else
        {
            $(this).css('border-color', 'red');
        }
    });   





     $(document.body).on('blur', '.chk_password', function () {
        var pass = $('#upass').val();
        var cpass = $('#cpass').val();
        if (cpass == null || cpass.trim() == "") {
                $('#cpass').css('border-color', 'red');
                chk_pass = false;
            }
          else if (cpass!= pass) {
          $('#msg-reg').addClass('error').html('<div class="alert alert-danger alert-dismissable fade in">'+
        '<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>'+
        '<strong>Oh snap!</strong> Password does not match</div> ');
                $('#cpass').css('border-color', 'red');
                chk_pass = false;
              
          }
          else {
                $('#cpass').css('border-color', '');
                 $('#msg-reg').html('');
            }
    });
    $(document.body).on('keyup', '.chk_password', function (){
          var pass = $('#upass').val();
        var cpass = $('#cpass').val();
        if (cpass == null || cpass.trim() == "") {
                $('#cpass').css('border-color', 'red');
                chk_pass = false;
            }
          else if (cpass!= pass) {
        $('#msg-reg').html('');
          $('#msg-reg').addClass('error').html('<div class="alert alert-danger alert-dismissable fade in">'+
        '<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>'+
        '<strong>Oh snap!</strong> Password does not match</div> ');
                $('#cpass').css('border-color', 'red');
                chk_pass = false;
              
          }
          else {
                $('#cpass').css('border-color', '');
            }
    });









    $(document.body).on('keypress', '.yearvalidate', function (ev) {
        if (ev.which != 8 && ev.which != 0 && (ev.which < 48 || ev.which > 57)) {
            return false;
        }
        else
        {
            var current_year = new Date().getFullYear();
            if ($(this).val() != null && $(this).val().trim() != "" && $(this).val().length == 4) {
                if (Number($(this).val()) <= current_year) {
                    $(this).css('border-color', '');
                }
                else {
                    $(this).css('border-color', 'red');
                }
            }
            else {
                $(this).css('border-color', 'red');
            }
        }
    });
    $(document.body).on('blur', '.yearvalidate', function () {
        var current_year = new Date().getFullYear();
        if ($(this).val() != null && $(this).val().trim() != "") {
            if (($(this).val().length == 4) && (Number($(this).val()) <= current_year)) {
                $(this).css('border-color', '');
            }
            else {
                $(this).css('border-color', 'red');                
            }
        }
    });
    $(".number").keypress(function (e) {
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            return false;
        }
    });
    //$(".required").blur(function () {
    //    console.log(this.id);
    //    if ($(this).val() != null && $(this).val().trim() != "")
    //    {
    //     $(this).css('border-color', '');
    //    }
    //    else
    //    {
    //     $(this).css('border-color', 'red');
    //    }
    //});

    $(".email_required").keyup(function () {
       if ($(this).val() != null && $(this).val().trim() != "") {
           var emailReg = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
           var valid = emailReg.test($(this).val());
           if (!valid) {
               $(this).css('border-color', 'red');
           } else {
               $(this).css('border-color', '');
           }
       }
       else
       {
           $(this).css('border-color', 'red');
       }
    });

  $(document.body).on('blur', '.email_required', function () {
       if ($(this).val() != null && $(this).val().trim() != "") {
        var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);

           var emailReg = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
           var valid = pattern.test($(this).val());
           if (!valid) {
               $(this).css('border-color', 'red');
           } else {
               $(this).css('border-color', '');
           }
       }
       else
       {
           $(this).css('border-color', 'red');
       }
    });





    $("form").submit(function (event) {
        // events: required, number, decimal, email_required
        var chk_required = true;
        var chk_email_required = true;
        var chk_email_format = true;
        var chk_pass = true;
        $(this).find('.required').each(function () {
            if ($(this).val() == null || $(this).val().trim() == "") {
                $(this).css('border-color', 'red');
                chk_required = false;
            }
        });  


        $(this).find('.email_required').each(function () {
            if ($(this).val() == null || $(this).val().trim() == "") {
                $(this).css('border-color', 'red');
                chk_email_required = false;
            }
        });

        $(this).find('.email_required').each(function () {
            if ($(this).val() == null || $(this).val().trim() == "") {
                var emailReg = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
                var valid = emailReg.test($(this).val());
                if (!valid)
                {
                    $(this).css('border-color', 'red');
                    chk_email_format = false;
                }
                else
                {
                    $(this).css('border-color', '');
                }

            }
        });
        
     

  $(this).find('.chk_password').each(function () {
            if ($(this).val() == null || $(this).val().trim() == "") {
                $(this).css('border-color', 'red');
                chk_pass = false;
            }
        });
       
        
        $(this).find('.yearvalidate').each(function () {
            var current_year = new Date().getFullYear();
            if ($(this).val() != null && $(this).val().trim() != "")
            {
                if (($(this).val().length == 4) && (Number($(this).val()) <= current_year))
                {
                    $(this).css('border-color', '');
                }
                else
                {
                    $(this).css('border-color', 'red');
                    chk_email_format = false;
                }
            }
        });
        // console.log('chk_required = '+chk_required);
        //  console.log('chk_pass = '+chk_pass);
        //   console.log('chk_email_required = '+chk_email_required);
        //    console.log('chk_email_format = '+chk_email_format);
        if (chk_required == true && chk_pass==true && chk_email_required == true && chk_email_format == true) {
            on();
              // var alldata = $("#register-form").serialize();
              var register_userfname = $('#uname').val();
              var register_email = $('#uemail').val();
              var register_password = $('#upass').val();
              var register_phone = $('#uphone').val();
              var business_name = $('#businessname').val();

              var dataString ='action='+'create_user'+
                '&uname='+register_userfname+
                '&uemail='+register_email+
                '&upassword='+register_password+
                '&businessname='+business_name+
                '&uphone='+register_phone;

            // console.log(alldata);
            // console.log(ajaxurl);
                $.ajax({
                    type:'POST',
                    url: ajaxurl,
                    data: dataString,
                    catch: false,
                    dataType : 'json',
                    success: function(response)
                    {
                         console.log('error:'+response);
                      if(response[0]=='fail')
                          {
                            $('#msg-success').addClass('strong').html(response[1]);
                          }
                      else if(response[0]=='success')
                        {
                          console.log(response[3]);
                            $('#msg-success').addClass('strong').html(response[1]);
                            $("#register-form")[0].reset();
                        }
                      else
                        {
                          $('#msg-success').addClass('strong').html('<div class="alert alert-danger" role="alert">'+
                            '<button style="width: 50px" type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>'+
                                  '<strong>Oh snap!</strong> Something went wrong.</div>');
                        }
                          off();
                    },
                    error: function (response) {
                      console.log(response);
                                      $('#msg-success').addClass('error').html(response);
                                    $("#register-form")[0].reset()
                                    off();
                                }

                  });
    
            return false;

        }
        else //if (chk_required == false || chk_email_required == false || chk_email_format == false) 
        {
                        $('#msg-reg').addClass('error').html('<div class="alert alert-danger alert-dismissable fade in">'+
        '<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>'+
        '<strong>*</strong> Fields are required</div> ');
            event.preventDefault();
        }

    });
});