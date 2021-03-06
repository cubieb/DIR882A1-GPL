#
#	Makefile -- Build instructions for user level apps
#

.EXPORT_ALL_VARIABLES:
.PHONY: config all romfs clean prune romfs.post

#
# Include architecture specific build rules.
#
ifndef ROOTDIR
ROOTDIR=..
endif

UCLINUX_BUILD_USER=1
-include $(LINUX_CONFIG)
-include $(CONFIG_CONFIG)
-include $(BUSYBOX_CONFIG)
-include $(ARCH_CONFIG)
-include $(MODULES_CONFIG)

VEND=$(ROOTDIR)/vendors

#
# must run the vendor build first
#
dir_v = $(VEND)/$(CONFIG_VENDOR)/$(CONFIG_PRODUCT)/.
dir_p = $(ROOTDIR)/prop

dir_y = 
dir_n =
dir_  =
dir_post_inst_y =

#dir_y+=apps
dir_$(CONFIG_USER_802_1X)		    += 802.1x
dir_$(CONFIG_SIGMA_DUT)		    	+= sigma_dut_v9.0.0
#dir_$(CONFIG_SIGMA_DUT)		    	+= sigma_dut
dir_$(CONFIG_USER_ACCEL_PPTP)		    += accel-pptp
dir_$(CONFIG_USER_ARPTABLES)		    += arptable-0.0.3
dir_$(CONFIG_USER_BIGPOND) 		    += bigpond
dir_$(CONFIG_USER_BONNIE)		    += bonnie++
dir_$(CONFIG_USER_BRCTL_BRCTL)              += bridge-utils
dir_$(CONFIG_USER_BT_UTILS)                 += bt-utils
dir_$(CONFIG_USER_BUSYBOX_BUSYBOX)          += busybox
dir_$(CONFIG_USER_CACHEBENCH)		    += llcbench/cachebench
dir_$(CONFIG_USER_CPU)			    += cpu
dir_$(CONFIG_USER_CTORRENT)                 += ctorrent-dnh3.2
dir_$(CONFIG_USER_DHCP6)                    += dhcp6
dir_$(CONFIG_USER_DROPBEAR)                 += dropbear-0.52
dir_$(CONFIG_DHRYSTONE)		    	    += dhrystone
dir_$(CONFIG_DHCPFWD)		    	    += dhcpforwarder
dir_$(CONFIG_USER_DNSMASQ)                  += dnsmasq
dir_$(CONFIG_USER_LLMNR_NBNS)               += llmnr_nbns
dir_$(CONFIG_USER_MDNS)               += mDNSResponder
dir_$(CONFIG_USER_DISKTYPE)		    += disktype-9
dir_$(CONFIG_USER_EBTABLES)		    += ebtables-v2.0.9-2
dir_$(CONFIG_USER_ECMH)			    += ecmh
dir_$(CONFIG_USER_ETHTOOL)		    += ethtool
dir_$(CONFIG_USER_GDBREPLAY)                += gdbserver
dir_$(CONFIG_USER_GDBSERVER)                += gdbserver
dir_$(CONFIG_USER_MATRIXSSL)                += matrixssl-1.8.3
dir_$(CONFIG_USER_MINIDLNA)                 += minidlna
dir_$(CONFIG_USER_NBENCH)                   += nbench-byte-2.2.3
dir_$(CONFIG_USER_HOSTAPD)		    += hostapd-2.2/hostapd
ifeq ($(CONFIG_LINUXDIR), linux-2.6.21.x)
ifeq ($(CONFIG_RALINKAPP_SWQOS),y)
dir_$(CONFIG_USER_IPTABLES_IPTABLES)	    += iptables-1.4.0rc1
dir_$(CONFIG_USER_IPTABLES_IP6TABLES)	    += iptables-1.4.0rc1
else
dir_$(CONFIG_USER_IPTABLES_IPTABLES)   	    += iptables
dir_$(CONFIG_USER_IPTABLES_IP6TABLES)	    += iptables
endif
else #linux 2.4 or linux 2.6.36 or Linux 3.10.14 or Linux 3.10.20

