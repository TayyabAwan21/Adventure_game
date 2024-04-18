#! /usr/bin/env node

import inquirer from "inquirer"
import chalk from "chalk"

class Player{
    name:string
    health:number=100
    constructor(n:string) {
        this.name=n
    }
    healthDecrease() {
        let health= this.health-25
    this.health= health }
    healthIncrease(){
        this.health=100
    }
}

class Villan {
    name:string
    health:number=100

    constructor(n:string){
        this.name= n
    }
    healthDecrease(){
        let health= this.health -25
        this.health= health
    }
}
console.log(chalk.greenBright.bold("Welcome to Tayyab's Game"))

let user= await inquirer.prompt({
    name:"name", type:"input",
    message:"Enter Player's name: "
})
let p1= new Player(user.name)

let villan= await inquirer.prompt({
    name:"enemy", type:"list",
    message: "Choose the Villan:  ",
    choices:["Lion","Zombie","Vishanu"]
})
let v1= new Villan(villan.enemy)

do{
if(villan.enemy == "Lion")    { 
    let strategy= await inquirer.prompt({
        name: "act", type:"list",
        message:"Choose an Action:   ",
        choices:["Attack","Drink Health Portion","Run"]
    }); 
     if(strategy.act == "Attack") {
        let num= Math.floor(Math.random()*2)
        if(num ==1) {
            p1.healthDecrease()
        console.log(chalk.redBright.bold(`${p1.name} health is ${p1.health}`))
        console.log(chalk.greenBright.bold(`${v1.name} health is ${v1.health}`))
        if(p1.health<=0) 
        {console.log(chalk.bgRed(`${p1.name} has lost !!!`)); process.exit();}
        }
        else if(num ==0) {
            v1.healthDecrease()
        console.log(chalk.redBright.bold(`${v1.name} health is ${v1.health}`))
        console.log(chalk.greenBright.bold(`${p1.name} health is ${p1.health}`))
        if(v1.health<=0) 
        {console.log(chalk.bgGray(`${v1.name} has lost !!!`)); process.exit();}
        }
     }
     if(strategy.act == "Drink Health Portion") {
        p1.healthIncrease()
        console.log(chalk.cyanBright.bold(`${p1.name} health is now ${p1.health}`))
     }
     if(strategy.act == "Run") {
        console.log(chalk.bgBlackBright(`${p1.name} Better Luck next time !!`))
     } 
} 

if(villan.enemy == "Zombie")    { 
    let strategy= await inquirer.prompt({
        name: "act", type:"list",
        message:"Choose an Action:   ",
        choices:["Attack","Drink Health Portion","Run"]
    }); 
     if(strategy.act == "Attack") {
        let num= Math.floor(Math.random()*2)
        if(num ==1) {
            p1.healthDecrease()
        console.log(chalk.redBright.bold(`${p1.name} health is ${p1.health}`))
        console.log(chalk.greenBright.bold(`${v1.name} health is ${v1.health}`))
        if(p1.health<=0) 
        {console.log(chalk.bgRed(`${p1.name} has lost !!!`)); process.exit();}
        }
        else if(num ==0) {
            v1.healthDecrease()
        console.log(chalk.redBright.bold(`${v1.name} health is ${v1.health}`))
        console.log(chalk.greenBright.bold(`${p1.name} health is ${p1.health}`))
        if(v1.health<=0) 
        {console.log(chalk.bgGray(`${v1.name} has lost !!!`)); process.exit();}
        }
     }
     if(strategy.act == "Drink Health Portion") {
        p1.healthIncrease()
        console.log(chalk.cyanBright.bold(`${p1.name} health is now ${p1.health}`))
     }
     if(strategy.act == "Run") {
        console.log(chalk.bgBlackBright(`${p1.name} Better Luck next time !!`))
     } 
} 

if(villan.enemy == "Vishanu")    { 
    let strategy= await inquirer.prompt({
        name: "act", type:"list",
        message:"Choose an Action:   ",
        choices:["Attack","Drink Health Portion","Run"]
    }); 
     if(strategy.act == "Attack") {
        let num= Math.floor(Math.random()*2)
        if(num ==1) {
            p1.healthDecrease()
        console.log(chalk.redBright.bold(`${p1.name} health is ${p1.health}`))
        console.log(chalk.greenBright.bold(`${v1.name} health is ${v1.health}`))
        if(p1.health<=0) 
        {console.log(chalk.bgRed(`${p1.name} has lost !!!`)); process.exit();}
        }
        else if(num ==0) {
            v1.healthDecrease()
        console.log(chalk.redBright.bold(`${v1.name} health is ${v1.health}`))
        console.log(chalk.greenBright.bold(`${p1.name} health is ${p1.health}`))
        if(v1.health<=0) 
        {console.log(chalk.bgGray(`${v1.name} has lost !!!`)); process.exit();}
        }
     }
     if(strategy.act == "Drink Health Portion") {
        p1.healthIncrease()
        console.log(chalk.cyanBright.bold(`${p1.name} health is now ${p1.health}`))
     }
     if(strategy.act == "Run") {
        console.log(chalk.bgBlackBright(`${p1.name} Better Luck next time !!`))
     } 
} 
} while(true)
    






//else if(villan.enemy == "Zombie") {}
//else if(villan.enemy == "Vishanu") {}


