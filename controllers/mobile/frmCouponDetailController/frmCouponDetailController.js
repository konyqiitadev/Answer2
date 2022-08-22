define({ 

 //Type your controller code here 
  
  onNavigate : function(params) {
    kony.print("______________param" + JSON.stringify(params));
    var data = params[0];
    this.view.imgFood.src = data.item_image;
    this.view.lblStoreName.text = data.store_name;
    this.view.lblCouponRate.text = data.coupon_rate;
    this.view.lblCouponTime.text = data.coupon_deadline;
    this.view.lblCouponName.text = data.coupon_detail_title;
    this.view.lblCouponDetail.text = data.coupon_details;
  },
  
  onClickReturn : function(){
    var x = new kony.mvc.Navigation("frmCouponList");
    x.navigate(); 
  }

  
 });