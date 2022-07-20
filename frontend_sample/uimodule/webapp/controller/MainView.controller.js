sap.ui.define(
  ["./BaseController",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast",
    "sap/ui/core/Fragment",
    "sap/ui/core/Core",
    "sap/ui/core/library",
    "sap/ui/unified/library",
    "sap/ui/unified/DateTypeRange"
  ],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller, JSONModel, MessageToast, Fragment, Core, CoreLibrary, UnifiedLibrary, DateTypeRange) {
    "use strict";
    // var CalendarDayType = UnifiedLibrary.CalendarDayType,
		// ValueState = CoreLibrary.ValueState;    

    return Controller.extend("gitpg.myapp.controller.MainView", {
      onInit: function () {

        this._searchDateSetting()
        // FiscalYear setting
        // var nowYear = nowToday.getFullYear();
        // var nowMonth = nowToday.getMonth()+1;
        var sPostingDate = this.getView().byId("EndMonth");
        // var nowYear = sPostingDate.getDateValue().toLocaleDateString().substring(0,4);
        var nowYear = sPostingDate.getDateValue();        
        // oView.byId("FiscalYear").setValue(nowYear);
        // for(var i = 0; i <= 9; i++) {
        //   (function(j, year) {
        //     oModel.setProperty("/years/"+ j, {key : year, text : year});
        //   })(i, nowYear);
        //   nowYear--;
        // }

        var oDate = new JSONModel();
        oDate.setData({
          dateValue: new Date()
        });
        this.getView().setModel(oDate);
        this.byId("FiscalYear").setDateValue(new Date());
        this.byId("EndMonth").setDateValue(new Date());
        this.byId("WriteDate").setDateValue(new Date());

        var mData = {
          "data": [
            {
              "name": "매출-계산서교부",
              "value": "o05"
            },
            {
              "name":"매입-계산서수취",
              "value": "i05"
            },
            {
              "name":"Exmaple2",
              "value": "013"
            }
          ],
          "category": [
            {
              "name": "기한 내",
              "value": "01"
            },
            {
              "name": "기한 외",
              "value": "02"
            }
          ]
        };

        var sModel = new JSONModel(mData);
        this.getView().setModel(sModel);

        // var oBusy = new sap.m.BusyDialog();
        // var oModel = new JSONModel();
        // oModel.attachRequestSent(function() {
        //   oBusy.open();
        // });
        // oModel.loadData("../model/Data.json");
        // oModel.attachRequestCompleted(function() {
        //   oBusy.close();
        // });
        // this.getView().setModel(oModel, "ListModel")
        

        // let oJson = new JSONModel();
        // this.getView().setModel(oJson, 'myNode');
        // debugger;                                       
        // oJson.loadData(
        //     'http://localhost:8921/files'
        //     // 'https://port-8921-nodejs-polite-ice-leencjr95746045.codeanyapp.com/files'
            
        // ).then(
        //     function () {
        //     }.bind(this)
        // )
        
        // $.ajax(
        //   'http://localhost:8921/files',
        //   //     'https://port-8921-nodejs-quaint-lizard-lgx0920328747.codeanyapp.com/files'
        //   {
        //     method: "GET",
        //     success : function (...params) {
        //         debugger;  
        //     }
        //   }
        // )
      },

      _searchDateSetting : function() {
        var oView = this.getView(),
          today = new Date(),
          todayYear = today.getFullYear(),
          todayMonth = today.getMonth()+1;
          
        var	sPostingDate = oView.byId("PostingDate"),
          sDocumentDate = oView.byId("DocumentDate");
        var defalutDateValue = "",
          defalutSecondDateValue = "";
        
        switch(todayMonth) {
          case 1 :  case 2 : case 3 :
            defalutDateValue = new Date(todayYear-1, 9, 1);
            defalutSecondDateValue = new Date(todayYear-1, 11, 31);
            break;
          case 4 :  case 5 : case 6 :
            defalutDateValue = new Date(todayYear, 0, 1);
            defalutSecondDateValue = new Date(todayYear, 2, 31);
            break;
          case 7 :  case 8 : case 9 :
            defalutDateValue = new Date(todayYear, 3, 1);
            defalutSecondDateValue = new Date(todayYear, 5, 30);
            break;
          case 10 :  case 11 : case 12 :
            defalutDateValue = new Date(todayYear, 6, 1);
            defalutSecondDateValue = new Date(todayYear, 8, 30);
            break;				
        }
        sPostingDate.setDateValue(defalutDateValue);
        sPostingDate.setSecondDateValue(defalutSecondDateValue);
        sDocumentDate.setDateValue(defalutDateValue);
        sDocumentDate.setSecondDateValue(defalutSecondDateValue);
      },

      onPress: function(oEvent){
        var msg = "";
        MessageToast.show(msg);
      },
      onCreate: function(oEvent){
        // test1
        // var stitle = this.getView().byId("input1");
        // var scontent = sap.ui.getCore().byId("input2").getValue();
        // test2
        // let that=this
        // Fragment.load({
        //   name : "gitpg.myapp.view.fragments.list1",
        //   controller: this,
        //   id: "tableFragment"
        // }).then(function (pFragment){
        //   this.oFragment = pFragment;
        // })
        // debugger;
        // var stitle = sap.ui.core.Fragment.byId("tableFragment","input1").getValue();
        // oModel.setProperty({stitle},)
        // debugger;
        //dialog에서 정의한 input 값을 가져오기 위해 getcore로 접근
        var oInput1 = sap.ui.getCore().byId("input1").getValue();
        var oInput2 = sap.ui.getCore().byId("input2").getValue();
        alert(oInput);


      },

      onPressList: function(oEvent){
        var sIdRaiseEvent = oEvent.getSource().getId();

        var sIdLink1 = this.getView().byId('list1').getId();
        var sIdLink2 = this.getView().byId('list2').getId();
        var sIdLink3 = this.getView().byId('list3').getId();
        var sIdLink4 = this.getView().byId('list4').getId();
        var sIdLink5 = this.getView().byId('list5').getId();
        var sIdLink6 = this.getView().byId('link1').getId();
      
        
        var pFragment;
        if(sIdRaiseEvent === sIdLink1){
          pFragment = Fragment.load(
            {
              name : "gitpg.myapp.view.fragments.list1",
              type : "XML",
              id : "list1Fragment",
              controller : this
            }
          )
        } else if (sIdRaiseEvent === sIdLink2){
          pFragment = Fragment.load(
            {
              name : "gitpg.myapp.view.fragments.list2",
              type : "XML",
              id : "list2Fragment",
              controller : this
            }
          )
        } else if (sIdRaiseEvent === sIdLink3){
          pFragment = Fragment.load(
            {
              name : "gitpg.myapp.view.fragments.list3",
              type : "XML",
              id : "list3Fragment",
              controller : this
            }
          )
        } else if (sIdRaiseEvent === sIdLink4){
          pFragment = Fragment.load(
            {
              name : "gitpg.myapp.view.fragments.list4",
              type : "XML",
              id : "list4Fragment",
              controller : this
            }
          )
        } else if (sIdRaiseEvent === sIdLink5){
          pFragment = Fragment.load(
            {
              name : "gitpg.myapp.view.fragments.list5",
              type : "XML",
              id : "list5Fragment",
              controller : this
            }
          )
        } else if (sIdRaiseEvent === sIdLink6){
          pFragment = Fragment.load(
            {
              name : "gitpg.myapp.view.fragments.home",
              type : "XML",
              id : "list6Fragment",
              controller : this
            }
          )
        }
        pFragment.then(function (oView){
          var oMyExtend = this.getView().byId("myExtend")

          oMyExtend.destroyItems();
          oMyExtend.addItem(oView);

        }.bind(this));
      }      
    });
  }
);