ifeq ($(CONFIG_LINUXDIR), linux-2.6.36.x)
dir_$(CONFIG_USER_IPTABLES_IPTABLES)	    += iptables-1.4.10
dir_$(CONFIG_USER_IPTABLES_IP6TABLES)	    += iptables-1.4.10
else
ifeq ($(CONFIG_LINUXDIR), linux-2.6.36MT.x)
dir_$(CONFIG_USER_IPTABLES_IPTABLES)	    += iptables-1.4.10
dir_$(CONFIG_USER_IPTABLES_IP6TABLES)	    += iptables-1.4.10
else
ifeq ($(CONFIG_LINUXDIR), linux-3.10.14.x)
ifeq ($(CONFIG_MCAFEE_SUPPORT), y)
dir_$(CONFIG_USER_IPTABLES_IPTABLES)        += iptables-1.4.20
dir_$(CONFIG_USER_IPTABLES_IP6TABLES)       += iptables-1.4.20
else
dir_$(CONFIG_USER_IPTABLES_IPTABLES)        += iptables-1.4.20_ext
dir_$(CONFIG_USER_IPTABLES_IP6TABLES)       += iptables-1.4.20_ext
endif
else
ifeq ($(CONFIG_LINUXDIR), linux-3.10.20.x)
dir_$(CONFIG_USER_IPTABLES_IPTABLES)	    += iptables-1.4.10
dir_$(CONFIG_USER_IPTABLES_IP6TABLES)	    += iptables-1.4.10
else
ifeq ($(CONFIG_LINUXDIR), linux-3.10.54.x)
dir_$(CONFIG_USER_IPTABLES_IPTABLES)	    += iptables-1.4.10
dir_$(CONFIG_USER_IPTABLES_IP6TABLES)	    += iptables-1.4.10
else
ifeq ($(CONFIG_LINUXDIR), linux-3.4.x)
dir_$(CONFIG_USER_IPTABLES_IPTABLES)	    += iptables-1.4.10
dir_$(CONFIG_USER_IPTABLES_IP6TABLES)	    += iptables-1.4.10
else
dir_$(CONFIG_USER_IPTABLES_IPTABLES)	    += iptables
dir_$(CONFIG_USER_IPTABLES_IP6TABLES)	    += iptables
endif
endif
endif
endif
endif
endif
endif
dir_$(CONFIG_USER_IXIA_ENDPOINT_670)	    += ixia_endpoint
dir_$(CONFIG_USER_IXIA_ENDPOINT_730SP1)	    += ixia_endpoint_730sp1
dir_$(CONFIG_USER_IPERF)            	    += iperf-2.0.5
#dir_$(CONFIG_USER_INADYN)                   += inadyn
dir_$(CONFIG_USER_INADYN_MT)                   += inadyn-mt
dir_$(CONFIG_USER_IGMP_PROXY)  		    += igmpproxy
ifeq ($(CONFIG_LINUXDIR), linux-2.6.21.x)
dir_$(CONFIG_USER_IPROUTE2)          	    += iproute2-2.6.24-rc7
else
dir_$(CONFIG_USER_IPROUTE2)              += iproute2-2.6.38
endif
dir_$(CONFIG_USER_I2C_TOOLS)		    += i2c-tools-3.1.1
dir_$(CONFIG_USER_LMBENCH3)		    += lmbench3
dir_$(CONFIG_USER_LLTD)			    += lldt
dir_$(CONFIG_USER_LSUSB)		    += lsusb
dir_$(CONFIG_USER_LIGHTY)		    += lighttpd-1.4.20
dir_$(CONFIG_USER_MINIUPNPD)		    += miniupnpd-1.6
dir_$(CONFIG_USER_MTDUTILS)                 += mtd-utils-1.5.0
dir_$(CONFIG_USER_MTD_WRITE)         	    += mtd_write
dir_$(CONFIG_USER_MKDOSFS)                  += mkdosfs-2.11
dir_$(CONFIG_USER_MPSTAT)                   += mpstat-0.1.1
dir_$(CONFIG_USER_NETCAT)		    += netcat
dir_$(CONFIG_USER_NETSTAT_NAT)		    += netstat-nat
dir_$(CONFIG_USER_NTPCLIENT_NTPCLIENT)      += ntpclient
dir_$(CONFIG_USER_NTPCLIENT_ADJTIMEX)       += ntpclient
dir_$(CONFIG_USER_NTFS3G)		    += ntfs-3g
dir_$(CONFIG_USER_NTFSPROGS)                += ntfsprogs
dir_$(CONFIG_USER_OPENSWAN)                 += openswan
dir_$(CONFIG_USER_OPENL2TP)                 += openl2tp-1.6
#dir_$(CONFIG_USER_OPENSSL)	   	    += openssl-0.9.8e
#dir_$(CONFIG_USER_OPENSSL)	   	    += openssl-1.0.1f
dir_$(CONFIG_USER_OPENSSL)                 += openssl-1.0.2j
dir_$(CONFIG_USER_PARPROUTED)	   	    += parprouted-0.7
dir_$(CONFIG_USER_PPP_PPPOE)					+= ppp-pppoe
dir_$(CONFIG_USER_PPPOECD)                  += ppp-2.4.1/pppoecd
dir_$(CONFIG_USER_PPPD)                     += ppp
dir_$(CONFIG_USER_PPPD_PPPSTATS)            += ppp-2.4.2
dir_$(CONFIG_USER_PPPD_PPPDUMP)             += ppp-2.4.2
dir_$(CONFIG_USER_PPTP_CLIENT)              += pptp-client
dir_$(CONFIG_USER_PCIUTIL_LSPCI)            += pciutils-3.0.0
dir_$(CONFIG_USER_PCIUTIL_SETPCI)           += pciutils-3.0.0
dir_$(CONFIG_USER_P910ND)                   += p910nd-0.91
dir_$(CONFIG_USER_PROFTPD)                  += proftpd
dir_$(CONFIG_USER_RADVD)                    += radvd
dir_y+=apps
#dir_y+=wget-1.13
dir_$(CONFIG_RALINKAPP)		    	    += rt2880_app
dir_$(CONFIG_USER_RALINKIAPPD)	    	    += ralinkiappd
dir_$(CONFIG_USER_MTKIAPPD)	    	    += mtkiappd
dir_$(CONFIG_USER_RP_L2TP)		    += rp-l2tp-0.4
dir_$(CONFIG_USER_RPPPPOE_RELAY)  	    += rp-pppoe-3.8
dir_$(CONFIG_USER_RPPPPOE_SNIFF)  	    += rp-pppoe-3.8
dir_$(CONFIG_USER_STRACE_STRACE)            += strace
dir_$(CONFIG_USER_STUPID_FTPD)              += stupid-ftpd
dir_$(CONFIG_SAMBA_3_0_2)		    += samba-3.0.2
dir_$(CONFIG_SAMBA_3_0_24)		    += samba-3.0.24
dir_$(CONFIG_USER_SNORT)                    += snort-2.8.5.2
dir_$(CONFIG_USER_TOTD)                     += totd-1.5
dir_$(CONFIG_USER_TCPDUMP)                  += tcpdump
dir_$(CONFIG_USER_TASKSET)                  += taskset
dir_$(CONFIG_USER_UVC_STREAM)		    += uvc_stream
dir_$(CONFIG_USER_UPNP_IGD)                 += linux-igd
dir_$(CONFIG_USER_WIRELESS_TOOLS)           += wireless_tools
dir_$(CONFIG_USER_WATCHDOG)           	    += watchdog-5.6
dir_$(CONFIG_USER_WPA_SUPPLICANT)	    += wpa_supplicant-2.0
dir_$(CONFIG_USER_WSC)			    += wsc_upnp
ifeq ("$(CONFIG_PRODUCT)", "DIR_853_A2")
#dir_$(CONFIG_USER_BNDSTRG)			+= bndstrg_7615d
dir_$(CONFIG_USER_BNDSTRG)			+= bndstrg_plus
else ifeq ("$(CONFIG_PRODUCT)", "DIR_853_A1")
#dir_$(CONFIG_USER_BNDSTRG)			+= bndstrg_7615d
dir_$(CONFIG_USER_BNDSTRG)			+= bndstrg_plus
else
dir_$(CONFIG_USER_BNDSTRG)			+= bndstrg
endif

