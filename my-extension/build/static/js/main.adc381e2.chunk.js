(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{122:function(e){e.exports={questions:[{name:"How the Big Bang Theory Works",tags:["Big Bang Theory","science"],domains:["science.howstuffworks.com"],answers:[],choices:[],votes:0,dismiss:0},{name:"What is the Kubernetes?",tags:["kubernetes","container-orchestration system","google"],domains:["kubernetes.io"],answers:[],choices:[],votes:0,dismiss:0},{name:"What is Kubernetes and how to use it?",tags:["kubernetes","container-orchestration system","google"],domains:["kubernetes.io"],answers:[],choices:[],votes:0,dismiss:0},{name:"What is a docker?",tags:["kubernetes","container-orchestration system","google"],domains:["kubernetes.io"],answers:[],choices:[],votes:0,dismiss:0},{name:"What is the Kubelet?",tags:["kubernetes","container-orchestration system","google"],domains:[],answers:[],choices:[],votes:0,dismiss:0},{name:"",tags:["kubernetes","container-orchestration system","google"],domains:["kubernetes.io"],answers:[],choices:[],votes:0,dismiss:0},{name:"What is Plant Scale",tags:["kubernetes","container-orchestration system","google","planet scale"],domains:["kubernetes.io"],answers:[],choices:[],votes:0,dismiss:0},{name:"How Self healing on kubernetes ?",tags:["kubernetes","self-healing"],domains:["kubernetes.io"],answers:["Restarts containers that fail, replaces and reschedules containers when nodes die, kills containers that don\u2019t respond to your user-defined health check, and doesn\u2019t advertise them to clients until they are ready to serve"],choices:[],votes:0,dismiss:0}]}},132:function(e,t,n){e.exports=n(265)},140:function(e,t,n){},142:function(e,t,n){},265:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n.n(s),o=n(29),i=n.n(o),r=(n(137),n(140),n(75)),c=n(30),u=n(31),l=n(35),h=n(32),m=n(34),d=n(21),g=(n(142),n(270)),b=n(112),p=n(272),v=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement(g.a,{style:{borderRadus:0}},a.a.createElement(g.a.Content,null,a.a.createElement(g.a.Header,null,a.a.createElement("div",{className:"qitw_col"},a.a.createElement("div",null,this.props.question.name),a.a.createElement(b.a,{disabled:!0,name:"times",onClick:function(){return e.props.onDismissQuestion(e.props.questionIndex)}}))),a.a.createElement(g.a.Meta,{className:"qitw_tag_parent"},this.props.question.tags.map(function(e){return a.a.createElement("span",{className:"qitw_tag"},e)})),a.a.createElement(g.a.Description,null)),a.a.createElement(g.a.Content,{extra:!0},a.a.createElement("div",{className:"ui two buttons"},a.a.createElement(p.a,{basic:!0,color:"green"},"Submit"),a.a.createElement(p.a,{basic:!0,color:"red"},"Skip"))))}}]),t}(s.Component),k=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return console.log(this.props),a.a.createElement(g.a.Group,null,this.props.questionData.map(function(t,n){return a.a.createElement(v,{question:t,questionIndex:n,onDismissQuestion:e.props.onDismissQuestion})}))}}]),t}(s.Component),f=n(122),w=n(271),O=function(e){function t(e){var n;Object(c.a)(this,t),n=Object(l.a)(this,Object(h.a)(t).call(this,e));var s=window.location.hostname;console.log(s),s="localhost"===s?"kubernetes.io":s;var a=f.questions.filter(function(e){return e.domains.indexOf(s.toLowerCase())>-1});return n.state={value:"",questions:a,domainQuestion:a},n.handleChange=n.handleChange.bind(Object(d.a)(Object(d.a)(n))),n.handleClickOutside=n.handleClickOutside.bind(Object(d.a)(Object(d.a)(n))),n.onDismissQuestion=n.onDismissQuestion.bind(Object(d.a)(Object(d.a)(n))),n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("mouseup",this.handleClickOutside)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("mouseup",this.handleClickOutside)}},{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleClickOutside",value:function(e){console.log(e);var t=document.all?document.selection.createRange().text:document.getSelection();console.log(t);var n=window.getSelection().toString(),s=Object(r.a)(this.state.domainQuestion);s=s.filter(function(e){return e.tags.filter(function(e){return e.indexOf(n.toLowerCase())>-1}).length>0}),this.setState({value:n,questions:s})}},{key:"onDismissQuestion",value:function(e){console.log(e);var t=Object(r.a)(this.state.questions);t.splice(e,1),this.setState({questions:t})}},{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement(w.a,{floating:!0},"You highlighted:",this.state.value,a.a.createElement("input",{id:"myinput",type:"hidden",name:"highlightedText",value:this.state.value,onChange:this.handleChange,onchange:this.handleChange})),a.a.createElement(k,{questionData:this.state.questions,onDismissQuestion:this.onDismissQuestion}))}}]),t}(s.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[132,2,1]]]);
//# sourceMappingURL=main.adc381e2.chunk.js.map