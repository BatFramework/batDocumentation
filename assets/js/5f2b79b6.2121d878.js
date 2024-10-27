"use strict";(self.webpackChunkbat_documentation=self.webpackChunkbat_documentation||[]).push([[482],{4880:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var s=t(4848),o=t(8453);const i={sidebar_position:2},c="Scenes",r={id:"basics/scenes",title:"Scenes",description:"Scenes are a fundamental part of your game. They make it so that everything is neatly organized.",source:"@site/docs/basics/scenes.md",sourceDirName:"basics",slug:"/basics/scenes",permalink:"/batDocumentation/docs/basics/scenes",draft:!1,unlisted:!1,editUrl:"https://github.com/BatFramework/batDocumentation/tree/main/docs/basics/scenes.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docSidebar",previous:{title:"Manager",permalink:"/batDocumentation/docs/basics/manager"},next:{title:"Entities",permalink:"/batDocumentation/docs/basics/entities"}},a={},d=[{value:"Why Scenes ?",id:"why-scenes-",level:2},{value:"Basics",id:"basics",level:2},{value:"World and Hud",id:"world-and-hud",level:3},{value:"How to use a Scene",id:"how-to-use-a-scene",level:3}];function l(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"scenes",children:"Scenes"})}),"\n",(0,s.jsx)(n.p,{children:"Scenes are a fundamental part of your game. They make it so that everything is neatly organized."}),"\n",(0,s.jsx)(n.h2,{id:"why-scenes-",children:"Why Scenes ?"}),"\n",(0,s.jsx)(n.p,{children:"As an example, picture a game with a title screen and a settings menu.\nWhithout scenes, the gameloop would contain code for both of those screens."}),"\n",(0,s.jsx)(n.p,{children:"After a while, you might add a game screen, a pause menu, etc...\nAt this point your gameloop would be very busy from all the different code needed to handle all those different screens."}),"\n",(0,s.jsx)(n.p,{children:"So as a good developer, you'd think to shorten and simplify your code by making functions or classes that encapsulate the logic of each scene to keep the gameloop neat and clean.\nThat's basically what scenes do !"}),"\n",(0,s.jsx)(n.h2,{id:"basics",children:"Basics"}),"\n",(0,s.jsx)(n.h3,{id:"world-and-hud",children:"World and Hud"}),"\n",(0,s.jsxs)(n.p,{children:["Each scene manages two types of entities : ",(0,s.jsx)(n.strong,{children:"WORLD"})," entities and ",(0,s.jsx)(n.strong,{children:"HUD"})," entities.",(0,s.jsx)(n.br,{}),"\n","World entities are processed first, followed by HUD entities.\nFor example, a player character would be in the world space, so it should be added as a world entity, as opposed to a life meter, or score counter that would be a HUD entity."]}),"\n",(0,s.jsx)(n.h3,{id:"how-to-use-a-scene",children:"How to use a Scene"}),"\n",(0,s.jsxs)(n.p,{children:["As said previously, to modify the behavior of a scene you have to inherit the ",(0,s.jsx)(n.code,{children:"Scene"})," class."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"class MyScene(bf.Scene):...\n"})}),"\n",(0,s.jsx)(n.p,{children:"Now you have access to a lot of methods from the class, let's review the most important ones:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"do_when_added(self)"})})," is called only once in the lifetime of the Scene instance, when it is linked with the Manager. You can initialize variables and entities for your scene in this method. Incidentally, the ",(0,s.jsx)(n.code,{children:"manager"})," attribute of the ",(0,s.jsx)(n.code,{children:"Scene"})," class serves as a pointer to the game manager, and is only accessible once this function has been called."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"do_update(self,dt:float)"})})," is called every frame with ",(0,s.jsx)(n.code,{children:"dt"})," being the time elapsed since the last frame (in milliseconds)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"do_on_enter(self)"})})," is called once every time the scene goes on top of the stack."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"do_on_exit(self)"})})," is called once every time the scene goes from the top of the stack to any position, including the top."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"add_world_entity(self, *entities: bf.Entity)"})})," add one or more world ",(0,s.jsx)(n.code,{children:"entity"})," to your scene."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"remove_world_entity(self, *entities: bf.Entity)"})})," remove one or more world ",(0,s.jsx)(n.code,{children:"entity"})," from your scene."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"add_hud_entity(self, *entities: bf.Entity)"})})," add one or more hud ",(0,s.jsx)(n.code,{children:"entity"})," to your scene."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"remove_hud_entity(self, *entities: bf.Entity)"})})," remove one or more hud ",(0,s.jsx)(n.code,{children:"entity"})," from your scene."]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{title:"Check the sources",type:"tip",children:(0,s.jsxs)(n.p,{children:["Check the source code on ",(0,s.jsx)(n.a,{href:"https://github.com/BatFramework/batFramework",children:"github"})," to see all the methods available to you."]})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>r});var s=t(6540);const o={},i=s.createContext(o);function c(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);