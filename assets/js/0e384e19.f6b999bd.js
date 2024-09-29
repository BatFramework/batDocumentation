"use strict";(self.webpackChunkbat_documentation=self.webpackChunkbat_documentation||[]).push([[976],{619:(A,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>a,default:()=>v,frontMatter:()=>r,metadata:()=>f,toc:()=>s});var t=n(4848),d=n(8453);const r={sidebar_position:1},a="Basics",f={id:"intro",title:"Basics",description:"Getting Started",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/batDocumentation/docs/intro",draft:!1,unlisted:!1,editUrl:"https://github.com/BatFramework/batDocumentation/tree/main/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Tutorial - Basics",permalink:"/batDocumentation/docs/category/tutorial---basics"}},l={},s=[{value:"Getting Started",id:"getting-started",level:2},{value:"What you&#39;ll need",id:"what-youll-need",level:3},{value:"Your first project",id:"your-first-project",level:2},{value:"Project structure",id:"project-structure",level:3},{value:"Get a window running",id:"get-a-window-running",level:3},{value:"Have a Scene",id:"have-a-scene",level:3}];function i(A){const e={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,d.R)(),...A.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.header,{children:(0,t.jsx)(e.h1,{id:"basics",children:"Basics"})}),"\n",(0,t.jsx)(e.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,t.jsx)(e.p,{children:"batFramework is available on Windows/Linux and only requires the pygame-ce library as a direct dependency."}),"\n",(0,t.jsx)(e.h3,{id:"what-youll-need",children:"What you'll need"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"Pygame-ce (install latest version using pip install):"}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"Python >=3.11"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.admonition,{title:"Quick Install",type:"tip",children:[(0,t.jsx)(e.p,{children:"The following command will install batFramework and pygame-ce."}),(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"pip install --upgrade --pre batFramework\n"})})]}),"\n",(0,t.jsx)(e.h2,{id:"your-first-project",children:"Your first project"}),"\n",(0,t.jsx)(e.h3,{id:"project-structure",children:"Project structure"}),"\n",(0,t.jsx)(e.p,{children:"A batFramework game is organized in the following way:"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"Manager"})," handles the game and its scenes"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"Scenes"}),"  handles the entities/objects"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"Entities"})," are the building block of the game"]}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"When you want to add specialized behavior, you should inherit\nthe class from the framework and override the relevant functions\nto specialize it according to your needs."}),"\n",(0,t.jsx)(e.h3,{id:"get-a-window-running",children:"Get a window running"}),"\n",(0,t.jsx)(e.p,{children:"Here's the minimum you need to run a batFramework project.\nThe following code will create an empty window with the right resolution."}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:'\nimport batFramework as bf\n\nbf.init((640,480))\n\nbf.Manager(bf.Scene("main")).run()\n\n'})}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"Minimal",src:n(8489).A+"",width:"640",height:"536"})}),"\n",(0,t.jsx)(e.h3,{id:"have-a-scene",children:"Have a Scene"}),"\n",(0,t.jsx)(e.p,{children:"By inheriting a scene, you can modify access its methods, override them and customize it.\nAs an example, let's change the scene's background."}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:'\nimport batFramework as bf\n\nclass MainScene(bf.Scene):\n\tdef do_when_added(self)->None:\n\t\tself.set_clear_color("blue")\n\nbf.init((640,480))\n\nbf.Manager(MainScene("main")).run()\n\n'})}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"blue",src:n(7394).A+"",width:"640",height:"536"})}),"\n",(0,t.jsxs)(e.admonition,{type:"note",children:[(0,t.jsx)(e.mdxAdmonitionTitle,{}),(0,t.jsx)(e.p,{children:"You can check the Scene class to learn all the different methods the framework gives you."})]})]})}function v(A={}){const{wrapper:e}={...(0,d.R)(),...A.components};return e?(0,t.jsx)(e,{...A,children:(0,t.jsx)(i,{...A})}):i(A)}},7394:(A,e,n)=>{n.d(e,{A:()=>t});const t="data:image/png;base64,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CDAABBBgAAggwAAQQIABIIAAA0AAAQaAAAIMAAEEGAACCDAABBBgAAggwAAQQIABIIAAA0AAAQaAAAIMAAEEGAACCDAABBBgAAggwAAQQIABIIAAA0AAAQaAAAIMAAEEGAACCDAABBBgAAggwAAQQIABIIAAA0AAAQaAAAIMAAEEGAACCDAABBBgAAggwAAQQIABIIAAA0AAAQaAAAIMAAEEGAACCDAABBBgAAggwAAQQIABIIAAA0AAAQaAAAIMAAEEGAACCDAABBBgAAggwAAQQIABIIAAA0AAAQaAAAIMAAEEGAACCDAABBBgAAggwAAQQIABIIAAA0AAAQaAAAIMAAEEGAACCDAABBBgAAggwAAQQIABIIAAA0AAAQaAAAIMAAEEGAACCDAABBBgAAggwAAQQIABIIAAA0AAAQaAAAIMAAEEGAACCDAABBBgAAggwAAQQIABIIAAA0AAAQaAAAIMAAEEGAACCDAABBBgAAggwAAQQIABIIAAA0AAAQaAAAIMAAEEGAACCDAABBBgAAggwAAQQIABIIAAA0AAAQaAAAIMAAEEGAACCDAABBBgAAggwAAQQIABIIAAA0AAAQaAAAIMAAEEGAACCDAABBBgAAggwAAQQIABIIAAA0AAAQaAAAIMAAEEGAACCDAABBBgAAggwAAQQIABIIAAA0AAAQaAAAIMAAEEGAACCDAABBBgAAggwAAQQIABIIAAA0AAAQaAAAIMAAEEGAACCDAABBBgAAggwAAQQIABIIAAA0AAAQaAAAIMAAEEGAACCDAABBBgAAggwAAQQIABIIAAA0AAAQaAAAIMAAEEGAACCDAABBBgAAggwAAQQIABIIAAA0AAAQaAAAIMAAEEGAACCDAABBBgAAggwAAQQIABIIAAA0AAAQaAAAIMAAEEGAACCDAABBBgAAggwAAQQIABIIAAA0AAAQaAAAIMAAEEGAACCDAABBBgAAggwAAQQIABIIAAA0AAAQaAAAIMAAEEGAACCDAABBBgAAggwAAQQIABIIAAA0AAAQaAAAIMAAEEGAACCDAABBBgAAggwAAQQIABIIAAA0AAAQaAAAIMAAEEGAACCDAABBBgAAggwAAQQIABIIAAA0AAAQaAAAIMAAEEGAACCDAABBBgAAggwAAQQIABIIAAA0AAAQaAAAIMAAEEGAACCDAABBBgAAggwAAQQIABIIAAA0AAAQaAAAIMAAEEGAACCDAABBBgAAggwAAQQIABIIAAA0AAAQaAAAIMAAEEGAACCDAABBBgAAggwAAQQIABIIAAA0AAAQaAAAIMAAEEGAACCDAABBBgAAggwAAQQIABIIAAA0AAAQaAAAIMAAEEGAACCDAABBBgAAggwAAQQIABIIAAA0AAAQaAAAIMAAEEGAACCDAABBBgAAggwAAQQIABIIAAA0AAAQaAAAIMAAEEGAACCDAABBBgAAggwAAQQIABIIAAA0AAAQaAAAIMAAEEGAACCDAABBBgAAggwAAQQIABIIAAA0AAAQaAAAIMAAEEGAACCDAABBBgAAggwAAQQIABIIAAA0AAAQaAAAIMAAEEGAACCDAABBBgAAggwAAQQIABIIAAA0AAAQaAAAIMAAEEGAACCDAABBBgAAggwAAQQIABIIAAA0AAAQaAAAIMAAEEGAACCDAABBBgAAggwAAQQIABIIAAA0AAAQaAAAIMAAEEGAACCDAABBBgAAggwAAQQIABIIAAA0AAAQaAAAIMAAEEGAACCDAABBBgAAggwAAQQIABIIAAA0AAAQaAAAIMAAEEGAACCDAABBBgAAggwAAQQIABIIAAA0AAAQaAAAIMAAEEGAACCDAABBBgAAggwAAQQIABIIAAA0AAAQaAAAIMAAEEGAACCDAABBBgAAggwAAQQIABIIAAA0AAAQaAAAIMAAEEGAACCDAABBBgAAggwAAQQIABIIAAA0AAAQaAAAIMAAEEGAACCDAABBBgAAggwAAQQIABIIAAA0AAAQaAAAIMAAEEGAACCDAABBBgAAggwAAQQIABIIAAA0AAAQaAAAIMAAEEGAACCDAABBBgAAggwAAQQIABIIAAA0AAAQaAAAIMAAEEGAACCDAABBBgAAggwAAQQIABIIAAA0AAAQaAAAIMAAEEGAACCDAABBBgAAggwAAQQIABIIAAA0AAAQaAAAIMAAEEGAACCDAABBBgAAggwAAQQIABIIAAA0AAAQaAAAIMAAEEGAACCDAABBBgAAggwAAQQIABIIAAA0AAAQaAAAIMAAEEGAACCDAABPj/nK+iToYPs2YAAAAASUVORK5CYII="},8489:(A,e,n)=>{n.d(e,{A:()=>t});const t="data:image/png;base64,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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAzpD/D+90nZByCcI/AAAAAElFTkSuQmCC"},8453:(A,e,n)=>{n.d(e,{R:()=>a,x:()=>f});var t=n(6540);const d={},r=t.createContext(d);function a(A){const e=t.useContext(r);return t.useMemo((function(){return"function"==typeof A?A(e):{...e,...A}}),[e,A])}function f(A){let e;return e=A.disableParentContext?"function"==typeof A.components?A.components(d):A.components||d:a(A.components),t.createElement(r.Provider,{value:e},A.children)}}}]);