"use strict";(self.webpackChunkderiv_com=self.webpackChunkderiv_com||[]).push([[6409,3581,650],{14667:function(e,t,n){n.d(t,{u:function(){return l}});var a=n(15007),r=n(65084),l=function(){var e=(0,a.useState)(!1),t=e[0],n=e[1],l=(0,r.jU)()&&window.LC_API||{},o=(0,a.useState)(!1),i=o[0],c=o[1],u=new URLSearchParams((0,r.jU)()&&window.location.search||"").get("is_livechat_open");return(0,a.useEffect)((function(){var e=null,t=null;if((0,r.jU)()){var a=(0,r.ge)();e=setInterval((function(){var e=(0,r.KR)(a);c(!!e)}),1e3),t=setTimeout((function(){var e,t;e=function(){window.LiveChatWidget.on("ready",(function(){n(!0),"true"===(null==u?void 0:u.toLowerCase())&&window.LC_API.open_chat_window()}))},(t=document.createElement("script")).innerHTML='\n            window.__lc = window.__lc || {};\n            window.__lc.license = 12049137;\n            ;(function(n,t,c){function i(n){return e._h?e._h.apply(null,n):e._q.push(n)}var e={_q:[],_h:null,_v:"2.0",on:function(){i(["on",c.call(arguments)])},once:function(){i(["once",c.call(arguments)])},off:function(){i(["off",c.call(arguments)])},get:function(){if(!e._h)throw new Error("[LiveChatWidget] You can’t use getters before load.");return i(["get",c.call(arguments)])},call:function(){i(["call",c.call(arguments)])},init:function(){var n=t.createElement("script");n.async=!0,n.type="text/javascript",n.src="https://cdn.livechatinc.com/tracking.js",t.head.appendChild(n)}};!n.__lc.asyncInit&&e.init(),n.LiveChatWidget=n.LiveChatWidget||e}(window,document,[].slice))\n        ',document.body.appendChild(t),e&&e()}),2e3)}return function(){clearInterval(e),clearTimeout(t)}}),[]),(0,a.useEffect)((function(){if((0,r.jU)()){var e=(0,r.ge)();t&&window.LiveChatWidget.on("ready",(function(){var t;window.LC_API.open_chat_window(),window.LC_API.hide_chat_window();var n=(0,r.$Z)(e),a=(0,r.KR)(e),l=new URLSearchParams(window.location.search),o=n||{},c=o.utm_source,u=o.utm_medium,d=o.utm_campaign,m=a||{},s=m.loginid,f=m.email,h=m.landing_company_shortcode,v=m.currency,p=m.residence,y=m.first_name,g=m.last_name,x={is_logged_in:i,loginid:null!=s?s:"",landing_company_shortcode:null!=h?h:"",currency:null!=v?v:"",residence:null!=p?p:"",email:null!=f?f:"",platform:null!==(t=l.get("platform"))&&void 0!==t?t:"",utm_source:null!=c?c:"",utm_medium:null!=u?u:"",utm_campaign:null!=d?d:""};window.LiveChatWidget.call("set_session_variables",x),i?(f&&window.LiveChatWidget.call("set_customer_email",f),y&&g&&window.LiveChatWidget.call("set_customer_name",y+" "+g)):window.LC_API.on_chat_ended=function(){window.LiveChatWidget.call("set_customer_email"," "),window.LiveChatWidget.call("set_customer_name"," ")};var E=l.get("is_livechat_open");"true"===(null==E?void 0:E.toLowerCase())&&window.LC_API.open_chat_window(),window.LiveChatWidget.on("new_event",(function(e){e.greeting&&window.LC_API.open_chat_window()}))}))}}),[i,t]),[t,l]}},75870:function(e,t,n){n.d(t,{d:function(){return y}});var a=n(15007),r=n(51074),l=n(33581),o=n(40650),i=n(81259),c=n(12873),u=n(99509),d=n(43827),m=n(20655),s=n(65084),f=r.default.div.withConfig({displayName:"_article__Content",componentId:"sc-fjf9vc-0"})(["display:flex;flex-direction:row;justify-content:center;width:100%;"]),h=r.default.div.withConfig({displayName:"_article__TabWrapper",componentId:"sc-fjf9vc-1"})(["width:100%;margin-top:8rem;@media ","{margin-top:0;}"],m.Z.tabletL),v=r.default.div.withConfig({displayName:"_article__ContactContainer",componentId:"sc-fjf9vc-2"})(["margin-top:8rem;"]),p=(0,s.I_)(),y=function(e){var t=e.children,n=e.header,r=void 0===n?"":n,m=e.title,s=void 0===m?"":m,y=e.description,g=void 0===y?"":y,x=e.text,E=void 0===x?"":x,w=e.label,_=void 0===w?"":w,b=e.is_mounted,D=void 0!==b&&b;return a.default.createElement(i.Z,null,a.default.createElement(d.HJ,{title:s,description:g,text:E,label:_,is_mounted:D}),a.default.createElement(d.W2,{align:"left",justify:"flex-start",direction:"column"},a.default.createElement(u.Fg,{to:p?"/help-centre/?platform="+p:"/help-centre/",has_arrow:"true",color:"black",size:"var(--text-size-s)",weight:"bold",arrow_margin:"1rem",margin:"4rem 0 0"},(0,c.NC)("Back")),a.default.createElement(f,null,a.default.createElement(h,null,a.default.createElement(u.Uj,{line_height:"1.5",opacity:"0.72",size:"var(--text-size-s)",tab_header:r},t)))),a.default.createElement(v,null,a.default.createElement(o.Community,null),a.default.createElement(l.DidntFindYourAnswerBanner,null)))}},40650:function(e,t,n){n.r(t),n.d(t,{Community:function(){return h}});var a=n(15007),r=n(51074),l=n(1597),o=n(99509),i=n(1039),c=n(12873),u=n(43827),d=n(20655),m=(0,r.default)(i.Qj).withConfig({displayName:"_community__StyledLinkButton",componentId:"sc-1kht508-0"})(["border-radius:4px;width:fit-content;@media ","{font-size:14px;padding:10px 16px;}"],d.Z.tablet),s=(0,r.default)(o.h4).withConfig({displayName:"_community__StyledHeader",componentId:"sc-1kht508-1"})(["@media ","{text-align:center;}"],d.Z.tablet),f=(0,r.default)(u.kC).withConfig({displayName:"_community__StyledFlex",componentId:"sc-1kht508-2"})(["@media ","{margin-left:unset;","{text-align:center;}}"],d.Z.tablet,o.xv),h=function(){var e=(0,l.useStaticQuery)("3807150758");return a.default.createElement(u.S$,{padding:"4rem",background:"var(--color-grey-25)"},a.default.createElement(u.W2,null,a.default.createElement(u.kC,{tablet_direction:"column",tablet_ai:"center",max_width:"92rem"},a.default.createElement(o.et,{alt:"community",data:e.community,width:"41rem"}),a.default.createElement(f,{tablet_ai:"center",ml:"5rem",direction:"column"},a.default.createElement(s,{mt:"1rem",as:"h3",type:"section-title"},(0,c.NC)("Have a question?")),a.default.createElement(o.xv,{size:"var(--text-size-m)",pt:"0.8rem",pb:"3.4rem"},(0,c.NC)("Our Deriv support community can help you find answers.")),a.default.createElement(m,{secondary:"true",to:"",type:"community",external:"true",target:"_blank",rel:"noopener noreferrer"},(0,c.NC)("Ask the community"))))))};t.default=h},33581:function(e,t,n){n.r(t),n.d(t,{DidntFindYourAnswerBanner:function(){return v},default:function(){return p}});var a=n(15007),r=n(51074),l=n(99509),o=n(1039),i=n(12873),c=n(43827),u=n(14667),d=n(20655);var m=r.default.section.withConfig({displayName:"_didnt-find-answer__DFYAWrapper",componentId:"sc-1xcbcsw-0"})(["background-color:var(--color-black-3);"]),s=(0,r.default)(c.W2).withConfig({displayName:"_didnt-find-answer__DFYASection",componentId:"sc-1xcbcsw-1"})(["padding:3.5rem 0;@media ","{flex-wrap:wrap;","{font-size:14px;padding:10px 16px;}}& > *{width:auto;}"],d.Z.mobileL,o.zx),f=r.default.img.withConfig({displayName:"_didnt-find-answer__StyledIcon",componentId:"sc-1xcbcsw-2"})(["@media ","{width:48px;height:48px;margin-right:1.6rem;}"],d.Z.tabletL),h=(0,r.default)(l.xv).withConfig({displayName:"_didnt-find-answer__MiddleText",componentId:"sc-1xcbcsw-3"})(["@media ","{margin:1.6rem 0;text-align:center;font-weight:bold;}"],d.Z.mobileL),v=function(){var e=(0,u.u)(),t=e[0],n=e[1];return a.default.createElement(m,null,a.default.createElement(s,null,a.default.createElement(f,{src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iMCUiIHgyPSIxMDAlIiB5MT0iODcuOTcyJSIgeTI9IjEyLjAyOCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNGRjQ0NEYiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNGRjY0NDQiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cGF0aCBmaWxsPSJ1cmwoI2EpIiBkPSJNNjIgMjFhMiAyIDAgMDEyIDJ2MzQuNzczYTIgMiAwIDAxLTMuMzI5IDEuNDk1TDUzLjYyIDUzSDE4YTIgMiAwIDAxLTItMlY0MGgydjExaDM1LjYyYy40OSAwIC45NjIuMTggMS4zMjkuNTA1TDYyIDU3Ljc3M1YyM0g1MnYtMmgxMHpNNDYgNGEyIDIgMCAwMTIgMnYyOGEyIDIgMCAwMS0yIDJIMTAuMzhsLTcuMDUgNi4yNjhBMiAyIDAgMDEwIDQwLjc3M1Y2YTIgMiAwIDAxMi0yem0wIDJIMnYzNC43NzNsNy4wNTEtNi4yNjhjLjM2Ny0uMzI1Ljg0LS41MDUgMS4zMy0uNTA1SDQ2VjZ6TTMwIDIyYTEgMSAwIDAxLjExNyAxLjk5M0wzMCAyNEg5YTEgMSAwIDAxLS4xMTctMS45OTNMOSAyMmgyMXptOS04YTEgMSAwIDAxLjExNyAxLjk5M0wzOSAxNkg5YTEgMSAwIDAxLS4xMTctMS45OTNMOSAxNGgzMHoiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==",alt:"contact us icon"}),a.default.createElement(h,{size:"var(--text-size-l)",color:"white",m:"0 2.4rem"},(0,i.NC)("Didn’t find your answer? We can help.")),t&&a.default.createElement(o.zx,{secondary:"true",onClick:function(){n.open_chat_window()}},(0,i.NC)("Chat"))))},p=v},14067:function(e,t,n){n.d(t,{DO:function(){return i},dL:function(){return c},eb:function(){return u},qY:function(){return d}});var a=n(51074),r=n(99509),l=n(12873),o=n(20655),i=a.default.div.withConfig({displayName:"_help-centre-style__ArticleWrapper",componentId:"sc-zvcsgj-0"})(["max-width:71.2rem;display:flex;flex-direction:column;justify-content:flex-start;height:100%;font-size:var(--text-size-s);line-height:1.5;margin-left:12.6rem;margin-top:1.6rem;@media ","{margin-left:",";}@media ","{margin-left:0;}"],o.Z.laptopL,(function(e){var t=e.margin_left;return null!=t?t:"12.6rem"}),o.Z.tabletL),c=(0,a.default)(l.UE).withConfig({displayName:"_help-centre-style__ExternalLink",componentId:"sc-zvcsgj-1"})(["text-decoration:none;font-size:var(--text-size-s);font-weight:bold;color:var(--color-red);:hover{text-decoration:underline;}@media ","{font-size:16px;}"],o.Z.tabletL),u=(0,a.default)(r.h4).withConfig({displayName:"_help-centre-style__StyledHeader",componentId:"sc-zvcsgj-2"})(["font-size:2.4rem;margin-bottom:2.4rem;"]),d=(0,a.default)(r.xv).withConfig({displayName:"_help-centre-style__StyledText",componentId:"sc-zvcsgj-3"})(["margin-top:1.7rem;"])},2609:function(e,t,n){n.r(t);var a=n(15007),r=n(51074),l=n(75870),o=n(14067),i=n(37105),c=n(60431),u=n(99509),d=n(12873),m=n(74690),s=r.default.ul.withConfig({displayName:"dmt5__StyledList",componentId:"sc-1arf6qa-0"})(["list-style:",";padding-left:",";"],(function(e){return e.listStyle}),(function(e){return e.paddingLeft})),f=r.default.li.withConfig({displayName:"dmt5__StyledListItem",componentId:"sc-1arf6qa-1"})(["color:var(--color-black-3);margin-top:",";"],(function(e){return e.marginTop})),h=function(e){var t=e.text;return a.default.createElement(o.DO,null,a.default.createElement(o.eb,{as:"h4"},t),a.default.createElement(u.xv,null,a.default.createElement(d.Xx,{translate_text:"Deriv MT5 is a CFD trading platform that gives you access to forex, stocks, stock indices, commodities, cryptocurrencies, and synthetics. Learn more about Deriv MT5 <0>here</0>.",components:[a.default.createElement(o.dL,{to:"/dmt5/",external:"true",target:"_blank",rel:"noopener noreferrer",key:0})]})))},v=function(e){var t=e.text;return a.default.createElement(o.DO,null,a.default.createElement(o.eb,{as:"h4"},t),a.default.createElement(u.xv,null,a.default.createElement(d.Xx,{translate_text:"<0>DTrader</0>, <1>SmartTrader</1>, <2>DBot</2>, and <3>Binary Bot</3> offer digital options trading on a range of underlying assets such as forex, stock indices, commodities, and synthetics. These platforms allow you to set the contract duration before opening positions, and you'll know exactly how much you'll earn if you win. You may find these platforms more intuitive if you're new to the trading world.",components:[a.default.createElement(o.dL,{to:"/dtrader/",external:"true",target:"_blank",rel:"noopener noreferrer",key:0}),a.default.createElement(o.dL,{to:"https://smarttrader.deriv.com/en/trading.html",external:"true",target:"_blank",rel:"noopener noreferrer",key:1}),a.default.createElement(o.dL,{to:"/dbot/",external:"true",target:"_blank",rel:"noopener noreferrer",key:2}),a.default.createElement(o.dL,{to:"https://bot.deriv.com/",external:"true",target:"_blank",rel:"noopener noreferrer",key:3})]})),a.default.createElement(o.qY,null,a.default.createElement(d.Xx,{translate_text:"<0>Deriv X</0> and <1>Deriv MT5</1> offer CFD trading on a similar range of assets, where you're able to open positions with leverage and your potential profit is only known when you close your positions. It's riskier than digital options trading because while you may potentially gain a lot if you win, you may also lose a lot if you don't. Deriv X and Deriv MT5 are popular among our traders who enjoy the risks as part of the excitement of CFD trading.",components:[a.default.createElement(o.dL,{to:"/derivx/",external:"true",target:"_blank",rel:"noopener noreferrer",key:0}),a.default.createElement(o.dL,{to:"/dmt5/",external:"true",target:"_blank",rel:"noopener noreferrer",key:1})]})))},p=function(e){var t=e.text;return a.default.createElement(o.DO,null,a.default.createElement(o.eb,{as:"h4"},t),a.default.createElement(a.default.Fragment,null,a.default.createElement(u.xv,null,(0,d.NC)("The Deriv MT5 Synthetic account offers contracts for difference (CFDs) on synthetic indices. Our proprietary synthetic indices mimic the price movement of real financial markets but are not affected by market events. Trading on synthetic indices is available 24/7, even on weekends and holidays. There are more than 15 indices to choose from, with different levels of volatility and market behaviour.")),a.default.createElement(o.qY,null,(0,d.NC)("The Deriv MT5 Financial account offers CFDs on forex, commodities, cryptocurrencies, stocks, and stock indices, with high leverage and variable spreads for maximum flexibility. This account offers more than 100 assets, and 24/7 trading is available on cryptocurrencies.")),a.default.createElement(o.qY,null,(0,d.NC)("The Deriv MT5 Financial STP account offers CFDs on forex and cryptocurrencies, with lower leverage than the Financial account. This is a 100% A-book account, so your trades pass straight through to the market, giving you direct access to liquidity providers. This account also offers 24/7 trading on cryptocurrencies."))))},y=function(e){var t=e.text;return a.default.createElement(o.DO,null,a.default.createElement(o.eb,{as:"h4"},t),a.default.createElement(u.xv,null,(0,d.NC)("The DMT5 Financial account offers you leverage to trade contracts for difference (CFDs) on forex, stocks, stock indices, commodities, synthetic indices, and cryptocurrencies.")))},g=function(e){var t=e.text;return a.default.createElement(o.DO,null,a.default.createElement(o.eb,{as:"h4"},t),a.default.createElement(u.xv,null,a.default.createElement(d.Xx,{translate_text:"You'll need to transfer funds from your Deriv account to your Deriv MT5 account. You can do this on the <0>Cashier page</0>. Transfers are instant; your funds will be available in your Deriv MT5 account as soon as you complete the transfer.",components:[a.default.createElement(o.dL,{to:c.MN+"/cashier/account-transfer",external:"true",target:"_blank",rel:"noopener noreferrer",key:0})]})))},x=function(e){var t=e.text;return a.default.createElement(o.DO,null,a.default.createElement(o.eb,{as:"h4"},t),a.default.createElement(u.xv,{mb:"1.5rem"},a.default.createElement(d.Xx,{translate_text:"You'll need to transfer the funds from your Deriv MT5 account to your Deriv account. You can do this on the <0>Cashier page</0>. Your funds will be available in your Deriv account as soon as you complete the transfer.",components:[a.default.createElement(o.dL,{to:c.MN+"/cashier/account-transfer",external:"true",target:"_blank",rel:"noopener noreferrer",key:1})]})))},E=function(e){var t=e.text;return a.default.createElement(o.DO,null,a.default.createElement(o.eb,{as:"h4"},t),a.default.createElement(u.xv,null,(0,d.NC)("This difference is because MT5 is a third-party platform that requires its own login credentials. Your Deriv MT5 login gives you access to the MT5 platform, while your Deriv login gives you access to our digital options platforms such as DTrader and DBot.")))},w=function(e){var t=e.text;return a.default.createElement(o.DO,null,a.default.createElement(o.eb,{as:"h4"},t),a.default.createElement(u.xv,null,(0,d.NC)("Follow these steps to reset your Deriv MT5 password:")),a.default.createElement(s,{listStyle:"decimal",paddingLeft:"5rem"},a.default.createElement(f,{marginTop:"1.6rem"},a.default.createElement(u.xv,null,a.default.createElement(d.Xx,{translate_text:"Go to your <0>Deriv MT5 dashboard</0>.",components:[a.default.createElement(o.dL,{to:"https://app.deriv.com/mt5",external:"true",target:"_blank",rel:"noopener noreferrer",key:0})]}))),a.default.createElement(f,{marginTop:"0.3rem"},a.default.createElement(u.xv,null,a.default.createElement(d.Xx,{translate_text:"Click <0>Change</0> next to the password field, then click <0>Change Deriv MT5 password</0>.",components:[a.default.createElement("strong",{key:0})]}))),a.default.createElement(f,{marginTop:"0.3rem"},a.default.createElement(u.xv,null,a.default.createElement(d.Xx,{translate_text:"Click <0>Confirm</0>.",components:[a.default.createElement("strong",{key:0})]}))),a.default.createElement(f,{marginTop:"0.3rem"},a.default.createElement(u.xv,null,a.default.createElement(d.Xx,{translate_text:"We'll send you an email. Click the <0>Change password</0> button in that email.",components:[a.default.createElement("strong",{key:0})]}))),a.default.createElement(f,{marginTop:"0.3rem"},a.default.createElement(u.xv,null,a.default.createElement(d.Xx,{translate_text:"You'll be taken to the Change password screen. Enter a new password and click <0>Create</0>.",components:[a.default.createElement("strong",{key:0})]})))),a.default.createElement(o.qY,null,(0,d.NC)("You can now log in to Deriv MT5 with your new password.")))},_=function(e){var t=e.text;return a.default.createElement(o.DO,null,a.default.createElement(o.eb,{as:"h4"},t),a.default.createElement(u.xv,{mb:"1.5rem"},a.default.createElement(d.Xx,{translate_text:"You can log in to your Deriv MT5 account via the MT5 desktop app, web terminal, or mobile app. You'll need the login ID and server name from <0>your Deriv MT5 dashboard</0>. Please remember to use your Deriv MT5 password to log in to Deriv MT5.",components:[a.default.createElement(o.dL,{to:"https://app.deriv.com/mt5",external:"true",target:"_blank",rel:"noopener noreferrer",key:0})]})))},b=function(e){var t=e.text;return a.default.createElement(o.DO,null,a.default.createElement(o.eb,{as:"h4"},t),a.default.createElement(u.xv,{mb:"1.5rem"},a.default.createElement(d.Xx,{translate_text:"You can set the investor password on your <0>Deriv MT5 dashboard</0>. Click <1>Password</1> on your Deriv MT5 account, and select <1>Investor password</1> to set a new password.",components:[a.default.createElement(o.dL,{to:"https://app.deriv.com/mt5",external:"true",target:"_blank",rel:"noopener noreferrer",key:0}),a.default.createElement("strong",{key:1})]})))},D=function(e){var t=e.text;return a.default.createElement(o.DO,null,a.default.createElement(o.eb,{as:"h4"},t),a.default.createElement(u.xv,{mb:"1.5rem"},a.default.createElement(d.Xx,{translate_text:"You can find your Deriv MT5 server name on your <0>Deriv MT5 dashboard</0>. Look for <1>server</1> in between the broker name and login ID.",components:[a.default.createElement(o.dL,{to:"https://app.deriv.com/mt5",external:"true",target:"_blank",rel:"noopener noreferrer",key:0}),a.default.createElement("strong",{key:1})]})))},M=function(e){var t=e.text;return a.default.createElement(o.DO,null,a.default.createElement(o.eb,{as:"h4"},t),a.default.createElement(u.xv,{mb:"1.5rem"},a.default.createElement(d.Xx,{translate_text:"The minimum amount you’ll need to open a position on Deriv MT5 depends on the margin required for each asset. You can calculate the margin required using our <0>margin calculator</0>.",components:[a.default.createElement(o.dL,{to:"/trader-tools/margin-calculator",external:"true",target:"_blank",rel:"noopener noreferrer",key:0}),a.default.createElement("strong",{key:1})]})))},T=function(e){var t=e.text;return a.default.createElement(o.DO,null,a.default.createElement(o.eb,{as:"h4"},t),a.default.createElement(u.xv,{mb:"1.5rem"},(0,d.NC)("This is due to the spread, which is the difference between the ‘bid’ and ‘ask’ prices. Your positions will start earning a profit when the market moves in your favour.")))},C=function(e){var t=e.text;return a.default.createElement(o.DO,null,a.default.createElement(o.eb,{as:"h4"},t),a.default.createElement(u.xv,{mb:"1.5rem"},(0,d.NC)("No, we don't.")))},N=function(e){var t=e.text;return a.default.createElement(o.DO,null,a.default.createElement(o.eb,{as:"h4"},t),a.default.createElement(u.xv,{mb:"1.5rem"},a.default.createElement(d.Xx,{translate_text:"You can't reactivate your Deriv MT5 account. Instead, you can create a new one on your Deriv <0>MT5 dashboard</0>.",components:[a.default.createElement(o.dL,{to:"https://app.deriv.com/mt5",external:"true",target:"_blank",rel:"noopener noreferrer",key:0}),a.default.createElement("strong",{key:1})]})))},I=function(e){var t=e.text;return a.default.createElement(o.DO,null,a.default.createElement(o.eb,{as:"h4"},t),a.default.createElement(u.xv,{mb:"1.5rem"},a.default.createElement(d.Xx,{translate_text:"No, you can't. There's a fixed default amount for each asset. The leverage applied to your account can be found on your <0>Deriv MT5 dashboard</0>.",components:[a.default.createElement(o.dL,{to:"https://app.deriv.com/mt5",external:"true",target:"_blank",rel:"noopener noreferrer",key:0}),a.default.createElement("strong",{key:1})]})))},k=function(e){var t=e.text;return a.default.createElement(o.DO,null,a.default.createElement(o.eb,{as:"h4"},t),a.default.createElement(u.xv,{mb:"1.5rem"},(0,d.NC)("Greenwich Mean Time (GMT).")))},L=function(e){var t=e.text;return a.default.createElement(o.DO,null,a.default.createElement(o.eb,{as:"h4"},t),a.default.createElement(u.xv,null,(0,d.NC)("If you need a statement of your trades on Deriv MT5, follow these steps to download a 3-month statement:")),a.default.createElement(s,{listStyle:"decimal",paddingLeft:"5rem"},a.default.createElement(f,{marginTop:"0.3rem"},a.default.createElement(u.xv,null,(0,d.NC)("Log in to your MT5 account via the desktop app."))),a.default.createElement(f,{marginTop:"0.3rem"},a.default.createElement(u.xv,null,a.default.createElement(d.Xx,{translate_text:"Go to the <0>History</0> section.",components:[a.default.createElement("strong",{key:0})]}))),a.default.createElement(f,{marginTop:"0.3rem"},a.default.createElement(u.xv,null,a.default.createElement(d.Xx,{translate_text:"Right-click on <0>Time</0>, click <0>Report</0>, and select <0>Open XML</0>.",components:[a.default.createElement("strong",{key:0})]}))),a.default.createElement(f,{marginTop:"0.3rem"},a.default.createElement(u.xv,null,(0,d.NC)("Your Deriv MT5 history will be downloaded as an XML file.")))),a.default.createElement(o.qY,null,a.default.createElement(d.Xx,{translate_text:"If you need a statement for a more extended period, contact us via <0>live chat</0>, and we'll help you with it.",components:[a.default.createElement(o.dL,{to:"/contact_us/?is_livechat_open=true",external:"true",target:"_blank",rel:"noopener noreferrer",key:0})]})))},Y=function(e){var t=e.text;return a.default.createElement(o.DO,null,a.default.createElement(o.eb,{as:"h4"},t),a.default.createElement(u.xv,{mb:"1.5rem"},(0,d.NC)("No, you can't.")))},S=function(e){var t=e.text;return a.default.createElement(o.DO,null,a.default.createElement(o.eb,{as:"h4"},t),a.default.createElement(u.xv,{mb:"1.5rem"},(0,d.NC)("You can use your Deriv MT5 demo account for as long as you want. However, if your account is inactive for 30 days, we'll deactivate it automatically.")))},A=function(e){var t=e.text;return a.default.createElement(o.DO,null,a.default.createElement(o.eb,{as:"h4"},t),a.default.createElement(u.xv,{mb:"1.5rem"},(0,d.NC)("Yes, we’ll transfer your balance to your Deriv account before your Deriv MT5 account is deactivated.")))},j=function(e){var t=e.text;return a.default.createElement(o.DO,null,a.default.createElement(o.eb,{as:"h4"},t),a.default.createElement(u.xv,{mb:"1.5rem"},(0,d.NC)("No, this isn’t possible on MT5.")))},z=function(e){var t=e.text;return a.default.createElement(o.DO,null,a.default.createElement(o.eb,{as:"h4"},t),a.default.createElement(u.xv,{mb:"1.5rem"},(0,d.NC)("No, you can't, but you may have multiple Deriv MT5 Synthetic accounts on different servers.")))},O=function(e){var t=e.text;return a.default.createElement(o.DO,null,a.default.createElement(o.eb,{as:"h4"},t),a.default.createElement(u.xv,{mb:"1.5rem"},(0,d.NC)("Yes, you can trade micro forex pairs with a Deriv MT5 Financial account.")))},W=function(e){var t=e.text;return a.default.createElement(o.DO,null,a.default.createElement(o.eb,{as:"h4"},t),a.default.createElement(u.xv,{mb:"1.5rem"},(0,d.NC)("The minimum volume for micro forex pairs is 0.1 lot.")))};t.default=(0,d.Wm)()((function(){var e=(0,i.t)(!1)[0],t=a.default.useContext(m.c).is_eu_country;return a.default.createElement("div",null,a.default.createElement(l.d,{header:"DMT5",title:(0,d.NC)("Help centre | Frequently asked questions | DMT5 | Deriv"),description:(0,d.NC)("Frequently asked questions - DMT5")},a.default.createElement(h,{text:(0,d.NC)("What is Deriv MetaTrader 5 (Deriv MT5)?"),label:"what-is-dmt5",is_mounted:e}),a.default.createElement(v,{text:(0,d.NC)("What are the main differences between your digital options and CFD platforms?"),label:"differences-of-dtrader-and-dmt5",is_mounted:e}),t?a.default.createElement(y,{text:(0,d.NC)("What is the CFDs account?"),label:"what-is-cfds-account",is_mounted:e}):a.default.createElement(p,{text:(0,d.NC)("What are the differences between the Deriv MT5 Synthetic, Financial, and Financial STP accounts?"),label:"differences-of-dmt5-accounts",is_mounted:e}),a.default.createElement(x,{text:(0,d.NC)("How can I withdraw funds from my Deriv MT5 real money account?"),label:"withdraw-funds-from-DMT5",is_mounted:e}),a.default.createElement(E,{text:(0,d.NC)("Why are my Deriv MT5 login details different from my Deriv login details?"),label:"login-credentials",is_mounted:e}),a.default.createElement(w,{text:(0,d.NC)("How can I change my Deriv MT5 password?"),label:"reset-dmt5-password",is_mounted:e}),a.default.createElement(g,{text:(0,d.NC)("How can I deposit funds into my Deriv MT5 real money account?"),label:"deposit-to-dmt5",is_mounted:e}),a.default.createElement(_,{text:(0,d.NC)("How do I log in to my Deriv MT5 account?"),label:"log-in-to-my-Deriv-MT5-account",is_mounted:e}),a.default.createElement(b,{text:(0,d.NC)("How do I set an investor password for my Deriv MT5 account?"),label:"investor-password-for-my-Deriv-MT5-account",is_mounted:e}),a.default.createElement(D,{text:(0,d.NC)("What is the name of my Deriv MT5 server?"),label:"name-of-my-Deriv-MT5-server",is_mounted:e}),a.default.createElement(M,{text:(0,d.NC)("What is the minimum amount to open a position on Deriv MT5?"),label:"minimum-amount-to-open-a-position-on-Deriv-MT5",is_mounted:e}),a.default.createElement(T,{text:(0,d.NC)("Why do my Deriv MT5 positions always start with a loss?"),label:"Deriv-MT5-positions-always-start-with-a-loss",is_mounted:e}),a.default.createElement(C,{text:(0,d.NC)("Do you offer swap-free Deriv MT5 accounts?"),label:"swap-free-Deriv-MT5-accounts",is_mounted:e}),a.default.createElement(N,{text:(0,d.NC)("How can I reactivate my Deriv MT5 account?"),label:"reactivate-my-Deriv-MT5-account",is_mounted:e}),a.default.createElement(I,{text:(0,d.NC)("Can I change the leverage on my Deriv MT5 account?"),label:"leverage-on-my-Deriv-MT5-account",is_mounted:e}),a.default.createElement(k,{text:(0,d.NC)("What time is shown in the MT5 terminal?"),label:"What-time-is-shown-in-the-MT5-terminal",is_mounted:e}),a.default.createElement(L,{text:(0,d.NC)("How can I download my Deriv MT5 history?"),label:"download-my-Deriv-MT5-history",is_mounted:e}),a.default.createElement(Y,{text:(0,d.NC)("Can I delete my Deriv MT5 account history?"),label:"delete-my-Deriv-MT5-account-history",is_mounted:e}),a.default.createElement(S,{text:(0,d.NC)("For how long can I use my Deriv MT5 demo account?"),label:"For-how-long-can-I-use-my-Deriv-MT5-demo-account",is_mounted:e}),a.default.createElement(A,{text:(0,d.NC)("Will my inactive Deriv MT5 account be deactivated even though I still have a balance?"),label:"Will-my-inactive-Deriv-MT5-account-be-deactivated",is_mounted:e}),a.default.createElement(j,{text:(0,d.NC)("Can I change the currency of my Deriv MT5 account?"),label:"Can-I-change-the-currency-of-my-Deriv-MT5-account",is_mounted:e}),a.default.createElement(z,{text:(0,d.NC)("Can I change the server for my Deriv MT5 account?"),label:"Can-I-change-the-server-for-my-Deriv-MT5-account",is_mounted:e}),a.default.createElement(O,{text:(0,d.NC)("Do you offer micro forex pairs on Deriv MT5?"),label:"offer-micro-forex-pairs-on-Deriv-MT5",is_mounted:e}),a.default.createElement(W,{text:(0,d.NC)("What is the minimum volume for micro forex pairs?"),label:"What-is-the-minimum-volume-for-micro-forex-pairs",is_mounted:e})))}))}}]);
//# sourceMappingURL=component---src-pages-help-centre-dmt-5-tsx-57fa33bbeb0a538d9e50.js.map