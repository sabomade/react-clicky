(this["webpackJsonpclicky-app"]=this["webpackJsonpclicky-app"]||[]).push([[0],[,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"name":"alien","image":"img/alien.png"},{"id":2,"name":"blueMonster","image":"img/blueMonster.png"},{"id":3,"name":"dodge","image":"img/dodge.png"},{"id":4,"name":"fox","image":"img/fox.png"},{"id":5,"name":"heart","image":"img/heart.png"},{"id":6,"name":"pinkMonster","image":"img/pinkMonster.png"},{"id":7,"name":"rainbowCloud","image":"img/rainbowCloud.png"},{"id":8,"name":"unicornCat","image":"img/unicornCat.png"}]')},,,,function(e,t,a){e.exports=a(21)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(2),i=a.n(c),r=(a(15),a(7)),l=a(3),s=a(4),m=a(8),u=a(5),g=a(9),d=a(6);a(16),a(17);var f=function(e){return o.a.createElement("nav",{className:"navbar fixed-top"},o.a.createElement("span",{className:"navbar-text"},"Clicky Game"),o.a.createElement("span",{className:"navbar-text"},e.info),o.a.createElement("span",{className:"navbar-text"},"Score: ",e.count," | Top Score: ",e.topScore))};a(18);var p=function(e){return o.a.createElement("div",{className:"jumbotron jumbotron-fluid"},o.a.createElement("div",{className:"container"},o.a.createElement("h1",{className:"display-4"},"Clicky Game"),o.a.createElement("p",{className:"lead"},"Click on am image to score a point. Be careful not to click on the same image twice or you'll lose!")))};a(19);var h=function(e){return o.a.createElement("div",{className:"container"},e.children)};a(20);var k=function(e){return o.a.createElement("div",{className:"card"},o.a.createElement("img",{src:e.image,className:"card-img-top",alt:e.name,onClick:e.handleClick}))},v=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={badges:d,count:0,clicked:[],topScore:0,info:"Click on an image to begin!"},a.shuffle=function(e){for(var t,a,n=Object(r.a)(e),o=n.length;o>0;)a=Math.floor(Math.random()*o),t=n[--o],n[o]=n[a],n[a]=t;return n},a.handleClick=function(e){console.log("this.state.clicked",a.state.clicked);var t=a.state.clicked.filter((function(t){return t===e}));console.log("checkArray",t),0===t.length?(a.state.topScore===a.state.count&&a.setState({topScore:a.state.topScore+1}),a.setState({count:a.state.count+1,info:"Great Job! You guessed right!"}),a.setState((function(t){t.clicked.push(e)}))):a.setState({info:"Wrong! Try again.",count:0,clicked:[]});var n=a.state.badges;console.log("stickers",n);var o=a.shuffle(n);console.log("shuffledBadges",o),console.log("==============="),a.setState({badges:o})},a}return Object(g.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement(f,{info:this.state.info,count:this.state.count,topScore:this.state.topScore}),o.a.createElement(p,null),o.a.createElement(h,null,this.state.badges.map((function(t){return o.a.createElement(k,{key:t.id,name:t.name,image:t.image,handleClick:function(){return e.handleClick(t.id)}})}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.b07363a0.chunk.js.map