/* svn info: $Revision: 1419 $ $Date: 2019-04-26 14:20:48 +0800 (Fri, 26 Apr 2019) $ */
var setWanSettings=new SOAPSetWanSettings,setWLanRadioSettings_24g=new SOAPSetWLanRadioSettings,setWLanRadioSecurity_24g=new SOAPSetWLanRadioSecurity,setWLanRadioSettings_5g=new SOAPSetWLanRadioSettings,setWLanRadioSecurity_5g=new SOAPSetWLanRadioSecurity,setWLanRadioSettings_5g2=new SOAPSetWLanRadioSettings,setWLanRadioSecurity_5g2=new SOAPSetWLanRadioSecurity;function set_wlanSettings(e,t,n){e.RadioID=n,e.Enabled=!0,e.SSID="",e.SSIDBroadcast=!0,e.Channel="0",e.SecondaryChannel="0",e.QoS=!0,e.ScheduleName="",e.TXPower="100",e.Coexistence=!0,t.RadioID=n,t.Enabled=!0,t.Type="WPAORWPA2-PSK",t.Encryption="TKIPORAES",t.Key="",t.KeyRenewal="3600",t.RadiusIP1="",t.RadiusPort1="",t.RadiusSecret1="",t.RadiusIP2="",t.RadiusPort2="",t.RadiusSecret2="","RADIO_2.4GHz"==n?(e.Mode="802.11bgn",e.ChannelWidth="0"):(e.Mode="802.11anac",e.ChannelWidth="1")}set_wlanSettings(setWLanRadioSettings_24g,setWLanRadioSecurity_24g,"RADIO_2.4GHz"),set_wlanSettings(setWLanRadioSettings_5g,setWLanRadioSecurity_5g,"RADIO_5GHz"),set_wlanSettings(setWLanRadioSettings_5g2,setWLanRadioSecurity_5g2,"RADIO_5GHz_2");