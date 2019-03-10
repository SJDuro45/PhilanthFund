function Account (uname, balance){
  this.name = name;
  this.balance = balance;

  Account.prototype.deposit = function(amount){
    this.balance += amount;
  }

  Account.prototype.transfer = function(amount, account){
    
  }
}