dir_$(CONFIG_USER_ETHTOOL)		    += ethtool
dir_$(CONFIG_USER_ZEBRA)		    += zebra-0.95a_ripd
dir_$(CONFIG_USER_USBMODESWITCH)	    += usb_modeswitch-0.9.5
dir_$(CONFIG_USER_COMGT)		    += comgt-0.32
dir_$(CONFIG_USER_SDPARM) 		    += sdparm-1.02
dir_$(CONFIG_USER_3G)	 		    += hso-1.6
dir_$(CONFIG_USER_SNMPD) 		    += snmpd
dir_$(CONFIG_USER_VMSTAT)		    += procps-3.2.8
dir_$(CONFIG_USER_ALSA_UTIL_1_0_27_2)		    += alsa-lib-1.0.27.2
dir_$(CONFIG_USER_ALSA_UTIL_1_0_27_2)		    += alsa-utils-1.0.27.2
dir_$(CONFIG_USER_WIDE_DHCPV6)		    += wide-dhcpv6
dir_$(CONFIG_USER_ISC_DHCP)		    += dhcp-4.2.5-P1
dir_$(CONFIG_UDHCPD)							+= udhcpd
dir_$(CONFIG_USER_MOCAD2)		    += MocaApi-1.0.0
dir_$(CONFIG_USER_HOSTAPD)          += hostapd-2.2/hostapd
dir_$(CONFIG_USER_XL2TPD)               += xl2tpd-1.3.2
#dir_$(CONFIG_USER_NBTSAN)               += nbtscan-1.5.1a 
dir_$(CONFIG_DLINKAPP_ONETOUCH)               += onetouch
dir_$(CONFIG_USER_QUAGGA)			+= quagga
dir_$(CONFIG_USER_IPSET)               += ipset-6.35

