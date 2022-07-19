import e from"prop-types";import t from"moment";import s from"react";import{jsxs as i,jsx as r}from"react/jsx-runtime";import a from"react-onclickoutside";function n(){return n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var i in s)Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i])}return e},n.apply(this,arguments)}function o({onClickPrev:e,onClickSwitch:t,onClickNext:s,switchContent:a,switchColSpan:o,switchProps:l}){/*#__PURE__*/return i("tr",{children:[/*#__PURE__*/r("th",{className:"rdtPrev",onClick:e,children:/*#__PURE__*/r("span",{children:"‹"})}),/*#__PURE__*/r("th",n({className:"rdtSwitch",colSpan:o,onClick:t},l,{children:a})),/*#__PURE__*/r("th",{className:"rdtNext",onClick:s,children:/*#__PURE__*/r("span",{children:"›"})})]})}class l extends s.Component{constructor(...e){super(...e),this._setDate=e=>{this.props.updateDate(e)}}render(){/*#__PURE__*/return r("div",{className:"rdtDays",children:/*#__PURE__*/i("table",{children:[/*#__PURE__*/i("thead",{children:[this.renderNavigation(),this.renderDayHeaders()]}),/*#__PURE__*/r("tbody",{children:this.renderDays()}),this.renderFooter()]})})}renderNavigation(){const e=this.props.viewDate,t=e.localeData();/*#__PURE__*/return r(o,{onClickPrev:()=>this.props.navigate(-1,"months"),onClickSwitch:()=>this.props.showView("months"),onClickNext:()=>this.props.navigate(1,"months"),switchContent:t.months(e)+" "+e.year(),switchColSpan:5,switchProps:{"data-value":this.props.viewDate.month()}})}renderDayHeaders(){let e=function(e){const t=e.firstDayOfWeek();let s=[],i=0;return e._weekdaysMin.forEach(function(e){s[(7+i++-t)%7]=e}),s}(this.props.viewDate.localeData()).map((e,t)=>/*#__PURE__*/r("th",{className:"dow",children:e},e+t));/*#__PURE__*/return r("tr",{children:e})}renderDays(){const e=this.props.viewDate,t=e.clone().startOf("month"),s=e.clone().endOf("month");let i=[[],[],[],[],[],[]],a=e.clone().subtract(1,"months");a.date(a.daysInMonth()).startOf("week");let n=a.clone().add(42,"d"),o=0;for(;a.isBefore(n);)h(i,o++).push(this.renderDay(a,t,s)),a.add(1,"d");return i.map((e,t)=>/*#__PURE__*/r("tr",{children:e},`${n.month()}_${t}`))}renderDay(e,t,s){let i=this.props.selectedDate,r={key:e.format("M_D"),"data-value":e.date(),"data-month":e.month(),"data-year":e.year()},a="rdtDay";return e.isBefore(t)?a+=" rdtOld":e.isAfter(s)&&(a+=" rdtNew"),i&&e.isSame(i,"day")&&(a+=" rdtActive"),e.isSame(this.props.moment(),"day")&&(a+=" rdtToday"),this.props.isValidDate(e)?r.onClick=this._setDate:a+=" rdtDisabled",r.className=a,this.props.renderDay(r,e.clone(),i&&i.clone())}renderFooter(){if(this.props.timeFormat)/*#__PURE__*/return r("tfoot",{children:/*#__PURE__*/r("tr",{children:/*#__PURE__*/r("td",{onClick:()=>this.props.showView("time"),colSpan:7,className:"rdtTimeToggle",children:this.props.viewDate.format(this.props.timeFormat)})})})}}function h(e,t){return e[Math.floor(t/7)]}l.defaultProps={isValidDate:()=>!0,renderDay:(e,t)=>/*#__PURE__*/r("td",n({},e,{children:t.date()}))};class d extends s.Component{constructor(...e){super(...e),this._updateSelectedMonth=e=>{this.props.updateDate(e)}}render(){/*#__PURE__*/return i("div",{className:"rdtMonths",children:[/*#__PURE__*/r("table",{children:/*#__PURE__*/r("thead",{children:this.renderNavigation()})}),/*#__PURE__*/r("table",{children:/*#__PURE__*/r("tbody",{children:this.renderMonths()})})]})}renderNavigation(){let e=this.props.viewDate.year();/*#__PURE__*/return r(o,{onClickPrev:()=>this.props.navigate(-1,"years"),onClickSwitch:()=>this.props.showView("years"),onClickNext:()=>this.props.navigate(1,"years"),switchContent:e,switchColSpan:"2"})}renderMonths(){let e=[[],[],[]];for(let t=0;t<12;t++)p(e,t).push(this.renderMonth(t));return e.map((e,t)=>/*#__PURE__*/r("tr",{children:e},t))}renderMonth(e){const t=this.props.selectedDate;let s,i="rdtMonth";this.isDisabledMonth(e)?i+=" rdtDisabled":s=this._updateSelectedMonth,t&&t.year()===this.props.viewDate.year()&&t.month()===e&&(i+=" rdtActive");let a={key:e,className:i,"data-value":e,onClick:s};return this.props.renderMonth?this.props.renderMonth(a,e,this.props.viewDate.year(),this.props.selectedDate&&this.props.selectedDate.clone()):/*#__PURE__*/r("td",n({},a,{children:this.getMonthText(e)}))}isDisabledMonth(e){let t=this.props.isValidDate;if(!t)return!1;let s=this.props.viewDate.clone().set({month:e}),i=s.endOf("month").date()+1;for(;i-- >1;)if(t(s.date(i)))return!1;return!0}getMonthText(e){const t=this.props.viewDate;return(s=t.localeData().monthsShort(t.month(e)).substring(0,3)).charAt(0).toUpperCase()+s.slice(1);var s}}function p(e,t){return t<4?e[0]:t<8?e[1]:e[2]}class c extends s.Component{constructor(...e){super(...e),this.disabledYearsCache={},this._updateSelectedYear=e=>{this.props.updateDate(e)}}render(){/*#__PURE__*/return i("div",{className:"rdtYears",children:[/*#__PURE__*/r("table",{children:/*#__PURE__*/r("thead",{children:this.renderNavigation()})}),/*#__PURE__*/r("table",{children:/*#__PURE__*/r("tbody",{children:this.renderYears()})})]})}renderNavigation(){const e=this.getViewYear();/*#__PURE__*/return r(o,{onClickPrev:()=>this.props.navigate(-10,"years"),onClickSwitch:()=>this.props.showView("years"),onClickNext:()=>this.props.navigate(10,"years"),switchContent:`${e}-${e+9}`})}renderYears(){const e=this.getViewYear();let t=[[],[],[]];for(let s=e-1;s<e+11;s++)u(t,s-e).push(this.renderYear(s));return t.map((e,t)=>/*#__PURE__*/r("tr",{children:e},t))}renderYear(e){const t=this.getSelectedYear();let s,i="rdtYear";return this.isDisabledYear(e)?i+=" rdtDisabled":s=this._updateSelectedYear,t===e&&(i+=" rdtActive"),this.props.renderYear({key:e,className:i,"data-value":e,onClick:s},e,this.props.selectedDate&&this.props.selectedDate.clone())}getViewYear(){return 10*parseInt(this.props.viewDate.year()/10,10)}getSelectedYear(){return this.props.selectedDate&&this.props.selectedDate.year()}isDisabledYear(e){let t=this.disabledYearsCache;if(void 0!==t[e])return t[e];let s=this.props.isValidDate;if(!s)return!1;let i=this.props.viewDate.clone().set({year:e}),r=i.endOf("year").dayOfYear()+1;for(;r-- >1;)if(s(i.dayOfYear(r)))return t[e]=!1,!1;return t[e]=!0,!0}}function u(e,t){return t<3?e[0]:t<7?e[1]:e[2]}c.defaultProps={renderYear:(e,t)=>/*#__PURE__*/r("td",n({},e,{children:t}))};const m={hours:{min:0,max:23,step:1},minutes:{min:0,max:59,step:1},seconds:{min:0,max:59,step:1},milliseconds:{min:0,max:999,step:1}};class D extends s.Component{constructor(e){super(e),this.constraints=function(e){let t={};return Object.keys(m).forEach(s=>{t[s]=n({},m[s],e[s]||{})}),t}(e.timeConstraints),this.state=this.getTimeParts(e.selectedDate||e.viewDate)}render(){let e=[];const t=this.state;return this.getCounters().forEach((s,i)=>{i&&"ampm"!==s&&e.push(/*#__PURE__*/r("div",{className:"rdtCounterSeparator",children:":"},`sep${i}`)),e.push(this.renderCounter(s,t[s]))}),/*#__PURE__*/r("div",{className:"rdtTime",children:/*#__PURE__*/i("table",{children:[this.renderHeader(),/*#__PURE__*/r("tbody",{children:/*#__PURE__*/r("tr",{children:/*#__PURE__*/r("td",{children:/*#__PURE__*/r("div",{className:"rdtCounters",children:e})})})})]})})}renderCounter(e,t){return"hours"===e&&this.isAMPM()&&0==(t=(t-1)%12+1)&&(t=12),"ampm"===e&&(t=-1!==this.props.timeFormat.indexOf(" A")?this.props.viewDate.format("A"):this.props.viewDate.format("a")),/*#__PURE__*/i("div",{className:"rdtCounter",children:[/*#__PURE__*/r("span",{className:"rdtBtn",onMouseDown:t=>this.onStartClicking(t,"increase",e),children:"▲"}),/*#__PURE__*/r("div",{className:"rdtCount",children:t}),/*#__PURE__*/r("span",{className:"rdtBtn",onMouseDown:t=>this.onStartClicking(t,"decrease",e),children:"▼"})]},e)}renderHeader(){if(this.props.dateFormat)/*#__PURE__*/return r("thead",{children:/*#__PURE__*/r("tr",{children:/*#__PURE__*/r("td",{className:"rdtSwitch",colSpan:"4",onClick:()=>this.props.showView("days"),children:(this.props.selectedDate||this.props.viewDate).format(this.props.dateFormat)})})})}onStartClicking(e,t,s){if(e&&e.button&&0!==e.button)return;if("ampm"===s)return this.toggleDayPart();let i={},r=document.body;i[s]=this[t](s),this.setState(i),this.timer=setTimeout(()=>{this.increaseTimer=setInterval(()=>{i[s]=this[t](s),this.setState(i)},70)},500),this.mouseUpListener=()=>{clearTimeout(this.timer),clearInterval(this.increaseTimer),this.props.setTime(s,parseInt(this.state[s],10)),r.removeEventListener("mouseup",this.mouseUpListener),r.removeEventListener("touchend",this.mouseUpListener)},r.addEventListener("mouseup",this.mouseUpListener),r.addEventListener("touchend",this.mouseUpListener)}toggleDayPart(){let e=parseInt(this.state.hours,10);e>=12?e-=12:e+=12,this.props.setTime("hours",e)}increase(e){const t=this.constraints[e];let s=parseInt(this.state[e],10)+t.step;return s>t.max&&(s=t.min+(s-(t.max+1))),g(e,s)}decrease(e){const t=this.constraints[e];let s=parseInt(this.state[e],10)-t.step;return s<t.min&&(s=t.max+1-(t.min-s)),g(e,s)}getCounters(){let e=[],t=this.props.timeFormat;return-1!==t.toLowerCase().indexOf("h")&&(e.push("hours"),-1!==t.indexOf("m")&&(e.push("minutes"),-1!==t.indexOf("s")&&(e.push("seconds"),-1!==t.indexOf("S")&&e.push("milliseconds")))),this.isAMPM()&&e.push("ampm"),e}isAMPM(){return-1!==this.props.timeFormat.toLowerCase().indexOf(" a")}getTimeParts(e){const t=e.hours();return{hours:g("hours",t),minutes:g("minutes",e.minutes()),seconds:g("seconds",e.seconds()),milliseconds:g("milliseconds",e.milliseconds()),ampm:t<12?"am":"pm"}}componentDidUpdate(e){this.props.selectedDate?this.props.selectedDate!==e.selectedDate&&this.setState(this.getTimeParts(this.props.selectedDate)):e.viewDate!==this.props.viewDate&&this.setState(this.getTimeParts(this.props.viewDate))}}function g(e,t){const s={hours:1,minutes:2,seconds:2,milliseconds:3};let i=t+"";for(;i.length<s[e];)i="0"+i;return i}const v=e,w=function(){},f=v.oneOfType([v.instanceOf(t),v.instanceOf(Date),v.string]);class y extends s.Component{constructor(e){super(e),this._renderCalendar=()=>{const e=this.props,s=this.state;let i={viewDate:s.viewDate.clone(),selectedDate:this.getSelectedDate(),isValidDate:e.isValidDate,updateDate:this._updateDate,navigate:this._viewNavigate,moment:t,showView:this._showView};switch(s.currentView){case"years":return i.renderYear=e.renderYear,/*#__PURE__*/r(c,n({},i));case"months":return i.renderMonth=e.renderMonth,/*#__PURE__*/r(d,n({},i));case"days":return i.renderDay=e.renderDay,i.timeFormat=this.getFormat("time"),/*#__PURE__*/r(l,n({},i));default:return i.dateFormat=this.getFormat("date"),i.timeFormat=this.getFormat("time"),i.timeConstraints=e.timeConstraints,i.setTime=this._setTime,/*#__PURE__*/r(D,n({},i))}},this._showView=(e,t)=>{const s=(t||this.state.viewDate).clone(),i=this.props.onBeforeNavigate(e,this.state.currentView,s);i&&this.state.currentView!==i&&(this.props.onNavigate(i),this.setState({currentView:i}))},this.viewToMethod={days:"date",months:"month",years:"year"},this.nextView={days:"time",months:"days",years:"months"},this._updateDate=e=>{let t=this.state.currentView,s=this.getUpdateOn(this.getFormat("date")),i=this.state.viewDate.clone();i[this.viewToMethod[t]](parseInt(e.target.getAttribute("data-value"),10)),"days"===t&&(i.month(parseInt(e.target.getAttribute("data-month"),10)),i.year(parseInt(e.target.getAttribute("data-year"),10)));let r={viewDate:i};t===s?(r.selectedDate=i.clone(),r.inputValue=i.format(this.getFormat("datetime")),void 0===this.props.open&&this.props.input&&this.props.closeOnSelect&&this._closeCalendar(),this.props.onChange(i.clone())):this._showView(this.nextView[t],i),this.setState(r)},this._viewNavigate=(e,t)=>{let s=this.state.viewDate.clone();s.add(e,t),e>0?this.props.onNavigateForward(e,t):this.props.onNavigateBack(-e,t),this.setState({viewDate:s})},this._setTime=(e,t)=>{let s=(this.getSelectedDate()||this.state.viewDate).clone();s[e](t),this.props.value||this.setState({selectedDate:s,viewDate:s.clone(),inputValue:s.format(this.getFormat("datetime"))}),this.props.onChange(s)},this._openCalendar=()=>{this.isOpen()||this.setState({open:!0},this.props.onOpen)},this._closeCalendar=()=>{this.isOpen()&&this.setState({open:!1},()=>{this.props.onClose(this.state.selectedDate||this.state.inputValue)})},this._handleClickOutside=()=>{let e=this.props;e.input&&this.state.open&&void 0===e.open&&e.closeOnClickOutside&&this._closeCalendar()},this._onInputFocus=e=>{this.callHandler(this.props.inputProps.onFocus,e)&&this._openCalendar()},this._onInputChange=e=>{if(!this.callHandler(this.props.inputProps.onChange,e))return;const t=e.target?e.target.value:e,s=this.localMoment(t,this.getFormat("datetime"));let i={inputValue:t};s.isValid()?(i.selectedDate=s,i.viewDate=s.clone().startOf("month")):i.selectedDate=null,this.setState(i,()=>{this.props.onChange(s.isValid()?s:this.state.inputValue)})},this._onInputKeyDown=e=>{this.callHandler(this.props.inputProps.onKeyDown,e)&&9===e.which&&this.props.closeOnTab&&this._closeCalendar()},this._onInputClick=e=>{this.callHandler(this.props.inputProps.onClick,e)&&this._openCalendar()},this.state=this.getInitialState()}render(){/*#__PURE__*/return i(V,{className:this.getClassName(),onClickOut:this._handleClickOutside,children:[this.renderInput(),/*#__PURE__*/r("div",{className:"rdtPicker",children:this.renderView()})]})}renderInput(){if(!this.props.input)return;const e=n({type:"text",className:"form-control",value:this.getInputValue()},this.props.inputProps,{onFocus:this._onInputFocus,onChange:this._onInputChange,onKeyDown:this._onInputKeyDown,onClick:this._onInputClick});return this.props.renderInput?/*#__PURE__*/r("div",{children:this.props.renderInput(e,this._openCalendar,this._closeCalendar)}):/*#__PURE__*/r("input",n({},e))}renderView(){return this.props.renderView(this.state.currentView,this._renderCalendar)}getInitialState(){let e=this.props,t=this.getFormat("datetime"),s=this.parseDate(e.value||e.initialValue,t);return this.checkTZ(),{open:!e.input,currentView:e.initialViewMode||this.getInitialView(),viewDate:this.getInitialViewDate(s),selectedDate:s&&s.isValid()?s:void 0,inputValue:this.getInitialInputValue(s)}}getInitialViewDate(e){const t=this.props.initialViewDate;let s;if(t){if(s=this.parseDate(t,this.getFormat("datetime")),s&&s.isValid())return s;C('The initialViewDated given "'+t+'" is not valid. Using current date instead.')}else if(e&&e.isValid())return e.clone();return this.getInitialDate()}getInitialDate(){let e=this.localMoment();return e.hour(0).minute(0).second(0).millisecond(0),e}getInitialView(){const e=this.getFormat("date");return e?this.getUpdateOn(e):"time"}parseDate(e,t){let s;return e&&"string"==typeof e?s=this.localMoment(e,t):e&&(s=this.localMoment(e)),s&&!s.isValid()&&(s=null),s}getClassName(){let e="rdt",t=this.props,s=t.className;return Array.isArray(s)?e+=" "+s.join(" "):s&&(e+=" "+s),t.input||(e+=" rdtStatic"),this.isOpen()&&(e+=" rdtOpen"),e}isOpen(){return!this.props.input||(void 0===this.props.open?this.state.open:this.props.open)}getUpdateOn(e){return this.props.updateOnView?this.props.updateOnView:e.match(/[lLD]/)?"days":-1!==e.indexOf("M")?"months":-1!==e.indexOf("Y")?"years":"days"}getLocaleData(){let e=this.props;return this.localMoment(e.value||e.defaultValue||new Date).localeData()}getDateFormat(){const e=this.getLocaleData();let t=this.props.dateFormat;return!0===t?e.longDateFormat("L"):t||""}getTimeFormat(){const e=this.getLocaleData();let t=this.props.timeFormat;return!0===t?e.longDateFormat("LT"):t||""}getFormat(e){if("date"===e)return this.getDateFormat();if("time"===e)return this.getTimeFormat();let t=this.getDateFormat(),s=this.getTimeFormat();return t&&s?t+" "+s:t||s}updateTime(e,t,s,i){let r={};const a=i?"selectedDate":"viewDate";r[a]=this.state[a].clone()[e](t,s),this.setState(r)}localMoment(e,s,i){let r=null;return r=(i=i||this.props).utc?t.utc(e,s,i.strictParsing):i.displayTimeZone?t.tz(e,s,i.displayTimeZone):t(e,s,i.strictParsing),i.locale&&r.locale(i.locale),r}checkTZ(){const{displayTimeZone:e}=this.props;!e||this.tzWarning||t.tz||(this.tzWarning=!0,C('displayTimeZone prop with value "'+e+'" is used but moment.js timezone is not loaded.',"error"))}componentDidUpdate(e){if(e===this.props)return;let t=!1,s=this.props;["locale","utc","displayZone","dateFormat","timeFormat"].forEach(function(i){e[i]!==s[i]&&(t=!0)}),t&&this.regenerateDates(),s.value&&s.value!==e.value&&this.setViewDate(s.value),this.checkTZ()}regenerateDates(){const e=this.props;let t=this.state.viewDate.clone(),s=this.state.selectedDate&&this.state.selectedDate.clone();e.locale&&(t.locale(e.locale),s&&s.locale(e.locale)),e.utc?(t.utc(),s&&s.utc()):e.displayTimeZone?(t.tz(e.displayTimeZone),s&&s.tz(e.displayTimeZone)):(t.locale(),s&&s.locale());let i={viewDate:t,selectedDate:s};s&&s.isValid()&&(i.inputValue=s.format(this.getFormat("datetime"))),this.setState(i)}getSelectedDate(){if(void 0===this.props.value)return this.state.selectedDate;let e=this.parseDate(this.props.value,this.getFormat("datetime"));return!(!e||!e.isValid())&&e}getInitialInputValue(e){const t=this.props;return t.inputProps.value?t.inputProps.value:e&&e.isValid()?e.format(this.getFormat("datetime")):t.value&&"string"==typeof t.value?t.value:t.initialValue&&"string"==typeof t.initialValue?t.initialValue:""}getInputValue(){let e=this.getSelectedDate();return e?e.format(this.getFormat("datetime")):this.state.inputValue}setViewDate(e){let t,s=function(){return C("Invalid date passed to the `setViewDate` method: "+e)};return e?(t="string"==typeof e?this.localMoment(e,this.getFormat("datetime")):this.localMoment(e),t&&t.isValid()?void this.setState({viewDate:t}):s()):s()}navigate(e){this._showView(e)}callHandler(e,t){return!e||!1!==e(t)}}function C(e,t){let s="undefined"!=typeof window&&window.console;s&&(t||(t="warn"),s[t]("***react-datetime:"+e))}y.propTypes={value:f,initialValue:f,initialViewDate:f,initialViewMode:v.oneOf(["years","months","days","time"]),onOpen:v.func,onClose:v.func,onChange:v.func,onNavigate:v.func,onBeforeNavigate:v.func,onNavigateBack:v.func,onNavigateForward:v.func,updateOnView:v.string,locale:v.string,utc:v.bool,displayTimeZone:v.string,input:v.bool,dateFormat:v.oneOfType([v.string,v.bool]),timeFormat:v.oneOfType([v.string,v.bool]),inputProps:v.object,timeConstraints:v.object,isValidDate:v.func,open:v.bool,strictParsing:v.bool,closeOnSelect:v.bool,closeOnTab:v.bool,renderView:v.func,renderInput:v.func,renderDay:v.func,renderMonth:v.func,renderYear:v.func},y.defaultProps={onOpen:w,onClose:w,onCalendarOpen:w,onCalendarClose:w,onChange:w,onNavigate:w,onBeforeNavigate:function(e){return e},onNavigateBack:w,onNavigateForward:w,dateFormat:!0,timeFormat:!0,utc:!1,className:"",input:!0,inputProps:{},timeConstraints:{},isValidDate:function(){return!0},strictParsing:!0,closeOnSelect:!1,closeOnTab:!0,closeOnClickOutside:!0,renderView:(e,t)=>t()},y.moment=t;const V=a(class extends s.Component{constructor(...e){super(...e),this.container=/*#__PURE__*/s.createRef()}render(){/*#__PURE__*/return r("div",{className:this.props.className,ref:this.container,children:this.props.children})}handleClickOutside(e){this.props.onClickOut(e)}setClickOutsideRef(){return this.container.current}});export{y as default};
//# sourceMappingURL=react-datetime.modern.mjs.map
