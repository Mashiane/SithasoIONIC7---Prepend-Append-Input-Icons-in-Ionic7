var _banano_si7inputprependappendicons=new banano_si7inputprependappendicons();var _banano_sithasoionic7_modsithasoionic=new banano_sithasoionic7_modsithasoionic();var _banano_si7inputprependappendicons_pghome=new banano_si7inputprependappendicons_pghome();var _banano_si7inputprependappendicons_pgindex=new banano_si7inputprependappendicons_pgindex();
/* App */
function banano_si7inputprependappendicons_pghome() {var _B;this._app= new banano_sithasoionic7_ionicapp();this._name="home";this._title="SithasoIONIC7";this._icon="logo-ionic";this._path="/";this._color="";this._home= new banano_sithasoionic7_shiontab();this._nameitem= new banano_sithasoionic7_shionitem();this._txtname= new banano_sithasoionic7_shioninput();this._nameicon= new banano_sithasoionic7_shionicon();this._nameiconleft= new banano_sithasoionic7_shionicon();this._mobilenumberitem= new banano_sithasoionic7_shionitem();this._txtnumber= new banano_sithasoionic7_shioninput();this._telicon= new banano_sithasoionic7_shionicon();this._teliconstart= new banano_sithasoionic7_shionicon();this._emailitem= new banano_sithasoionic7_shionitem();this._txtemail= new banano_sithasoionic7_shioninput();this._emailicon= new banano_sithasoionic7_shionicon();this._emailiconstart= new banano_sithasoionic7_shionicon();this._testinput= new banano_sithasoionic7_shioninput();this._testicon= new banano_sithasoionic7_shionicon();this.initialize=function(_ionapp) {if (_B==null) _B=this;_B._app=_ionapp;_B._home.initialize(_B,"home","home");_B._home.settitle("SithasoIONIC7");_B._home.settab("home");_B._home.sethasheader(true);_B._home.setmenubuttonautohide(false);_B._home.setcontentionpadding(true);_B._home.addtoparent("mainpagetabs",_B._home._custprops);_B._name=_B._home.getpgname();_B._title=_B._home.getpgtitle();_B._icon=_B._home.getpgicon();_B._path=_B._home.getpgpath();_B._color=_B._home.getpgiconcolor();_B._nameitem.initialize(_B,"nameitem","nameitem");_B._nameitem.setlines("none");_B._nameitem.setelevation("");_B._nameitem.setrawstyles("margin-bottom:10px; border: 1px solid #eac402; border-radius:5px");_B._nameitem.addtoparent("homecontent",_B._nameitem._custprops);_B._txtname.initialize(_B,"txtname","txtname");_B._txtname.setautofocus(true);_B._txtname.setclearinput(true);_B._txtname.setclearonedit(true);_B._txtname.setcolor("primary");_B._txtname.setplaceholder("Enter your name");_B._txtname.setrequired(true);_B._txtname.addtoparent("nameitem",_B._txtname._custprops);_B._nameicon.initialize(_B,"nameicon","nameicon");_B._nameicon.setcolor("primary");_B._nameicon.setname("person");_B._nameicon.setslot("end");_B._nameicon.setelevation("");_B._nameicon.addtoparent("nameitem",_B._nameicon._custprops);_B._nameiconleft.initialize(_B,"nameiconleft","nameiconleft");_B._nameiconleft.setcolor("primary");_B._nameiconleft.setname("person");_B._nameiconleft.setslot("start");_B._nameiconleft.setelevation("");_B._nameiconleft.addtoparent("nameitem",_B._nameiconleft._custprops);_B._mobilenumberitem.initialize(_B,"mobilenumberitem","mobilenumberitem");_B._mobilenumberitem.setlines("none");_B._mobilenumberitem.setelevation("");_B._mobilenumberitem.setrawstyles("margin-bottom:10px; border: 1px solid #eac402; border-radius:5px");_B._mobilenumberitem.addtoparent("homecontent",_B._mobilenumberitem._custprops);_B._txtnumber.initialize(_B,"txtnumber","txtnumber");_B._txtnumber.setclearinput(true);_B._txtnumber.setclearonedit(true);_B._txtnumber.setcolor("primary");_B._txtnumber.setplaceholder("Enter your number");_B._txtnumber.setrequired(true);_B._txtnumber.settypeof("number");_B._txtnumber.addtoparent("mobilenumberitem",_B._txtnumber._custprops);_B._telicon.initialize(_B,"telicon","telicon");_B._telicon.setcolor("primary");_B._telicon.setname("call");_B._telicon.setslot("end");_B._telicon.setelevation("");_B._telicon.addtoparent("mobilenumberitem",_B._telicon._custprops);_B._teliconstart.initialize(_B,"teliconstart","teliconstart");_B._teliconstart.setcolor("primary");_B._teliconstart.setname("call");_B._teliconstart.setslot("start");_B._teliconstart.setelevation("");_B._teliconstart.addtoparent("mobilenumberitem",_B._teliconstart._custprops);_B._emailitem.initialize(_B,"emailitem","emailitem");_B._emailitem.setlines("none");_B._emailitem.setelevation("");_B._emailitem.setrawstyles("margin-bottom:10px; border: 2px solid #eac402; border-radius:23px");_B._emailitem.addtoparent("homecontent",_B._emailitem._custprops);_B._txtemail.initialize(_B,"txtemail","txtemail");_B._txtemail.setclearinput(true);_B._txtemail.setclearonedit(true);_B._txtemail.setcolor("primary");_B._txtemail.setplaceholder("Enter your email");_B._txtemail.setrequired(true);_B._txtemail.settypeof("email");_B._txtemail.addtoparent("emailitem",_B._txtemail._custprops);_B._emailicon.initialize(_B,"emailicon","emailicon");_B._emailicon.setcolor("primary");_B._emailicon.setname("mail");_B._emailicon.setslot("end");_B._emailicon.setelevation("");_B._emailicon.addtoparent("emailitem",_B._emailicon._custprops);_B._emailiconstart.initialize(_B,"emailiconstart","emailiconstart");_B._emailiconstart.setcolor("primary");_B._emailiconstart.setname("mail");_B._emailiconstart.setslot("start");_B._emailiconstart.setelevation("");_B._emailiconstart.addtoparent("emailitem",_B._emailiconstart._custprops);_B._testinput.initialize(_B,"testinput","testinput");_B._testinput.setclearinput(true);_B._testinput.setclearonedit(true);_B._testinput.setcolor("primary");_B._testinput.setplaceholder("Test input");_B._testinput.setrequired(true);_B._testinput.settypeof("email");_B._testinput.addtoparent("homecontent",_B._testinput._custprops);_B._testicon.initialize(_B,"testicon","testicon");_B._testicon.setcolor("primary");_B._testicon.setname("eye-outline");_B._testicon.setsize("large");_B._testicon.setslot("end");_B._testicon.setelevation("");_B._testicon.addtoparent("testinput",_B._testicon._custprops);_B._app.addpagepath(_B._name,_B._title,_B._icon,_B._path);_B.buildpage(_B);};this.show=function() {if (_B==null) _B=this;_B._app.navigateto(_B._path,"forward");};this.getname=function() {if (_B==null) _B=this;return _B._name;};this.geticon=function() {if (_B==null) _B=this;return _B._icon;};this.gettitle=function() {if (_B==null) _B=this;return _B._title;};this.getpath=function() {if (_B==null) _B=this;return _B._path;};this.getcolor=function() {if (_B==null) _B=this;return _B._color;};this.buildpage=function() {if (_B==null) _B=this;};}function banano_si7inputprependappendicons_pgindex() {var _B;this._app= new banano_sithasoionic7_ionicapp();this._maincontent= new banano_sithasoionic7_shioncontent();this._mainpage= new banano_sithasoionic7_shionpage();this.initialize=function() {if (_B==null) _B=this;_B._app.initialize(_B,"ios");_B._app.addapprouter();_B._maincontent.initialize(_B,"maincontent","maincontent");_B._maincontent.setionpage(false);_B._maincontent.addtoparent("app",_B._maincontent._custprops);_B._mainpage.initialize(_B,"mainpage","mainpage");_B._mainpage.setroutername("");_B._mainpage.setpath("");_B._mainpage.sethastabs(true);_B._mainpage.addtoparent("maincontent",_B._mainpage._custprops);_B._app._pageviewer=_B._mainpage._pagetabsid;await _B.addpages(_B);_B.adddraweritems(_B);_B.addpagetabs(_B);_banano_si7inputprependappendicons_pghome.show();};this.addpages=function() {if (_B==null) _B=this;_banano_si7inputprependappendicons_pghome.initialize(_B._app);};this.adddraweritems=function() {if (_B==null) _B=this;};this.addpagetabs=function() {if (_B==null) _B=this;};this.app_ionroutedidchange=function(_e) {if (_B==null) _B=this;var _frompage,_topage;console.log("app_IonRouteDidChange");_frompage=_B._app.getnavigatingfrom(_e);_topage=_B._app.getnavigatingto(_e);console.log(_frompage);console.log(_topage);switch ("" + _topage) {case "" + "home":break;}};this.app_ionroutewillchange=function(_e) {if (_B==null) _B=this;var _frompage,_topage;console.log("app_IonRouteWillChange");_frompage=_B._app.getnavigatingfrom(_e);_topage=_B._app.getnavigatingto(_e);console.log(_frompage);console.log(_topage);switch ("" + _topage) {case "" + "home":break;}};}function banano_si7inputprependappendicons() {var _B;this._appname="sithasoionic7inputicons";this._apptitle="SithasoIONIC7 Input Icons";this._publish="C:\laragon\www";this._version="0.01";this._serverip="";this.banano_ready=function() {if (_B==null) _B=this;_banano_si7inputprependappendicons_pgindex.initialize();};}function banano_sithasoionic7_page() {var _B=this;_B._name="";_B._title="";_B._icon="";_B._path="";_B.initialize=function() {};}function banano_sithasoionic7_profiletype() {var _B=this;_B._id="";_B._name="";_B._verified=false;_B._email="";_B._token="";_B._avatar="";_B._username="";_B._size=0;_B.initialize=function() {};}function banano_sithasoionic7_fileobject() {var _B=this;_B._filename="";_B._filedate="";_B._filesize=0;_B._filetype="";_B._status="";_B._fullpath="";_B._filedateonly="";_B._fileok=false;_B._fo=null;_B._extension="";_B.initialize=function() {};}function banano_sithasoionic7_gmaplatlng() {var _B=this;_B._lat=0;_B._lng=0;_B.initialize=function() {};}function banano_sithasoionic7_gridrow() {var _B=this;_B._rows=0;_B._columns=[];_B._gma="";_B._gmx="";_B._gmy="";_B._gmt="";_B._gmb="";_B._gmr="";_B._gml="";_B._gpa="";_B._gpx="";_B._gpy="";_B._gpt="";_B._gpb="";_B._gpr="";_B._gpl="";_B.initialize=function() {};}function banano_sithasoionic7_gridcolumn() {var _B=this;_B._columns=0;_B._gxs="";_B._gsm="";_B._gmd="";_B._glg="";_B._gxl="";_B._ofxs="";_B._ofsm="";_B._ofmd="";_B._oflg="";_B._ofxl="";_B._gma="";_B._gmx="";_B._gmy="";_B._gmt="";_B._gmb="";_B._gmr="";_B._gml="";_B._gpa="";_B._gpx="";_B._gpy="";_B._gpt="";_B._gpb="";_B._gpr="";_B._gpl="";_B.initialize=function() {};}function banano_sithasoionic7_prefitem() {var _B=this;_B._title={};_B._itemtype=0;_B._extra={};_B._key="";_B._required=false;_B._component={};_B._value={};_B._isbuilt=false;_B._visible=false;_B._disabled=false;_B.initialize=function() {};}function banano_sithasoionic7_storage() {var _B=this;_B._usage=0;_B._quota=0;_B._percentused=0;_B._remaining=0;_B.initialize=function() {};}window.addEventListener('online', function() {if (typeof _banano_si7inputprependappendicons['banano_online']==="function") {_banano_si7inputprependappendicons.banano_online();}});window.addEventListener('offline', function() {if (typeof _banano_si7inputprependappendicons['banano_offline']==="function") {_banano_si7inputprependappendicons.banano_offline();}});var BANversion=1702399544857;window.document.addEventListener("readystatechange", BANLoadChecker, true);function BANLoadChecker() {if (window.document.readyState=="complete") {_banano_si7inputprependappendicons.banano_ready();}}var hidden, visibilityChange;if (typeof document.hidden !== "undefined") {hidden = "hidden";visibilityChange = "visibilitychange";} else if (typeof document.msHidden !== "undefined") {hidden = "msHidden";visibilityChange = "msvisibilitychange";} else if (typeof document.webkitHidden !== "undefined") {hidden = "webkitHidden";visibilityChange = "webkitvisibilitychange";}function handleVisibilityChange() {if (document[hidden]) {if (typeof _banano_si7inputprependappendicons['banano_visibilitychanged']==="function") {_banano_si7inputprependappendicons.banano_visibilitychanged(false);}} else {if (typeof _banano_si7inputprependappendicons['banano_visibilitychanged']==="function") {_banano_si7inputprependappendicons.banano_visibilitychanged(true);}}};if (typeof document.addEventListener === "undefined" || hidden === undefined) {console.log("This requires a browser, such as Google Chrome or Firefox, that supports the Page Visibility API.");} else {document.addEventListener(visibilityChange, handleVisibilityChange, false);}