#2017-21-01 linsd add for dlink super mesh
dir_$(CONFIG_USER_SUPERMESH)               += mosquitto-1.3.1
dir_$(CONFIG_USER_SUPERMESH)               += supermesh

dir_y+=rc
dir_y+=stad/src
dir_y+=tw-prog.priv/lighttpd_mtk 
dir_y+=tw-prog.priv/prog-cgi/src
dir_y+=tw-prog.priv/www
dir_y+=tw-prog.priv/cli/libcli
dir_y+=tw-prog.priv/mkconfig
dir_y+=tw-prog.priv/seama
dir_y+=tw_hotplug
#dir_y+=kstreamer
#dir_$(CONFIG_IMG_CRYPT)+=tw-prog.priv/imgcrypt
dir_$(CONFIG_MYDLINK_SUPPORT)+= mydlink
dir_$(CONFIG_OOKLA_SUPPORT)+=ookla
dir_$(CONFIG_KWILT_SUPPORT)+=kwilt
dir_y+=odhcp6c
dir_$(CONFIG_MCAFEE_SUPPORT)+= McAfee

dir_$(CONFIG_USER_USB_FW) += ufsd_driver
dir_$(CONFIG_USER_USB_FW) += sxuvlplus

dir_$(CONFIG_TIME_MACHINE)+=netatalk

