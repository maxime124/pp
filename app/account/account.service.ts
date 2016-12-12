import { Injectable }   from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Account }      from '../class/account';

// Statics
import 'rxjs/add/observable/throw';

// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

var accounts = [new Account('cc',200)
    ,
    new Account('pe',500)];

@Injectable()
export class AccountService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private accountsUrl = 'http://localhost:3000/accounts';

    constructor(private http: Http) { }

    getAccounts(): Promise<Account[]> {
        return this.http.get(this.accountsUrl)
            .toPromise()
            .then(response => response.json() as Account[])
            .catch(this.handleError);

        //return Promise.resolve(accounts);
    }

    create(account: Account): Promise<Account> {
        //accounts.push(account);
        //this.reCalculPercentage();
       // return Promise.resolve(account);
        return this.http.post(this.accountsUrl,account)
            .toPromise()
            .then(response => response.json() as Account)
            .catch(this.handleError);
    }

    reCalculPercentage(): void {
        var liSomme = 0;
        for(let account of accounts) {
            liSomme += account.value.value;
        }

       for(let account of accounts) {
            console.log(account.value,liSomme,(account.value.value/liSomme)*100);
            account.percentage = Math.round((account.value.value/liSomme)*100);
        }
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}