(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{id:1,image:"https://static0.cbrimages.com/wordpress/wp-content/uploads/2018/04/Amazing-Spider-Man-Vol-3-1-J-Scott-Campbell-Connecting-Variant.jpg?q=50&fit=crop&w=963&dpr=1.5"},{id:2,image:"https://static1.cbrimages.com/wordpress/wp-content/uploads/2018/04/448394.-SX1280-QL80-TTD-.jpg?q=50&fit=crop&w=963&dpr=1.5"},{id:3,image:"https://static3.cbrimages.com/wordpress/wp-content/uploads/2018/04/0-f16d.jpg?q=50&fit=crop&w=963&dpr=1.5"},{id:4,image:"https://static3.cbrimages.com/wordpress/wp-content/uploads/2018/04/Wolverine-1.jpg?q=50&fit=crop&w=963&dpr=1.5"},{id:5,image:"https://static1.cbrimages.com/wordpress/wp-content/uploads/2018/04/daredevil.jpg?q=50&fit=crop&w=963&dpr=1.5"},{id:6,image:"https://static1.cbrimages.com/wordpress/wp-content/uploads/2018/04/black-panther-coates.jpg?q=50&fit=crop&w=963&dpr=1.5"},{id:7,image:"https://static3.cbrimages.com/wordpress/wp-content/uploads/2018/04/APR160999.jpg?q=50&fit=crop&w=963&dpr=1.5"},{id:8,image:"https://static1.cbrimages.com/wordpress/wp-content/uploads/2018/04/miles-morales.jpg?q=50&fit=crop&w=963&dpr=1.5"},{id:9,image:"https://static1.cbrimages.com/wordpress/wp-content/uploads/2018/04/indestructible-hulk-1-page-14-e1522787652668.jpg?q=50&fit=crop&w=963&dpr=1.5"},{id:10,image:"https://static3.cbrimages.com/wordpress/wp-content/uploads/2018/04/Ms-Marvel.jpg?q=50&fit=crop&w=963&dpr=1.5"},{id:11,image:"https://static0.cbrimages.com/wordpress/wp-content/uploads/2018/04/captain-marvel-carol-danvers.jpg?q=50&fit=crop&w=963&dpr=1.5"},{id:12,image:"https://static1.cbrimages.com/wordpress/wp-content/uploads/2018/04/Unworthy-Thor-5-Marvel-Now-2017-spoilers-A-1.jpg?q=50&fit=crop&w=963&dpr=1.5"}]},,,,,,,,,function(e,t,a){e.exports=a(26)},,,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var r=a(0),s=a.n(r),c=a(3),o=a.n(c),i=(a(16),a(4)),n=a(5),p=a(7),l=a(6),d=a(9),m=(a(18),function(e){return s.a.createElement("div",{className:"card img-container hover"},s.a.createElement("img",{alt:e.name,src:e.image,id:e.id,onClick:function(){return e.shuffleScoreCard(e.id)},className:"shuffleScore"}))}),u=(a(20),function(e){return s.a.createElement("div",{className:"wrapper"},e.children)}),g=(a(22),a(8)),h=function(e){return s.a.createElement("div",{className:"gameScore"},s.a.createElement("h3",{className:"score"},"Your Score ",s.a.createElement(g.a,null)," ",e.total),s.a.createElement("h3",{className:"status"},e.status))},w=a(1),f=(a(24),function(e){function t(){var e,a;Object(i.a)(this,t);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(a=Object(p.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(s)))).state={heroes:w,clickedIds:[],score:0,goal:8,status:""},a.shuffleScoreCard=function(e){var t=a.state.clickedIds;if(t.includes(e))a.setState({clickedIds:[],score:0,status:"Game Over! You lost! Try again!"});else{if(t.push(e),8===t.length)return a.setState({score:8,status:"Congratulations! You won!",clickedIds:[]}),void console.log("You Win");a.setState({heroes:w,clickedIds:t,score:t.length,status:" "});for(var r=w.length-1;r>0;r--){var s=Math.floor(Math.random()*(r+1)),c=[w[s],w[r]];w[r]=c[0],w[s]=c[1]}}},a}return Object(d.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"App"},s.a.createElement("header",{className:"App-header text-center text-red"},s.a.createElement("h1",{className:"App-title"},"Clicking Game: Marvel Edition"),s.a.createElement("p",{className:"App-intro"},"Avoid clicking the same image twice!")),s.a.createElement(h,{total:this.state.score,goal:8,status:this.state.status}),s.a.createElement(u,null,this.state.heroes.map(function(t){return s.a.createElement(m,{shuffleScoreCard:e.shuffleScoreCard,id:t.id,key:t.id,image:t.image})})),s.a.createElement("footer",null,s.a.createElement("div",{className:"copyright py-4 text-center"},s.a.createElement("div",{className:"container"},s.a.createElement("small",null,"Copyright \xa9 Mike Diallo 2019")))))}}]),t}(r.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[10,2,1]]]);
//# sourceMappingURL=main.409d8ce7.chunk.js.map