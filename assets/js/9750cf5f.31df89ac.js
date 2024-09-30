"use strict";(self.webpackChunkbat_documentation=self.webpackChunkbat_documentation||[]).push([[74],{4923:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var s=t(4848),o=t(8453);const i={sidebar_position:2},a="Scenes",r={id:"tutorial-basics/scenes",title:"Scenes",description:"Scenes are a fundamental part of your game. They make it so that everything is neatly organized.",source:"@site/docs/tutorial-basics/scenes.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/scenes",permalink:"/batDocumentation/docs/tutorial-basics/scenes",draft:!1,unlisted:!1,editUrl:"https://github.com/BatFramework/batDocumentation/tree/main/docs/tutorial-basics/scenes.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Manager",permalink:"/batDocumentation/docs/tutorial-basics/manager"},next:{title:"Entities",permalink:"/batDocumentation/docs/tutorial-basics/entities"}},c={},d=[{value:"Why Scenes ?",id:"why-scenes-",level:2},{value:"Basics",id:"basics",level:2},{value:"World and Hud",id:"world-and-hud",level:3},{value:"How to use a Scene",id:"how-to-use-a-scene",level:3}];function l(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"scenes",children:"Scenes"})}),"\n",(0,s.jsx)(n.p,{children:"Scenes are a fundamental part of your game. They make it so that everything is neatly organized."}),"\n",(0,s.jsx)(n.h2,{id:"why-scenes-",children:"Why Scenes ?"}),"\n",(0,s.jsx)(n.p,{children:"As an example, picture a game with a title screen and a settings menu.\nWhithout scenes, the gameloop would contain code for both of those screens."}),"\n",(0,s.jsx)(n.p,{children:"After a while, you might add a game screen, a pause menu, etc...\nAt this point your gameloop would be very busy from all the different code needed to handle all those different screens."}),"\n",(0,s.jsx)(n.p,{children:"So as a good developer, you'd think to shorten and simplify your code by making functions or classes that encapsulate the logic of each scene to keep the gameloop neat and clean.\nThat's basically what scenes do !"}),"\n",(0,s.jsx)(n.h2,{id:"basics",children:"Basics"}),"\n",(0,s.jsx)(n.h3,{id:"world-and-hud",children:"World and Hud"}),"\n",(0,s.jsxs)(n.p,{children:["Each scene has 2 cameras, one for ",(0,s.jsx)(n.strong,{children:"WORLD"})," entities and one for ",(0,s.jsx)(n.strong,{children:"HUD"})," entities.\nWorld entities are drawn first, followed by HUD entities.\nFor example, a player character would be in the world space, so it should be added as a world entity, as opposed to a life meter, or score counter that would be a HUD entity."]}),"\n",(0,s.jsx)(n.p,{children:"Each of these cameras can be handled separately and if you want more control, there are hook methods available to manipulate the screen before, in-between and after drawing the 2 cameras to the final screen."}),"\n",(0,s.jsx)(n.h3,{id:"how-to-use-a-scene",children:"How to use a Scene"}),"\n",(0,s.jsxs)(n.p,{children:["As said previously, to use a scene you have to inherit the ",(0,s.jsx)(n.code,{children:"Scene"})," class."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"class MyScene(bf.Scene):...\n"})}),"\n",(0,s.jsx)(n.p,{children:"Now you have access to a lot of methods from the class, let's review the most important ones:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"do_when_added(self)"})})," is called only once in the lifetime of the Scene instance, when it is linked with the Manager. You can initialize variables and entities for your scene in this method. Incidentally, the ",(0,s.jsx)(n.code,{children:"manager"})," attribute of the ",(0,s.jsx)(n.code,{children:"Scene"})," class serves as a pointer to the game manager, and is only accessible once this function has been called."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"do_update(self,dt:float)"})})," is called every frame with ",(0,s.jsx)(n.code,{children:"dt"})," being the time elapsed since the last frame (in milliseconds)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"do_on_enter(self)"})})," is called once every time the scene goes on top of the stack."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"do_on_exit(self)"})})," is called once every time the scene goes from the top of the stack to any position, including the top."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"add_world_entity(self, *entities: bf.Entity)"})})," add one or more world ",(0,s.jsx)(n.code,{children:"entity"})," to your scene."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"remove_world_entity(self, *entities: bf.Entity)"})})," remove one or more world ",(0,s.jsx)(n.code,{children:"entity"})," from your scene."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"add_hud_entity(self, *entities: bf.Entity)"})})," add one or more hud ",(0,s.jsx)(n.code,{children:"entity"})," to your scene."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"remove_hud_entity(self, *entities: bf.Entity)"})})," remove one or more hud ",(0,s.jsx)(n.code,{children:"entity"})," from your scene."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>r});var s=t(6540);const o={},i=s.createContext(o);function a(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);