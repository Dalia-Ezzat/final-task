"use strict";(self.webpackChunkfreshcart=self.webpackChunkfreshcart||[]).push([[937],{937:(d,i,r)=>{r.r(i),r.d(i,{CategoriesComponent:()=>u});var a=r(6814),c=r(1120),e=r(4769),_=r(0);const s=function(t){return["/categorydetails",t]};function g(t,l){if(1&t&&(e.TgZ(0,"div",3)(1,"div",4),e._UZ(2,"img",5),e.TgZ(3,"h3",6),e._uU(4),e.qZA()()()),2&t){const n=l.$implicit;e.xp6(1),e.Q6J("routerLink",e.VKq(4,s,n._id)),e.xp6(1),e.Q6J("src",n.image,e.LSH)("alt",n.name),e.xp6(2),e.Oqu(n.name)}}let u=(()=>{var t;class l{constructor(o){this._ProductService=o,this.categoryData=[]}ngOnInit(){this._ProductService.getCategories().subscribe({next:o=>{this.categoryData=o.data}})}}return(t=l).\u0275fac=function(o){return new(o||t)(e.Y36(_.M))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-categories"]],standalone:!0,features:[e.jDz],decls:3,vars:1,consts:[[1,"my-4"],[1,"row","row-cols-sm-1","row-cols-md-1","row-cols-lg-3","row-cols-xl-3","g-4","justify-content-center"],["class","col",4,"ngFor","ngForOf"],[1,"col"],["role","button",1,"border","border-success","rounded","p-2","shadow",3,"routerLink"],["height","270",1,"w-100",3,"src","alt"],[1,"text-center","text-main"]],template:function(o,p){1&o&&(e.TgZ(0,"section",0)(1,"div",1),e.YNc(2,g,5,6,"div",2),e.qZA()()),2&o&&(e.xp6(2),e.Q6J("ngForOf",p.categoryData))},dependencies:[a.ez,a.sg,c.rH],styles:["section[_ngcontent-%COMP%]{margin-top:2em!important}"]}),l})()},0:(d,i,r)=>{r.d(i,{M:()=>_});var a=r(5619),c=r(4769),e=r(9862);let _=(()=>{var s;class g{constructor(t){this._HttpClient=t,this.baseUrl="https://ecommerce.routemisr.com/api/v1/",this.whishNumber=new a.X(0),this.whishList=new a.X([])}getProducts(t=1){return this._HttpClient.get(this.baseUrl+`products?page=${t}`)}getCategories(){return this._HttpClient.get(this.baseUrl+"categories")}getCategoryDetails(t){return this._HttpClient.get(this.baseUrl+`categories/${t}`)}getProductDetails(t){return this._HttpClient.get(this.baseUrl+`products/${t}`)}getBrands(t=1){return this._HttpClient.get(this.baseUrl+`brands?page=${t}`)}getBrandData(t){return this._HttpClient.get(this.baseUrl+`brands/${t}`)}getUserOrders(t){return this._HttpClient.get(this.baseUrl+"/orders/user/"+t)}}return(s=g).\u0275fac=function(t){return new(t||s)(c.LFG(e.eN))},s.\u0275prov=c.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),g})()}}]);