import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Custom  Pipes';

  userLogin(item : any){
    console.warn(item)

  }
  // Angular Pipes
  // today=Date();
  // user={
  // name: "adnan",  
  // age:21
  // }

  // Template Reference Variable

  // getVal(item: any) {
  //   console.warn(item)
  // }
  // two way binding 
  // name:any;
  // send data child to parent component

  // data = "x";
  // updateData(item:string){
  //  console.warn(item)
  //  this.data=item;
  // }
  // Reusable Component
  // userDetails = [
  //   {name:'Anil', email:'anil@gmail.com'},
  //   {name:'Bhasker', email:'bhasker@gmail.com'},
  //   {name:'sem', email:'sem@gmail.com'},
  //   {name:'peter', email:'peters@gmail.com'},

  // ]



  // send data child to parent Component
  // data = 10;
  // updatechild(){
  //   this.data=Math.floor(Math.random()*10)
  // }

  // Todo List
  // list:any[]=[];

  // addtask(item:string){
  //   console.warn(item)
  //   this.list.push({id:this.list.length, name:item}) 
  //   console.warn(this.list) 


  // }
  // removetask(id:number){
  //   console.warn(id)
  //   this.list=this.list.filter(item=>item.id!==id)

  // }


  // Toggle Element 

  // display = true;
  // toggle(){
  //   this.display=!this.display

  // }


  // Basic Form 
  // userData:any={};
  // getdata(data:NgForm){
  //   console.log(data)
  //   this.userData=data
  // }
  // StyleBinding


  // color = "green";
  // bgColor = "red"

  // updatecolor(){
  //   this.color="blue";
  //   this.bgColor="green"

  // }
  // Nested for loop

  // users=[
  //   { name: 'Anil',phone:'111',socialAccounts:['facebook','insta','gmail']},
  //   { name: 'Sam',phone:'222',socialAccounts:['Yt','Linkedin','yahoo']},
  //   { name: 'Peter',phone:'333',socialAccounts:['YT','insta','yahoo']},
  //   { name: 'Bruce',phone:'444',socialAccounts:['insat','Linkedin','gmail']}
  // ]

  // ngFor loop condition
  // users = ['anil','bhasker','sam','peter','bruce']
  // userDetail = [
  //   { name:'anil', email:'anil@gmail.com', phone: '2233'},
  //   { name:'bhasker', email:'bhasker@gmail.com', phone: '3344'},
  //   { name:'peter', email:'peter@gmail.com', phone: '4455'},
  //   { name:'bruce', email:'bruce@gmail.com', phone: '5566'},
  // ]



  // name = 'peter';
  // disable = false;
  // data = "code step by step"
  // getValue()
  // {
  //   return "get function data"
  // }ng version

  // getName()
  // {
  //   alert("function called")
  // }
  // getValue(name: any)
  // {
  //   alert("name");
  // }
  // getData(val: string) {
  //   console.warn(val)

  // }
  // displayVal:string = '';

  // getValue(val:string)
  // {
  //   console.log(val)
  //   this.displayVal=val;


  // }
  // count = 0;
  // counter(type:string)
  // {
  //   type === 'add' ?this.count++ : this.count--;

  // }
  // show = true;
  // color = 'blue';
  // color = 'xyz';

}