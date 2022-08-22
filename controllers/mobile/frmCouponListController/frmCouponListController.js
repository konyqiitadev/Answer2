define({ 

  coupon_data : [
    {
      "item_image" : "spicy_red_soup_beef_noodle_bowl_wooden_table.png",
      "store_name" : "おいしいラーメン店 東京駅前店",
      "coupon_rate" : "10%OFF",
      "coupon_deadline" : "2021年3月31日 23:59まで",
      "coupon_detail_title" : "【初回限定】新規登録クーポン",
      "coupon_details" : "期間限定で対象のラーメンが10%OFF！！この機会にお好きなラーメンをご注文ください。",
    },
    {
      "item_image" : "pork_ramen.png",
      "store_name" : "おいしいラーメン店 神田店",
      "coupon_rate" : "50%OFF",
      "coupon_deadline" : "2021年5月31日 23:59まで",
      "coupon_detail_title" : "【紹介割】お友達クーポン",
      "coupon_details" : "安いよ！安いよ！この機会に食べてみて！",
    },
    {
      "item_image" : "thai_ramen.png",
      "store_name" : "おいしいラーメン店 東京駅前店",
      "coupon_rate" : "20%OFF",
      "coupon_deadline" : "2021年8月31日 23:59まで",
      "coupon_detail_title" : "【期間限定】10周年記念クーポン",
      "coupon_details" : "美味しいラーメンいかがですか？",
    },
    {
      "item_image" : "spicy_red_soup_beef_noodle_bowl_wooden_table.png",
      "store_name" : "おいしいラーメン店 東京駅前店",
      "coupon_rate" : "50%OFF",
      "coupon_deadline" : "2022年10月31日 23:59まで",
      "coupon_detail_title" : "【リピーター様向け】特別割引クーポン",
      "coupon_details" : "長らくご愛顧いただいているお客様限定のお得なクーポンです！この機会に新しい味に挑戦してみてください！",
    },
    {
      "item_image" : "thai_ramen.png",
      "store_name" : "おいしいラーメン店 東京駅前店",
      "coupon_rate" : "10%OFF",
      "coupon_deadline" : "2022年9月31日 23:59まで",
      "coupon_detail_title" : "【初回限定】新規登録クーポン",
      "coupon_details" : "美味しいラーメン！",
    },
  ],
  
  preShow : function(){
    // ウィジェットとデータのマッピングを行う
    this.view.segList.widgetDataMap = {
      lblStoreName : "store_name",
      lblCouponRate : "coupon_rate",
      lblCouponDeadline : "coupon_deadline",
      lblCouponDetail : "coupon_detail_title",
      imgRamen : "item_image"
    }; 
    // データをSegmentにセットする
    this.view.segList.setData(this.coupon_data);
  },

  onClickList : function(){
    var param = this.view.segList.selectedRowItems;
    kony.print("_______" + JSON.stringify(param));
    var x = new kony.mvc.Navigation("frmCouponDetail");
    x.navigate(param); 
  }
 });