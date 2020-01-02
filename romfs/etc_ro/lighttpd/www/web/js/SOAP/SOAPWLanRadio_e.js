/* svn info: $Revision: 999 $ $Date: 2018-08-03 20:38:57 +0800 (Fri, 03 Aug 2018) $ */
function SOAPSecurityInfo(){this.SecurityType="",this.Encryptions=new Array}function SOAPSupportedSecurity(){var t=new SOAPSecurityInfo;this.SecurityInfo=$.makeArray(t)}function SOAPRadioInfo(){this.RadioID="",this.Frequency=2,this.SupportedModes=new Array,this.Channels=new Array,this.SupportedSecurity=new SOAPSupportedSecurity}function SOAPRadioInfos(){var t=new SOAPRadioInfo;this.RadioInfo=$.makeArray(t)}function SOAPGetWLanRadiosResponse(){this.RadioInfos=new SOAPRadioInfos}function SOAPGetWLanRadioSettings(){this.RadioID=""}function SOAPGetWLanRadioSettingsResponse(){this.Enabled="",this.Mode="",this.MacAddress="",this.SSID="",this.SSIDBroadcast="",this.ChannelWidth="",this.Channel="",this.SecondaryChannel="",this.QoS="",this.ScheduleName="",this.TXPower="",this.RadioEnabled="",this.Coexistence=""}function SOAPGetWLanRadioSecurity(){this.RadioID=""}function SOAPGetWLanRadioSecurityResponse(){this.Enabled="",this.Type="",this.Encryption="",this.Key="",this.KeyRenewal="",this.RadiusIP1="",this.RadiusPort1="",this.RadiusSecret1="",this.RadiusIP2="",this.RadiusPort2="",this.RadiusSecret2=""}function SOAPSetWLanRadioSettings(){this.RadioID="",this.Enabled=!0,this.Mode="",this.SSID="",this.SSIDBroadcast=!0,this.ChannelWidth="",this.Channel="0",this.SecondaryChannel="0",this.QoS=!1,this.ScheduleName="",this.TXPower="",this.Coexistence=!1}function SOAPSetWLanRadioSecurity(){this.RadioID="",this.Enabled=!0,this.Type="",this.Encryption="",this.Key="",this.KeyRenewal="",this.RadiusIP1="",this.RadiusPort1="",this.RadiusSecret1="",this.RadiusIP2="",this.RadiusPort2="",this.RadiusSecret2=""}function SOAPGetSmartconnectSettingsResponse(){this.Enabled=""}function SOAPSetSmartconnectSettings(){this.Enabled=!1}function SOAPGetGuestZoneRouterSettingsResponse(){this.InternetAccessOnly=!1,this.IPAddress="",this.SubnetMask="",this.DHCPServer="",this.DHCPRangeStart="",this.DHCPRangeEnd="",this.DHCPLeaseTime=0}function SOAPSetGuestZoneRouterSettings(){this.InternetAccessOnly=!1,this.IPAddress="",this.SubnetMask="",this.DHCPServer="",this.DHCPRangeStart="",this.DHCPRangeEnd="",this.DHCPLeaseTime=0}function SOAPGetWPSSettingsResponse(){this.WPSPBC=!1,this.WPSPIN=!1}function SOAPSetWPSSettings(){this.WPSPBC=!1,this.WPSPIN=!1}function SOAPOperationModeInfo(){this.RadioID="",this.CurrentOPMode="",this.AvailableOPMode=new Array}function SOAPOperationModeList(){this.OperationModeInfo=new SOAPOperationModeInfo}function SOAPGetOperationModeResponse(){var t=new SOAPOperationModeList;this.OperationModeList=$.makeArray(t)}function SOAPGetAPClientSettings(){this.RadioID=""}function SOAPGetAPClientSettingsResponse(){this.Enabled="",this.SSID="",this.MacAddress="",this.ChannelWidth="",this.SupportedSecurity=new SOAPSupportedSecurity,this.Key=""}function SOAPSetAPClientSettings(){this.RadioID="",this.Enabled=!0,this.SSID="",this.MacAddress="",this.ChannelWidth=0,this.SupportedSecurity=new SOAPSupportedSecurity,this.Key=""}function SOAPSetOperationMode(){this.RadioID="",this.CurrentOPMode=""}function SOAPSetTriggerWPS(){this.ACTION="PBC",this.PIN="",this.Duration=""}function SOAPSetTriggerWPSResponse(){this.WaitTime=""}function SOAPWPSStatus(){this.RadioID="",this.Status=""}function SOAPWPSStatusLists(){var t=new SOAPWPSStatus;this.WPSStatus=$.makeArray(t)}function SOAPGetWPSStatusResponse(){this.WPSStatusLists=new SOAPWPSStatusLists}function SOAPSetTriggerWirelessSiteSurvey(){this.RadioID=""}function SOAPSetTriggerWirelessSiteSurveyResponse(){this.WaitTime=""}function SOAPAPStatInfo(){this.SSID="",this.MacAddress="",this.SupportedSecurity=new SOAPSupportedSecurity,this.Channel="",this.SignalStrength=""}function SOAPAPStatInfoLists(){var t=new SOAPAPStatInfo;this.APStatInfo=$.makeArray(t)}function SOAPGetSiteSurvey(){this.RadioID=""}function SOAPGetSiteSurveyResponse(){this.APStatInfoLists=new SOAPAPStatInfoLists}function SOAPSetTriggerAPValidate(){this.RadioID="",this.Enabled=!0,this.SSID="",this.BSSID="",this.Channel="",this.Key=""}SOAPGetWLanRadioSettingsResponse.prototype={get ScheduleName(){return this._ScheduleName},set ScheduleName(t){""==t||"always"==t.toLowerCase()?this._ScheduleName="Always":this._ScheduleName=t}},SOAPGetWLanRadioSecurityResponse.prototype={get Key(){return""==this._Key?"":AES_Decrypt128(this._Key)},get RadiusSecret1(){return""==this._RadiusSecret1?"":AES_Decrypt128(this._RadiusSecret1)},get RadiusSecret2(){return""==this._RadiusSecret2?"":AES_Decrypt128(this._RadiusSecret2)},set Key(t){this._Key=t},set RadiusSecret1(t){this._RadiusSecret1=t},set RadiusSecret2(t){this._RadiusSecret2=t}},SOAPSetWLanRadioSecurity.prototype={get Key(){return 0==this.Enabled?"":this._Key},get RadiusSecret1(){return 0==this.Enabled||""==this.RadiusIP1?"":this._RadiusSecret1},get RadiusSecret2(){return 0==this.Enabled||""==this.RadiusIP2?"":this._RadiusSecret2},set Key(t){this._Key=AES_Encrypt128(t)},set RadiusSecret1(t){this._RadiusSecret1=AES_Encrypt128(t)},set RadiusSecret2(t){this._RadiusSecret2=AES_Encrypt128(t)}},SOAPGetAPClientSettingsResponse.prototype={get Key(){return AES_Decrypt128(this._Key)},set Key(t){this._Key=t}},SOAPSetAPClientSettings.prototype={get Key(){return this._Key},set Key(t){this._Key=AES_Encrypt128(t)}},SOAPSetTriggerAPValidate.prototype={get Key(){return this._Key},set Key(t){this._Key=AES_Encrypt128(t)}};