dir_y+=mld

dir_$(CONFIG_TWGJ_TR069)  +=  tr69c_with_dm

#one touch
dir_$(CONFIG_DLINKAPP_ONETOUCH)         += onetouch

#TEST
dir_$(CONFIG_USER_HELLO_WORLD)		    += hello_world
#--

# VoIP & TR069
ifeq ($(shell [[ "$(CONFIG_MTK_VOIP)" == "y" || "$(CONFIG_MTK_TR069)" == "y" ]] && echo true), true)
dir_y+=cpe_app
dir_post_inst_y+=cpe_app
endif

#test
#dir_y=cpe_app
dir_$(CONFIG_CURL) += curl-7.57.0
dir_$(CONFIG_FOTA) += fota

ifeq ($(CONFIG_TZ_LOCATION), y)
	dir_y += fota
	dir_y += tz_location
endif
dir_$(CONFIG_USER_INADYN) += confuse
dir_$(CONFIG_USER_INADYN) += inadyn-new


all: config
#	$(MAKE) -j$(HOST_NCPU) $(sort $(dir_y) $(dir_v) $(dir_p)) || exit $$?
ifeq ($(CONFIG_USER_OPENSSL), y)
	touch openssl-1.0.2j/Makefile
endif
ifeq ($(CONFIG_USER_IPTABLES_IPTABLES), y)
	touch iptables-1.4.20_ext/configure
endif
	$(MAKE) -j$(HOST_NCPU) $(dir_v) $(dir_p) $(dir_y) || exit $$?

#
# add directory dependancies here
#
.PHONY: $(sort $(dir_y) $(dir_p))

$(sort $(dir_y) $(dir_p)):  config
	[ ! -d "$@" ] || ( touch $@/.sgbuilt_user && $(MAKE) -j1 -C $@ ) || exit $$?

%_only:
	touch $(@:_only=)/.sgbuilt_user && $(MAKE) -j1 -C $(@:_only=)

%_clean:
	$(MAKE) -j1 -C $(@:_clean=) clean; rm -f $(@:_clean=)/.sgbuilt_user; true

romfs:
	for i in $(sort $(dir_y)) $(dir_p) ; do \
		[ ! -d $$i ] || $(MAKE) -C $$i romfs || exit $$? ; \
	done

romfs.post:
	@echo "#########################################################################################"
	@echo "dir_post_inst_y = "$(dir_post_inst_y)
	@echo "#########################################################################################"
	for i in $(dir_post_inst_y) ; do \
		[ ! -d $$i ] || $(MAKE) -C $$i romfs.post || exit $$? ; \
	done

clean:
	-for i in $(dir_v) $(sort $(dir_y) $(dir_n) $(dir_)) $(dir_p) ; do \
		if [ -f $$i/.sgbuilt_user ]; then \
			$(MAKE) -C $$i clean ; \
			rm -f $$i/.sgbuilt_user; \
		fi; \
	done

prune:
	-for i in $(sort $(dir_n) $(dir_)) ; do \
		found=0; \
		for j in $(sort $(dir_y)) ; do \
			if [ $$i == $$j ]; then \
				found=1; \
			fi; \
		done; \
		if [ $$found == 0 ]; then \
			[ "$$i" = "openswan" ] && make prune_openswan; \
			rm -fr $$i; \
		fi; \
	done

prune_openswan:
	@mkdir $(ROOTDIR)/$@
	@mv $(ROOTDIR)/openswan/linux/net/ipsec/{Config.in*,Kconfig} $(ROOTDIR)/$@/
	@rm -fr $(ROOTDIR)/openswan
	@mkdir -p $(ROOTDIR)/openswan/linux/net/ipsec
	@mv $(ROOTDIR)/$@/* $(ROOTDIR)/openswan/linux/net/ipsec/
	@rm -fr $(ROOTDIR)/$@
