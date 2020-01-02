/* svn info: $Revision: 847 $ $Date: 2018-06-06 18:37:11 +0800 (Wed, 06 Jun 2018) $ */
function Datalist(){this.list=new Array,this.maxrowid=0}function Data(t,s,e,i,r,a,n,l){this.name=t,this.srcInterface=s,this.dstInterface=i,this.protocol=a,this.schedule=this.parseScheduleName(l);var o=this.parseRange(e);this.srcIPstart=o[0],this.srcIPend=o[1];var h=this.parseRange(r);this.dstIPstart=h[0],this.dstIPend=h[1];var c=this.parseRange(n);this.portStart=c[0],this.portEnd=c[1]}Datalist.prototype.getData=function(t){var s,e;for(s=0;s<this.list.length&&(e=this.list[s]).rowid!=t;s++);return e},Datalist.prototype.getRowNum=function(t){var s=0;for(s=0;s<this.list.length&&t!=this.list[s].rowid;s++);return s},Datalist.prototype.editData=function(t,s){var e=this.getRowNum(t);return 0!=this.checkData(s,e)&&(s.setRowid(t),this.list.splice(e,1,s),s.setDataToRow($("#tr"+s.rowid)),!0)},Datalist.prototype.deleteData=function(t){var s=this.getRowNum(t);this.list.splice(s,1),$("#tr"+t).remove()},Datalist.prototype.push=function(t){return 0!=this.checkData(t,null)&&(t.setRowid(this.maxrowid),this.list.push(t),this.maxrowid++,t.addRowToHTML("tblFirewall"),!0)},Datalist.prototype.checkData=function(t,s){var e;for(e=0;e<this.list.length;e++)if(e!=s){if(this.list[e].name==t.name)return alert(I18N("j","Name cannot be the same.")),!1;if(this.list[e].srcInterface==t.srcInterface&&this.list[e].srcIPstart==t.srcIPstart&&this.list[e].srcIPend==t.srcIPend&&this.list[e].dstInterface==t.dstInterface&&this.list[e].dstIPstart==t.dstIPstart&&this.list[e].dstIPend==t.dstIPend&&this.list[e].protocol==t.protocol&&this.list[e].portStart==t.portStart&&this.list[e].portEnd==t.portEnd&&this.list[e].schedule==t.schedule)return alert(I18N("j","Rule cannot be the same.")),!1}return!0},Datalist.prototype.length=function(){return this.list.length},Data.prototype={rowid:null,name:null,srcInterface:null,srcIPstart:null,srcIPend:null,dstInterface:null,dstIPstart:null,dstIPend:null,protocol:null,portStart:null,portEnd:null,schedule:null,setRowid:function(t){this.rowid=t},parseScheduleName:function(t){var s=t;return"always"!=s.toLowerCase()&&""!=s||(s="Always"),s},parseRange:function(t){var s=new Array;return null!=(s=t.split("-"))[0]&&""!=s[0]||(s[0]=s[1],s[1]=null),null==s[1]&&(s[1]=""),s},showName:function(){return HTMLEncode(this.name)},showSchedule:function(){return"Always"==this.schedule||""==this.schedule?I18N("j","Always"):AllEncode(decode_char_text(this.schedule))},addRowToHTML:function(t){var s;s="<tr id='tr"+this.rowid+"'></tr>",$("#"+t+"> tbody").append(s),this.setDataToRow($("#tr"+this.rowid))},setDataToRow:function(t){var s;s="<td>"+this.showName()+"</td>",s+="<td>"+this.showSchedule()+"</td>",s+="<td><img src='image/edit_btn.png?v=2fc10c4616' width=28 height=28 style='cursor:pointer' onclick='editData("+this.rowid+")'/></td>",s+="<td><img src='image/trash.png?v=8fee37bb10' width=41 height=41 style='cursor:pointer' onclick='deleteData("+this.rowid+")'/></td>",t.html(s)},createRange:function(t,s){var e=t;return""!=s&&null!=s&&(e+="-"+s),e}};